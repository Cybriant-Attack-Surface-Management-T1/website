import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import TeamGrid from '../components/TeamGrid';
import styles from './HomeStyles.module.css'; 

// Import your images for the sections
import MyImage1 from '../assets/images/box.jpeg';
import MyImage2 from '../assets/images/box.jpeg';
import MyImage3 from '../assets/images/box.jpeg';

function HomePage() {
  return (
    <>
    <Header />
    <Navigation />

    <main>
      {/* First Section: Image on left, text on right */}
      <div className={styles.section}>
        <div className={styles.imageContainer}>
          <img src={MyImage1} alt="Image 1" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Objective</h1>
          <p className={styles.description}>
            This is the description for the first section. You can add more information about this section here.
          </p>
        </div>
      </div>

      {/* Second Section: Image on right, text on left (flipped) */}
      <div className={`${styles.section} ${styles.reverseSection}`}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Strategy</h1>
          <p className={styles.description}>
            This is the description for the second section. The image will be on the right side of the text.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={MyImage2} alt="Image 2" className={styles.image} />
        </div>
      </div>

      {/* Third Section: Image on left, text on right */}
      <div className={styles.section}>
        <div className={styles.imageContainer}>
          <img src={MyImage3} alt="Image 3" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Rationale</h1>
          <p className={styles.description}>
            This is the description for the third section. You can add more information about this section here as well. We can also add Github and other links below too.
          </p>
        </div>
      </div>

      {/* Meet the Team Section */}
      <h2>Welcome to our website!</h2>
      <p>We are Cybriant Team 1, the number 1 team!</p>
      <TeamGrid />
    </main>
  </>
  );
}

export default HomePage;
