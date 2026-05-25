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

  // Splitting subtitle by period for stacked poetic lines
  const subtitleLines = t('hero.subtitle').split('.').filter((line: string) => line.trim() !== '');

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <h1 className={styles.title}>
          {t('hero.title').split(' ').map((word: string, i: number) => (
            <React.Fragment key={i}>
              <span 
                className={styles.charPop}
                style={{ animationDelay: `${2.8 + i * 0.15}s` }}
              >
                {word}
              </span>
              {' '}
            </React.Fragment>
          ))}
        </h1>
        
        <div className={`${styles.subtitleBox} animate-fade-in delay-100`}>
          {subtitleLines.map((line: string, i: number) => (
            <p key={i} className={styles.subtitleLine}>{line.trim()}.</p>
          ))}
        </div>
        
        <div className={`${styles.actions} animate-fade-in delay-200`}>
          <a href="#portfolio" className="brutalist-button" onClick={(e) => handleScrollTo(e, 'portfolio')}>
            {t('hero.cta')}
          </a>
          <a href="#about" className="brutalist-button-outline" onClick={(e) => handleScrollTo(e, 'about')}>
            {t('header.about')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
