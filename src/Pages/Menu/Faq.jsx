import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Plus,
  Minus,
  MessageCircleQuestion,
  Mail,
  HelpCircle,
  Sparkles,
} from "lucide-react";

/* =========================================================
   FAQ CATEGORIES
========================================================= */

const faqCategories = [
  "All",
  "General",
  "Services",
  "Pricing",
  "Projects",
];

/* =========================================================
   FAQ DATA
========================================================= */

const faqs = [
  {
    id: 1,
    category: "General",
    question: "What does CodeGenZ Solutions do?",
    answer:
      "CodeGenZ Solutions provides digital services including website development, web application development, UI/UX design, SEO, digital marketing, and graphic design. We create solutions based on each client's business requirements.",
  },
  {
    id: 2,
    category: "General",
    question: "What types of businesses do you work with?",
    answer:
      "We work with startups, small businesses, growing companies, entrepreneurs, organizations, and individuals who need professional digital solutions.",
  },
  {
    id: 3,
    category: "Services",
    question: "What services do you offer?",
    answer:
      "Our services include website designing and development, UI/UX design, web application development, SEO optimization, social media marketing, graphic designing, database solutions, cloud deployment, and maintenance.",
  },
  {
    id: 4,
    category: "Services",
    question: "Can you build a custom web application?",
    answer:
      "Yes. We can build custom web applications based on your workflow and business requirements, including authentication, dashboards, APIs, database integration, admin panels, and third-party integrations.",
  },
  {
    id: 5,
    category: "Services",
    question: "Do you provide website redesign services?",
    answer:
      "Yes. We can redesign an existing website to improve its visual design, user experience, responsiveness, performance, structure, and overall digital presence.",
  },
  {
    id: 6,
    category: "Projects",
    question: "How does a project usually begin?",
    answer:
      "Projects generally begin with a discussion about your goals, requirements, target audience, preferred features, timeline, and budget. We then define the project scope and development approach.",
  },
  {
    id: 7,
    category: "Projects",
    question: "How long does a website take to build?",
    answer:
      "The timeline depends on the number of pages, design complexity, functionality, content, integrations, and feedback cycles. A final timeline can be provided after understanding the project scope.",
  },
  {
    id: 8,
    category: "Projects",
    question: "Can you maintain the website after launch?",
    answer:
      "Yes. We can provide ongoing maintenance, updates, technical support, performance improvements, security updates, and feature enhancements depending on the project requirements.",
  },
  {
    id: 9,
    category: "Pricing",
    question: "How much does a website cost?",
    answer:
      "Website pricing depends on the design, number of pages, features, integrations, content requirements, and technical complexity. We provide project-specific pricing after understanding your requirements.",
  },
  {
    id: 10,
    category: "Pricing",
    question: "Do you have fixed pricing plans?",
    answer:
      "We offer starting packages for common project types, but final pricing is customized according to the actual project scope and requirements.",
  },
  {
    id: 11,
    category: "Pricing",
    question: "Can I request a custom package?",
    answer:
      "Yes. If your project does not fit into a standard package, we can create a custom solution based on your required features, technology, timeline, and budget.",
  },
  {
    id: 12,
    category: "General",
    question: "Do you work remotely?",
    answer:
      "Yes. Project discussions, communication, design reviews, development updates, and delivery can be handled remotely.",
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
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

/* =========================================================
   FAQ COMPONENT
========================================================= */

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openId, setOpenId] = useState(null);

  /* =========================================================
     FILTER
  ========================================================= */

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter(
          (faq) => faq.category === activeCategory
        );

  /* =========================================================
     TOGGLE
  ========================================================= */

  const toggleFaq = (id) => {
    setOpenId((current) =>
      current === id ? null : id
    );
  };

  /* =========================================================
     CATEGORY COUNTS
  ========================================================= */

  const getCategoryCount = (category) => {
    if (category === "All") {
      return faqs.length;
    }

    return faqs.filter(
      (faq) => faq.category === category
    ).length;
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#f7f8fa] text-[#061525]"
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <div className="mx-auto max-w-[1500px] px-6 pb-14 pt-32 sm:px-8 lg:px-12 lg:pb-20 lg:pt-40">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[32px] bg-[#061525] text-white"
        >
          {/* Decorative circles */}

          <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/[0.07]" />

          <div className="pointer-events-none absolute -right-4 top-20 h-[260px] w-[260px] rounded-full border border-white/[0.05]" />

          <div className="pointer-events-none absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-cyan-400/[0.04] blur-3xl" />

          <div className="relative grid gap-12 p-7 sm:p-10 lg:grid-cols-[1fr_0.42fr] lg:p-14 xl:p-16">
            {/* Left */}

            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10">
                  <HelpCircle
                    size={16}
                    className="text-cyan-200"
                  />
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-200/70">
                  Frequently Asked Questions
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                Everything you need
                <br />

                <span className="text-white/30">
                  to know before we start.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                Find quick answers about our services,
                pricing, development process, projects and
                ongoing support.
              </p>
            </div>

            {/* Right information card */}

            <div className="flex items-end lg:justify-end">
              <div className="w-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm lg:max-w-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                    Knowledge Base
                  </span>

                  <Sparkles
                    size={15}
                    className="text-cyan-300"
                  />
                </div>

                <div className="mt-7 flex items-end gap-3">
                  <span className="text-4xl font-semibold">
                    {faqs.length}
                  </span>

                  <span className="mb-1 text-xs text-white/40">
                    answered questions
                  </span>
                </div>

                <div className="mt-6 h-px bg-white/10" />

                <p className="mt-5 text-xs leading-6 text-white/40">
                  Can't find the answer you're looking for?
                  Our team is happy to discuss your project
                  directly.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          CATEGORY SELECTOR
      ====================================================== */}

      <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                Browse Questions
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Find what you need
              </h2>
            </div>

            <span className="hidden text-xs text-slate-400 sm:block">
              {String(filteredFaqs.length).padStart(
                2,
                "0"
              )}{" "}
              questions
            </span>
          </div>

          {/* Category Cards */}

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {faqCategories.map((category, index) => {
              const isActive =
                activeCategory === category;

              const count =
                getCategoryCount(category);

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setOpenId(null);
                  }}
                  className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 ${
                    isActive
                      ? "border-[#061525] bg-[#061525] text-white shadow-lg shadow-[#061525]/10"
                      : "border-slate-200 bg-white text-[#061525] hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-lg text-[10px] font-semibold ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <span
                      className={`text-[10px] ${
                        isActive
                          ? "text-white/40"
                          : "text-slate-300"
                      }`}
                    >
                      {String(count).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-5 text-xs font-semibold">
                    {category}
                  </p>

                  <span
                    className={`absolute bottom-0 left-0 h-0.5 transition-all duration-500 ${
                      isActive
                        ? "w-full bg-cyan-300"
                        : "w-0 bg-[#061525] group-hover:w-full"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          FAQ CONTENT
      ====================================================== */}

      <div className="mx-auto max-w-[1500px] px-6 pb-24 pt-8 sm:px-8 lg:px-12 lg:pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.3,
            }}
            className="grid gap-5 lg:grid-cols-2"
          >
            {filteredFaqs.map((faq, index) => {
              const isOpen = openId === faq.id;

              return (
                <motion.article
                  layout
                  key={faq.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  className={`group relative overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-[#061525]/20 shadow-[0_18px_50px_rgba(6,21,37,0.08)]"
                      : "border-slate-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_12px_35px_rgba(6,21,37,0.06)]"
                  }`}
                >
                  {/* Active accent */}

                  <div
                    className={`absolute left-0 top-0 h-full w-1 transition-all duration-300 ${
                      isOpen
                        ? "bg-cyan-400"
                        : "bg-transparent group-hover:bg-slate-200"
                    }`}
                  />

                  {/* Question */}

                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="flex w-full items-start gap-4 p-5 text-left sm:p-6"
                    aria-expanded={isOpen}
                  >
                    {/* Number */}

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[10px] font-semibold transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#061525] text-white"
                          : "bg-slate-100 text-slate-400 group-hover:bg-[#061525] group-hover:text-white"
                      }`}
                    >
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    {/* Text */}

                    <span className="min-w-0 flex-1">
                      <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                        {faq.category}
                      </span>

                      <span className="block pr-2 text-sm font-semibold leading-6 text-[#061525] sm:text-base">
                        {faq.question}
                      </span>
                    </span>

                    {/* Toggle */}

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-[#061525] text-white"
                          : "bg-slate-100 text-[#061525] group-hover:bg-slate-200"
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={15} />
                      ) : (
                        <Plus size={15} />
                      )}
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
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-7">
                          <div className="ml-[52px] border-t border-slate-100 pt-5">
                            <p className="text-sm leading-7 text-slate-500">
                              {faq.answer}
                            </p>

                            <div className="mt-5 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                              CodeGenZ Solutions
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Empty */}

        {filteredFaqs.length === 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white py-20 text-center">
            <p className="text-sm text-slate-500">
              No questions available in this category.
            </p>
          </div>
        )}
      </div>

      {/* =====================================================
          CONTACT CTA
      ====================================================== */}

      <section className="bg-[#061525] text-white">
        <div className="mx-auto max-w-[1500px] px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
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
            transition={{
              duration: 0.65,
            }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-10 lg:p-12"
          >
            {/* Decorative circles */}

            <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full border border-white/[0.06]" />

            <div className="pointer-events-none absolute -right-4 top-20 h-44 w-44 rounded-full border border-white/[0.05]" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300/10">
                    <MessageCircleQuestion
                      size={15}
                      className="text-cyan-200"
                    />
                  </span>

                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
                    Still need help?
                  </span>
                </div>

                <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.025em] sm:text-4xl">
                  Let's talk about your
                  <span className="text-white/30">
                    {" "}
                    project.
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/40">
                  Tell us what you are planning to build and
                  we'll help you understand the best next step.
                </p>
              </div>

              <a
                href="mailto:info@codegenzsolutions.com?subject=Project%20Enquiry"
                className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-[#061525] transition-all duration-300 hover:scale-105"
              >
                <Mail size={15} />

                Contact Us

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#061525] text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={13} />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default Faq;