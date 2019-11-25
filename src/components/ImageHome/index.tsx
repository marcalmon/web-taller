import React from 'react';

import styles from './styles.module.scss';

function ImageHome() {
  return (
    <div className={styles['image-container']}>
      <p className={styles['image-text']}>Calidad en carrocería y pintura para tu auto.</p>
      <div className={styles['buttons-container']}>
        <button>SERVICIOS</button>
        <button>CONTACTO</button>
      </div>
    </div>
  )
}

export default ImageHome;
