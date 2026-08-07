import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../animations';

const EventSlide = ({ 
  label, 
  heading, 
  headingColor = '#1e5c2a', 
  description, 
  date, 
  time, 
  venue, 
  dressCode, 
  mapsUrl 
}) => {
  return (
    <div className="event-slide min-h-screen w-full flex items-center justify-center bg-[#fcfaf7] p-6 md:p-8">
      <motion.div 
        className="max-w-lg w-full bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2rem] text-center border border-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
      >
        {/* Top Label */}
        {label && (
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase mb-4">
            {label}
          </p>
        )}
        
        {/* Dynamic Heading Color */}
        <h2 
          className="text-4xl md:text-5xl font-serif mb-6" 
          style={{ color: headingColor }}
        >
          {heading}
        </h2>
        
        {/* Divider */}
        <div 
          className="w-16 h-[1px] mx-auto mb-8" 
          style={{ backgroundColor: headingColor, opacity: 0.3 }}
        />

        <div className="space-y-6 text-gray-700 font-light text-base md:text-lg">
          {/* Description */}
          {description && (
            <p className="italic text-gray-500 mb-8 font-serif text-lg">
              "{description}"
            </p>
          )}
          
          {/* Date & Time */}
          <div>
            <span className="block font-medium text-gray-900 tracking-wide">{date}</span>
            <span className="block text-gray-500 mt-1">{time}</span>
          </div>
          
          {/* Venue & Maps */}
          <div>
            <span className="block font-medium text-gray-900">{venue}</span>
            {mapsUrl && (
              <a 
                href={mapsUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-block mt-3 text-sm font-medium hover:opacity-70 transition-opacity underline underline-offset-4"
                style={{ color: headingColor }}
              >
                View on Map
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EventSlide;
