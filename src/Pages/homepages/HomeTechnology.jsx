import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Database, Globe, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const technologies = [
  {
    number: "01",
    title: "FRONTEND",
    description:
      "Modern, responsive and interactive interfaces built with reliable frontend technologies.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Vite"],
    icon: Code2,
  },
  {
    number: "02",
    title: "BACKEND",
    description:
      "Scalable backend systems and APIs designed to support business applications and digital products.",
    technologies: ["Python", "Django", "Django REST Framework"],
    icon: Layers,
  },
  {
    number: "03",
    title: "DATABASE",
    description:
      "Structured and reliable data solutions designed around application requirements and business workflows.",
    technologies: ["MySQL", "SQLite", "Database Design"],
    icon: Database,
  },
  {
    number: "04",
    title: "DEPLOYMENT",
    description:
      "Project deployment and hosting solutions that help bring digital products from development to production.",
    technologies: ["Vercel", "Render", "Cloud Deployment"],
    icon: Globe,
  },
];

const HomeTechnology = () => {
  return (
    <section
      id="home-technology"
      className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-150px] top-[15%] h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute bottom-[-150px] right-[-100px] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.035]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-400" />

              <span className="text-xs font-bold tracking-[0.28em] text-blue-400">
                TECHNOLOGY
              </span>
            </div>

            <h2 className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Technology that
              <br />
              <span className="text-slate-500">moves ideas forward.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-7 lg:items-end"
          >
            <p className="max-w-xl text-base leading-8 text-slate-400 lg:text-right">
              We use modern technologies and practical development approaches
              to create reliable websites, web applications, and digital
              solutions built around real business requirements.
            </p>

            <Link
              to="/services"
              className="group inline-flex w-fit items-center gap-3 border-b border-slate-700 pb-2 text-sm font-bold tracking-[0.12em] text-white transition-colors duration-300 hover:border-blue-400 hover:text-blue-400"
            >
              EXPLORE OUR SERVICES
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* Technology Grid */}
        <div className="grid border-l border-t border-slate-800 sm:grid-cols-2">
          {technologies.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                className="group relative border-b border-r border-slate-800 p-7 transition-colors duration-500 hover:bg-white/[0.035] sm:p-9 lg:p-11"
              >
                {/* Hover Line */}
                <div className="absolute left-0 top-0 h-px w-0 bg-blue-400 transition-all duration-500 group-hover:w-full" />

                {/* Top */}
                <div className="mb-12 flex items-start justify-between">
                  <span className="text-xs font-bold tracking-[0.18em] text-slate-600">
                    {item.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center border border-slate-800 bg-slate-900 transition-all duration-500 group-hover:border-blue-400/40 group-hover:bg-blue-500/10">
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="text-slate-400 transition-colors duration-500 group-hover:text-blue-400"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mb-4 text-xl font-bold tracking-[0.04em] text-white">
                  {item.title}
                </h3>

                <p className="mb-7 max-w-md text-sm leading-7 text-slate-500">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="border border-slate-800 px-3 py-2 text-[11px] font-semibold tracking-[0.08em] text-slate-400 transition-colors duration-300 group-hover:border-slate-700 group-hover:text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Technology Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-16 grid gap-8 border-t border-slate-800 pt-10 lg:grid-cols-[1fr_auto] lg:items-center"
        >
          <div>
            <p className="mb-2 text-xs font-bold tracking-[0.2em] text-blue-400">
              BUILT FOR THE FUTURE
            </p>

            <h3 className="max-w-3xl text-2xl font-bold leading-tight text-white sm:text-3xl">
              The right technology stack for the right business problem.
            </h3>
          </div>

          <Link
            to="/contact"
            className="group inline-flex w-fit items-center gap-3 bg-white px-6 py-4 text-xs font-bold tracking-[0.12em] text-slate-950 transition-all duration-300 hover:bg-blue-500 hover:text-white"
          >
            START A PROJECT
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Technology Marquee */}
        <div className="mt-16 overflow-hidden border-y border-slate-800 py-5">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max items-center gap-10 whitespace-nowrap"
          >
            {[
              "HTML",
              "CSS",
              "JAVASCRIPT",
              "REACT.JS",
              "VITE",
              "PYTHON",
              "DJANGO",
              "DJANGO REST",
              "MYSQL",
              "SQLITE",
              "VERCEL",
              "CLOUD",
              "HTML",
              "CSS",
              "JAVASCRIPT",
              "REACT.JS",
              "VITE",
              "PYTHON",
              "DJANGO",
              "DJANGO REST",
              "MYSQL",
              "SQLITE",
              "VERCEL",
              "CLOUD",
            ].map((technology, index) => (
              <React.Fragment key={`${technology}-${index}`}>
                <span className="text-xs font-bold tracking-[0.2em] text-slate-600">
                  {technology}
                </span>

                <span className="h-1 w-1 rounded-full bg-blue-500" />
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeTechnology;