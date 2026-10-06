import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Client Name",
    role: "Business Owner",
    company: "Business / Company",
    initials: "CN",
    quote:
      "CodeGenZ Solutions understood our requirements and transformed our idea into a professional digital experience. The communication and attention to detail throughout the project were excellent.",
    tags: ["Website", "Design", "Development"],
  },
  {
    id: 2,
    name: "Client Name",
    role: "Founder",
    company: "Startup",
    initials: "CN",
    quote:
      "The team created a clean and modern solution that represented our brand exactly the way we wanted. They were responsive, creative, and focused on delivering a quality result.",
    tags: ["Branding", "UI/UX", "Web Development"],
  },
  {
    id: 3,
    name: "Client Name",
    role: "Business Manager",
    company: "Organization",
    initials: "CN",
    quote:
      "We were impressed with the professionalism and technical approach of the CodeGenZ team. The final product was simple to use, visually strong, and aligned with our business requirements.",
    tags: ["Web Application", "Technology"],
  },
  {
    id: 4,
    name: "Client Name",
    role: "Entrepreneur",
    company: "Growing Business",
    initials: "CN",
    quote:
      "From the initial discussion to the final delivery, the team maintained a clear understanding of our goals. The result gave our business a much stronger digital presence.",
    tags: ["Website", "Digital Presence"],
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const activeTestimonial = testimonials[activeIndex];

  const previousTestimonial = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const nextTestimonial = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white text-[#061525]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-48 top-10 h-[600px] w-[600px] rounded-full border border-slate-100" />
        <div className="absolute -left-20 top-40 h-[400px] w-[400px] rounded-full border border-slate-100" />

        <div className="absolute -bottom-52 -right-44 h-[600px] w-[600px] rounded-full bg-slate-50" />
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
              Testimonials
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.03] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Words from
              <br />
              <span className="text-slate-400">our clients.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-xl text-lg leading-8 text-slate-600"
          >
            Every project starts with an idea. We value the relationships we
            build while turning those ideas into meaningful digital products.
          </motion.p>
        </div>
      </div>

      {/* Featured Testimonial */}
      <div className="relative mx-auto max-w-[1680px] px-6 pb-28 lg:px-12">
        <motion.div
          layout
          className="relative overflow-hidden rounded-[32px] bg-[#061525] text-white"
        >
          {/* Decorative rings */}
          <div className="pointer-events-none absolute -right-32 -top-40 h-[600px] w-[600px] rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-4 -top-12 h-[430px] w-[430px] rounded-full border border-white/10" />

          <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[0.7fr_1.3fr] lg:p-16">
            {/* Left */}
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <Quote size={24} strokeWidth={1.5} />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Client Experience
              </p>

              <div className="mt-5 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    fill="currentColor"
                    className="text-white"
                  />
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <blockquote className="max-w-4xl text-2xl font-medium leading-[1.45] tracking-tight sm:text-3xl lg:text-4xl">
                “{activeTestimonial.quote}”
              </blockquote>

              <div className="mt-10 flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-bold text-[#061525]">
                    {activeTestimonial.initials}
                  </div>

                  <div>
                    <p className="font-semibold">
                      {activeTestimonial.name}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {activeTestimonial.role} · {activeTestimonial.company}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  {activeTestimonial.tags.map((tag) => (
                    <span
                      key={tag}
                      className="hidden rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-medium text-slate-400 sm:block"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Controls */}
          <div className="relative flex items-center justify-between border-t border-white/10 px-8 py-5 sm:px-12 lg:px-16">
            <div className="flex gap-1.5">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-10 bg-white"
                      : "w-4 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={previousTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:bg-white hover:text-[#061525]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={nextTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:bg-white hover:text-[#061525]"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* All Testimonials */}
      <div className="relative mx-auto max-w-[1680px] px-6 pb-28 lg:px-12">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            Client Stories
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            More experiences.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              className="group rounded-[28px] border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-[#061525] hover:shadow-xl hover:shadow-slate-200/40 sm:p-9"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 transition-colors group-hover:bg-[#061525] group-hover:text-white">
                  <Quote size={18} />
                </div>

                <div className="flex gap-0.5 text-[#061525]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={12}
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>

              <p className="mt-7 text-lg leading-8 text-slate-600">
                “{testimonial.quote}”
              </p>

              <div className="mt-8 flex items-center justify-between gap-5 border-t border-slate-100 pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#061525] text-xs font-bold text-white">
                    {testimonial.initials}
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      {testimonial.name}
                    </p>

                    <p className="mt-0.5 text-xs text-slate-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedTestimonial(testimonial)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 transition-all group-hover:bg-[#061525] group-hover:text-white"
                  aria-label={`View ${testimonial.name}'s testimonial`}
                >
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative border-t border-slate-100 bg-slate-50">
        <div className="mx-auto flex max-w-[1680px] flex-col justify-between gap-8 px-6 py-20 lg:flex-row lg:items-center lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Start a Project
            </p>

            <h3 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight">
              Let&apos;s create an experience worth talking about.
            </h3>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-sm font-semibold"
          >
            Talk to our team

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#061525] text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={17} />
            </span>
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedTestimonial && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#061525]/80 p-6 backdrop-blur-md"
          onClick={() => setSelectedTestimonial(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-2xl rounded-[30px] bg-white p-8 sm:p-10"
          >
            <button
              type="button"
              onClick={() => setSelectedTestimonial(null)}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-[#061525] hover:text-white"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#061525] text-white">
              <Quote size={20} />
            </div>

            <div className="mt-6 flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={15}
                  fill="currentColor"
                />
              ))}
            </div>

            <blockquote className="mt-6 pr-8 text-2xl font-medium leading-relaxed">
              “{selectedTestimonial.quote}”
            </blockquote>

            <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#061525] text-sm font-bold text-white">
                {selectedTestimonial.initials}
              </div>

              <div>
                <p className="font-semibold">
                  {selectedTestimonial.name}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  {selectedTestimonial.role} ·{" "}
                  {selectedTestimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;