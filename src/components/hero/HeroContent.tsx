import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Wallet, Sparkles, PartyPopper, Wine } from 'lucide-react';
import { AnimatedText, Animated2026, AnimatedWord } from './AnimatedLetters';
import gift3D from '@/assets/gift-3d.png';
import brandCandle from '@/assets/brand-candle-2026.png';

interface HeroContentProps {
  showContent: boolean;
}

export const HeroContent = ({ showContent }: HeroContentProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
  };

  const stats = [
    { value: '2026+', label: 'Unique Gifts', icon: PartyPopper },
    { value: 'ETH', label: 'Crypto Pay', icon: Wallet },
    { value: 'Premium', label: 'Quality', icon: Wine },
    { value: '24h', label: 'Fast Delivery', icon: Sparkles },
  ];

  return (
    <div className="container mx-auto px-4 relative z-10 pt-20">
      <AnimatePresence>
        {showContent && (
          <motion.div 
            className="max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ perspective: '2000px' }}
          >
            {/* Brand Candle Logo */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                animate={{ 
                  filter: [
                    'drop-shadow(0 0 15px hsl(45 90% 55% / 0.4))',
                    'drop-shadow(0 0 40px hsl(45 90% 55% / 0.8))',
                    'drop-shadow(0 0 15px hsl(45 90% 55% / 0.4))',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.img
                  src={brandCandle}
                  alt="2026 Brand Candle"
                  className="h-20 md:h-24 w-auto object-contain"
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <PartyPopper className="w-6 h-6 text-primary" />
              </motion.div>
              <span className="text-primary font-display font-medium tracking-widest uppercase text-sm">
                New Year Collection 2026 • Celebration Edition
              </span>
              <motion.div
                animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <Wine className="w-6 h-6 text-secondary" />
              </motion.div>
            </motion.div>
            
            {/* Modern 3D Animated Main Title */}
            <motion.h1 
              variants={itemVariants}
              className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
              style={{ perspective: '1500px', transformStyle: 'preserve-3d' }}
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -100, rotateY: -30 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.3, type: 'spring', stiffness: 60 }}
              >
                <AnimatedWord word="Happy" className="font-display" delay={0.3} is3D />
              </motion.span>
              
              <motion.span 
                className="block text-6xl md:text-8xl overflow-visible"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.span
                  className="inline-block text-gradient-modern"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: '200% 200%', transformStyle: 'preserve-3d' }}
                >
                  <AnimatedText text="New Year" variant="3d" staggerDelay={5} />
                </motion.span>
              </motion.span>
              
              {/* Modern 3D 2026 Animation */}
              <motion.span className="block" style={{ transformStyle: 'preserve-3d' }}>
                <Animated2026 />
              </motion.span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed"
            >
              Discover <motion.span 
                className="text-primary font-semibold text-shadow-gold"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >2026+ premium gifts</motion.span> for your celebration. 
              Pay with <span className="text-secondary font-semibold">ETH, BTC</span>, or card — 
              ring in the new year with style and elegance.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              {/* 3D Gift Button */}
              <motion.a
                href="#products"
                className="btn-newyear inline-flex items-center justify-center gap-3 text-lg relative overflow-visible"
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: '0 0 60px hsl(45 90% 55% / 0.6)',
                }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: [
                    '0 0 25px hsl(45 90% 55% / 0.3)',
                    '0 0 50px hsl(45 90% 55% / 0.5)',
                    '0 0 25px hsl(45 90% 55% / 0.3)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.img
                  src={gift3D}
                  alt="Gift"
                  className="w-8 h-8 object-contain"
                  animate={{ 
                    rotateY: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotateY: { duration: 4, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                />
                Shop Gifts
                <ArrowDown className="w-4 h-4" />
              </motion.a>
              
              <motion.a
                href="#categories"
                className="btn-champagne inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, rotateY: -5 }}
                whileTap={{ scale: 0.98 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Wallet className="w-5 h-5" />
                Pay with Crypto
              </motion.a>
            </motion.div>

            {/* Stats with 3D stagger animation */}
            <motion.div
              variants={itemVariants}
              className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center sm:text-left glass-dark rounded-xl p-4"
                  initial={{ opacity: 0, y: 50, rotateX: -45 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 2 + index * 0.2, type: 'spring', stiffness: 80 }}
                  whileHover={{ scale: 1.1, y: -10, rotateY: 10 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                    <stat.icon className="w-5 h-5 text-primary" />
                    <motion.span 
                      className="font-display text-2xl md:text-3xl font-bold text-primary"
                      animate={{ 
                        textShadow: [
                          '0 0 10px hsl(45 90% 55% / 0.3)',
                          '0 0 25px hsl(45 90% 55% / 0.6)',
                          '0 0 10px hsl(45 90% 55% / 0.3)',
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {stat.value}
                    </motion.span>
                  </motion.div>
                  <div className="text-xs text-muted-foreground font-body">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};