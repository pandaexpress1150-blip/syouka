import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ParticleText } from "../components/ParticleText";
import { Section } from "../components/Section";
import { WorkModal, type Work } from "../components/WorkModal";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  ChevronDown,
  Code,
  Palette,
  Sparkles,
  Mail,
} from "lucide-react";

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const worksData: Work[] = [
    {
      title: "Ethereal Beauty",
      category: "Cosmetics Brand",
      img: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1600&auto=format&fit=crop",
      description: "A complete rebranding and e-commerce platform redesign for a luxury cosmetics line. The goal was to translate their physical store's serene and premium atmosphere into a digital experience with seamless purchasing flows.",
      technologies: ["React", "Three.js", "Shopify Plus", "Tailwind CSS"],
      testimonial: "昇華 transformed our digital presence. The new site perfectly captures the essence of our brand, resulting in a 40% increase in online conversions within the first month."
    },
    {
      title: "Silent Architecture",
      category: "Architecture Firm",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      description: "A minimalist portfolio website for an award-winning architecture firm. We focused on large-scale typography, smooth page transitions, and high-resolution imagery to let their work speak for itself.",
      technologies: ["Next.js", "Framer Motion", "Headless CMS", "WebGL"],
      testimonial: "The attention to detail in the animations and typography is outstanding. It feels less like a website and more like an interactive digital gallery of our buildings."
    },
    {
      title: "Liquid Sound",
      category: "Audio Equipment",
      img: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?q=80&w=1600&auto=format&fit=crop",
      description: "An immersive promotional site for a new line of high-end audiophile headphones. We implemented audio-reactive visualizers and 3D product models to convey the 'liquid' quality of their sound engineering.",
      technologies: ["Vue.js", "Web Audio API", "GSAP", "Three.js"],
      testimonial: "They didn't just build a website; they built an experience. Users spend an average of 5 minutes just playing with the interactive sound visualizer on the landing page."
    },
    {
      title: "Zen Garden",
      category: "Luxury Hotel",
      img: "https://images.unsplash.com/photo-1545042746-ec9e5a59b359?q=80&w=1600&auto=format&fit=crop",
      description: "A booking platform and digital concierge for a boutique traditional Japanese ryokan. The design balances modern usability with traditional 'Wabi-Sabi' aesthetics, featuring subtle micro-interactions.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      testimonial: "Our guests frequently compliment the booking process. It sets a calming, luxurious tone before they even arrive at our property."
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity, y }} className="absolute inset-0 z-0">
          {isLoaded && <ParticleText text="昇華" />}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-xs tracking-[0.4em] uppercase opacity-50">
            {t('hero.scroll')}
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 opacity-50" />
          </motion.div>
        </motion.div>
      </section>

      {/* Concept Section */}
      <Section
        id="concept"
        className="min-h-[70vh] flex items-center justify-center text-center py-12 md:py-32"
      >
        <div className="max-w-4xl space-y-10 md:space-y-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-4xl lg:text-6xl font-serif tracking-[0.2em] leading-relaxed whitespace-pre-wrap px-4"
          >
            {t('concept.title')}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-6 md:space-y-8 text-sm md:text-xl text-gray-400 tracking-wider leading-loose max-w-3xl mx-auto whitespace-pre-wrap px-4"
          >
            <p>{t('concept.description')}</p>
          </motion.div>
        </div>
      </Section>

      {/* Works Section */}
      <Section id="works" className="py-20 md:py-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
          <div>
            <h3 className="text-xs md:text-sm tracking-[0.4em] uppercase text-sakura mb-6">
              {t('works.subtitle')}
            </h3>
            <h2 className="text-3xl md:text-5xl font-serif tracking-widest">
              {t('works.title')}
            </h2>
          </div>
          <a
            href="#works"
            className="group flex items-center gap-2 text-xs md:text-sm tracking-[0.3em] uppercase hover:text-sakura transition-all duration-300"
          >
            {t('works.view_all')}{" "}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {worksData.map((work, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i % 2 === 0 ? 0 : 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group cursor-pointer"
              onClick={() => setSelectedWork(work)}
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-6 md:mb-8 transition-all duration-500 group-hover:shadow-[0_15px_40px_-10px_rgba(255,183,197,0.25)] group-hover:ring-1 group-hover:ring-white/10">
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={work.img}
                  alt={work.title}
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xl md:text-2xl font-serif tracking-wider mb-3">
                {work.title}
              </h4>
              <p className="text-xs md:text-sm tracking-widest uppercase text-gray-500">
                {work.category}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Quick Contact Section */}
      <Section
        id="quick-contact"
        className="py-32 md:py-48 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto px-4"
        >
          <h2 className="text-2xl md:text-5xl font-serif tracking-widest mb-12 whitespace-pre-wrap">
            {t('contact.title')}
          </h2>
          <button 
            className="group relative inline-flex items-center justify-center px-10 py-5 font-serif tracking-widest text-base overflow-hidden rounded-full bg-white text-navy hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(255,183,197,0.8)] transition-all duration-500"
            onClick={() => window.location.href = '/contact'}
          >
            <span className="absolute inset-0 w-full h-full bg-sakura -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative flex items-center gap-3">
              <Mail className="w-5 h-5" /> {t('contact.button')}
            </span>
          </button>
        </motion.div>
      </Section>

      <WorkModal work={selectedWork} onClose={() => setSelectedWork(null)} />
    </>
  );
};
