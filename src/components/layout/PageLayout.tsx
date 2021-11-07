import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial='hidden'
      animate='enter'
      variants={variants}
      transition={{ duration: 0.3, type: 'tween' }}
    >
      {children}
    </motion.div>
  );
}
