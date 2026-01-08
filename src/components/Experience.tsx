import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "2025 // APR — JUN",
    title: "Technical Strategy & Engagement",
    company: "CKC Cares Ventures Ltd | London, UK",
    isHighlighted: true,
    linkedinUrl: "https://linkedin.com/in/pavankumarmukkera",
    points: [
      "Optimizing House of YOU via UX audits & content structuring.",
      "Architecting AI First Aid workshops & Shopify performance logic."
    ]
  },
  {
    period: "2023 // SEP — 2024",
    title: "Azure Community Lead",
    company: "Reskilll | Microsoft Collaboration",
    isHighlighted: false,
    linkedinUrl: "https://linkedin.com/in/pavankumarmukkera",
    points: [
      "Scaled engagement across 100+ institutions for Azure Developer Day.",
      "Mentor for GitHub Copilot, Azure DevOps, and Gen AI skills."
    ]
  },
  {
    period: "2024 // JUN — PRESENT",
    title: "Business Analyst & Consultant",
    company: "Bizaek.com | Remote",
    isHighlighted: false,
    linkedinUrl: "https://linkedin.com/in/pavankumarmukkera",
    points: [
      "Automated SMB workflows using Azure Logic Apps & Power BI.",
      "Optimized operational efficiency by 30% through digital transformation."
    ]
  },
  {
    period: "2024 // JAN — JUN",
    title: "Community & GTM Consultant",
    company: "PossoBuild | Remote",
    isHighlighted: false,
    linkedinUrl: "https://linkedin.com/in/pavankumarmukkera",
    points: [
      "Directed GTM strategy and marketing assets for Paparizzaa UK & Home Care."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col mb-24"
        >
          <h2 className="text-sm mono text-indigo-500 uppercase mb-4 tracking-[0.4em] font-bold">Trajectory_Analysis</h2>
          <h3 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">Experience<br />Archives.</h3>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <a
                href={exp.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative"
              >
                <div className={`py-16 border-t ${index === experiences.length - 1 ? 'border-b' : ''} border-border/50 grid lg:grid-cols-4 gap-12 group-hover:bg-indigo-500/5 transition-all duration-700 px-8 rounded-2xl`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 group-hover:via-indigo-500/10 transition-all duration-700 pointer-events-none" />

                  <div className={`mono text-xs font-bold tracking-widest ${exp.isHighlighted ? 'text-indigo-500' : 'text-zinc-500'}`}>
                    {exp.period}
                  </div>

                  <div className="lg:col-span-2 relative z-10">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-indigo-500 transition-all duration-500 ease-out translate-x-0 group-hover:translate-x-2">
                      {exp.title}
                    </h3>
                    <p className={`text-sm mono text-zinc-500 uppercase tracking-widest font-medium ${exp.isHighlighted ? 'text-indigo-400' : ''}`}>
                      {exp.company}
                    </p>

                    <div className="mt-8 space-y-4 overflow-hidden">
                      {exp.points.map((point, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + (i * 0.1) }}
                          className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/30 mt-2 flex-shrink-0" />
                          {point.includes("House of YOU") || point.includes("100+") || point.includes("Azure Logic Apps") ? (
                            <span dangerouslySetInnerHTML={{
                              __html: point.replace(/(House of YOU|100\+ institutions|Azure Logic Apps & Power BI)/g, '<span class="text-foreground font-semibold">$1</span>')
                            }} />
                          ) : point}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end items-start pt-2">
                    <div className="w-16 h-16 rounded-full border border-border group-hover:border-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500 flex items-center justify-center rotate-45 group-hover:rotate-0">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Experience;
