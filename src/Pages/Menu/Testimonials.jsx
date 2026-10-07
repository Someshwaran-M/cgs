import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Star,
  MapPin,
  ExternalLink,
  Quote,
  Sparkles,
} from "lucide-react";

/* =========================================================
   GOOGLE REVIEW LINK
========================================================= */

const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=codegenz+solutions#lrd=0x3babd5c76ca22ec7:0xb1dcf11c9cd9a344,1,,,,";

/* =========================================================
   GOOGLE REVIEWS
   Reviews taken from the screenshots provided.
========================================================= */

const googleReviews = [
  {
    id: 1,
    name: "Nagendhiran",
    meta: "3 reviews",
    initials: "N",
    time: "3 months ago",
    review:
      "Their communication was friendly, responsive, and they patiently understood all my requirements before starting the work. The quality, formatting, and overall presentation were outstanding. I truly appreciate their dedication and effort. If anyone is looking for a reliable service for internship reports or academic documentation, I would highly recommend them. Thank you for the amazing support and excellent work!",
    likes: "1",
  },

  {
    id: 2,
    name: "suriyan chinnadurai",
    meta: "2 reviews",
    initials: "SC",
    time: "3 months ago",
    review:
      "I am thoroughly impressed by the excellent visual presentation and user-friendly interface. 🥰 Everything looks fantastic and is so easy to navigate! Great job on this outstanding experience. 🎉👏 👍",
    likes: "",
  },

  {
    id: 3,
    name: "Somesh",
    meta: "3 reviews · 1 photo",
    initials: "S",
    time: "3 months ago",
    review:
      "Excellent service and professional team. They provide quality solutions, complete projects on time, and maintain good communication throughout the process. Highly recommended!",
    likes: "1",
  },

  {
    id: 4,
    name: "Selva Kumar",
    meta: "1 review",
    initials: "SK",
    time: "3 months ago",
    review:
      "Thank you for sharing the website. I have reviewed it from a professional perspective and overall the website has a clean structure and good visual presentation. The design is modern and user-friendly, and the navigation is straightforward.",
    likes: "1",
  },

  {
    id: 5,
    name: "SIBISELVAN P T",
    meta: "3 reviews",
    initials: "SP",
    time: "3 months ago",
    review:
      "I had a great internship experience at CodeGen Solutions. They provide excellent project support and software solutions. The team is friendly, supportive, and always willing to help. It is a great place for learning, especially for freshers, as they offer practical guidance and real-time project experience. Thank you, CodeGen Solutions, for the valuable learning opportunity",
    likes: "",
  },

  {
    id: 6,
    name: "Gowsalya raman",
    meta: "4 reviews",
    initials: "GR",
    time: "3 months ago",
    review:
      "I had a great experience working with CodeGenZ Solutions software company.The entire team was professional,responsive and highly knowledgeable. Communication was excellent throughout the project and questions or concerns were addressed promptly. The software was delivered on time at expected level. I particularly appreciated their attention to transparency, detailed manner of explaining and commitment to customer satisfaction.I would recommend this company to anyone looking for reliable and high quality software development services.",
    likes: "2",
  },

  {
    id: 7,
    name: "Vishal Sekaran",
    meta: "2 reviews · 3 photos",
    initials: "VS",
    time: "3 months ago",
    review:
      "Nice work done... Young energetic and more enthusiastic ppl... Hearty congratulations 🎉 Give a try to them Emerging new eraaa",
    likes: "1",
  },

  {
    id: 8,
    name: "5156_Sudarsanan G",
    meta: "1 review",
    initials: "SG",
    time: "3 months ago",
    review:
      "These guys are awesome and really they provide good services",
    likes: "1",
  },
];

