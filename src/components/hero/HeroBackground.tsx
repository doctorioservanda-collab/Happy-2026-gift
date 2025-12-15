import { motion } from 'framer-motion';
import heroImage from '@/assets/newyear-hero.jpg';

export const HeroBackground = () => (
  <motion.div 
    className="absolute inset-0"
    initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: 'easeOut' }}
  >
    <motion.img
      src={heroImage}
      alt="Beautiful couple celebrating New Year 2026 with champagne glasses, fireworks, Christmas tree, and festive dinner at home"
      className="w-full h-full object-cover object-center"
      initial={{ filter: 'blur(10px)' }}
      animate={{ filter: 'blur(0px)' }}
      transition={{ duration: 1 }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
    
    {/* Firework overlay effect */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${20 + (i * 10)}%`,
            top: `${10 + (i % 3) * 20}%`,
            backgroundColor: i % 3 === 0 ? 'hsl(45 90% 55%)' : i % 3 === 1 ? 'hsl(280 60% 50%)' : 'hsl(0 80% 55%)',
          }}
          animate={{
            scale: [0, 1, 1.5, 0],
            opacity: [0, 1, 0.8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  </motion.div>
);