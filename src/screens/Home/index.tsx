import React from 'react';

import './styles.module.scss';
import Header from '../../components/Header';
import ImageHome from '../../components/ImageHome';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <Header />
      <ImageHome />
    </div>
  );
}

export default Home;
