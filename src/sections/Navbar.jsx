import { useState, memo } from "react";
import { motion, AnimatePresence } from "motion/react";

const Navigation = memo(({ onLinkClick }) => {
  return (
    <ul className="nav-ul">
      {["home", "about", "work", "contact"].map((item) => (
        <li key={item} className="nav-li">
          <a 
            className="nav-link capitalize" 
            href={`#${item}`}
            onClick={onLinkClick}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-50 w-full backdrop-blur-xl bg-terminal/80 border-b border-border/50">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-3 sm:py-2">
          <a
            href="/"
            className="text-lg font-bold transition-colors text-white hover:text-accent tracking-tight"
          >
            Naman<span className="text-accent">.</span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-text-muted hover:text-accent focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="block overflow-hidden text-center sm:hidden border-t border-border/50 bg-terminal"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="pb-5 pt-3">
              <Navigation onLinkClick={() => setIsOpen(false)} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
