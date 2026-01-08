import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Technical Spaces",
    description: "Founder & Strategist. An AI & Cloud-focused consulting and community venture designed to scale developer ecosystems.",
    tags: ["Consulting", "Cloud-Focused"],
    featured: true,
    status: null,
    link: "https://technical-spaces.vercel.app/"
  },
  {
    title: "Done & Dusted",
    description: "Full-stack cleaning service booking engine. Built with React and Django REST.",
    tags: [],
    featured: false,
    status: null,
    link: "https://www.doneanddustedhertfordshire.co.uk/"
  },
  {
    title: "Cambroos",
    description: "Next.js equipment rental platform with Stripe integration.",
    tags: [],
    featured: false,
    status: "E-Commerce",
    link: "https://cambroos.vercel.app/"
  },
  {
    title: "GPS Payroll",
    description: "Automated system with GPS-based attendance tracking using Django.",
    tags: [],
    featured: false,
    status: "Automation",
    link: "https://github.com/pavankumarmukkera"
  },
  {
    title: "CKC Shopify",
    description: "UX Audit and technical store setup for digital wellness brand in UK.",
    tags: [],
    featured: false,
    status: "Audit Complete",
    statusColor: "green",
    link: "https://linkedin.com/in/pavankumarmukkera"
  }
];

const Projects = () => {
  return (
    <section id="work" className="py-40 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm mono text-indigo-500 uppercase mb-4 tracking-[0.4em] font-bold">Selected_Output</h2>
            <h3 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.8]">
              Selected<br />Projects.
            </h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-sm text-muted-foreground text-lg font-medium leading-relaxed"
          >
            A curated archive of full-stack platforms, community ventures, and AI-driven innovations focusing on digital utility and collective impact.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`${project.featured ? "md:col-span-2" : ""}`}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group h-full"
              >
                <div className="impact-card p-10 md:p-12 rounded-[3.5rem] flex flex-col justify-between h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500 text-white flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>

                  <div>
                    {project.featured && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-[10px] mono font-bold uppercase tracking-widest mb-8">
                        Featured Venture
                      </div>
                    )}

                    <h3 className={`font-black tracking-tighter group-hover:text-indigo-500 transition-colors duration-500 mb-6 ${project.featured ? "text-5xl md:text-7xl leading-[0.9]" : "text-4xl italic leading-[1]"}`}>
                      {project.title}
                    </h3>

                    <p className={`text-muted-foreground font-medium leading-relaxed ${project.featured ? "max-w-xl text-xl" : "text-base"}`}>
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-5 py-2 rounded-full border border-border bg-muted/30 text-[10px] mono uppercase font-bold tracking-widest group-hover:border-indigo-500/30 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.status && (
                      <div className={`text-[10px] mono uppercase tracking-[0.2em] font-black flex items-center gap-2 ${project.statusColor === "green" ? "text-green-500" : "text-indigo-500"
                        }`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        {project.status}
                      </div>
                    )}
                  </div>

                  {/* Subtle Hover Decoration */}
                  <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-indigo-500/5 blur-[80px] rounded-full group-hover:bg-indigo-500/10 transition-colors duration-700" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Projects;
