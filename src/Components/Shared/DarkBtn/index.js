import React from 'react';
import styles from './darkBtn.module.css';

const darkBtn = ({ onClick, isDarkMode }) => {
  const handleClick = () => {
    onClick && onClick(); // Llama a la función onClick si está definida
  };

  return (
    <button
      className={isDarkMode ? `${styles.darkMode}` : `${styles.lightMode}`}
      onClick={handleClick}
    >
      {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
    </button>
  );
};

export default darkBtn;
