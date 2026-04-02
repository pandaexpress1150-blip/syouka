import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/5 bg-navy/50 pt-20 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="md:col-span-2">
          <Link to="/" className="text-2xl font-serif tracking-widest mb-6 text-white inline-block">昇華</Link>
          <p className="text-sm text-gray-400 leading-relaxed tracking-wide max-w-sm">
            {t('footer.description')}
          </p>
        </div>
        
        <div>
          <h3 className="text-sm tracking-widest uppercase text-white mb-6">Contact</h3>
          <address className="not-italic text-sm text-gray-400 leading-relaxed tracking-wide space-y-2">
            <p>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t('contact.address_value'))}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-sakura transition-all duration-300 inline-block"
              >
                {t('contact.address_value')}
              </a>
            </p>
            <p className="pt-2">
              <a href={`mailto:${t('contact.email_value')}`} className="hover:text-sakura transition-all duration-300 inline-block">{t('contact.email_value')}</a>
            </p>
          </address>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest text-gray-600">
        <p>
          &copy; {new Date().getFullYear()} {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};
