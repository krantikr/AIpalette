import React from 'react';
import Layout from '../layout/Layout';
import GraphContainer from '../components/graph/GraphContainer';
import Product from '../components/product/Product';
import './app.scss';

const App = ({ graphData, graphFilter }) => {


  return (
    <Layout>
      <GraphContainer data={graphData} />
      <div className="similar-products-container">
        <h1>Similar Products</h1>
        <Product />
      </div>
    </Layout>
  )
}

export default App;
