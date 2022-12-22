import fetch from 'cross-fetch';
import Head from 'next/head';
import {FC, PropsWithChildren, useEffect, useState} from 'react';

// Adapted from https://github.com/rasshofer/and
const and = (data: Array<string>, separator = '&', oxfordComma = false) => {
  const items = data.length;
  const lastItem = data.pop();
  if (data.length) {
    return `${data.join(', ')}${oxfordComma && items > 2 ? ',' : ''} ${separator} ${lastItem}`.trim();
  } else {
    return lastItem;
  }
};

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
    <div>
      <p>
        I am currently listening to the episode <strong>{props.episode}</strong> from the podcast{' '}
        <strong>{props.podcast}</strong>.
      </p>
    </div>
  );
};

const Track: FC<PropsWithChildren<TrackProps>> = (props: TrackProps) => {
  return (
    <div>
      <p>
        I am currently listening to the track <strong>{props.track}</strong> by{' '}
        <strong>{and(props.artists as string[], 'and')}</strong> off of the album <strong>{props.album}</strong>.
      </p>
    </div>
  );
};

const NotCurrentlyListening: FC = () => {
  return (
    <div>
      <p>I am not currently listening to anything.</p>
    </div>
  );
};

const CurrentlyListening: FC = () => {
  const [currListening, setCurrListening] = useState<CurrentlyListeningPayload>({isPlaying: false});

  const getCurrentlyListening = async () => {
    const url = 'https://3h2fle7snh.execute-api.us-east-1.amazonaws.com/currently-listening';

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
      getCurrentlyListening();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Currently Listening</title>
      </Head>
      <h1>What I'm Currently Listening to</h1>
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
    </>
  );
};

export default CurrentlyListening;
