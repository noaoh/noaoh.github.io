import classNames from 'classnames';
import {compareAsc, compareDesc} from 'date-fns';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import React, {ChangeEvent, FC, PropsWithChildren, useEffect, useState} from 'react';

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

const VinylCollection: FC<PropsWithChildren<VinylCollectionProps>> = props => {
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
};

const VinylCollectionPage: FC = () => {
  const [sortOrder, setSortOrder] = useState(SortOrder.ASC);
  const [sortType, setSortType] = useState(SortType.NAME);
  const [vinylCollection, setVinylCollection] = useState<VinylItemProps[]>([]);

  const getVinylCollection = async () => {
    const url = 'https://ch9mysodje.execute-api.us-east-1.amazonaws.com/vinyl-collection';
    const options = {
      method: 'GET',
    };

    try {
      const resp = await fetch(url, options);
      const vinylItems: VinylItemProps[] = await resp.json();
      setVinylCollection(vinylItems);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getVinylCollection();
  }, []);

  const handleSortOrderChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };

  const handleSortTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortType(event.target.value);
  };

  return (
    <>
      <Head>
        <title>My Vinyl Collection</title>
      </Head>
      <OtherHeader sections={VinylCollectionSections as unknown as SectionType[]} />
      <div>
        <br />
        <strong>
          <h1>My Vinyl Collection</h1>
        </strong>
        {vinylCollection.length === 0 ? (
          <p>My vinyl collection is loading.</p>
        ) : (
          <>
            <br />
            <select
              className="block appearance-none rounded border border-gray-400 bg-white py-1 px-10 leading-tight focus:outline-none"
              onChange={handleSortOrderChange}
              value={sortOrder}>
              <option value={SortOrder.ASC}>Ascending</option>
              <option value={SortOrder.DESC}>Descending</option>
            </select>
            <br />
            <select
              className="block appearance-none rounded border border-gray-400 bg-white py-1 px-10 leading-tight focus:outline-none"
              onChange={handleSortTypeChange}
              value={sortType}>
              <option value={SortType.DATE}>Date</option>
              <option value={SortType.NAME}>Name</option>
            </select>
            <br />
            <VinylCollection vinylCollection={orderCollection(vinylCollection, sortType, sortOrder)} />
          </>
        )}
      </div>
    </>
  );
};

export default VinylCollectionPage;
