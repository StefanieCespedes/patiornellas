import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { css } from '@emotion/core';
import Hero from '../components/hero';

import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';

export default () => {
  const posts = usePosts();
  return (
    <>
      <Layout>
      <p>this is gatsby crazyness</p>
      <Link to="/about">&larr; back to about</Link>

      <h2>Read my blog</h2>
      {posts.map(p => (
        <PostPreview key={p.slug} post={p} />
      ))}
      </Layout>
    </>
  );
};
