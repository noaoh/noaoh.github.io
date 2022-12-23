import Head from 'next/head';
import Image from 'next/image';
import {FC, PropsWithChildren, useEffect, useState} from 'react';

import {and} from '../utils';

interface VinylItemProps {
  thumbnail: string;
  dateAdded: string;
  album: string;
  artists: string[];
}

const VinylItem: FC<PropsWithChildren<VinylItemProps>> = (props: VinylItemProps) => {
  return (
    <div>
      <p>
        <Image alt="Image didn't load" height="100" src={props.thumbnail} width="100" />{' '}
        <strong>{and(props.artists, 'and')}</strong> - <strong>{props.album}</strong>
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
      <div>
        <strong>
          <h1>My Vinyl Collection</h1>
        </strong>
        <ol>
          {vinylCollection &&
            vinylCollection.map((vinyl, i) => {
              return (
                <li key={i}>
                  <VinylItem
                    album={vinyl.album}
                    artists={vinyl.artists}
                    dateAdded={vinyl.dateAdded}
                    thumbnail={vinyl.thumbnail}
                  />
                </li>
              );
            })}
        </ol>
      </div>
    </>
  );
};

export default VinylCollection;
