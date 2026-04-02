import React from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Section } from "../components/Section";

export const TechStack: React.FC = () => {
  const { t } = useTranslation();

  const stack = [
    { key: "frontend", title: "Front-end" },
    { key: "creative", title: "Creative" },
    { key: "backend", title: "Backend / Infrastructure" },
    { key: "ai", title: "AI Solution" }
  ];

  return (
    <div className="pt-32 pb-20">
      <Section id="tech-hero" className="text-center mb-24 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-xs md:text-sm tracking-[0.4em] uppercase text-sakura mb-6">
            {t('tech.subtitle')}
          </h3>
          <h1 className="text-4xl md:text-7xl font-serif tracking-widest mb-16">
            {t('tech.title')}
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-loose tracking-wide mb-20 px-6">
            {t('tech.description')}
          </p>
        </motion.div>
      </Section>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {stack.map((item, i) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group p-12 md:p-14 rounded-[40px] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all duration-500 hover:shadow-[0_15px_40px_-10px_rgba(255,183,197,0.1)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-sakura/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-sakura/10 transition-colors" />
            <h2 className="text-sakura text-xs md:text-sm tracking-[0.3em] uppercase mb-10 font-medium">
              {item.title}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 leading-loose tracking-wide group-hover:text-white transition-colors">
              {t(`tech.sections.${item.key}`).replace(`${item.title}: `, "")}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
