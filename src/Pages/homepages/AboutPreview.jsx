import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section
      id="about-preview"
      className="relative w-full overflow-hidden bg-white px-5 py-20 font-['Roboto',sans-serif] text-[#102A43] sm:px-8 sm:py-24 lg:px-10 lg:py-28"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[-180px] top-[15%] h-[400px] w-[400px] rounded-full bg-[#1769C2]/[0.035] blur-[120px]" />

        <div className="absolute bottom-[-180px] right-[-120px] h-[400px] w-[400px] rounded-full bg-[#1769C2]/[0.025] blur-[120px]" />

        <div className="absolute left-[5%] top-0 h-full w-px bg-[#071827]/[0.025]" />

        <div className="absolute right-[5%] top-0 h-full w-px bg-[#071827]/[0.025]" />

      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-[1420px]">

        {/* =======================================================
            TOP LABEL
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
            amount: 0.2,
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
              ABOUT CODEGENZ
            </span>

          </div>

          <span className="hidden text-[8px] tracking-[0.25em] text-[#A3AFBA] sm:block">
            CODEGENZ / 01
          </span>

        </motion.div>

        {/* =======================================================
            IMAGE LEFT / CONTENT RIGHT
        ======================================================== */}

        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">

          {/* =====================================================
              LEFT — IMAGE
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

            {/* Main image frame */}
            <div className="relative">

              {/* Offset border */}
              <div className="absolute -bottom-4 -left-4 h-full w-full border border-[#1769C2]/15" />

              {/* Image */}
              <div className="group relative aspect-[4/4.7] overflow-hidden bg-[#071827]">

                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85"
                  alt="CodeGenZ digital technology team"
                  className="
                    h-full
                    w-full
                    object-cover
                    grayscale-[15%]
                    transition-transform
                    duration-1000
                    group-hover:scale-105
                  "
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#04111D]/75 via-[#04111D]/10 to-transparent" />

                {/* Blue overlay */}
                <div className="absolute inset-0 bg-[#1769C2]/[0.06] mix-blend-multiply" />

                {/* Image top label */}
                <div className="absolute left-5 top-5 flex items-center gap-3">

                  <span className="h-px w-7 bg-white/50" />

                  <span className="text-[7px] font-medium tracking-[0.25em] text-white/70">
                    DIGITAL STUDIO
                  </span>

                </div>

                {/* Bottom image content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

                  <div className="flex items-end justify-between gap-5">

                    <div>

                      <p className="text-[7px] tracking-[0.25em] text-[#579FFF]">
                        TECHNOLOGY × DESIGN
                      </p>

                      <p className="mt-2 max-w-[260px] text-xl font-medium leading-tight tracking-[-0.04em] text-white sm:text-2xl">
                        Building ideas into digital experiences.
                      </p>

                    </div>

                    <div className="hidden h-10 w-10 shrink-0 items-center justify-center border border-white/20 text-white sm:flex">
                      <ArrowUpRight size={15} />
                    </div>

                  </div>

                </div>

                {/* Corner marker */}
                <div className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center border border-white/20 text-white/70">
                  <ArrowUpRight size={12} />
                </div>

              </div>

              {/* Floating information block */}
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
                  duration: 0.6,
                  delay: 0.35,
                }}
                viewport={{
                  once: true,
                }}
                className="
                  absolute
                  -bottom-7
                  right-4
                  z-10
                  w-[190px]
                  border
                  border-[#DCE5ED]
                  bg-white
                  p-4
                  shadow-[0_18px_45px_rgba(7,26,45,0.09)]
                  sm:right-7
                  sm:w-[220px]
                  sm:p-5
                "
              >

                <div className="flex items-center justify-between">

                  <span className="text-[7px] font-semibold tracking-[0.22em] text-[#1769C2]">
                    OUR APPROACH
                  </span>

                  <Sparkles
                    size={13}
                    className="text-[#1769C2]"
                  />

                </div>

                <p className="mt-3 text-[10px] leading-5 text-[#718398]">
                  Modern technology, thoughtful design and practical
                  development.
                </p>

              </motion.div>

            </div>

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
            className="lg:pl-4"
          >

            {/* Small label */}
            <div className="mb-6 flex items-center gap-3">

              <span className="h-px w-9 bg-[#1769C2]" />

              <span className="text-[8px] font-semibold tracking-[0.28em] text-[#1769C2]">
                WHO WE ARE
              </span>

            </div>

            {/* Heading */}
            <h2
              className="
                max-w-[720px]
                text-[clamp(2.8rem,5vw,5.4rem)]
                font-medium
                leading-[0.91]
                tracking-[-0.07em]
                text-[#071A2D]
              "
            >
              Building digital
              <br />

              <span className="text-[#1769C2]">
                experiences
              </span>

              <br />

              <span className="text-slate-300">
                with purpose.
              </span>
            </h2>

            {/* Description */}
            <div className="mt-8 max-w-[620px]">

              <p className="text-[13px] leading-7 text-[#60758A] sm:text-[14px] sm:leading-8">
                CodeGenZ Solutions is a technology-focused digital solutions
                company helping businesses turn ideas into meaningful digital
                experiences.
              </p>

              <p className="mt-4 text-[13px] leading-7 text-[#60758A] sm:text-[14px] sm:leading-8">
                We bring together modern technology, thoughtful design, and
                practical development to create websites, web applications,
                and custom digital solutions built around real business needs.
              </p>

            </div>

            {/* =================================================
                KEY PRINCIPLES
            ================================================== */}

            <div className="mt-9 border-t border-[#DCE5ED]">

              {/* Modern */}
              <div className="group flex items-center gap-5 border-b border-[#DCE5ED] py-4">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#DCE5ED] text-[#1769C2] transition-all duration-300 group-hover:border-[#1769C2] group-hover:bg-[#1769C2] group-hover:text-white">
                  <Code2
                    size={15}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="flex-1">

                  <p className="text-[9px] font-semibold tracking-[0.16em] text-[#203B58]">
                    MODERN
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-[#8A9AAC]">
                    Modern technology and experiences
                  </p>

                </div>

                <span className="text-[7px] tracking-[0.2em] text-[#C0CAD3]">
                  01
                </span>

              </div>

              {/* Practical */}
              <div className="group flex items-center gap-5 border-b border-[#DCE5ED] py-4">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#DCE5ED] text-[#1769C2] transition-all duration-300 group-hover:border-[#1769C2] group-hover:bg-[#1769C2] group-hover:text-white">
                  <Layers3
                    size={15}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="flex-1">

                  <p className="text-[9px] font-semibold tracking-[0.16em] text-[#203B58]">
                    PRACTICAL
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-[#8A9AAC]">
                    Solutions focused on real needs
                  </p>

                </div>

                <span className="text-[7px] tracking-[0.2em] text-[#C0CAD3]">
                  02
                </span>

              </div>

              {/* Scalable */}
              <div className="group flex items-center gap-5 border-b border-[#DCE5ED] py-4">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#DCE5ED] text-[#1769C2] transition-all duration-300 group-hover:border-[#1769C2] group-hover:bg-[#1769C2] group-hover:text-white">
                  <Sparkles
                    size={15}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="flex-1">

                  <p className="text-[9px] font-semibold tracking-[0.16em] text-[#203B58]">
                    SCALABLE
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-[#8A9AAC]">
                    Built to grow with your business
                  </p>

                </div>

                <span className="text-[7px] tracking-[0.2em] text-[#C0CAD3]">
                  03
                </span>

              </div>

            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-5">

              <Link
                to="/about"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  rounded-full
                  bg-[#1769C2]
                  px-6
                  py-3.5
                  text-[8px]
                  font-semibold
                  tracking-[0.2em]
                  text-white
                  shadow-[0_12px_30px_rgba(23,105,194,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#0F559F]
                  hover:shadow-[0_18px_40px_rgba(23,105,194,0.24)]
                "
              >
                EXPLORE CODEGENZ

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
                  BUILT AROUND YOUR NEEDS
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

              <p className="text-[10px] text-[#718398] sm:text-[11px]">
                Technology, creativity and practical thinking — working together.
              </p>

            </div>

            <Link
              to="/about"
              className="group inline-flex items-center gap-3 text-[8px] font-semibold tracking-[0.2em] text-[#1769C2] transition-colors duration-300 hover:text-[#071A2D]"
            >
              DISCOVER OUR STORY

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

export default AboutPreview;