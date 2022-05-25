import styles from './Header.module.css';
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <div className={styles.group}>
        <ul className={styles.navigation}>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={styles.group}>
        <ul className={styles.camping}>
          <li>Camping.</li>
        </ul>
      </div>
      <div className={styles.group}>
        <ul className={styles.registration}>
          <li>Sign In</li>
          <li>Sign Up</li>
          <li className={styles.searchImg}>
            <Image src="/static/img/Group.svg" alt="Landscape picture" width={24} height={24} />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
