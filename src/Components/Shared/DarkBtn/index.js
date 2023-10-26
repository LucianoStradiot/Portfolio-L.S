import React from 'react';
import styles from './darkBtn.module.css';
import { useDarkMode } from './darkModeContext';

const darkBtn = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={styles.generalContainer} onClick={handleClick}>
      {isDarkMode ? (
        <>
          <span className={styles.container}>Mode</span>
          <img className={styles.darkMode} src="assets/darkMode.svg" alt="dark-icon" />
        </>
      ) : (
        <>
          <span className={styles.container2}>Mode</span>
          <img className={styles.darkMode} src="assets/lightMode.svg" alt="light-icon" />
        </>
      )}
    </div>
  );
};

export default darkBtn;
