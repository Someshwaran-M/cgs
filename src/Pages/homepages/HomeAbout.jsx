import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  const principles = [
    {
      number: "01",
      title: "BUSINESS FIRST",
      description: "Solutions shaped around your goals.",
      icon: Target,
    },
    {
      number: "02",
      title: "MODERN",
      description: "Practical use of modern technologies.",
      icon: Code2,
    },
    {
      number: "03",
      title: "LONG-TERM",
      description: "Built with growth and usability in mind.",
      icon: Layers3,
    },
  ];

  return (
    <section
      id="home-about"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        px-5
        py-6
        font-['Roboto',sans-serif]
        text-[#102A43]
        
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-[-180px]
            top-[20%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#1769C2]/[0.035]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            bottom-[-180px]
            right-[-120px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#1769C2]/[0.025]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            left-[5%]
            top-0
            h-full
            w-px
            bg-[#071827]/[0.025]
          "
        />

        <div
          className="
            absolute
            right-[5%]
            top-0
            h-full
            w-px
            bg-[#071827]/[0.025]
          "
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-[1420px]">

        {/* =======================================================
            HEADER
        ======================================================== */}

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
          className="mb-10 flex items-center justify-between sm:mb-12"
        >
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
                className="
                  absolute
                  h-2
                  w-2
                  rounded-full
                  bg-[#1769C2]
                "
              />

              <span
                className="
                  relative
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#1769C2]
                "
              />
            </span>

            <span
              className="
                text-[9px]
                font-semibold
                tracking-[0.3em]
                text-[#1769C2]
                sm:text-[10px]
              "
            >
              WHY CODEGENZ
            </span>
          </div>
        </motion.div>

        {/* =======================================================
            MAIN LAYOUT
            LEFT  = CONTENT
            RIGHT = IMAGE
        ======================================================== */}

        <div
          className="
            grid
            items-start
            gap-12
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-14
            xl:grid-cols-[1fr_0.92fr]
            xl:gap-20
          "
        >

          {/* =====================================================
              LEFT — FULL CONTENT
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="min-w-0"
          >
            {/* Section marker */}

           
            {/* =================================================
                HEADING
            ================================================== */}

            <h2
              className="
                max-w-[760px]
                text-[clamp(2.8rem,5vw,5.3rem)]
                font-medium
                leading-[0.91]
                tracking-[-0.07em]
                text-[#071A2D]
              "
            >
              Built around
              <br />

              <span className="text-[#1769C2]">
                your business
              </span>

              <br />

              <span className="text-slate-300">
                needs.
              </span>
            </h2>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <div className="mt-7 max-w-[680px]">
              <p
                className="
                  text-[13px]
                  leading-7
                  text-[#60758A]
                  sm:text-[14px]
                  sm:leading-8
                "
              >
                At CodeGenZ Solutions, we believe technology should solve
                real business problems, not simply follow trends. We combine
                thoughtful design, modern technology, and practical
                development to create digital solutions with a clear purpose.
              </p>

              <p
                className="
                  mt-3
                  text-[13px]
                  leading-7
                  text-[#60758A]
                  sm:text-[14px]
                  sm:leading-8
                "
              >
                From the first idea to the final product, we focus on
                understanding your requirements, choosing the right approach,
                and building experiences that are reliable, scalable, and easy
                to use.
              </p>
            </div>

            {/* =================================================
                PRINCIPLES
            ================================================== */}

            <div className="mt-8 border-t border-[#DCE5ED]">
              {principles.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.number}
                    initial={{
                      opacity: 0,
                      x: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="
                      group
                      relative
                      flex
                      items-center
                      gap-4
                      border-b
                      border-[#DCE5ED]
                      py-4
                    "
                  >
                    {/* Hover line */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-px
                        w-0
                        bg-[#1769C2]
                        transition-all
                        duration-500
                        group-hover:w-full
                      "
                    />

                    {/* Number */}

                    <span
                      className="
                        w-6
                        shrink-0
                        text-[8px]
                        font-semibold
                        tracking-[0.15em]
                        text-[#B1BDC7]
                        transition-colors
                        duration-300
                        group-hover:text-[#1769C2]
                      "
                    >
                      {item.number}
                    </span>

                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        border
                        border-[#DCE5ED]
                        text-[#1769C2]
                        transition-all
                        duration-300
                        group-hover:border-[#1769C2]
                        group-hover:bg-[#1769C2]
                        group-hover:text-white
                      "
                    >
                      <Icon
                        size={15}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Content */}

                    <div className="flex-1">
                      <p
                        className="
                          text-[10px]
                          font-semibold
                          tracking-[0.16em]
                          text-[#203B58]
                        "
                      >
                        {item.title}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[11px]
                          leading-5
                          text-[#8A9AAC]
                        "
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* Arrow */}

                    <ArrowUpRight
                      size={13}
                      className="
                        text-[#C2CCD4]
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-[#1769C2]
                      "
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* =================================================
                CTA
            ================================================== */}

            <div
              className="
                mt-7
                flex
                flex-wrap
                items-center
                gap-5
              "
            >
              <Link
                to="/about"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  rounded-full
                  bg-[#1769C2]
                  px-6
                  py-3.5
                  text-[10px]
                  font-semibold
                  tracking-[0.2em]
                  text-white
                  shadow-[0_12px_30px_rgba(23,105,194,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#0F559F]
                  hover:shadow-[0_18px_40px_rgba(23,105,194,0.24)]
                "
              >
                WHY CODEGENZ

                <span
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <ArrowRight size={11} />
                </span>
              </Link>

              <div className="flex items-center gap-2">
                <Check
                  size={12}
                  className="text-[#1769C2]"
                />

                <span
                  className="
                    text-[9px]
                    tracking-[0.12em]
                    text-[#8A9AAC]
                  "
                >
                  PURPOSEFUL DIGITAL SOLUTIONS
                </span>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT — PREMIUM IMAGE
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="
              relative
              flex
              h-full
              items-center
            "
          >
            {/* =================================================
                IMAGE WRAPPER
            ================================================== */}

            <div className="relative w-full">

              {/* Offset frame */}

              <div
                className="
                  absolute
                  -bottom-4
                  -right-4
                  h-full
                  w-full
                  border
                  border-[#1769C2]/15
                "
              />

              {/* Image */}

              <div
                className="
                  group
                  relative
                  aspect-[4/4.4]
                  overflow-hidden
                  bg-[#071827]
                "
              >
                <img
                  src="/About1.jpg"
                  alt="CodeGenZ digital solutions"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-[1200ms]
                    group-hover:scale-105
                  "
                />

                {/* Dark gradient */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#04111D]/80
                    via-[#04111D]/15
                    to-transparent
                  "
                />

                {/* Blue tint */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-[#1769C2]/[0.06]
                    mix-blend-multiply
                  "
                />

                {/* =================================================
                    TOP LABEL
                ================================================== */}

                <div
                  className="
                    absolute
                    left-6
                    top-6
                    flex
                    items-center
                    gap-3
                    sm:left-8
                    sm:top-8
                  "
                >
                  <span className="h-px w-8 bg-white/60" />

                  <span
                    className="
                      text-[7px]
                      font-medium
                      tracking-[0.25em]
                      text-white/75
                    "
                  >
                    DIGITAL SOLUTIONS
                  </span>
                </div>

                {/* =================================================
                    TOP RIGHT NUMBER
                ================================================== */}

                <div
                  className="
                    absolute
                    right-6
                    top-6
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    border
                    border-white/20
                    bg-black/10
                    text-white/80
                    backdrop-blur-sm
                    sm:right-8
                    sm:top-8
                  "
                >
                  <ArrowUpRight size={13} />
                </div>

               

                {/* =================================================
                    BOTTOM CONTENT
                ================================================== */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-6
                    sm:p-8
                  "
                >
                  <p
                    className="
                      text-[10px]
                      font-medium
                      tracking-[0.28em]
                      text-[#63A9FF]
                    "
                  >
                    TECHNOLOGY × DESIGN
                  </p>

                  <h3
                    className="
                      mt-2
                      max-w-[400px]
                      text-[26px]
                      font-medium
                      leading-[1.05]
                      tracking-[-0.045em]
                      text-white
                      sm:text-[32px]
                    "
                  >
                    Turning ideas into
                    <span className="text-[#63A9FF]">
                      {" "}
                      digital experiences.
                    </span>
                  </h3>
                </div>

                {/* =================================================
                    CORNER DETAILS
                ================================================== */}

                

                <div
                  className="
                    absolute
                    left-6
                    top-6
                    h-7
                    w-7
                    border-l
                    border-t
                    border-white/30
                    sm:left-8
                    sm:top-8
                  "
                />
              </div>

              
            </div>
          </motion.div>
        </div>

       
      
      </div>
    </section>
  );
};

export default HomeAbout;