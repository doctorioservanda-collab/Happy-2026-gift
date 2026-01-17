import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Gift } from 'lucide-react';
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
  { name: 'New Year Gifts', image: giftsImg, count: 250, category: 'Premium Gifts' },
  { name: 'Electronics', image: electronicsImg, count: 180, category: 'Electronics' },
  { name: 'Fashion', image: fashionImg, count: 320, category: 'Fashion & Luxury' },
  { name: 'Home & Living', image: homeImg, count: 145, category: 'Home & Decor' },
  { name: 'Beauty', image: beautyImg, count: 95, category: 'Beauty & Perfume' },
  { name: 'Books & Media', image: booksImg, count: 210, category: 'Art & Books' },
  { name: 'Jewelry', image: jewelryImg, count: 85, category: 'Jewelry & Watches' },
  { name: 'Sports', image: sportsImg, count: 120, category: 'Fitness & Sports' },
];

export const Categories = () => {
  return (
    <section id="categories" className="py-24 sm:py-32 bg-gradient-to-b from-background via-background to-newyear-midnight/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Élégant */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Icon Élégant */}
          <motion.div
            className="inline-flex items-center justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.div
              className="relative"
              animate={{ 
                rotate: [0, 5, -5, 0],
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <Gift className="w-16 h-16 sm:w-20 sm:h-20 text-newyear-gold" />
              {/* Subtle glow */}
              <div className="absolute inset-0 bg-newyear-gold/20 blur-xl rounded-full" />
            </motion.div>
          </motion.div>

          <motion.h2 
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          >
            <span className="text-gradient-elegant">
              Trouvez le Cadeau Parfait
            </span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Explorez nos catégories soigneusement organisées — 
            sélectionnées pour{' '}
            <span className="text-newyear-gold font-semibold">Bonne Année 2026</span>
          </motion.p>
        </motion.div>

        {/* Categories Grid Élégant */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              className="card-elegant group cursor-pointer aspect-[4/5] relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: 'easeOut' }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              style={{
                filter: 'drop-shadow(0 0 0px transparent)'
              }}
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10 transition-all duration-300 group-hover:from-newyear-gold/20 group-hover:via-newyear-gold/10" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-20">
                <motion.h3 
                  className="font-heading text-lg sm:text-xl font-bold text-foreground mb-1 group-hover:text-newyear-gold transition-colors"
                >
                  {category.name}
                </motion.h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 group-hover:text-foreground/80 transition-colors">
                  {category.count} produits
                </p>
                <motion.a 
                  href={`#products`}
                  onClick={(e) => {
                    e.preventDefault();
                    const productsSection = document.getElementById('products');
                    if (productsSection) {
                      productsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-2 text-sm font-medium text-newyear-gold group-hover:text-newyear-gold/80 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span>Explorer</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
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
          <div className="absolute inset-0 bg-gradient-to-r from-newyear-gold via-newyear-silver to-newyear-gold opacity-90" />
          <div className="relative z-10 py-12 sm:py-16 px-6 sm:px-8 text-center">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.h3 
                className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-6"
                animate={{
                  backgroundPosition: ['0% center', '100% center', '0% center'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  background: 'linear-gradient(90deg, hsl(var(--newyear-gold)) 0%, hsl(var(--newyear-silver)) 50%, hsl(var(--newyear-gold)) 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Collection Spéciale 2026
              </motion.h3>
              <motion.p className="text-primary-foreground/90 mb-8 text-sm sm:text-base max-w-xl mx-auto">
                Découvrez nos cadeaux premium sélectionnés pour célébrer le Nouvel An avec élégance
              </motion.p>
              <motion.a
                href="#products"
                className="btn-newyear inline-flex items-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Gift className="w-5 h-5" />
                Voir la Collection
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};