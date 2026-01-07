import { motion } from "framer-motion";
import { Linkedin, Twitter, ExternalLink, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import foundersData from "@/data/founders.json";

const FoundersPreview = () => {
    // Show only first 3 founders
    const previewFounders = foundersData.slice(0, 3);

    return (
        <section id="founders-preview" className="py-32 px-6 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-sm mono text-indigo-500 uppercase mb-4 tracking-[0.3em] flex items-center gap-2">
                            <Sparkles size={14} /> Founder Network
                        </h2>
                        <h3 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85]">
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
                            className="group flex items-center gap-4 bg-indigo-500/10 hover:bg-indigo-500 text-indigo-500 hover:text-white px-8 py-4 rounded-2xl border border-indigo-500/20 transition-all duration-300 font-bold uppercase text-xs tracking-widest"
                        >
                            See All Founders <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {previewFounders.map((founder, index) => (
                        <motion.div
                            key={founder.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative impact-card rounded-[40px] overflow-hidden flex flex-col h-full border border-border/40 hover:border-indigo-500/50 transition-all duration-500"
                        >
                            {/* Image Section */}
                            <div className="relative h-80 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-10" />
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop`;
                                    }}
                                />
                            </div>

                            {/* Content Section */}
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-black tracking-tight mb-1 group-hover:text-indigo-500 transition-colors">
                                        {founder.name}
                                    </h3>
                                    <p className="text-xs mono text-indigo-400 font-bold uppercase tracking-widest">
                                        {founder.role}
                                    </p>
                                </div>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-8 line-clamp-3">
                                    {founder.description}
                                </p>

                                <div className="pt-6 border-t border-border/40 flex items-center justify-between">
                                    <div className="flex gap-3">
                                        {founder.links.linkedin && (
                                            <div className="text-muted-foreground/40"><Linkedin size={18} /></div>
                                        )}
                                        {founder.links.twitter && (
                                            <div className="text-muted-foreground/40"><Twitter size={18} /></div>
                                        )}
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
