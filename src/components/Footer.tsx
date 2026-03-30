import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/5 bg-navy/50 pt-20 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <Link to="/" className="text-2xl font-serif tracking-widest mb-6 text-white inline-block">昇華</Link>
          <p className="text-sm text-gray-400 leading-relaxed tracking-wide max-w-sm">
            {t('footer.description')}
          </p>
        </div>
        
        <div>
          <h3 className="text-sm tracking-widest uppercase text-white mb-6">Contact</h3>
          <address className="not-italic text-sm text-gray-400 leading-relaxed tracking-wide space-y-2">
            <p>〒150-0001</p>
            <p>東京都渋谷区神宮前 1-2-3</p>
            <p>昇華ビル 4F</p>
            <p className="pt-2">
              <a href="tel:03-1234-5678" className="hover:text-sakura transition-all duration-300 inline-block">03-1234-5678</a>
            </p>
            <p>
              <a href="mailto:hello@shouka.design" className="hover:text-sakura transition-all duration-300 inline-block">hello@shouka.design</a>
            </p>
          </address>
        </div>

        <div>
          <h3 className="text-sm tracking-widest uppercase text-white mb-6">Links</h3>
          <ul className="text-sm text-gray-400 space-y-3 tracking-wide flex flex-col items-start">
            <li><Link to="/#works" className="hover:text-sakura transition-all duration-300 inline-block">Works</Link></li>
            <li><Link to="/services" className="hover:text-sakura transition-all duration-300 inline-block">Services</Link></li>
            <li><Link to="/process" className="hover:text-sakura transition-all duration-300 inline-block">Process</Link></li>
            <li><Link to="/company" className="hover:text-sakura transition-all duration-300 inline-block">Company</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest text-gray-600">
        <p>
          &copy; {new Date().getFullYear()} {t('footer.rights')}
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-sakura transition-all duration-300 inline-block">Twitter</a>
          <a href="#" className="hover:text-sakura transition-all duration-300 inline-block">Instagram</a>
          <a href="#" className="hover:text-sakura transition-all duration-300 inline-block">Dribbble</a>
        </div>
      </div>
    </footer>
  );
};
