import React from 'react';

import styles from './styles.module.scss';

import SubTitle from '../../../../components/SubTitle';
import Square from '../../../../components/Square';
import auto from '../../../../assets/auto.jpeg';


// interface GalleryProps {
//   icon: string,
//   text: string,
// }

function Gallery() {
  return (
    <section className={styles['gallery-container']}>
        <SubTitle title={'GALERIA'} />
        <div className={styles.gallery}>
          <Square image={auto} />
          <Square image={auto} />
          <Square image={auto} />
          <Square image={auto} />
          <Square image={auto} />
          <Square image={auto} />
          <Square image={auto} />
          <Square image={auto} />
        </div>
      </section>
  )
}

export default Gallery;
