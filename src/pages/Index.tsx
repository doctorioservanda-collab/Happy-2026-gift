// Snowfall removed per request
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
      
      {/* Hero Section with Red 3D Effects and Snow */}
      <section 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/src/assets/newyear-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <Fireworks />
        <Snowfall />
        
        {/* Red 3D Glow Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${50 + Math.random() * 100}px`,
                height: `${50 + Math.random() * 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: 'radial-gradient(circle, rgba(255,0,0,0.6) 0%, rgba(255,69,0,0.4) 50%, transparent 100%)',
                animation: `redGlow3D ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
                filter: 'blur(2px)',
                transform: 'translateZ(0)'
              }}
            />
          ))}
        </div>

        {/* Centered New Year header */}
        <div className="absolute left-0 right-0 z-30 flex justify-center" style={{ top: '66%' }}>
          <NewYearHeader className="avoid-overlay" />
        </div>

        {/* Red 3D Animation Styles */}
        <style jsx>{`
          @keyframes redGlow3D {
            0%, 100% { 
              transform: translateZ(0) scale(1) rotateX(0deg) rotateY(0deg);
              opacity: 0.6;
              filter: blur(2px) brightness(1);
            }
            25% { 
              transform: translateZ(50px) scale(1.2) rotateX(15deg) rotateY(10deg);
              opacity: 0.8;
              filter: blur(1px) brightness(1.3);
            }
            50% { 
              transform: translateZ(30px) scale(0.9) rotateX(-10deg) rotateY(-15deg);
              opacity: 0.4;
              filter: blur(3px) brightness(0.8);
            }
            75% { 
              transform: translateZ(70px) scale(1.4) rotateX(20deg) rotateY(-5deg);
              opacity: 0.9;
              filter: blur(1.5px) brightness(1.5);
            }
          }
        `}</style>
      </section>

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
