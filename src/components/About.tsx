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
        <div className={styles.content}>
          <h2 className={styles.title}>{t('about.title')}</h2>
          <p className={styles.desc}>{t('about.story1')}</p>
          <p className={styles.desc}>{t('about.story2')}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
