import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import heroImage from '@/assets/christmas-hero.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Christmas girl with presents"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium tracking-wide uppercase text-sm">
                Holiday Collection 2024
              </span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Make This
              <span className="block text-gradient-christmas">
                Christmas
              </span>
              Unforgettable
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Discover over 250+ handpicked gifts for your loved ones. Pay with crypto or card — 
              spread joy this holiday season.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#products"
                className="btn-christmas inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Shop Now
                <ArrowDown className="w-4 h-4" />
              </motion.a>
              
              <motion.a
                href="#categories"
                className="btn-gold inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Browse Categories
              </motion.a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-3 gap-8"
          >
            {[
              { value: '250+', label: 'Products' },
              { value: 'ETH', label: 'Crypto Pay' },
              { value: '24h', label: 'Delivery' },
            ].map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};
