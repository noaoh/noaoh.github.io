import {NextApiRequest, NextApiResponse} from 'next';

const NOW_PLAYING_URL = 'https://api.spotify.com/v1/me/player/currently-playing?additional_types=track%2Cepisode';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

const getAccessToken = async (clientId: string, clientSecret: string, refreshToken: string) => {
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const reqBody = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
  });

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${basic}`,
    },
    body: reqBody.toString(),
  });

  if (response.status !== 200) {
    throw new Error('Failed to get access token for spotify');
  } else {
    return response.json();
  }
};

const getCurrentlyListening = async (clientId: string, clientSecret: string, refreshToken: string) => {
  const {access_token: accessToken} = await getAccessToken(clientId, clientSecret, refreshToken);

  const response = await fetch(NOW_PLAYING_URL, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
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
  if (!data.is_playing) {
    return {
      isPlaying: false,
    };
  }

  const type = data.currently_playing_type;
  if (type === 'track') {
    const artists = data.item.artists.map((artist: any) => artist.name);
    const album = data.item.album.name;
    const track = data.item.name;
    return {
      isPlaying: true,
      artists,
      album,
      track,
      type,
    };
  } else if (type === 'episode') {
    const podcast = data.item.show.name;
    const episode = data.item.name;
    return {
      isPlaying: true,
      podcast,
      episode,
      type,
    };
  } else {
    throw new Error('Unknown currently playing type');
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    SPOTIFY_CLIENT_ID: clientId,
    SPOTIFY_CLIENT_SECRET: clientSecret,
    SPOTIFY_REFRESH_TOKEN: refreshToken,
  } = process.env;
  if (req.method !== 'GET') {
    res.status(405);
  } else {
    try {
      const currentlyListening = await getCurrentlyListening(clientId!, clientSecret!, refreshToken!);
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
