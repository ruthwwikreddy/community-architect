import { motion } from "framer-motion";
import { Linkedin, Twitter, ExternalLink, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import foundersData from "@/data/founders.json";

const FoundersPreview = () => {
    // Show only first 3 founders
    const previewFounders = foundersData.slice(0, 3);

    return (
        <section id="founders-preview" className="py-40 px-6 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-sm mono text-indigo-500 uppercase mb-4 tracking-[0.4em] font-bold flex items-center gap-2">
                            <Sparkles size={14} className="animate-spin-slow" /> Strategic_Network
                        </h2>
                        <h3 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.8] mb-0">
                            Founders<br />& Friends.
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="/founders"
                            className="group flex items-center gap-6 bg-zinc-900 border border-white/5 hover:border-indigo-500/50 text-white px-10 py-5 rounded-[2rem] transition-all duration-500 font-bold uppercase text-[10px] tracking-[0.2em] relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Explore Full Network <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
                            </span>
                            <div className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {previewFounders.map((founder: any, index: number) => (
                        <motion.div
                            key={founder.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="group relative h-full"
                        >
                            <div className="impact-card rounded-[3.5rem] overflow-hidden flex flex-col h-full border border-border/40 hover:border-indigo-500/50 transition-all duration-700 bg-zinc-900/40 backdrop-blur-xl">
                                {/* Image Section */}
                                <div className="relative h-80 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                                    <img
                                        src={founder.image}
                                        alt={founder.name}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = "/founders/image.png";
                                        }}
                                    />

                                    {/* Location Badge */}
                                    {founder.location && (
                                        <div className="absolute bottom-8 left-8 z-20">
                                            <span className="text-[10px] mono bg-indigo-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-indigo-500/30 text-white font-bold tracking-widest flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
                                                {founder.location}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="p-10 flex-1 flex flex-col">
                                    <div className="mb-6">
                                        <h3 className="text-3xl font-black tracking-tight mb-2 group-hover:text-indigo-500 transition-colors duration-500">
                                            {founder.name}
                                        </h3>
                                        <p className="text-[10px] mono text-indigo-400 font-black uppercase tracking-[0.2em]">
                                            {founder.role}
                                        </p>
                                    </div>

                                    <p className="text-muted-foreground text-sm font-medium leading-relaxed mb-8 flex-1 line-clamp-3">
                                        {founder.description}
                                    </p>

                                    <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                                        <div className="flex gap-4">
                                            {founder.links.linkedin && (
                                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-zinc-500 group-hover:text-indigo-500 group-hover:border-indigo-500/30 transition-all duration-500">
                                                    <Linkedin size={18} />
                                                </div>
                                            )}
                                        </div>
                                        <div className="text-[10px] mono text-zinc-600 font-bold uppercase tracking-widest italic group-hover:text-indigo-500/50 transition-colors">
                                            Ref. Log_{founder.id.toString().padStart(3, '0')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default FoundersPreview;
