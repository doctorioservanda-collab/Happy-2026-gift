import { Product } from '@/types/product';

const productImages = [
  'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1607469256872-48074e807b0c?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1543934638-bd2e138430c4?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=400&fit=crop',
];

const categories = [
  'Toys & Games',
  'Electronics',
  'Fashion',
  'Home & Decor',
  'Beauty',
  'Books',
  'Jewelry',
  'Sports',
];

const productNames = [
  'Magical Christmas Music Box',
  'Golden Reindeer Ornament',
  'Cozy Cashmere Scarf',
  'Vintage Snow Globe',
  'Premium Hot Cocoa Set',
  'Crystal Snowflake Necklace',
  'Handcrafted Wooden Sleigh',
  'Luxury Candle Collection',
  'Smart LED Fairy Lights',
  'Velvet Gift Box Set',
  'Artisan Chocolate Truffles',
  'Nordic Knit Sweater',
  'Enchanted Storybook',
  'Rose Gold Watch',
  'Silk Pajama Set',
  'Wireless Earbuds Pro',
  'Marble Chess Set',
  'Cashmere Throw Blanket',
  'Vintage Wine Decanter',
  'Designer Perfume Set',
  'Smart Home Speaker',
  'Leather Journal Set',
  'Crystal Wine Glasses',
  'Gourmet Cookie Tin',
];

export const generateProducts = (): Product[] => {
  const products: Product[] = [];
  
  for (let i = 0; i < 250; i++) {
    const nameIndex = i % productNames.length;
    const categoryIndex = i % categories.length;
    const imageIndex = i % productImages.length;
    const basePrice = 15 + Math.random() * 200;
    
    products.push({
      id: `prod-${i + 1}`,
      name: `${productNames[nameIndex]} ${i >= productNames.length ? `#${Math.floor(i / productNames.length) + 1}` : ''}`.trim(),
      description: `Perfect holiday gift. Beautifully crafted with attention to detail. Makes every Christmas magical.`,
      price: Math.round(basePrice * 100) / 100,
      priceETH: Math.round((basePrice / 2200) * 10000) / 10000,
      image: productImages[imageIndex],
      category: categories[categoryIndex],
      rating: 3.5 + Math.random() * 1.5,
      inStock: Math.random() > 0.15,
      tags: ['Christmas', 'Gift', categories[categoryIndex]],
    });
  }
  
  return products;
};

export const products = generateProducts();

export const featuredProducts = products.slice(0, 8);
export const categories_list = categories;
