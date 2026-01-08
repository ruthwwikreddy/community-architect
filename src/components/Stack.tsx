import { motion } from "framer-motion";

const stacks = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind", "Astro", "JS (ES6+)"],
    variant: "default"
  },
  {
    title: "Backend",
    skills: ["Django REST", "Python", "PostgreSQL", "Firebase"],
    variant: "default"
  },
  {
    title: "DevOps",
    skills: ["Azure DevOps", "GitHub Actions", "Docker", "Vercel"],
    variant: "bordered"
  },
  {
    title: "Strategy",
    skills: ["GTM", "PR", "Stakeholders", "People Mgmt"],
    variant: "primary"
  }
];

const Stack = () => {
  return (
    <section id="stack" className="py-32 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm mono text-zinc-400 uppercase mb-16 tracking-widest">Technical_Capabilities.sh</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stacks.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[3rem] space-y-6 ${stack.variant === "primary"
                  ? "bg-indigo-600 text-foreground"
                  : stack.variant === "bordered"
                    ? "bg-zinc-100 border-2 border-indigo-600"
                    : "bg-zinc-100"
                }`}
            >
              <h3 className={`text-2xl font-black italic ${stack.variant === "primary" ? "text-foreground" : "text-zinc-900"}`}>
                {stack.title}
              </h3>
              <div className={`flex flex-wrap gap-2 text-xs mono uppercase ${stack.variant === "primary" ? "text-indigo-200" : "text-zinc-900"}`}>
                {stack.skills.map((skill, i) => (
                  <span key={i}>
                    {skill}{i < stack.skills.length - 1 ? " /" : ""}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
