import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const ScrollIndicator = () => (
  <motion.div
    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, y: [0, 10, 0] }}
    transition={{ 
      opacity: { delay: 3 },
      y: { duration: 2, repeat: Infinity }
    }}
  >
    <motion.span 
      className="text-sm tracking-[0.3em] uppercase font-display font-bold"
      style={{
        background: 'linear-gradient(135deg, hsl(45 90% 55%) 0%, hsl(280 60% 60%) 50%, hsl(45 90% 55%) 100%)',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
      animate={{
        backgroundPosition: ['0% center', '200% center'],
        textShadow: [
          '0 0 20px hsl(45 90% 55% / 0.3)',
          '0 0 40px hsl(280 60% 50% / 0.5)',
          '0 0 20px hsl(45 90% 55% / 0.3)',
        ]
      }}
      transition={{
        backgroundPosition: { duration: 3, repeat: Infinity, ease: 'linear' },
        textShadow: { duration: 2, repeat: Infinity }
      }}
    >
      Scroll to Explore
    </motion.span>
    <motion.div
      className="relative"
      animate={{ scale: [1, 1.3, 1], y: [0, 5, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: [
            '0 0 15px hsl(45 90% 55% / 0.5)',
            '0 0 30px hsl(280 60% 50% / 0.7)',
            '0 0 15px hsl(45 90% 55% / 0.5)',
          ]
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <ArrowDown className="w-7 h-7 text-primary" />
    </motion.div>
  </motion.div>
);