/* =========================================================
   ANIMATION SETTINGS
========================================================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white font-['Roboto'] text-[#061525]"
    >
      {/* =========================================================
          PREMIUM BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large circles */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -left-[280px] top-[80px] h-[650px] w-[650px] rounded-full border border-slate-100"
        />

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 55,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-[300px] top-[120px] h-[700px] w-[700px] rounded-full border border-slate-100"
        />

        <div className="absolute -left-[150px] top-[230px] h-[430px] w-[430px] rounded-full border border-slate-100" />

        <div className="absolute -right-[150px] top-[300px] h-[430px] w-[430px] rounded-full border border-slate-100" />

        {/* Blue glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.025, 0.06, 0.025],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[15%] top-[15%] h-[320px] w-[320px] rounded-full bg-blue-500 blur-[120px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[15%] top-[35%] h-[350px] w-[350px] rounded-full bg-slate-400 blur-[120px]"
        />

        {/* Floating dots */}
        <motion.div
          animate={{
            y: [-12, 12, -12],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[12%] top-[27%] h-1.5 w-1.5 rounded-full bg-slate-400"
        />

        <motion.div
          animate={{
            y: [10, -10, 10],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[17%] top-[30%] h-2 w-2 rounded-full bg-slate-300"
        />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="relative mx-auto max-w-[1500px] px-5 pb-24 pt-32 sm:px-8 lg:px-12 lg:pb-32 lg:pt-40">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.75,
          }}
          className="text-center"
        >
          {/* Label */}
          <div className="mb-7 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#061525]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              Google Reviews
            </span>

            <span className="h-px w-10 bg-[#061525]" />
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-5xl text-[48px] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-[64px] lg:text-[90px]">
            Real experiences.
            <br />

            <span className="text-slate-400">
              Real feedback.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
            Hear directly from people who have experienced CodeGenZ
            Solutions, our services, projects, and support.
          </p>
        </motion.div>

        {/* =====================================================
            GOOGLE SUMMARY
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(6,21,37,0.07)]">
            {/* Decorative top line */}
            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-0 right-0 top-0 h-[2px] origin-left bg-[#061525]"
            />

            <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
              {/* Google Identity */}
              <div className="border-b border-slate-100 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-xl font-bold shadow-sm">
                    <span className="text-[#4285F4]">
                      G
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      CodeGenZ Solutions
                    </p>

                    <p className="mt-1 text-[11px] text-slate-400">
                      Google Business Reviews
                    </p>
                  </div>
                </div>

                <div className="mt-9">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.div
                        key={star}
                        initial={{
                          opacity: 0,
                          scale: 0,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: 0.25 + star * 0.08,
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                        }}
                      >
                        <Star
                          size={21}
                          fill="currentColor"
                          className="text-[#f4b400]"
                        />
                      </motion.div>
                    ))}
                  </div>

                  <p className="mt-4 text-sm text-slate-500">
                    Genuine experiences from our clients,
                    learners, and partners.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="flex items-center gap-2">
                  <Sparkles
                    size={16}
                    className="text-slate-400"
                  />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Client feedback
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                  See what people are saying about us.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
                  Explore our Google reviews and discover genuine
                  feedback about our communication, development,
                  design, support, and project experience.
                </p>

                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 flex w-full items-center justify-between rounded-2xl bg-[#061525] p-2.5 pl-5 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1769c2] hover:shadow-[0_20px_45px_rgba(6,21,37,0.18)] sm:max-w-[360px]"
                >
                  <span className="text-sm font-semibold">
                    View on Google
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#061525] transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            REVIEWS SECTION HEADER
        ===================================================== */}

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
            duration: 0.7,
          }}
          className="mt-28 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              Client Experiences
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              What our clients say.
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-[#34a853]" />

            Genuine Google Reviews
          </div>
        </motion.div>

        {/* =====================================================
            REVIEW GRID
        ===================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {googleReviews.map((review, index) => (
            <motion.article
              key={review.id}
              variants={cardVariants}
              className={`group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-slate-300 hover:shadow-[0_25px_65px_rgba(6,21,37,0.09)] sm:p-7 ${
                index === 0 || index === 5
                  ? "xl:col-span-2"
                  : ""
              }`}
            >
              {/* Animated top border */}
              <motion.div
                initial={{
                  scaleX: 0,
                }}
                whileHover={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="absolute left-0 right-0 top-0 h-[2px] origin-left bg-[#061525]"
              />

              {/* Background glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-slate-100/60 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* Top */}
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: -4,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#061525] text-xs font-bold text-white"
                  >
                    {review.initials}
                  </motion.div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-[#061525]">
                      {review.name}
                    </p>

                    <p className="mt-0.5 text-[11px] text-slate-400">
                      {review.meta}
                    </p>
                  </div>
                </div>

                {/* Google */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-sm font-bold">
                  <span className="text-[#4285F4]">
                    G
                  </span>
                </div>
              </div>

              {/* Stars + time */}
              <div className="relative mt-6 flex items-center justify-between gap-4">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.div
                      key={star}
                      initial={{
                        opacity: 0,
                        scale: 0.5,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.08 + star * 0.035,
                        duration: 0.25,
                      }}
                    >
                      <Star
                        size={14}
                        fill="currentColor"
                        strokeWidth={1.5}
                        className="text-[#f4b400]"
                      />
                    </motion.div>
                  ))}
                </div>

                <span className="text-[10px] text-slate-400">
                  {review.time}
                </span>
              </div>

              {/* Quote */}
              <div className="relative mt-6">
                <div className="absolute -left-1 -top-3 text-4xl font-serif text-slate-100">
                  “
                </div>

                <p className="relative text-[14px] leading-7 text-slate-600 sm:text-[15px]">
                  {review.review}
                </p>
              </div>

              {/* Bottom */}
              <div className="relative mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50">
                    <Quote
                      size={13}
                      className="text-slate-400"
                    />
                  </div>

                  <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400">
                    Google Review
                  </span>
                </div>

                {review.likes && (
                  <span className="text-[11px] text-slate-400">
                    ❤️ {review.likes}
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* =====================================================
            FINAL GOOGLE CTA
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mt-20 overflow-hidden rounded-[30px] bg-[#061525]"
        >
          {/* Animated circles */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full border border-white/10"
          />

          <div className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-blue-500/[0.08] blur-3xl" />

          <div className="relative flex flex-col items-center justify-between gap-8 px-7 py-11 text-center sm:px-10 lg:flex-row lg:px-14 lg:py-12 lg:text-left">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                Worked with CodeGenZ?
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Share your experience
                <br className="hidden sm:block" />
                with us on Google.
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                Your honest feedback helps us improve and helps future
                clients make better decisions.
              </p>
            </div>

            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex shrink-0 items-center gap-4 rounded-full bg-white py-2.5 pl-5 pr-2.5 text-sm font-semibold text-[#061525] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,255,255,0.12)]"
            >
              Write a Google Review

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#061525] text-white transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </div>
        </motion.div>

        {/* =====================================================
            FOOTNOTE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-8 flex items-center justify-center gap-2 text-center"
        >
          <MapPin
            size={13}
            className="text-slate-400"
          />

          <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
            CodeGenZ Solutions · Google Business Reviews
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;