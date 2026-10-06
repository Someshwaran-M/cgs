import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    number: "01",
    question: "What services does CodeGenZ Solutions provide?",
    answer:
      "CodeGenZ Solutions provides website designing and development, UI / UX design, web application development, SEO optimization, social media marketing, graphic designing, database solutions, cloud & deployment, and security & maintenance.",
  },
  {
    number: "02",
    question: "Can you build a website according to our business requirements?",
    answer:
      "Yes. We build websites around the specific goals, requirements, branding, and needs of each business. The design and development approach can be customized based on the project.",
  },
  {
    number: "03",
    question: "Do you develop custom web applications?",
    answer:
      "Yes. We develop custom web applications such as business platforms, admin dashboards, management systems, and other web-based solutions based on project requirements.",
  },
  {
    number: "04",
    question: "Do you provide UI / UX design services?",
    answer:
      "Yes. Our UI / UX services include website interfaces, web application interfaces, design systems, and user experience design focused on creating clean and practical digital experiences.",
  },
  {
    number: "05",
    question: "Do you provide SEO and digital marketing services?",
    answer:
      "Yes. Our services include SEO optimization and social media marketing, including on-page SEO, technical SEO, keyword optimization, performance optimization, social media strategy, content planning, and campaign management.",
  },
  {
    number: "06",
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
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[20%] h-[280px] w-[280px] rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute bottom-[-120px] right-[-100px] h-[320px] w-[320px] rounded-full bg-slate-100 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.025]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#1769C2 1px, transparent 1px), linear-gradient(90deg, #1769C2 1px, transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1769C2]" />

              <span className="text-xs font-bold tracking-[0.28em] text-[#1769C2]">
                FAQ
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              Questions,
              <br />
              <span className="text-slate-400">answered clearly.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-between gap-7 lg:items-end"
          >
            <p className="max-w-xl text-base leading-8 text-slate-600 lg:text-right">
              Find quick answers to some of the common questions about our
              services, projects, development process, and working with
              CodeGenZ Solutions.
            </p>

            <Link
              to="/faq"
              className="group inline-flex w-fit items-center gap-3 border-b border-slate-300 pb-2 text-sm font-bold tracking-[0.12em] text-slate-900 transition-colors duration-300 hover:border-[#1769C2] hover:text-[#1769C2]"
            >
              VIEW ALL FAQ
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* FAQ Content */}
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.45fr] lg:gap-20">
          {/* Left Information */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="sticky top-28">
              <div className="relative overflow-hidden border border-slate-200 bg-slate-950 p-7 sm:p-8">
                {/* Decorative Element */}
                <div className="absolute right-[-45px] top-[-45px] h-32 w-32 rounded-full border border-blue-400/20" />
                <div className="absolute right-[-20px] top-[-20px] h-20 w-20 rounded-full border border-blue-400/20" />

                <div className="relative">
                  <div className="mb-7 flex h-14 w-14 items-center justify-center border border-blue-400/30 bg-blue-500/10">
                    <HelpCircle
                      size={27}
                      strokeWidth={1.5}
                      className="text-blue-400"
                    />
                  </div>

                  <p className="mb-3 text-xs font-bold tracking-[0.2em] text-blue-400">
                    NEED MORE HELP?
                  </p>

                  <h3 className="mb-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
                    Let&apos;s talk about your project.
                  </h3>

                  <p className="mb-8 text-sm leading-7 text-slate-400">
                    If you cannot find the answer you are looking for, our team
                    is ready to understand your requirements and help you find
                    the right solution.
                  </p>

                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-3 bg-white px-5 py-3.5 text-xs font-bold tracking-[0.12em] text-slate-950 transition-all duration-300 hover:bg-[#1769C2] hover:text-white"
                  >
                    CONTACT US
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Questions */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="border-t border-slate-200"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.number}
                  className="border-b border-slate-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="group flex w-full items-center gap-5 py-6 text-left sm:py-7"
                  >
                    {/* Number */}
                    <span
                      className={`min-w-[32px] text-xs font-bold tracking-[0.12em] transition-colors duration-300 ${
                        isOpen ? "text-[#1769C2]" : "text-slate-400"
                      }`}
                    >
                      {faq.number}
                    </span>

                    {/* Question */}
                    <span
                      className={`flex-1 pr-4 text-base font-bold transition-colors duration-300 sm:text-lg ${
                        isOpen
                          ? "text-[#1769C2]"
                          : "text-slate-900 group-hover:text-[#1769C2]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Icon */}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center border transition-all duration-300 ${
                        isOpen
                          ? "border-[#1769C2] bg-[#1769C2] text-white"
                          : "border-slate-200 bg-white text-slate-500 group-hover:border-[#1769C2] group-hover:text-[#1769C2]"
                      }`}
                    >
                      <ChevronDown
                        size={17}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7 pl-[52px] pr-12 sm:pl-[52px] sm:pr-16">
                          <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-[15px]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-slate-200 pt-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="mb-1 text-sm font-bold text-slate-900">
              Still have questions?
            </p>

            <p className="text-sm text-slate-500">
              Explore the complete FAQ section for more information.
            </p>
          </div>

          <Link
            to="/faq"
            className="group inline-flex items-center gap-3 text-sm font-bold tracking-[0.1em] text-slate-900 transition-colors duration-300 hover:text-[#1769C2]"
          >
            EXPLORE ALL QUESTIONS
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeFaq;