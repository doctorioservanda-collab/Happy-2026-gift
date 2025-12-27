import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes: Snowflake[] = [];
    // Much more snow - increased from 50 to 150 snowflakes
    for (let i = 0; i < 150; i++) {
      flakes.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 6 + 2, // Bigger snowflakes
        duration: Math.random() * 8 + 8, // Faster falling
        delay: Math.random() * 8,
        opacity: Math.random() * 0.8 + 0.3, // More visible
      });
    }
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="absolute rounded-full bg-snow animate-snowfall"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
