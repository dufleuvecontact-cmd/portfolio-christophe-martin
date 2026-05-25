"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useInView } from '@/hooks/useInView';
import styles from './PortfolioGrid.module.css';

// Remplacez ces IDs par les vrais IDs de vos projets Behance
const BEHANCE_PROJECT_IDS = [
  "245870193",
  "245782007",
  "195190751",
  "219381613",
  "197266929",
  "203862503"
];

const PortfolioGrid = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="portfolio" className={styles.portfolio} ref={ref}>
      <div className="container">
        <div className={`${styles.header} scroll-pop ${inView ? 'in-view' : ''}`}>
          <h2>{t('portfolio.title')}</h2>
          <p>{t('portfolio.subtitle')}</p>
        </div>

        <div className={styles.grid}>
          {BEHANCE_PROJECT_IDS.map((projectId, index) => (
            <div 
              key={`${projectId}-${index}`} 
              className={`${styles.card} ${inView ? styles.cardPop : ''}`}
              style={{ animationDelay: `${inView ? index * 100 : 0}ms` }}
            >
              <iframe 
                src={`https://www.behance.net/embed/project/${projectId}?ilo0=1`}
                className={styles.iframe}
                allowFullScreen
                loading="lazy"
                frameBorder="0" 
                allow="clipboard-write" 
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
