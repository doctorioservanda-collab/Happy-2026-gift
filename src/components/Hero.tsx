import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Gift, Wallet } from 'lucide-react';
import heroImage from '@/assets/christmas-hero.jpg';
import { Logo } from './Logo';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Five beautiful girls from around the world celebrating Christmas together with presents in the snow"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Floating Presents Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ y: '100vh', x: `${15 + i * 15}%`, rotate: 0 }}
            animate={{ 
              y: '-20vh', 
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 3,
              ease: 'linear',
            }}
          >
            <Gift className="w-8 h-8 text-christmas-gold/40" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <Logo size="lg" />
            </motion.div>

            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-christmas-gold animate-pulse" />
              <span className="text-christmas-gold font-medium tracking-widest uppercase text-sm">
                Holiday Collection 2026 • New Year Edition
              </span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="block">Happy</span>
              <span className="block text-gradient-christmas text-6xl md:text-8xl">
                Merry Christmas
              </span>
              <span className="block text-christmas-gold">2026</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Discover <span className="text-christmas-gold font-semibold">1000+ magical gifts</span> from around the world. 
              Pay with <span className="text-secondary font-semibold">ETH, BTC</span>, or card — 
              celebrate the joy of giving this holiday season.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#products"
                className="btn-christmas inline-flex items-center justify-center gap-2 text-lg"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px hsl(var(--christmas-gold) / 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Gift className="w-5 h-5" />
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
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
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
                whileHover={{ scale: 1.05 }}
              >
                <div className="font-heading text-2xl md:text-3xl font-bold text-christmas-gold">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-muted-foreground tracking-wider uppercase">Scroll to explore</span>
        <ArrowDown className="w-6 h-6 text-christmas-gold" />
      </motion.div>
    </section>
  );
};
