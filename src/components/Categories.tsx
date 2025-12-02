import { motion } from 'framer-motion';
import { Gift, Laptop, Shirt, Home, Sparkles, Book, Gem, Trophy } from 'lucide-react';
import { categories_list } from '@/data/products';

const categoryIcons: Record<string, React.ReactNode> = {
  'Toys & Games': <Gift className="w-8 h-8" />,
  'Electronics': <Laptop className="w-8 h-8" />,
  'Fashion': <Shirt className="w-8 h-8" />,
  'Home & Decor': <Home className="w-8 h-8" />,
  'Beauty': <Sparkles className="w-8 h-8" />,
  'Books': <Book className="w-8 h-8" />,
  'Jewelry': <Gem className="w-8 h-8" />,
  'Sports': <Trophy className="w-8 h-8" />,
};

export const Categories = () => {
  return (
    <section id="categories" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shop by <span className="text-gradient-gold">Category</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the perfect gift in our carefully organized categories
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories_list.map((category, index) => (
            <motion.a
              key={category}
              href="#products"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {categoryIcons[category]}
              </div>
              <h3 className="font-heading font-semibold text-foreground">
                {category}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
