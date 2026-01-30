import { motion } from "framer-motion";
import { Quote, Linkedin, Star, Award } from "lucide-react";
import recommendationsData from "@/data/recommendations.json";

interface Recommendation {
    id: number;
    name: string;
    title: string;
    relationship: string;
    date: string;
    text: string;
    linkedinUrl: string;
}

const Recommendations = () => {
    const recommendations = recommendationsData as Recommendation[];

    return (
        <section id="recommendations" className="py-32 px-6 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[150px] rounded-full -translate-y-1/2 -z-10" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/3 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8"
                >
                    <div>
                        <h2 className="text-sm mono text-indigo-500 uppercase mb-4 tracking-[0.4em] font-bold flex items-center gap-2">
                            <Award size={14} />
                            Testimonials
                        </h2>
                        <h3 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85]">
                            What People
                            <br />
                            Say.
                        </h3>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star
                                    key={i}
                                    size={20}
                                    className="fill-indigo-500 text-indigo-500"
                                />
                            ))}
                        </div>
                        <div className="text-sm font-bold text-muted-foreground">
                            <span className="text-4xl font-black text-indigo-500">{recommendations.length}</span>
                            <div className="text-[10px] mono uppercase tracking-wider">Recommendations</div>
                        </div>
                    </div>
                </motion.div>

                {/* Recommendations Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {recommendations.map((rec, index) => (
                        <motion.div
                            key={rec.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group"
                        >
                            <a
                                href={rec.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-full"
                            >
                                <div className="relative p-10 rounded-[40px] border border-border/40 bg-card hover:border-indigo-500/50 transition-all duration-500 h-full flex flex-col hover:shadow-2xl hover:shadow-indigo-500/10">
                                    {/* Quote Icon */}
                                    <div className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-indigo-500/5 flex items-center justify-center group-hover:bg-indigo-500/10 transition-all duration-500">
                                        <Quote size={28} className="text-indigo-500/30 group-hover:text-indigo-500/50 transition-all" />
                                    </div>

                                    {/* Recommendation Text */}
                                    <div className="mb-8 flex-1">
                                        <p className="text-base md:text-lg leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors italic font-medium">
                                            "{rec.text}"
                                        </p>
                                    </div>

                                    {/* Author Info */}
                                    <div className="pt-6 border-t border-border/50">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <h4 className="text-lg font-black mb-1 group-hover:text-indigo-500 transition-colors">
                                                    {rec.name}
                                                </h4>
                                                <p className="text-xs text-muted-foreground font-medium leading-relaxed mb-3 line-clamp-2">
                                                    {rec.title}
                                                </p>
                                                <div className="space-y-1">
                                                    <p className="text-[10px] mono text-indigo-400 uppercase tracking-wider font-bold">
                                                        {rec.relationship}
                                                    </p>
                                                    <p className="text-[10px] mono text-muted-foreground/60 uppercase tracking-wider">
                                                        {rec.date}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* LinkedIn Icon */}
                                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500 group-hover:scale-110 transition-all duration-300">
                                                <Linkedin size={20} className="text-indigo-500 group-hover:text-white transition-colors" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-transparent to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-indigo-500/5 rounded-[40px] transition-all duration-700 pointer-events-none" />
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a
                        href="https://www.linkedin.com/in/pavankumarmukkera/details/recommendations/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 hover:bg-indigo-500 hover:border-indigo-500 text-indigo-400 hover:text-white transition-all duration-300 group"
                    >
                        <span className="text-sm font-bold uppercase tracking-wider">View All on LinkedIn</span>
                        <Linkedin size={18} className="group-hover:rotate-12 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Recommendations;
