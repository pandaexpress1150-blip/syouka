import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export interface Work {
  title: string;
  category: string;
  img: string;
  description: string;
  technologies: string[];
  testimonial: string;
}

interface WorkModalProps {
  work: Work | null;
  onClose: () => void;
}

export const WorkModal: React.FC<WorkModalProps> = ({ work, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (work) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [work]);

  return (
    <AnimatePresence>
      {work && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy/90 backdrop-blur-md cursor-pointer"
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-[#0c1220] border border-white/10 rounded-2xl overflow-y-auto shadow-2xl z-10 flex flex-col md:flex-row"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto md:min-h-[500px] relative">
              <img
                src={work.img}
                alt={work.title}
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] via-transparent to-transparent md:hidden" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0c1220] hidden md:block" />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <p className="text-sakura text-xs tracking-[0.2em] uppercase mb-2">{work.category}</p>
              <h3 className="text-3xl md:text-4xl font-serif tracking-widest mb-8">{work.title}</h3>
              
              <div className="space-y-8 text-gray-300 text-sm leading-relaxed tracking-wide">
                <div>
                  <h4 className="text-white font-serif tracking-wider mb-3 text-lg">Project Overview</h4>
                  <p className="opacity-80">{work.description}</p>
                </div>

                <div>
                  <h4 className="text-white font-serif tracking-wider mb-3 text-lg">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {work.technologies.map((tech, idx) => (
                      <span key={idx} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
