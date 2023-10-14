import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './hamburguermenu.module.css';

const HamburguerMenu = ({ darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={styles.menuButton} id="menuButton" onClick={toggleMenu}>
        <div
          className={`${menuOpen ? styles.x1 : styles.bar} ${
            darkMode ? (menuOpen ? styles.darkModex1 : styles.darkModeBar) : ''
          }`}
        ></div>
        <div
          className={`${menuOpen ? styles.x2 : styles.bar} ${
            darkMode ? (menuOpen ? styles.darkModex2 : styles.darkModeBar) : ''
          }`}
        ></div>
        <div
          className={`${menuOpen ? '' : styles.bar} ${
            darkMode ? (menuOpen ? '' : styles.darkModeBar) : ''
          }`}
        ></div>
      </div>
      <nav className={`${menuOpen ? styles.activeMenu : styles.menu}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HamburguerMenu;
