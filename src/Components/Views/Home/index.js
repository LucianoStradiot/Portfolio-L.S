import React, { useState } from 'react';
import styles from './home.module.css';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section>
      <div className={styles.container}>
        <h2>Welcome</h2>
        <div className={styles.menuButton} id="menuButton" onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <nav className={` ${menuOpen ? styles.activeMenu : styles.menu}`}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Home;
