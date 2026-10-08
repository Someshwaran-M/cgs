import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Utensils,
  Plane,
  PenTool,
  MoveUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

/* =========================================================
   PROJECT DATA
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
   ANIMATIONS
========================================================= */

const textReveal = {
  hidden: {
    opacity: 0,
    x: -45,
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
   HOME PROJECT
========================================================= */

const HomeProject = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section
      id="home-projects"
      className="
        relative
        overflow-hidden
        bg-white
        font-['Roboto',sans-serif]
        text-[#0B243D]
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-[180px] top-[15%] h-[420px] w-[420px] rounded-full bg-[#1769C2]/[0.035] blur-[120px]" />

        <div className="absolute -right-[180px] top-[35%] h-[500px] w-[500px] rounded-full bg-[#1769C2]/[0.045] blur-[140px]" />

        <div className="absolute bottom-0 left-[45%] h-[300px] w-[300px] rounded-full bg-[#0B243D]/[0.025] blur-[100px]" />
      </div>

      {/* =====================================================
          MAIN WRAPPER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1500px]
          px-6
          py-20
          sm:px-8
          sm:py-24
          lg:px-12
          lg:py-32
        "
      >
        {/* ===================================================
            DESKTOP MAIN LAYOUT
        ==================================================== */}

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-10">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={textReveal}
            className="relative z-20 max-w-[570px]"
          >
            {/* LABEL */}

            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#1769C2]" />

              <span className="text-[9px] font-semibold tracking-[0.28em] text-[#1769C2]">
                SELECTED WORK
              </span>
            </div>

            {/* HEADING */}

            <h2
              className="
                mt-6
                text-[42px]
                font-semibold
                leading-[0.98]
                tracking-[-0.055em]
                text-[#0B243D]
                sm:text-[52px]
                lg:text-[60px]
                xl:text-[68px]
              "
            >
              Projects that
              <br />

              <span className="text-[#1769C2]">
                make an impact.
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-7
                max-w-[470px]
                text-[13px]
                leading-7
                text-[#718398]
                sm:text-[14px]
              "
            >
              A curated selection of websites and digital products
              built for businesses that want a stronger online
              presence.
            </p>

            {/* CTA */}

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                to="/projects"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  rounded-full
                  bg-[#1769C2]
                  px-6
                  py-3.5
                  text-[9px]
                  font-semibold
                  tracking-[0.2em]
                  text-white
                  shadow-[0_14px_35px_rgba(23,105,194,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#0F559F]
                "
              >
                VIEW ALL PROJECTS

                <span
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    bg-white/15
                  "
                >
                  <ArrowRight
                    size={12}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </span>
              </Link>

              {/* SMALL INFO */}

              <div className="flex items-center gap-3">
                <span className="h-8 w-px bg-[#DCE5ED]" />

                <div>
                  <p className="text-[10px] font-semibold text-[#0B243D]">
                    DIGITAL
                  </p>

                  <p className="mt-0.5 text-[8px] tracking-[0.18em] text-[#9AAABB]">
                    EXPERIENCES
                  </p>
                </div>
              </div>
            </div>

            {/* BOTTOM DECORATIVE LINE */}

            <div className="mt-12 flex items-center gap-4">
              <span className="h-px w-20 bg-[#DCE5ED]" />

              <span className="text-[8px] font-medium tracking-[0.2em] text-[#A5B2BE]">
                CODEGENZ SOLUTIONS
              </span>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT PROJECT SHOWCASE
          ================================================== */}

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
              amount: 0.15,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              min-h-[560px]
              lg:min-h-[620px]
            "
          >
            {/* =================================================
                DECORATIVE FRAME
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                right-[4%]
                top-[2%]
                hidden
                h-[470px]
                w-[470px]
                rounded-[40px]
                border
                border-[#DCE5ED]
                lg:block
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                right-[10%]
                top-[8%]
                hidden
                h-[420px]
                w-[420px]
                rounded-[36px]
                border
                border-[#1769C2]/10
                lg:block
              "
            />

            {/* BLUE DECORATION */}

            <div
              className="
                pointer-events-none
                absolute
                right-[12%]
                top-[5%]
                hidden
                h-2
                w-2
                rounded-full
                bg-[#1769C2]
                lg:block
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                bottom-[10%]
                right-[7%]
                hidden
                h-20
                w-20
                rounded-full
                border
                border-[#1769C2]/10
                lg:block
              "
            />

            {/* =================================================
                PROJECT CARDS
            ================================================== */}

            {projects.map((project, index) => {
              const Icon = project.icon;

              const isActive = activeProject === index;

              const otherActive =
                activeProject !== null && !isActive;

              /*
                Initial positions:
                Card 01 → left/top
                Card 02 → center
                Card 03 → right/bottom

                When hovered:
                active card → center/front
              */

              const positions = [
                {
                  x: -15,
                  y: 35,
                  rotate: -6,
                },

                {
                  x: 100,
                  y: 0,
                  rotate: 2,
                },

                {
                  x: 215,
                  y: 55,
                  rotate: 7,
                },
              ];

              const position = positions[index];

              return (
                <motion.article
                  key={project.number}
                  initial={{
                    opacity: 0,
                    x: position.x + 80,
                    y: position.y + 40,
                    rotate: position.rotate,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: position.x,
                    y: position.y,
                    rotate: position.rotate,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.85,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  animate={{
                    x: isActive
                      ? 65
                      : position.x,

                    y: isActive
                      ? 20
                      : position.y,

                    rotate: isActive
                      ? 0
                      : position.rotate,

                    scale: isActive
                      ? 1.09
                      : otherActive
                      ? 0.91
                      : 1,

                    opacity: otherActive ? 0.42 : 1,
                  }}
                  whileHover={{
                    scale: isActive ? 1.09 : 1.04,
                  }}
                  onMouseEnter={() =>
                    setActiveProject(index)
                  }
                  onMouseLeave={() =>
                    setActiveProject(null)
                  }
                  onFocus={() =>
                    setActiveProject(index)
                  }
                  onClick={() =>
                    setActiveProject(index)
                  }
                  style={{
                    zIndex: isActive
                      ? 100
                      : 20 + index,
                  }}
                  className="
                    absolute
                    left-[1%]
                    top-[65px]
                    hidden
                    h-[445px]
                    w-[355px]
                    cursor-pointer
                    lg:block
                    xl:h-[470px]
                    xl:w-[380px]
                  "
                >
                  {/* =================================================
                      CARD
                  ================================================== */}

                  <div
                    className={`
                      relative
                      h-full
                      w-full
                      overflow-hidden
                      rounded-[28px]
                      border
                      bg-white
                      transition-all
                      duration-500

                      ${
                        isActive
                          ? "border-[#1769C2]/45 shadow-[0_35px_100px_rgba(23,105,194,0.25)]"
                          : "border-[#DCE5ED] shadow-[0_25px_65px_rgba(11,36,61,0.13)]"
                      }
                    `}
                  >
                    {/* =================================================
                        IMAGE
                    ================================================== */}

                    <div className="relative h-[245px] overflow-hidden xl:h-[260px]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-[900ms]
                          ease-out

                          ${
                            isActive
                              ? "scale-[1.08]"
                              : "scale-100"
                          }
                        `}
                        onError={(event) => {
                          event.currentTarget.style.display =
                            "none";
                        }}
                      />

                      {/* FALLBACK */}

                      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#EAF3FA] to-[#D8E6F1]" />

                      {/* OVERLAY */}

                      <div className="absolute inset-0 bg-gradient-to-t from-[#061525]/65 via-transparent to-transparent" />

                      {/* NUMBER */}

                      <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/90 shadow-lg backdrop-blur-md">
                        <span className="text-[8px] font-bold tracking-[0.1em] text-[#1769C2]">
                          {project.number}
                        </span>
                      </div>

                      {/* ICON */}

                      <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/90 text-[#1769C2] shadow-lg backdrop-blur-md">
                        <Icon
                          size={15}
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* ACTIVE LABEL */}

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 8,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            exit={{
                              opacity: 0,
                              y: 8,
                            }}
                            className="
                              absolute
                              bottom-4
                              left-4
                              flex
                              items-center
                              gap-2
                              rounded-full
                              bg-white/95
                              px-3
                              py-2
                              shadow-lg
                              backdrop-blur-md
                            "
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#1769C2]" />

                            <span className="text-[7px] font-semibold tracking-[0.18em] text-[#0B243D]">
                              SELECTED
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* LIVE PROJECT BUTTON */}

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) =>
                          event.stopPropagation()
                        }
                        className={`
                          absolute
                          bottom-4
                          right-4
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          bg-[#1769C2]
                          text-white
                          shadow-xl
                          transition-all
                          duration-400

                          ${
                            isActive
                              ? "translate-y-0 opacity-100"
                              : "translate-y-3 opacity-0"
                          }

                          hover:bg-[#0F559F]
                        `}
                        aria-label={`Visit ${project.title}`}
                      >
                        <ArrowUpRight size={16} />
                      </a>

                      {/* BLUE LINE */}

                      <div
                        className={`
                          absolute
                          bottom-0
                          left-0
                          h-[3px]
                          bg-[#1769C2]
                          transition-all
                          duration-500

                          ${
                            isActive
                              ? "w-full"
                              : "w-0"
                          }
                        `}
                      />
                    </div>

                    {/* =================================================
                        CARD CONTENT
                    ================================================== */}

                    <div className="flex h-[200px] flex-col justify-between px-5 py-5 xl:px-6">
                      <div>
                        {/* CATEGORY */}

                        <div className="flex items-center gap-2">
                          <span className="text-[7px] font-semibold tracking-[0.22em] text-[#1769C2]">
                            {project.category}
                          </span>

                          <span className="h-px w-5 bg-[#DCE5ED]" />
                        </div>

                        {/* TITLE */}

                        <h3 className="mt-3 text-[23px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#0B243D] xl:text-[25px]">
                          {project.title}
                        </h3>

                        {/* DESCRIPTION */}

                        <p className="mt-3 line-clamp-3 text-[10px] leading-5 text-[#718398] xl:text-[11px]">
                          {project.description}
                        </p>
                      </div>

                      {/* BOTTOM */}

                      <div className="flex items-center justify-between border-t border-[#EEF2F5] pt-4">
                        <span className="text-[7px] font-medium tracking-[0.18em] text-[#9AAABB]">
                          {project.subtitle}
                        </span>

                        <MoveUpRight
                          size={13}
                          className={`
                            transition-all
                            duration-300

                            ${
                              isActive
                                ? "text-[#1769C2]"
                                : "text-[#A8B5C1]"
                            }
                          `}
                        />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}

            {/* =================================================
                DESKTOP HOVER INSTRUCTION
            ================================================== */}

            <div
              className="
                absolute
                bottom-[18px]
                right-[4%]
                hidden
                items-center
                gap-3
                lg:flex
              "
            >
              <span className="h-px w-8 bg-[#DCE5ED]" />

              <span className="text-[7px] font-semibold tracking-[0.22em] text-[#A3AFBA]">
                HOVER TO EXPLORE
              </span>
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            MOBILE PROJECTS
        ==================================================== */}

        <div className="mt-14 space-y-5 lg:hidden">
          {projects.map((project, index) => {
            const Icon = project.icon;

            const isActive = activeProject === index;

            return (
              <motion.article
                key={project.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                onClick={() =>
                  setActiveProject(
                    isActive ? null : index
                  )
                }
                className={`
                  relative
                  overflow-hidden
                  rounded-[26px]
                  border
                  bg-white
                  transition-all
                  duration-500

                  ${
                    isActive
                      ? "border-[#1769C2]/40 shadow-[0_25px_70px_rgba(23,105,194,0.18)]"
                      : "border-[#DCE5ED] shadow-[0_12px_35px_rgba(11,36,61,0.06)]"
                  }
                `}
              >
                {/* IMAGE */}

                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700

                      ${
                        isActive
                          ? "scale-[1.06]"
                          : "scale-100"
                      }
                    `}
                    onError={(event) => {
                      event.currentTarget.style.display =
                        "none";
                    }}
                  />

                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#EAF3FA] to-[#D8E6F1]" />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061525]/60 via-transparent to-transparent" />

                  {/* NUMBER */}

                  <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/90 shadow-md backdrop-blur-md">
                    <span className="text-[8px] font-bold text-[#1769C2]">
                      {project.number}
                    </span>
                  </div>

                  {/* ICON */}

                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/90 text-[#1769C2] shadow-md backdrop-blur-md">
                    <Icon size={15} />
                  </div>

                  {/* OPEN */}

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) =>
                      event.stopPropagation()
                    }
                    className={`
                      absolute
                      bottom-4
                      right-4
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-[#1769C2]
                      text-white
                      shadow-lg
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-2 opacity-0"
                      }
                    `}
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                {/* CONTENT */}

                <div className="p-5">
                  <span className="text-[8px] font-semibold tracking-[0.2em] text-[#1769C2]">
                    {project.category}
                  </span>

                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#0B243D]">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-[12px] leading-6 text-[#718398]">
                    {project.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-[#EEF2F5] pt-4">
                    <span className="text-[8px] font-medium tracking-[0.18em] text-[#9AAABB]">
                      {project.subtitle}
                    </span>

                    <span className="text-[8px] font-semibold tracking-[0.15em] text-[#1769C2]">
                      {isActive ? "SELECTED" : "EXPLORE"}
                    </span>
                  </div>
                </div>

                {/* ACTIVE LINE */}

                <div
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    bg-[#1769C2]
                    transition-all
                    duration-500

                    ${
                      isActive
                        ? "w-full"
                        : "w-0"
                    }
                  `}
                />
              </motion.article>
            );
          })}
        </div>

        {/* ===================================================
            FINAL STATEMENT
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 max-w-3xl border-t border-[#DCE5ED] pt-12 lg:mt-28"
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

          <h3 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#0B243D] sm:text-4xl lg:text-5xl">
            Your idea could be{" "}
            <span className="text-[#1769C2]">
              the next one.
            </span>
          </h3>

          <p className="mt-5 max-w-xl text-[13px] leading-7 text-[#718398]">
            Explore our complete portfolio or start a
            conversation about your next website,
            application or digital experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeProject;