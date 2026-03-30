import React from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Section } from "../components/Section";

export const Process: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    { id: "01", key: "step1" },
    { id: "02", key: "step2" },
    { id: "03", key: "step3" },
    { id: "04", key: "step4" },
    { id: "05", key: "step5" }
  ];

  return (
    <div className="pt-32 pb-20">
      <Section id="process-hero" className="text-center mb-24 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-xs md:text-sm tracking-[0.4em] uppercase text-sakura mb-6">
            {t('process.subtitle')}
          </h3>
          <h1 className="text-4xl md:text-7xl font-serif tracking-widest mb-16">
            {t('process.title')}
          </h1>
        </motion.div>
      </Section>

      <div className="max-w-5xl mx-auto px-6 space-y-24 md:space-y-40 relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 md:-translate-x-1/2" />

        {steps.map((step, i) => (
          <Section key={step.id} id={step.id} className="relative z-10 py-0 md:py-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-32 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 text-left md:text-right space-y-6 order-2 md:order-none ml-16 md:ml-0">
                <h2 className={`text-2xl md:text-3xl lg:text-4xl font-serif tracking-widest ${i % 2 === 0 ? 'md:hidden' : 'md:block'}`}>
                  {t(`process.${step.key}.title`)}
                </h2>
                <h2 className={`hidden md:block text-2xl md:text-3xl lg:text-4xl font-serif tracking-widest ${i % 2 === 0 ? 'md:block' : 'md:hidden'}`}>
                  {t(`process.${step.key}.title`)}
                </h2>
                <p className="text-base md:text-xl text-gray-400 leading-loose tracking-wide whitespace-pre-wrap">
                  {t(`process.${step.key}.description`)}
                </p>
              </div>

              <div className="relative shrink-0 order-1 md:order-none">
                <div className="w-16 h-16 rounded-full bg-navy border-2 border-sakura flex items-center justify-center text-xs tracking-[0.3em] font-serif text-sakura shadow-[0_0_30px_rgba(255,183,197,0.3)]">
                  {step.id}
                </div>
              </div>

              <div className="hidden md:block flex-1" />
            </motion.div>
          </Section>
        ))}
      </div>
    </div>
  );
};
