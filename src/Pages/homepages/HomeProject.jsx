import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    number: "01",
    title: "Epsilora Technology",
    category: "TECHNOLOGY / CORPORATE",
    description:
      "A modern digital presence designed to communicate technology, services, and business solutions through a clean and professional experience.",
    image: "/images/projects/epsilora.png",
    link: "https://epsiloratech.vercel.app/",
  },
  {
    number: "02",
    title: "TrackOwls Anti-Piracy",
    category: "ANTI-PIRACY / CORPORATE",
    description:
      "A premium corporate website created for an anti-piracy technology company with a strong focus on digital protection and modern visual communication.",
    image: "/images/projects/trackowls.png",
    link: "https://trackowlsantipiracy.vercel.app/",
  },
  {
    number: "03",
    title: "Spice Garden",
    category: "RESTAURANT / BUSINESS",
    description:
      "A restaurant website designed to present the brand, menu, atmosphere, and customer experience through an engaging digital interface.",
    image: "/images/projects/spice-garden.png",
    link: "https://spice-garden-restaurant-web.vercel.app/",
  },
  {
    number: "04",
    title: "Tours & Travels",
    category: "TRAVEL / BUSINESS",
    description:
      "A modern travel website experience designed to present destinations, services, and travel information in a clear and engaging way.",
    image: "/images/projects/tours-travels.png",
    link: "https://tour-redesign.vercel.app/",
  },
];

const HomeProject = () => {
  return (
    <section
      id="home-projects"
      className="relative w-full overflow-hidden bg-white px-6 py-24 text-[#102A43] sm:px-8 lg:px-12 xl:px-16 xl:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[20%] h-[350px] w-[350px] rounded-full bg-[#1769C2]/[0.035] blur-3xl" />

        <div className="absolute bottom-[-160px] right-[-120px] h-[350px] w-[350px] rounded-full bg-[#1769C2]/[0.025] blur-3xl" />

        <div className="absolute inset-0 opacity-[0.018]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#1769C2 1px, transparent 1px), linear-gradient(90deg, #1769C2 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1680px]">

        {/* =========================================================
            HEADER
        ========================================================== */}

        <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-end">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1769C2]" />

              <span className="text-[9px] font-semibold tracking-[0.3em] text-[#1769C2]">
                SELECTED WORK
              </span>
            </div>

            <h2 className="max-w-[720px] text-[clamp(36px,5vw,60px)] font-semibold leading-[1.04] tracking-[-0.045em] text-[#0B243D]">
              Digital experiences
              <br />
              <span className="text-[#1769C2]">
                built with purpose.
              </span>
            </h2>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 0.1,
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-7 lg:items-end"
          >
            <p className="max-w-[620px] text-[14px] leading-8 text-[#60758A] lg:text-right">
              A selection of digital experiences created for different
              business needs — from corporate websites and technology
              platforms to restaurants and travel businesses.
            </p>

            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 text-[9px] font-semibold tracking-[0.2em] text-[#1769C2]"
            >
              VIEW ALL PROJECTS

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* =========================================================
            FEATURED PROJECT
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.15 }}
          className="group relative mb-6 overflow-hidden border border-[#DCE5ED] bg-[#F7FAFD]"
        >
          <div className="grid min-h-[430px] lg:grid-cols-[1.25fr_0.75fr]">

            {/* Project Image */}

            <div className="relative min-h-[300px] overflow-hidden bg-[#EAF2F9] lg:min-h-[500px]">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              {/* Image Overlay */}

              <div className="absolute inset-0 bg-gradient-to-tr from-[#061A2B]/20 via-transparent to-white/10" />

              {/* Number */}

              <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center border border-white/50 bg-white/80 backdrop-blur-md">
                <span className="text-[9px] font-bold tracking-[0.1em] text-[#1769C2]">
                  {projects[0].number}
                </span>
              </div>
            </div>

            {/* Project Information */}

            <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">

              <div>
                <p className="mb-5 text-[8px] font-semibold tracking-[0.25em] text-[#1769C2]">
                  {projects[0].category}
                </p>

                <h3 className="max-w-[500px] text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#0B243D] sm:text-4xl">
                  {projects[0].title}
                </h3>

                <p className="mt-6 max-w-[500px] text-[13px] leading-7 text-[#718398]">
                  {projects[0].description}
                </p>
              </div>

              <a
                href={projects[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link mt-10 inline-flex w-fit items-center gap-3 border-b border-[#DCE5ED] pb-3 text-[9px] font-semibold tracking-[0.2em] text-[#1769C2] transition-colors duration-300 hover:border-[#1769C2]"
              >
                VISIT PROJECT

                <ExternalLink
                  size={13}
                  className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            PROJECT GRID
        ========================================================== */}

        <div className="grid gap-6 md:grid-cols-3">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.15 }}
              className="group relative overflow-hidden border border-[#DCE5ED] bg-white"
            >
              {/* Image */}

              <div className="relative aspect-[16/10] overflow-hidden bg-[#EEF4F8]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061A2B]/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number */}

                <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center border border-white/60 bg-white/85 backdrop-blur-md">
                  <span className="text-[8px] font-bold tracking-[0.1em] text-[#1769C2]">
                    {project.number}
                  </span>
                </div>

                {/* View Button */}

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title}`}
                  className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-white text-[#1769C2] opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>

              {/* Content */}

              <div className="p-6 sm:p-7">
                <p className="text-[8px] font-semibold tracking-[0.2em] text-[#1769C2]">
                  {project.category}
                </p>

                <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-[#0B243D]">
                  {project.title}
                </h3>

                <p className="mt-4 text-[12px] leading-6 text-[#718398]">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-6 inline-flex items-center gap-3 text-[8px] font-semibold tracking-[0.2em] text-[#1769C2]"
                >
                  VIEW PROJECT

                  <ArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-[#E4EBF2] pt-8"
        >
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

            <div>
              <p className="text-[9px] font-semibold tracking-[0.25em] text-[#1769C2]">
                MORE WORK
              </p>

              <p className="mt-2 text-[12px] leading-7 text-[#718398]">
                Explore more projects, experiments, and digital experiences
                created by CodeGenZ Solutions.
              </p>
            </div>

            <Link
              to="/projects"
              className="group inline-flex shrink-0 items-center gap-4 rounded-full bg-[#1769C2] px-7 py-4 text-[9px] font-semibold tracking-[0.2em] text-white shadow-[0_12px_30px_rgba(23,105,194,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F559F] hover:shadow-[0_16px_38px_rgba(23,105,194,0.25)]"
            >
              EXPLORE ALL PROJECTS

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={12} />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeProject;