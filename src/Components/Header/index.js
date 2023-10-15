import React from 'react';
import styles from './header.module.css';
import { useDarkMode } from '../Shared/DarkBtn/darkModeContext';

function Header() {
  const { isDarkMode } = useDarkMode();

  return (
    <header className={`${isDarkMode ? styles.darkContainer : styles.container}`}>
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
