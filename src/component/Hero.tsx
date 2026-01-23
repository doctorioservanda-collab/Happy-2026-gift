import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";

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
