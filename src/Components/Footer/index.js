import React, { useRef, useState, useEffect } from 'react';
import styles from './footer.module.css';
import Modal from '../Shared/Modal';
import WspButton from '../Shared/WspButton';
import { useDarkMode } from '../Shared/DarkBtn/darkModeContext';

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = useDarkMode();
  const [responseModal, setResponseModal] = useState({
    title: '',
    description: '',
    isConfirm: false
  });

  const openModalConfirm = () => {
    setResponseModal({
      title: 'Welcome!',
      description: 'Do you want to listen some music?',
      isConfirm: true
    });
    setIsOpen(true);
  };

  const togglePlay = () => {
    const audioElement = audioRef.current;

    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    openModalConfirm();
  }, []);

  return (
    <footer className={`${isDarkMode ? styles.darkFooter : styles.footer}`}>
      <WspButton />
      <Modal
        title={responseModal.title}
        desc={responseModal.description}
        isOpen={isOpen}
        confirmModal={responseModal.isConfirm}
        handleClose={() => setIsOpen(!isOpen)}
        activeFunction={() => togglePlay(setIsOpen(!isOpen))}
      />
      <div className={styles.container}>
        <p className={`${isDarkMode ? styles.darkCopyright : styles.copyright}`}>
          © Luciano Stradiot 2023
        </p>
        <div className={styles.subContainer}>
          <a
            href="https://www.linkedin.com/in/luciano-stradiot-343a98142/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="assets/linkedin.png" className={styles.images} alt="linkedin-icon" />
          </a>
          <a href="https://github.com/LucianoStradiot" target="_blank" rel="noreferrer">
            <img src="assets/github.png" className={styles.images} alt="github-icon" />
          </a>
          <a href="https://www.instagram.com/luchostradiot/" target="_blank" rel="noreferrer">
            <img src="assets/instagram.png" className={styles.images} alt="instagram-icon" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100094383460961"
            target="_blank"
            rel="noreferrer"
          >
            <img src="assets/facebook.png" className={styles.images} alt="facebook-icon" />
          </a>
          <span onClick={togglePlay}>
            {isPlaying ? (
              <img
                src="assets/pause.svg"
                className={`${isDarkMode ? styles.darkPause : styles.pause} ${styles.images}`}
                alt="pause"
              />
            ) : (
              <img
                src="assets/play.svg"
                className={`${isDarkMode ? styles.darkPlay : styles.play} ${styles.images}`}
                alt="play"
              />
            )}
            <audio ref={audioRef} onLoadedData={() => setIsPlaying(false)} loop>
              <source src="/synthwave.mp3" type="audio/mp3" />
              Tu navegador no soporta el elemento de audio.
            </audio>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
