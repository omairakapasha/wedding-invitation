import React from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeUp } from '../animations';
import { useCountdown } from '../hooks/useCountdown';
import { GoldText } from './GoldText';

const CountdownSlide = ({ targetDate = '2026-06-19T00:00:00' }) => {
  const timeLeft = useCountdown(targetDate);

  const displayTime = {
    days: timeLeft.days !== undefined ? timeLeft.days : '00',
    hours: timeLeft.hours !== undefined ? timeLeft.hours : '00',
    minutes: timeLeft.minutes !== undefined ? timeLeft.minutes : '00',
    seconds: timeLeft.seconds !== undefined ? timeLeft.seconds : '00'
  };

  return (
    <motion.div 
      className="countdown-slide h-screen w-full flex flex-col items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/couple2.jpg)' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
    >
      <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-script mb-8 text-center">
        <GoldText>The Countdown Begins</GoldText>
      </motion.h2>
      <motion.div variants={fadeUp} className="flex gap-4 md:gap-8 text-center">
        {Object.entries(displayTime).map(([interval, value]) => (
          <div key={interval} className="flex flex-col items-center bg-white/20 backdrop-blur-md rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[120px]">
            <span className="text-4xl md:text-6xl font-light">
              {value !== '00' && value < 10 ? `0${value}` : value}
            </span>
            <span className="text-sm md:text-base uppercase tracking-wider mt-2">{interval}</span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CountdownSlide;
