import { motion } from 'framer-motion';

// Import category images
import giftsImg from '@/assets/categories/gifts.jpg';
import electronicsImg from '@/assets/categories/electronics.jpg';
import fashionImg from '@/assets/categories/fashion.jpg';
import homeImg from '@/assets/categories/home.jpg';
import beautyImg from '@/assets/categories/beauty.jpg';
import booksImg from '@/assets/categories/books.jpg';
import jewelryImg from '@/assets/categories/jewelry.jpg';
import sportsImg from '@/assets/categories/sports.jpg';

const categories = [
  { name: 'Toys & Games', image: giftsImg, tagline: 'Magical playtime' },
  { name: 'Electronics', image: electronicsImg, tagline: 'Smart gifts' },
  { name: 'Fashion', image: fashionImg, tagline: 'Style & elegance' },
  { name: 'Home & Decor', image: homeImg, tagline: 'Cozy living' },
  { name: 'Beauty', image: beautyImg, tagline: 'Glow & radiance' },
  { name: 'Books', image: booksImg, tagline: 'Stories await' },
  { name: 'Jewelry', image: jewelryImg, tagline: 'Timeless treasures' },
  { name: 'Sports', image: sportsImg, tagline: 'Active lifestyle' },
];

export const Categories = () => {
  return (
    <section id="categories" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block text-christmas-gold font-display text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Curated Collections
          </motion.span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
            Shop by <span className="text-gradient-gold">Category</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Find the perfect gift in our carefully organized categories — 
            each one filled with handpicked treasures for your loved ones
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.a
              key={category.name}
              href="#products"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              className="category-card group cursor-pointer"
            >
              <div className="aspect-square relative overflow-hidden">
                <motion.img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Overlay content */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-end p-4 md:p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <h3 className="font-heading font-bold text-foreground text-lg md:text-xl mb-1 drop-shadow-lg">
                      {category.name}
                    </h3>
                    <span className="text-xs text-muted-foreground font-display tracking-wider uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                      {category.tagline}
                    </span>
                  </motion.div>
                </div>

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 z-30 bg-gradient-to-r from-transparent via-snow/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Beautiful advertisement banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/20 via-christmas-gold/10 to-secondary/20 p-8 md:p-12"
        >
          <div className="absolute inset-0 shimmer" />
          <div className="relative z-10 text-center">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-4"
            >
              <span className="text-6xl">🎁</span>
            </motion.div>
            <h3 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-4">
              Discover Your <span className="text-gradient-gold">Perfect Gift</span>
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              From luxurious jewelry to cutting-edge electronics — every category holds 
              a world of possibilities waiting to be unwrapped.
            </p>
            <motion.a
              href="#products"
              className="btn-christmas inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore All Categories
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
