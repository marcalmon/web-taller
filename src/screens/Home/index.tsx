import React from 'react';

import styles from './styles.module.scss';
import Header from '../../components/Header';
import ImageHome from '../../components/ImageHome';
import ServicesSquare from '../../components/ServicesSquare';

import pintura from '../../assets/spray-gun.svg';
import autopartes from '../../assets/lug.svg';
import mecanica from '../../assets/tools.svg';

const Home: React.FC = () => {
  return (
    <div className={styles['home']}>
      <Header />
      <ImageHome />
      <h1>NOSOTROS</h1>
      <div className={styles['home-services']}>
        <h1>SERVICIOS</h1>
        <ServicesSquare icon={pintura} text="CHAPA Y PINTURA" />
        <ServicesSquare icon={autopartes} text="VENTA DE AUTOPARTES RESTAURADAS" />
        <ServicesSquare icon={mecanica} text="MECANICA INTEGRAL" />  
      </div>
    </div>
  );
}

export default Home;
