import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  angle: number;
  velocity: number;
}

interface Firework {
  id: number;
  x: number;
  y: number;
  particles: Particle[];
  color: string;
}

const colors = [
  'hsl(45 90% 55%)',   // Gold
  'hsl(280 60% 50%)',  // Purple
  'hsl(0 80% 55%)',    // Red
  'hsl(200 90% 60%)',  // Blue
  'hsl(145 80% 50%)',  // Green
  'hsl(40 60% 70%)',   // Champagne
];

export const Fireworks = () => {
  const [fireworks, setFireworks] = useState<Firework[]>([]);

  useEffect(() => {
    const createFirework = () => {
      const x = Math.random() * 100;
      const y = 20 + Math.random() * 40;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const particleCount = 12 + Math.floor(Math.random() * 8);
      
      const particles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: 0,
        y: 0,
        color,
        size: 2 + Math.random() * 3,
        angle: (360 / particleCount) * i + Math.random() * 20,
        velocity: 30 + Math.random() * 40,
      }));

      const firework: Firework = {
        id: Date.now() + Math.random(),
        x,
        y,
        particles,
        color,
      };

      setFireworks(prev => [...prev, firework]);

      // Remove firework after animation
      setTimeout(() => {
        setFireworks(prev => prev.filter(f => f.id !== firework.id));
      }, 2000);
    };

    // Initial fireworks
    createFirework();
    setTimeout(createFirework, 500);

    // Random fireworks
    const interval = setInterval(() => {
      if (Math.random() > 0.3) {
        createFirework();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      <AnimatePresence>
        {fireworks.map(firework => (
          <motion.div
            key={firework.id}
            className="absolute"
            style={{
              left: `${firework.x}%`,
              top: `${firework.y}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Core flash */}
            <motion.div
              className="absolute w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1/2"
              style={{ backgroundColor: firework.color }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: [0, 3, 0], opacity: [1, 0.8, 0] }}
              transition={{ duration: 0.4 }}
            />
            
            {/* Particles */}
            {firework.particles.map(particle => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: particle.size,
                  height: particle.size,
                  backgroundColor: particle.color,
                  boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
                }}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{
                  x: Math.cos(particle.angle * Math.PI / 180) * particle.velocity,
                  y: Math.sin(particle.angle * Math.PI / 180) * particle.velocity + 30,
                  opacity: [1, 1, 0],
                  scale: [1, 0.8, 0],
                }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
            ))}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Ambient sparkles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
};