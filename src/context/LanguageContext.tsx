"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import fr from '../locales/fr.json';
import en from '../locales/en.json';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  t: (key: string) => string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = { fr, en };

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('lang') as Language;
    if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'fr' ? 'en' : 'fr';
    setLanguage(newLang);
    localStorage.setItem('lang', newLang);
  };

  const t = (path: string) => {
    // path could be "header.home"
    const keys = path.split('.');
    let current: any = translations[language];
    
    for (const key of keys) {
      if (current[key] === undefined) {
        return path; // Fallback to path if not found
      }
      current = current[key];
    }
    
    return current;
  };

  // Always wrap children with Provider, just hide them until mounted to prevent hydration mismatches
  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      <div style={mounted ? {} : { visibility: 'hidden' }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
