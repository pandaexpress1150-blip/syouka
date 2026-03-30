import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  delay = 0,
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        "py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto",
        className,
      )}
    >
      {children}
    </motion.section>
  );
};
