import React from 'react';
import styles from './home.module.css';
import HamburguerMenu from '../../Shared/HamburguerMenu';

function Home() {
  return (
    <section>
      <div className={styles.container}>
        <h2>Welcome</h2>
        <HamburguerMenu />
      </div>
    </section>
  );
}

export default Home;
