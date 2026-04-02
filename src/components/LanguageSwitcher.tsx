import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-5 text-xs tracking-[0.2em] uppercase">
      {['ja', 'en', 'cn'].map((lang) => (
        <button
          key={lang}
          onClick={() => toggleLanguage(lang)}
          className={`hover:text-sakura transition-all duration-300 cursor-pointer ${
            i18n.language === lang ? 'text-sakura border-b-2 border-sakura/50' : 'text-white/50'
          }`}
        >
          {lang === 'ja' ? 'JP' : lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
