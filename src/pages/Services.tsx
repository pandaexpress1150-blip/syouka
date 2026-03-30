import React from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Section } from "../components/Section";
import { Palette, Code, Sparkles, Globe, Cpu, Link as LinkIcon } from "lucide-react";

export const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: "web_dev",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      key: "interaction",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-sakura/20 to-purple-500/20",
    },
    {
      key: "web3",
      icon: <LinkIcon className="w-8 h-8" />,
      color: "from-orange-500/20 to-yellow-500/20",
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <Section id="services-hero" className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-[10px] tracking-[0.4em] uppercase text-sakura mb-4">
            {t('services.subtitle')}
          </h3>
          <h1 className="text-4xl md:text-6xl font-serif tracking-widest mb-12">
            {t('services.title')}
          </h1>
        </motion.div>
      </Section>

      <div className="max-w-7xl mx-auto px-6 grid gap-24">
        {services.map((service, i) => (
          <Section key={service.key} id={service.key} className="relative">
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center`}
            >
              <div className={`p-8 md:p-12 rounded-3xl bg-gradient-to-br ${service.color} border border-white/10 relative overflow-hidden group ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-transparent transition-colors duration-500" />
                <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center text-sakura mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-serif tracking-widest mb-4 md:mb-6">
                  {t(`services.${service.key}.title`)}
                </h2>
                <h3 className="text-sakura text-xs md:text-sm tracking-[0.2em] mb-6 md:mb-8 font-medium">
                  {t(`services.${service.key}.concept`)}
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-loose tracking-wide whitespace-pre-wrap">
                  {t(`services.${service.key}.description`)}
                </p>
              </div>
              <div className={`relative aspect-video rounded-3xl overflow-hidden border border-white/5 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                 <div className="absolute inset-0 bg-navy/40" />
                 <img 
                    src={
                        service.key === 'web_dev' ? "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200" :
                        service.key === 'interaction' ? "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200" :
                        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200"
                    } 
                    alt={t(`services.${service.key}.title`)}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                 />
              </div>
            </motion.div>
          </Section>
        ))}
      </div>
    </div>
  );
};
