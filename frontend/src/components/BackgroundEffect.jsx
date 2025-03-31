// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";


const BackgroundEffect = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-24 h-24 bg-purple-500 rounded-full opacity-30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: [0.5, 1, 0.5],
            x: [Math.random() * 1000, Math.random() * 1000],
            y: [Math.random() * 600, Math.random() * 600],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundEffect;
