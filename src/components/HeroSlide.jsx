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
        <motion.div variants={fadeUp} style={{ padding: '36px 24px 0', textAlign: 'center', textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
          <p style={{ color: 'rgba(255,255,255,1)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px', fontWeight: '500' }}>
            In the Name of Allah<br />the Most Gracious & Most Merciful.
          </p>
          <p style={{ color: 'rgba(255,255,255,1)', fontSize: '1.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 'bold' }}>
            Mr. & Mrs. Abdul Rauf
          </p>
          <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: '1.6' }}>
            call you to attend the Wedding Ceremony<br />for their Son
          </p>
        </motion.div>

        {/* SPACER — couple faces visible here */}
        <div style={{ flex: 1, minHeight: '180px' }} />

        {/* BOTTOM — frosted glass block */}
        <motion.div variants={fadeUp} style={{
          background: 'rgba(15,8,2,0.22)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)', // for Safari support
          borderRadius: '16px',
          padding: '24px 24px 36px',
          margin: '0 12px 24px',
          textAlign: 'center',
          color: 'white',
          border: '1px solid rgba(255,255,255,0.1)' // subtle border for glass effect
        }}>
          <h1 className="font-script" style={{ fontSize: '2.5rem', margin: '0', fontWeight: '400', lineHeight: 1.2 }}>
            <GoldText>Zubair Rauf</GoldText>
          </h1>
          <div className="font-script" style={{ margin: '8px 0', fontSize: '1.5rem', color: 'rgba(255,255,255,0.8)' }}>
            <GoldText>&</GoldText>
          </div>
          <h1 className="font-script" style={{ fontSize: '2.5rem', margin: '0', fontWeight: '400', lineHeight: 1.2 }}>
            <GoldText>Daughter of<br />Muhammad Javed</GoldText>
          </h1>

          <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.4)', margin: '20px auto' }} />

          <p style={{ letterSpacing: '0.1em', fontSize: '0.9rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)' }}>
            Join us to celebrate
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSlide;
