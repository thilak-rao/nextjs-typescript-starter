import * as React from 'react';
import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';

export type IndexProps = {
  shows: ObjectWithParams<AnyType>[];
};

const Index: NextPage<IndexProps> = (properties) => {
  return (
    <Layout>
      <h1>Batman TV Shows</h1>
      <ul>
        {properties.shows.map((show) => (
          <li key={show.id}>
            <Link href="/p/[id]" as={`/p/${show.id}`}>
              <a href="/p/[id]">{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

Index.getInitialProps = async function (): Promise<IndexProps> {
  const result = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await result.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map((entry: AnyType) => entry.show),
  };
};

export default Index;
