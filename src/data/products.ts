import { Product } from '@/types/product';

// High-quality product images for New Year 2026 gifts - using reliable Unsplash sources
const productImages = [
  // Champagne & Wine
  'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=400&h=400&fit=crop&q=80',
  // Party & Celebration
  'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1482575832494-771f74bf6857?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop&q=80',
  // Jewelry & Watches
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop&q=80',
  // Electronics
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&q=80',
  // Fashion & Luxury
  'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop&q=80',
  // Home & Decor
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1543332164-6e82f355badc?w=400&h=400&fit=crop&q=80',
  // Beauty & Perfume
  'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400&h=400&fit=crop&q=80',
  // Gourmet Food
  'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&h=400&fit=crop&q=80',
  // Coffee & Tea
  'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop&q=80',
  // Tech Gadgets
  'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop&q=80',
  // Travel & Luggage
  'https://images.unsplash.com/photo-1553062407-98eeb64c6a45?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1581553680321-4fffae59fccd?w=400&h=400&fit=crop&q=80',
  // Skincare & Wellness
  'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=400&h=400&fit=crop&q=80',
  // Art & Books
  'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=400&fit=crop&q=80',
  // Music & Entertainment
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=400&fit=crop&q=80',
  // Fitness & Sports
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop&q=80',
  // Premium Accessories
  'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&q=80',
  // Candles & Aromatherapy
  'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1602607105268-73a6a8eb0873?w=400&h=400&fit=crop&q=80',
  // Kitchen & Dining
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop&q=80',
  // Winter Fashion
  'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=400&fit=crop&q=80',
  // Pet Gifts
  'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop&q=80',
  // Premium Gifts
  'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=400&h=400&fit=crop&q=80',
];

const categories = [
  'Champagne & Spirits',
  'Party & Celebration',
  'Jewelry & Watches',
  'Electronics',
  'Fashion & Luxury',
  'Home & Decor',
  'Beauty & Perfume',
  'Gourmet Food',
  'Coffee & Tea',
  'Tech Gadgets',
  'Travel Essentials',
  'Skincare & Wellness',
  'Art & Books',
  'Music & Entertainment',
  'Fitness & Sports',
  'Premium Accessories',
  'Candles & Aromatherapy',
  'Kitchen & Dining',
  'Winter Fashion',
  'Premium Gifts',
];

const productNamesByCategory: Record<string, string[]> = {
  'Champagne & Spirits': [
    'Dom Pérignon Vintage 2026', 'Moët & Chandon Imperial', 'Veuve Clicquot Yellow Label',
    'Krug Grande Cuvée', 'Crystal Head Vodka', 'Macallan 18 Year Whisky',
    'Hennessy XO Cognac', 'Rémy Martin Louis XIII', 'Johnnie Walker Blue', 'Grey Goose Magnum'
  ],
  'Party & Celebration': [
    '2026 Party Decoration Kit', 'Confetti Cannon Set', 'Gold Balloon Garland',
    'LED Party Lights', 'Photo Booth Props', 'Champagne Tower Set',
    'Party Hat Collection', 'New Year Countdown Clock', 'Firework Sparklers', 'Table Centerpiece Set'
  ],
  'Jewelry & Watches': [
    'Diamond Pendant Necklace', 'Rose Gold Chronograph', 'Pearl Drop Earrings',
    'Cartier Love Bracelet', 'Rolex Submariner', 'Tiffany & Co Ring',
    'Omega Seamaster', 'Sapphire Tennis Bracelet', 'Gold Chain Collection', 'Swiss Automatic Watch'
  ],
  'Electronics': [
    'AirPods Pro Max', 'Sony WH-1000XM5', 'iPad Pro 2026',
    'Samsung Galaxy Watch', 'Bose SoundLink Speaker', 'DJI Mini Drone',
    'GoPro Hero 12', 'Kindle Paperwhite', 'Nintendo Switch OLED', 'Apple Watch Ultra'
  ],
  'Fashion & Luxury': [
    'Cashmere Evening Wrap', 'Designer Silk Scarf', 'Leather Weekender Bag',
    'Italian Leather Wallet', 'Premium Sunglasses', 'Merino Wool Coat',
    'Designer Belt Set', 'Luxury Tie Collection', 'Velvet Clutch Bag', 'Fur-Lined Gloves'
  ],
  'Home & Decor': [
    '2026 Crystal Ball Ornament', 'Gold Table Lamp', 'Velvet Throw Pillows',
    'Marble Bookends', 'Brass Candleholders', 'Art Deco Mirror',
    'Cashmere Throw Blanket', 'Crystal Vase Set', 'Decorative Clock', 'Scented Candle Collection'
  ],
  'Beauty & Perfume': [
    'Chanel No. 5 Parfum', 'Dior Sauvage EDP', 'La Mer Skincare Set',
    'Charlotte Tilbury Palette', 'Tom Ford Black Orchid', 'Creed Aventus',
    'Dyson Airwrap', 'SK-II Facial Treatment', 'Jo Malone Collection', 'Estée Lauder Gift Set'
  ],
  'Gourmet Food': [
    'Godiva Chocolate Tower', 'Caviar Gift Set', 'Truffle Collection',
    'Artisan Cheese Board', 'Premium Olive Oil Set', 'Macaron Gift Box',
    'Smoked Salmon Selection', 'Gourmet Honey Set', 'Belgian Pralines', 'Foie Gras Selection'
  ],
  'Coffee & Tea': [
    'Nespresso Vertuo Next', 'Japanese Matcha Set', 'Premium Tea Collection',
    'Espresso Accessories Kit', 'Cold Brew Coffee Maker', 'Rare Tea Sampler',
    'Artisan Coffee Beans', 'Tea Ceremony Set', 'French Press Premium', 'Barista Tool Kit'
  ],
  'Tech Gadgets': [
    'Smart Home Hub 2026', 'Robot Vacuum Pro', 'Smart Doorbell Camera',
    'Portable Projector', 'Wireless Charging Pad', 'Smart Light Bulbs Set',
    'Bluetooth Tracker Set', 'USB-C Hub Premium', 'Smart Thermostat', 'Digital Photo Frame'
  ],
  'Travel Essentials': [
    'Rimowa Carry-On', 'Away Luggage Set', 'Travel Pillow Deluxe',
    'Passport Holder Leather', 'Packing Cube Set', 'Noise Cancelling Earbuds',
    'Travel Adapter Kit', 'Dopp Kit Premium', 'Eye Mask Silk Set', 'Travel Organizer Bag'
  ],
  'Skincare & Wellness': [
    'La Prairie Face Cream', 'NuFace Toning Device', 'Vitamin C Serum Set',
    'Jade Roller Collection', 'Aromatherapy Diffuser', 'Bath Bomb Luxury Set',
    'Facial Steamer Pro', 'Massage Gun Premium', 'Sleep Mask Set', 'Wellness Journal Kit'
  ],
  'Art & Books': [
    '2026 Art Calendar', 'Coffee Table Art Book', 'Leather Bound Journal',
    'Fountain Pen Set', 'Watercolor Paint Set', 'Photography Book Collection',
    'Calligraphy Kit', 'Bestseller Book Box', 'Sketchbook Premium', 'Art Print Collection'
  ],
  'Music & Entertainment': [
    'Vinyl Record Player', 'Premium Headphones', 'Karaoke Microphone Set',
    'Bluetooth Turntable', 'Concert Gift Card', 'Music Box Collection',
    'Guitar Accessories', 'DJ Controller', 'Spotify Premium Year', 'Piano Sheet Music'
  ],
  'Fitness & Sports': [
    'Peloton Membership', 'Yoga Mat Premium', 'Smart Fitness Watch',
    'Resistance Band Set', 'Massage Roller Kit', 'Running Shoes Premium',
    'Golf Club Set', 'Tennis Accessories', 'Swimming Goggles Pro', 'Gym Bag Deluxe'
  ],
  'Premium Accessories': [
    'Ray-Ban Aviators', 'Montblanc Pen', 'Louis Vuitton Keychain',
    'Gucci Card Holder', 'Prada Sunglasses', 'Hermes Silk Tie',
    'Burberry Scarf', 'Salvatore Ferragamo Belt', 'Bottega Veneta Wallet', 'Fendi Hair Clip'
  ],
  'Candles & Aromatherapy': [
    'Diptyque Candle Set', 'Byredo Candle Collection', 'Jo Malone Home Scents',
    'Nest Fragrance Candles', 'Aromatherapy Oil Set', 'Yankee Candle Premium',
    'Le Labo Candle', 'Voluspa Gift Set', 'Paddywax Collection', 'Homesick Candle Set'
  ],
  'Kitchen & Dining': [
    'Le Creuset Dutch Oven', 'Wine Decanter Set', 'Champagne Flutes Set',
    'Chef Knife Japanese', 'Espresso Machine', 'Marble Cutting Board',
    'Cocktail Shaker Set', 'Wine Cooler Electric', 'Cheese Board Deluxe', 'Crystal Whiskey Set'
  ],
  'Winter Fashion': [
    'Heated Jacket Premium', 'Cashmere Sweater', 'Fur-Lined Boots',
    'Wool Peacoat Designer', 'Thermal Gloves Set', 'Fleece Blanket Coat',
    'Puffer Vest Designer', 'Ski Goggles Premium', 'Wool Beanie Set', 'Leather Winter Boots'
  ],
  'Premium Gifts': [
    'Luxury Gift Hamper', 'Experience Gift Card', 'Personalized Watch Box',
    'Premium Wine Case', 'Spa Day Package', 'Gourmet Subscription Box',
    'Silk Robe Set', 'Crystal Champagne Set', 'Designer Gift Bundle', 'VIP Membership Card'
  ],
};

