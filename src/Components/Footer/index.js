import React from 'react';
import styles from './footer.module.css';
import WspButton from '../Shared/WspButton';
import { useDarkMode } from '../Shared/DarkBtn/darkModeContext';

const Footer = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <footer className={`${isDarkMode ? styles.darkFooter : styles.footer}`}>
      <WspButton />
      <div className={styles.container}>
        <p className={`${isDarkMode ? styles.darkCopyright : styles.copyright}`}>
          © Luciano Stradiot 2023
        </p>
        <div className={styles.subContainer}>
          <a
            href="https://www.linkedin.com/in/luciano-stradiot-343a98142/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="assets/linkedin.png" className={styles.images} alt="linkedin-icon" />
          </a>
          <a href="https://github.com/LucianoStradiot" target="_blank" rel="noreferrer">
            <img src="assets/github.png" className={styles.images} alt="github-icon" />
          </a>
          <a href="https://www.instagram.com/luchostradiot/" target="_blank" rel="noreferrer">
            <img src="assets/instagram.png" className={styles.images} alt="instagram-icon" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100094383460961"
            target="_blank"
            rel="noreferrer"
          >
            <img src="assets/facebook.png" className={styles.images} alt="facebook-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
