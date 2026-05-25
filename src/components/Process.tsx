"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useInView } from '@/hooks/useInView';
import styles from './Process.module.css';

const Process = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section className={styles.process} ref={ref}>
      <div className={`container ${styles.container} scroll-pop ${inView ? 'in-view' : ''}`}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>{t('process.step1_title')}</h3>
            <p>{t('process.step1_desc')}</p>
          </div>
          <div className={styles.card}>
            <h3>{t('process.step2_title')}</h3>
            <p>{t('process.step2_desc')}</p>
          </div>
          <div className={styles.card}>
            <h3>{t('process.step3_title')}</h3>
            <p>{t('process.step3_desc')}</p>
          </div>
          <div className={styles.card}>
            <h3>{t('process.step4_title')}</h3>
            <p>{t('process.step4_desc')}</p>
          </div>
        </div>

        <div className={styles.servicesBox}>
          <h4>{t('process.services_title')}</h4>
          <p className={styles.servicesList}>{t('process.services_list')}</p>
          <p className={styles.pricing}>{t('process.pricing')}</p>
        </div>
      </div>
    </section>
  );
};

export default Process;
