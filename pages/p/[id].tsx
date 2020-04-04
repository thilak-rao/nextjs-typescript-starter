import * as React from 'react';
import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import { NextPageContext, NextPage } from 'next';

type PostProps = {
  show: {
    name: string;
    summary: string;
    image: {
      medium: string;
    };
  };
};

const Post: NextPage<PostProps> = (properties) => (
  <Layout>
    <h1>{properties.show.name}</h1>
    <p>{properties.show.summary.replace(/<\/?[bp]>/g, '')}</p>
    {properties.show.image ? (
      <img src={properties.show.image.medium} alt={properties.show.name} />
    ) : null}
  </Layout>
);

Post.getInitialProps = async function (
  context: NextPageContext
): Promise<PostProps> {
  const { id } = context.query;
  const result = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await result.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;
