import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Linkedin, Github } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import eventsData from "@/data/events.json";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  // Collect all images from events
  const allEventImages = eventsData.flatMap(event => event.images).filter(Boolean);

  // Rotate through images every 5 seconds
  useEffect(() => {
    if (allEventImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % allEventImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [allEventImages.length]);

  const normalizePath = (path: string) => {
    if (!path) return "";
    if (path.startsWith("/")) return path;
    if (path.startsWith("portfolio_assets")) return "/" + path;
    let normalized = path.replace(/^(\.\/|public\/)/, "/");
    if (!normalized.startsWith("/")) normalized = "/" + normalized;
    return normalized;
  };

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden relative">
      {/* Rotating Background Images */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.img
            key={currentImageIndex}
            src={normalizePath(allEventImages[currentImageIndex])}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover grayscale"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop`;
            }}
          />
        </AnimatePresence>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600 blur-glow rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 blur-glow rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mono text-indigo-500 text-sm mb-8 tracking-[0.5em] uppercase font-bold bg-background/90 backdrop-blur-md px-6 py-3 rounded-full w-fit border border-indigo-500/20"
        >
          Community Copilot & Software Dev
        </motion.div>

        <motion.h1
          style={{ x, opacity }}
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
          className="kinetic-title font-black italic uppercase mb-12 will-change-transform"
        >
          Code.<br />Ecosystems.<br />
          <span className="text-stroke">Strategy.</span>
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-xl md:text-3xl font-light text-muted-foreground leading-tight">
              Founder of <span className="text-foreground font-normal italic">Technical Spaces</span>. Looking forward to impactful collaborations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col items-start lg:items-end gap-6"
          >
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/pavankumarmukkera"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-border rounded-full hover:border-indigo-500 hover:text-indigo-500 transition-all"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/pavankumarmukkera"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-border rounded-full hover:border-indigo-500 hover:text-indigo-500 transition-all"
              >
                <Github size={24} />
              </a>
            </div>
            <div className="mono text-[10px] text-muted-foreground uppercase tracking-widest text-right">
              Scroll to explore career log v.2026
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;