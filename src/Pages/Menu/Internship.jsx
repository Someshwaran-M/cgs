import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDownRight,
  Check,
  Code2,
  Palette,
  Database,
  Megaphone,
  GraduationCap,
  Award,
  X,
  Laptop,
  BriefcaseBusiness,
  CircleDollarSign,
  FileCheck2,
  ShieldCheck,
  Sparkles,
  ChevronRight,
} from "lucide-react";

/* =========================================================
   APPLICATION
========================================================= */

const APPLICATION_URL =
  "https://forms.gle/SEuWsvX6fhLXDJbJA";

/* =========================================================
   INTERNSHIP ROLES
========================================================= */

const internshipRoles = [
  {
    number: "01",
    title: "Frontend Development",
    shortTitle: "Frontend",
    icon: Code2,
    description:
      "Build responsive interfaces and contribute to real-world web development projects from concept to implementation.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
    ],
  },
  {
    number: "02",
    title: "UI / UX Design",
    shortTitle: "UI / UX",
    icon: Palette,
    description:
      "Design clean, intuitive digital experiences and contribute to interfaces that balance usability and visual quality.",
    technologies: [
      "Figma",
      "UI Design",
      "UX Research",
      "Prototyping",
    ],
  },
  {
    number: "03",
    title: "Python Development",
    shortTitle: "Python",
    icon: Database,
    description:
      "Work with backend systems, APIs and database-driven applications using Python and modern development practices.",
    technologies: [
      "Python",
      "Django",
      "REST API",
      "MySQL",
    ],
  },
  {
    number: "04",
    title: "Digital Marketing",
    shortTitle: "Marketing",
    icon: Megaphone,
    description:
      "Explore how businesses grow their digital presence through content, SEO, social media and performance-focused strategies.",
    technologies: [
      "SEO",
      "Social Media",
      "Content",
      "Analytics",
    ],
  },
];

/* =========================================================
   INTERNSHIP CONDITIONS
========================================================= */

const conditions = [
  {
    number: "01",
    icon: Laptop,
    title: "Remote",
    label: "Work format",
    description:
      "The internship is currently offered remotely. Candidates can participate and complete assigned work from their location.",
  },
  {
    number: "02",
    icon: CircleDollarSign,
    title: "Unpaid",
    label: "Compensation",
    description:
      "This is currently an unpaid internship program. No stipend or salary is provided during the internship period.",
  },
  {
    number: "03",
    icon: BriefcaseBusiness,
    title: "Project Based",
    label: "Work model",
    description:
      "Interns work on practical tasks and project-related activities designed to provide hands-on experience.",
  },
  {
    number: "04",
    icon: FileCheck2,
    title: "Certificate",
    label: "Completion",
    description:
      "A project completion certificate is provided after successful completion of the assigned internship requirements.",
  },
];

/* =========================================================
   PROCESS
========================================================= */

const process = [
  {
    number: "01",
    title: "Apply",
    description:
      "Submit your details and choose the internship track that matches your interests.",
  },
  {
    number: "02",
    title: "Screening",
    description:
      "Our team reviews your application, background, skills and area of interest.",
  },
  {
    number: "03",
    title: "Learn & Build",
    description:
      "Work remotely on practical tasks and project requirements related to your selected track.",
  },
  {
    number: "04",
    title: "Complete",
    description:
      "Complete the assigned internship requirements and receive your project completion certificate.",
  },
];

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  "Practical project exposure",
  "Industry-oriented learning",
  "Technical guidance",
  "Hands-on development experience",
  "Portfolio-ready project work",
  "Project completion certificate",
];

/* =========================================================
   ELIGIBILITY
========================================================= */

const eligibility = [
  "Students and recent graduates",
  "Aspiring developers, designers and digital marketers",
  "Candidates looking for practical project experience",
  "Learners with basic knowledge of their chosen track",
  "Candidates willing to learn and complete assigned work",
  "Candidates comfortable with remote work",
];

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

