import React, { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import styles from './LookerStyles.module.css'; 

function LookerPage() {
  const [showTranscript, setShowTranscript] = useState(false); // State for toggling transcript

  const toggleTranscript = () => {
    setShowTranscript(!showTranscript);
  };

  return (
    <>
      <Header />
      <Navigation />
      <main className={styles.mainContent}>
        <h2 className={styles.heading}>Looker Studio Visual</h2>

        <section className={styles.contentWrapper}>
          <iframe
            className={styles.lookerIframe}
            src="https://lookerstudio.google.com/embed/reporting/d1043b5e-4280-412d-b320-1d6d74965ee3/page/p_hkyt7g0xmd"
            title="Looker Studio Report"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </section>

        {/* Learn More button */}
        <button className={styles.transcriptButton} onClick={toggleTranscript}>
          {showTranscript ? 'Hide Transcript' : 'Learn More'}
        </button>

        {showTranscript && (
          <div className={styles.transcript}>
            <p>
              Here's a more detailed explanation for the Looker Studio reports, explaining the key
              findings and metrics visualized in the report. You can refer to this
              for a deeper understanding of the data presented.
            </p>
          </div>
        )}
      </main>
    </>
  );
}

export default LookerPage;
