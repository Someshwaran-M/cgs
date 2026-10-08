import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Utensils,
  Plane,
  PenTool,
} from "lucide-react";
import { Link } from "react-router-dom";

/* =========================================================
   FEATURED PROJECTS
========================================================= */

const projects = [
  {
    number: "01",
    title: "Spice Garden",
    subtitle: "Restaurant Experience",
    category: "RESTAURANT / BUSINESS",
    description:
      "A modern restaurant website designed to present the brand, menu, atmosphere and customer experience through an engaging digital interface.",
    image: "/images/projects/spice-garden.png",
    link: "https://spice-garden-restaurant-web.vercel.app/",
    icon: Utensils,
  },

  {
    number: "02",
    title: "Tours & Travels",
    subtitle: "Travel Experience",
    category: "TRAVEL / BUSINESS",
    description:
      "A modern travel website experience designed to present destinations, services and travel information through a clear and engaging interface.",
    image: "/images/projects/tour-redesign.png",
    link: "https://tour-redesign.vercel.app/",
    icon: Plane,
  },

  {
    number: "03",
    title: "Collaborative Drawing Board",
    subtitle: "Interactive Web Application",
    category: "WEB APPLICATION",
    description:
      "An interactive browser-based drawing experience designed around visual creativity, digital collaboration and an intuitive workspace.",
    image: "/images/projects/drawing-board.png",
    link: "https://drawing-board-ebon-eight.vercel.app/",
    icon: PenTool,
  },
];

/* =========================================================
   PROJECT REVEAL
   Right → Left
========================================================= */

