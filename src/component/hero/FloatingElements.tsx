import { motion } from 'framer-motion';
import { Gift, Star, Sparkles } from 'lucide-react';

// Sparkle burst component
export const SparkleBurst = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ 
      scale: [0, 1.5, 0],
      opacity: [0, 1, 0],
      rotate: [0, 180, 360]
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatDelay: 3,
    }}
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  >
    <Star className="w-4 h-4 text-christmas-gold fill-christmas-gold" />
  </motion.div>
);

// Floating presents
export const FloatingPresents = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        initial={{ 
          y: '110vh', 
          x: `${5 + i * 8}%`, 
          rotate: 0,
          scale: 0.5 + Math.random() * 0.5
        }}
        animate={{ 
          y: '-20vh', 
          rotate: [0, 15, -15, 10, -10, 0],
          x: [`${5 + i * 8}%`, `${8 + i * 8}%`, `${3 + i * 8}%`, `${5 + i * 8}%`],
        }}
        transition={{
          duration: 15 + i * 2,
          repeat: Infinity,
          delay: i * 1.5,
          ease: 'linear',
        }}
      >
        <motion.div
          animate={{ 
            rotateY: [0, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{
            rotateY: { duration: 4, repeat: Infinity, ease: 'linear' },
            scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <Gift 
            className="text-christmas-gold drop-shadow-lg" 
            style={{ 
              width: `${28 + i * 3}px`, 
              height: `${28 + i * 3}px`,
              filter: 'drop-shadow(0 0 15px hsl(43 96% 56% / 0.6))'
            }} 
          />
        </motion.div>
      </motion.div>
    ))}
  </div>
);

// Sparkles layer
export const SparklesLayer = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <SparkleBurst key={i} delay={i * 0.4} />
    ))}
  </div>
);

// Glowing orbs
export const GlowingOrbs = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: `${100 + i * 50}px`,
          height: `${100 + i * 50}px`,
          left: `${10 + i * 20}%`,
          top: `${20 + i * 15}%`,
          background: `radial-gradient(circle, hsl(43 96% 56% / 0.15) 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4 + i,
          repeat: Infinity,
          delay: i * 0.5,
        }}
      />
    ))}
  </div>
);
