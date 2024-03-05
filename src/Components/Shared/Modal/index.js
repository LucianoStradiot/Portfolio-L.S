import React from 'react';
import styles from './modal.module.css';
import { useDarkMode } from '../DarkBtn/darkModeContext';

const Modal = ({ title, desc, isOpen, handleClose }) => {
  const { isDarkMode } = useDarkMode();

  return isOpen ? (
    <div className={styles.modal}>
      <div className={`${isDarkMode ? styles.darkModalContainer : styles.modalContainer}`}>
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className={styles.btnContainer}>
          <button className={`${styles.buttonConfirm} ${styles.button}`} onClick={handleClose}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
