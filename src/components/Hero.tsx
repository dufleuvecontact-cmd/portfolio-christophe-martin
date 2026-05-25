"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Hero.module.css';

const Hero = () => {
  const { t } = useLanguage();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      {/* Background Floating Thumbnails for Visual Impact */}
      <div className={styles.backgroundThumbnails}>
        <div className={`${styles.bgThumb} ${styles.thumb1}`}>
          <iframe src="https://www.behance.net/embed/project/245870193?ilo0=1" loading="lazy" style={{width: '100%', height: '100%', border: 'none', pointerEvents: 'none'}}></iframe>
        </div>
        <div className={`${styles.bgThumb} ${styles.thumb2}`}>
          <iframe src="https://www.behance.net/embed/project/245782007?ilo0=1" loading="lazy" style={{width: '100%', height: '100%', border: 'none', pointerEvents: 'none'}}></iframe>
        </div>
        <div className={`${styles.bgThumb} ${styles.thumb3}`}>
          <iframe src="https://www.behance.net/embed/project/195190751?ilo0=1" loading="lazy" style={{width: '100%', height: '100%', border: 'none', pointerEvents: 'none'}}></iframe>
        </div>
      </div>

      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <span className={`${styles.label} animate-fade-in`}>{t('hero.label')}</span>
          
          <h1 className={styles.title}>
            {t('hero.title').split(' ').map((word: string, i: number) => (
              <React.Fragment key={i}>
                <span 
                  className={styles.charPop}
                  style={{ animationDelay: `${0.2 + i * 0.15}s` }}
                >
                  {word}
                </span>
                {' '}
              </React.Fragment>
            ))}
          </h1>
          
          <p className={`${styles.subtitle} animate-fade-in delay-200`}>
            {t('hero.subtitle')}
          </p>
          
          <div className={`${styles.actions} animate-fade-in delay-300`}>
            <a href="#contact" className="btn-primary" onClick={(e) => handleScrollTo(e, 'contact')}>
              {t('hero.cta_primary')}
            </a>
            <a href="#portfolio" className="btn-secondary" onClick={(e) => handleScrollTo(e, 'portfolio')}>
              {t('hero.cta_secondary')}
            </a>
          </div>

          <p className={`${styles.trustSignal} animate-fade-in delay-300`}>
            {t('hero.trust')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
