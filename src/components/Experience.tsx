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
        <h2 className="text-sm mono text-zinc-700 uppercase mb-20 tracking-widest text-center italic">Selected_Experience_Logs</h2>

        <div className="space-y-1">
          {experiences.map((exp, index) => (
            <motion.a
              key={index}
              href={exp.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group py-12 border-t ${index === experiences.length - 1 ? 'border-b' : ''} border-zinc-900 grid lg:grid-cols-4 gap-8 hover:bg-zinc-900/50 transition-all px-4 rounded-xl cursor-pointer block`}
            >
              <div className={`mono text-sm ${exp.isHighlighted ? 'text-indigo-500' : 'text-zinc-500'}`}>
                {exp.period}
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-bold mb-2">{exp.title}</h3>
                <p className={`text-zinc-500 mono text-xs uppercase tracking-widest ${exp.isHighlighted ? 'italic' : ''}`}>
                  {exp.company}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-zinc-400">
                  {exp.points.map((point, i) => (
                    <li key={i}>
                      • {point.includes("House of YOU") || point.includes("100+") || point.includes("Azure Logic Apps") ? (
                        <span dangerouslySetInnerHTML={{
                          __html: point.replace(/(House of YOU|100\+ institutions|Azure Logic Apps & Power BI)/g, '<span class="text-foreground">$1</span>')
                        }} />
                      ) : point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end items-start opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-12 h-12 text-indigo-500" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
