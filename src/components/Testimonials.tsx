"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useInView } from '@/hooks/useInView';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section className={styles.testimonials} ref={ref}>
      <div className={`container ${styles.container} scroll-pop ${inView ? 'in-view' : ''}`}>
        <h2 className={styles.title}>{t('testimonials.title')}</h2>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <p className={styles.quote}>{t('testimonials.quote1')}</p>
            <div className={styles.authorBox}>
              <div className={styles.avatar}></div>
              <span className={styles.author}>{t('testimonials.author1')}</span>
            </div>
          </div>
          {/* Add more cards here if needed */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
