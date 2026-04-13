'use client';

import { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimateOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right';
}

export default function AnimateOnScroll({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}: AnimateOnScrollProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
  }, []);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const initialPosition = {
    up: { opacity: 0, y: 20 },
    left: { opacity: 0, x: -20 },
    right: { opacity: 0, x: 20 },
  };

  return (
    <motion.div
      initial={initialPosition[direction]}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
