import fetch from 'cross-fetch';
import Head from 'next/head';
import {FC, PropsWithChildren, useEffect, useState} from 'react';
import {Textfit} from 'react-textfit';

import OtherHeader from '../components/Sections/OtherHeader';
import {CurrentlyListeningSections} from '../data/data';
import {SectionType} from '../data/dataDef';
import {and} from '../utils';

interface CurrentlyListeningPayload {
  isPlaying: boolean;
  type?: string;
  artists?: Array<string>;
  album?: string;
  track?: string;
  episode?: string;
  podcast?: string;
}

interface PodcastProps {
  episode: string;
  podcast: string;
}

interface TrackProps {
  artists: Array<string>;
  album: string;
  track: string;
}

const Podcast: FC<PropsWithChildren<PodcastProps>> = (props: PodcastProps) => {
  return (
    <Textfit className="text-white" min={20} mode="multi">
      I am currently listening to the episode <strong>{props.episode}</strong> from the podcast{' '}
      <strong>{props.podcast}</strong>.
    </Textfit>
  );
};

const Track: FC<PropsWithChildren<TrackProps>> = (props: TrackProps) => {
  return (
    <Textfit className="text-white" min={20} mode="multi">
      I am currently listening to the track <strong>{props.track}</strong> by{' '}
      <strong>{and(props.artists as string[], 'and')}</strong> off of the album <strong>{props.album}</strong>.
    </Textfit>
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
          currListening.type === 'episode' ? (
            <Podcast episode={currListening.episode as string} podcast={currListening.podcast as string} />
          ) : (
            <Track
              album={currListening.album as string}
              artists={currListening.artists as string[]}
              track={currListening.track as string}
            />
          )
        ) : (
          <NotCurrentlyListening />
        )}
      </div>
    </>
  );
};

export default CurrentlyListening;
