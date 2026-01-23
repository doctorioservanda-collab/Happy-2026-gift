import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import React from 'react';

const MAIN_TEXT = 'Happy New Year I ❤ U ';
const YEAR = '2026';

type Props = {
  onClick?: () => void;
  className?: string;
};

export const NewYearHeader: React.FC<Props> = ({ onClick, className = '' }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      <motion.button
        onClick={onClick}
        aria-label="Happy New Year"
        className="focus:outline-none"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="happy-3d header-visibility text-3xl md:text-5xl text-center text-gradient-modern text-shadow-gold snow-font select-none">
          <div className="inline-block">
            {Array.from(MAIN_TEXT).map((ch, i) => (
              <motion.span
                key={`main-${i}`}
                className={`inline-block ${ch === ' ' ? 'mx-1' : ''}`}
                style={{ display: 'inline-block' }}
                initial={{ opacity: 0, rotateX: -60, y: 12 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ delay: 0.04 * i, duration: 0.5, type: 'spring', stiffness: 120 }}
              >
                {ch}
              </motion.span>
            ))}

            {/* Year / Logo treatment - per-digit fonts/colors/animations */}
            <motion.span
              className="year-logo inline-block align-middle ml-3"
              initial={{ opacity: 0, scale: 0.86, rotateY: -22 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.04 * MAIN_TEXT.length + 0.08, duration: 0.9, ease: [0.2, 0.9, 0.2, 1] }}
            >
              {Array.from(YEAR).map((digit, idx) => {
                const configs = [
                  { font: 'var(--font-elegant)', gradient: 'linear-gradient(90deg,#ff8a00,#e52e71)', shadow: '0 6px 24px rgba(229,46,113,0.18)' },
                  { font: 'var(--font-heading)', gradient: 'linear-gradient(90deg,#00c6ff,#0072ff)', shadow: '0 6px 24px rgba(0,114,255,0.18)' },
                  { font: 'var(--font-display)', gradient: 'linear-gradient(90deg,#7f00ff,#e100ff)', shadow: '0 6px 24px rgba(127,0,255,0.18)' },
                  { font: 'var(--font-snow)', gradient: 'linear-gradient(90deg,#f9e2a2,#ffd6e0)', shadow: '0 6px 24px rgba(249,226,162,0.18)' },
                ];
                const cfg = configs[idx % configs.length];

                return (
                  <motion.span
                    key={`yr-${idx}`}
                    className="inline-block px-1 md:px-2"
                    initial={{ transformPerspective: 900, rotateX: -14, y: 10, opacity: 0, scale: 0.88 }}
                    animate={{ rotateX: [ -18, 10, 0 ], y: [10, -8, 0], opacity: 1, scale: [0.92, 1.06, 1] }}
                    transition={{ delay: 0.06 * idx + 0.08, duration: 1.05, type: 'spring', stiffness: 160 }}
                  >
                    <span
                      className="year-digit"
                      style={{
                        fontFamily: cfg.font,
                        background: cfg.gradient,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: cfg.shadow,
                      }}
                    >
                      {digit}
                    </span>
                  </motion.span>
                );
              })}
            </motion.span>
          </div>
        </div>
      </motion.button>

      {/* Snowflake accents */}
      <div className="pointer-events-none absolute -top-8 left-4 md:left-12 w-12 h-12 text-snow-white opacity-90 animate-champagne-bubble">
        <Sparkles className="w-12 h-12 text-white drop-shadow-lg" />
      </div>
      <div className="pointer-events-none absolute -top-10 right-6 md:right-16 w-8 h-8 text-snow-white opacity-80 animate-champagne-bubble">
        <Sparkles className="w-8 h-8 text-white drop-shadow-md" />
      </div>
    </div>
  );
};

export default NewYearHeader;
