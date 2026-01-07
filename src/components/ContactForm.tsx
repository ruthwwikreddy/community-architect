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
                alert("There was an error sending your message. Please try again later.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Connection error. Please check your internet and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact-form" className="py-32 px-6 relative overflow-hidden bg-zinc-950">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-start">

                    {/* Left Side: Context */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] mono font-bold uppercase tracking-widest mb-8">
                            <Terminal size={12} /> Communication Channel Open
                        </div>

                        <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-8 leading-[0.85]">
                            Let's<br />Connect.
                        </h2>

                        <p className="text-xl text-muted-foreground font-medium max-w-md mb-12">
                            Have an idea for a project or community? Send me a message and let's see how we can work together.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group cursor-default">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 flex items-center justify-center group-hover:border-indigo-500/50 transition-all">
                                    <ShieldAlert size={20} className="text-indigo-500" />
                                </div>
                                <div>
                                    <div className="text-[10px] mono text-zinc-500 uppercase tracking-widest">Response Time</div>
                                    <div className="text-sm font-bold uppercase">Within 24 Hours</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group cursor-default">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 flex items-center justify-center group-hover:border-indigo-500/50 transition-all">
                                    <Cpu size={20} className="text-indigo-500" />
                                </div>
                                <div>
                                    <div className="text-[10px] mono text-zinc-500 uppercase tracking-widest">Global Reach</div>
                                    <div className="text-sm font-bold uppercase">UK & International</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: The Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
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
                                    className="p-8 md:p-12 bg-zinc-900/50 backdrop-blur-xl border border-white/5 rounded-[3rem] space-y-8"
                                >
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] mono text-zinc-500 uppercase tracking-widest ml-1">Your Name</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="ENTER YOUR NAME"
                                                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500/50 transition-all text-sm font-medium uppercase placeholder:text-zinc-800"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] mono text-zinc-500 uppercase tracking-widest ml-1">Email Address</label>
                                            <input
                                                required
                                                type="email"
                                                placeholder="YOUREMAIL@EXAMPLE.COM"
                                                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500/50 transition-all text-sm font-medium uppercase placeholder:text-zinc-800"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] mono text-zinc-500 uppercase tracking-widest ml-1">How can I help?</label>
                                        <div className="flex flex-wrap gap-2">
                                            {INQUIRY_TYPES.map(type => (
                                                <button
                                                    key={type}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, type })}
                                                    className={`px-4 py-2 rounded-xl text-[10px] mono uppercase tracking-widest transition-all ${formData.type === type
                                                        ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 border-transparent"
                                                        : "bg-black/20 text-zinc-500 border border-white/5 hover:border-indigo-500/30"
                                                        }`}
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] mono text-zinc-500 uppercase tracking-widest ml-1">Message</label>
                                        <textarea
                                            required
                                            rows={4}
                                            placeholder="TELL ME ABOUT YOUR PROJECT..."
                                            className="w-full bg-black/40 border border-white/10 rounded-[2rem] px-6 py-6 outline-none focus:border-indigo-500/50 transition-all text-sm font-medium uppercase placeholder:text-zinc-800 resize-none"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        />
                                    </div>

                                    <button
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="w-full group bg-indigo-500 hover:bg-indigo-600 disabled:bg-zinc-800 text-white py-6 rounded-[2rem] font-black uppercase text-xs tracking-[0.3em] transition-all flex items-center justify-center gap-3 relative overflow-hidden"
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </div>
                                        ) : (
                                            <>
                                                <span className="relative z-10 flex items-center gap-2">
                                                    Send Message <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </span>
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                            </>
                                        )}
                                    </button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-12 bg-indigo-500 text-white rounded-[3rem] text-center space-y-8 flex flex-col items-center justify-center min-h-[500px] shadow-2xl shadow-indigo-500/20"
                                >
                                    <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center animate-bounce">
                                        <CheckCircle2 size={48} />
                                    </div>
                                    <div>
                                        <h4 className="text-4xl font-black italic uppercase tracking-tighter mb-4">Message Sent!</h4>
                                        <p className="mono text-[10px] uppercase tracking-[0.2em] opacity-80 max-w-xs mx-auto">
                                            Thanks for reaching out. I'll get back to you as soon as possible.
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => {
                                            setIsSubmitted(false);
                                            setFormData({
                                                name: "",
                                                email: "",
                                                type: INQUIRY_TYPES[0],
                                                message: ""
                                            });
                                        }}
                                        className="text-[10px] mono uppercase font-bold tracking-widest bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all"
                                    >
                                        Send Another Message
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
