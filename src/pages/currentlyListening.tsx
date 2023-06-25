import fetch from 'cross-fetch';
import Head from 'next/head';
import Image from 'next/image';
import {FC, PropsWithChildren, useEffect, useState} from 'react';
import {Textfit} from 'react-textfit';

import OtherHeader from '../components/Sections/OtherHeader';
import {CurrentlyListeningSections} from '../data/data';
import {SectionType} from '../data/dataDef';

interface CurrentlyListeningPayload {
  isPlaying: boolean;
  artist?: string;
  album?: string;
  song?: string;
  thumbnail?: string;
}

interface TrackProps {
  artist: string;
  album: string;
  song: string;
  thumbnail: string;
}

const Track: FC<PropsWithChildren<TrackProps>> = (props: TrackProps) => {
  return (
    <div className="align-center relative flex flex-wrap p-4">
      <Image alt="Image didn't load" className="w-174 h-174 mr-4" height={174} src={props.thumbnail} width={174} />
      <Textfit className="ml-2 text-white" min={20} mode="multi">
        <strong>Artist</strong>: {props.artist}
        <br />
        <strong>Album</strong>: {props.album}
        <br />
        <strong>Song</strong>: {props.song}
      </Textfit>
    </div>
  );
};

const NotCurrentlyListening: FC = () => {
  return (
    <Textfit className="text-white" min={20} mode="single">
      I am not currently listening to anything.
    </Textfit>
  );
};

const CurrentlyListening: FC = () => {
  const [currListening, setCurrListening] = useState<CurrentlyListeningPayload>({isPlaying: false});

  const getCurrentlyListening = async () => {
    const url = '/api/currentlyListening';

    const options = {
      method: 'GET',
    };

    try {
      const resp = await fetch(url, options);
      const j: CurrentlyListeningPayload = await resp.json();
      setCurrListening(j);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCurrentlyListening();

    const interval = setInterval(() => {
      if (!document.hidden) {
        getCurrentlyListening();
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Currently Listening</title>
      </Head>
      <OtherHeader sections={CurrentlyListeningSections as unknown as SectionType[]} />
      <div className="height: 50vh flex h-screen flex-col items-center justify-center">
        <h1 className="height: 100vh text-2xl font-bold text-white">What I'm Currently Listening to</h1>
        {currListening.isPlaying ? (
          <Track
            album={currListening.album!}
            artist={currListening.artist!}
            song={currListening.song!}
            thumbnail={currListening.thumbnail!}
          />
        ) : (
          <NotCurrentlyListening />
        )}
      </div>
    </>
  );
};

export default CurrentlyListening;
