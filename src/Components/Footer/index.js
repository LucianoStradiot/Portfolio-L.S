import React from 'react';
import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© Luciano Stradiot</p>
        <div className={styles.subContainer}>
          <a
            href="https://www.linkedin.com/in/luciano-stradiot-343a98142/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="assets/linkedin.png" className={styles.images} />
          </a>
          <a href="https://github.com/LucianoStradiot" target="_blank" rel="noreferrer">
            <img src="assets/github.png" className={styles.images} />
          </a>
          <a href="https://www.instagram.com/luchostradiot/" target="_blank" rel="noreferrer">
            <img src="assets/instagram.png" className={styles.images} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100094383460961"
            target="_blank"
            rel="noreferrer"
          >
            <img src="assets/facebook.png" className={styles.images} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
