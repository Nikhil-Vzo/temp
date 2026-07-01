import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "namankumar.sec@gmail.com";

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 1.02 }}
      className="relative px-1 py-4 text-sm text-center rounded font-mono text-accent border border-accent/30 bg-surface w-[12rem] cursor-pointer overflow-hidden hover:bg-accent/10 transition-colors"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copied"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1 }}
          >
            <span className="text-accent">[OK]</span> Email Copied
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <span className="text-text-muted">$</span> Copy Email
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
