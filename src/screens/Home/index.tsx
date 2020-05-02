import React from 'react';

import styles from './styles.module.scss';
import Header from '../../components/Header';
import ImageHome from '../../components/ImageHome';
import ServicesSquare from '../../components/ServicesSquare';

import pintura from '../../assets/spray-gun.svg';
import autopartes from '../../assets/car-parts.svg';
import mecanica from '../../assets/tools.svg';
import auto from '../../assets/auto.jpeg';

const Home: React.FC = () => {
  return (
    <div className={styles['home']}>
      <Header />
      <ImageHome />
      <div className={styles['home-we']}>
      <h1>NOSOTROS</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatibus eveniet temporibus quia illo inventore dolorum vel molestias mollitia asperiores, vitae veniam sint reiciendis. Dolorem amet magni placeat sequi voluptas. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, doloribus officia commodi optio tempora unde neque excepturi quaerat obcaecati assumenda ab quae cumque eum modi, quam deserunt. Aut, molestias repellat.</p>
      </div>
      <div className={styles['home-services']}>
        <h1>SERVICIOS</h1>
        <div className={styles['services-square']}>
          <ServicesSquare icon={pintura} text="CHAPA Y PINTURA" />
          <ServicesSquare icon={autopartes} text="VENTA DE AUTOPARTES RESTAURADAS" />
          <ServicesSquare icon={mecanica} text="MECANICA INTEGRAL" />
        </div>
      </div>
      <div className={styles['home-galery']}>
        <img src={auto} alt="" />
      </div>
    </div>
  );
}

export default Home;
