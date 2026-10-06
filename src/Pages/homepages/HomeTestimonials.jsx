import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Quote, Star } from "lucide-react";
import { Link } from "react-router-dom";

const HomeTestimonials = () => {
  const testimonials = [
    {
      number: "01",
      name: "Client Name",
      role: "Business Owner",
      company: "Company Name",
      text: "CodeGenZ Solutions understood our requirements clearly and transformed our ideas into a professional digital experience. The communication and attention to detail throughout the project were excellent.",
    },
    {
      number: "02",
      name: "Client Name",
      role: "Founder",
      company: "Business Name",
      text: "The team was responsive, creative, and easy to work with. They understood what we needed and delivered a clean and modern solution that matched our expectations.",
    },
    {
      number: "03",
      name: "Client Name",
      role: "Business Owner",
      company: "Company Name",
      text: "From the initial discussion to the final delivery, the process was smooth and professional. We appreciated their approach to design, development, and project communication.",
    },
    {
      number: "04",
      name: "Client Name",
      role: "Entrepreneur",
      company: "Business Name",
      text: "CodeGenZ helped us turn our concept into a polished digital presence. Their focus on user experience and visual quality made a strong difference to the final result.",
    },
  ];

  return (
    <section
      id="home-testimonials"
      className="w-full overflow-hidden bg-white px-6 py-24 text-[#102A43] sm:px-8 lg:px-12 xl:px-16 xl:py-32"
    >
      <div className="mx-auto max-w-[1680px]">

        {/* =========================================================
            SECTION HEADER
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
        >
          {/* Left */}

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1769C2]" />

              <span className="text-[9px] font-semibold tracking-[0.3em] text-[#1769C2]">
                TESTIMONIALS
              </span>
            </div>

            <h2 className="max-w-[760px] text-[clamp(38px,5vw,64px)] font-semibold leading-[1.02] tracking-[-0.05em] text-[#0B243D]">
              Words from
              <br />
              <span className="text-[#1769C2]">
                the people we work with.
              </span>
            </h2>
          </div>

          {/* Right */}

          <div className="lg:pb-2">
            <p className="max-w-[520px] text-[13px] leading-7 text-[#718398] lg:ml-auto">
              Every project is a collaboration. We work closely with our
              clients to understand their goals, solve real problems, and
              create digital experiences that deliver value.
            </p>

            <Link
              to="/testimonials"
              className="group mt-6 inline-flex items-center gap-3 text-[9px] font-semibold tracking-[0.2em] text-[#1769C2]"
            >
              VIEW ALL TESTIMONIALS

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowUpRight size={13} />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* =========================================================
            FEATURED TESTIMONIAL
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.15 }}
          className="relative mt-16 overflow-hidden rounded-[28px] bg-[#061525] px-7 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16"
        >
          {/* Background decoration */}

          <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-[#63A9FF]/10" />

          <div className="pointer-events-none absolute -right-16 -top-16 h-[290px] w-[290px] rounded-full border border-[#63A9FF]/10" />

          <div className="pointer-events-none absolute bottom-[-160px] left-[35%] h-[350px] w-[350px] rounded-full bg-[#1769C2]/10 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

            {/* Left */}

            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#63A9FF]/20 bg-white/[0.04] text-[#63A9FF]">
                <Quote size={24} strokeWidth={1.3} />
              </div>

              <p className="mt-8 text-[9px] font-semibold tracking-[0.25em] text-[#63A9FF]">
                FEATURED EXPERIENCE
              </p>

              <div className="mt-5 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={12}
                    fill="currentColor"
                    className="text-[#63A9FF]"
                  />
                ))}
              </div>
            </div>

            {/* Right */}

            <div>
              <blockquote className="text-[clamp(22px,3vw,38px)] font-medium leading-[1.25] tracking-[-0.025em] text-white">
                “
                {testimonials[0].text}
                ”
              </blockquote>

              <div className="mt-9 flex items-center gap-4 border-t border-white/[0.08] pt-6">
                {/* Avatar */}

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1769C2] text-[11px] font-semibold text-white">
                  CN
                </div>

                <div>
                  <p className="text-[11px] font-semibold tracking-[0.05em] text-white">
                    {testimonials[0].name}
                  </p>

                  <p className="mt-1 text-[9px] tracking-[0.08em] text-white/40">
                    {testimonials[0].role} · {testimonials[0].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            SMALL TESTIMONIALS
        ========================================================== */}

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(1).map((testimonial, index) => (
            <motion.article
              key={testimonial.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.15 }}
              className="group border border-[#DCE5ED] bg-[#F7FAFC] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#1769C2]/30 hover:bg-white hover:shadow-[0_20px_50px_rgba(15,65,105,0.07)]"
            >
              {/* Top */}

              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold tracking-[0.18em] text-[#A0AFBD]">
                  {testimonial.number}
                </span>

                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={10}
                      fill="currentColor"
                      className="text-[#1769C2]"
                    />
                  ))}
                </div>
              </div>

              {/* Quote */}

              <div className="mt-7 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#1769C2] shadow-sm">
                <Quote size={15} strokeWidth={1.4} />
              </div>

              <p className="mt-6 text-[12px] leading-7 text-[#60758A]">
                “{testimonial.text}”
              </p>

              {/* Client */}

              <div className="mt-7 border-t border-[#DCE5ED] pt-5">
                <p className="text-[10px] font-semibold tracking-[0.08em] text-[#203B58]">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-[8px] tracking-[0.08em] text-[#8A9AAC]">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =========================================================
            TRUST STATEMENT
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col justify-between gap-6 border-t border-[#DCE5ED] pt-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-[12px] font-semibold text-[#203B58]">
              Your goals come first.
            </p>

            <p className="mt-2 max-w-[650px] text-[11px] leading-6 text-[#8A9AAC]">
              We believe the best digital solutions come from understanding
              the people, businesses, and ideas behind them.
            </p>
          </div>

          <Link
            to="/testimonials"
            className="group inline-flex shrink-0 items-center gap-4 rounded-full border border-[#DCE5ED] px-7 py-4 text-[9px] font-semibold tracking-[0.2em] text-[#1769C2] transition-all duration-300 hover:-translate-y-1 hover:border-[#1769C2] hover:bg-[#1769C2] hover:text-white"
          >
            READ MORE STORIES

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowUpRight size={13} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeTestimonials;