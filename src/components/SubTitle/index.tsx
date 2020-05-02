import React from 'react';

import styles from './styles.module.scss';

interface SubTitleProps {
 title: string,
}

function SubTitle({title}: SubTitleProps) {
  return (
    <h1 className={styles.subtitle}>{title}</h1>
  )
}

export default SubTitle;
