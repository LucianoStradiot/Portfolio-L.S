import React from 'react';
import styles from './home.module.css';
import HamburguerMenu from '../../Shared/HamburguerMenu';

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2>Welcome</h2>
        <HamburguerMenu />
      </div>
      <section>
        <div className={styles.boxParagraph}>
          <p className={styles.paragraph}>
            My name is Luciano and I am currently in my second year of the Software Development
            collegue carrer and I have just graduated as a Full Stack Developer from the Bootcamp
            `Become a Software Professional` of the company Radium Rocket. My main interest is to
            continue developing myself in the world of programming, software and application
            development.
          </p>
        </div>
        <div className={styles.container}>
          <h2>Languages</h2>
        </div>
      </section>
    </main>
  );
}

export default Home;
