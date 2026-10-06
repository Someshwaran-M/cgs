import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  Globe2,
  Layers3,
  Smartphone,
  X,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Food Processing Automation",
    category: "Web Application",
    description:
      "A complete digital platform designed to streamline food processing workflows, production management, and operational activities.",
    technologies: ["React", "Python", "Django", "MySQL"],
    number: "01",
    type: "featured",
    link: "https://food-processing-automation-frontend-iota.vercel.app/",
  },
  {
    id: 2,
    title: "Epsilora Technology",
    category: "Corporate Website",
    description:
      "A premium technology company website created with a modern visual identity, responsive layouts, and smooth interactions.",
    technologies: ["React", "Vite", "CSS", "JavaScript"],
    number: "02",
    type: "standard",
    link: "https://epsiloratech.vercel.app/",
  },
  {
    id: 3,
    title: "Spice Garden",
    category: "Restaurant Website",
    description:
      "A modern restaurant website focused on presenting the brand, menu, services, and customer experience through a clean digital interface.",
    technologies: ["React", "Vite", "CSS"],
    number: "03",
    type: "standard",
    link: "https://restaurant-spice-garden.vercel.app/",
  },
  {
    id: 4,
    title: "Tour & Travel",
    category: "Travel Website",
    description:
      "An engaging travel platform designed to showcase destinations, experiences, packages, and travel services.",
    technologies: ["React", "JavaScript", "CSS"],
    number: "04",
    type: "standard",
    link: "https://tour-redesign.vercel.app/",
  },
  {
    id: 5,
    title: "Career Guidance Platform",
    category: "Web Application",
    description:
      "A career-focused platform designed to connect students with guidance, resources, and career-oriented opportunities.",
    technologies: ["Python", "Django", "React", "SQLite"],
    number: "05",
    type: "standard",
    link: "#",
  },
  {
    id: 6,
    title: "Online Examination Portal",
    category: "Web Application",
    description:
      "A digital examination platform designed to manage online assessments, student activities, and examination workflows.",
    technologies: ["React", "Django", "Python"],
    number: "06",
    type: "standard",
    link: "https://online-exam-theta.vercel.app/",
  },
];

const categories = [
  "All",
  "Web Application",
  "Corporate Website",
  "Restaurant Website",
  "Travel Website",
];

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white text-[#061525]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-180px] top-[-100px] h-[600px] w-[600px] rounded-full border border-slate-100" />
        <div className="absolute right-[-80px] top-0 h-[400px] w-[400px] rounded-full border border-slate-100" />

        <div className="absolute bottom-[-200px] left-[-150px] h-[500px] w-[500px] rounded-full bg-slate-50" />
      </div>

      {/* Header */}
      <div className="relative mx-auto max-w-[1680px] px-6 pb-16 pt-32 lg:px-12 lg:pt-40">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.65fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              <span className="h-px w-10 bg-[#061525]" />
              Selected Work
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.03] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Ideas into
              <br />
              <span className="text-slate-400">digital reality.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              From websites to powerful web applications, we create digital
              products that combine thoughtful design, modern technology, and
              real business goals.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="relative mx-auto max-w-[1680px] px-6 pb-12 lg:px-12">
        <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-6">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#061525] text-white"
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-[#061525]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="relative mx-auto max-w-[1680px] px-6 pb-28 lg:px-12">
        <motion.div layout className="grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.article
              layout
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className={`group relative overflow-hidden rounded-[28px] ${
                index === 0 && activeCategory === "All"
                  ? "lg:col-span-2"
                  : ""
              }`}
            >
              <div
                className={`relative overflow-hidden bg-[#061525] ${
                  index === 0 && activeCategory === "All"
                    ? "min-h-[520px]"
                    : "min-h-[440px]"
                }`}
              >
                {/* Number */}
                <div className="absolute left-7 top-7 z-10">
                  <span className="text-xs font-semibold tracking-[0.2em] text-white/40">
                    {project.number}
                  </span>
                </div>

                {/* Abstract Visual */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute right-[-80px] top-[-100px] h-[380px] w-[380px] rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-110" />

                  <div className="absolute right-[40px] top-[-40px] h-[280px] w-[280px] rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-110" />

                  <div className="absolute bottom-[-100px] left-[-100px] h-[350px] w-[350px] rounded-full border border-white/5" />

                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Project Icon */}
                <div className="absolute right-8 top-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-sm transition-all duration-500 group-hover:rotate-12 group-hover:bg-white group-hover:text-[#061525]">
                  {project.category === "Web Application" ? (
                    <Code2 size={21} strokeWidth={1.7} />
                  ) : project.category === "Travel Website" ? (
                    <Globe2 size={21} strokeWidth={1.7} />
                  ) : project.category === "Restaurant Website" ? (
                    <Smartphone size={21} strokeWidth={1.7} />
                  ) : (
                    <Layers3 size={21} strokeWidth={1.7} />
                  )}
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {project.category}
                  </p>

                  <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {project.title}
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] font-medium text-slate-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-white"
                    >
                      View Project
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#061525] transition-transform duration-300 group-hover/btn:rotate-45">
                        <ArrowUpRight size={15} />
                      </span>
                    </button>

                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all hover:border-white hover:text-white"
                        aria-label={`Open ${project.title}`}
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <div className="relative border-t border-slate-100">
        <div className="mx-auto flex max-w-[1680px] flex-col justify-between gap-8 px-6 py-16 lg:flex-row lg:items-center lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Have a project?
            </p>

            <h3 className="mt-2 text-2xl font-semibold">
              Let&apos;s create something meaningful.
            </h3>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-sm font-semibold"
          >
            Start a conversation
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#061525] text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={17} />
            </span>
          </a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#061525]/80 p-6 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-[28px] bg-white p-8 sm:p-10"
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-[#061525] hover:text-white"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {selectedProject.category}
            </p>

            <h2 className="mt-4 pr-12 text-3xl font-semibold tracking-tight sm:text-4xl">
              {selectedProject.title}
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              {selectedProject.description}
            </p>

            <div className="mt-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                Technologies
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-600"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {selectedProject.link !== "#" && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#061525] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Visit Live Project
                <ExternalLink size={16} />
              </a>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Project;