const adjectives = ['Premium', 'Deluxe', 'Luxury', 'Artisan', 'Handcrafted', 'Vintage', 'Limited Edition', 'Exclusive', 'Designer', 'Professional', '2026 Edition', 'Gold', 'Platinum'];
const colors = ['Gold', 'Silver', 'Rose Gold', 'Crystal', 'Pearl', 'Ruby', 'Sapphire', 'Diamond', 'Onyx', 'Champagne', 'Midnight', 'Platinum'];

export const generateProducts = (): Product[] => {
  const products: Product[] = [];
  let productId = 1;
  
  // Generate 100+ products per category to reach 2026+
  categories.forEach((category, catIndex) => {
    const categoryNames = productNamesByCategory[category] || productNamesByCategory['Premium Gifts'];
    
    for (let i = 0; i < 102; i++) {
      const nameIndex = i % categoryNames.length;
      const baseName = categoryNames[nameIndex];
      const imageIndex = (catIndex * 3 + i) % productImages.length;
      
      // Generate varied prices with luxury items
      const basePrice = 29.99 + Math.random() * 970;
      const price = Math.round(basePrice * 100) / 100;
      
      // Create unique product name with variations
      let productName = baseName;
      if (i >= categoryNames.length) {
        const adjIndex = Math.floor(i / categoryNames.length) % adjectives.length;
        const colorIndex = Math.floor(i / (categoryNames.length * 2)) % colors.length;
        productName = `${adjectives[adjIndex]} ${colors[colorIndex]} ${baseName}`;
      }
      
      products.push({
        id: `prod-${productId}`,
        name: productName,
        description: `Celebrate New Year 2026 with our exclusive ${productName.toLowerCase()}. Premium quality, elegantly crafted for the perfect celebration. Ring in 2026 with style and luxury.`,
        price: price,
        priceETH: Math.round((price / 2400) * 10000) / 10000,
        image: productImages[imageIndex],
        category: category,
        rating: 4.0 + Math.random() * 1.0,
        inStock: Math.random() > 0.08,
        tags: ['New Year 2026', 'Celebration', 'Premium', category],
      });
      
      productId++;
    }
  });
  
  // Shuffle products for variety
  return products.sort(() => Math.random() - 0.5);
};

export const products = generateProducts();
export const featuredProducts = products.filter(p => p.rating >= 4.6).slice(0, 12);
export const categories_list = categories;