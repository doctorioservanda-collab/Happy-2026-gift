import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, PartyPopper } from 'lucide-react';
import { Fireworks } from './Fireworks';
import { Snowfall } from './Snowfall';
import NewYearHeader from './NewYearHeader';
import welcomeGirl from '@/assets/welcome-girl.png';
import brandCandle from '@/assets/brand-candle-2026.png';

export const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay - always show for now
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenWelcome', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Popup Content */}
            <motion.div
              className="relative bg-card border border-border rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl welcome-popup-large"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            >
            {/* Festive effects (full-screen but rendered when popup open) */}
            <Fireworks />
            <Snowfall />
            {/* Left brand candle */}
            <img
              src={brandCandle}
              alt="brand candle"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 z-20 drop-shadow-lg"
            />
            {/* Sparkle decorations */}
            <motion.div
              className="absolute top-4 left-4 text-primary"
              animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
            <motion.div
              className="absolute top-4 right-12 text-secondary"
              animate={{ rotate: [360, 0], scale: [1, 1.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <PartyPopper className="w-5 h-5" />
            </motion.div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors z-10"
            >
              <X className="w-4 h-4 text-foreground" />
            </button>

            {/* Girl Image */}
            <div className="relative pt-6 px-6">
                <motion.div
                  className="relative mx-auto w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-2xl"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.12, type: 'spring', stiffness: 80 }}
                  style={{
                    boxShadow: '0 0 80px hsl(45 90% 55% / 0.55)',
                  }}
                >
                <img
                  src={welcomeGirl}
                  alt="Welcome"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Beauty's 4th Finger (Ring Finger) */}
              <div className="absolute top-4 right-4 text-5xl">
                💍
              </div>
              
              {/* Additional ring finger gesture */}
              <div className="absolute top-6 right-12 text-4xl">
                🤟
              </div>
            </div>

            {/* Text Content with stylized Happy 2026 */}
            <div className="p-6 text-center relative">
              <motion.div
                className="flex items-center justify-center gap-4 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <NewYearHeader />
              </motion.div>

              <motion.p
                className="text-muted-foreground mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
              >
                Welcome to our store! Find the perfect ring and gifts for your 2026 celebration. 💎
              </motion.p>

              <motion.button
                onClick={handleClose}
                className="btn-newyear w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Shop Rings & Gifts 💍🛍️
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
