import HeroBackground from "./hero/HeroBackground";
import HeroContent from "./hero/HeroContent";
import ScrollIndicator from "./hero/ScrollIndicator";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <HeroBackground />
      <HeroContent />
      <ScrollIndicator />
    </section>
  );
};

export default Hero;
;