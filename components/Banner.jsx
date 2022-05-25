import React from 'react';
import styles from '../components/Banner.module.css';

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__title}>
        <h1>Beautiful Places of England</h1>
      </div>
      <div className={styles.banner__subtitle}>
        <h2>
          Plan your vacation on the most beatiful <br></br> places of England
        </h2>
      </div>
    </div>
  );
}

export default Banner;
