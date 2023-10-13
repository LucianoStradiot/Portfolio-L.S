import React from 'react';
import styles from './darkBtn.module.css';

const darkBtn = ({ onClick, isDarkMode }) => {
  const handleClick = () => {
    onClick && onClick();
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
