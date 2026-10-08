import React from "react";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Star,
  Quote,
  Heart,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

/* =========================================================
   GOOGLE REVIEW LINK
========================================================= */

const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=codegenz+solutions#lrd=0x3babd5c76ca22ec7:0xb1dcf11c9cd9a344,1,,,,";

/* =========================================================
   THREE FEATURED CLIENT REVIEWS
========================================================= */

const reviews = [
  {
    name: "Nagendhiran",
    meta: "3 reviews",
    time: "3 months ago",
    review:
      "Their communication was friendly, responsive, and they patiently understood all my requirements before starting the work. The quality, formatting, and overall presentation were outstanding. I truly appreciate their dedication and effort. If anyone is looking for a reliable service for internship reports or academic documentation, I would highly recommend them.",
  },

  {
    name: "suriyan chinnadurai",
    meta: "2 reviews",
    time: "3 months ago",
    review:
      "I am thoroughly impressed by the excellent visual presentation and user-friendly interface. Everything looks fantastic and is so easy to navigate! Great job on this outstanding experience.",
  },

  {
    name: "Gowsalya raman",
    meta: "4 reviews",
    time: "3 months ago",
    review:
      "I had a great experience working with CodeGenZ Solutions software company. The entire team was professional, responsive and highly knowledgeable. Communication was excellent throughout the project and questions or concerns were addressed promptly. The software was delivered on time at expected level. I particularly appreciated their attention to transparency, detailed manner of explaining and commitment to customer satisfaction.",
  },
];

/* =========================================================
   REVIEW CARD
========================================================= */

