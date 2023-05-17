import {NextApiRequest, NextApiResponse} from 'next';

const getCurrentlyListening = async (lastFmUser: string, lastfmApiKey: string) => {
  const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastFmUser}&api_key=${lastfmApiKey}&format=json`, {
    method: 'GET',
  });

  if (response.status !== 200) {
    return {
      data: {
        is_playing: false,
      },
    };
  } else {
    return response.json();
  }
};

const parseCurrentlyListening = (data: any) => {
  const { recenttracks } = data;
  const { track } = recenttracks;
  const { artist, album, image, name, '@attr': attr } = track[0];
  let nowplaying = false;
  if (attr) {
    nowplaying = attr.nowplaying;
  }
  const thumbnail = image[2]['#text'];
  if (!nowplaying) {
    return {
      isPlaying: false,
    };
  } else {
    return {
      isPlaying: true,
      artist: artist['#text'],
      album: album['#text'],
      song: name,
      thumbnail
    };
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405);
  } else {
    const { LASTFM_API_KEY: lastfmApiKey, LASTFM_USER: lastfmUser } = process.env;
    try {
      const currentlyListening = await getCurrentlyListening(lastfmUser!, lastfmApiKey!);
      const parsedCurrentlyListening = parseCurrentlyListening(currentlyListening);
      res.status(200);
      res.json(parsedCurrentlyListening);
    } catch (err) {
      console.error(err);
      res.status(200);
      res.json({
        isPlaying: false,
      });
    }
  }
}
