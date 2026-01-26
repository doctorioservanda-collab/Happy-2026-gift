import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import heroImage from "@/assets/newyear-hero.jpg";

const HeroBackground = () => {
  const { width, height } = useWindowSize();

  return (
    <div className="absolute inset-0">
      {/* Background image */}
      <motion.img
        src={heroImage}
        alt="Happy New Year 2026 celebration"
        className="w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Confetti */}
      <Confetti
        width={width}
        height={height}
        numberOfPieces={200}
        recycle
      />
    </div>
  );
};

export default HeroBackground;
