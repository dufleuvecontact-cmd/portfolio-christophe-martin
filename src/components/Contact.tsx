"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useInView } from '@/hooks/useInView';
import styles from './Contact.module.css';

const Contact = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={`container ${styles.container} scroll-pop ${inView ? 'in-view' : ''}`}>
        <h2 className={styles.title}>{t('contact.title')}</h2>
        <p className={styles.desc}>{t('contact.description')}</p>
        
        <div className={styles.socials}>
          <a href="https://twitter.com/christo_calm" target="_blank" rel="noreferrer" className={styles.link}>Twitter / X ↗</a>
          <a href="https://instagram.com/christo._calm" target="_blank" rel="noreferrer" className={styles.link}>Instagram ↗</a>
          <a href="https://behance.net/christomartin46" target="_blank" rel="noreferrer" className={styles.link}>Behance ↗</a>
          <a href="mailto:christocalmpro@gmail.com" className={styles.link}>Email ↗</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
