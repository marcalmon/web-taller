import React from 'react';

import styles from './styles.module.scss';

interface SquareProps {
 image: string,
}

function Square({image}: SquareProps) {
  return (
    <div className={styles['image-container']} />
  )
}

export default Square;
