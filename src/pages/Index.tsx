import { Header } from '@/component/Header';
import { Categories } from '@/component/Categories';
import { ProductGrid } from '@/component/ProductGrid';
import { Cart } from '@/component/Cart';
import { Footer } from '@/component/Footer';
import { WelcomePopup } from '@/component/WelcomePopup';
import { useCart } from '@/hook/useCart';
import { products } from '@/data/products';
import { ElegantHero } from '@/component/ElegantHero';

const Index = () => {
  const cart = useCart();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <WelcomePopup />
      <Header cartCount={cart.itemCount} onCartClick={() => cart.setIsOpen(true)} />
      
      {/* Hero Section Élégant */}
      <ElegantHero />

      {/* Main Content */}
      <main className="relative">
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
