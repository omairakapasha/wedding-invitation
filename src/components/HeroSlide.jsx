import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../animations';
import { GoldText } from './GoldText';

const HeroSlide = () => {
  return (
    <motion.section
      style={{ position: 'relative', height: '100svh', overflow: 'hidden' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
    >
      {/* Background photo */}
      <img src='/event_bg.png' alt="Wedding Background" style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        objectFit: 'cover',
        objectPosition: 'center'
      }} />

      {/* Dark gradient overlay to ensure text readability */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.5) 100%)',
        zIndex: 1
      }} />

      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', flexDirection: 'column', height: '100%'
      }}>
        {/* TOP — Formal Invitation Text */}
        <motion.div variants={fadeUp} className="pt-9 px-6 text-center drop-shadow-xl">
          <p className="text-white text-xs md:text-sm tracking-[0.15em] uppercase mb-6 font-medium">
            In the Name of Allah<br />the Most Gracious & Most Merciful.
          </p>
          <p className="text-white text-lg md:text-2xl tracking-[0.15em] uppercase mb-2 font-bold">
            Mr. & Mrs. Abdul Rauf
          </p>
          <p className="text-white/95 text-[10px] md:text-xs tracking-[0.1em] uppercase leading-relaxed">
            call you to attend the Wedding Ceremony<br />for their Beloved Son
          </p>
        </motion.div>

        {/* SPACER — couple faces visible here */}
        <div style={{ flex: 1, minHeight: '180px' }} />

        {/* BOTTOM — frosted glass block */}
        <motion.div variants={fadeUp} className="bg-[#0f0802]/20 backdrop-blur-md rounded-2xl p-6 pb-9 mx-3 mb-6 text-center text-white border border-white/10">
          <h1 className="font-script text-4xl md:text-5xl m-0 font-normal leading-tight">
            <GoldText>Zubair Rauf</GoldText>
          </h1>
          <div className="font-script my-2 text-2xl md:text-3xl text-white/80">
            <GoldText>with</GoldText>
          </div>
          <h1 className="font-script text-4xl md:text-5xl m-0 font-normal leading-tight">
            <GoldText>Daughter of<br />Muhammad Javed</GoldText>
          </h1>

          <div className="w-10 h-px bg-white/40 mx-auto my-5" />

          <p className="tracking-[0.1em] text-[10px] md:text-xs uppercase text-white/90">
            Join us to celebrate
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSlide;
