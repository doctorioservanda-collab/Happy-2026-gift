import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, PartyPopper } from 'lucide-react';
import welcomeGirl from '@/assets/welcome-girl.png';

export const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      const hasSeenWelcome = sessionStorage.getItem('hasSeenWelcome');
      if (!hasSeenWelcome) {
        setIsOpen(true);
      }
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
            className="relative bg-card border border-border rounded-3xl overflow-hidden max-w-md w-full shadow-2xl"
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          >
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
                className="relative mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 80 }}
                style={{
                  boxShadow: '0 0 40px hsl(45 90% 55% / 0.4)',
                }}
              >
                <img
                  src={welcomeGirl}
                  alt="Welcome"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* High Five emoji floating */}
              <motion.div
                className="absolute top-8 right-8 text-4xl"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 15, -15, 0],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🖐️
              </motion.div>
            </div>

            {/* Text Content */}
            <div className="p-6 text-center">
              <motion.h2
                className="font-display text-2xl font-bold mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{
                  background: 'linear-gradient(90deg, hsl(45 90% 55%), hsl(280 60% 55%), hsl(340 70% 55%))',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Happy New Year! 🎉
              </motion.h2>

              <motion.p
                className="text-muted-foreground mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Welcome to our store! Find amazing gifts for your 2026 celebration.
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
                Start Shopping 🛍️
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
