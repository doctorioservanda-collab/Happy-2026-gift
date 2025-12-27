import { motion } from 'framer-motion';
import logoImage from '@/assets/logo.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  const sizes = {
    sm: 'h-12',
    md: 'h-16',
    lg: 'h-24',
  };

  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.05 }}
      animate={{
        filter: [
          'drop-shadow(0 0 10px hsl(45 90% 55% / 0.3))',
          'drop-shadow(0 0 25px hsl(45 90% 55% / 0.6))',
          'drop-shadow(0 0 10px hsl(45 90% 55% / 0.3))',
        ]
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <img 
        src={logoImage} 
        alt="Happy New Year 2026" 
        className={`${sizes[size]} w-auto object-contain ${className}`}
      />
    </motion.div>
  );
};
