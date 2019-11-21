import React from 'react';

import './styles.module.scss';
import Header from '../../components/Header';
import ImageHome from '../../components/ImageHome';
import ServicesSquare from '../../components/ServicesSquare';

import pintura from '../../assets/spray-gun.svg';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <Header />
      <ImageHome />
      <ServicesSquare icon={pintura} />
    </div>
  );
}

export default Home;
