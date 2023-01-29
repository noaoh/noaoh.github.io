import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import {FC, PropsWithChildren, useEffect, useState} from 'react';

import {VinylCollectionSections} from '../data/data';
import {SectionType} from '../data/dataDef';
import {and} from '../utils';

// eslint-disable-next-line react-memo/require-memo
const OtherHeader = dynamic(() => import('../components/Sections/OtherHeader'), {ssr: false});

interface VinylItemProps {
  thumbnail: string;
  dateAdded: string;
  album: string;
  artists: string[];
  needsBlur: boolean;
}

const VinylItem: FC<PropsWithChildren<VinylItemProps>> = (props: VinylItemProps) => {
  const formattedDate = new Date(props.dateAdded).toLocaleDateString();
  return (
    <div>
      <p>
        <Image className={props.needsBlur ? 'blur-sm' : undefined} alt="Image didn't load" height="150" src={props.thumbnail} width="150" /> <strong>{props.album}</strong>{' '}
        by <strong>{and(props.artists, 'and')}</strong> added to my collection on <strong>{formattedDate}</strong>
      </p>
    </div>
  );
};

const VinylCollection: FC = () => {
  const [vinylCollection, setVinylCollection] = useState<VinylItemProps[]>([]);

  const getVinylCollection = async () => {
    const url = 'https://ch9mysodje.execute-api.us-east-1.amazonaws.com/vinyl-collection';
    const options = {
      method: 'GET',
    };

    try {
      const resp = await fetch(url, options);
      const j: VinylItemProps[] = await resp.json();
      setVinylCollection(j);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getVinylCollection();
  }, []);

  return (
    <>
      <Head>
        <title>My Vinyl Collection</title>
      </Head>
      <OtherHeader sections={VinylCollectionSections as unknown as SectionType[]} />
      <div>
        <strong>
          <h1>My Vinyl Collection</h1>
        </strong>
        {vinylCollection.length === 0 ? (
          <p>My vinyl collection is loading.</p>
        ) : (
          <ol>
            {vinylCollection.map((vinyl, i) => {
              return (
                <li key={i}>
                  <VinylItem
                    album={vinyl.album}
                    artists={vinyl.artists}
                    dateAdded={vinyl.dateAdded}
                    thumbnail={vinyl.thumbnail}
                    needsBlur={vinyl.needsBlur}
                  />
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </>
  );
};

export default VinylCollection;
