import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <motion.div
      className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      ↓ Scroll
    </motion.div>
  );
};

export default ScrollIndicator;
