import Head from 'next/head';
import React, {ChangeEvent, FC, PropsWithChildren, useEffect, useMemo, useState} from 'react';
import { GithubStarsSections } from '../data/data';
import { SectionType } from '../data/dataDef';

import Header from '../components/Sections/OtherHeader';

const RepoCard = ({ repo }) => {
  const { htmlUrl, description, name, fullName, stargazersCount } = repo;
  
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-black">
      <div className="font-bold text-xl mb-2 text-white">{name}</div>
      <p className="text-gray-300 text-base mb-4">
        {description}
      </p>
      <p className="text-sm text-gray-400 mb-4">Full Name: {fullName}</p>
      <div className="flex items-center justify-between">
        <a href={htmlUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
          View Repository
        </a>
        <div className="flex items-center">
          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.396 2.465a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.397-2.466a1 1 0 00-1.175 0l-3.397 2.466c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.043 9.402c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.975z" />
          </svg>
          <span className="ml-2 text-gray-300">{stargazersCount}</span>
        </div>
      </div>
    </div>
  );
};

const GithubStarsListPage: FC = () => {
  const [githubStarsList, setGithubStarsList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('/api/githubStars');
        if (!resp.ok) {
          console.error(resp);
          setHasError(true);
        }

        const result = await resp.json();
        setGithubStarsList(result);
      } catch (err) {
        console.error(err);
        setHasError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [])

  if (loading) {
    return <p>Loading...</p>;
  } else if (hasError) {
    return <p>An error occurred while retrieving my github stars</p>;
  }

  return (
    <>
      <Head>
        <title>My Github Stars</title>
      </Head>
      <Header sections={GithubStarsSections as unknown as SectionType[]} />
      <br />
      <ol className="mt-20">
      {githubStarsList.map((item) => {
        const { nodeId } = item;
        return (
          <li key={nodeId} className="mb-5">
            <RepoCard repo={item} />
          </li>
        )
      })}
      </ol>
    </>
  );
}

export default GithubStarsListPage;
