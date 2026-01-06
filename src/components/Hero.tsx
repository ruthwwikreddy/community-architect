import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600 blur-glow rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 blur-glow rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mono text-indigo-500 text-sm mb-8 tracking-[0.5em] uppercase"
        >
          Community Copilot & Software Dev
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
          className="kinetic-title font-black italic uppercase mb-12"
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
            <p className="text-xl md:text-3xl font-light text-zinc-400 leading-tight">
              Founder of <span className="text-foreground font-normal italic">Technical Spaces</span>. Collaborating with Microsoft and Reskilll to build the future of student innovation.
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
                className="p-4 border border-zinc-800 rounded-full hover:border-indigo-500 hover:text-indigo-500 transition-all"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/pavankumarmukkera" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-zinc-800 rounded-full hover:border-indigo-500 hover:text-indigo-500 transition-all"
              >
                <Github size={24} />
              </a>
            </div>
            <div className="mono text-[10px] text-zinc-600 uppercase tracking-widest text-right">
              Scroll to explore career log v.2026
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
