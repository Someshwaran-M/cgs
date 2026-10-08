import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
  HelpCircle,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    number: "01",
    category: "SERVICES",
    question: "What services does CodeGenZ Solutions provide?",
    answer:
      "CodeGenZ Solutions provides website designing and development, UI / UX design, web application development, SEO optimization, social media marketing, graphic designing, database solutions, cloud & deployment, and security & maintenance.",
  },
  {
    number: "02",
    category: "WEBSITES",
    question: "Can you build a website according to our business requirements?",
    answer:
      "Yes. We build websites around the specific goals, requirements, branding, and needs of each business. The design and development approach can be customized based on the project.",
  },
  {
    number: "03",
    category: "APPLICATIONS",
    question: "Do you develop custom web applications?",
    answer:
      "Yes. We develop custom web applications such as business platforms, admin dashboards, management systems, and other web-based solutions based on project requirements.",
  },
  {
    number: "04",
    category: "DESIGN",
    question: "Do you provide UI / UX design services?",
    answer:
      "Yes. Our UI / UX services include website interfaces, web application interfaces, design systems, and user experience design focused on creating clean and practical digital experiences.",
  },
  {
    number: "05",
    category: "MARKETING",
    question: "Do you provide SEO and digital marketing services?",
    answer:
      "Yes. Our services include SEO optimization and social media marketing, including on-page SEO, technical SEO, keyword optimization, performance optimization, social media strategy, content planning, and campaign management.",
  },
  {
    number: "06",
    category: "PROJECTS",
    question: "How can I start a project with CodeGenZ Solutions?",
    answer:
      "You can contact us with your project requirements, goals, and ideas. Our team can then understand your needs and discuss the suitable approach for your project.",
  },
];

