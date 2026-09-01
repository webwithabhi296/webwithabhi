"use client";

import React from "react";
import { motion } from "framer-motion";

export type AnimationVariant = "fadeIn" | "fadeUp" | "slideUp";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
}

const variantStyles = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0 },
  },
};

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = "",
  variant = "fadeUp",
  delay = 0,
  duration = 0.45,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variantStyles[variant]}
      className={className}
    >
      {children}
    </motion.div>
  );
};
