import React from 'react';
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.subContainer}>
        <h3 className={styles.nameStyle}>Luciano Stradiot</h3>
        <p className={styles.ocupationStyle}>Full Stack Developer</p>
      </div>
      <div className={styles.subContainer}>
        <img src="assets/profilePhoto.jpeg" className={styles.photo} />
      </div>
    </header>
  );
}

export default Header;
