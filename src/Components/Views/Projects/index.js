import React from 'react';
import styles from './projects.module.css';
import HamburguerMenu from '../../Shared/HamburguerMenu';

function Projects() {
  return (
    <div className={styles.container}>
      <h2>Projects</h2>
      <HamburguerMenu />
    </div>
  );
}

export default Projects;