const ReviewCard = ({ review }) => {
  return (
    <article
      className="
        group
        relative
        w-[320px]
        shrink-0
        overflow-hidden
        rounded-[20px]
        border
        border-[#DCE5ED]
        bg-white
        p-6
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#B8CDE0]
        hover:shadow-[0_20px_50px_rgba(7,26,45,0.08)]
        sm:w-[390px]
        sm:p-7
        lg:w-[430px]
      "
    >
      {/* Top accent */}

      <div
        className="
          absolute
          left-0
          right-0
          top-0
          h-[2px]
          origin-left
          scale-x-0
          bg-[#1769C2]
          transition-transform
          duration-500
          group-hover:scale-x-100
        "
      />

      {/* Header */}

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* Avatar */}

          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#071827]
              text-[11px]
              font-semibold
              text-white
            "
          >
            {review.name.charAt(0).toUpperCase()}
          </div>

          <div>
            <h3 className="text-[12px] font-semibold text-[#17324D]">
              {review.name}
            </h3>

            <div className="mt-1 flex items-center gap-2">
              <span className="text-[8px] text-[#8A9AAC]">
                {review.meta}
              </span>

              <span className="h-1 w-1 rounded-full bg-[#CBD5DE]" />

              <span className="text-[8px] text-[#8A9AAC]">
                {review.time}
              </span>
            </div>
          </div>
        </div>

        {/* Google */}

        <div
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            border-[#E5EBF0]
            bg-[#F8FAFC]
            text-[13px]
            font-bold
          "
        >
          <span className="text-[#4285F4]">G</span>
        </div>
      </div>

      {/* Stars */}

      <div className="mt-6 flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={12}
            fill="currentColor"
            className="text-[#F4B400]"
          />
        ))}

        {/* Replaced review emoji with icon */}

        <Heart
          size={12}
          fill="currentColor"
          className="ml-2 text-[#1769C2]"
          strokeWidth={1.8}
        />
      </div>

      {/* Quote */}

      <div className="mt-5 flex gap-3">
        <Quote
          size={18}
          strokeWidth={1.4}
          className="mt-1 shrink-0 text-[#1769C2]/30"
        />

        <p className="text-[11px] leading-6 text-[#64788C] sm:text-[12px] sm:leading-7">
          {review.review}
        </p>
      </div>

      {/* Bottom */}

      <div className="mt-6 flex items-center justify-between border-t border-[#E8EDF1] pt-4">
        <span className="text-[7px] font-medium tracking-[0.2em] text-[#A3AFBA]">
          VERIFIED EXPERIENCE
        </span>

        <ArrowUpRight
          size={13}
          className="
            text-[#B0BCC7]
            transition-all
            duration-300
            group-hover:-translate-y-1
            group-hover:translate-x-1
            group-hover:text-[#1769C2]
          "
        />
      </div>
    </article>
  );
};

/* =========================================================
   HOME TESTIMONIALS
========================================================= */

const HomeTestimonials = () => {
  return (
    <section
      id="home-testimonials"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F7F9FB]
        py-20
        font-['Roboto',sans-serif]
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Soft blue glow */}

        <div
          className="
            absolute
            left-[-180px]
            top-[25%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#1769C2]/[0.045]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-160px]
            right-[-120px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#1769C2]/[0.035]
            blur-[120px]
          "
        />

        {/* Architectural lines */}
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-[1500px]">
        {/* ===================================================
            HEADER
        ==================================================== */}

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
            duration: 0.7,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="px-5 sm:px-8 lg:px-10"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <motion.span
                  animate={{
                    scale: [1, 1.7, 1],
                    opacity: [0.4, 0, 0.4],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                  }}
                  className="absolute h-2 w-2 rounded-full bg-[#1769C2]"
                />

                <span className="relative h-1.5 w-1.5 rounded-full bg-[#1769C2]" />
              </span>

              <span className="text-[10px] font-semibold tracking-[0.3em] text-[#1769C2] sm:text-[12px]">
                CLIENT REVIEWS
              </span>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            INTRO
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.05,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            mt-10
            grid
            gap-8
            px-5
            sm:px-8
            lg:grid-cols-[1fr_0.7fr]
            lg:items-end
            lg:gap-16
            lg:px-10
          "
        >
          {/* Heading */}

          <div>
            <p className="mb-4 text-[10px] font-medium tracking-[0.25em] text-[#8A9AAC]">
              GOOGLE FEEDBACK
            </p>

            <h2
              className="
                max-w-[760px]
                text-[clamp(2.8rem,5vw,5.8rem)]
                font-medium
                leading-[0.91]
                tracking-[-0.065em]
                text-[#071A2D]
              "
            >
              What our clients
              <br />

              <span className="text-[#1769C2]">
                say about us.
              </span>
            </h2>
          </div>

          {/* Description */}

          <div className="lg:pb-1">
            <p className="max-w-[480px] text-[14px] leading-7 text-[#718398] lg:ml-auto lg:text-right sm:text-[15px]">
              Real experiences from people who have worked with CodeGenZ
              Solutions. A small selection of feedback from our Google reviews.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-5 lg:justify-end">
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-[12px]
                  font-semibold
                  tracking-[0.2em]
                  text-[#1769C2]
                "
              >
                VIEW ON GOOGLE

                <ArrowUpRight
                  size={12}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <span className="hidden h-4 w-px bg-[#D8E1E8] sm:block" />

              <Link
                to="/testimonials"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-[12px]
                  font-semibold
                  tracking-[0.2em]
                  text-[#8A9AAC]
                  transition-colors
                  duration-300
                  hover:text-[#1769C2]
                "
              >
                VIEW ALL REVIEWS

                <ArrowUpRight
                  size={12}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            MOVING REVIEW TRACK
        ==================================================== */}

        <div className="relative mt-14 overflow-hidden">
          {/* Left fade */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-20
              h-full
              w-16
              bg-gradient-to-r
              from-[#F7F9FB]
              to-transparent
              sm:w-24
              lg:w-36
            "
          />

          {/* Right fade */}

          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-20
              h-full
              w-16
              bg-gradient-to-l
              from-[#F7F9FB]
              to-transparent
              sm:w-24
              lg:w-36
            "
          />

          {/* Moving track */}

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-5 pl-5 sm:gap-6 sm:pl-8 lg:gap-7 lg:pl-10"
          >
            {/* First set */}

            {reviews.map((review) => (
              <ReviewCard
                key={`first-${review.name}`}
                review={review}
              />
            ))}

            {/* Duplicate set for seamless animation */}

            {reviews.map((review) => (
              <ReviewCard
                key={`second-${review.name}`}
                review={review}
              />
            ))}
          </motion.div>
        </div>

        {/* ===================================================
            REVIEW INDICATOR
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-8
            flex
            items-center
            justify-center
            gap-3
            px-5
          "
        ></motion.div>

        {/* ===================================================
            BOTTOM CTA
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
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
          className="
            mx-5
            mt-10
            flex
            flex-col
            items-start
            justify-between
            gap-5
            border-t
            border-[#DCE5ED]
            pt-5
            sm:mx-8
            sm:flex-row
            sm:items-center
            lg:mx-10
          "
        >
          <div>
            <p className="text-[12px] font-medium text-[#203B58] sm:text-xs">
              Your experience matters.
            </p>

            <p className="mt-1 text-[10px] text-[#8A9AAC] sm:text-[12px]">
              Explore more feedback or share your own experience.
            </p>
          </div>

          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              gap-3
              text-[12px]
              font-semibold
              tracking-[0.2em]
              text-[#1769C2]
              transition-colors
              duration-300
              hover:text-[#071A2D]
            "
          >
            SHARE YOUR EXPERIENCE

            <ArrowRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeTestimonials;