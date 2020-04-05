import React from 'react';

import styles from './styles.module.scss';
import Header from '../../components/Header';
import ImageHome from '../../components/ImageHome';
import SubTitle from '../../components/SubTitle';
import ServicesSquare from '../../components/ServicesSquare';
import Gallery from './components/Gallery';

import pintura from '../../assets/spray-gun.svg';
import autopartes from '../../assets/car-parts.svg';
import mecanica from '../../assets/tools.svg';
import auto from '../../assets/auto.jpeg';

const Home: React.FC = () => {
  return (
    <div className={styles['home']}>
      <Header />
      <ImageHome />
      <section>
        <SubTitle title={'NOSOTROS'} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur alias officia ut, excepturi quia consectetur, non doloribus dolores debitis sequi maxime quae animi, consequatur optio? Quidem ut eveniet animi vero!</p>
      </section>
      <section className={styles['home-services']}>
        <SubTitle title={'SERVICIOS'} />
        <div className={styles.services}>
          <ServicesSquare icon={pintura} text="CHAPA Y PINTURA" />
          <ServicesSquare icon={autopartes} text="VENTA DE AUTOPARTES RESTAURADAS" />
          <ServicesSquare icon={mecanica} text="MECANICA INTEGRAL" />  
        </div>
      </section>
      <Gallery />
    </div>
  );
}

export default Home;
