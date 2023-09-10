import React, { useState } from 'react';
import styles from './contact.module.css';
import HamburguerMenu from '../../Shared/HamburguerMenu';
import Modal from '../../Shared/Modal';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [responseModal, setResponseModal] = useState({
    description: '',
    isConfirm: false
  });

  const openModalConfirm = () => {
    setResponseModal({
      description: 'Your message was sended succesfully',
      isConfirm: true
    });
    setIsOpen(true);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <HamburguerMenu />
        <Modal desc={responseModal.description} isOpen={isOpen} handleClose={() => navigate('/')} />
        <h2>Contact</h2>
      </div>
      <form>
        <div className={styles.formContainer}>
          <div>
            <label name="name" className={styles.label}>
              Name
            </label>
            <input
              className={styles.input}
              name="name"
              type="text"
              placeholder="Write your name here"
            />
          </div>
          <div>
            <label name="lastName" className={styles.label}>
              Last Name
            </label>
            <input
              className={styles.input}
              name="lastName"
              type="text"
              placeholder="Write your last name here"
            />
          </div>
          <div>
            <label name="email" className={styles.label}>
              Email
            </label>
            <input
              className={styles.input}
              name="email"
              type="text"
              placeholder="Write your email here"
            />
          </div>
          <div>
            <label name="Name" className={styles.label}>
              Message
            </label>
            <textarea
              cols={22}
              rows={5}
              name="Name"
              type="text"
              placeholder="Write your message here"
              className={styles.input}
            />
          </div>
          <div>
            <button type="button" className={styles.submitBtn} onClick={openModalConfirm}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Contact;
