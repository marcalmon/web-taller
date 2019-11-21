import React, { Fragment } from 'react';

import styles from './styles.module.scss';
import logo from '../../assets/logo.svg';

function Header() {
  return (
    <Fragment>
      <nav className={styles['nav-container']}>
        <img src={logo} className={styles['nav-img']} />
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
