import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Wallet, Menu, X, Gift, Search } from 'lucide-react';
import { useWallet } from '@/hooks/useWallet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export const Header = ({ cartCount, onCartClick }: HeaderProps) => {
  const { address, isConnecting, connect, disconnect, formatAddress, isConnected, balance } = useWallet();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center animate-glow">
              <Gift className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-heading text-xl font-bold text-foreground">
                Merry Christmas
              </h1>
              <p className="text-xs text-muted-foreground">Gift Shop</p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Shop
            </a>
            <a href="#categories" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Categories
            </a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              About
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Wallet Connection */}
            <div className="hidden sm:block">
              {isConnected ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2"
                >
                  <div className="px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                      <span className="text-sm font-medium text-foreground">
                        {formatAddress(address!)}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {parseFloat(balance || '0').toFixed(4)} ETH
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={disconnect}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    Disconnect
                  </Button>
                </motion.div>
              ) : (
                <Button
                  onClick={connect}
                  disabled={isConnecting}
                  className="btn-christmas flex items-center gap-2"
                >
                  <Wallet className="w-4 h-4" />
                  {isConnecting ? 'Connecting...' : 'Connect Wallet'}
                </Button>
              )}
            </div>

            {/* Cart */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCartClick}
              className="relative p-3 rounded-full bg-card hover:bg-muted transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-foreground" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-primary text-primary-foreground text-xs">
                  {cartCount}
                </Badge>
              )}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="py-4 flex flex-col gap-4">
                <a href="#products" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                  Shop
                </a>
                <a href="#categories" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                  Categories
                </a>
                <a href="#about" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                  About
                </a>
                {!isConnected && (
                  <Button
                    onClick={connect}
                    disabled={isConnecting}
                    className="btn-christmas w-full"
                  >
                    <Wallet className="w-4 h-4 mr-2" />
                    {isConnecting ? 'Connecting...' : 'Connect Wallet'}
                  </Button>
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
