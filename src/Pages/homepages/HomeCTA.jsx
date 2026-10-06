import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const HomeCTA = () => {
  return (
    <section
      id="home-cta"
      className="relative w-full overflow-hidden bg-[#020617] px-6 py-24 text-white sm:px-8 lg:px-12 xl:px-16 xl:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue Glow */}

        <div className="absolute left-[-180px] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#1769C2]/10 blur-[120px]" />

        <div className="absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[#1769C2]/10 blur-[120px]" />

        {/* Grid */}

        <div className="absolute inset-0 opacity-[0.055]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Radial Glow */}

        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1769C2]/[0.035] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1680px]">

        {/* =========================================================
            TOP LABEL
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-14 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-blue-400" />

          <span className="text-[9px] font-semibold tracking-[0.3em] text-blue-400">
            LET&apos;S BUILD TOGETHER
          </span>
        </motion.div>

        {/* =========================================================
            MAIN CONTENT
        ========================================================== */}

        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="max-w-[900px] text-[clamp(42px,6.5vw,82px)] font-semibold leading-[0.98] tracking-[-0.055em]">
              Have an idea?
              <br />

              <span className="text-slate-500">
                Let&apos;s make it real.
              </span>
            </h2>

            <p className="mt-8 max-w-[650px] text-[14px] leading-8 text-slate-400 sm:text-[15px]">
              Whether you are starting a new digital product, improving an
              existing website, or looking for a custom business solution,
              CodeGenZ Solutions can help you turn your idea into a meaningful
              digital experience.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/contact"
                className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#1769C2] px-7 py-4 text-[9px] font-semibold tracking-[0.2em] text-white shadow-[0_15px_40px_rgba(23,105,194,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2580DE] hover:shadow-[0_20px_50px_rgba(23,105,194,0.35)]"
              >
                START A PROJECT

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={13} />
                </span>
              </Link>

              <Link
                to="/projects"
                className="group inline-flex w-fit items-center gap-4 rounded-full border border-slate-700 px-7 py-4 text-[9px] font-semibold tracking-[0.2em] text-slate-300 transition-all duration-300 hover:border-blue-400 hover:text-white"
              >
                VIEW OUR WORK

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative flex min-h-[390px] items-center justify-center"
          >

            {/* Outer Ring */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[280px] w-[280px] rounded-full border border-blue-400/10 sm:h-[390px] sm:w-[390px]"
            />

            {/* Dashed Ring */}

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[230px] w-[230px] rounded-full border border-dashed border-blue-400/10 sm:h-[330px] sm:w-[330px]"
            />

            {/* Glow */}

            <div className="absolute h-[220px] w-[220px] rounded-full bg-[#1769C2]/10 blur-[70px] sm:h-[280px] sm:w-[280px]" />

            {/* Center */}

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 flex h-[170px] w-[170px] flex-col items-center justify-center rounded-full border border-slate-700 bg-[#071426]/90 shadow-[0_30px_100px_rgba(23,105,194,0.18)] backdrop-blur-xl sm:h-[210px] sm:w-[210px]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1769C2] text-white shadow-[0_15px_40px_rgba(23,105,194,0.35)]">
                <MessageCircle
                  size={24}
                  strokeWidth={1.5}
                />
              </div>

              <p className="mt-5 text-[10px] font-semibold tracking-[0.25em] text-white">
                YOUR IDEA
              </p>

              <p className="mt-2 text-[7px] tracking-[0.2em] text-slate-500">
                LET&apos;S BUILD IT
              </p>
            </motion.div>

            {/* Floating Element 01 */}

            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[0%] top-[14%] z-20 flex items-center gap-3 rounded-2xl border border-slate-700 bg-[#071426]/90 px-3 py-2.5 shadow-xl backdrop-blur-xl sm:left-[2%] sm:top-[17%] sm:px-4 sm:py-3"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <Sparkles size={14} />
              </div>

              <div>
                <p className="text-[8px] font-semibold tracking-[0.1em] text-slate-200 sm:text-[9px]">
                  IDEA
                </p>

                <p className="mt-1 text-[7px] text-slate-500 sm:text-[8px]">
                  Start with a vision
                </p>
              </div>
            </motion.div>

            {/* Floating Element 02 */}

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[12%] right-[0%] z-20 flex items-center gap-3 rounded-2xl border border-slate-700 bg-[#071426]/90 px-3 py-2.5 shadow-xl backdrop-blur-xl sm:bottom-[16%] sm:right-[2%] sm:px-4 sm:py-3"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <ArrowUpRight size={14} />
              </div>

              <div>
                <p className="text-[8px] font-semibold tracking-[0.1em] text-slate-200 sm:text-[9px]">
                  RESULT
                </p>

                <p className="mt-1 text-[7px] text-slate-500 sm:text-[8px]">
                  Build something meaningful
                </p>
              </div>
            </motion.div>

            {/* Decorative Dots */}

            <motion.span
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[20%] left-[15%] h-1.5 w-1.5 rounded-full bg-blue-400"
            />

            <motion.span
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute right-[15%] top-[17%] h-1.5 w-1.5 rounded-full bg-blue-300"
            />
          </motion.div>
        </div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-slate-800 pt-8"
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

            <p className="max-w-[700px] text-[12px] leading-7 text-slate-500">
              From concept to launch, let&apos;s create a digital experience
              that works for your business.
            </p>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center gap-3 text-[9px] font-semibold tracking-[0.2em] text-blue-400 transition-colors duration-300 hover:text-white"
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