const revealFromRight = {
  hidden: {
    opacity: 0,
    x: 100,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   IMAGE REVEAL
========================================================= */

const imageReveal = {
  hidden: {
    opacity: 0,
    x: 120,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,

    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   HOME PROJECT
========================================================= */

const HomeProject = () => {
  return (
    <section
      id="home-projects"
      className="relative overflow-hidden bg-white text-[#102A43]"
    >
      {/* =====================================================
          TOP INTRO
      ====================================================== */}

      <div className="mx-auto max-w-[1500px] px-6 pb-14 pt-24 sm:px-8 lg:px-12 lg:pb-20 lg:pt-32">

        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div className="flex items-center gap-3">

              <span className="h-px w-10 bg-[#1769C2]" />

              <span className="text-[9px] font-semibold tracking-[0.28em] text-[#1769C2]">
                SELECTED WORK
              </span>

            </div>

            <h2 className="mt-5 max-w-[650px] text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#0B243D] sm:text-4xl lg:text-5xl">
              Projects that
              <br />

              <span className="text-[#1769C2]">
                make an impact.
              </span>
            </h2>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-xl lg:text-right"
          >

            <p className="text-[13px] leading-7 text-[#60758A]">
              A curated selection of websites and digital products
              built for businesses that want a stronger online
              presence.
            </p>

            <Link
              to="/projects"
              className="group mt-5 inline-flex items-center gap-3 text-[9px] font-semibold tracking-[0.2em] text-[#1769C2]"
            >
              VIEW ALL PROJECTS

              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#DCE5ED] transition-all duration-300 group-hover:border-[#1769C2] group-hover:bg-[#1769C2] group-hover:text-white">
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </span>
            </Link>

          </motion.div>

        </div>

      </div>

      {/* =====================================================
          PROJECT SHOWCASE
      ====================================================== */}

      <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-12">

        <div className="border-t border-[#DCE5ED]">

          {projects.map((project, index) => {

            const Icon = project.icon;

            const reverse =
              index % 2 !== 0;

            return (
              <motion.article
                key={project.number}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.16,
                }}
                variants={revealFromRight}
                className="group border-b border-[#DCE5ED]"
              >

                <div
                  className={`flex flex-col ${
                    reverse
                      ? "lg:flex-row-reverse"
                      : "lg:flex-row"
                  }`}
                >

                  {/* =================================================
                      IMAGE
                  ================================================== */}

                  <div className="relative w-full overflow-hidden lg:w-[61%]">

                    <motion.div
                      variants={imageReveal}
                      className="relative aspect-[16/10] overflow-hidden bg-[#EDF3F8] lg:aspect-[16/9]"
                    >

                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.045]"
                        onError={(event) => {
                          event.currentTarget.style.display =
                            "none";
                        }}
                      />

                      {/* Fallback */}
                      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#EAF3FA] to-[#D8E6F1]" />

                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#061A2B]/15 via-transparent to-white/10" />

                      {/* Number */}
                      <div className="absolute left-5 top-5 sm:left-7 sm:top-7">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/85 shadow-lg backdrop-blur-md">

                          <span className="text-[9px] font-bold tracking-[0.1em] text-[#1769C2]">
                            {project.number}
                          </span>

                        </div>

                      </div>

                      {/* Icon */}
                      <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/75 text-[#1769C2] backdrop-blur-md sm:right-7 sm:top-7">

                        <Icon
                          size={16}
                          strokeWidth={1.5}
                        />

                      </div>

                      {/* Hover action */}
                      <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7">

                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${project.title}`}
                          className="flex h-11 w-11 translate-y-4 items-center justify-center rounded-full bg-[#1769C2] text-white opacity-0 shadow-xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[#0F559F]"
                        >
                          <ArrowUpRight size={17} />
                        </a>

                      </div>

                      {/* Bottom accent */}
                      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#1769C2] transition-all duration-700 group-hover:w-full" />

                    </motion.div>

                  </div>

                  {/* =================================================
                      PROJECT CONTENT
                  ================================================== */}

                  <div className="flex w-full flex-1 flex-col justify-between px-1 py-10 sm:py-12 lg:px-10 lg:py-14 xl:px-14">

                    <div>

                      {/* Category */}
                      <div className="flex flex-wrap items-center gap-3">

                        <span className="text-[8px] font-semibold tracking-[0.24em] text-[#1769C2]">
                          {project.category}
                        </span>

                        <span className="h-px w-6 bg-[#DCE5ED]" />

                        <span className="text-[8px] tracking-[0.18em] text-[#9AAABB]">
                          {project.subtitle}
                        </span>

                      </div>

                      {/* Title */}
                      <h3 className="mt-5 max-w-[540px] text-2xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#0B243D] sm:text-3xl lg:text-[34px]">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-5 max-w-[500px] text-[13px] leading-7 text-[#718398]">
                        {project.description}
                      </p>

                    </div>

                    {/* Bottom */}
                    <div className="mt-10">

                      <div className="mb-6 flex items-center gap-2">

                        <span className="h-1.5 w-1.5 rounded-full bg-[#1769C2]" />

                        <span className="text-[8px] font-medium tracking-[0.18em] text-[#8C9CAD]">
                          DIGITAL EXPERIENCE
                        </span>

                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-3 border-b border-[#DCE5ED] pb-3 text-[9px] font-semibold tracking-[0.2em] text-[#1769C2] transition-all duration-300 hover:border-[#1769C2]"
                      >
                        VIEW LIVE PROJECT

                        <ExternalLink
                          size={13}
                          className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        />

                      </a>

                    </div>

                  </div>

                </div>

              </motion.article>
            );
          })}

        </div>

      </div>

      {/* =====================================================
          PROJECT COUNT / STATEMENT
      ====================================================== */}

      <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-12">

        <motion.div
          initial={{
            opacity: 0,
            x: 70,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col justify-between gap-8 border-b border-[#DCE5ED] py-12 sm:flex-row sm:items-center"
        >

          <div className="flex items-center gap-8">

            <div>

              <p className="text-2xl font-semibold tracking-[-0.03em] text-[#0B243D]">
                03
              </p>

              <p className="mt-1 text-[8px] font-semibold tracking-[0.2em] text-[#9AAABB]">
                FEATURED PROJECTS
              </p>

            </div>

            <div className="h-8 w-px bg-[#DCE5ED]" />

            <div>

              <p className="text-2xl font-semibold tracking-[-0.03em] text-[#0B243D]">
                2026
              </p>

              <p className="mt-1 text-[8px] font-semibold tracking-[0.2em] text-[#9AAABB]">
                SELECTED WORK
              </p>

            </div>

          </div>

          <Link
            to="/projects"
            className="group inline-flex shrink-0 items-center gap-4 rounded-full bg-[#1769C2] px-6 py-3.5 text-[9px] font-semibold tracking-[0.2em] text-white shadow-[0_10px_25px_rgba(23,105,194,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F559F]"
          >
            EXPLORE ALL PROJECTS

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
              <ArrowRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>

          </Link>

        </motion.div>

      </div>

      {/* =====================================================
          FINAL STATEMENT
      ====================================================== */}

      <div className="mx-auto max-w-[1500px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

        <motion.div
          initial={{
            opacity: 0,
            x: 80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >

          <div className="flex items-center gap-3">

            <Sparkles
              size={14}
              className="text-[#1769C2]"
            />

            <span className="text-[8px] font-semibold tracking-[0.24em] text-[#1769C2]">
              NEXT PROJECT
            </span>

          </div>

          <h3 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#0B243D] sm:text-4xl">
            Your idea could be
            <span className="text-[#1769C2]">
              {" "}
              the next one.
            </span>
          </h3>

          <p className="mt-5 max-w-xl text-[13px] leading-7 text-[#718398]">
            Explore our complete portfolio or start a conversation
            about your next website, application or digital
            experience.
          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default HomeProject;