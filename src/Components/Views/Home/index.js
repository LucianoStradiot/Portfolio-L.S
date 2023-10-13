import React, { useState } from 'react';
import styles from './home.module.css';
import HamburguerMenu from '../../Shared/HamburguerMenu';
import DarkBtn from '../../Shared/DarkBtn';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main className={`${isDarkMode ? styles.darkMode : styles.main}`}>
      <div className={styles.container}>
        <HamburguerMenu />
        <h2>Welcome</h2>
        <DarkBtn onClick={toggleDarkMode} isDarkMode={isDarkMode} />
      </div>
      <section>
        <div className={styles.boxParagraph}>
          <p className={styles.paragraph}>
            My name is Luciano and I am currently in my second year of a Software Development
            collegue carrer and I have just graduated as a Full Stack Developer from the Bootcamp
            `Become a Software Professional` of the company Radium Rocket. My main interest is to
            continue developing myself in the world of programming, software and application
            development.
          </p>
        </div>
      </section>
      <section>
        <div className={styles.containerTechnologies}>
          <h2>Technologies</h2>
          <div className={styles.wraperTechnologies}>
            <div className={styles.technologies1}>
              <img src="assets/html5.svg" className={styles.icons} alt="HTML5" />
              <img src="assets/css3.svg" className={styles.icons} alt="CSS3" />
              <img src="assets/javascript.svg" className={styles.icons} alt="JavaScript" />
              <img src="assets/nodejs.svg" className={styles.icons} alt="NodeJs" />
            </div>
            <div className={styles.technologies2}>
              <img src="assets/express.svg" className={styles.icons} alt="Express" />
              <img src="assets/mongodb.svg" className={styles.icons} alt="MongoDb" />
              <img src="assets/react.svg" className={styles.icons} alt="ReactJs" />
              <img src="assets/redux.svg" className={styles.icons} alt="ReduxJs" />
            </div>
            <div className={styles.technologies1}>
              <img src="assets/firebase.svg" className={styles.icons} alt="Firebase" />
              <img src="assets/scrum.svg" className={styles.icons} alt="Scrum" />
              <img src="assets/trello.svg" className={styles.icons} alt="Trello" />
              <img src="assets/github.svg" className={styles.icons} alt="Github" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
