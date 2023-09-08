import React from 'react';
import styles from './modal.module.css';

const Modal = ({ title, desc, isOpen, handleClose, confirmModal, activeFunction }) => {
  return isOpen ? (
    confirmModal ? (
      <div className={styles.modal}>
        <div className={styles.modalContainer}>
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className={styles.btnsContainer}>
            <button onClick={activeFunction}>Yes🎧!</button>
            <button onClick={handleClose}>No &#129323;</button>
          </div>
        </div>
      </div>
    ) : (
      <div className={styles.modal}>
        <div className={styles.modalContainer}>
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className={styles.btnContainer}>
            <button onClick={handleClose}></button>
          </div>
        </div>
      </div>
    )
  ) : null;
};

export default Modal;
