
import React, { useState, useEffect, useRef } from 'react';
import { 
  Coins, 
  Sparkles, 
  MessageCircle, 
  TrendingUp, 
  ChartLine, 
  Menu, 
  ExternalLink, 
  Bookmark, 
  Eye, 
  Twitter, 
  Users 
} from 'lucide-react';

// Components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Features from './components/Features';
import Community from './components/Community';
import Markets from './components/Markets';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['hero', 'portfolio', 'features', 'community', 'markets'];
    
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const sectionTop = el.offsetTop - offset;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex bg-black text-white min-h-screen">
      <Sidebar activeSection={activeSection} onNavigate={scrollToSection} />
      
      <div className="flex-1 ml-20 relative">
        <Header />
        
        <main className="pt-24 px-4 md:px-8 pb-12 max-w-7xl mx-auto w-full">
          <Hero />
          <Portfolio />
          <Features />
          <Community />
          <Markets />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default App;
