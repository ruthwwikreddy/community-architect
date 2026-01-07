import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="contact" className="pt-40 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-7xl md:text-9xl font-black italic tracking-tighter uppercase mb-12">
              Next<br />Phase.
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-sm font-medium">
              Actively developing high-impact community frameworks and strategic tech infrastructure. Let's build the future together.
            </p>
            <div className="flex gap-8 mono text-xs uppercase tracking-widest text-zinc-500">
              <a href="https://linkedin.com/in/pavankumarmukkera" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
              <a href="https://github.com/pavankumarmukkera" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
              <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-12 bg-zinc-50 text-zinc-900 rounded-[4rem]"
          >
            <div className="mono text-[10px] uppercase font-bold mb-6 text-zinc-500">Current Location</div>
            <h3 className="text-4xl font-black tracking-tight mb-12 uppercase italic">United Kingdom</h3>
          </motion.div>
        </div>

        <div className="mt-40 flex flex-col md:flex-row justify-between items-center text-[10px] mono text-zinc-700 uppercase tracking-widest">
          <div>© 2026 Pavan Kumar Mukkera</div>
          <div className="mt-4 md:mt-0 italic">Designed for High Impact • Built in UK</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
