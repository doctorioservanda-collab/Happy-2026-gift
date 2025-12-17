import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Wallet, PartyPopper, Wine } from 'lucide-react';
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


  return (
    <div className="container mx-auto px-4 relative z-10 pt-20">
      <AnimatePresence>
        {showContent && (
          <motion.div 
            className="max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ perspective: '2000px' }}
          >
            {/* Brand Logo - More Visible */}
            <motion.div
              variants={itemVariants}
              className="mb-8 flex items-center gap-4"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className="relative"
                animate={{ 
                  filter: [
                    'drop-shadow(0 0 20px hsl(45 90% 55% / 0.5))',
                    'drop-shadow(0 0 50px hsl(45 90% 55% / 0.9))',
                    'drop-shadow(0 0 20px hsl(45 90% 55% / 0.5))',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.img
                  src={brandCandle}
                  alt="2026 Brand Candle"
                  className="h-24 md:h-32 w-auto object-contain brightness-110"
                  animate={{ 
                    y: [0, -8, 0],
                    rotateY: [0, 5, 0, -5, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>

            {/* Collection Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <PartyPopper className="w-6 h-6 text-primary" />
              </motion.div>
              <motion.span 
                className="font-display font-bold tracking-[0.2em] uppercase text-sm"
                style={{
                  background: 'linear-gradient(90deg, hsl(45 90% 55%) 0%, hsl(280 60% 60%) 50%, hsl(340 70% 55%) 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                animate={{ backgroundPosition: ['0% center', '200% center'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                New Year Collection 2026 • Celebration Edition
              </motion.span>
              <motion.div
                animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <Wine className="w-6 h-6 text-secondary" />
              </motion.div>
            </motion.div>
            
            {/* Main Title with 3D Rainbow Animation */}
            <motion.h1 
              variants={itemVariants}
              className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight"
              style={{ perspective: '1500px', transformStyle: 'preserve-3d' }}
            >
              {/* Happy */}
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.span
                  className="inline-block font-display font-black text-5xl md:text-6xl"
                  style={{
                    background: 'linear-gradient(135deg, hsl(45 90% 60%) 0%, hsl(35 90% 50%) 25%, hsl(280 70% 60%) 50%, hsl(340 80% 60%) 75%, hsl(45 90% 60%) 100%)',
                    backgroundSize: '300% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                  animate={{ 
                    backgroundPosition: ['0% center', '300% center'],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                >
                  Happy
                </motion.span>
              </motion.span>
              
              {/* New Year */}
              <motion.span 
                className="block text-6xl md:text-8xl overflow-visible"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.span
                  className="inline-block font-elegant"
                  style={{
                    background: 'linear-gradient(135deg, hsl(280 80% 65%) 0%, hsl(340 90% 60%) 25%, hsl(45 100% 55%) 50%, hsl(180 80% 50%) 75%, hsl(280 80% 65%) 100%)',
                    backgroundSize: '400% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                  animate={{ 
                    backgroundPosition: ['0% center', '400% center'],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                >
                  New Year
                </motion.span>
              </motion.span>
              
              {/* 2026 - Large Visible Numbers */}
              <motion.span 
                className="block mt-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.8, type: 'spring' }}
              >
                <motion.span
                  className="inline-block font-display text-7xl md:text-9xl font-black tracking-wider"
                  style={{
                    background: 'linear-gradient(135deg, hsl(45 100% 60%) 0%, hsl(40 90% 50%) 25%, hsl(280 70% 55%) 50%, hsl(340 80% 55%) 75%, hsl(45 100% 60%) 100%)',
                    backgroundSize: '300% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 60px hsl(45 90% 55% / 0.4)',
                  }}
                  animate={{ 
                    backgroundPosition: ['0% center', '300% center'],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                >
                  2026
                </motion.span>
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed font-body"
            >
              Discover{' '}
              <motion.span 
                className="font-bold"
                style={{
                  background: 'linear-gradient(90deg, hsl(45 90% 55%), hsl(40 60% 70%), hsl(45 90% 55%))',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                animate={{ backgroundPosition: ['0% center', '200% center'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                2026+ premium gifts
              </motion.span>{' '}
              for your celebration. Pay with{' '}
              <motion.span 
                className="font-bold"
                style={{
                  background: 'linear-gradient(90deg, hsl(280 60% 50%), hsl(200 90% 60%), hsl(280 60% 50%))',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                animate={{ backgroundPosition: ['0% center', '200% center'] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                ETH, BTC
              </motion.span>
              , or card — ring in the new year with style and elegance.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
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

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};