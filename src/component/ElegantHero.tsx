import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles, Gift } from 'lucide-react';
import { Button } from '@/component/ui/button';

export const ElegantHero = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient Élégant */}
      <div className="absolute inset-0 bg-gradient-to-br from-newyear-midnight via-background to-newyear-navy">
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--newyear-gold)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--newyear-gold)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating Particles Subtiles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, hsl(var(--newyear-gold) / 0.4) 0%, transparent 100%)`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs Subtiles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
              background: `radial-gradient(circle, hsl(var(--newyear-gold) / ${0.08 - i * 0.02}) 0%, transparent 70%)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge Élégant */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-newyear-gold/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-newyear-gold animate-gentle-pulse" />
              <span className="text-sm font-medium text-newyear-gold/90 tracking-wide">
                NEW YEAR 2026 COLLECTION
              </span>
              <Sparkles className="w-4 h-4 text-newyear-silver animate-gentle-pulse" />
            </motion.div>
          )}

          {/* Main Heading */}
          {mounted && (
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] tracking-tight"
            >
              <span className="block text-foreground mb-2">
                Bonne Année
              </span>
              <motion.span
                className="block text-gradient-elegant"
                animate={{
                  backgroundPosition: ['0% center', '100% center', '0% center'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% auto',
                }}
              >
                2026
              </motion.span>
            </motion.h1>
          )}

          {/* Subtitle */}
          {mounted && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-body"
            >
              Découvrez notre collection exclusive de cadeaux premium pour célébrer 
              <span className="text-newyear-gold font-semibold"> 2026 </span>
              avec élégance et style
            </motion.p>
          )}

          {/* CTA Buttons */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="#products"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-newyear inline-flex items-center gap-3 px-8 py-4 text-base font-semibold"
              >
                <Gift className="w-5 h-5" />
                Explorer la Collection
              </motion.a>
              
              <motion.a
                href="#categories"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-newyear-silver/50 text-newyear-silver hover:border-newyear-silver hover:bg-newyear-silver/10 transition-all duration-300 font-semibold"
              >
                Voir les Catégories
              </motion.a>
            </motion.div>
          )}

          {/* Scroll Indicator */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="flex flex-col items-center gap-2 text-newyear-gold/60"
              >
                <span className="text-xs font-medium tracking-wider uppercase">Découvrir</span>
                <ArrowDown className="w-5 h-5" />
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 hidden lg:block">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="w-32 h-32 border border-newyear-gold/10 rounded-full"
        />
      </div>
      <div className="absolute bottom-20 right-10 hidden lg:block">
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="w-40 h-40 border border-newyear-silver/10 rounded-full"
        />
      </div>
    </section>
  );
};
