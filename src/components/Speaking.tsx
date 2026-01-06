import { motion } from "framer-motion";

const events = [
  {
    date: "Online // Apr 2025",
    title: "AI Forward: Future Tech",
    highlight: false
  },
  {
    date: "Hyderabad // Jan 2024",
    title: "GitHub Copilot & TheYouthTalks",
    highlight: false
  },
  {
    date: "UK // Mar 2025",
    title: "AI Skills Fest: Host & Speaker",
    highlight: true
  },
  {
    date: "London // Jul 2025",
    title: "AI-Powered Clarity Workshop",
    highlight: false
  }
];

const Speaking = () => {
  return (
    <section className="py-32 px-6 bg-background border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm mono text-indigo-500 uppercase mb-20 tracking-widest text-center italic">Public_Address.log</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border border-zinc-900 rounded-3xl flex items-center justify-between group hover:border-indigo-600 transition-all"
            >
              <div>
                <div className="text-[10px] mono text-zinc-600 mb-2 uppercase">{event.date}</div>
                <h4 className={`text-xl font-bold ${event.highlight ? "text-indigo-400" : ""}`}>
                  {event.title}
                </h4>
              </div>
              <span className="text-zinc-800 font-black italic text-2xl">
                {String(index + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speaking;
