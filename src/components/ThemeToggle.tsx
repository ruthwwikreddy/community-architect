import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:border-indigo-500/50 transition-colors overflow-hidden group"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: 20, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -20, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {theme === "dark" ? (
            <Sun size={20} className="text-indigo-400 group-hover:text-indigo-300" />
          ) : (
            <Moon size={20} className="text-indigo-600 group-hover:text-indigo-500" />
          )}
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/5 transition-colors" />
    </button>
  );
};

export default ThemeToggle;

