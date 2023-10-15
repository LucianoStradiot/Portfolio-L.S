import React from 'react';
import styles from './darkBtn.module.css';
import { useDarkMode } from './darkModeContext';

const darkBtn = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div onClick={handleClick}>
      {isDarkMode ? (
        <img className={styles.darkMode} src="assets/darkMode.svg" />
      ) : (
        <img className={styles.lightMode} src="assets/lightMode.svg" />
      )}
    </div>
  );
};

export default darkBtn;
