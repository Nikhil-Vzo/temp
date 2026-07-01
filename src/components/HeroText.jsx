import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Offensive", "Defensive", "Adversarial"];
  const variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-24 text-center md:mt-40 md:text-left c-space relative">
      {/* Desktop View */}
      <div className="hidden md:flex flex-col">
        <motion.p
          className="text-sm font-mono tracking-widest uppercase text-accent"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          Cybersecurity Engineer
        </motion.p>
        <motion.h1
          className="text-5xl lg:text-7xl font-bold mt-2 leading-tight"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
        >
          <span className="text-white">Naman</span>
          <span className="text-accent"> Kumar</span>
        </motion.h1>
        <div className="flex flex-col items-start mt-4">
          <motion.p
            className="text-3xl lg:text-5xl font-medium text-white/80"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9 }}
          >
            Specialized in
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.1 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-6xl lg:text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-3xl lg:text-5xl font-medium text-white/80"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.3 }}
          >
            Security
          </motion.p>
        </div>
        <motion.div
          className="flex gap-4 mt-10"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
        >
          <a
            href="#work"
            className="px-8 py-3 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white hover:bg-white/15 hover:border-accent/50 transition-all duration-300 backdrop-blur-sm"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-accent/15 border border-accent/40 rounded-full text-sm font-medium text-accent hover:bg-accent/25 transition-all duration-300 backdrop-blur-sm"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-3 md:hidden">
        <motion.p
          className="text-xs font-mono tracking-widest uppercase text-accent"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          Cybersecurity Engineer
        </motion.p>
        <motion.h1
          className="text-3xl sm:text-4xl font-bold leading-tight"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
        >
          <span className="text-white">Naman</span>
          <span className="text-accent"> Kumar</span>
        </motion.h1>
        <div className="space-y-1">
          <motion.p
            className="text-xl sm:text-2xl font-medium text-white/80"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9 }}
          >
            Specialized in
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.1 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-4xl sm:text-5xl"
            />
          </motion.div>
          <motion.p
            className="text-xl sm:text-2xl font-medium text-white/80"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.3 }}
          >
            Security
          </motion.p>
        </div>
        <motion.div
          className="flex flex-col gap-3 mt-4"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
        >
          <a
            href="#work"
            className="px-6 py-3 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white text-center hover:bg-white/15 transition-all backdrop-blur-sm"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-accent/15 border border-accent/40 rounded-full text-sm font-medium text-accent text-center hover:bg-accent/25 transition-all backdrop-blur-sm"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;
