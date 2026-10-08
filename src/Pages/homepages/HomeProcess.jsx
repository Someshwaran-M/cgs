import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";

const processSteps = [
  {
    number: "01",
    title: "DISCOVER",
    description:
      "We understand your business, requirements, goals, audience, and the problem you want to solve.",
    icon: Search,
  },
  {
    number: "02",
    title: "STRATEGY",
    description:
      "We define the right project direction, features, technology, structure, and development approach.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "DESIGN",
    description:
      "We create a clear and purposeful digital experience focused on usability, visual quality, and responsiveness.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "DEVELOP",
    description:
      "We turn the approved direction into a functional digital solution and continuously test and refine it.",
    icon: Code2,
  },
  {
    number: "05",
    title: "LAUNCH",
    description:
      "We prepare the final solution for deployment and help move your digital product from development to production.",
    icon: Rocket,
  },
];

const HomeProcess = () => {
  return (
    <section
      id="home-process"
      className="relative w-full overflow-hidden bg-white px-6 py-20 text-[#102A43] sm:px-8 lg:px-12 xl:px-16"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-150px] top-[25%] h-[320px] w-[320px] rounded-full bg-[#1769C2]/[0.035] blur-3xl" />

        <div className="absolute bottom-[-150px] right-[-120px] h-[350px] w-[350px] rounded-full bg-[#1769C2]/[0.025] blur-3xl" />

        <div className="absolute inset-0 opacity-[0.018]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#1769C2 1px, transparent 1px), linear-gradient(90deg, #1769C2 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1680px]">
        {/* =========================================================
            HEADER
        ========================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1769C2]" />

              <span className="text-[10px] font-semibold tracking-[0.3em] text-[#1769C2]">
                OUR PROCESS
              </span>
            </div>

            <h2 className="max-w-[720px] text-[clamp(36px,5vw,60px)] font-semibold leading-[1.04] tracking-[-0.045em] text-[#0B243D]">
              A simple process.
              <br />
              <span className="text-[#1769C2]">
                A clear direction.
              </span>
            </h2>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:pl-16"
          >
            <p className="max-w-[650px] text-[14px] leading-8 text-[#60758A]">
              Every project starts with understanding the problem. We follow a
              structured approach that keeps communication clear, development
              focused, and the final experience aligned with your goals.
            </p>
          </motion.div>
        </div>

        {/* =========================================================
            PROCESS TIMELINE
        ========================================================== */}

        <div className="relative mt-20">
          {/* Desktop Connecting Line */}

          <div className="absolute left-[8%] right-[8%] top-[42px] hidden h-px bg-[#DCE5ED] lg:block" />

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="absolute left-[8%] right-[8%] top-[42px] hidden h-px origin-left bg-[#1769C2]/30 lg:block"
          />

          {/* Mobile Connecting Line */}

          <div className="absolute bottom-12 left-[21px] top-12 w-px bg-[#DCE5ED] lg:hidden" />

          <div className="grid grid-cols-1 gap-0 lg:grid-cols-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.15 }}
                  className="group relative pb-12 lg:px-5 lg:pb-0"
                >
                  {/* Mobile Layout */}

                  <div className="flex gap-5 lg:hidden">
                    {/* Number Circle */}

                    <div className="relative z-10 flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full border border-[#DCE5ED] bg-white shadow-[0_8px_25px_rgba(15,65,105,0.06)]">
                      <span className="text-[11px] font-bold tracking-[0.1em] text-[#1769C2]">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}

                    <div className="pt-1">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF6FF] text-[#1769C2]">
                          <Icon size={16} strokeWidth={1.7} />
                        </div>

                        <h3 className="text-[12px] font-bold tracking-[0.12em] text-[#0B243D]">
                          {step.title}
                        </h3>
                      </div>

                      <p className="max-w-[550px] text-[14px] leading-7 text-[#718398]">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop Layout */}

                  <div className="hidden lg:block">
                    {/* Number */}

                    <div className="relative z-10 mx-auto flex h-[84px] w-[84px] items-center justify-center rounded-full border border-[#DCE5ED] bg-white shadow-[0_15px_40px_rgba(15,65,105,0.07)] transition-all duration-500 group-hover:border-[#1769C2]/40 group-hover:shadow-[0_18px_50px_rgba(23,105,194,0.12)]">
                      <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#F4F8FC] transition-all duration-500 group-hover:bg-[#EEF6FF]">
                        <Icon
                          size={21}
                          strokeWidth={1.5}
                          className="text-[#1769C2] transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* Number Label */}

                    <div className="mt-6 text-center">
                      <span className="text-[10px] font-semibold tracking-[0.2em] text-[#8A9AAC]">
                        STEP {step.number}
                      </span>
                    </div>

                    {/* Title */}

                    <h3 className="mt-3 text-center text-[12px] font-bold tracking-[0.12em] text-[#0B243D]">
                      {step.title}
                    </h3>

                    {/* Description */}

                    <p className="mx-auto mt-5 max-w-[220px] text-center text-[13px] leading-6 text-[#718398]">
                      {step.description}
                    </p>

                    {/* Hover Arrow */}

                    <div className="mt-6 flex justify-center opacity-0 transition-all duration-500 group-hover:translate-y-1 group-hover:opacity-100">
                      <ArrowRight
                        size={14}
                        className="text-[#1769C2]"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-[#E4EBF2] pt-8 lg:mt-20"
        >
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-[14px] font-semibold tracking-[0.25em] text-[#1769C2]">
                FROM IDEA TO LAUNCH
              </p>

              <p className="mt-2 max-w-[700px] text-[12px] leading-7 text-[#718398]">
                A structured workflow helps us keep every stage focused,
                transparent, and aligned with the project objective.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center gap-4 rounded-full bg-[#1769C2] px-7 py-4 text-[9px] font-semibold tracking-[0.2em] text-white shadow-[0_12px_30px_rgba(23,105,194,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F559F] hover:shadow-[0_16px_38px_rgba(23,105,194,0.25)]"
            >
              START YOUR PROJECT

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={12} />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeProcess;