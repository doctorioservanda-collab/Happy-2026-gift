import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Sparkles, Gift, Wallet, Star } from 'lucide-react';
import heroImage from '@/assets/christmas-hero.jpg';
import { Logo } from './Logo';
import { useEffect, useState } from 'react';

// Animated letter component
const AnimatedLetter = ({ letter, index }: { letter: string; index: number }) => (
  <motion.span
    initial={{ opacity: 0, y: 50, rotateX: -90 }}
    animate={{ opacity: 1, y: 0, rotateX: 0 }}
    transition={{
      duration: 0.5,
      delay: index * 0.05,
      type: 'spring',
      stiffness: 100,
    }}
    className="inline-block"
    style={{ transformStyle: 'preserve-3d' }}
  >
    {letter === ' ' ? '\u00A0' : letter}
  </motion.span>
);

// Animated text component
const AnimatedText = ({ text, className }: { text: string; className?: string }) => (
  <span className={className}>
    {text.split('').map((letter, index) => (
      <AnimatedLetter key={index} letter={letter} index={index} />
    ))}
  </span>
);

// Sparkle burst component
const SparkleBurst = ({ delay }: { delay: number }) => (
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

export const Hero = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <motion.img
          src={heroImage}
          alt="Five beautiful girls from around the world celebrating Christmas together with presents in the snow"
          className="w-full h-full object-cover object-top"
          initial={{ filter: 'blur(10px)' }}
          animate={{ filter: 'blur(0px)' }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </motion.div>

      {/* Animated Sparkles Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <SparkleBurst key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Floating Presents Animation - Enhanced */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              y: '110vh', 
              x: `${5 + i * 10}%`, 
              rotate: 0,
              scale: 0.5 + Math.random() * 0.5
            }}
            animate={{ 
              y: '-20vh', 
              rotate: [0, 15, -15, 10, -10, 0],
              x: [`${5 + i * 10}%`, `${8 + i * 10}%`, `${3 + i * 10}%`, `${5 + i * 10}%`],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: 'linear',
            }}
          >
            <motion.div
              animate={{ 
                rotateY: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotateY: { duration: 4, repeat: Infinity, ease: 'linear' },
                scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              <Gift 
                className="text-christmas-gold drop-shadow-lg" 
                style={{ 
                  width: `${24 + i * 4}px`, 
                  height: `${24 + i * 4}px`,
                  filter: 'drop-shadow(0 0 10px hsl(43 96% 56% / 0.5))'
                }} 
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <AnimatePresence>
          {showContent && (
            <motion.div 
              className="max-w-2xl"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Logo with glow animation */}
              <motion.div
                variants={itemVariants}
                className="mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ 
                    filter: [
                      'drop-shadow(0 0 10px hsl(43 96% 56% / 0.3))',
                      'drop-shadow(0 0 25px hsl(43 96% 56% / 0.6))',
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
                <span className="text-christmas-gold font-medium tracking-widest uppercase text-sm">
                  Holiday Collection 2026 • New Year Edition
                </span>
              </motion.div>
              
              {/* Animated Main Title */}
              <motion.h1 
                variants={itemVariants}
                className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
              >
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <AnimatedText text="Happy" />
                </motion.span>
                <motion.span 
                  className="block text-6xl md:text-8xl overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.span
                    className="inline-block text-gradient-christmas"
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    style={{ backgroundSize: '200% 200%' }}
                  >
                    <AnimatedText text="Merry Christmas" />
                  </motion.span>
                </motion.span>
                
                {/* Animated 2026 */}
                <motion.span 
                  className="block text-christmas-gold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 1.5,
                    type: 'spring',
                    stiffness: 200,
                    damping: 15
                  }}
                >
                  <motion.span
                    className="inline-block"
                    animate={{ 
                      textShadow: [
                        '0 0 10px hsl(43 96% 56% / 0.5)',
                        '0 0 30px hsl(43 96% 56% / 0.8)',
                        '0 0 10px hsl(43 96% 56% / 0.5)',
                      ],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {'2026'.split('').map((char, i) => (
                      <motion.span
                        key={i}
                        className="inline-block"
                        initial={{ opacity: 0, y: 50, rotateY: -90 }}
                        animate={{ opacity: 1, y: 0, rotateY: 0 }}
                        transition={{
                          delay: 1.8 + i * 0.15,
                          type: 'spring',
                          stiffness: 150,
                        }}
                        whileHover={{ 
                          scale: 1.3, 
                          color: 'hsl(0 72% 55%)',
                          transition: { duration: 0.2 }
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
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
                <motion.a
                  href="#products"
                  className="btn-christmas inline-flex items-center justify-center gap-2 text-lg"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: '0 0 40px hsl(43 96% 56% / 0.6)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    boxShadow: [
                      '0 0 20px hsl(0 72% 51% / 0.3)',
                      '0 0 35px hsl(0 72% 51% / 0.5)',
                      '0 0 20px hsl(0 72% 51% / 0.3)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <Gift className="w-5 h-5" />
                  </motion.div>
                  Shop Presents
                  <ArrowDown className="w-4 h-4" />
                </motion.a>
                
                <motion.a
                  href="#categories"
                  className="btn-gold inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Wallet className="w-5 h-5" />
                  Pay with Crypto
                </motion.a>
              </motion.div>

              {/* Stats with stagger animation */}
              <motion.div
                variants={itemVariants}
                className="mt-16 grid grid-cols-4 gap-6"
              >
                {[
                  { value: '1000+', label: 'Unique Gifts' },
                  { value: 'ETH', label: 'Crypto Pay' },
                  { value: '5', label: 'Continents' },
                  { value: '24h', label: 'Fast Delivery' },
                ].map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center sm:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 + index * 0.2 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <motion.div 
                      className="font-heading text-2xl md:text-3xl font-bold text-christmas-gold"
                      animate={{ 
                        textShadow: [
                          '0 0 5px hsl(43 96% 56% / 0.3)',
                          '0 0 15px hsl(43 96% 56% / 0.5)',
                          '0 0 5px hsl(43 96% 56% / 0.3)',
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 3 },
          y: { duration: 2, repeat: Infinity }
        }}
      >
        <span className="text-xs text-muted-foreground tracking-wider uppercase">Scroll to explore</span>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-christmas-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
};
