import React from 'react';

import styles from './styles.module.scss';

// interface ServiceSquareProps {
//   icon: any,
//   text: any
// }

function ServicesSquare({icon = '', text = ''}) {
  return (
    <div className={styles['square-container']}>
      <figure>
        <img src={icon} alt="Trulli" />
        <figcaption>{text}</figcaption>
      </figure>
    </div>
  )
}

export default ServicesSquare;
