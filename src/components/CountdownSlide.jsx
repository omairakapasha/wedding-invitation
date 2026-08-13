import React from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeUp } from '../animations';
import { useCountdown } from '../hooks/useCountdown';
import { GoldText } from './GoldText';

const CountdownSlide = ({ targetDate = '2026-06-19T00:00:00', bgImage = '/couple2.jpg' }) => {
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
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImage})` }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
    >
      <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-script mb-8 text-center">
        <GoldText>The Countdown Begins</GoldText>
      </motion.h2>
      <motion.div variants={fadeUp} className="grid grid-cols-2 md:flex md:flex-row gap-3 md:gap-8 text-center px-4">
        {Object.entries(displayTime).map(([interval, value]) => (
          <div key={interval} className="flex flex-col items-center justify-center bg-[#0f0802]/20 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-6 min-w-[130px] md:min-w-[120px] aspect-square md:aspect-auto">
            <span className="text-4xl md:text-6xl font-light">
              {value !== '00' && value < 10 ? `0${value}` : value}
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] mt-2 text-white/80">{interval}</span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CountdownSlide;
