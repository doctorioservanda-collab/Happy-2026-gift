import { motion } from 'framer-motion';

interface AnimatedLetterProps {
  letter: string;
  index: number;
  variant?: 'default' | 'modern' | 'glitch' | 'neon';
}

export const AnimatedLetter = ({ letter, index, variant = 'default' }: AnimatedLetterProps) => {
  const variants = {
    default: {
      initial: { opacity: 0, y: 50, rotateX: -90 },
      animate: { opacity: 1, y: 0, rotateX: 0 },
    },
    modern: {
      initial: { opacity: 0, y: 100, scale: 0, filter: 'blur(20px)' },
      animate: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
    },
    glitch: {
      initial: { opacity: 0, x: -50, skewX: 20 },
      animate: { opacity: 1, x: 0, skewX: 0 },
    },
    neon: {
      initial: { opacity: 0, scale: 2, filter: 'blur(10px)' },
      animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    },
  };

  const selectedVariant = variants[variant];

  return (
    <motion.span
      initial={selectedVariant.initial}
      animate={selectedVariant.animate}
      transition={{
        duration: 0.5,
        delay: index * 0.03,
        type: 'spring',
        stiffness: 150,
        damping: 15,
      }}
      className="inline-block"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {letter === ' ' ? '\u00A0' : letter}
    </motion.span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  variant?: 'default' | 'modern' | 'glitch' | 'neon';
  staggerDelay?: number;
}

export const AnimatedText = ({ text, className, variant = 'default', staggerDelay = 0 }: AnimatedTextProps) => (
  <span className={className}>
    {text.split('').map((letter, index) => (
      <AnimatedLetter key={index} letter={letter} index={index + staggerDelay} variant={variant} />
    ))}
  </span>
);

// Modern 2026 Number Animation
export const Animated2026 = () => {
  const digits = ['2', '0', '2', '6'];
  
  return (
    <motion.span 
      className="inline-flex text-2026"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      {digits.map((digit, i) => (
        <motion.span
          key={i}
          className="inline-block text-christmas-gold relative"
          initial={{ 
            opacity: 0, 
            y: 100, 
            rotateY: -180,
            scale: 0 
          }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            rotateY: 0,
            scale: 1 
          }}
          transition={{
            delay: 1 + i * 0.1,
            type: 'spring',
            stiffness: 150,
            damping: 12,
          }}
          whileHover={{ 
            scale: 1.3, 
            color: 'hsl(0, 72%, 55%)',
            rotateY: 360,
            transition: { duration: 0.4 }
          }}
        >
          <motion.span
            animate={{ 
              textShadow: [
                '0 0 10px hsl(43 96% 56% / 0.5), 0 0 20px hsl(43 96% 56% / 0.3)',
                '0 0 30px hsl(43 96% 56% / 0.8), 0 0 60px hsl(43 96% 56% / 0.5)',
                '0 0 10px hsl(43 96% 56% / 0.5), 0 0 20px hsl(43 96% 56% / 0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          >
            {digit}
          </motion.span>
        </motion.span>
      ))}
    </motion.span>
  );
};

// Animated word with stagger
export const AnimatedWord = ({ 
  word, 
  className,
  delay = 0 
}: { 
  word: string; 
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {word.split('').map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            delay: delay + i * 0.03,
            type: 'spring',
            stiffness: 100,
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};
