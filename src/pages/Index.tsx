// Snowfall removed per request
import Hero from "@/component/Hero";
import { Header } from '@/component/Header';
import { Categories } from '@/component/Categories';
import { ProductGrid } from '@/component/ProductGrid';
import { Cart } from '@/component/Cart';
import { Footer } from '@/component/Footer';
import { WelcomePopup } from '@/component/WelcomePopup';
import { Fireworks } from '@/component/Fireworks';
import { Snowfall } from '@/component/Snowfall';
import NewYearHeader from '@/component/NewYearHeader';
import { motion } from 'framer-motion';
import { useCart } from '@/hook/useCart';
import { products } from '@/data/products';

const Index = () => {
  const cart = useCart();

  return (
    <div className="min-h-screen bg-background">
      <WelcomePopup />
      <Header cartCount={cart.itemCount} onCartClick={() => cart.setIsOpen(true)} />
      
<Hero />

      <main>
        <Categories />
        <ProductGrid products={products} onAddToCart={cart.addItem} />
      </main>
      
      <Footer />
      
      <Cart
        isOpen={cart.isOpen}
        onClose={() => cart.setIsOpen(false)}
        items={cart.items}
        total={cart.total}
        totalETH={cart.totalETH}
        onUpdateQuantity={cart.updateQuantity}
        onRemove={cart.removeItem}
        onClear={cart.clearCart}
      />
    </div>
  );
};

export default Index;
