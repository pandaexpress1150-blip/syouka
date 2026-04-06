import React, { useState } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Section } from "../components/Section";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:info@syouka.design?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-32 pb-20">
      <Section id="contact-hero" className="text-center mb-24 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-xs md:text-sm tracking-[0.4em] uppercase text-sakura mb-6">
            {t('contact.subtitle')}
          </h3>
          <h1 className="text-4xl md:text-7xl font-serif tracking-widest mb-16 px-6 leading-tight">
            {t('contact.title')}
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-loose tracking-wide mb-20 px-6 whitespace-pre-wrap">
            {t('contact.lead')}
          </p>
        </motion.div>
      </Section>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 md:gap-32">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-10 md:space-y-20"
        >
          <div className="space-y-8 md:space-y-16">
            {[
              { icon: <Mail className="w-7 h-7" />, label: "Email", value: t('contact.email_value'), href: `mailto:${t('contact.email_value')}` },
              { icon: <Phone className="w-7 h-7" />, label: "Phone", value: t('contact.phone_value'), href: `tel:${t('contact.phone_value').replace(/-/g, '')}` },
              { icon: <MapPin className="w-7 h-7" />, label: "Address", value: t('contact.address_value'), href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t('contact.address_value'))}` }
            ].map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                target={item.href.startsWith('http') ? "_blank" : undefined}
                rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="group flex items-start gap-8 p-8 md:p-12 rounded-[30px] md:rounded-[40px] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all duration-500 hover:shadow-[0_15px_40px_-10px_rgba(255,183,197,0.1)]"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-sakura/10 flex items-center justify-center text-sakura group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xs tracking-[0.4em] uppercase text-sakura/50 mb-3 group-hover:text-sakura transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-white tracking-widest leading-loose text-base md:text-xl font-sans">
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
          <form 
            onSubmit={handleSubmit}
            className="space-y-8 md:space-y-12 p-10 md:p-16 rounded-[40px] md:rounded-[60px] bg-white/[0.02] border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-sakura/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-3 md:space-y-4">
                <label className="text-xs tracking-[0.4em] uppercase text-sakura/50 ml-6">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-8 py-5 md:py-6 rounded-full bg-navy border border-white/10 focus:border-sakura outline-none transition-colors tracking-widest text-base font-sans"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-3 md:space-y-4">
                <label className="text-xs tracking-[0.4em] uppercase text-sakura/50 ml-6">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-8 py-5 md:py-6 rounded-full bg-navy border border-white/10 focus:border-sakura outline-none transition-colors tracking-widest text-base font-sans"
                  placeholder="hello@example.com"
                />
              </div>
            </div>
            <div className="space-y-3 md:space-y-4">
              <label className="text-xs tracking-[0.4em] uppercase text-sakura/50 ml-6">Message</label>
              <textarea 
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-8 md:px-10 py-6 md:py-8 rounded-[30px] md:rounded-[40px] bg-navy border border-white/10 focus:border-sakura outline-none transition-colors tracking-widest text-base resize-none font-sans"
                placeholder="Tell us about your project..."
              />
            </div>
            <button 
              type="submit"
              className="group relative w-full inline-flex items-center justify-center px-10 py-6 md:py-7 font-serif tracking-widest text-lg overflow-hidden rounded-full bg-white text-navy hover:text-white transition-all duration-500"
            >
              <span className="absolute inset-0 w-full h-full bg-sakura -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <span className="relative flex items-center gap-3">
                Send Message
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
