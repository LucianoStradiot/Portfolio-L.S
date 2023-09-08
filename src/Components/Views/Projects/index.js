import React, { useState } from 'react';
import styles from './projects.module.css';
import HamburguerMenu from '../../Shared/HamburguerMenu';

function Projects() {
  const [showMegarocketContent, setShowMegarocketContent] = useState(false);
  const [showNutritionistContent, setShowNutritionistContent] = useState(false);

  const megarocketContent = `This application is designed for MegaRocket gym, and aims to organize and manage the different users according to their role with their corresponding functionalities. The possible users of the site have 4 roles: superadmin, admin, trainers and members. The idea of the app is to be able to organize the gym from the page. The superadmin can only be generated by postman and can modify/administer the rest of the entities. The admins can manage/view the rest of the entities (except for the superadmin). Members can register themselves but trainers, classes and activities can only be created by admins. Once logged in members can choose classes (if possible according to their membership), change their membership or edit their data.`;

  const nutritionistContent = `This web app is destinated for that people who want improve his health and diet, offering customized plans and monitoring to achieve your goals. The interested person will have different channels to contact the professional -social networks, consulting room.`;

  const toggleContent = (projectId) => {
    if (projectId === 1) {
      setShowMegarocketContent(!showMegarocketContent);
    }
    if (projectId === 2) {
      setShowNutritionistContent(!showNutritionistContent);
    }
  };

  const getShortenedContent = (fullContent, projectId) => {
    if (
      (projectId === 1 && showMegarocketContent) ||
      (projectId === 2 && showNutritionistContent)
    ) {
      return fullContent;
    } else {
      return `${fullContent.substring(0, 150)}...`;
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <HamburguerMenu />
        <h2>Projects</h2>
      </div>
      <section>
        <div className={styles.sectionProjects}>
          <img
            src="assets/megarocket.png"
            alt="megarocket-app"
            className={styles.projectsImages1}
          />
          <p className={styles.boxParagraph1}>
            {getShortenedContent(megarocketContent, 1)}
            {!showMegarocketContent && (
              <button className={styles.readmoreBtn} onClick={() => toggleContent(1)}>
                Read More...
              </button>
            )}
            {showMegarocketContent && (
              <>
                <a
                  href="https://mega-rocket-app.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  View the project
                </a>
                <button className={styles.readmoreBtn} onClick={() => toggleContent(1)}>
                  Close
                </button>
              </>
            )}
          </p>
        </div>
        <div className={styles.sectionProjects}>
          <img
            src="assets/nutritionistValen.png"
            alt="nutritionist-valentina"
            className={styles.projectsImages2}
          />
          <p className={styles.boxParagraph2}>
            {getShortenedContent(nutritionistContent, 2)}
            {!showNutritionistContent && (
              <button className={styles.readmoreBtn} onClick={() => toggleContent(2)}>
                Read More...
              </button>
            )}
            {showNutritionistContent && (
              <>
                <a
                  href="https://nutricionista-valentina-lansellota.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.projectLink}
                >
                  View the project
                </a>
                <button className={styles.readmoreBtn} onClick={() => toggleContent(2)}>
                  Close
                </button>
              </>
            )}
          </p>
        </div>
      </section>
    </main>
  );
}

export default Projects;
