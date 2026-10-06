import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Plus,
  Minus,
  MessageCircleQuestion,
  Mail,
} from "lucide-react";

const faqCategories = [
  "All",
  "General",
  "Services",
  "Pricing",
  "Projects",
];

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

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openId, setOpenId] = useState(null);

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  const toggleFaq = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white text-[#061525]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-48 top-0 h-[650px] w-[650px] rounded-full border border-slate-100" />
        <div className="absolute -right-20 top-40 h-[400px] w-[400px] rounded-full border border-slate-100" />

        <div className="absolute -bottom-60 -left-48 h-[600px] w-[600px] rounded-full bg-slate-50" />
      </div>

      {/* Hero */}
      <div className="relative mx-auto max-w-[1680px] px-6 pb-20 pt-32 lg:px-12 lg:pt-40">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.65fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              <span className="h-px w-10 bg-[#061525]" />
              Frequently Asked Questions
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.03] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Questions?
              <br />
              <span className="text-slate-400">We have answers.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              Find answers to common questions about our services, projects,
              pricing, and the way we work.
            </p>
          </motion.div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="relative mx-auto max-w-[1680px] px-6 pb-28 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr]">
          {/* Category Navigation */}
          <div>
            <div className="sticky top-28">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Browse By
              </p>

              <div className="flex flex-wrap gap-2 lg:flex-col lg:items-start">
                {faqCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setActiveCategory(category);
                      setOpenId(null);
                    }}
                    className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-300 lg:rounded-none lg:px-0 lg:py-2 lg:text-left ${
                      activeCategory === category
                        ? "bg-[#061525] text-white lg:bg-transparent lg:text-[#061525]"
                        : "bg-slate-50 text-slate-500 hover:text-[#061525] lg:bg-transparent"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Small Help Box */}
              <div className="mt-10 hidden rounded-[24px] bg-slate-50 p-6 lg:block">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#061525] text-white">
                  <MessageCircleQuestion size={18} />
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  Still have questions?
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Our team can help you understand the right solution for your
                  project.
                </p>

                <a
                  href="#contact"
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  Talk to us
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Questions */}
          <div>
            <div className="border-t border-slate-200">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openId === faq.id;

                return (
                  <motion.div
                    key={faq.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.04,
                    }}
                    className="border-b border-slate-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="flex w-full items-center justify-between gap-8 py-7 text-left"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-5">
                        <span className="mt-1 text-xs font-bold tracking-[0.15em] text-slate-300">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-lg font-semibold leading-7 sm:text-xl">
                          {faq.question}
                        </span>
                      </div>

                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "bg-[#061525] text-white"
                            : "bg-slate-100 text-[#061525]"
                        }`}
                      >
                        {isOpen ? (
                          <Minus size={17} />
                        ) : (
                          <Plus size={17} />
                        )}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-7 pl-10 pr-14 sm:pl-[60px]">
                            <p className="max-w-3xl text-sm leading-7 text-slate-500">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-slate-500">
                  No questions available in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="relative overflow-hidden bg-[#061525] text-white">
        <div className="pointer-events-none absolute -right-40 -top-48 h-[500px] w-[500px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-10 -top-20 h-[300px] w-[300px] rounded-full border border-white/10" />

        <div className="relative mx-auto flex max-w-[1680px] flex-col justify-between gap-10 px-6 py-20 lg:flex-row lg:items-center lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Need More Information?
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
              Let&apos;s discuss your project directly.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              Tell us what you are planning to build and our team can help you
              understand the next steps.
            </p>
          </div>

          <a
            href="mailto:info@codegenzsolutions.com?subject=Project%20Enquiry"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#061525] transition-colors hover:bg-slate-200"
          >
            <Mail size={16} />
            Contact Us

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#061525] text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={14} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;