const Internship = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [activeCondition, setActiveCondition] = useState(0);

  /* =======================================================
     LOCK BODY SCROLL WHEN MODAL IS OPEN
  ======================================================= */

  useEffect(() => {
    document.body.style.overflow = selectedRole
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedRole]);

  /* =======================================================
     ESCAPE MODAL
  ======================================================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedRole(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-white text-[#061525]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-white">

        {/* =================================================
            FULL BACKGROUND IMAGE
        ================================================== */}

        <div className="absolute inset-0">

          <img
            src="/internship-hero.png"
            alt=""
            className="h-full w-full object-cover"
          />

        </div>

        {/* =================================================
            VERY LIGHT WHITE GRADIENT FOR TEXT READABILITY

            This is intentionally subtle. The image itself
            remains the main visual.
        ================================================== */}

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/5" />

        {/* Mobile readability */}
        <div className="absolute inset-0 bg-white/20 lg:hidden" />

        {/* =================================================
            HERO CONTENT
        ================================================== */}

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-[1500px] items-center px-6 py-24 lg:px-10">

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >

            {/* Label */}
            <motion.div
              variants={fadeUp}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/90 px-4 py-2.5 shadow-sm backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                CodeGenZ Internship Program
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-[#061525] sm:text-6xl lg:text-[82px]"
            >
              Learn.
              <br />

              <span className="text-slate-400">
                Build.
              </span>{" "}
              Grow.
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
            >
              Build practical skills through real project experience
              and industry-oriented learning with CodeGenZ Solutions.
            </motion.p>

            {/* Conditions */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-2"
            >
              {[
                {
                  icon: Laptop,
                  text: "Remote",
                },
                {
                  icon: CircleDollarSign,
                  text: "Unpaid",
                },
                {
                  icon: BriefcaseBusiness,
                  text: "Project Based",
                },
                {
                  icon: Award,
                  text: "Certificate",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <span
                    key={item.text}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3.5 py-2 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-md"
                  >
                    <Icon
                      size={14}
                      className="text-cyan-600"
                      strokeWidth={1.8}
                    />

                    {item.text}
                  </span>
                );
              })}
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-3"
            >

              <a
                href={APPLICATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-[#061525] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-900/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B243A]"
              >
                Apply for Internship

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#061525] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>
              </a>

              <a
                href="#tracks"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-6 py-3.5 text-sm font-semibold text-slate-600 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-[#061525] hover:text-[#061525]"
              >
                Explore Tracks

                <ArrowDownRight size={15} />
              </a>

            </motion.div>

            {/* Notice */}
            <motion.div
              variants={fadeUp}
              className="mt-8 max-w-xl border-l-2 border-cyan-500/40 pl-4"
            >

              <div className="flex items-start gap-3">

                <ShieldCheck
                  size={17}
                  className="mt-0.5 shrink-0 text-cyan-600"
                />

                <p className="text-xs leading-6 text-slate-500">
                  This is a remote, unpaid internship. No stipend or
                  salary is provided. A completion certificate is
                  provided after successful completion of the assigned
                  internship requirements.
                </p>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          PROGRAM SUMMARY
      ====================================================== */}

      <section className="border-y border-slate-200 bg-white">

        <div className="mx-auto grid max-w-[1500px] divide-y divide-slate-200 px-6 sm:grid-cols-4 sm:divide-x sm:divide-y-0 lg:px-10">

          {[
            {
              icon: Laptop,
              label: "Format",
              value: "Remote",
            },
            {
              icon: CircleDollarSign,
              label: "Compensation",
              value: "Unpaid",
            },
            {
              icon: BriefcaseBusiness,
              label: "Work Model",
              value: "Project Based",
            },
            {
              icon: Award,
              label: "Recognition",
              value: "Certificate",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex items-center gap-4 px-0 py-7 sm:px-7"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-[#061525]">
                  <Icon
                    size={19}
                    strokeWidth={1.7}
                  />
                </div>

                <div>

                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {item.label}
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#061525]">
                    {item.value}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="relative bg-white">

        <div className="mx-auto max-w-[1500px] px-6 py-32 lg:px-10">

          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
                01 / The Program
              </p>

            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
            >

              <h2 className="max-w-5xl text-3xl font-semibold leading-[1.15] tracking-[-0.04em] text-[#061525] sm:text-5xl">

                Not just a certificate.

                <span className="text-slate-300">
                  {" "}
                  Build practical experience that supports your
                  next career step.
                </span>

              </h2>

              <p className="mt-8 max-w-3xl text-base leading-8 text-slate-500">
                CodeGenZ's internship program is designed around
                practical learning. Interns work on assigned tasks,
                explore their chosen track and build experience that
                can support their portfolio and career development.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CONDITIONS
      ====================================================== */}

      <section className="border-y border-slate-200 bg-[#F8FAFC]">

        <div className="mx-auto max-w-[1500px] px-6 py-28 lg:px-10">

          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
                02 / Important Conditions
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#061525] sm:text-5xl">
                Know before you apply.
              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500">
              We want every applicant to clearly understand the
              internship format and requirements before applying.
            </p>

          </div>

          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">

            {/* Navigation */}
            <div className="space-y-2">

              {conditions.map((condition, index) => {
                const Icon = condition.icon;
                const active =
                  activeCondition === index;

                return (
                  <button
                    key={condition.title}
                    type="button"
                    onClick={() =>
                      setActiveCondition(index)
                    }
                    className={`group flex w-full items-center justify-between rounded-2xl border p-5 text-left transition-all duration-300 ${
                      active
                        ? "border-[#061525] bg-[#061525] text-white shadow-xl shadow-slate-900/10"
                        : "border-slate-200 bg-white text-[#061525] hover:border-slate-300"
                    }`}
                  >

                    <div className="flex items-center gap-4">

                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                          active
                            ? "bg-white/10 text-cyan-300"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <Icon size={19} />
                      </div>

                      <div>

                        <p
                          className={`text-[9px] uppercase tracking-[0.18em] ${
                            active
                              ? "text-white/40"
                              : "text-slate-400"
                          }`}
                        >
                          {condition.label}
                        </p>

                        <p
                          className={`mt-1 text-sm font-semibold ${
                            active
                              ? "text-white"
                              : "text-[#061525]"
                          }`}
                        >
                          {condition.title}
                        </p>

                      </div>

                    </div>

                    <ChevronRight
                      size={17}
                      className={`transition-transform ${
                        active
                          ? "translate-x-1 text-cyan-300"
                          : "text-slate-300"
                      }`}
                    />

                  </button>
                );
              })}

            </div>

            {/* Details */}
            <div className="relative min-h-[350px] overflow-hidden rounded-[28px] bg-[#061525] p-8 text-white sm:p-12">

              <AnimatePresence mode="wait">

                <motion.div
                  key={activeCondition}
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
                    duration: 0.35,
                  }}
                  className="relative z-10 flex h-full flex-col justify-between"
                >

                  <div>

                    <div className="flex items-center justify-between">

                      <span className="text-[11px] font-semibold tracking-[0.2em] text-cyan-300">
                        {conditions[activeCondition].number}
                      </span>

                      <Sparkles
                        size={18}
                        className="text-white/20"
                      />

                    </div>

                    <div className="mt-12">

                      <h3 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                        {conditions[activeCondition].title}
                      </h3>

                      <p className="mt-6 max-w-2xl text-base leading-8 text-white/45">
                        {conditions[activeCondition].description}
                      </p>

                    </div>

                  </div>

                  <div className="mt-12 flex items-center gap-3 text-xs text-white/30">

                    <ShieldCheck
                      size={16}
                      className="text-cyan-300"
                    />

                    Clear program expectations

                  </div>

                </motion.div>

              </AnimatePresence>

              <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full border border-cyan-400/10" />

              <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-cyan-400/5 blur-3xl" />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INTERNSHIP TRACKS
      ====================================================== */}

      <section
        id="tracks"
        className="bg-white"
      >

        <div className="mx-auto max-w-[1500px] px-6 py-32 lg:px-10">

          <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
                03 / Internship Tracks
              </p>

              <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.04em] text-[#061525] sm:text-5xl">
                Choose the skill you want to sharpen.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-slate-500">
                Select a track that aligns with your interests and
                career direction.
              </p>

            </div>

            <div className="space-y-3">

              {internshipRoles.map((role, index) => {
                const Icon = role.icon;

                return (
                  <motion.button
                    key={role.title}
                    type="button"
                    onClick={() =>
                      setSelectedRole(role)
                    }
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.07,
                    }}
                    className="group flex w-full items-center gap-5 rounded-[22px] border border-slate-200 bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#061525] hover:shadow-xl sm:p-6"
                  >

                    <span className="hidden w-10 text-[10px] font-semibold tracking-[0.2em] text-slate-300 sm:block">
                      {role.number}
                    </span>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 transition-all duration-300 group-hover:bg-[#061525] group-hover:text-white">
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0 flex-1">

                      <div className="flex flex-wrap items-center gap-3">

                        <h3 className="text-lg font-semibold text-[#061525]">
                          {role.title}
                        </h3>

                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[9px] uppercase tracking-[0.15em] text-slate-400">
                          {role.shortTitle}
                        </span>

                      </div>

                      <p className="mt-2 hidden max-w-xl text-sm leading-6 text-slate-500 sm:block">
                        {role.description}
                      </p>

                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-[#061525] group-hover:bg-[#061525] group-hover:text-white">

                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:rotate-45"
                      />

                    </div>

                  </motion.button>
                );
              })}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BENEFITS
      ====================================================== */}

      <section className="bg-[#061525] text-white">

        <div className="mx-auto max-w-[1500px] px-6 py-28 lg:px-10">

          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">
                04 / What You Gain
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Experience that moves with you.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
                Develop practical skills and create experience that
                can support your future career opportunities.
              </p>

            </div>

            <div className="grid gap-x-10 sm:grid-cols-2">

              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className="flex gap-4 border-b border-white/10 py-6"
                >

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-300">
                    <Check size={14} />
                  </span>

                  <span className="text-sm leading-6 text-white/55">
                    {benefit}
                  </span>

                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-[1500px] px-6 py-32 lg:px-10">

          <div className="mb-16">

            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
              05 / The Journey
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#061525] sm:text-5xl">
              Four steps. One experience.
            </h2>

          </div>

          <div className="relative">

            <div className="absolute left-[9px] top-4 hidden h-[calc(100%-32px)] w-px bg-gradient-to-b from-cyan-400 via-slate-200 to-transparent lg:block" />

            <div className="grid gap-10 lg:grid-cols-4 lg:gap-0">

              {process.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="relative lg:pr-10"
                >

                  <div className="flex items-center gap-4">

                    <span className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full border border-cyan-500/30 bg-white">

                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />

                    </span>

                    <span className="text-[10px] font-semibold tracking-[0.2em] text-slate-300">
                      {item.number}
                    </span>

                  </div>

                  <h3 className="mt-7 text-xl font-semibold text-[#061525]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>

                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          ELIGIBILITY
      ====================================================== */}

      <section className="border-y border-slate-200 bg-[#F8FAFC]">

        <div className="mx-auto grid max-w-[1500px] gap-16 px-6 py-28 lg:grid-cols-[0.75fr_1.25fr] lg:px-10">

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
              06 / Eligibility
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#061525] sm:text-5xl">
              Is this for you?
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-500">
              The program is intended for people who are ready to
              learn, contribute and complete practical work remotely.
            </p>

          </div>

          <div className="grid gap-3 sm:grid-cols-2">

            {eligibility.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >

                <div className="flex gap-3">

                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-600">
                    <Check size={13} />
                  </span>

                  <p className="text-sm leading-6 text-slate-600">
                    {item}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-white px-6 py-32 lg:px-10">

        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[36px] bg-[#061525] px-7 py-16 text-center sm:px-12 lg:py-24">

          {/* Background glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="relative z-10">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
              <GraduationCap size={25} />
            </div>

            <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">
              Start Your Journey
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-6xl">
              Ready to build
              <span className="text-white/30">
                {" "}
                something real?
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
              Choose your preferred internship track and submit
              your application to begin the screening process.
            </p>

            {/* Conditions */}
            <div className="mx-auto mt-9 grid max-w-3xl gap-2 sm:grid-cols-2">

              {[
                "Remote internship",
                "Unpaid — no stipend or salary",
                "Project-based practical work",
                "Certificate after successful completion",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left"
                >

                  <Check
                    size={14}
                    className="shrink-0 text-cyan-300"
                  />

                  <span className="text-xs text-white/50">
                    {item}
                  </span>

                </div>
              ))}

            </div>

            <a
              href={APPLICATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#061525] transition-all duration-300 hover:bg-cyan-300"
            >
              Apply for Internship

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#061525] text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={15} />
              </span>
            </a>

          </div>

        </div>

      </section>

      {/* =====================================================
          ROLE MODAL
      ====================================================== */}

      <AnimatePresence>
        {selectedRole && (
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-5 backdrop-blur-xl"
            onClick={() => setSelectedRole(null)}
          >

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 25,
                scale: 0.96,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[30px] bg-[#0A1421] p-7 text-white shadow-2xl sm:p-10"
            >

              {/* Close */}
              <button
                type="button"
                onClick={() => setSelectedRole(null)}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/40 transition-all hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {/* Header */}
              <div className="pr-12">

                <div className="flex items-center gap-3">

                  <span className="text-[10px] font-semibold tracking-[0.2em] text-cyan-300">
                    TRACK {selectedRole.number}
                  </span>

                  <span className="h-px w-8 bg-white/10" />

                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/25">
                    Internship
                  </span>

                </div>

                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  {selectedRole.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/40">
                  {selectedRole.description}
                </p>

              </div>

              {/* Skills */}
              <div className="mt-9">

                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
                  Technologies / Skills
                </p>

                <div className="mt-4 flex flex-wrap gap-2">

                  {selectedRole.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs text-white/50"
                      >
                        {technology}
                      </span>
                    )
                  )}

                </div>

              </div>

              {/* Conditions */}
              <div className="mt-9 rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.035] p-5">

                <div className="flex items-center gap-3">

                  <ShieldCheck
                    size={18}
                    className="text-cyan-300"
                  />

                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                    Internship Conditions
                  </p>

                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">

                  {[
                    {
                      icon: Laptop,
                      text: "Remote internship",
                    },
                    {
                      icon: CircleDollarSign,
                      text: "Unpaid — no stipend or salary",
                    },
                    {
                      icon: BriefcaseBusiness,
                      text: "Project-based practical work",
                    },
                    {
                      icon: Award,
                      text: "Certificate after successful completion",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.text}
                        className="flex items-center gap-3 text-xs text-white/45"
                      >

                        <Icon
                          size={15}
                          className="shrink-0 text-cyan-300/70"
                        />

                        {item.text}

                      </div>
                    );
                  })}

                </div>

              </div>

              {/* Apply */}
              <a
                href={APPLICATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 flex w-full items-center justify-between rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-[#061525] transition-all hover:bg-cyan-300"
              >

                Apply for this track

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#061525] text-white transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>

              </a>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Internship;