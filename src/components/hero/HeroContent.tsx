import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Wallet, Sparkles } from 'lucide-react';
import { Logo } from '../Logo';
import { AnimatedText, Animated2026, AnimatedWord } from './AnimatedLetters';
import gift3D from '@/assets/gift-3d.png';

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
    { value: '1000+', label: 'Unique Gifts' },
    { value: 'ETH', label: 'Crypto Pay' },
    { value: '5', label: 'Continents' },
    { value: '24h', label: 'Fast Delivery' },
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
            {/* Logo with 3D glow animation */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                animate={{ 
                  filter: [
                    'drop-shadow(0 0 10px hsl(43 96% 56% / 0.3))',
                    'drop-shadow(0 0 30px hsl(43 96% 56% / 0.6))',
                    'drop-shadow(0 0 10px hsl(43 96% 56% / 0.3))',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Logo size="lg" />
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5 text-christmas-gold" />
              </motion.div>
              <span className="text-christmas-gold font-display font-medium tracking-widest uppercase text-sm">
                Holiday Collection 2026 • New Year Edition
              </span>
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
                  <AnimatedText text="Merry Christmas" variant="3d" staggerDelay={5} />
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
                className="text-christmas-gold font-semibold"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >1000+ magical gifts</motion.span> from around the world. 
              Pay with <span className="text-secondary font-semibold">ETH, BTC</span>, or card — 
              celebrate the joy of giving this holiday season.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              {/* 3D Gift Button */}
              <motion.a
                href="#products"
                className="btn-christmas inline-flex items-center justify-center gap-3 text-lg relative overflow-visible"
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: '0 0 50px hsl(43 96% 56% / 0.6)',
                }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: [
                    '0 0 20px hsl(0 72% 51% / 0.3)',
                    '0 0 40px hsl(0 72% 51% / 0.5)',
                    '0 0 20px hsl(0 72% 51% / 0.3)',
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
                Shop Presents
                <ArrowDown className="w-4 h-4" />
              </motion.a>
              
              <motion.a
                href="#categories"
                className="btn-gold inline-flex items-center justify-center gap-2"
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
              className="mt-16 grid grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center sm:text-left"
                  initial={{ opacity: 0, y: 50, rotateX: -45 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 2 + index * 0.2, type: 'spring', stiffness: 80 }}
                  whileHover={{ scale: 1.15, y: -10, rotateY: 10 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div 
                    className="font-display text-2xl md:text-3xl font-bold text-christmas-gold"
                    animate={{ 
                      textShadow: [
                        '0 0 10px hsl(43 96% 56% / 0.3), 0 10px 20px hsl(0 0% 0% / 0.2)',
                        '0 0 25px hsl(43 96% 56% / 0.6), 0 15px 30px hsl(0 0% 0% / 0.3)',
                        '0 0 10px hsl(43 96% 56% / 0.3), 0 10px 20px hsl(0 0% 0% / 0.2)',
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {stat.value}
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
