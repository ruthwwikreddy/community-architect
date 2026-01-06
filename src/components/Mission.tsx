import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section className="py-32 px-6 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="text-sm mono text-indigo-500 uppercase mb-12 tracking-widest">// Mission Statement</h2>
            <p className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-zinc-200">
              I build <span className="text-indigo-500">inclusive tech ecosystems</span> where technology connects people, inspires learning, and drives real-world impact.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-end space-y-6"
          >
            <div className="p-8 border border-zinc-800 rounded-2xl">
              <div className="text-xs mono text-zinc-500 mb-2 uppercase">Core Philosophy</div>
              <p className="text-sm text-zinc-400">Empowering student innovation through professional strategy and full-stack excellence.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
