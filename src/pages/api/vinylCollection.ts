import {NextApiRequest, NextApiResponse} from 'next';
import {v4 as uuid} from 'uuid';

async function getVinylCollection() {
  const baseUrl = 'https://api.discogs.com/';
  const user = process.env.DISCOGS_USER;
  const endpoint = `users/${user}/collection/folders/0/releases`;
  const url = `${baseUrl}${endpoint}`;

  const token = process.env.DISCOGS_TOKEN;
  const options = {
    method: 'GET',
    headers: {
      'User-Agent': 'NoahHoltPersonalWebsite',
      Authorization: `Discogs token=${token}`,
    },
  };

  const resp = await fetch(url, options);
  if (resp.status !== 200) {
    throw new Error('Unable to retrieve vinyl collection from Discogs');
  }
  return resp.json();
}

function parseVinylCollection(vinylCollection: any) {
  if (!vinylCollection.releases) {
    return [];
  }

  return vinylCollection.releases.map((release: any) => {
    const {date_added: dateAdded} = release;
    const {title, thumb, artists} = release.basic_information;
    const artistsArr = artists.map((artist: any) => (artist.name === 'Duster (2)' ? 'Duster' : artist.name));
    artistsArr.sort((a: string, b: string) => a.localeCompare(b));

    return {
      id: uuid(),
      item: {
        dateAdded,
        album: title,
        artists: artistsArr,
        thumbnail: thumb,
        needsBlur: title === 'The Money Store',
      },
    };
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405);
  } else {
    try {
      const vinylCollection = await getVinylCollection();
      const parsedVinylCollection = parseVinylCollection(vinylCollection);
      res.status(200);
      res.json(parsedVinylCollection);
    } catch (e) {
      console.error(e);
      res.status(500);
      res.json({error: 'unable to retrieve vinyl collection'});
    }
  }
}
