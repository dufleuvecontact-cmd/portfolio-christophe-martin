"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useInView } from '@/hooks/useInView';
import styles from './PortfolioGrid.module.css';

const PROJECTS = [
  { 
    id: 1, 
    title: "1000% Stock Gains", 
    category: "Finance", 
    behanceId: "245870193",
    ctr_note: "+28% CTR vs previous thumbnail",
    behance: "https://www.behance.net/gallery/245870193/Project"
  },
  { 
    id: 2, 
    title: "My World Is Gone", 
    category: "Storytime / Drama", 
    behanceId: "245782007",
    ctr_note: "1.2M Views · 14% CTR",
    behance: "https://www.behance.net/gallery/245782007/Project"
  },
  { 
    id: 3, 
    title: "Ultimate Tech 2024", 
    category: "Tech & Reviews", 
    behanceId: "195190751",
    ctr_note: "Trending #3 · 18% CTR",
    behance: "https://www.behance.net/gallery/195190751/Project"
  },
  { 
    id: 4, 
    title: "Crazy Obstacle Course", 
    category: "Gaming", 
    behanceId: "219381613",
    ctr_note: "Short-form channel · +45% Click-through",
    behance: "https://www.behance.net/gallery/219381613/Yup-Miniature"
  },
  { 
    id: 5, 
    title: "Crypto Crash", 
    category: "Finance", 
    behanceId: "197266929",
    ctr_note: "Doubled average views in 24h",
    behance: "https://www.behance.net/gallery/197266929/Project"
  },
  { 
    id: 6, 
    title: "Setup Tour 2024", 
    category: "Self Improvement", 
    behanceId: "203862503",
    ctr_note: "Consistent 12% CTR over 30 days",
    behance: "https://www.behance.net/gallery/203862503/Project"
  }
];

const CATEGORIES = ["All", "Finance", "Storytime / Drama", "Gaming", "Tech & Reviews", "Self Improvement"];

const PortfolioGrid = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className={styles.portfolio} ref={ref}>
      <div className="container">
        <div className={`${styles.header} scroll-pop ${inView ? 'in-view' : ''}`}>
          <h2>{t('portfolio.title')}</h2>
          <p>{t('portfolio.subtitle')}</p>
          <a href="https://www.behance.net/christomartin46" target="_blank" rel="noreferrer" className={styles.behanceLink}>
            {t('portfolio.link')}
          </a>
        </div>

        <div className={`${styles.filters} scroll-pop ${inView ? 'in-view' : ''}`}>
          {CATEGORIES.map(cat => (
            <button 
              key={cat} 
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((project, index) => (
            <a 
              href={project.behance}
              target="_blank"
              rel="noreferrer"
              key={project.id} 
              className={`${styles.card} ${inView ? styles.cardPop : ''}`}
              style={{ animationDelay: `${inView ? index * 100 : 0}ms` }}
            >
              <div className={styles.imageWrapper}>
                <div className={styles.iframeContainer}>
                  <iframe 
                    src={`https://www.behance.net/embed/project/${project.behanceId}?ilo0=1`}
                    style={{width: '100%', height: '100%', border: 'none', pointerEvents: 'none'}}
                    loading="lazy"
                  ></iframe>
                </div>
                <div className={styles.overlay}>
                  <p className={styles.ctrNote}>{project.ctr_note}</p>
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.textStack}>
                  <h3>{project.title}</h3>
                  <span className={styles.category}>{project.category}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
