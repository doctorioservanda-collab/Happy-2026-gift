import { useEffect, useState } from 'react';
import { 
  HeroBackground, 
  HeroContent, 
  ScrollIndicator, 
  FloatingPresents, 
  SparklesLayer,
  GlowingOrbs 
} from './hero';
import { Fireworks } from './Fireworks';

export const Hero = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <HeroBackground />
      <Fireworks />
      <SparklesLayer />
      <GlowingOrbs />
      <FloatingPresents />
      <HeroContent showContent={showContent} />
      <ScrollIndicator />
    </section>
  );
};
