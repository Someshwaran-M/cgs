import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Star,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

/* =========================================================
   GOOGLE REVIEW LINK
========================================================= */

const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=codegenz+solutions#lrd=0x3babd5c76ca22ec7:0xb1dcf11c9cd9a344,1,,,,";

/* =========================================================
   HOME TESTIMONIAL / GOOGLE REVIEW SECTION
========================================================= */

const HomeTestimonials = () => {
  return (
    <section
      id="home-testimonials"
      className="relative w-full overflow-hidden bg-white px-6 py-20 text-[#102A43] sm:px-8 lg:px-12 xl:px-16 xl:py-28"
    >
      {/* =====================================================
          PREMIUM BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large rotating ring */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -left-[300px] top-[80px] h-[620px] w-[620px] rounded-full border border-[#DCE5ED]/70"
        />

        {/* Right rotating ring */}
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-[300px] top-[100px] h-[650px] w-[650px] rounded-full border border-[#DCE5ED]/60"
        />

        {/* Inner rings */}
        <div className="absolute -left-[140px] top-[210px] h-[400px] w-[400px] rounded-full border border-[#DCE5ED]/50" />

        <div className="absolute -right-[130px] top-[250px] h-[400px] w-[400px] rounded-full border border-[#DCE5ED]/50" />

        {/* Soft blue glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.02, 0.055, 0.02],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[15%] top-[20%] h-[300px] w-[300px] rounded-full bg-[#1769C2] blur-[110px]"
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
          className="absolute right-[15%] top-[35%] h-[320px] w-[320px] rounded-full bg-[#1769C2] blur-[120px]"
        />

        {/* Floating dots */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            opacity: [0.25, 0.8, 0.25],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[10%] top-[30%] h-1.5 w-1.5 rounded-full bg-[#1769C2]/40"
        />

        <motion.div
          animate={{
            y: [10, -10, 10],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[12%] top-[35%] h-2 w-2 rounded-full bg-[#1769C2]/30"
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative mx-auto max-w-[1680px]">
        {/* =====================================================
            HEADER
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
        >
          {/* LEFT */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1769C2]" />

              <span className="text-[9px] font-semibold tracking-[0.3em] text-[#1769C2]">
                GOOGLE REVIEWS
              </span>
            </div>

            <h2 className="max-w-[760px] text-[clamp(38px,5vw,64px)] font-semibold leading-[1.02] tracking-[-0.05em] text-[#0B243D]">
              What people say
              <br />

              <span className="text-[#1769C2]">
                about CodeGenZ.
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="lg:pb-2">
            <p className="max-w-[520px] text-[13px] leading-7 text-[#718398] lg:ml-auto">
              We value every experience shared by our clients,
              partners, and learners. Explore our genuine Google
              reviews and see what people think about working with us.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 lg:justify-end">
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[9px] font-semibold tracking-[0.2em] text-[#1769C2]"
              >
                VIEW ON GOOGLE

                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <span className="hidden h-4 w-px bg-[#DCE5ED] sm:block" />

              <Link
                to="/testimonials"
                className="group inline-flex items-center gap-2 text-[9px] font-semibold tracking-[0.2em] text-[#8A9AAC] transition-colors hover:text-[#1769C2]"
              >
                VIEW ALL REVIEWS

                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            GOOGLE REVIEW FEATURE
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.75,
            delay: 0.1,
          }}
          className="relative mt-14 overflow-hidden rounded-[30px] bg-[#061525]"
        >
          {/* ===================================================
              DECORATIVE ELEMENTS
          =================================================== */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute -right-28 -top-36 h-[440px] w-[440px] rounded-full border border-[#63A9FF]/10"
          />

          <div className="pointer-events-none absolute -right-12 -top-12 h-[270px] w-[270px] rounded-full border border-[#63A9FF]/10" />

          <div className="pointer-events-none absolute bottom-[-180px] left-[35%] h-[350px] w-[350px] rounded-full bg-[#1769C2]/10 blur-[100px]" />

          <motion.div
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-[#63A9FF]/40"
          />

          {/* ===================================================
              CARD CONTENT
          =================================================== */}

          <div className="relative z-10 grid grid-cols-1 gap-10 px-7 py-9 sm:px-10 sm:py-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-16 lg:py-14">
            {/* LEFT */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <div className="flex items-center gap-4">
                {/* Google icon */}
                <motion.div
                  animate={{
                    y: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-bold shadow-lg"
                >
                  <span className="text-[#4285F4]">
                    G
                  </span>
                </motion.div>

                <div>
                  <p className="text-[11px] font-semibold text-white">
                    CodeGenZ Solutions
                  </p>

                  <p className="mt-1 text-[8px] tracking-[0.16em] text-white/40">
                    GOOGLE BUSINESS PROFILE
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="mt-7 flex items-center gap-1">
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
                      delay: star * 0.08,
                      duration: 0.3,
                    }}
                  >
                    <Star
                      size={17}
                      fill="currentColor"
                      className="text-[#F4B400]"
                    />
                  </motion.div>
                ))}

                <span className="ml-2 text-[9px] text-white/40">
                  Client feedback
                </span>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
            >
              <p className="text-[9px] font-semibold tracking-[0.25em] text-[#63A9FF]">
                REAL EXPERIENCES
              </p>

              <h3 className="mt-3 text-[clamp(25px,3vw,40px)] font-semibold leading-[1.15] tracking-[-0.03em] text-white">
                Trusted by people who
                <br className="hidden sm:block" />
                choose quality.
              </h3>

              <p className="mt-4 max-w-[600px] text-[12px] leading-7 text-white/50">
                Discover genuine feedback from our clients and
                community on Google. Every review helps us continue
                improving the quality of our work and services.
              </p>

              {/* Buttons */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                {/* Google */}
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-[9px] font-semibold tracking-[0.18em] text-[#061525] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(255,255,255,0.12)]"
                >
                  VIEW GOOGLE REVIEWS

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#061525] text-white transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={13} />
                  </span>
                </a>

                {/* All Reviews */}
                <Link
                  to="/testimonials"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/10 px-6 py-3.5 text-[9px] font-semibold tracking-[0.18em] text-white/70 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white"
                >
                  READ ALL REVIEWS

                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* =====================================================
            SIMPLE TRUST STRIP
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="mt-8 flex flex-col items-center justify-between gap-5 border-t border-[#DCE5ED] pt-7 sm:flex-row"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F7FAFC]">
              <MessageCircle
                size={15}
                className="text-[#1769C2]"
              />
            </div>

            <div>
              <p className="text-[10px] font-semibold text-[#203B58]">
                Your feedback matters.
              </p>

              <p className="mt-1 text-[8px] text-[#8A9AAC]">
                We appreciate every review and experience shared.
              </p>
            </div>
          </div>

          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[9px] font-semibold tracking-[0.18em] text-[#1769C2]"
          >
            SHARE YOUR EXPERIENCE

            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeTestimonials;