/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center p-10">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        AI-Powered Personalized Learning
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Learn smarter with AI-driven recommendations.
      </motion.p>
    </section>
  );
};

export default HeroSection;
