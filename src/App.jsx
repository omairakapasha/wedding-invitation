import React, { useState, useEffect, useRef } from 'react';
import { useScroll, useSpring, motion } from 'framer-motion';
import EnvelopeIntro from './components/EnvelopeIntro';
import HeroSlide from './components/HeroSlide';
import CountdownSlide from './components/CountdownSlide';
import EventSlide from './components/EventSlide';
import FinalSlide from './components/FinalSlide';

function App() {
  const [showInvite, setShowInvite] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    // We intentionally removed the sessionStorage check. 
    // We WANT the envelope to show every time the page loads so that 
    // the user is forced to tap the screen, which guarantees the browser 
    // will allow the background music to play!
  }, []);

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set volume to 30% for subtle background ambiance
      audioRef.current.play().catch(e => console.log('Audio play failed:', e));
      setIsPlaying(true);
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log('Audio play failed:', e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/LoveStory.mp3" loop preload="auto" />

      {!showInvite ? (
        <EnvelopeIntro onComplete={() => setShowInvite(true)} onOpen={startMusic} />
      ) : (
        <div className="app-container bg-[#fcfaf7] overflow-x-hidden antialiased relative">


          <motion.div style={{
            position: 'fixed', right: 0, top: 0,
            width: '3px', height: '100vh',
            background: 'linear-gradient(180deg, #c9942a, #f0d080)',
            transformOrigin: 'top', scaleY, zIndex: 9999
          }} />
          <HeroSlide />

          <CountdownSlide targetDate="2026-09-17T18:00:00" bgImage="/couple2.jpg" />

          {/* Mehendi */}
          <EventSlide
            label=""
            heading="Mehendi"
            headingColor="#1e5c2a"
            description=""
            date="Thursday, 17 September 2026"
            time="6:00 PM onwards"
            venue="In House"
            bgImage="/Mehndi_Bg.jpg"
          // dressCode="Western"
          // mapsUrl="https://maps.google.com"
          />

          {/* Barat */}
          <EventSlide
            label=""
            heading="Barat"
            headingColor="#7a4e00"
            date="Friday, 18 September 2026"
            time="9:00 PM Gathering | 10:00 PM Dinner"
            venue="Grand Convention Banquet, Sector 49 Korangi, Karachi"
            bgImage="/Barat_Bg.jpg"
            // dressCode="Traditional / Regal / Formal"
            mapsUrl="https://www.google.com/maps/place/Grand+Convention+Banquet/@24.8127293,67.1469573,777m/data=!3m1!1e3!4m6!3m5!1s0x3eb33b9f19f7950b:0x17501fc6818fe348!8m2!3d24.8127293!4d67.1495322!16s%2Fg%2F11l80gcx4g?entry=ttu&g_ep=EgoyMDI2MDgxMC4wIKXMDSoASAFQAw%3D%3D"
          />

          {/* Valima */}
          <EventSlide
            label=""
            heading="Valima Reception"
            headingColor="#6b1e48"
            date="Sunday, 20 September 2026"
            time="9:00 PM Gathering | 10:00 PM Dinner"
            venue="Zamzam Banquet Lawn A, Shahra-e-Faisal Karachi"
            bgImage="/Valima_Bg.jpg"
            // dressCode="Elegant Evening Gowns & Tuxedos"
            mapsUrl="https://www.google.com/maps/place/Zamzam+Banquet+Lawn+A/@24.8866065,67.1073226,12432m/data=!3m1!1e3!4m10!1m2!2m1!1szamzam+lawn+a!3m6!1s0x3eb339002463c53d:0xab6ccd154a99b129!8m2!3d24.8866065!4d67.1487319!15sCg16YW16YW0gbGF3biBhkgEMYmFucXVldF9oYWxs4AEA!16s%2Fg%2F11wxgwyz_v?entry=ttu&g_ep=EgoyMDI2MDgwNC4wIKXMDSoASAFQAw%3D%3D"
          />

          <FinalSlide />
        </div>
      )}
    </>
  );
}

export default App;
