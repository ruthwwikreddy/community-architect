import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Linkedin, Twitter, ExternalLink, Sparkles, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import foundersData from "@/data/founders.json";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Founder {
    id: number;
    name: string;
    role: string;
    description: string;
    image: string;
    tags: string[];
    location?: string;
    followers?: string;
    links: {
        linkedin?: string;
        twitter?: string;
    };
}

const Founders = () => {
    return (
        <main className="bg-background text-foreground min-h-screen">
            <Navigation />

            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 -z-10" />

                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-16"
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-sm mono text-muted-foreground hover:text-indigo-500 transition-colors mb-8 group"
                        >
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Portfolio
                        </Link>

                        <h2 className="text-sm mono text-indigo-500 uppercase mb-4 tracking-[0.3em] flex items-center gap-2">
                            <Sparkles size={14} /> Founder Network
                        </h2>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-6">
                            Founders<br />& Friends.
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl font-medium">
                            A curated showcase of founders and innovators I've had the privilege to connect with. Each represents a unique vision for the future of technology and community.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {foundersData.map((founder: Founder, index) => (
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
                                            (e.target as HTMLImageElement).src = "/founders/image.png";
                                        }}
                                    />

                                    {/* Floating Tags */}
                                    <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-20">
                                        {founder.tags.map(tag => (
                                            <span key={tag} className="text-[10px] mono bg-background/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-indigo-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Location Badge */}
                                    {founder.location && (
                                        <div className="absolute bottom-6 left-6 z-20">
                                            <span className="text-[10px] mono bg-indigo-500/20 backdrop-blur-md px-3 py-1 rounded-full border border-indigo-500/30 text-white flex items-center gap-1">
                                                <span className="w-1 h-1 bg-indigo-400 rounded-full animate-pulse" />
                                                {founder.location}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-black tracking-tight mb-1 group-hover:text-indigo-500 transition-colors">
                                            {founder.name}
                                        </h3>
                                        <p className="text-xs mono text-indigo-400 font-bold uppercase tracking-widest mb-2">
                                            {founder.role}
                                        </p>
                                        {founder.followers && (
                                            <p className="text-[10px] mono text-muted-foreground uppercase tracking-widest">
                                                Network Reach: <span className="text-foreground">{founder.followers}</span>
                                            </p>
                                        )}
                                    </div>

                                    <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1 line-clamp-4">
                                        {founder.description}
                                    </p>

                                    <div className="pt-6 border-t border-border/40 flex items-center justify-between">
                                        <div className="flex gap-3">
                                            {founder.links.linkedin && (
                                                <a href={founder.links.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all">
                                                    <Linkedin size={18} />
                                                </a>
                                            )}
                                            {founder.links.twitter && (
                                                <a href={founder.links.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all">
                                                    <Twitter size={18} />
                                                </a>
                                            )}
                                        </div>
                                        <Link to={`/founder/${founder.id}`} className="p-2 text-muted-foreground hover:text-indigo-500 transition-colors">
                                            <ExternalLink size={18} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            <Footer />
        </main>
    );
};

export default Founders;
