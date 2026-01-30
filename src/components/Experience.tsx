import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "2025 // SEP — 2026 // JAN",
    title: "Community Manager",
    company: "TheYouthTalks | Remote | Freelance",
    isHighlighted: true,
    linkedinUrl: "https://linkedin.com/in/pavankumarmukkera",
    points: [
      "Empowering youth voices through tech-driven discussions and digital outreach.",
      "Developing global initiatives to strengthen community participation and visibility."
    ]
  },
  {
    period: "2025 // APR — JUL",
    title: "Strategic Development Associate",
    company: "CKC Cares | London Area | Remote",
    isHighlighted: false,
    linkedinUrl: "https://linkedin.com/in/pavankumarmukkera",
    points: [
      "Architected digital engagement strategies, increasing customer touchpoints by 30%.",
      "Managed Shopify e-commerce optimization and secured new partnership grants."
    ]
  },
  {
    period: "2024 // OCT — PRESENT",
    title: "Azure Developer Community Lead",
    company: "Reskilll | Remote | Freelance",
    isHighlighted: true,
    linkedinUrl: "https://linkedin.com/in/pavankumarmukkera",
    points: [
      "Leading technical collaborations with Microsoft Azure for global developer hubs.",
      "Orchestrating Azure Developer Day and AI Agents in Action workshops."
    ]
  },
  {
    period: "2021 // JUN — PRESENT",
    title: "Founder & Community Lead",
    company: "Technical Spaces | Remote | Self-employed",
    isHighlighted: false,
    linkedinUrl: "https://linkedin.com/in/pavankumarmukkera",
    points: [
      "Bridging the industry-academia gap for 500+ learners across India and the UK.",
      "Directing technical teams for cloud integration and web automation projects."
    ]
  },
  {
    period: "2024 // MAY — OCT",
    title: "Azure Developer Lead",
    company: "Reskilll | Hyderabad | Full-time",
    isHighlighted: false,
    linkedinUrl: "https://linkedin.com/in/pavankumarmukkera",
    points: [
      "Built a Microsoft Azure community of 1,000+ members with 95% satisfaction.",
      "Delivered 20+ hackathons and training on GenAI, Copilot, and Cloud services."
    ]
  },
  {
    period: "2023 // SEP — 2024 // MAY",
    title: "Reskilll Inspirer",
    company: "Reskilll | Hyderabad | Internship",
    isHighlighted: false,
    linkedinUrl: "https://linkedin.com/in/pavankumarmukkera",
    points: [
      "Recognized for outstanding contributions to the Microsoft Azure Developer Community.",
      "Mentored peers and represented the community at high-impact technical workshops."
    ]
  },
  {
    period: "2022 // AUG — 2023 // MAY",
    title: "US Technical Recruiter",
    company: "APP Y SYSTEMS, Inc | Hyderabad | On-site",
    isHighlighted: false,
    linkedinUrl: "https://linkedin.com/in/pavankumarmukkera",
    points: [
      "Sourced and screened talent for Azure, DevOps, and Full-stack engineering roles.",
      "Managed candidate pipelines across Bullhorn and Salesforce ATS systems."
    ]
  },
  {
    period: "2024 // NOV — 2025 // FEB",
    title: "Administrative Assistant",
    company: "Subway | Watford, UK | Part-time",
    isHighlighted: false,
    linkedinUrl: "https://linkedin.com/in/pavankumarmukkera",
    points: [
      "Optimized shift scheduling and compliance documentation for regional operations.",
      "Managed customer engagement and resolution for digital delivery platforms."
    ]
  },
  {
    period: "2023 // JUN — 2024 // MAR",
    title: "Technical Specialist",
    company: "FalconAVL | Hyderabad | Internship",
    isHighlighted: false,
    linkedinUrl: "https://linkedin.com/in/pavankumarmukkera",
    points: [
      "Provided expert support and troubleshooting for complex technical operations.",
      "Ensured optimal performance of high-scale technical systems."
    ]
  },
  {
    period: "2021 // APR — 2022 // MAR",
    title: "Email Administrator",
    company: "Project StepOne | Remote | Internship",
    isHighlighted: false,
    linkedinUrl: "https://linkedin.com/in/pavankumarmukkera",
    points: [
      "Managed critical communication flows for a non-profit telemedicine startup.",
      "Leveraged technology to augment governmental resources during health crises."
    ]
  },
  {
    period: "2021 // MAR — AUG",
    title: "Software Engineering Intern",
    company: "NSICLTD | India | Apprenticeship",
    isHighlighted: false,
    linkedinUrl: "https://linkedin.com/in/pavankumarmukkera",
    points: [
      "Developed programming foundations in Java, Python, and Android development.",
      "Contributed to real-time coding, testing, and debugging for SME IT solutions."
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
                          {point.includes("Microsoft Azure") || point.includes("500+") || point.includes("1,000+") || point.includes("AI Agents") || point.includes("GenAI") || point.includes("Shopify") || point.includes("Azure Cloud") ? (
                            <span dangerouslySetInnerHTML={{
                              __html: point.replace(/(Microsoft Azure|500\+|1,000\+|AI Agents|GenAI|Shopify|Azure Cloud)/g, '<span class="text-foreground font-semibold">$1</span>')
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
