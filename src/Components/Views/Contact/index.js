import React from 'react';
import styles from './contact.module.css';
import HamburguerMenu from '../../Shared/HamburguerMenu';

function Contact() {
  return (
    <div className={styles.container}>
      <h2>Contact</h2>
      <HamburguerMenu />
    </div>
  );
}

export default Contact;
