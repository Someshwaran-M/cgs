import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Compass,
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
  Headphones,
  Sparkles,
  MoveUpRight,
} from "lucide-react";

const PROCESS_BG = "/our-process-bg.jpg";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    eyebrow: "UNDERSTAND",
    statement: "Before we build, we listen.",
    description:
      "We start by understanding your business, your audience, your goals, and the challenge behind the project. This gives every decision that follows a clear purpose.",
    icon: Compass,
    points: [
      "Business requirements",
      "Project objectives",
      "Audience understanding",
      "Scope definition",
    ],
  },
  {
    number: "02",
    title: "Strategy",
    eyebrow: "DIRECTION",
    statement: "Ideas need a direction.",
    description:
      "We transform what we learn into a practical roadmap. We define the structure, functionality, technology, priorities, and experience needed to move forward.",
    icon: Lightbulb,
    points: [
      "Project architecture",
      "Technology planning",
      "Feature priorities",
      "User journey",
    ],
  },
  {
    number: "03",
    title: "Design",
    eyebrow: "EXPERIENCE",
    statement: "We give the idea a personality.",
    description:
      "We create an experience that feels distinctive, intuitive, and aligned with your brand. Every visual decision is designed to serve the user and the business.",
    icon: PenTool,
    points: [
      "UI / UX design",
      "Visual direction",
      "Responsive experience",
      "Interactive prototypes",
    ],
  },
  {
    number: "04",
    title: "Develop",
    eyebrow: "ENGINEERING",
    statement: "Design becomes something real.",
    description:
      "Our developers transform the approved experience into a working digital product using modern technologies, clean architecture, and scalable implementation.",
    icon: Code2,
    points: [
      "Frontend development",
      "Backend development",
      "API integration",
      "Database integration",
    ],
  },
  {
    number: "05",
    title: "Launch",
    eyebrow: "DELIVERY",
    statement: "Ready for the real world.",
    description:
      "We test, refine, optimize, and prepare the product for production. Once everything meets our standards, we take it live.",
    icon: Rocket,
    points: [
      "Quality testing",
      "Performance optimization",
      "Deployment setup",
      "Production launch",
    ],
  },
  {
    number: "06",
    title: "Support",
    eyebrow: "EVOLUTION",
    statement: "The launch is only the beginning.",
    description:
      "As your business evolves, your digital product can evolve with it. We remain available for improvements, updates, support, and future development.",
    icon: Headphones,
    points: [
      "Technical support",
      "Future improvements",
      "Updates",
      "Continuous optimization",
    ],
  },
];

const revealUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const revealLeft = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const revealRight = {
  hidden: {
    opacity: 0,
    x: 35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function OurProcess() {
  return (
    <main className="overflow-hidden bg-white font-['Roboto',sans-serif] text-slate-950">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[760px] overflow-hidden bg-slate-950 sm:min-h-[780px] lg:min-h-[820px]">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${PROCESS_BG})`,
          }}
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-slate-950/60" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 to-slate-950/15" />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/30" />

        {/* Ambient light */}
        <div className="absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[140px]" />

        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div className="relative z-10 mx-auto flex min-h-[760px] w-full max-w-[1600px] items-end px-6 pt-32 sm:min-h-[780px] sm:px-8 sm:pt-36 lg:min-h-[820px] lg:px-10 lg:pt-40 xl:px-12">

          <div className="w-full pb-14 sm:pb-16 lg:pb-20">

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="max-w-[900px]"
            >

              {/* Label */}
              <motion.div
                variants={revealUp}
                className="mb-6 flex items-center gap-3"
              >
                <span className="h-px w-9 bg-blue-400" />

                <span className="text-[10px] font-medium tracking-[0.3em] text-blue-300 sm:text-xs">
                  OUR PROCESS
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={revealUp}
                className="max-w-[850px] text-[clamp(3rem,5.8vw,6.4rem)] font-medium leading-[0.88] tracking-[-0.065em] text-white"
              >
                We don't just
                <br />

                <span className="text-white/45">
                  build.
                </span>{" "}

                <span className="text-blue-400">
                  We create.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={revealUp}
                className="mt-7 max-w-[700px] text-sm leading-7 text-white/65 sm:text-base sm:leading-8 lg:text-lg"
              >
                From the first conversation to the final launch, every stage
                of our process is designed to create clarity, build
                confidence, and deliver meaningful digital experiences.
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={revealUp}
                className="mt-8 flex flex-wrap gap-3"
              >
                <a
                  href="#process"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition-all duration-300 hover:bg-blue-600 hover:text-white sm:px-6 sm:py-3.5"
                >
                  See how we work

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 text-white transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={14} />
                  </span>
                </a>

                <a
                  href="/contact?quote=true"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/10 sm:px-6 sm:py-3.5"
                >
                  Start a project
                </a>
              </motion.div>

            </motion.div>

            {/* Bottom journey */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 0.7,
              }}
              className="mt-14 flex flex-col gap-5 border-t border-white/15 pt-5 sm:mt-16 sm:flex-row sm:items-center sm:justify-between"
            >

              <div>

                <span className="text-[9px] tracking-[0.28em] text-white/40">
                  THE JOURNEY
                </span>

                <div className="mt-2.5 flex items-center gap-2">

                  {processSteps.map((step, index) => (
                    <React.Fragment key={step.number}>

                      <span className="text-[10px] text-white/65 sm:text-xs">
                        {step.number}
                      </span>

                      {index !== processSteps.length - 1 && (
                        <span className="h-px w-4 bg-white/20 sm:w-5" />
                      )}

                    </React.Fragment>
                  ))}

                </div>

              </div>

              <span className="text-[9px] tracking-[0.25em] text-white/35">
                IDEA → EXPERIENCE
              </span>

            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="bg-white py-20 sm:py-24 lg:py-28">

        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-10 xl:px-12">

          <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              variants={revealLeft}
            >

              <span className="text-[10px] font-semibold tracking-[0.3em] text-blue-600">
                THE CODEGENZ METHOD
              </span>

              <h2 className="mt-5 text-3xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-4xl lg:text-5xl">
                A better process
                <br />

                <span className="text-slate-400">
                  creates better work.
                </span>
              </h2>

            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              variants={revealRight}
            >

              <p className="max-w-3xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
                We keep our process structured without making it rigid.
                Strategy, design, development, and communication work together
                throughout the journey so the final product stays connected
                to the original business goal.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">

                {[
                  "Clear communication",
                  "Purposeful design",
                  "Modern technology",
                  "Reliable delivery",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs text-slate-600 sm:text-sm"
                  >

                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Check size={11} />
                    </span>

                    {item}

                  </div>
                ))}

              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURE IMAGE
      ===================================================== */}

      <section className="px-5 pb-12 sm:px-8 sm:pb-16 lg:px-10 xl:px-12">

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.985,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative mx-auto h-[360px] w-full max-w-[1600px] overflow-hidden rounded-[26px] sm:h-[450px] sm:rounded-[32px] lg:h-[500px]"
        >

          <img
            src={PROCESS_BG}
            alt="CodeGenZ creative process"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-slate-950/50" />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />

          <div className="absolute bottom-7 left-6 max-w-lg sm:bottom-10 sm:left-10 lg:bottom-12 lg:left-12">

            <span className="text-[9px] font-semibold tracking-[0.3em] text-blue-300 sm:text-[10px]">
              FROM CONCEPT TO CREATION
            </span>

            <h3 className="mt-3 text-3xl font-medium leading-[0.95] tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
              Every detail
              <br />
              has a reason.
            </h3>

          </div>

          <div className="absolute right-6 top-6 sm:right-8 sm:top-8">

            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md sm:h-12 sm:w-12">
              <MoveUpRight size={18} />
            </div>

          </div>

        </motion.div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section
        id="process"
        className="bg-[#f7f7f5] py-20 sm:py-24 lg:py-32"
      >

        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-10 xl:px-12">

          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={revealUp}
            className="mb-16 max-w-3xl sm:mb-20 lg:mb-24"
          >

            <span className="text-[10px] font-semibold tracking-[0.3em] text-blue-600">
              SIX STAGES
            </span>

            <h2 className="mt-5 text-4xl font-medium leading-[0.92] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              The path from
              <br />

              <span className="text-slate-400">
                idea to impact.
              </span>
            </h2>

          </motion.div>

          {/* Steps */}
          <div className="space-y-20 sm:space-y-24 lg:space-y-28">

            {processSteps.map((step, index) => {

              const Icon = step.icon;

              const reversed = index % 2 !== 0;

              return (
                <motion.article
                  key={step.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  className="relative"
                >

                  <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

                    {/* TEXT */}

                    <motion.div
                      variants={reversed ? revealRight : revealLeft}
                      className={reversed ? "lg:order-2" : ""}
                    >

                      <div className="flex items-center gap-3">

                        <span className="text-[10px] font-semibold tracking-[0.3em] text-blue-600">
                          {step.eyebrow}
                        </span>

                        <span className="h-px w-8 bg-blue-200" />

                      </div>

                      <div className="mt-5 flex items-start gap-4 sm:gap-5">

                        <span className="pt-1 text-4xl font-medium tracking-[-0.06em] text-slate-200 sm:text-5xl">
                          {step.number}
                        </span>

                        <div>

                          <h3 className="text-3xl font-medium leading-none tracking-[-0.055em] sm:text-4xl lg:text-5xl">
                            {step.title}
                          </h3>

                          <p className="mt-3 text-base text-slate-400 sm:text-lg">
                            {step.statement}
                          </p>

                        </div>

                      </div>

                      <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                        {step.description}
                      </p>

                      <div className="mt-7 grid gap-2.5 sm:grid-cols-2">

                        {step.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-center gap-2.5 text-xs text-slate-600 sm:text-sm"
                          >

                            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

                            {point}

                          </div>
                        ))}

                      </div>

                      <div className="mt-8 flex items-center gap-3 text-[9px] tracking-[0.22em] text-slate-400">

                        <span>STEP</span>

                        <span className="h-px w-6 bg-slate-300" />

                        <span>{step.number} / 06</span>

                      </div>

                    </motion.div>

                    {/* IMAGE */}

                    <motion.div
                      variants={reversed ? revealLeft : revealRight}
                      className={reversed ? "lg:order-1" : ""}
                    >

                      <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-slate-950 sm:rounded-[28px]">

                        <img
                          src={PROCESS_BG}
                          alt={step.title}
                          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-transform duration-1000 hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-slate-950/40" />

                        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-slate-950/80" />

                        {/* Number */}

                        <div className="absolute left-6 top-5 sm:left-8 sm:top-7">

                          <span className="text-[80px] font-medium leading-none tracking-[-0.08em] text-white/10 sm:text-[105px] lg:text-[120px]">
                            {step.number}
                          </span>

                        </div>

                        {/* Icon */}

                        <motion.div
                          whileHover={{
                            scale: 1.05,
                            rotate: -4,
                          }}
                          className="absolute bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white text-slate-950 shadow-xl sm:bottom-8 sm:left-8 sm:h-16 sm:w-16"
                        >

                          <Icon
                            size={23}
                            strokeWidth={1.5}
                          />

                        </motion.div>

                        {/* Label */}

                        <div className="absolute right-6 top-6 sm:right-8 sm:top-8">

                          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[8px] tracking-[0.22em] text-white backdrop-blur-md sm:px-4 sm:py-2 sm:text-[9px]">
                            {step.eyebrow}
                          </span>

                        </div>

                        {/* Footer */}

                        <div className="absolute bottom-6 right-6 flex items-center gap-2 text-[8px] tracking-[0.22em] text-white/45 sm:bottom-8 sm:right-8 sm:text-[9px]">

                          CODEGENZ

                          <span className="h-px w-5 bg-white/20" />

                          {step.number}

                        </div>

                      </div>

                    </motion.div>

                  </div>

                </motion.article>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-28 lg:py-32">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage: `url(${PROCESS_BG})`,
          }}
        />

        <div className="absolute inset-0 bg-slate-950/90" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-10 xl:px-12">

          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-24">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              variants={revealLeft}
            >

              <span className="text-[10px] font-semibold tracking-[0.3em] text-blue-400">
                OUR BELIEF
              </span>

              <h2 className="mt-6 text-4xl font-medium leading-[0.92] tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
                Good work
                <br />

                <span className="text-white/30">
                  is intentional.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                We don't measure a project only by how it looks when it
                launches. We care about the thinking behind it, the experience
                it creates, and the value it brings to the business.
              </p>

            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              variants={revealRight}
            >

              <div className="border-t border-white/10">

                {[
                  [
                    "01",
                    "Think deeply",
                    "Understand the problem before proposing the solution.",
                  ],
                  [
                    "02",
                    "Design purposefully",
                    "Create experiences that are beautiful and useful.",
                  ],
                  [
                    "03",
                    "Build carefully",
                    "Use technology that supports reliability and growth.",
                  ],
                  [
                    "04",
                    "Stay connected",
                    "Keep communication clear from beginning to beyond launch.",
                  ],
                ].map(([number, title, text]) => (
                  <div
                    key={number}
                    className="group flex gap-5 border-b border-white/10 py-6 transition-colors duration-300 hover:bg-white/[0.025]"
                  >

                    <span className="pt-1 text-[9px] tracking-[0.25em] text-blue-400">
                      {number}
                    </span>

                    <div className="flex-1">

                      <h3 className="text-base font-medium text-white sm:text-lg">
                        {title}
                      </h3>

                      <p className="mt-1.5 max-w-md text-xs leading-6 text-white/35 sm:text-sm">
                        {text}
                      </p>

                    </div>

                    <ArrowUpRight
                      size={16}
                      className="mt-1 text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
                    />

                  </div>
                ))}

              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.07]"
          style={{
            backgroundImage: `url(${PROCESS_BG})`,
          }}
        />

        <div className="absolute inset-0 bg-white/92" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-10 xl:px-12">

          <div className="mx-auto max-w-4xl text-center">

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
            >

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-xl sm:h-16 sm:w-16">
                <Sparkles
                  size={23}
                  strokeWidth={1.5}
                />
              </div>

              <span className="mt-7 inline-block text-[9px] font-semibold tracking-[0.3em] text-blue-600 sm:text-[10px]">
                LET'S BUILD SOMETHING
              </span>

              <h2 className="mt-5 text-4xl font-medium leading-[0.92] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                Your next idea
                <br />

                <span className="text-slate-400">
                  starts here.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                Tell us what you are planning, what you want to improve, or
                where you want your business to go next. We will help shape
                the right path forward.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                <a
                  href="/contact?quote=true"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-600"
                >
                  Start a conversation

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={14} />
                  </span>
                </a>

                <a
                  href="mailto:info@codegenzsolutions.com"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3.5 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-slate-950 hover:text-slate-950"
                >
                  info@codegenzsolutions.com
                </a>

              </div>

            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}

export default OurProcess;