import React, { Fragment } from 'react';

import styles from './styles.module.scss';
import logo from '../../assets/PAGINA.svg';

function Header() {
  return (
    <Fragment>
      <nav className={styles['nav-container']}>
        <img src={logo} className={styles['nav-img']} alt="" />
        <ul className={styles['nav-list']}>
          <li>HOME</li>
          <li>NOSOTROS</li>
          <li>SERVICIOS</li>
          <li>GALERIA</li>
          <li>CONTACTO</li>
        </ul>
      </nav>
    </Fragment>
  )
}

export default Header;
