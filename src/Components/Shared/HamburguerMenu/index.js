import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './hamburguermenu.module.css';
import { useDarkMode } from '../DarkBtn/darkModeContext';

const HamburguerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode } = useDarkMode();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={styles.menuButton} id="menuButton" onClick={toggleMenu}>
        <div
          className={`${menuOpen ? styles.x1 : styles.bar} ${
            isDarkMode ? (menuOpen ? styles.darkModex1 : styles.darkModeBar) : ''
          }`}
        ></div>
        <div
          className={`${menuOpen ? styles.x2 : styles.bar} ${
            isDarkMode ? (menuOpen ? styles.darkModex2 : styles.darkModeBar) : ''
          }`}
        ></div>
        <div
          className={`${menuOpen ? '' : styles.bar} ${
            isDarkMode ? (menuOpen ? '' : styles.darkModeBar) : ''
          }`}
        ></div>
      </div>
      <nav
        className={`${menuOpen ? styles.activeMenu : styles.menu} ${
          isDarkMode ? (menuOpen ? styles.darkActiveMenu : styles.darkMenu) : ''
        }`}
      >
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
