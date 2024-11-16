import React from 'react';
import KSU from '../assets/images/ksu-logo2.png';
import styles from '../components/HeaderStyles.module.css';

function Header() {
  return(
  <header className={styles.banner}>
    <img src={KSU} alt="KSU"/>
    <h1 className={styles.title}>Cybriant Attack Surface Management</h1>
  </header>
  );
}

export default Header;
