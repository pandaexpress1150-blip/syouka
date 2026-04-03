import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Navbar: React.FC<{ isLoaded: boolean }> = ({ isLoaded }) => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === path) {
      if (path === '/concept' || path === '/works') {
        e.preventDefault();
        const id = path.replace("/", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const navItems = [
    { name: t('nav.concept'), path: "/concept" },
    { name: t('nav.services'), path: "/services" },
    { name: t('nav.process'), path: "/process" },
    { name: t('nav.tech'), path: "/tech" },
    { name: t('nav.works'), path: "/works" },
    { name: t('nav.company'), path: "/company" },
    { name: t('nav.contact'), path: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="fixed top-0 left-0 w-full p-6 md:p-10 z-[110] flex justify-between items-center pointer-events-none"
      >
        <Link 
          to="/" 
          className="text-2xl tracking-widest font-serif hover:text-sakura hover:-translate-y-1 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,183,197,1)] transition-all duration-300 inline-block relative z-50 pointer-events-auto mix-blend-difference"
        >
          昇華
        </Link>
        
        <div className="hidden lg:flex items-center gap-12 pointer-events-auto">
          <div className="flex gap-10 text-xs tracking-[0.3em] uppercase mix-blend-difference">
            {navItems.map((item) => (
                <Link
                key={item.name}
                to={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className="opacity-70 hover:opacity-100 hover:text-sakura hover:-translate-y-1 hover:scale-110 transition-all duration-300 inline-block relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-sakura transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
          <div className="mix-blend-difference">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:gap-6 lg:hidden pointer-events-auto">
          <div className="mix-blend-difference">
            <LanguageSwitcher />
          </div>
          <button 
            className="relative z-[110] p-2 text-white hover:text-sakura transition-colors mix-blend-difference"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-[1px] bg-current origin-left transition-transform"
              />
              <motion.span 
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-[1px] bg-current transition-opacity"
              />
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-[1px] bg-current origin-left transition-transform"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? "0%" : "100%"
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-0 z-[100] bg-navy/95 backdrop-blur-md flex flex-col items-center justify-center lg:hidden ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="flex flex-col gap-8 text-lg tracking-widest uppercase text-center w-full px-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              className="w-full py-4 text-center opacity-70 hover:opacity-100 hover:text-sakura hover:scale-110 transition-all duration-300 border-b border-white/5 last:border-none"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
};
