import classNames from 'classnames';
import {compareAsc, compareDesc} from 'date-fns';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import React, {ChangeEvent, FC, PropsWithChildren, useEffect, useMemo, useState} from 'react';
import Fuse from 'fuse.js';

import {Select, SelectProps} from '../components/Select';
import {VinylCollectionSections} from '../data/data';
import {SectionType} from '../data/dataDef';
import {and} from '../utils';

// eslint-disable-next-line react-memo/require-memo
const OtherHeader = dynamic(() => import('../components/Sections/OtherHeader'), {ssr: false});

const SortOrder = {
  ASC: 'ASC',
  DESC: 'DESC',
};

const SortType = {
  DATE: 'DATE',
  NAME: 'NAME',
};

const sortByName = (items: VinylItemProps[], order: string): VinylItemProps[] => {
  if (!items || items.length === 0) {
    return [];
  }

  return [...items].sort((a: VinylItemProps, b: VinylItemProps): number => {
    const artistsA = and(a.artists, 'and');
    const artistsB = and(b.artists, 'and');
    if (order === SortOrder.DESC) {
      const compareArtists = artistsA.localeCompare(artistsB);
      return compareArtists === 0 ? a.album.localeCompare(b.album) : compareArtists;
    } else {
      const compareArtists = artistsB.localeCompare(artistsA);
      return compareArtists === 0 ? b.album.localeCompare(a.album) : compareArtists;
    }
  });
};

const sortByDate = (items: VinylItemProps[], order: string): VinylItemProps[] => {
  if (!items || items.length === 0) {
    return [];
  }

  return [...items].sort((a: VinylItemProps, b: VinylItemProps): number => {
    const {dateAdded: dateAddedStringA} = a;
    const {dateAdded: dateAddedStringB} = b;
    const dateAddedA = new Date(dateAddedStringA);
    const dateAddedB = new Date(dateAddedStringB);
    return order === SortOrder.ASC ? compareAsc(dateAddedA, dateAddedB) : compareDesc(dateAddedA, dateAddedB);
  });
};

const orderCollection = (vinylCollection: VinylItemProps[], sortType: string, sortOrder: string) => {
  return sortType === SortType.DATE ? sortByDate(vinylCollection, sortOrder) : sortByName(vinylCollection, sortOrder);
};

interface VinylItemProps {
  thumbnail: string;
  dateAdded: string;
  album: string;
  artists: string[];
  needsBlur: boolean;
}

interface VinylCollectionProps {
  vinylCollection: VinylItemProps[];
  noSearchResults: boolean;
  searchTerm: string;
}

const VinylItem: FC<PropsWithChildren<VinylItemProps>> = (props: VinylItemProps) => {
  const formattedDate = new Date(props.dateAdded).toLocaleDateString();
  return (
    <div className={classNames('relative p-4', 'align-center flex flex-wrap')}>
      <>
        <Image
          alt="Image didn't load"
          className={classNames({'blur-sm': props.needsBlur}, 'w-150 h-150 mr-4')}
          height="150"
          src={props.thumbnail}
          width="150"
        />{' '}
        <p className="ml-2 text-5xl text-white">
          <strong>{props.artists.length === 1 ? 'Artist:' : 'Artists:'}</strong> {and(props.artists, 'and')}
          <br />
          <strong>Album:</strong> {props.album}
          <br />
          <strong>Date Added:</strong> {formattedDate}
        </p>
      </>
    </div>
  );
};

const VinylCollection: FC<PropsWithChildren<VinylCollectionProps>> = (props) => {
  if (props.vinylCollection.length === 0 && !props.noSearchResults) {
    return <p>My vinyl collection is loading.</p>
  } else if (props.vinylCollection.length !== 0) {
    return (
      <ol>
        {props.vinylCollection.map((vinyl, i) => {
          return (
            <li key={i}>
              <VinylItem
                album={vinyl.album}
                artists={vinyl.artists}
                dateAdded={vinyl.dateAdded}
                needsBlur={vinyl.needsBlur}
                thumbnail={vinyl.thumbnail}
              />
            </li>
          );
        })}
      </ol>
    );
  } else {
    return <p>There are no results for the search '{props.searchTerm}'.  Try backspacing or searching for another search term.</p>
  }
};

const processFuseSearchResults = (searchResults: any)  => {
    return [...searchResults].sort((a, b) => a.refIndex - b.refIndex).map((i) => i.item);
}

const fuse = new Fuse([], {
  threshold: 0.2,
  keys: [
      "album",
      "artists"
  ],
})

const VinylCollectionPage: FC = () => {
  const [sortOrder, setSortOrder] = useState(SortOrder.ASC);
  const [sortType, setSortType] = useState(SortType.NAME);
  const [vinylCollection, setVinylCollection] = useState<VinylItemProps[]>([]);
  const [originalVinylCollection, setOriginalVinylCollection] = useState<VinylItemProps[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const noSearchResults = useMemo(() => originalVinylCollection.length !== 0, [originalVinylCollection]);

  const getVinylCollection = async () => {
    const url = 'https://ch9mysodje.execute-api.us-east-1.amazonaws.com/vinyl-collection';
    const options = {
      method: 'GET',
    };

    try {
      const resp = await fetch(url, options);
      const vinylItems: VinylItemProps[] = await resp.json();
      const sortedVinylItems = orderCollection(vinylItems, sortType, sortOrder);
      setVinylCollection(sortedVinylItems);
      setOriginalVinylCollection(sortedVinylItems);
      fuse.setCollection(originalVinylCollection as unknown as never[]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getVinylCollection();
  }, []);

  const fuseSearch = (vinylCollection: VinylItemProps[], searchTerm: string) => {
    if (searchTerm === '') {
      return vinylCollection;
    } else {
      fuse.setCollection(vinylCollection as unknown as never[]);
      const searchResults = processFuseSearchResults(fuse.search(searchTerm));
      if (searchResults.length === 0) {
        fuse.setCollection(originalVinylCollection as unknown as never[]);
        return searchResults;
      } else {
        fuse.setCollection(searchResults as unknown as never[]);
        return searchResults;
      }
    }
  }

  const handleSortOrderChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };

  const handleSortTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortType(event.target.value);
  };

  const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const sortOrderProps: Omit<SelectProps, 'value'> = {
    handleChange: handleSortOrderChange,
    options: [
      {label: 'Ascending', value: 'ASC'},
      {label: 'Descending', value: 'DESC'},
    ],
  };

  const sortTypeProps: Omit<SelectProps, 'value'> = {
    handleChange: handleSortTypeChange,
    options: [
      {label: 'Name', value: 'NAME'},
      {label: 'Date Added', value: 'DATE'},
    ],
  };

  return (
    <>
      <Head>
        <title>My Vinyl Collection</title>
      </Head>
      <OtherHeader sections={VinylCollectionSections as unknown as SectionType[]} />
      <br />
      <br />
      <br />
      <Select handleChange={sortOrderProps.handleChange} options={sortOrderProps.options} value={sortOrder} />
      <br />
      <Select handleChange={sortTypeProps.handleChange} options={sortTypeProps.options} value={sortType} />
      <br />
      <input type="text" onChange={handleSearchTermChange} placeholder='Search my vinyl collection!' />
      <VinylCollection searchTerm={searchTerm} noSearchResults={noSearchResults} vinylCollection={orderCollection(fuseSearch(vinylCollection, searchTerm), sortType, sortOrder)} />
    </>
  );
};

export default VinylCollectionPage;
