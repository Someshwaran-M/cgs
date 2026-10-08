import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Target,
  Rocket,
  Flag,
  Code2,
  Globe2,
  Lightbulb,
  Check,
  Layers3,
  Users,
  Sparkles,
} from "lucide-react";

const About = () => {
  const vmg = [
    {
      number: "01",
      icon: Target,
      title: "Our Vision",
      text: "To become a globally trusted technology partner, known for crafting digital experiences that are simple, reliable, and built to last.",
    },
    {
      number: "02",
      icon: Rocket,
      title: "Our Mission",
      text: "To empower businesses and individuals with well-structured, scalable solutions — delivered with clarity, precision, and genuine care for every client's needs.",
    },
    {
      number: "03",
      icon: Flag,
      title: "Our Goal",
      text: "To consistently deliver high-quality, future-ready products while building long-term relationships founded on trust, transparency, and results.",
    },
  ];

  const services = [
    "Website Designing & Development",
    "UI / UX Design",
    "Social Media Marketing",
    "Content Marketing",
    "SEO Optimization",
    "Graphic Designing",
  ];

  const strengths = [
    "Clear and transparent communication",
    "Scalable and future-ready solutions",
    "Modern and user-focused experiences",
    "Quality-driven development process",
    "Long-term technology partnership",
  ];

  const journey = [
    {
      year: "01",
      title: "Understand",
      text: "We begin by understanding your business, audience, challenges and objectives.",
    },
    {
      year: "02",
      title: "Shape",
      text: "Ideas are transformed into a clear digital direction with purpose and structure.",
    },
    {
      year: "03",
      title: "Build",
      text: "Design and technology come together to create reliable digital experiences.",
    },
    {
      year: "04",
      title: "Grow",
      text: "We continue refining the product so it can evolve with your business.",
    },
  ];

  return (
    <motion.main
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="w-full overflow-hidden bg-white font-['Roboto',sans-serif] text-[#0B243D]"
    >
      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative min-h-[720px] overflow-hidden bg-[#061525] sm:min-h-[760px] lg:min-h-[820px]">

        {/* Huge background word */}
        <div className="pointer-events-none absolute -right-8 bottom-[-40px] select-none text-[180px] font-bold leading-none tracking-[-0.1em] text-white/[0.025] sm:text-[260px] lg:text-[420px]">
          ABOUT
        </div>

        {/* Side accent */}
        <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block">
          <div className="flex flex-col items-center gap-5">
            <span className="h-24 w-px bg-gradient-to-b from-transparent via-[#579FFF] to-transparent" />

            <span className="text-[8px] tracking-[0.35em] text-white/25 [writing-mode:vertical-rl]">
              CODEGENZ SOLUTIONS
            </span>

            <span className="h-24 w-px bg-gradient-to-b from-[#579FFF] via-white/10 to-transparent" />
          </div>
        </div>

        {/* Blue atmospheric light */}
        <div className="pointer-events-none absolute -left-40 bottom-[-180px] h-[500px] w-[500px] rounded-full bg-[#1769C2]/10 blur-[130px]" />

        <div className="pointer-events-none absolute right-[-160px] top-[-160px] h-[500px] w-[500px] rounded-full bg-[#1769C2]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto flex min-h-[720px] w-full max-w-[1600px] items-end px-6 pb-20 pt-36 sm:min-h-[760px] sm:px-8 sm:pb-24 lg:min-h-[820px] lg:px-12 lg:pb-28">

          <div className="grid w-full gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-12 bg-[#579FFF]" />

                <span className="text-[9px] font-semibold tracking-[0.35em] text-[#6EAEFF]">
                  CODEGENZ SOLUTIONS
                </span>
              </div>

              <h1 className="max-w-[1000px] text-[clamp(4rem,8vw,8.8rem)] font-medium leading-[0.83] tracking-[-0.075em] text-white">
                More than
                <br />

                <span className="text-white/30">
                  technology.
                </span>
              </h1>

              <div className="mt-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#579FFF]" />

                <span className="text-[clamp(1.8rem,3vw,3.5rem)] font-light tracking-[-0.05em] text-[#579FFF]">
                  We create impact.
                </span>
              </div>

            </motion.div>

            {/* Hero information */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="lg:pb-2"
            >

              <p className="max-w-[500px] text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                Technology has changed the way people live, work and connect.
                We believe great digital products should make that experience
                simpler, clearer and more meaningful.
              </p>

              <div className="mt-8 flex items-center gap-4">

                <a
                  href="#story"
                  className="group inline-flex items-center gap-4 rounded-full bg-white px-6 py-3.5 text-[9px] font-semibold tracking-[0.2em] text-[#061525] transition-all duration-300 hover:-translate-y-1"
                >
                  OUR STORY

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#061525] text-white transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={13} />
                  </span>
                </a>

                <a
                  href="/contact?quote=true"
                  className="text-[9px] font-semibold tracking-[0.2em] text-white/45 transition-colors duration-300 hover:text-white"
                >
                  START A PROJECT
                </a>

              </div>

            </motion.div>

          </div>
        </div>

        {/* Bottom information strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10">

          <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 sm:px-8 lg:px-12">

            <span className="text-[8px] font-semibold tracking-[0.3em] text-white/25">
              ABOUT COMPANY
            </span>

            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/15" />

              <span className="text-[8px] tracking-[0.25em] text-[#579FFF]">
                01 — 04
              </span>
            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          COMPANY STORY
      ========================================================== */}

      <section
        id="story"
        className="bg-white py-24 sm:py-28 lg:py-36"
      >
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12">

          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-28">

            {/* Label column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <div className="sticky top-32">

                <span className="text-[9px] font-semibold tracking-[0.3em] text-[#1769C2]">
                  WHO WE ARE
                </span>

                <div className="mt-5 h-px w-16 bg-[#1769C2]" />

                <p className="mt-5 max-w-[250px] text-xs leading-6 text-[#8A9AAC]">
                  A technology partner focused on creating practical,
                  scalable and meaningful digital experiences.
                </p>

              </div>

            </motion.div>

            {/* Story */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <h2 className="max-w-[900px] text-[clamp(2.8rem,5.5vw,6.3rem)] font-medium leading-[0.9] tracking-[-0.07em] text-[#0B243D]">
                Technology that creates
                <span className="text-[#1769C2]">
                  {" "}meaningful impact.
                </span>
              </h2>

              <div className="mt-12 grid gap-8 border-t border-[#E2E9F0] pt-10 md:grid-cols-2">

                <p className="text-sm leading-8 text-[#60758A]">
                  Technology has revolutionized the way humans live, work, and
                  interact. From communication to healthcare, transportation,
                  and entertainment, technological advancements have
                  significantly improved efficiency and convenience.
                </p>

                <p className="text-sm leading-8 text-[#60758A]">
                  Advanced digital solutions continue to transform businesses
                  and create new opportunities. At CodeGenZ Solutions, we focus
                  on creating practical and scalable technology experiences
                  that help businesses move forward.
                </p>

              </div>

              {/* Mini metrics */}
              <div className="mt-14 grid grid-cols-2 border-y border-[#E2E9F0] sm:grid-cols-4">

                {[
                  ["01", "IDEAS"],
                  ["02", "DESIGN"],
                  ["03", "TECH"],
                  ["04", "GROWTH"],
                ].map(([number, label]) => (
                  <div
                    key={number}
                    className="border-r border-[#E2E9F0] px-4 py-6 first:pl-0 last:border-r-0 sm:px-6"
                  >
                    <span className="text-2xl font-medium tracking-[-0.05em] text-[#1769C2]">
                      {number}
                    </span>

                    <p className="mt-2 text-[8px] font-semibold tracking-[0.2em] text-[#8A9AAC]">
                      {label}
                    </p>
                  </div>
                ))}

              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================
          THE CODEGENZ WAY
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#F4F7FA] py-24 sm:py-28 lg:py-36">

        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12">

          <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <span className="text-[9px] font-semibold tracking-[0.3em] text-[#1769C2]">
                THE CODEGENZ WAY
              </span>

              <h2 className="mt-5 max-w-[550px] text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.065em] text-[#0B243D]">
                Think clearly.
                <br />

                <span className="text-[#1769C2]">
                  Build better.
                </span>
              </h2>

              <p className="mt-7 max-w-[470px] text-sm leading-7 text-[#718398]">
                We combine creative thinking with technical execution to
                transform ideas into digital experiences that are useful,
                scalable and built with intention.
              </p>

            </motion.div>

            {/* Right principles */}
            <div>

              {[
                {
                  number: "01",
                  title: "Clarity",
                  text: "We believe good technology begins with understanding. Clear communication keeps every decision purposeful.",
                },
                {
                  number: "02",
                  title: "Craft",
                  text: "We pay attention to the details that shape the experience, from interface interactions to technical architecture.",
                },
                {
                  number: "03",
                  title: "Reliability",
                  text: "We build solutions that are structured, maintainable and ready to evolve as your needs change.",
                },
                {
                  number: "04",
                  title: "Partnership",
                  text: "We work alongside our clients rather than simply delivering a project and walking away.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="group border-t border-[#D8E2EA] py-7 sm:py-8"
                >

                  <div className="grid gap-4 sm:grid-cols-[70px_180px_1fr] sm:items-start">

                    <span className="text-[9px] font-semibold tracking-[0.2em] text-[#1769C2]">
                      {item.number}
                    </span>

                    <h3 className="text-xl font-medium tracking-[-0.03em] text-[#0B243D] transition-colors duration-300 group-hover:text-[#1769C2]">
                      {item.title}
                    </h3>

                    <p className="max-w-[500px] text-xs leading-6 text-[#718398]">
                      {item.text}
                    </p>

                  </div>

                </motion.div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          VISION / MISSION / GOAL
      ========================================================== */}

      <section className="bg-[#061525] py-24 sm:py-28 lg:py-36">

        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-[850px]"
          >

            <span className="text-[9px] font-semibold tracking-[0.32em] text-[#579FFF]">
              OUR PURPOSE
            </span>

            <h2 className="mt-5 text-[clamp(2.8rem,5vw,5.8rem)] font-medium leading-[0.9] tracking-[-0.065em] text-white">
              What keeps us
              <br />

              <span className="text-white/30">
                moving forward.
              </span>
            </h2>

          </motion.div>

          {/* Purpose list */}
          <div className="mt-16 border-t border-white/10">

            {vmg.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group border-b border-white/10 py-8 sm:py-10 lg:py-12"
                >

                  <div className="grid gap-7 lg:grid-cols-[80px_100px_280px_1fr_50px] lg:items-center">

                    {/* Number */}
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-[#579FFF]">
                      {item.number}
                    </span>

                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-[#579FFF] transition-all duration-300 group-hover:border-[#579FFF]/30 group-hover:bg-[#1769C2] group-hover:text-white">
                      <Icon size={20} strokeWidth={1.4} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-medium tracking-[-0.03em] text-white sm:text-2xl">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="max-w-[600px] text-xs leading-7 text-white/40 sm:text-sm">
                      {item.text}
                    </p>

                    {/* Arrow */}
                    <ArrowUpRight
                      size={18}
                      className="hidden text-[#579FFF] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 lg:block"
                    />

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =========================================================
          JOURNEY
      ========================================================== */}

      <section className="bg-white py-24 sm:py-28 lg:py-36">

        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12">

          <div className="grid gap-14 lg:grid-cols-[0.6fr_1.4fr] lg:gap-24">

            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <span className="text-[9px] font-semibold tracking-[0.3em] text-[#1769C2]">
                OUR JOURNEY
              </span>

              <h2 className="mt-5 text-[clamp(2.7rem,4.5vw,5rem)] font-medium leading-[0.92] tracking-[-0.06em] text-[#0B243D]">
                From thought
                <br />

                <span className="text-[#1769C2]">
                  to reality.
                </span>
              </h2>

              <p className="mt-7 max-w-[380px] text-sm leading-7 text-[#718398]">
                Every project moves through a clear process designed to keep
                ideas focused and execution purposeful.
              </p>

            </motion.div>

            {/* Journey timeline */}
            <div className="relative">

              {/* Vertical line */}
              <div className="absolute bottom-0 left-[17px] top-0 hidden w-px bg-[#DCE5ED] sm:block" />

              <div className="space-y-0">

                {journey.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.1,
                    }}
                    className="group relative border-t border-[#DCE5ED] py-8 sm:pl-16 sm:py-10"
                  >

                    {/* Timeline point */}
                    <span className="absolute left-[10px] top-[43px] hidden h-4 w-4 rounded-full border-4 border-white bg-[#1769C2] shadow-[0_0_0_1px_#1769C2] sm:block" />

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">

                      <span className="text-[9px] font-semibold tracking-[0.2em] text-[#1769C2]">
                        {item.year}
                      </span>

                      <div className="flex-1">

                        <h3 className="text-xl font-medium tracking-[-0.03em] text-[#0B243D] transition-colors duration-300 group-hover:text-[#1769C2] sm:text-2xl">
                          {item.title}
                        </h3>

                        <p className="mt-3 max-w-[560px] text-xs leading-7 text-[#718398] sm:text-sm">
                          {item.text}
                        </p>

                      </div>

                      <ArrowRight
                        size={17}
                        className="text-[#AAB8C4] transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#1769C2]"
                      />

                    </div>

                  </motion.div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          WHAT WE DO
      ========================================================== */}

      <section className="bg-[#F4F7FA] py-24 sm:py-28 lg:py-36">

        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12">

          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <span className="text-[9px] font-semibold tracking-[0.3em] text-[#1769C2]">
                WHAT WE DO
              </span>

              <h2 className="mt-5 text-[clamp(2.7rem,4.5vw,5rem)] font-medium leading-[0.92] tracking-[-0.06em] text-[#0B243D]">
                Capabilities
                <br />

                <span className="text-[#8A9AAC]">
                  that connect.
                </span>
              </h2>

            </motion.div>

            {/* Service list */}
            <div className="border-t border-[#DCE5ED]">

              {services.map((service, index) => (
                <motion.a
                  key={service}
                  href="/services"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className="group flex items-center justify-between gap-5 border-b border-[#DCE5ED] py-6 sm:py-7"
                >

                  <div className="flex items-center gap-5 sm:gap-8">

                    <span className="text-[9px] font-semibold tracking-[0.15em] text-[#A0AFBD]">
                      0{index + 1}
                    </span>

                    <span className="text-base font-medium tracking-[-0.02em] text-[#203B58] transition-colors duration-300 group-hover:text-[#1769C2] sm:text-lg">
                      {service}
                    </span>

                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D4DFE8] text-[#8A9AAC] transition-all duration-300 group-hover:border-[#1769C2] group-hover:bg-[#1769C2] group-hover:text-white">
                    <ArrowUpRight size={13} />
                  </span>

                </motion.a>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CODEGENZ
      ========================================================== */}

      <section className="bg-[#061525] py-24 sm:py-28 lg:py-36">

        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12">

          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-28">

            {/* Main statement */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <span className="text-[9px] font-semibold tracking-[0.3em] text-[#579FFF]">
                WHY CODEGENZ
              </span>

              <h2 className="mt-5 max-w-[650px] text-[clamp(3rem,5vw,6rem)] font-medium leading-[0.88] tracking-[-0.07em] text-white">
                Technology
                <br />

                <span className="text-white/30">
                  with purpose.
                </span>
              </h2>

              <p className="mt-8 max-w-[580px] text-sm leading-8 text-white/40 sm:text-base">
                We combine technical expertise with a genuine understanding of
                business goals, ensuring every solution we deliver adds real
                value — not just visual appeal.
              </p>

              <div className="mt-10 flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1769C2] text-white">
                  <Code2 size={20} strokeWidth={1.4} />
                </div>

                <div>
                  <p className="text-[9px] font-semibold tracking-[0.18em] text-white">
                    DIGITAL PARTNER
                  </p>

                  <p className="mt-1 text-[9px] text-white/30">
                    From idea to growth
                  </p>
                </div>

              </div>

            </motion.div>

            {/* Strengths */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <div className="border-t border-white/10">

                {strengths.map((item, index) => (
                  <div
                    key={item}
                    className="group flex items-center gap-5 border-b border-white/10 py-6 sm:py-7"
                  >

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#579FFF]/30 text-[#579FFF]">
                      <Check size={11} />
                    </span>

                    <span className="text-sm tracking-[0.01em] text-white/60 transition-colors duration-300 group-hover:text-white">
                      {item}
                    </span>

                    <span className="ml-auto text-[8px] tracking-[0.15em] text-white/20">
                      0{index + 1}
                    </span>

                  </div>
                ))}

              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}

      <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36">

        {/* Decorative typography */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[150px] font-bold tracking-[-0.1em] text-[#061525]/[0.025] sm:text-[240px] lg:text-[360px]">
          CREATE
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-[950px] text-center"
          >

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#061525] text-white shadow-[0_15px_40px_rgba(6,21,37,0.15)] sm:h-16 sm:w-16">
              <Sparkles size={23} strokeWidth={1.3} />
            </div>

            <span className="mt-7 block text-[9px] font-semibold tracking-[0.3em] text-[#1769C2]">
              LET'S BUILD SOMETHING
            </span>

            <h2 className="mt-5 text-[clamp(3rem,5.5vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.07em] text-[#0B243D]">
              Have an idea?
              <br />

              <span className="text-[#1769C2]">
                Let's make it real.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-[600px] text-sm leading-7 text-[#718398] sm:text-base">
              Tell us about your project and let's create a digital solution
              built around your goals.
            </p>

            <a
              href="/contact?quote=true"
              className="group mt-9 inline-flex items-center gap-4 rounded-full bg-[#1769C2] px-7 py-4 text-[9px] font-semibold tracking-[0.2em] text-white shadow-[0_15px_35px_rgba(23,105,194,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F559F]"
            >
              START A PROJECT

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={13} />
              </span>
            </a>

          </motion.div>

        </div>
      </section>

    </motion.main>
  );
};

export default About;