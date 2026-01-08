import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2, Sparkles, Terminal, ShieldAlert, Cpu } from "lucide-react";

const INQUIRY_TYPES = [
    "Strategic Partnership",
    "Community Architecture",
    "Speaking Engagement",
    "Tech Advisory",
    "General Inquiry"
];

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        type: INQUIRY_TYPES[0],
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formDataToSubmit = new FormData();
            formDataToSubmit.append("access_key", "c2c58b9f-df4e-4fb4-9024-560b0ace833e");
            formDataToSubmit.append("name", formData.name);
            formDataToSubmit.append("email", formData.email);
            formDataToSubmit.append("subject", formData.type);
            formDataToSubmit.append("message", formData.message);
            formDataToSubmit.append("from_name", "Portfolio Contact Form");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSubmit
            });

            const data = await response.json();

            if (data.success) {
                setIsSubmitted(true);
            } else {
                console.error("Form submission error:", data);
            }
        } catch (error) {
            console.error("Submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact-form" className="py-40 px-6 relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-32 items-start">

                    {/* Left Side: Context */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/5 border border-indigo-500/10 text-indigo-500 text-[10px] mono font-bold uppercase tracking-widest mb-12">
                            <Terminal size={12} className="animate-pulse" /> Communication_Bridge_Open
                        </div>

                        <h2 className="text-7xl md:text-9xl font-black italic tracking-tighter uppercase mb-12 leading-[0.8] flex flex-col items-start translate-x-[-0.05em]">
                            <span>Let's</span>
                            <span className="text-stroke">Connect.</span>
                        </h2>

                        <p className="text-xl text-muted-foreground font-medium max-w-md mb-16 leading-relaxed">
                            Have an idea for a project or community? Send me a message and let's see how we can build something impactful together.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 flex items-center justify-center">
                                    <ShieldAlert size={20} className="text-indigo-500" />
                                </div>
                                <div>
                                    <div className="text-[10px] mono text-zinc-500 uppercase tracking-widest font-black mb-1">Response_Latency</div>
                                    <div className="text-base font-bold uppercase italic tracking-tight">Under 24H Guaranteed</div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 flex items-center justify-center">
                                    <Cpu size={20} className="text-indigo-500" />
                                </div>
                                <div>
                                    <div className="text-[10px] mono text-zinc-500 uppercase tracking-widest font-black mb-1">Operational_Reach</div>
                                    <div className="text-base font-bold uppercase italic tracking-tight">Global Integration</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: The Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.form
                                    key="form"
                                    onSubmit={handleSubmit}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="p-10 md:p-16 bg-zinc-900/40 backdrop-blur-2xl border border-white/5 rounded-[4rem] space-y-12"
                                >
                                    <div className="grid md:grid-cols-2 gap-12">
                                        <div className="space-y-4">
                                            <label className="text-[10px] mono text-zinc-500 uppercase tracking-widest ml-1 font-black">Callsign</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="YOUR NAME"
                                                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-indigo-500/50 transition-all text-sm font-bold uppercase placeholder:text-zinc-800 focus:bg-black/60"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[10px] mono text-zinc-500 uppercase tracking-widest ml-1 font-black">Digital Address</label>
                                            <input
                                                required
                                                type="email"
                                                placeholder="EMAIL@EXAMPLE.COM"
                                                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-indigo-500/50 transition-all text-sm font-bold uppercase placeholder:text-zinc-800 focus:bg-black/60"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-[10px] mono text-zinc-500 uppercase tracking-widest ml-1 font-black">Objective</label>
                                        <div className="flex flex-wrap gap-3">
                                            {INQUIRY_TYPES.map(type => (
                                                <button
                                                    key={type}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, type })}
                                                    className={`px-6 py-3 rounded-full text-[10px] mono uppercase tracking-widest transition-all font-black ${formData.type === type
                                                        ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 border-transparent scale-105"
                                                        : "bg-black/40 text-zinc-500 border border-white/5 hover:border-indigo-500/30"
                                                        }`}
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-[10px] mono text-zinc-500 uppercase tracking-widest ml-1 font-black">Sitrep / Details</label>
                                        <textarea
                                            required
                                            rows={5}
                                            placeholder="DESCRIBE THE VISION..."
                                            className="w-full bg-black/40 border border-white/10 rounded-[2.5rem] px-8 py-8 outline-none focus:border-indigo-500/50 transition-all text-sm font-bold uppercase placeholder:text-zinc-800 resize-none focus:bg-black/60 leading-relaxed"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        />
                                    </div>

                                    <button
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="w-full group bg-indigo-500 hover:bg-indigo-600 disabled:bg-zinc-800 text-white py-8 rounded-[2.5rem] font-black uppercase text-xs tracking-[0.4em] transition-all flex items-center justify-center gap-4 relative overflow-hidden shadow-2xl shadow-indigo-500/20"
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center gap-3">
                                                <div className="w-5 h-5 border-3 border-white/20 border-t-white rounded-full animate-spin" />
                                                Transmitting...
                                            </div>
                                        ) : (
                                            <>
                                                <span className="relative z-10 flex items-center gap-3">
                                                    Execute Send <Send size={16} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                                                </span>
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s]" />
                                            </>
                                        )}
                                    </button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    className="p-16 bg-indigo-500 text-white rounded-[4rem] text-center space-y-10 flex flex-col items-center justify-center min-h-[600px] shadow-[0_0_100px_rgba(99,102,241,0.2)]"
                                >
                                    <div className="w-28 h-28 rounded-full bg-white/20 flex items-center justify-center animate-bounce shadow-2xl">
                                        <CheckCircle2 size={56} />
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-5xl font-black italic uppercase tracking-tighter leading-tight">Transmission<br />Successful.</h4>
                                        <p className="mono text-[10px] uppercase tracking-[0.3em] font-black opacity-80 max-w-xs mx-auto">
                                            The signal has been received. Expect a response within the next operational cycle.
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-[10px] mono uppercase font-black tracking-[0.2em] bg-white text-indigo-500 hover:bg-zinc-100 px-10 py-5 rounded-full transition-all shadow-xl hover:scale-105 active:scale-95"
                                    >
                                        Initiate New Channel
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


export default ContactForm;
