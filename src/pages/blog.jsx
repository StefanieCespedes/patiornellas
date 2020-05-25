import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Blog</h1>
    <p>Aqui falo um pouco</p>
    <Link to="/">&rarr; back to home</Link>
  </Layout>
);
