import React from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Section } from "../components/Section";

export const Company: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-20">
      <Section id="company-hero" className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-[10px] tracking-[0.4em] uppercase text-sakura mb-4">
            {t('company.subtitle')}
          </h3>
          <h1 className="text-4xl md:text-6xl font-serif tracking-widest mb-12">
            {t('company.title')}
          </h1>
        </motion.div>
      </Section>

      <div className="max-w-5xl mx-auto px-6 space-y-16 md:space-y-32">
        <Section id="message" className="text-center py-0 md:py-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="p-8 md:p-16 rounded-[30px] md:rounded-[40px] bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sakura/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <h2 className="text-xl md:text-3xl lg:text-4xl font-serif tracking-widest mb-8 md:mb-12 whitespace-pre-wrap">
              {t('company.message.title')}
            </h2>
            <p className="max-w-3xl mx-auto text-gray-400 leading-loose tracking-wide text-xs md:text-base lg:text-lg whitespace-pre-wrap">
              {t('company.message.content')}
            </p>
          </motion.div>
        </Section>

        <Section id="info" className="pb-20 md:pb-32 py-0 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-2 gap-12 md:gap-24 items-start"
          >
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-serif tracking-widest mb-8 md:mb-12">
                Company Info
              </h2>
              <div className="space-y-6 md:space-y-10">
                {[
                  { key: 'name', value: t('company.info.name_value') },
                  { key: 'established', value: t('company.info.established_value') },
                  { key: 'business', value: t('company.info.business_value') }
                ].map((item) => (
                  <div key={item.key} className="group pb-6 md:pb-8 border-b border-white/5 last:border-0 hover:border-sakura/20 transition-colors">
                    <h3 className="text-[10px] tracking-[0.4em] uppercase text-sakura/50 mb-3 md:mb-4 group-hover:text-sakura transition-colors">
                      {t(`company.info.${item.key}_label`)}
                    </h3>
                    <p className="text-white tracking-widest leading-loose text-sm md:text-base whitespace-pre-wrap">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2 aspect-[4/3] md:aspect-square rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 relative grayscale hover:grayscale-0 transition-all duration-1000">
                <div className="absolute inset-0 bg-sakura/10 mix-blend-overlay pointer-events-none" />
                <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200" 
                    alt="Office" 
                    className="w-full h-full object-cover"
                />
            </div>
          </motion.div>
        </Section>
      </div>
    </div>
  );
};
