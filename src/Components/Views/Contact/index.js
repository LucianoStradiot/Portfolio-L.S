import React, { useState } from 'react';
import styles from './contact.module.css';
import HamburguerMenu from '../../Shared/HamburguerMenu';
import Modal from '../../Shared/Modal';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Shared/Loader';

const Contact = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseModal, setResponseModal] = useState({
    description: '',
    isConfirm: false
  });
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      setResponseModal({
        description: 'Your message was sended succesfully',
        isConfirm: true
      });
    } catch {
      setResponseModal({
        description: 'There was an error. Please try again.',
        isConfirm: false
      });
    }
    setIsLoading(false);
    setIsOpen(true);
  };

  return (
    <>
      {isLoading && <Loader />}
      <main className={styles.main}>
        <div className={styles.container}>
          <HamburguerMenu />
          <Modal
            desc={responseModal.description}
            isOpen={isOpen}
            handleClose={() => (responseModal.isConfirm ? navigate('/') : setIsOpen(false))}
          />
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
                value={formData.name}
                onChange={handleChange}
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
                value={formData.lastName}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label name="message" className={styles.label}>
                Message
              </label>
              <textarea
                cols={22}
                rows={5}
                name="message"
                type="text"
                placeholder="Write your message here"
                value={formData.message}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div>
              <button type="button" className={styles.submitBtn} onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default Contact;
