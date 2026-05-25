import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PortfolioGrid from '@/components/PortfolioGrid';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/SplashScreen';

export default function Home() {
  return (
    <main>
      <SplashScreen />
      <Header />
      <Hero />
      <PortfolioGrid />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
