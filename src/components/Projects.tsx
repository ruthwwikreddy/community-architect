import { motion } from "framer-motion";

const projects = [
  {
    title: "Technical Spaces",
    description: "Founder & Strategist. An AI & Cloud-focused consulting and community venture designed to scale developer ecosystems.",
    tags: ["Consulting", "Cloud-Focused"],
    featured: true,
    status: null
  },
  {
    title: "Done & Dusted",
    description: "Full-stack cleaning service booking engine. Built with React and Django REST.",
    tags: [],
    featured: false,
    status: null
  },
  {
    title: "Cambroos",
    description: "Next.js equipment rental platform with Stripe integration.",
    tags: [],
    featured: false,
    status: "E-Commerce"
  },
  {
    title: "GPS Payroll",
    description: "Automated system with GPS-based attendance tracking using Django.",
    tags: [],
    featured: false,
    status: "Automation"
  },
  {
    title: "CKC Shopify",
    description: "UX Audit and technical store setup for digital wellness brand in UK.",
    tags: [],
    featured: false,
    status: "Audit Complete",
    statusColor: "green"
  }
];

const Projects = () => {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic"
          >
            Selected<br />Output.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-xs text-zinc-500 text-sm mono leading-relaxed"
          >
            A collection of full-stack platforms and community-driven ventures focusing on AI and digital utility.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`impact-card p-10 rounded-[3rem] flex flex-col justify-between ${
                project.featured ? "md:col-span-2 h-[400px]" : "h-auto min-h-[250px]"
              }`}
            >
              <div>
                {project.featured && (
                  <div className="text-xs mono text-indigo-500 mb-4 font-bold uppercase tracking-widest">Featured Venture</div>
                )}
                <h3 className={`font-black tracking-tighter ${project.featured ? "text-5xl" : "text-3xl italic"}`}>
                  {project.title}
                </h3>
                <p className={`mt-4 text-zinc-400 ${project.featured ? "max-w-md" : "text-sm"}`}>
                  {project.description}
                </p>
              </div>
              
              {project.tags.length > 0 && (
                <div className="flex gap-4 mt-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-2 rounded-full border border-zinc-800 text-[10px] mono uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              {project.status && (
                <div className={`text-[10px] mono uppercase tracking-widest font-bold mt-6 ${
                  project.statusColor === "green" ? "text-green-500" : project.status === "E-Commerce" ? "text-indigo-500" : "text-zinc-500"
                }`}>
                  {project.status}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
