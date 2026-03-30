import React from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Section } from "../components/Section";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-20">
      <Section id="contact-hero" className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-[10px] tracking-[0.4em] uppercase text-sakura mb-4">
            {t('contact.subtitle')}
          </h3>
          <h1 className="text-4xl md:text-6xl font-serif tracking-widest mb-12 px-6">
            {t('contact.title')}
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 leading-loose tracking-wide mb-16 px-6 whitespace-pre-wrap">
            {t('contact.lead')}
          </p>
        </motion.div>
      </Section>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 md:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-8 md:space-y-16"
        >
          <div className="space-y-6 md:space-y-12">
            {[
              { icon: <Mail className="w-6 h-6" />, label: "Email", value: "hello@shouka.design", href: "mailto:hello@shouka.design" },
              { icon: <Phone className="w-6 h-6" />, label: "Phone", value: "03-1234-5678", href: "tel:03-1234-5678" },
              { icon: <MapPin className="w-6 h-6" />, label: "Address", value: "〒150-0001 東京都渋谷区神宮前 1-2-3 昇華ビル 4F", href: "#" }
            ].map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="group flex items-start gap-6 md:gap-8 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all duration-500 hover:shadow-[0_15px_40px_-10px_rgba(255,183,197,0.1)]"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-sakura/10 flex items-center justify-center text-sakura group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[10px] tracking-[0.4em] uppercase text-sakura/50 mb-2 group-hover:text-sakura transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-white tracking-widest leading-loose text-xs md:text-sm lg:text-base">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <form className="space-y-6 md:space-y-8 p-8 md:p-12 rounded-[30px] md:rounded-[40px] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-sakura/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2 md:space-y-3">
                <label className="text-[10px] tracking-[0.4em] uppercase text-sakura/50 ml-4">Name</label>
                <input 
                  type="text" 
                  className="w-full px-6 py-3 md:py-4 rounded-full bg-navy border border-white/10 focus:border-sakura outline-none transition-colors tracking-widest text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2 md:space-y-3">
                <label className="text-[10px] tracking-[0.4em] uppercase text-sakura/50 ml-4">Email</label>
                <input 
                  type="email" 
                  className="w-full px-6 py-3 md:py-4 rounded-full bg-navy border border-white/10 focus:border-sakura outline-none transition-colors tracking-widest text-sm"
                  placeholder="hello@example.com"
                />
              </div>
            </div>
            <div className="space-y-2 md:space-y-3">
              <label className="text-[10px] tracking-[0.4em] uppercase text-sakura/50 ml-4">Message</label>
              <textarea 
                rows={5}
                className="w-full px-6 md:px-8 py-4 md:py-6 rounded-[24px] md:rounded-[30px] bg-navy border border-white/10 focus:border-sakura outline-none transition-colors tracking-widest text-sm resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button className="group relative w-full inline-flex items-center justify-center px-8 py-4 md:py-5 font-serif tracking-widest text-sm overflow-hidden rounded-full bg-white text-navy hover:text-white transition-all duration-500">
              <span className="absolute inset-0 w-full h-full bg-sakura -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <span className="relative flex items-center gap-2">
                Send Message
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
