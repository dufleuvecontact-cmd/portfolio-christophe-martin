"use client";

import React, { useState, useEffect } from 'react';
import styles from './SplashScreen.module.css';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fade out after 2.5s
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2500);

    // Completely remove from DOM after 3.2s
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`${styles.splash} ${isFading ? styles.fadeOut : ''}`}>
      <h1 className={styles.logo}>christo.</h1>
    </div>
  );
};

export default SplashScreen;
