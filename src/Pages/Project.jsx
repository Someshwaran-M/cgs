import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  X,
  Utensils,
  Plane,
  Globe2,
  PenTool,
  LayoutDashboard,
  Code2,
  Check,
  ChevronRight,
  Sparkles,
} from "lucide-react";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: 1,
    number: "01",
    title: "Spice Garden",
    subtitle: "Restaurant Experience",
    category: "Restaurant",
    description:
      "A polished restaurant website created to present the brand, menu, services, location and customer experience through a refined digital interface.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "CSS",
    ],
    image: "/images/projects/spice-garden.png",
    link: "https://spice-garden-restaurant-web.vercel.app/",
    icon: Utensils,
  },

  {
    id: 2,
    number: "02",
    title: "Tours & Travels",
    subtitle: "Travel Discovery",
    category: "Travel",
    description:
      "A destination-focused travel experience designed around visual storytelling, destinations, packages and a smooth browsing experience.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
    ],
    image: "/images/projects/tour-redesign.png",
    link: "https://tour-redesign.vercel.app/",
    icon: Plane,
  },

  {
    id: 3,
    number: "03",
    title: "Tours & Travels — Silk",
    subtitle: "Travel Experience",
    category: "Travel",
    description:
      "A distinctive travel website concept focused on presenting destinations and travel experiences through a clean, modern and responsive interface.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
    ],
    image: "/images/projects/tours-silk.png",
    link: "https://tours-travels-silk.vercel.app/",
    icon: Globe2,
  },

  {
    id: 4,
    number: "04",
    title: "Collaborative Drawing Board",
    subtitle: "Interactive Web Application",
    category: "Web Application",
    description:
      "An interactive browser-based drawing experience created around visual creativity, digital collaboration and an intuitive workspace.",
    technologies: [
      "React",
      "JavaScript",
      "Canvas",
      "Web Application",
    ],
    image: "/images/projects/drawing-board.png",
    link: "https://drawing-board-ebon-eight.vercel.app/",
    icon: PenTool,
  },

  {
    id: 5,
    number: "05",
    title: "CRM Dashboard",
    subtitle: "Business Intelligence",
    category: "Dashboard",
    description:
      "A structured dashboard interface focused on business information, metrics and operational workflows in a clean digital environment.",
    technologies: [
      "React",
      "JavaScript",
      "Dashboard",
      "Data UI",
    ],
    image: "/images/projects/crm-dashboard.png",
    link: "https://crm-control-dashboard.vercel.app/dashboard",
    icon: LayoutDashboard,
  },

  {
    id: 6,
    number: "06",
    title: "Thangam & Nandhini Catering",
    subtitle: "Business Website",
    category: "Business",
    description:
      "A catering business website designed to communicate the brand, food offerings, services and customer contact experience with a strong traditional identity.",
    technologies: [
      "React",
      "Vite",
      "CSS",
      "Responsive UI",
    ],
    image: "/images/projects/thangam-nandhini.png",
    link: "https://thangam-nandhini-catering.vercel.app/",
    icon: Utensils,
  },
];

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  "All",
  "Restaurant",
  "Travel",
  "Web Application",
  "Dashboard",
  "Business",
];

/* =========================================================
   PROJECT COMPONENT
========================================================= */

