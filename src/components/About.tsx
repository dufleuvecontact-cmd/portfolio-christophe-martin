"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useInView } from '@/hooks/useInView';
import styles from './About.module.css';

const About = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={`container ${styles.container} scroll-pop ${inView ? 'in-view' : ''}`}>
        <h2 className={styles.title}>{t('about.title')}</h2>
        
        <div className={styles.content}>
          <p className={styles.desc}>{t('about.description')}</p>
          <div className={styles.divider}></div>
          <p className={styles.workflow}>{t('about.workflow')}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
