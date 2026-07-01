import { motion, AnimatePresence } from "motion/react";
const Alert = ({ type, text }) => {
  const alertVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.8 },
  };
  return (
    <AnimatePresence>
      <motion.div
        className="fixed z-50 flex items-center justify-center bottom-5 right-5"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={alertVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div
          className={`p-2 ${
            type === "danger" ? "bg-alert/20 border border-alert/50" : "bg-accent/20 border border-accent/50"
          } items-center text-white leading-none lg:rounded-full flex lg:inline-flex rounded-md p-5 font-mono`}
        >
          <p
            className={`flex rounded-full ${
              type === "danger" ? "bg-alert text-white" : "bg-accent text-black"
            } uppercase px-2 py-1 text-xs font-semibold mr-3`}
          >
            {type === "danger" ? "ERR" : "OK"}
          </p>
          <p className="mr-2 text-left text-sm">{text}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Alert;
