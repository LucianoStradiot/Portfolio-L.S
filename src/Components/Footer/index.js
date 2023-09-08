import React, { useState } from 'react';
import styles from './footer.module.css';
import WspButton from '../Shared/WspButton';

function Footer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  const togglePlay = () => {
    const audioElement = audioRef.current;

    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <footer className={styles.footer}>
      <WspButton />
      <div className={styles.container}>
        <a
          href="https://www.linkedin.com/in/luciano-stradiot-343a98142/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="assets/linkedin.png" className={styles.images} />
        </a>
        <a href="https://github.com/LucianoStradiot" target="_blank" rel="noreferrer">
          <img src="assets/github.png" className={styles.images} />
        </a>
        <a href="https://www.instagram.com/luchostradiot/" target="_blank" rel="noreferrer">
          <img src="assets/instagram.png" className={styles.images} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100094383460961"
          target="_blank"
          rel="noreferrer"
        >
          <img src="assets/facebook.png" className={styles.images} />
        </a>
        <div onClick={togglePlay}>
          {isPlaying ? (
            <img src="assets/pause.svg" className={`${styles.pause} ${styles.images}`} alt="" />
          ) : (
            <img src="assets/play.svg" className={`${styles.play} ${styles.images}`} alt="" />
          )}
          <audio ref={audioRef} onLoadedData={() => setIsPlaying(false)}>
            <source src="/synthwave.mp3" type="audio/mp3" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