const HomeFaq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="home-faq"
      className="relative overflow-hidden bg-white py-20 font-['Roboto',sans-serif] sm:py-24 lg:py-28"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Soft ambient glow */}
        <div className="absolute left-[-180px] top-[25%] h-[360px] w-[360px] rounded-full bg-[#1769C2]/[0.045] blur-[120px]" />

        <div className="absolute bottom-[-150px] right-[-100px] h-[320px] w-[320px] rounded-full bg-[#1769C2]/[0.035] blur-[110px]" />

        {/* Architectural vertical lines */}
        <div className="absolute left-[6%] top-0 h-full w-px bg-[#071A2D]/[0.035]" />

        <div className="absolute right-[6%] top-0 h-full w-px bg-[#071A2D]/[0.025]" />

      </div>

      {/* =========================================================
          CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-[1420px] px-5 sm:px-8 lg:px-10">

        {/* =======================================================
            HEADER
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
          className="mb-14"
        >

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <span className="relative flex h-2 w-2 items-center justify-center">

                <motion.span
                  animate={{
                    scale: [1, 1.7, 1],
                    opacity: [0.45, 0, 0.45],
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
                FREQUENTLY ASKED
              </span>

            </div>

            <span className="hidden text-[8px] tracking-[0.25em] text-slate-300 sm:block">
              CODEGENZ / FAQ
            </span>

          </div>

        </motion.div>

        {/* =======================================================
            INTRO
        ======================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">

          {/* Left heading */}
          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            <p className="mb-5 text-[8px] font-medium tracking-[0.25em] text-slate-400">
              QUESTIONS / ANSWERS
            </p>

            <h2 className="max-w-[600px] text-[clamp(3rem,5.5vw,6rem)] font-medium leading-[0.9] tracking-[-0.07em] text-[#071A2D]">

              Questions.

              <br />

              <span className="text-slate-300">
                Clear answers.
              </span>

            </h2>

          </motion.div>

          {/* Right intro */}
          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="flex flex-col items-start justify-between gap-6 lg:items-end"
          >

            <p className="max-w-[510px] text-[13px] leading-7 text-slate-500 sm:text-[14px] sm:leading-8 lg:text-right">
              Find answers to common questions about our services, websites,
              applications, UI / UX, digital marketing, and starting a project
              with CodeGenZ Solutions.
            </p>

            <Link
              to="/faq"
              className="group inline-flex items-center gap-3 border-b border-slate-300 pb-2 text-[8px] font-semibold tracking-[0.2em] text-[#071A2D] transition-all duration-300 hover:border-[#1769C2] hover:text-[#1769C2]"
            >
              VIEW COMPLETE FAQ

              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

          </motion.div>

        </div>

        {/* =========================================================
            MAIN FAQ AREA
        ========================================================== */}

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

          {/* =====================================================
              LEFT — INFORMATION PANEL
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >

            <div className="sticky top-28">

              {/* Premium dark panel */}
              <div className="relative overflow-hidden bg-[#071827] p-7 sm:p-8">

                {/* Accent line */}
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: "45%",
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="absolute left-0 top-0 h-[2px] bg-[#579FFF]"
                />

                {/* Small label */}
                <div className="flex items-center justify-between">

                  <span className="text-[8px] font-semibold tracking-[0.25em] text-[#579FFF]">
                    NEED HELP?
                  </span>

                  <span className="text-[7px] tracking-[0.2em] text-white/20">
                    06 QUESTIONS
                  </span>

                </div>

                {/* Icon */}
                <div className="mt-10 flex h-12 w-12 items-center justify-center border border-[#579FFF]/20 bg-[#1769C2]/10 text-[#579FFF]">

                  <HelpCircle
                    size={22}
                    strokeWidth={1.4}
                  />

                </div>

                <h3 className="mt-7 max-w-[300px] text-2xl font-medium leading-[1.05] tracking-[-0.04em] text-white sm:text-3xl">

                  Not sure where
                  <br />

                  <span className="text-white/35">
                    to start?
                  </span>

                </h3>

                <p className="mt-5 max-w-[330px] text-[11px] leading-6 text-white/35 sm:text-xs sm:leading-7">
                  Tell us what you are trying to build. We can understand your
                  requirements and discuss the right approach for your project.
                </p>

                {/* CTA */}
                <Link
                  to="/contact"
                  className="group mt-7 inline-flex items-center gap-3 bg-white px-5 py-3 text-[8px] font-semibold tracking-[0.18em] text-[#071827] transition-all duration-300 hover:bg-[#579FFF] hover:text-white"
                >
                  TALK TO OUR TEAM

                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                </Link>

                {/* Bottom information */}
                <div className="mt-8 border-t border-white/[0.08] pt-6">

                  <div className="flex items-center gap-2">

                    <Check
                      size={11}
                      className="text-[#579FFF]"
                    />

                    <span className="text-[8px] tracking-[0.12em] text-white/30">
                      CUSTOM SOLUTIONS
                    </span>

                  </div>

                  <div className="mt-3 flex items-center gap-2">

                    <Check
                      size={11}
                      className="text-[#579FFF]"
                    />

                    <span className="text-[8px] tracking-[0.12em] text-white/30">
                      BUSINESS-FOCUSED
                    </span>

                  </div>

                  <div className="mt-3 flex items-center gap-2">

                    <Check
                      size={11}
                      className="text-[#579FFF]"
                    />

                    <span className="text-[8px] tracking-[0.12em] text-white/30">
                      PRACTICAL APPROACH
                    </span>

                  </div>

                </div>

                {/* Decorative code */}
                <div className="absolute bottom-4 right-5 select-none text-[42px] font-semibold tracking-[-0.08em] text-white/[0.025]">
                  FAQ
                </div>

              </div>

              {/* Small metadata */}
              <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">

                <span className="text-[7px] tracking-[0.2em] text-slate-400">
                  CODEGENZ SOLUTIONS
                </span>

                <span className="text-[7px] tracking-[0.2em] text-[#1769C2]">
                  2026
                </span>

              </div>

            </div>

          </motion.div>

          {/* =====================================================
              RIGHT — FAQ LIST
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.75,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >

            <div className="border-t border-slate-200">

              {faqs.map((faq, index) => {

                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={faq.number}
                    initial={{
                      opacity: 0,
                      y: 15,
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
                    className="relative border-b border-slate-200"
                  >

                    {/* Active accent */}
                    <motion.div
                      animate={{
                        height: isOpen ? "55%" : "0%",
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="absolute left-0 top-1/2 w-[2px] -translate-y-1/2 bg-[#1769C2]"
                    />

                    {/* Question */}
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="group flex w-full items-center gap-4 py-6 pl-4 text-left sm:gap-6 sm:py-7 sm:pl-5"
                    >

                      {/* Number */}
                      <span
                        className={`w-7 shrink-0 text-[9px] font-semibold tracking-[0.12em] transition-colors duration-300 ${
                          isOpen
                            ? "text-[#1769C2]"
                            : "text-slate-300 group-hover:text-[#1769C2]"
                        }`}
                      >
                        {faq.number}
                      </span>

                      {/* Main */}
                      <div className="min-w-0 flex-1">

                        <div className="mb-2 flex items-center gap-3">

                          <span
                            className={`text-[7px] font-medium tracking-[0.2em] transition-colors duration-300 ${
                              isOpen
                                ? "text-[#1769C2]"
                                : "text-slate-300"
                            }`}
                          >
                            {faq.category}
                          </span>

                        </div>

                        <span
                          className={`block pr-3 text-[15px] font-medium leading-6 tracking-[-0.015em] transition-colors duration-300 sm:text-[17px] ${
                            isOpen
                              ? "text-[#1769C2]"
                              : "text-[#071A2D] group-hover:text-[#1769C2]"
                          }`}
                        >
                          {faq.question}
                        </span>

                      </div>

                      {/* Toggle */}
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center border transition-all duration-300 ${
                          isOpen
                            ? "border-[#1769C2] bg-[#1769C2] text-white"
                            : "border-slate-200 text-slate-400 group-hover:border-[#1769C2] group-hover:text-[#1769C2]"
                        }`}
                      >

                        <ChevronDown
                          size={15}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />

                      </span>

                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>

                      {isOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >

                          <div className="pb-7 pl-[59px] pr-10 sm:pl-[64px] sm:pr-16">

                            <div className="border-l border-[#1769C2]/20 pl-5">

                              <p className="max-w-[700px] text-[12px] leading-7 text-slate-500 sm:text-[13px] sm:leading-7">
                                {faq.answer}
                              </p>

                            </div>

                          </div>

                        </motion.div>
                      )}

                    </AnimatePresence>

                  </motion.div>
                );
              })}

            </div>

            {/* FAQ footer */}
            <div className="mt-7 flex items-center justify-between">

              <span className="text-[7px] tracking-[0.22em] text-slate-300">
                01 — 06
              </span>

              <span className="h-px flex-1 bg-slate-200 mx-5" />

              <span className="text-[7px] tracking-[0.2em] text-slate-400">
                QUESTIONS & ANSWERS
              </span>

            </div>

          </motion.div>

        </div>

        {/* =======================================================
            BOTTOM CTA
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
          className="mt-16 border-t border-slate-200 pt-7 sm:mt-20"
        >

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

            <div>

              <p className="text-[11px] font-medium text-[#071A2D] sm:text-xs">
                Still have questions?
              </p>

              <p className="mt-1 text-[10px] text-slate-400 sm:text-[11px]">
                Explore the complete FAQ section for more information.
              </p>

            </div>

            <Link
              to="/faq"
              className="group inline-flex items-center gap-3 text-[8px] font-semibold tracking-[0.2em] text-[#071A2D] transition-colors duration-300 hover:text-[#1769C2]"
            >
              EXPLORE ALL QUESTIONS

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

export default HomeFaq;