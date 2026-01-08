import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="pt-60 pb-20 px-6 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-32 items-end pb-32 border-b border-border/40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-[10px] mono font-bold uppercase tracking-widest mb-12">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" /> Status: Building in Public
            </div>

            <h2 className="text-8xl md:text-9xl font-black italic tracking-tighter uppercase mb-12 leading-[0.8] flex flex-col items-start translate-x-[-0.05em]">
              <span>Next</span>
              <span className="text-stroke">Phase.</span>
            </h2>

            <p className="text-muted-foreground text-xl mb-12 max-w-md font-medium leading-relaxed">
              Actively developing high-impact community frameworks and strategic tech infrastructure. Let's build the future together.
            </p>

            <div className="flex flex-wrap gap-8">
              <a href="https://linkedin.com/in/pavankumarmukkera" target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-1 items-start">
                <span className="mono text-[10px] text-zinc-500 uppercase tracking-widest group-hover:text-indigo-500 transition-colors">Professional</span>
                <span className="text-lg font-bold group-hover:translate-x-1 transition-transform">LinkedIn —</span>
              </a>
              <a href="https://github.com/pavankumarmukkera" target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-1 items-start">
                <span className="mono text-[10px] text-zinc-500 uppercase tracking-widest group-hover:text-indigo-500 transition-colors">Engineering</span>
                <span className="text-lg font-bold group-hover:translate-x-1 transition-transform">GitHub —</span>
              </a>
              <a href="#" className="group flex flex-col gap-1 items-start opacity-50 cursor-not-allowed">
                <span className="mono text-[10px] text-zinc-500 uppercase tracking-widest">Connect</span>
                <span className="text-lg font-bold">Twitter —</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group h-full"
          >
            <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/5 rounded-[4rem] p-16 h-full flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-700">
              <div>
                <div className="mono text-[10px] uppercase font-bold mb-8 text-zinc-500 tracking-[0.2em]">Current_Base</div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-2 uppercase italic">United Kingdom</h3>
                <p className="text-muted-foreground mono text-[10px] uppercase tracking-widest font-black">GMT / International Hours</p>
              </div>

              <div className="mt-12 flex justify-end">
                <div className="w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center text-white rotate-[135deg] group-hover:rotate-180 transition-transform duration-700">
                  <ArrowUpRight size={28} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            <div className="text-[10px] mono text-zinc-700 uppercase tracking-widest font-bold">© 2026 Pavan Kumar Mukkera</div>
            <div className="hidden md:block w-px h-4 bg-zinc-800" />
            <div className="text-[10px] mono text-zinc-700 uppercase tracking-widest italic">Designed for High Impact</div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center text-[10px] mono text-zinc-500 font-bold">UK</div>
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center text-[10px] mono text-zinc-500 font-bold">IN</div>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
