import React from 'react';
import styles from './loader.module.css';

const Loader = () => {
  return (
    <div className={styles.spinnerContainer}>
      <img className={styles.spinner} src={`${process.env.PUBLIC_URL}/assets/loader.svg`} />
    </div>
  );
};

export default Loader;