const Project = () => {
  const [activeProject, setActiveProject] =
    useState(0);

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [selectedProject, setSelectedProject] =
    useState(null);

  /* =======================================================
     FILTER
  ======================================================= */

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeCategory
        );

  /* =======================================================
     CURRENT PROJECT
  ======================================================= */

  const currentProject =
    filteredProjects[activeProject] ||
    filteredProjects[0];

  /* =======================================================
     UPDATE ACTIVE PROJECT WHEN FILTER CHANGES
  ======================================================= */

  useEffect(() => {
    setActiveProject(0);
  }, [activeCategory]);

  /* =======================================================
     BODY LOCK
  ======================================================= */

  useEffect(() => {
    document.body.style.overflow =
      selectedProject ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  /* =======================================================
     ESCAPE
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  /* =======================================================
     NEXT PROJECT
  ======================================================= */

  const goNext = () => {
    setActiveProject(
      (prev) =>
        (prev + 1) % filteredProjects.length
    );
  };

  /* =======================================================
     PREVIOUS PROJECT
  ======================================================= */

  const goPrevious = () => {
    setActiveProject(
      (prev) =>
        (prev - 1 + filteredProjects.length) %
        filteredProjects.length
    );
  };

  if (!currentProject) {
    return null;
  }

  const CurrentIcon = currentProject.icon;

  return (
    <section className="min-h-screen overflow-hidden bg-white text-[#061525]">

      {/* =====================================================
          HERO INTRO
      ====================================================== */}

      <section className="border-b border-slate-200 bg-white">

        <div className="mx-auto max-w-[1450px] px-6 pb-20 pt-32 lg:px-12 lg:pt-36">

          <div className="max-w-3xl">

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="flex items-center gap-3"
            >

              <span className="h-px w-10 bg-cyan-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                CodeGenZ / Selected Work
              </span>

            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.08,
              }}
              className="mt-7 text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[68px]"
            >
              Projects that
              <br />

              <span className="text-slate-300">
                create an impression.
              </span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.16,
              }}
              className="mt-7 max-w-2xl text-base leading-8 text-slate-500"
            >
              A curated collection of websites, applications and
              digital experiences designed and developed by
              CodeGenZ Solutions.
            </motion.p>

          </div>

        </div>

      </section>

      {/* =====================================================
          FILTER BAR
      ====================================================== */}

      <section className="border-b border-slate-200 bg-white">

        <div className="mx-auto flex max-w-[1450px] items-center gap-2 overflow-x-auto px-6 py-4 lg:px-12">

          <span className="mr-4 shrink-0 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Explore
          </span>

          {categories.map((category) => {

            const isActive =
              activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`shrink-0 rounded-full px-4 py-2 text-[11px] font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#061525] text-white"
                    : "text-slate-500 hover:bg-slate-100 hover:text-[#061525]"
                }`}
              >
                {category}
              </button>
            );
          })}

        </div>

      </section>

      {/* =====================================================
          MAIN PROJECT ATELIER
      ====================================================== */}

      <section className="bg-[#f6f7f8]">

        <div className="mx-auto max-w-[1450px] px-6 py-12 lg:px-12 lg:py-16">

          <div className="flex min-h-[680px] flex-col overflow-hidden rounded-[28px] bg-[#061525] shadow-[0_25px_80px_rgba(6,21,37,0.12)] lg:flex-row">

            {/* =================================================
                LEFT PROJECT INDEX
            ================================================== */}

            <aside className="w-full border-b border-white/10 bg-[#061525] lg:w-[31%] lg:border-b-0 lg:border-r">

              <div className="flex h-full flex-col">

                {/* Header */}
                <div className="border-b border-white/10 px-6 py-7">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/25">
                        Project Archive
                      </p>

                      <p className="mt-1 text-sm font-medium text-white/70">
                        {filteredProjects.length} projects
                      </p>

                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-cyan-300">
                      <Sparkles size={15} />
                    </div>

                  </div>

                </div>

                {/* Project list */}
                <div className="flex-1">

                  {filteredProjects.map(
                    (project, index) => {

                      const Icon = project.icon;

                      const isActive =
                        index === activeProject;

                      return (
                        <button
                          key={project.id}
                          type="button"
                          onClick={() =>
                            setActiveProject(index)
                          }
                          className={`group relative flex w-full items-center gap-4 border-b border-white/[0.07] px-6 py-5 text-left transition-all duration-300 ${
                            isActive
                              ? "bg-white/[0.055]"
                              : "hover:bg-white/[0.025]"
                          }`}
                        >

                          {/* Active line */}
                          <span
                            className={`absolute bottom-0 left-0 top-0 w-[2px] transition-all duration-300 ${
                              isActive
                                ? "bg-cyan-400"
                                : "bg-transparent"
                            }`}
                          />

                          {/* Number */}
                          <span
                            className={`w-6 shrink-0 text-[9px] font-bold tracking-[0.15em] ${
                              isActive
                                ? "text-cyan-300"
                                : "text-white/20"
                            }`}
                          >
                            {project.number}
                          </span>

                          {/* Icon */}
                          <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                              isActive
                                ? "bg-cyan-400/10 text-cyan-300"
                                : "bg-white/[0.04] text-white/25 group-hover:text-white/50"
                            }`}
                          >
                            <Icon size={15} />
                          </div>

                          {/* Name */}
                          <div className="min-w-0 flex-1">

                            <p
                              className={`truncate text-sm font-medium transition-colors ${
                                isActive
                                  ? "text-white"
                                  : "text-white/40 group-hover:text-white/65"
                              }`}
                            >
                              {project.title}
                            </p>

                            <p className="mt-1 truncate text-[9px] uppercase tracking-[0.14em] text-white/20">
                              {project.category}
                            </p>

                          </div>

                          <ChevronRight
                            size={14}
                            className={`shrink-0 transition-all duration-300 ${
                              isActive
                                ? "translate-x-0 text-cyan-300"
                                : "-translate-x-1 text-white/10 group-hover:text-white/30"
                            }`}
                          />

                        </button>
                      );
                    }
                  )}

                </div>

                {/* Bottom index */}
                <div className="hidden border-t border-white/10 px-6 py-6 lg:block">

                  <div className="flex items-center justify-between">

                    <span className="text-[9px] uppercase tracking-[0.18em] text-white/20">
                      Digital Portfolio
                    </span>

                    <span className="text-[9px] text-white/20">
                      2026
                    </span>

                  </div>

                </div>

              </div>

            </aside>

            {/* =================================================
                RIGHT PROJECT PREVIEW
            ================================================== */}

            <main className="relative min-w-0 flex-1 bg-[#0a1928]">

              <AnimatePresence mode="wait">

                <motion.div
                  key={currentProject.id}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -20,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-full"
                >

                  {/* =================================================
                      IMAGE
                  ================================================== */}

                  <div className="relative h-[330px] overflow-hidden sm:h-[430px] lg:h-[445px]">

                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="h-full w-full object-cover transition-transform duration-[1200ms]"
                      onError={(event) => {
                        event.currentTarget.style.display =
                          "none";
                      }}
                    />

                    {/* fallback */}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#123047] via-[#091a29] to-[#02080e]" />

                    {/* Image overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061525] via-transparent to-[#061525]/10" />

                    {/* Top information */}
                    <div className="absolute left-6 right-6 top-6 flex items-start justify-between sm:left-8 sm:right-8 sm:top-8">

                      <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 backdrop-blur-md">

                        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/60">
                          {currentProject.category}
                        </span>

                      </div>

                      <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 backdrop-blur-md">

                        <span className="text-[9px] font-bold tracking-[0.15em] text-white/50">
                          {currentProject.number} /{" "}
                          {String(
                            filteredProjects.length
                          ).padStart(2, "0")}
                        </span>

                      </div>

                    </div>

                    {/* Image bottom */}
                    <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">

                      <div className="flex items-end justify-between gap-5">

                        <div>

                          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                            {currentProject.subtitle}
                          </p>

                          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                            {currentProject.title}
                          </h2>

                        </div>

                        <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white backdrop-blur-md sm:flex">
                          <CurrentIcon
                            size={17}
                            strokeWidth={1.5}
                          />
                        </div>

                      </div>

                    </div>

                  </div>

                  {/* =================================================
                      PROJECT INFORMATION
                  ================================================== */}

                  <div className="px-6 py-7 sm:px-8 sm:py-8">

                    <div className="flex flex-col gap-7">

                      {/* Description */}
                      <div>

                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/20">
                          About the project
                        </p>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50">
                          {currentProject.description}
                        </p>

                      </div>

                      {/* Technologies */}
                      <div>

                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/20">
                          Technology
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">

                          {currentProject.technologies.map(
                            (technology) => (
                              <span
                                key={technology}
                                className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[10px] text-white/40"
                              >
                                {technology}
                              </span>
                            )
                          )}

                        </div>

                      </div>

                      {/* Bottom controls */}
                      <div className="flex flex-col justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center">

                        <div className="flex items-center gap-2">

                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

                          <span className="text-[10px] text-white/30">
                            Selected project
                          </span>

                        </div>

                        <div className="flex flex-wrap items-center gap-3">

                          <button
                            type="button"
                            onClick={() =>
                              setSelectedProject(
                                currentProject
                              )
                            }
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-[11px] font-medium text-white/55 transition-all hover:border-white/20 hover:text-white"
                          >
                            Details

                            <ArrowUpRight
                              size={13}
                            />
                          </button>

                          <a
                            href={
                              currentProject.link
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[11px] font-semibold text-[#061525] transition-all hover:bg-cyan-300"
                          >
                            Visit project

                            <ExternalLink
                              size={13}
                              className="transition-transform group-hover:translate-x-0.5"
                            />
                          </a>

                        </div>

                      </div>

                    </div>

                  </div>

                </motion.div>

              </AnimatePresence>

            </main>

          </div>

          {/* =================================================
              NAVIGATION
          ================================================== */}

          <div className="mt-5 flex items-center justify-between">

            <button
              type="button"
              onClick={goPrevious}
              disabled={filteredProjects.length <= 1}
              className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 transition-colors hover:text-[#061525] disabled:opacity-30"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 transition-all group-hover:border-[#061525]">
                <ArrowUpRight
                  size={13}
                  className="-rotate-135"
                />
              </span>

              Previous
            </button>

            {/* Progress */}
            <div className="flex items-center gap-2">

              {filteredProjects.map(
                (project, index) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() =>
                      setActiveProject(index)
                    }
                    aria-label={`Open project ${project.number}`}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === activeProject
                        ? "w-8 bg-[#061525]"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                )
              )}

            </div>

            <button
              type="button"
              onClick={goNext}
              disabled={filteredProjects.length <= 1}
              className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 transition-colors hover:text-[#061525] disabled:opacity-30"
            >
              Next

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 transition-all group-hover:border-[#061525]">
                <ArrowUpRight
                  size={13}
                  className="rotate-45"
                />
              </span>
            </button>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROJECT PHILOSOPHY
      ====================================================== */}

      <section className="border-t border-slate-200 bg-white">

        <div className="mx-auto max-w-[1450px] px-6 py-28 lg:px-12">

          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">

            <div className="max-w-xl">

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
                Our Approach
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-4xl">
                Good digital work
                <br />

                <span className="text-slate-300">
                  starts before development.
                </span>
              </h2>

            </div>

            <div className="max-w-2xl">

              {[
                {
                  number: "01",
                  title: "Understand",
                  text: "Understand the business, audience and problem before deciding what to build.",
                },
                {
                  number: "02",
                  title: "Design",
                  text: "Create a clear visual and interaction direction that makes the product easy to use.",
                },
                {
                  number: "03",
                  title: "Develop",
                  text: "Turn the approved experience into a responsive and functional digital product.",
                },
              ].map((item) => (

                <div
                  key={item.number}
                  className="flex gap-5 border-t border-slate-200 py-6 last:border-b"
                >

                  <span className="w-7 shrink-0 text-[9px] font-bold tracking-[0.18em] text-slate-300">
                    {item.number}
                  </span>

                  <div>

                    <h3 className="text-sm font-semibold text-[#061525]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-slate-400">
                      {item.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-[#061525]">

        <div className="mx-auto max-w-[1450px] px-6 py-24 lg:px-12">

          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-2xl">

              <div className="flex items-center gap-3">

                <Sparkles
                  size={15}
                  className="text-cyan-300"
                />

                <span className="text-[9px] font-bold uppercase tracking-[0.23em] text-white/30">
                  Start something new
                </span>

              </div>

              <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl">
                Have a project
                <span className="text-white/25">
                  {" "}
                  worth building?
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/35">
                Tell us what you are planning and let&apos;s explore
                how we can turn the idea into a strong digital
                experience.
              </p>

            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#061525] transition-all duration-300 hover:bg-cyan-300"
            >
              Start a conversation

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#061525] text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={14} />
              </span>
            </a>

          </div>

        </div>

      </section>

      {/* =====================================================
          DETAIL MODAL
      ====================================================== */}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#061525]/80 p-5 backdrop-blur-xl"
            onClick={() =>
              setSelectedProject(null)
            }
          >

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 25,
                scale: 0.97,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[26px] bg-white shadow-2xl"
            >

              {/* Close */}
              <button
                type="button"
                onClick={() =>
                  setSelectedProject(null)
                }
                className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#061525] shadow-lg backdrop-blur-md transition-all hover:bg-[#061525] hover:text-white"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-[#061525]">

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display =
                      "none";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061525]/80 to-transparent" />

                <div className="absolute bottom-6 left-6">

                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                    {selectedProject.category}
                  </p>

                  <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white">
                    {selectedProject.title}
                  </h2>

                </div>

              </div>

              {/* Details */}
              <div className="p-7 sm:p-9">

                <div className="flex items-center gap-3">

                  <span className="text-[9px] font-bold tracking-[0.2em] text-slate-300">
                    {selectedProject.number}
                  </span>

                  <span className="h-px w-6 bg-slate-200" />

                  <span className="text-[9px] uppercase tracking-[0.16em] text-slate-400">
                    {selectedProject.subtitle}
                  </span>

                </div>

                <p className="mt-6 text-sm leading-7 text-slate-600">
                  {selectedProject.description}
                </p>

                {/* Tech */}
                <div className="mt-7">

                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Built with
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">

                    {selectedProject.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600"
                        >
                          <Check
                            size={12}
                            className="text-cyan-600"
                          />

                          {technology}
                        </span>
                      )
                    )}

                  </div>

                </div>

                {/* Link */}
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#061525] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#0b243a]"
                >
                  Visit live project

                  <ExternalLink
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </a>

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Project;