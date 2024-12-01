import React from 'react';
import pdfFile from '../assets/reports/T1-Cybriant-FinalReport_CS4850_Fall2024.pdf'; // Adjust path as needed
import styles from './ReportPage.module.css'; // Import the CSS module

const ReportPage = () => {
  return (
    <div className={styles.container}>
      <iframe
        src={pdfFile}
        title="Final Report"
        className={styles.pdfViewer}
      ></iframe>
    </div>
  );
};

export default ReportPage;
