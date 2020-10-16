import React from 'react';
import { Normalize } from 'styled-normalize';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Normalize />
      <Layout>
        <p>body</p>
      </Layout>
    </>
  );
}

export default App;
