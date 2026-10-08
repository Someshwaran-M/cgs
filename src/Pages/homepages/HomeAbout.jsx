import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  Target,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  const principles = [
    {
      number: "01",
      title: "BUSINESS FIRST",
      description: "Solutions shaped around your goals.",
      icon: Target,
    },
    {
      number: "02",
      title: "MODERN",
      description: "Practical use of modern technologies.",
      icon: Code2,
    },
    {
      number: "03",
      title: "LONG-TERM",
      description: "Built with growth and usability in mind.",
      icon: Layers3,
    },
  ];

  return (
    <section
      id="home-about"
      className="relative w-full overflow-hidden bg-white px-5 py-20 font-['Roboto',sans-serif] text-[#102A43] sm:px-8 sm:py-24 lg:px-10 lg:py-28"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[-180px] top-[20%] h-[400px] w-[400px] rounded-full bg-[#1769C2]/[0.035] blur-[130px]" />

        <div className="absolute bottom-[-180px] right-[-120px] h-[400px] w-[400px] rounded-full bg-[#1769C2]/[0.025] blur-[130px]" />

        <div className="absolute left-[5%] top-0 h-full w-px bg-[#071827]/[0.025]" />

        <div className="absolute right-[5%] top-0 h-full w-px bg-[#071827]/[0.025]" />

      </div>

      {/* =========================================================
          MAIN CONTAINER
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
                  duration: 2.2,
                  repeat: Infinity,
                }}
                className="absolute h-2 w-2 rounded-full bg-[#1769C2]"
              />

              <span className="relative h-1.5 w-1.5 rounded-full bg-[#1769C2]" />

            </span>

            <span className="text-[8px] font-semibold tracking-[0.3em] text-[#1769C2] sm:text-[9px]">
              WHY CODEGENZ
            </span>

          </div>

          <span className="hidden text-[8px] tracking-[0.25em] text-[#A3AFBA] sm:block">
            CODEGENZ / 02
          </span>

        </motion.div>

        {/* =======================================================
            MAIN LAYOUT
        ======================================================== */}

        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20">

          {/* =====================================================
              LEFT — PREMIUM VISUAL
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
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
            className="relative"
          >

            {/* Main architectural panel */}
            <div className="relative min-h-[500px] overflow-hidden bg-[#061522] sm:min-h-[560px]">

              {/* Ambient light */}
              <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-[#1769C2]/15 blur-[100px]" />

              <div className="absolute -bottom-20 -left-20 h-[260px] w-[260px] rounded-full bg-[#1769C2]/10 blur-[90px]" />

              {/* Architectural lines */}
              <div className="absolute bottom-0 left-[18%] top-0 w-px bg-white/[0.055]" />

              <div className="absolute bottom-0 left-[50%] top-0 w-px bg-white/[0.045]" />

              <div className="absolute bottom-0 right-[18%] top-0 w-px bg-white/[0.055]" />

              <div className="absolute left-0 right-0 top-[28%] h-px bg-white/[0.045]" />

              <div className="absolute left-0 right-0 bottom-[28%] h-px bg-white/[0.045]" />

              {/* Diagonal accent */}
              <motion.div
                animate={{
                  x: ["-10%", "20%", "-10%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-[-20%] top-[47%] h-px w-[140%] rotate-[-28deg] bg-gradient-to-r from-transparent via-[#579FFF]/30 to-transparent"
              />

              {/* Top metadata */}
              <div className="absolute left-6 right-6 top-6 flex items-center justify-between sm:left-8 sm:right-8 sm:top-8">

                <div className="flex items-center gap-3">

                  <span className="h-px w-8 bg-[#579FFF]" />

                  <span className="text-[7px] tracking-[0.25em] text-white/40">
                    DIGITAL PARTNER
                  </span>

                </div>

                <span className="text-[7px] tracking-[0.2em] text-white/20">
                  2026
                </span>

              </div>

              {/* Central composition */}
              <div className="absolute inset-0 flex items-center justify-center px-8">

                <div className="relative w-full max-w-[380px]">

                  {/* Main technical frame */}
                  <div className="relative border border-white/[0.12] bg-white/[0.025] p-5 backdrop-blur-sm sm:p-6">

                    {/* Top */}
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">

                      <span className="text-[7px] tracking-[0.22em] text-white/30">
                        CODEGENZ SYSTEM
                      </span>

                      <div className="flex items-center gap-1.5">

                        <span className="h-1.5 w-1.5 rounded-full bg-[#579FFF]" />

                        <span className="text-[7px] text-white/30">
                          ACTIVE
                        </span>

                      </div>

                    </div>

                    {/* Main word */}
                    <div className="py-10">

                      <span className="block text-[clamp(3rem,7vw,5rem)] font-medium leading-[0.82] tracking-[-0.08em] text-white">
                        WHY
                      </span>

                      <span className="mt-2 block text-[clamp(3rem,7vw,5rem)] font-medium leading-[0.82] tracking-[-0.08em] text-[#579FFF]">
                        US?
                      </span>

                    </div>

                    {/* System rows */}
                    <div className="space-y-2">

                      <div className="flex items-center justify-between border border-white/[0.07] px-3 py-2.5">

                        <span className="text-[7px] tracking-[0.15em] text-white/30">
                          APPROACH
                        </span>

                        <span className="text-[7px] text-white/65">
                          BUSINESS FIRST
                        </span>

                      </div>

                      <div className="flex items-center justify-between border border-white/[0.07] px-3 py-2.5">

                        <span className="text-[7px] tracking-[0.15em] text-white/30">
                          TECHNOLOGY
                        </span>

                        <span className="text-[7px] text-white/65">
                          MODERN
                        </span>

                      </div>

                      <div className="flex items-center justify-between border border-white/[0.07] px-3 py-2.5">

                        <span className="text-[7px] tracking-[0.15em] text-white/30">
                          DIRECTION
                        </span>

                        <span className="text-[7px] text-white/65">
                          LONG-TERM
                        </span>

                      </div>

                    </div>

                    {/* Bottom */}
                    <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4">

                      <span className="text-[6px] tracking-[0.2em] text-white/20">
                        TECHNOLOGY × DESIGN × PURPOSE
                      </span>

                      <ArrowUpRight
                        size={13}
                        className="text-[#579FFF]"
                      />

                    </div>

                  </div>

                  {/* Small side marker */}
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -right-5 top-[25%] hidden border border-white/10 bg-[#071827] px-3 py-2 sm:block"
                  >

                    <p className="text-[6px] tracking-[0.2em] text-white/30">
                      FOCUS
                    </p>

                    <p className="mt-1 text-[8px] font-medium text-[#579FFF]">
                      REAL NEEDS
                    </p>

                  </motion.div>

                </div>

              </div>

              {/* Bottom metadata */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8">

                <div>

                  <span className="text-[7px] tracking-[0.2em] text-white/25">
                    OUR PRINCIPLE
                  </span>

                  <p className="mt-2 max-w-[230px] text-[10px] leading-5 text-white/50">
                    Technology should solve real problems, not simply follow
                    trends.
                  </p>

                </div>

                <div className="flex h-9 w-9 items-center justify-center border border-white/10 text-[#579FFF]">
                  <Zap
                    size={14}
                    strokeWidth={1.4}
                  />
                </div>

              </div>

            </div>

            {/* Offset frame */}
            <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full border border-[#1769C2]/15" />

          </motion.div>

          {/* =====================================================
              RIGHT — CONTENT
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
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            {/* Section marker */}
            <div className="mb-6 flex items-center gap-3">

              <span className="h-px w-9 bg-[#1769C2]" />

              <span className="text-[8px] font-semibold tracking-[0.28em] text-[#1769C2]">
                OUR APPROACH
              </span>

            </div>

            {/* Heading */}
            <h2 className="max-w-[720px] text-[clamp(2.8rem,5vw,5.4rem)] font-medium leading-[0.91] tracking-[-0.07em] text-[#071A2D]">

              Built around
              <br />

              <span className="text-[#1769C2]">
                your business
              </span>

              <br />

              <span className="text-slate-300">
                needs.
              </span>

            </h2>

            {/* Description */}
            <div className="mt-8 max-w-[650px]">

              <p className="text-[13px] leading-7 text-[#60758A] sm:text-[14px] sm:leading-8">
                At CodeGenZ Solutions, we believe technology should solve real
                business problems, not simply follow trends. We combine
                thoughtful design, modern technology, and practical development
                to create digital solutions with a clear purpose.
              </p>

              <p className="mt-4 text-[13px] leading-7 text-[#60758A] sm:text-[14px] sm:leading-8">
                From the first idea to the final product, we focus on
                understanding your requirements, choosing the right approach,
                and building experiences that are reliable, scalable, and easy
                to use.
              </p>

            </div>

            {/* =================================================
                PRINCIPLES
            ================================================== */}

            <div className="mt-9 border-t border-[#DCE5ED]">

              {principles.map((item, index) => {

                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.number}
                    initial={{
                      opacity: 0,
                      x: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="group relative flex items-center gap-5 border-b border-[#DCE5ED] py-5"
                  >

                    {/* Active line */}
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-[#1769C2] transition-all duration-500 group-hover:w-full" />

                    {/* Number */}
                    <span className="w-6 shrink-0 text-[8px] font-semibold tracking-[0.15em] text-[#B1BDC7] transition-colors duration-300 group-hover:text-[#1769C2]">
                      {item.number}
                    </span>

                    {/* Icon */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#DCE5ED] text-[#1769C2] transition-all duration-300 group-hover:border-[#1769C2] group-hover:bg-[#1769C2] group-hover:text-white">
                      <Icon
                        size={15}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">

                      <p className="text-[9px] font-semibold tracking-[0.16em] text-[#203B58]">
                        {item.title}
                      </p>

                      <p className="mt-1 text-[10px] leading-5 text-[#8A9AAC]">
                        {item.description}
                      </p>

                    </div>

                    {/* Arrow */}
                    <ArrowUpRight
                      size={13}
                      className="text-[#C2CCD4] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#1769C2]"
                    />

                  </motion.div>
                );
              })}

            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-5">

              <Link
                to="/about"
                className="group inline-flex items-center gap-4 rounded-full bg-[#1769C2] px-6 py-3.5 text-[8px] font-semibold tracking-[0.2em] text-white shadow-[0_12px_30px_rgba(23,105,194,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F559F]"
              >
                WHY CODEGENZ

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={11} />
                </span>

              </Link>

              <div className="flex items-center gap-2">

                <Check
                  size={12}
                  className="text-[#1769C2]"
                />

                <span className="text-[8px] tracking-[0.12em] text-[#8A9AAC]">
                  PURPOSEFUL DIGITAL SOLUTIONS
                </span>

              </div>

            </div>

          </motion.div>

        </div>

        {/* =======================================================
            BOTTOM STATEMENT
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
            delay: 0.15,
          }}
          viewport={{
            once: true,
          }}
          className="mt-16 border-t border-[#E2E9EF] pt-7 sm:mt-20"
        >

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

            <div className="flex items-center gap-3">

              <span className="h-1.5 w-1.5 rounded-full bg-[#1769C2]" />

              <p className="max-w-[700px] text-[10px] leading-6 text-[#718398] sm:text-[11px]">
                Business-focused thinking, modern technology, and purposeful
                development — helping ideas become reliable digital
                experiences.
              </p>

            </div>

            <Link
              to="/services"
              className="group inline-flex shrink-0 items-center gap-3 text-[8px] font-semibold tracking-[0.2em] text-[#1769C2] transition-colors duration-300 hover:text-[#071A2D]"
            >
              EXPLORE OUR SERVICES

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

export default HomeAbout;