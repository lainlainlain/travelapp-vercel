import React from 'react';
import Image from 'next/image';
import styles from './Book.module.css';

function Book() {
  return (
    <div className={styles.book}>
      <div className={styles.book__title}>Book your vacation</div>
      <div className={styles.book__content}>
        <div className={styles.book__panel_wrapper}>
          <div className={styles.accomodation}>
            <div className={styles.book_item__wrapper}>
              <Image
                src="/static/img/home-line.svg"
                alt="Landscape picture"
                width={28}
                height={28}
              />
              <div className={styles.book_item__content}>
                <p className={styles.book_item__title}>Accommodation</p>
                <p className={styles.book_item__text}>6730 Luna Land North Rhiannonmouth</p>
              </div>
            </div>
            <Image
              src="/static/img/arrow-drop-down-line.svg"
              alt="Landscape picture"
              width={28}
              height={28}
            />
          </div>
          <div className={styles.checkin}>
            <div className={styles.book_item__wrapper}>
              <Image
                src="/static/img/calendar-line.svg"
                alt="Landscape picture"
                width={28}
                height={28}
              />
              <div className={styles.book_item__content}>
                <p className={styles.book_item__title}>Check-in</p>
                <p className={styles.book_item__text}>19.06.2019</p>
              </div>
            </div>
          </div>
          <div className={styles.checkout}>
            <div className={styles.book_item__wrapper}>
              <div className={styles.book_item__content}>
                <p className={styles.book_item__title}>Check-out</p>
                <p className={styles.book_item__text}>19.06.2019</p>
              </div>
            </div>
          </div>
          <div className={styles.guests}>
            <div className={styles.book_item__wrapper}>
              <Image src="/static/img/user.svg" alt="Landscape picture" width={28} height={28} />
              <div className={styles.book_item__content}>
                <p className={styles.book_item__title}>Guests</p>
                <p className={styles.book_item__text}>4 adults</p>
              </div>
            </div>
            <div className={styles.guests__dropdown}>
              <Image
                src="/static/img/arrow-drop-down-line.svg"
                alt="Landscape picture"
                width={28}
                height={28}
              />
            </div>
          </div>
        </div>
        <button className={styles.btn}>Search</button>
      </div>
    </div>
  );
}

export default Book;
