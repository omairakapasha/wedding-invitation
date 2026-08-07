import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function EnvelopeIntro({ onComplete, onOpen }) {
  const [opened, setOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem('invited')) {
      setIsVisible(false);
      onComplete();
    }
  }, []);

  const handleTap = () => {
    if (opened) return;
    setOpened(true);
    if (onOpen) onOpen();

    // Sequence: 
    // 1. Open flap (1.4s)
    // 2. Slide letter up (1.5s)
    // 3. Fade out screen and hide envelope
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        sessionStorage.setItem('invited', 'true');
        onComplete();
      }, 1000); // Wait for fade out
    }, 3600); 
  };

  const paperTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(/event_bg.png)' }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <motion.div
          className="relative w-[90vw] max-w-[500px] aspect-[1.5/1] cursor-pointer"
          style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
          animate={opened ? { y: 100 } : { y: [0, -10, 0] }}
          transition={opened ? { duration: 1, ease: "easeInOut" } : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
          onClick={handleTap}
        >

          {/* Back of Envelope (Inside) */}
          <div className="absolute inset-0 shadow-2xl rounded-md pointer-events-none" style={{
            backgroundBlendMode: 'multiply',
            backgroundSize: '150px 150px, auto',
            backgroundImage: `${paperTexture}, linear-gradient(to bottom, #d4c5b5, #b39b85)`
          }} />

          {/* The Letter (Slides Up) */}
          <motion.div 
            className="absolute left-[5%] right-[5%] bg-[#fcfaf7] shadow-lg flex flex-col items-center justify-start rounded p-4 md:p-8 border border-[#e8dfd5] pointer-events-none"
            style={{ height: '95%', bottom: '5%', zIndex: 10, backgroundBlendMode: 'multiply', backgroundSize: '150px 150px', backgroundImage: paperTexture }}
            initial={{ y: 0 }}
            animate={opened ? { y: '-60%' } : { y: 0 }}
            transition={{ delay: 1.4, duration: 1.5, type: 'spring', bounce: 0.15 }}
          >
            <div className="w-10 h-10 rounded-full border border-[#d4c5b5] flex items-center justify-center mb-3 shrink-0">
              <span className="font-serif text-[#a67c00]">ZR</span>
            </div>
            <h2 className="font-serif text-xl md:text-2xl text-[#333] tracking-wide text-center">
              Zubair Rauf
            </h2>
            <span className="text-[#a67c00] text-sm my-1 font-serif italic">&</span>
            <h2 className="font-serif text-sm md:text-lg text-[#333] mb-2 tracking-wide text-center">
              Daughter of<br />Muhammad Javed
            </h2>
            <p className="text-[9px] md:text-xs uppercase tracking-[0.2em] text-gray-400 mt-auto text-center">
              You are invited
            </p>
          </motion.div>

          {/* Left Flap */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{ 
              clipPath: 'polygon(0 0, 50% 50%, 0 100%)', 
              zIndex: 20, 
              backgroundBlendMode: 'multiply',
              backgroundSize: '150px 150px, auto',
              backgroundImage: `${paperTexture}, linear-gradient(to right, #efe3d6 0%, #e2d2c3 30%, #c4b09e 50%, transparent 50%)`
            }}
          />
          {/* Right Flap */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{ 
              clipPath: 'polygon(100% 0, 50% 50%, 100% 100%)', 
              zIndex: 20, 
              backgroundBlendMode: 'multiply',
              backgroundSize: '150px 150px, auto',
              backgroundImage: `${paperTexture}, linear-gradient(to left, #efe3d6 0%, #e2d2c3 30%, #c4b09e 50%, transparent 50%)`
            }}
          />
          {/* Bottom Flap */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{ 
              clipPath: 'polygon(0 100%, 50% 50%, 100% 100%)', 
              zIndex: 21, 
              backgroundBlendMode: 'multiply',
              backgroundSize: '150px 150px, auto',
              backgroundImage: `${paperTexture}, linear-gradient(to top, #f2e7da 0%, #e2d1bf 30%, #bca590 50%, transparent 50%)`
            }}
          />

          {/* Top Flap Container (Rotates open) */}
          <motion.div 
            className="absolute inset-0 origin-top pointer-events-none"
            initial={{ rotateX: 0, zIndex: 25 }}
            animate={opened ? { rotateX: 180, zIndex: 5 } : { rotateX: 0, zIndex: 25 }}
            transition={{ 
              rotateX: { duration: 1.4, type: 'tween', ease: 'easeInOut' },
              zIndex: { delay: 0.7, duration: 0 }
            }}
          >
            {/* The clipped paper flap */}
            <div 
              className="absolute inset-0"
              style={{ 
                clipPath: 'polygon(0 0, 100% 0, 50% 55%)', 
                backgroundBlendMode: 'multiply',
                backgroundSize: '150px 150px, auto',
                backgroundImage: `${paperTexture}, linear-gradient(to bottom, #e5d6c6 0%, #f7ede3 45%, #f7ede3 55%, transparent 55%)`
              }}
            />

            {/* Wax Seal attached to the flap */}
            <div
              className="absolute left-1/2 top-[55%] w-24 h-24 md:w-28 md:h-28"
              style={{ transform: 'translate(-50%, -50%)', zIndex: 40 }}
            >
              <motion.img
                src="/wax_seal.png"
                alt="Wax Seal"
                className="w-full h-full object-cover"
                style={{ clipPath: 'circle(36% at 50% 50%)', mixBlendMode: 'multiply' }}
                animate={opened ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </motion.div>

        </motion.div>

        <motion.p
          animate={opened ? { opacity: 0 } : { opacity: [0.5, 1, 0.5] }}
          transition={opened ? { duration: 0.2 } : { duration: 2, repeat: Infinity }}
          className="absolute bottom-[15%] font-serif text-lg md:text-xl text-[#dfb648] tracking-[0.2em] uppercase"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
        >
          {opened ? '' : 'Tap to Open'}
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
