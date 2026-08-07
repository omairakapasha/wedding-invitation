import React from 'react';
import { motion } from 'framer-motion';

export const GoldText = ({ children, style = {} }) => {
  return (
    <motion.span
      style={{
        color: '#fefcf8', // Soft, elegant cream/off-white
        textShadow: '0 4px 12px rgba(0,0,0,0.2)', // Gentle shadow for crisp legibility against backgrounds
        display: 'inline-block',
        ...style
      }}
    >
      {children}
    </motion.span>
  );
};
