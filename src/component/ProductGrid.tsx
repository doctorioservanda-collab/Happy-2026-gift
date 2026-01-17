import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ChevronDown, Sparkles } from 'lucide-react';
import { Product } from '@/types/product';
import { ProductCard } from './ProductCard';
import { categories_list } from '@/data/products';
import { Input } from '@/component/ui/input';
import { Button } from '@/component/ui/button';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const ProductGrid = ({ products, onAddToCart }: ProductGridProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <section id="products" className="py-24 sm:py-32 bg-gradient-to-b from-background to-newyear-midnight/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Élégant */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-newyear-gold/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-newyear-gold" />
            <span className="text-sm font-medium text-newyear-gold/90 tracking-wide">
              COLLECTION PREMIUM
            </span>
          </motion.div>
          
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            <span className="text-gradient-elegant">Cadeaux Premium</span>
          </h2>
          
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Explorez notre collection soigneusement sélectionnée de plus de 2000 cadeaux, 
            chacun choisi pour célébrer{' '}
            <span className="text-newyear-gold font-semibold">Bonne Année 2026</span>
          </p>
        </motion.div>

        {/* Filters Élégants */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Rechercher des cadeaux..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 bg-card/50 backdrop-blur-sm border-border/50 rounded-full focus:border-newyear-gold transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={selectedCategory === null ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(null)}
              className="rounded-full border-newyear-gold/30 hover:border-newyear-gold/50"
            >
              Tout
            </Button>
            {categories_list.slice(0, 4).map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full border-newyear-gold/30 hover:border-newyear-gold/50"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-8 text-center sm:text-left">
          Affichage de {visibleProducts.length} sur {filteredProducts.length} produits
        </p>

        {/* Product Grid Élégant */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {visibleProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              index={index}
            />
          ))}
        </div>

        {/* Load More */}
        {visibleCount < filteredProducts.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12 sm:mt-16"
          >
            <Button
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="btn-newyear"
            >
              Charger plus de cadeaux
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
