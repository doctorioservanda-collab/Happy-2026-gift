import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import gift3D from '@/assets/gift-3d.png';

import giftsImg from '@/assets/categories/gifts.jpg';
import electronicsImg from '@/assets/categories/electronics.jpg';
import fashionImg from '@/assets/categories/fashion.jpg';
import homeImg from '@/assets/categories/home.jpg';
import beautyImg from '@/assets/categories/beauty.jpg';
import booksImg from '@/assets/categories/books.jpg';
import jewelryImg from '@/assets/categories/jewelry.jpg';
import sportsImg from '@/assets/categories/sports.jpg';

const categories = [
  { name: 'Holiday Gifts', image: giftsImg, count: 250 },
  { name: 'Electronics', image: electronicsImg, count: 180 },
  { name: 'Fashion', image: fashionImg, count: 320 },
  { name: 'Home & Living', image: homeImg, count: 145 },
  { name: 'Beauty', image: beautyImg, count: 95 },
  { name: 'Books & Media', image: booksImg, count: 210 },
  { name: 'Jewelry', image: jewelryImg, count: 85 },
  { name: 'Sports', image: sportsImg, count: 120 },
];

export const Categories = () => {
  return (
    <section id="categories" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* 3D Animated Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ perspective: '1500px' }}
        >
          {/* 3D Gift Icon with Animation */}
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            initial={{ scale: 0, rotateY: -180 }}
            whileInView={{ scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 10 }}
          >
            <motion.div
              className="relative"
              animate={{ 
                rotateY: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotateY: { duration: 6, repeat: Infinity, ease: 'linear' },
                scale: { duration: 2, repeat: Infinity }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.img
                src={gift3D}
                alt="3D Gift"
                className="w-24 h-24 object-contain drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 20px 40px hsl(0 72% 51% / 0.4))'
                }}
              />
              {/* Sparkle effects around gift */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${50 + 50 * Math.cos((i * Math.PI * 2) / 6)}%`,
                    top: `${50 + 50 * Math.sin((i * Math.PI * 2) / 6)}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <Sparkles className="w-4 h-4 text-christmas-gold" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.h2 
            className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 30, rotateX: -30 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 80 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              Discover Your Perfect Gift
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Find the perfect gift in our carefully organized categories — 
            curated for <span className="text-christmas-gold font-semibold">Merry Christmas 2026</span>
          </motion.p>
        </motion.div>

        {/* Categories Grid with 3D Hover Effects */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              className="category-card group cursor-pointer aspect-[4/5]"
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 80 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 8, 
                rotateX: -5,
                z: 50,
                transition: { type: 'spring', stiffness: 200 }
              }}
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent z-10 transition-all duration-300 group-hover:from-primary/90 group-hover:via-primary/50" />
              
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <motion.h3 
                  className="font-heading text-xl font-bold text-foreground mb-1 group-hover:text-primary-foreground transition-colors"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {category.name}
                </motion.h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                  {category.count} products
                </p>
                <motion.div 
                  className="flex items-center gap-2 mt-3 text-christmas-gold group-hover:text-primary-foreground transition-colors"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-sm font-medium">Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3D Advertisement Banner */}
        <motion.div
          className="mt-16 relative overflow-hidden rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, rotateY: 2 }}
          style={{ 
            perspective: '2000px',
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-christmas-gold to-secondary opacity-90" />
          <div className="relative z-10 py-16 px-8 text-center">
            {/* Floating 3D Gift */}
            <motion.div
              className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block"
              animate={{
                y: [0, -20, 0],
                rotateY: [0, 360],
                rotateX: [0, 15, 0],
              }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                rotateY: { duration: 8, repeat: Infinity, ease: 'linear' },
                rotateX: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img 
                src={gift3D} 
                alt="3D Gift" 
                className="w-40 h-40 object-contain"
                style={{
                  filter: 'drop-shadow(0 30px 60px hsl(0 0% 0% / 0.5))'
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                ✨ New Year Special 2026 ✨
              </h3>
              <p className="text-primary-foreground/90 text-lg mb-6 max-w-xl mx-auto">
                Exclusive holiday collection with worldwide shipping. 
                Pay with crypto and get 10% extra rewards!
              </p>
              <motion.button
                className="bg-background text-foreground px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-background/90 transition-colors"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.98 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.img
                  src={gift3D}
                  alt="Gift"
                  className="w-6 h-6"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                Shop the Collection
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
