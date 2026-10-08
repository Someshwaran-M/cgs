import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDownRight,
  BriefcaseBusiness,
  MapPin,
  Clock3,
  Users,
  Code2,
  Palette,
  Database,
  Megaphone,
  Check,
  Mail,
  FileText,
  Send,
  Sparkles,
  ShieldCheck,
  Target,
  Lightbulb,
  HeartHandshake,
  Layers3,
} from "lucide-react";

/* =========================================================
   CAREER EMAIL
========================================================= */

const CAREER_EMAIL = "codegenz2026@gmail.com";

/* =========================================================
   FUTURE HIRING AREAS
========================================================= */

const futureRoles = [
  {
    id: 1,
    number: "01",
    title: "Frontend Development",
    department: "Development",
    icon: Code2,
    description:
      "Future opportunities may involve building responsive, modern web interfaces and contributing to production-ready digital products.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Git",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Full Stack Python Development",
    department: "Development",
    icon: Database,
    description:
      "Future roles may involve developing web applications, APIs, backend systems and database-driven solutions.",
    skills: [
      "Python",
      "Django",
      "REST API",
      "React",
      "MySQL",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "UI / UX Design",
    department: "Design",
    icon: Palette,
    description:
      "Future design opportunities may focus on thoughtful interfaces, visual systems and user-centered digital experiences.",
    skills: [
      "Figma",
      "UI Design",
      "UX",
      "Wireframes",
      "Prototyping",
    ],
  },
  {
    id: 4,
    number: "04",
    title: "Digital Marketing",
    department: "Marketing",
    icon: Megaphone,
    description:
      "Future marketing opportunities may support digital visibility through content, SEO, social media and campaign activities.",
    skills: [
      "SEO",
      "Social Media",
      "Content",
      "Analytics",
    ],
  },
];

/* =========================================================
   COMPANY VALUES
========================================================= */

const values = [
  {
    number: "01",
    icon: Target,
    title: "Build with purpose",
    description:
      "We focus on creating digital solutions that solve real problems and create meaningful value.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Keep learning",
    description:
      "Technology changes quickly, so we encourage continuous learning, experimentation and improvement.",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Work together",
    description:
      "Strong products are built through communication, collaboration and shared ownership.",
  },
  {
    number: "04",
    icon: Layers3,
    title: "Think differently",
    description:
      "We welcome fresh ideas and practical approaches that help create better digital experiences.",
  },
];

/* =========================================================
   CAREER PROCESS
========================================================= */

const careerProcess = [
  {
    number: "01",
    title: "Send your resume",
    description:
      "Email your latest resume and a short introduction to our career email.",
  },
  {
    number: "02",
    title: "Profile review",
    description:
      "Our team reviews your skills, experience and potential fit for future opportunities.",
  },
  {
    number: "03",
    title: "Stay connected",
    description:
      "If a suitable opportunity becomes available, we may contact you with further details.",
  },
];

/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
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
   CAREER COMPONENT
========================================================= */

const Career = () => {
  const resumeSubject = encodeURIComponent(
    "Career Application - CodeGenZ Solutions"
  );

  const mailtoUrl = `mailto:${CAREER_EMAIL}?subject=${resumeSubject}`;

  return (
    <section className="relative overflow-hidden bg-white text-[#061525]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-white">

        {/* Background image */}
        <div className="absolute inset-0">

          <img
            src="/career-hero.png"
            alt=""
            className="h-full w-full object-cover"
          />

        </div>

        {/* White readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10" />

        {/* Additional mobile readability */}
        <div className="absolute inset-0 bg-white/20 lg:hidden" />

        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#061525 1px, transparent 1px), linear-gradient(90deg, #061525 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-[1600px] items-center px-6 py-24 lg:px-12">

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >

            {/* Label */}
            <motion.div
              variants={fadeUp}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/90 px-4 py-2.5 shadow-sm backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">

                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-500 opacity-50" />

                <span className="relative h-2 w-2 rounded-full bg-cyan-500" />

              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                Careers at CodeGenZ
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-[#061525] sm:text-6xl lg:text-[82px]"
            >
              Your next
              <br />

              <span className="text-slate-400">
                opportunity.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
            >
              We are building a technology-focused team around
              meaningful digital products. There are no current open
              positions, but we welcome talented people who would like
              to be considered for future opportunities.
            </motion.p>

            {/* Current status */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex max-w-xl items-start gap-4 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur-md"
            >

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Clock3
                  size={18}
                  strokeWidth={1.8}
                />
              </div>

              <div>

                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Current Hiring Status
                </p>

                <p className="mt-1 text-sm font-semibold text-[#061525]">
                  No open positions at the moment
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  You can still send your resume for future
                  opportunities.
                </p>

              </div>

            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >

              <a
                href={mailtoUrl}
                className="group inline-flex items-center gap-3 rounded-full bg-[#061525] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-900/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B243A]"
              >
                Send Your Resume

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#061525] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>
              </a>

              <a
                href="#future-roles"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-6 py-3.5 text-sm font-semibold text-slate-600 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-[#061525] hover:text-[#061525]"
              >
                Explore Future Areas

                <ArrowDownRight size={15} />
              </a>

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          STATUS BAR
      ====================================================== */}

      <section className="border-y border-slate-200 bg-white">

        <div className="mx-auto grid max-w-[1600px] divide-y divide-slate-200 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-12">

          {/* Status */}
          <div className="flex items-center gap-4 py-7 sm:px-8 sm:first:pl-0">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <Clock3
                size={19}
                strokeWidth={1.7}
              />
            </div>

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Hiring Status
              </p>

              <p className="mt-1 text-sm font-semibold text-[#061525]">
                No Current Openings
              </p>

            </div>

          </div>

          {/* Environment */}
          <div className="flex items-center gap-4 py-7 sm:px-8">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-[#061525]">
              <Users
                size={19}
                strokeWidth={1.7}
              />
            </div>

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Environment
              </p>

              <p className="mt-1 text-sm font-semibold text-[#061525]">
                Collaborative Team
              </p>

            </div>

          </div>

          {/* Application */}
          <div className="flex items-center gap-4 py-7 sm:px-8">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
              <Mail
                size={19}
                strokeWidth={1.7}
              />
            </div>

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                General Applications
              </p>

              <p className="mt-1 text-sm font-semibold text-[#061525]">
                Resume Submission Open
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-[1600px] px-6 py-32 lg:px-12">

          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
                01 / Our Approach
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

                We are not hiring
                <span className="text-slate-300">
                  {" "}
                  for every role today.
                </span>

                <br />

                But we are always interested in
                <span className="text-slate-300">
                  {" "}
                  strong people.
                </span>

              </h2>

              <p className="mt-8 max-w-3xl text-base leading-8 text-slate-500">
                If your skills, mindset and interests align with the
                kind of work we do, send us your resume. We can review
                your profile and keep it in consideration when a
                suitable opportunity becomes available.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
          NO OPENINGS NOTICE
      ====================================================== */}

      <section className="border-y border-slate-200 bg-[#F8FAFC]">

        <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-12">

          <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm sm:p-12">

            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-cyan-100/70 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-3xl">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <BriefcaseBusiness
                      size={20}
                    />
                  </div>

                  <span className="rounded-full bg-amber-50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-amber-700">
                    No Open Positions
                  </span>

                </div>

                <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-[#061525] sm:text-4xl">
                  There are no current vacancies.
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                  We are not currently accepting applications for a
                  specific open position. However, you are welcome to
                  send your resume for future opportunities that may
                  match your profile.
                </p>

              </div>

              <a
                href={mailtoUrl}
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#061525] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B243A]"
              >
                <Mail size={16} />

                Send Resume

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FUTURE HIRING AREAS
      ====================================================== */}

      <section
        id="future-roles"
        className="bg-white"
      >

        <div className="mx-auto max-w-[1600px] px-6 py-32 lg:px-12">

          <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1fr]">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
                02 / Future Hiring Areas
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#061525] sm:text-5xl">
                Areas we may hire for.
              </h2>

            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-500 lg:pt-5">
              These are not current vacancies. They represent areas
              where future opportunities may become available as our
              projects and team requirements grow.
            </p>

          </div>

          {/* Role grid */}
          <div className="grid gap-5 md:grid-cols-2">

            {futureRoles.map((role, index) => {
              const Icon = role.icon;

              return (
                <motion.article
                  key={role.id}
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
                    delay: index * 0.07,
                  }}
                  className="group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl sm:p-9"
                >

                  {/* Top */}
                  <div className="flex items-start justify-between">

                    <span className="text-[10px] font-bold tracking-[0.2em] text-slate-300">
                      {role.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-all duration-300 group-hover:bg-[#061525] group-hover:text-white">
                      <Icon size={19} />
                    </div>

                  </div>

                  {/* Content */}
                  <div className="mt-10">

                    <div className="flex flex-wrap items-center gap-3">

                      <h3 className="text-2xl font-semibold tracking-[-0.025em] text-[#061525]">
                        {role.title}
                      </h3>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">
                        Future
                      </span>

                    </div>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
                      {role.description}
                    </p>

                  </div>

                  {/* Skills */}
                  <div className="mt-7 flex flex-wrap gap-2">

                    {role.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-medium text-slate-500"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                  {/* Bottom */}
                  <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">

                    <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                      Future Opportunity
                    </span>

                    <a
                      href={mailtoUrl}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#061525] text-white transition-transform duration-300 hover:rotate-45"
                      aria-label={`Send resume for ${role.title}`}
                    >
                      <ArrowUpRight size={15} />
                    </a>

                  </div>

                </motion.article>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          RESUME SUBMISSION
      ====================================================== */}

      <section className="border-y border-slate-200 bg-[#061525] text-white">

        <div className="mx-auto max-w-[1600px] px-6 py-28 lg:px-12">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

            {/* Left */}
            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">
                03 / General Application
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl">
                Send your resume.
                <span className="text-white/30">
                  {" "}
                  Stay on our radar.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/40">
                There is no current vacancy, but you can still
                introduce yourself and share your resume for future
                opportunities.
              </p>

              <a
                href={mailtoUrl}
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#061525] transition-all duration-300 hover:bg-cyan-300"
              >
                <Mail size={16} />

                {CAREER_EMAIL}

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </a>

            </div>

            {/* Right */}
            <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-7 sm:p-10">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                  <FileText size={19} />
                </div>

                <div>

                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                    Resume Submission
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white/80">
                    What to send
                  </p>

                </div>

              </div>

              <div className="mt-8 space-y-4">

                {[
                  {
                    icon: FileText,
                    title: "Latest Resume",
                    description:
                      "Attach your latest resume in PDF format.",
                  },
                  {
                    icon: Users,
                    title: "Short Introduction",
                    description:
                      "Briefly introduce yourself and your professional interests.",
                  },
                  {
                    icon: Target,
                    title: "Preferred Area",
                    description:
                      "Mention the role or area you are interested in.",
                  },
                  {
                    icon: MapPin,
                    title: "Location Preference",
                    description:
                      "Mention your preferred work location or remote preference.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 border-b border-white/[0.07] pb-4 last:border-0 last:pb-0"
                    >

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-cyan-300">
                        <Icon size={16} />
                      </div>

                      <div>

                        <p className="text-sm font-semibold text-white/75">
                          {item.title}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-white/30">
                          {item.description}
                        </p>

                      </div>

                    </div>
                  );
                })}

              </div>

              {/* Subject */}
              <div className="mt-8 rounded-2xl border border-white/[0.07] bg-black/10 p-4">

                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/25">
                  Suggested Email Subject
                </p>

                <p className="mt-2 break-all text-sm text-white/60">
                  Career Application - CodeGenZ Solutions
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CAREER PROCESS
      ====================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-[1600px] px-6 py-32 lg:px-12">

          <div className="mb-16">

            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
              04 / What Happens Next
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#061525] sm:text-5xl">
              Simple and transparent.
            </h2>

          </div>

          <div className="relative">

            <div className="absolute left-[10px] top-4 hidden h-[calc(100%-32px)] w-px bg-gradient-to-b from-cyan-400 via-slate-200 to-transparent lg:block" />

            <div className="grid gap-10 lg:grid-cols-3 lg:gap-0">

              {careerProcess.map((item, index) => (
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
                  className="relative lg:pr-12"
                >

                  <div className="flex items-center gap-4">

                    <span className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full border border-cyan-400/40 bg-white">

                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />

                    </span>

                    <span className="text-[10px] font-bold tracking-[0.2em] text-slate-300">
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
          VALUES
      ====================================================== */}

      <section className="border-y border-white/10 bg-[#061525] text-white">

        <div className="mx-auto max-w-[1600px] px-6 py-28 lg:px-12">

          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">
                05 / Life at CodeGenZ
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl">
                Build.
                <br />
                Learn.
                <br />
                Contribute.
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-white/40">
                We believe strong teams are built by people who are
                curious, responsible and willing to learn.
              </p>

            </div>

            <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">

              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <motion.div
                    key={value.number}
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
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="border-b border-white/10 pb-8"
                  >

                    <div className="flex items-center justify-between">

                      <span className="text-[10px] font-bold tracking-[0.2em] text-white/20">
                        {value.number}
                      </span>

                      <Icon
                        size={18}
                        className="text-cyan-300/70"
                        strokeWidth={1.6}
                      />

                    </div>

                    <h3 className="mt-6 text-xl font-semibold">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/35">
                      {value.description}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-white px-6 py-32 lg:px-12">

        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[36px] bg-[#061525] px-7 py-16 text-center sm:px-12 lg:py-24">

          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="relative z-10">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
              <Send size={23} />
            </div>

            <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">
              General Application
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-6xl">
              No opening today.
              <span className="text-white/30">
                {" "}
                Your resume can still reach us.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
              Send your resume and a short introduction to our career
              email. We will review your profile for relevant future
              opportunities.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">

              <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs text-white/45">
                {CAREER_EMAIL}
              </div>

              <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs text-white/45">
                Resume + Introduction
              </div>

            </div>

            <a
              href={mailtoUrl}
              className="group mt-9 inline-flex items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#061525] transition-all duration-300 hover:bg-cyan-300"
            >
              Send Your Resume

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#061525] text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={15} />
              </span>
            </a>

          </div>

        </div>

      </section>

    </section>
  );
};

export default Career;