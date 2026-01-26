import { motion } from "framer-motion";

const HeroContent = () => {
  return (
    <div className="relative z-10 flex min-h-screen items-center justify-center text-center text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Happy New Year <span className="text-yellow-400">2026</span> 🎉
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200">
          Celebrate the new beginning with exclusive gifts, fashion,
          electronics & beauty.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition">
            Shop Now
          </button>

          <button className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
            Explore
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroContent;
