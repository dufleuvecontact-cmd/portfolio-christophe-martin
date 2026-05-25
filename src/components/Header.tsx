"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import styles from './Header.module.css';

const Header = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            christophe martin
          </a>
        </div>
        
        <nav className={styles.nav}>
          <a href="#portfolio" onClick={(e) => handleScrollTo(e, 'portfolio')}>{t('header.portfolio')}</a>
          <a href="#about" onClick={(e) => handleScrollTo(e, 'about')}>{t('header.about')}</a>
        </nav>

        <div className={styles.actions}>
          <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? '☾' : '☀'}
          </button>

          <button className={styles.langPill} onClick={toggleLanguage} aria-label="Toggle Language">
            <span className={language === 'fr' ? styles.activeLang : ''}>FR</span>
            <span className={language === 'en' ? styles.activeLang : ''}>EN</span>
          </button>
          
          <a href="#contact" className="btn-primary" onClick={(e) => handleScrollTo(e, 'contact')}>
            {t('header.contact')}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
