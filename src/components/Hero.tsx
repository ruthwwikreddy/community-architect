import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, Github, ArrowDown, Sparkles } from "lucide-react";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden relative">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[40vw] h-[40vw] bg-blue-600/10 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/5 border border-indigo-500/10 text-indigo-500 text-[10px] mono font-bold uppercase tracking-[0.3em] mb-8">
            <Sparkles size={12} className="animate-spin-slow" /> Career Portfolio v.2026
          </div>

          <motion.h1
            style={{ y, opacity, scale }}
            className="kinetic-title italic uppercase mb-12 flex flex-col items-start leading-[0.75]"
          >
            <span>Code.</span>
            <span className="text-stroke">Ecosystems.</span>
            <span>Strategy.</span>
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p className="text-2xl md:text-4xl font-medium tracking-tight text-foreground leading-[1.15] max-w-xl">
                I bridge the gap between <span className="text-indigo-500 italic">technical architecture</span> and
                <span className="text-muted-foreground italic"> human-centric strategy</span>.
              </p>
              <p className="mt-8 text-lg text-muted-foreground font-medium max-w-lg leading-relaxed">
                Founder of Technical Spaces. Engineering scalable developer communities and building robust digital products that drive collective innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="flex flex-col items-start lg:items-end gap-12"
            >
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/pavankumarmukkera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 border border-border rounded-3xl hover:border-indigo-500 hover:text-white hover:bg-indigo-500 transition-all flex items-center justify-center group"
                >
                  <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://github.com/pavankumarmukkera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 border border-border rounded-3xl hover:border-indigo-500 hover:text-white hover:bg-indigo-500 transition-all flex items-center justify-center group"
                >
                  <Github size={24} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-4 text-muted-foreground"
              >
                <div className="text-right">
                  <div className="text-[10px] mono uppercase tracking-[0.2em] font-bold">Scroll Down</div>
                  <div className="text-[10px] mono uppercase tracking-[0.2em] opacity-50">To view trajectory</div>
                </div>
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center">
                  <ArrowDown size={14} />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
