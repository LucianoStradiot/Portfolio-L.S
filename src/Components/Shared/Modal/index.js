import React from 'react';
import styles from './modal.module.css';
import { useDarkMode } from '../DarkBtn/darkModeContext';

const Modal = ({ title, desc, isOpen, handleClose, confirmModal, activeFunction }) => {
  const { isDarkMode } = useDarkMode();

  return isOpen ? (
    confirmModal ? (
      <div className={styles.modal}>
        <div className={styles.modalContainer}>
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className={styles.btnsContainer}>
            <button className={`${styles.buttonConfirm} ${styles.button}`} onClick={activeFunction}>
              Yes🎧!
            </button>
            <button className={`${styles.buttonCancel} ${styles.button}`} onClick={handleClose}>
              No &#129323;
            </button>
          </div>
        </div>
      </div>
    ) : (
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
    )
  ) : null;
};

export default Modal;
