import React from 'react';
import styles from './projects.module.css';
import HamburguerMenu from '../../Shared/HamburguerMenu';

function Projects() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2>Projects</h2>
        <HamburguerMenu />
      </div>
      <section>
        <div className={styles.sectionProjects}>
          <img
            src="assets/megarocket.png"
            alt="megarocket-app"
            className={styles.projectsImages1}
          />
          <p className={styles.boxParagraph1}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, excepturi. Dolorem
            tempore cumque nihil laudantium pariatur iure facilis eius accusamus quidem molestiae
            ea, veritatis repellendus modi? Illo delectus vero consequatur?
          </p>
          <a href="https://mega-rocket-app.vercel.app/" target="_blank" rel="noreferrer">
            View the project
          </a>
        </div>
        <div className={styles.sectionProjects}>
          <img
            src="assets/nutritionistValen.jpg"
            alt="nutritionist-valentina"
            className={styles.projectsImages2}
          />
          <p className={styles.boxParagraph2}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, excepturi. Dolorem
            tempore cumque nihil laudantium pariatur iure facilis eius accusamus quidem molestiae
            ea, veritatis repellendus modi? Illo delectus vero consequatur?
          </p>
          <a
            href="https://nutricionista-valentina-lansellota.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            View the project
          </a>
        </div>
      </section>
    </main>
  );
}

export default Projects;
