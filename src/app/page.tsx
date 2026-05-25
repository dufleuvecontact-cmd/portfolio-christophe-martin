import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PortfolioGrid from '@/components/PortfolioGrid';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Process from '@/components/Process';
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
      <Testimonials />
      <About />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
