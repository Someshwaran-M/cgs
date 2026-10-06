import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaGlobe,
  FaLightbulb,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section
      id="about-preview"
      className="w-full overflow-hidden bg-white px-6 py-24 text-[#102A43] sm:px-8 lg:px-12 xl:px-16 xl:py-32"
    >
      <div className="mx-auto grid max-w-[1680px] grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">

        {/* =========================================================
            LEFT CONTENT
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Label */}

          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#1769C2]" />

            <span className="text-[9px] font-semibold tracking-[0.3em] text-[#1769C2]">
              ABOUT CODEGENZ
            </span>
          </div>

          {/* Main Heading */}

          <h2 className="max-w-[720px] text-[clamp(36px,5vw,60px)] font-semibold leading-[1.04] tracking-[-0.045em] text-[#0B243D]">
            Building digital
            <br />
            <span className="text-[#1769C2]">
              experiences with purpose.
            </span>
          </h2>

          {/* Main Description */}

          <p className="mt-8 max-w-[650px] text-[14px] leading-8 text-[#60758A]">
            CodeGenZ Solutions is a technology-focused digital solutions
            company helping businesses turn ideas into meaningful digital
            experiences.
          </p>

          <p className="mt-5 max-w-[650px] text-[14px] leading-8 text-[#60758A]">
            We bring together modern technology, thoughtful design, and
            practical development to create websites, web applications, and
            custom digital solutions built around real business needs.
          </p>

          {/* Key Points */}

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="border-l-2 border-[#1769C2] pl-4">
              <p className="text-[10px] font-semibold tracking-[0.12em] text-[#203B58]">
                MODERN
              </p>

              <p className="mt-1 text-[11px] leading-5 text-[#8A9AAC]">
                Modern technology and experiences
              </p>
            </div>

            <div className="border-l-2 border-[#1769C2] pl-4">
              <p className="text-[10px] font-semibold tracking-[0.12em] text-[#203B58]">
                PRACTICAL
              </p>

              <p className="mt-1 text-[11px] leading-5 text-[#8A9AAC]">
                Solutions focused on real needs
              </p>
            </div>

            <div className="border-l-2 border-[#1769C2] pl-4">
              <p className="text-[10px] font-semibold tracking-[0.12em] text-[#203B58]">
                SCALABLE
              </p>

              <p className="mt-1 text-[11px] leading-5 text-[#8A9AAC]">
                Built to grow with your business
              </p>
            </div>
          </div>

          {/* Explore More */}

          <Link
            to="/about"
            className="group mt-10 inline-flex items-center gap-4 rounded-full bg-[#1769C2] px-7 py-4 text-[9px] font-semibold tracking-[0.2em] text-white shadow-[0_12px_30px_rgba(23,105,194,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F559F] hover:shadow-[0_16px_38px_rgba(23,105,194,0.25)]"
          >
            <span>EXPLORE MORE</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <FaArrowRight size={12} />
            </span>
          </Link>
        </motion.div>

        {/* =========================================================
            RIGHT TECHNOLOGY VISUAL
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative flex min-h-[430px] items-center justify-center sm:min-h-[500px]"
        >
          {/* Outer Ring */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[290px] w-[290px] rounded-full border border-[#1769C2]/10 sm:h-[440px] sm:w-[440px]"
          />

          {/* Inner Ring */}

          <div className="absolute h-[230px] w-[230px] rounded-full border border-[#1769C2]/15 sm:h-[350px] sm:w-[350px]" />

          {/* Glow */}

          <div className="absolute h-[190px] w-[190px] rounded-full bg-[#1769C2]/10 blur-[45px] sm:h-[260px] sm:w-[260px]" />

          {/* Dashed Ring */}

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[310px] w-[310px] rounded-full border border-dashed border-[#1769C2]/10 sm:h-[470px] sm:w-[470px]"
          />

          {/* =====================================================
              CENTER BRAND
          ====================================================== */}

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 flex h-[190px] w-[190px] flex-col items-center justify-center rounded-full border border-[#DCE5ED] bg-white shadow-[0_30px_90px_rgba(15,65,105,0.13)] sm:h-[245px] sm:w-[245px]"
          >
            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[18px] bg-[#1769C2] text-white shadow-[0_15px_35px_rgba(23,105,194,0.25)] sm:h-[72px] sm:w-[72px] sm:rounded-[20px]">
              <FaCode size={24} className="sm:hidden" />
              <FaCode size={28} className="hidden sm:block" />
            </div>

            <p className="mt-4 text-[11px] font-semibold tracking-[0.25em] text-[#0B243D] sm:mt-5 sm:text-[12px]">
              CODEGENZ
            </p>

            <p className="mt-2 text-[7px] tracking-[0.25em] text-[#8A9AAC] sm:text-[8px]">
              DIGITAL SOLUTIONS
            </p>
          </motion.div>

          {/* =====================================================
              DIGITAL
          ====================================================== */}

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-[13%] z-20 flex items-center gap-3 rounded-2xl border border-[#E2EAF1] bg-white px-3 py-2.5 shadow-[0_15px_40px_rgba(15,65,105,0.08)] sm:left-[2%] sm:top-[17%] sm:px-4 sm:py-3"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EEF6FF] text-[#1769C2] sm:h-9 sm:w-9">
              <FaGlobe size={14} />
            </div>

            <div>
              <p className="text-[8px] font-semibold tracking-[0.1em] text-[#203B58] sm:text-[9px]">
                DIGITAL
              </p>

              <p className="mt-1 text-[7px] text-[#8A9AAC] sm:text-[8px]">
                Connected experiences
              </p>
            </div>
          </motion.div>

          {/* =====================================================
              INNOVATION
          ====================================================== */}

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[10%] right-0 z-20 flex items-center gap-3 rounded-2xl border border-[#E2EAF1] bg-white px-3 py-2.5 shadow-[0_15px_40px_rgba(15,65,105,0.08)] sm:bottom-[15%] sm:right-[2%] sm:px-4 sm:py-3"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EEF6FF] text-[#1769C2] sm:h-9 sm:w-9">
              <FaLightbulb size={14} />
            </div>

            <div>
              <p className="text-[8px] font-semibold tracking-[0.1em] text-[#203B58] sm:text-[9px]">
                INNOVATION
              </p>

              <p className="mt-1 text-[7px] text-[#8A9AAC] sm:text-[8px]">
                Ideas into solutions
              </p>
            </div>
          </motion.div>

          {/* =====================================================
              DECORATIVE DOTS
          ====================================================== */}

          <motion.span
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[20%] left-[12%] h-2 w-2 rounded-full bg-[#1769C2]"
          />

          <motion.span
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute right-[12%] top-[16%] h-2 w-2 rounded-full bg-[#63A9FF]"
          />

          <motion.span
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-[5%] right-[22%] h-3 w-3 rounded-full border border-[#1769C2]"
          />
        </motion.div>
      </div>

      {/* =========================================================
          BOTTOM STATEMENT
      ========================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto mt-16 max-w-[1680px] border-t border-[#E4EBF2] pt-8"
      >
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

          <p className="max-w-[700px] text-[12px] leading-7 text-[#718398]">
            We turn ideas into purposeful digital experiences through
            technology, creativity, and a clear understanding of your goals.
          </p>

          <Link
            to="/about"
            className="group inline-flex shrink-0 items-center gap-3 text-[9px] font-semibold tracking-[0.2em] text-[#1769C2]"
          >
            DISCOVER CODEGENZ

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <FaArrowRight size={11} />
            </span>
          </Link>

        </div>
      </motion.div>
    </section>
  );
};

export default AboutPreview;