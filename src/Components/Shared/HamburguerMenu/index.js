import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './hamburguermenu.module.css';

function HamburguerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={styles.menuButton} id="menuButton" onClick={toggleMenu}>
        <div className={`${menuOpen ? styles.x1 : styles.bar}`}></div>
        <div className={`${menuOpen ? styles.x2 : styles.bar}`}></div>
        <div className={`${menuOpen ? '' : styles.bar}`}></div>
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
}

export default HamburguerMenu;
