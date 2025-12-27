import { motion } from 'framer-motion';

interface AnimatedLetterProps {
  letter: string;
  index: number;
  variant?: 'default' | 'modern' | 'glitch' | 'neon' | '3d';
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
    '3d': {
      initial: { 
        opacity: 0, 
        y: 150, 
        rotateX: -180, 
        rotateY: -90,
        scale: 0,
        z: -500 
      },
      animate: { 
        opacity: 1, 
        y: 0, 
        rotateX: 0, 
        rotateY: 0,
        scale: 1,
        z: 0 
      },
    },
  };

  const selectedVariant = variants[variant];

  return (
    <motion.span
      initial={selectedVariant.initial}
      animate={selectedVariant.animate}
      transition={{
        duration: variant === '3d' ? 0.8 : 0.5,
        delay: index * 0.04,
        type: 'spring',
        stiffness: variant === '3d' ? 100 : 150,
        damping: variant === '3d' ? 10 : 15,
      }}
      className="inline-block"
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      whileHover={variant === '3d' ? {
        scale: 1.3,
        rotateY: 15,
        rotateX: -10,
        z: 50,
        transition: { duration: 0.2 }
      } : undefined}
    >
      {letter === ' ' ? '\u00A0' : letter}
    </motion.span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  variant?: 'default' | 'modern' | 'glitch' | 'neon' | '3d';
  staggerDelay?: number;
}

export const AnimatedText = ({ text, className, variant = 'default', staggerDelay = 0 }: AnimatedTextProps) => (
  <span className={className} style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}>
    {text.split('').map((letter, index) => (
      <AnimatedLetter key={index} letter={letter} index={index + staggerDelay} variant={variant} />
    ))}
  </span>
);

// Modern 3D 2026 with Rainbow Gradient Animation
export const Animated2026 = () => {
  const digits = ['2', '0', '2', '6'];
  const digitColors = [
    'linear-gradient(135deg, hsl(45 100% 55%) 0%, hsl(35 90% 50%) 50%, hsl(45 100% 60%) 100%)',
    'linear-gradient(135deg, hsl(280 80% 60%) 0%, hsl(320 80% 55%) 50%, hsl(280 80% 65%) 100%)',
    'linear-gradient(135deg, hsl(340 90% 55%) 0%, hsl(0 80% 60%) 50%, hsl(340 90% 60%) 100%)',
    'linear-gradient(135deg, hsl(180 80% 50%) 0%, hsl(200 90% 55%) 50%, hsl(180 80% 55%) 100%)',
  ];
  
  return (
    <motion.span 
      className="inline-flex gap-2 md:gap-4 text-2026"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      style={{ perspective: '1500px', transformStyle: 'preserve-3d' }}
    >
      {digits.map((digit, i) => (
        <motion.span
          key={i}
          className="inline-block relative font-display text-7xl md:text-9xl font-black"
          style={{
            background: digitColors[i],
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            transformStyle: 'preserve-3d',
          }}
          initial={{ 
            opacity: 0, 
            y: 200, 
            rotateY: -360,
            rotateX: 90,
            scale: 0,
            z: -300
          }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            rotateY: 0,
            rotateX: 0,
            scale: 1,
            z: 0,
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            delay: 1 + i * 0.15,
            type: 'spring',
            stiffness: 80,
            damping: 10,
            backgroundPosition: { duration: 4, repeat: Infinity, ease: 'linear', delay: 1.5 + i * 0.15 }
          }}
          whileHover={{ 
            scale: 1.4, 
            rotateY: 25,
            rotateX: -15,
            z: 100,
            transition: { duration: 0.3, type: 'spring' }
          }}
        >
          <motion.span
            className="relative inline-block"
            animate={{ 
              textShadow: [
                `0 0 30px ${i === 0 ? 'hsl(45 90% 55% / 0.5)' : i === 1 ? 'hsl(280 60% 50% / 0.5)' : i === 2 ? 'hsl(340 70% 55% / 0.5)' : 'hsl(180 80% 50% / 0.5)'}, 0 20px 40px hsl(0 0% 0% / 0.3)`,
                `0 0 60px ${i === 0 ? 'hsl(45 90% 55% / 0.8)' : i === 1 ? 'hsl(280 60% 50% / 0.8)' : i === 2 ? 'hsl(340 70% 55% / 0.8)' : 'hsl(180 80% 50% / 0.8)'}, 0 30px 60px hsl(0 0% 0% / 0.4)`,
                `0 0 30px ${i === 0 ? 'hsl(45 90% 55% / 0.5)' : i === 1 ? 'hsl(280 60% 50% / 0.5)' : i === 2 ? 'hsl(340 70% 55% / 0.5)' : 'hsl(180 80% 50% / 0.5)'}, 0 20px 40px hsl(0 0% 0% / 0.3)`,
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 }}
          >
            {digit}
          </motion.span>
        </motion.span>
      ))}
    </motion.span>
  );
};

// Animated word with 3D stagger and rainbow effect
export const AnimatedWord = ({ 
  word, 
  className,
  delay = 0,
  is3D = false
}: { 
  word: string; 
  className?: string;
  delay?: number;
  is3D?: boolean;
}) => {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
    >
      {word.split('').map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ 
            opacity: 0, 
            y: is3D ? 100 : 50, 
            rotateX: is3D ? -90 : -45,
            rotateY: is3D ? -45 : 0,
            z: is3D ? -200 : 0
          }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            rotateX: 0,
            rotateY: 0,
            z: 0
          }}
          transition={{
            delay: delay + i * 0.04,
            type: 'spring',
            stiffness: is3D ? 80 : 100,
            damping: is3D ? 8 : 12,
          }}
          whileHover={is3D ? {
            scale: 1.2,
            rotateY: 20,
            z: 30,
            color: 'hsl(45 90% 55%)',
            transition: { duration: 0.2 }
          } : undefined}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

// 3D Floating text effect
export const Animated3DTitle = ({ text, className }: { text: string; className?: string }) => {
  return (
    <motion.div
      className={className}
      style={{ perspective: '2000px', transformStyle: 'preserve-3d' }}
    >
      {text.split('').map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ 
            opacity: 0,
            y: 200,
            rotateX: -180,
            rotateY: Math.random() * 180 - 90,
            scale: 0
          }}
          animate={{ 
            opacity: 1,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1
          }}
          transition={{
            delay: i * 0.05,
            type: 'spring',
            stiffness: 60,
            damping: 8,
          }}
          whileHover={{
            scale: 1.3,
            rotateY: 30,
            rotateX: -15,
            z: 80,
            textShadow: '0 0 30px hsl(45 90% 55% / 0.8)',
            transition: { duration: 0.2 }
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};