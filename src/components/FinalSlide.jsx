import React from 'react';
import { motion } from 'framer-motion';
import { stagger, scaleIn } from '../animations';
import { GoldText } from './GoldText';

const FinalSlide = () => {
  return (
    <motion.div
      className="final-slide min-h-screen w-full flex flex-col items-center justify-center bg-[#f0ede6] p-8 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
    >
      <motion.div variants={scaleIn} className="max-w-3xl relative z-10 glow-gold p-12 bg-white/40 backdrop-blur-md rounded-[2rem] border border-white/60 shadow-2xl">
        <h2 className="text-4xl md:text-6xl font-serif mb-6" style={{ background: 'linear-gradient(to right, #a67c00, #dfb648, #a67c00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>
          We Can't Wait!
        </h2>
        <p className="text-xl md:text-3xl font-light text-gray-600 mb-12" style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic' }}>
          To share this beautiful beginning with our favorite people.
        </p>
        {/* Phone Call Action */}
        <a href="tel:+923323274321">
          <button className="px-10 py-5 bg-gradient-to-r from-[#a67c00] via-[#dfb648] to-[#a67c00] text-white rounded-full font-medium tracking-[0.2em] text-sm uppercase hover:shadow-[0_10px_40px_rgba(223,182,72,0.4)] transition-all transform hover:-translate-y-1 duration-300">
            Call Us
          </button>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default FinalSlide;
