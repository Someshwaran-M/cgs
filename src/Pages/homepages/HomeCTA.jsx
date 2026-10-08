import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Code2,
  Layers3,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";

const HomeCTA = () => {
  const stages = [
    {
      number: "01",
      title: "DEFINE",
      description: "Understand the idea",
      icon: Sparkles,
    },
    {
      number: "02",
      title: "CREATE",
      description: "Design the experience",
      icon: Layers3,
    },
    {
      number: "03",
      title: "BUILD",
      description: "Turn it into reality",
      icon: Code2,
    },
  ];

  return (
    <section
      id="home-cta"
      className="relative w-full overflow-hidden bg-[#04111D] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Soft ambient light */}
        <div className="absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#1769C2]/10 blur-[140px]" />

        <div className="absolute bottom-[-200px] right-[-150px] h-[450px] w-[450px] rounded-full bg-[#1769C2]/8 blur-[150px]" />

        {/* Subtle diagonal light */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1769C2]/[0.035] via-transparent to-[#1769C2]/[0.025]" />

        {/* Side architectural lines */}
        <div className="absolute left-[7%] top-0 h-full w-px bg-white/[0.035]" />

        <div className="absolute right-[7%] top-0 h-full w-px bg-white/[0.025]" />

      </div>

      {/* =========================================================
          MAIN
      ========================================================== */}

      <div className="relative mx-auto max-w-[1420px]">

        {/* =======================================================
            HEADER
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
          }}
          viewport={{
            once: true,
          }}
          className="mb-12 flex items-center justify-between"
        >

          <div className="flex items-center gap-3">

            <span className="relative flex h-2 w-2 items-center justify-center">

              <motion.span
                animate={{
                  scale: [1, 1.7, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute h-2 w-2 rounded-full bg-[#579FFF]"
              />

              <span className="relative h-1.5 w-1.5 rounded-full bg-[#579FFF]" />

            </span>

            <span className="text-[8px] font-semibold tracking-[0.3em] text-[#579FFF] sm:text-[9px]">
              LET'S BUILD TOGETHER
            </span>

          </div>

          <span className="hidden text-[8px] tracking-[0.25em] text-white/20 sm:block">
            CODEGENZ / 2026
          </span>

        </motion.div>

        {/* =======================================================
            MAIN GRID
        ======================================================== */}

        <div className="grid gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">

          {/* =====================================================
              LEFT
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-8 bg-[#1769C2]" />

              <span className="text-[8px] tracking-[0.25em] text-white/30">
                YOUR NEXT DIGITAL MOVE
              </span>

            </div>

            <h2 className="max-w-[820px] text-[clamp(3rem,6.2vw,6.4rem)] font-medium leading-[0.91] tracking-[-0.065em]">

              Have an idea?

              <br />

              <span className="text-white/25">
                Let's turn
              </span>

              <br />

              <span className="text-[#579FFF]">
                it into reality.
              </span>

            </h2>

            <p className="mt-7 max-w-[600px] text-[13px] leading-7 text-white/40 sm:text-[14px] sm:leading-8">
              Whether you are starting a new digital product, improving an
              existing website, or building a custom business solution,
              CodeGenZ Solutions helps transform ideas into purposeful
              digital experiences.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/contact"
                className="group inline-flex w-fit items-center justify-center gap-4 rounded-full bg-[#1769C2] px-6 py-3.5 text-[8px] font-semibold tracking-[0.2em] text-white shadow-[0_15px_40px_rgba(23,105,194,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2580DE]"
              >
                START A PROJECT

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={12} />
                </span>

              </Link>

              <Link
                to="/projects"
                className="group inline-flex w-fit items-center justify-center gap-3 rounded-full border border-white/10 px-6 py-3.5 text-[8px] font-semibold tracking-[0.2em] text-white/55 transition-all duration-300 hover:border-white/25 hover:text-white"
              >
                VIEW OUR WORK

                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />

              </Link>

            </div>

          </motion.div>

          {/* =====================================================
              RIGHT — NEW PREMIUM VISUAL
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.85,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="relative"
          >

            {/* Small heading */}
            <div className="mb-6 flex items-end justify-between">

              <div>

                <span className="text-[8px] tracking-[0.25em] text-white/25">
                  HOW WE BUILD
                </span>

                <h3 className="mt-2 text-xl font-medium tracking-[-0.03em] text-white">
                  From idea to impact.
                </h3>

              </div>

              <span className="text-[8px] tracking-[0.2em] text-[#579FFF]">
                03 STAGES
              </span>

            </div>

            {/* =================================================
                BLUEPRINT PANEL
            ================================================== */}

            <div className="relative border-y border-white/[0.09]">

              {/* Animated vertical indicator */}
              <motion.div
                initial={{
                  height: "0%",
                }}
                whileInView={{
                  height: "100%",
                }}
                transition={{
                  duration: 1.8,
                  delay: 0.3,
                  ease: "easeInOut",
                }}
                viewport={{
                  once: true,
                }}
                className="absolute left-[22px] top-0 z-10 w-px bg-gradient-to-b from-[#579FFF] via-[#1769C2] to-transparent"
              />

              {stages.map((stage, index) => {

                const Icon = stage.icon;

                return (
                  <motion.div
                    key={stage.number}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: 0.25 + index * 0.15,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="group relative flex min-h-[130px] items-center border-b border-white/[0.07] last:border-b-0"
                  >

                    {/* Number rail */}
                    <div className="relative z-20 flex w-[45px] shrink-0 justify-center">

                      <motion.div
                        whileHover={{
                          scale: 1.15,
                        }}
                        className={`flex h-7 w-7 items-center justify-center border transition-all duration-300 ${
                          index === 1
                            ? "border-[#579FFF]/50 bg-[#1769C2] text-white"
                            : "border-white/10 bg-[#071725] text-white/30 group-hover:border-[#579FFF]/40 group-hover:text-[#579FFF]"
                        }`}
                      >
                        <span className="text-[7px] font-semibold tracking-[0.1em]">
                          {stage.number}
                        </span>
                      </motion.div>

                    </div>

                    {/* Main content */}
                    <div className="flex flex-1 items-center justify-between gap-5 px-4 py-7 sm:px-6">

                      <div>

                        <div className="flex items-center gap-3">

                          <h4 className="text-sm font-medium tracking-[0.04em] text-white transition-colors duration-300 group-hover:text-[#579FFF]">
                            {stage.title}
                          </h4>

                          {index === 1 && (
                            <span className="text-[6px] tracking-[0.18em] text-[#579FFF]">
                              CORE
                            </span>
                          )}

                        </div>

                        <p className="mt-2 text-[10px] text-white/25">
                          {stage.description}
                        </p>

                      </div>

                      {/* Icon */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/[0.08] bg-white/[0.02] text-white/30 transition-all duration-300 group-hover:border-[#579FFF]/30 group-hover:bg-[#1769C2]/10 group-hover:text-[#579FFF]">

                        <Icon
                          size={16}
                          strokeWidth={1.4}
                        />

                      </div>

                    </div>

                    {/* Hover line */}
                    <motion.div
                      initial={{
                        scaleX: 0,
                      }}
                      whileHover={{
                        scaleX: 1,
                      }}
                      className="absolute bottom-0 left-[45px] right-0 h-px origin-left bg-[#579FFF]/50"
                    />

                  </motion.div>
                );
              })}

            </div>

            {/* =================================================
                BOTTOM METADATA
            ================================================== */}

            <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3">

              <div>

                <span className="text-[7px] tracking-[0.2em] text-white/20">
                  APPROACH
                </span>

                <p className="mt-2 text-[10px] text-white/50">
                  Strategy first
                </p>

              </div>

              <div>

                <span className="text-[7px] tracking-[0.2em] text-white/20">
                  FOCUS
                </span>

                <p className="mt-2 text-[10px] text-white/50">
                  User experience
                </p>

              </div>

              <div className="hidden sm:block">

                <span className="text-[7px] tracking-[0.2em] text-white/20">
                  RESULT
                </span>

                <p className="mt-2 text-[10px] text-white/50">
                  Built to grow
                </p>

              </div>

            </div>

            {/* Decorative moving line */}
            <motion.div
              animate={{
                x: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 left-0 h-px w-20 bg-[#579FFF]/50"
            />

          </motion.div>

        </div>

        {/* =======================================================
            BOTTOM
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          viewport={{
            once: true,
          }}
          className="mt-14 border-t border-white/[0.08] pt-6 sm:mt-16 sm:pt-7"
        >

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

            <div className="flex items-center gap-3">

              <Check
                size={12}
                className="text-[#579FFF]"
              />

              <p className="text-[11px] text-white/30 sm:text-[12px]">
                From concept to launch, let's create something meaningful.
              </p>

            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 text-[8px] font-semibold tracking-[0.22em] text-[#579FFF] transition-colors duration-300 hover:text-white"
            >
              TALK TO US

              <ArrowRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default HomeCTA;