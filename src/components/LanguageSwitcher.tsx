import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-4 text-[10px] tracking-[0.2em] uppercase">
      {['ja', 'en', 'cn'].map((lang) => (
        <button
          key={lang}
          onClick={() => toggleLanguage(lang)}
          className={`hover:text-sakura transition-colors cursor-pointer ${
            i18n.language === lang ? 'text-sakura border-b border-sakura/50' : 'text-white/50'
          }`}
        >
          {lang === 'ja' ? 'JP' : lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
