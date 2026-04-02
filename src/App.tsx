import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { SakuraBackground } from "./components/SakuraBackground";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Process } from "./pages/Process";
import { TechStack } from "./pages/TechStack";
import { Company } from "./pages/Company";
import { Contact } from "./pages/Contact";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  return null;
};

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    // Sync html lang attribute
    document.documentElement.lang = i18n.language === 'ja' ? 'ja' : i18n.language === 'cn' ? 'zh' : 'en';
  }, [i18n.language]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <SakuraBackground />
      <div className="min-h-screen text-white overflow-x-hidden relative z-10 flex flex-col">
        <Navbar isLoaded={isLoaded} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/tech" element={<TechStack />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
