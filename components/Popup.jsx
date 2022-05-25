import React from 'react';
import styles from './Popup.module.css';
import Image from 'next/image';

function Popup() {
  return (
    <div className={styles.popup}>
      <div>
        <div className={styles.popup__subtitle}>Up next</div>
        <div className={styles.popup__title}>Aerial View of Rock Cliffs</div>
        <div className={styles.popup__img}>
          <Image src="/static/img/Vector.svg" alt="Landscape picture" width={43} height={14} />
        </div>
      </div>
      <div className={styles.popup__bg}></div>
    </div>
  );
}

export default Popup;
