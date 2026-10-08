import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Utensils,
  Plane,
  PenTool,
} from "lucide-react";
import { Link } from "react-router-dom";

/* =========================================================
   FEATURED PROJECTS
========================================================= */

const projects = [
  {
    number: "01",
    title: "Spice Garden",
    subtitle: "Restaurant Experience",
    category: "RESTAURANT / BUSINESS",
    description:
      "A modern restaurant website designed to present the brand, menu, atmosphere and customer experience through an engaging digital interface.",
    image: "/images/projects/spice-garden.png",
    link: "https://spice-garden-restaurant-web.vercel.app/",
    icon: Utensils,
  },

  {
    number: "02",
    title: "Tours & Travels",
    subtitle: "Travel Experience",
    category: "TRAVEL / BUSINESS",
    description:
      "A modern travel website experience designed to present destinations, services and travel information through a clear and engaging interface.",
    image: "/images/projects/tour-redesign.png",
    link: "https://tour-redesign.vercel.app/",
    icon: Plane,
  },

  {
    number: "03",
    title: "Collaborative Drawing Board",
    subtitle: "Interactive Web Application",
    category: "WEB APPLICATION",
    description:
      "An interactive browser-based drawing experience designed around visual creativity, digital collaboration and an intuitive workspace.",
    image: "/images/projects/drawing-board.png",
    link: "https://drawing-board-ebon-eight.vercel.app/",
    icon: PenTool,
  },
];

/* =========================================================
   CARD POSITIONS
========================================================= */

const cardPositions = [
  {
    top: "8%",
    left: "6%",
    rotate: -5,
    zIndex: 2,
  },
  {
    top: "19%",
    left: "31%",
    rotate: 3,
    zIndex: 4,
  },
  {
    top: "43%",
    left: "14%",
    rotate: -3,
    zIndex: 3,
  },
];

/* =========================================================
   CARD ANIMATION
========================================================= */

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.94,
  },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      delay: index * 0.14,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* =========================================================
   HOME PROJECT
========================================================= */

const HomeProject = () => {
  return (
    <section
      id="home-projects"
      className="
        relative
        overflow-hidden
        bg-[#F7FAFC]
        font-['Roboto',sans-serif]
        text-[#102A43]
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Primary CGS blue glow */}

        <div
          className="
            absolute
            -left-40
            top-[20%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#1769C2]/[0.045]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-[-100px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#1769C2]/[0.04]
            blur-[130px]
          "
        />

        {/* =================================================
            ARCHITECTURAL FRAME
        ================================================== */}

        <div
          className="
            absolute
            right-[6%]
            top-[7%]
            h-[620px]
            w-[430px]
            rotate-[-4deg]
            border
            border-[#1769C2]/[0.10]
          "
        />

        <div
          className="
            absolute
            right-[4%]
            top-[10%]
            h-[620px]
            w-[430px]
            rotate-[7deg]
            border
            border-[#102A43]/[0.055]
          "
        />

        {/* =================================================
            CIRCULAR DESIGN ELEMENTS
        ================================================== */}

        <div
          className="
            absolute
            -right-[150px]
            top-[5%]
            h-[650px]
            w-[650px]
            rounded-full
            border
            border-[#1769C2]/[0.07]
          "
        />

        <div
          className="
            absolute
            -right-[190px]
            top-[13%]
            h-[540px]
            w-[540px]
            rounded-full
            border
            border-[#1769C2]/[0.05]
          "
        />

        {/* center glow */}

        <div
          className="
            absolute
            right-[18%]
            top-[35%]
            h-[180px]
            w-[180px]
            rounded-full
            bg-[#1769C2]/[0.08]
            blur-[75px]
          "
        />

      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1700px]
          px-5
          pb-20
          pt-20
          sm:px-8
          sm:pb-24
          sm:pt-24
          lg:min-h-[850px]
          lg:px-12
          lg:pb-28
          lg:pt-28
          xl:px-16
        "
      >

        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            z-20
            max-w-[720px]
            lg:absolute
            lg:left-12
            lg:top-28
            xl:left-16
          "
        >

          {/* =================================================
              EYEBROW
          ================================================== */}

          <div className="mb-7 flex items-center gap-3">

            <span className="h-px w-12 bg-[#1769C2]" />

            <span
              className="
                text-[8px]
                font-bold
                tracking-[0.3em]
                text-[#1769C2]
                sm:text-[9px]
              "
            >
              SELECTED WORK
            </span>

          </div>

          {/* =================================================
              HEADING
          ================================================== */}

          <h2
            className="
              max-w-[700px]
              text-[clamp(4rem,8vw,8rem)]
              font-semibold
              leading-[0.82]
              tracking-[-0.085em]
              text-[#0B243D]
            "
          >
            Projects

            <br />

            <span className="text-[#1769C2]">
              that make
            </span>

            <br />

            an impact.
          </h2>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p
            className="
              mt-10
              max-w-[580px]
              text-[12px]
              leading-7
              text-[#60758A]
              sm:text-[13px]
              sm:leading-8
            "
          >
            A curated selection of websites and digital products
            built for businesses that want a stronger online
            presence.
          </p>

          {/* =================================================
              VIEW ALL
          ================================================== */}

          <Link
            to="/projects"
            className="
              group
              mt-8
              inline-flex
              items-center
              gap-4
              text-[8px]
              font-bold
              tracking-[0.22em]
              text-[#1769C2]
              transition-colors
              duration-300
              hover:text-[#0F559F]
            "
          >

            VIEW ALL PROJECTS

            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[#DCE5ED]
                bg-white/70
                transition-all
                duration-300
                group-hover:border-[#1769C2]
                group-hover:bg-[#1769C2]
                group-hover:text-white
              "
            >
              <ArrowUpRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                "
              />
            </span>

          </Link>

          {/* =================================================
              SCROLL INDICATOR
          ================================================== */}

          <div className="mt-16 hidden items-center gap-3 lg:flex">

            <div className="relative h-9 w-px overflow-hidden bg-[#DCE5ED]">

              <motion.div
                animate={{
                  y: ["-100%", "300%"],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-0
                  top-0
                  h-1/2
                  w-full
                  bg-[#1769C2]
                "
              />

            </div>

            <span
              className="
                text-[7px]
                font-semibold
                tracking-[0.25em]
                text-[#8A9AAC]
              "
            >
              SCROLL TO EXPLORE
            </span>

          </div>

        </motion.div>

        {/* ===================================================
            DESKTOP PROJECT STACK
        ==================================================== */}

        <div
          className="
            relative
            mt-16
            h-[680px]
            lg:absolute
            lg:right-5
            lg:top-12
            lg:mt-0
            lg:h-[730px]
            lg:w-[58%]
            xl:right-0
            xl:w-[57%]
          "
        >

          {/* =================================================
              LARGE FRAME
          ================================================== */}

          <div
            className="
              absolute
              left-[7%]
              right-[3%]
              top-[6%]
              h-[88%]
              rotate-[-1.5deg]
              border
              border-[#1769C2]/[0.10]
            "
          />

          <div
            className="
              absolute
              left-[10%]
              right-[5%]
              top-[9%]
              h-[84%]
              border
              border-[#102A43]/[0.05]
            "
          />

          {/* =================================================
              PROJECT CARDS
          ================================================== */}

          {projects.map((project, index) => {

            const Icon = project.icon;
            const position = cardPositions[index];

            return (
              <motion.article
                key={project.number}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                variants={cardReveal}
                style={{
                  top: position.top,
                  left: position.left,
                  rotate: `${position.rotate}deg`,
                  zIndex: position.zIndex,
                }}
                className="
                  group
                  absolute
                  w-[78%]
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-[#DCE5ED]
                  bg-white/95
                  shadow-[0_25px_70px_rgba(7,36,61,0.10)]
                  backdrop-blur-xl
                  transition-all
                  duration-700
                  hover:z-50
                  hover:-translate-y-3
                  hover:rotate-0
                  hover:shadow-[0_40px_90px_rgba(7,36,61,0.17)]
                  sm:w-[62%]
                  lg:w-[46%]
                  xl:w-[43%]
                "
              >

                {/* =================================================
                    IMAGE
                ================================================== */}

                <div
                  className="
                    relative
                    aspect-[1.08/1]
                    overflow-hidden
                    bg-[#EDF3F8]
                  "
                >

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-[1200ms]
                      ease-out
                      group-hover:scale-[1.07]
                    "
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  {/* fallback */}

                  <div
                    className="
                      absolute
                      inset-0
                      -z-10
                      bg-gradient-to-br
                      from-[#EEF5FA]
                      to-[#D9E7F1]
                    "
                  />

                  {/* image overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#061A2B]/40
                      via-transparent
                      to-white/10
                    "
                  />

                  {/* =================================================
                      NUMBER
                  ================================================== */}

                  <div className="absolute left-4 top-4 sm:left-5 sm:top-5">

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/60
                        bg-white/85
                        shadow-lg
                        backdrop-blur-md
                      "
                    >

                      <span
                        className="
                          text-[8px]
                          font-bold
                          tracking-[0.1em]
                          text-[#1769C2]
                        "
                      >
                        {project.number}
                      </span>

                    </div>

                  </div>

                  {/* =================================================
                      ICON
                  ================================================== */}

                  <div
                    className="
                      absolute
                      right-4
                      top-4
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/60
                      bg-white/80
                      text-[#1769C2]
                      backdrop-blur-md
                      sm:right-5
                      sm:top-5
                    "
                  >

                    <Icon
                      size={14}
                      strokeWidth={1.5}
                    />

                  </div>

                  {/* =================================================
                      HOVER ACTION
                  ================================================== */}

                  <div
                    className="
                      absolute
                      bottom-4
                      right-4
                      sm:bottom-5
                      sm:right-5
                    "
                  >

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title}`}
                      className="
                        flex
                        h-10
                        w-10
                        translate-y-4
                        items-center
                        justify-center
                        rounded-full
                        bg-[#1769C2]
                        text-white
                        opacity-0
                        shadow-xl
                        transition-all
                        duration-500
                        group-hover:translate-y-0
                        group-hover:opacity-100
                        hover:bg-[#0F559F]
                      "
                    >
                      <ArrowUpRight size={15} />
                    </a>

                  </div>

                  {/* bottom blue accent */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[3px]
                      w-0
                      bg-[#1769C2]
                      transition-all
                      duration-700
                      group-hover:w-full
                    "
                  />

                </div>

                {/* =================================================
                    CARD CONTENT
                ================================================== */}

                <div className="p-5 sm:p-6">

                  {/* category */}

                  <div className="flex items-center gap-2">

                    <span
                      className="
                        text-[6px]
                        font-bold
                        tracking-[0.22em]
                        text-[#1769C2]
                      "
                    >
                      {project.category}
                    </span>

                    <span className="h-px w-4 bg-[#DCE5ED]" />

                    <span
                      className="
                        text-[6px]
                        tracking-[0.15em]
                        text-[#9AAABB]
                      "
                    >
                      {project.subtitle}
                    </span>

                  </div>

                  {/* title */}

                  <h3
                    className="
                      mt-4
                      text-[clamp(1.35rem,2.2vw,2rem)]
                      font-semibold
                      leading-[1]
                      tracking-[-0.045em]
                      text-[#0B243D]
                      transition-colors
                      duration-300
                      group-hover:text-[#1769C2]
                    "
                  >
                    {project.title}
                  </h3>

                  {/* blue accent */}

                  <div
                    className="
                      mt-3
                      h-[2px]
                      w-7
                      bg-[#1769C2]
                      transition-all
                      duration-500
                      group-hover:w-12
                    "
                  />

                  {/* description */}

                  <p
                    className="
                      mt-4
                      line-clamp-3
                      text-[8px]
                      leading-5
                      text-[#718398]
                    "
                  >
                    {project.description}
                  </p>

                  {/* bottom */}

                  <div className="mt-5 flex items-center justify-between">

                    <span
                      className="
                        text-[6px]
                        font-semibold
                        tracking-[0.18em]
                        text-[#9AAABB]
                      "
                    >
                      DIGITAL EXPERIENCE
                    </span>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group/link
                        inline-flex
                        items-center
                        gap-2
                        text-[7px]
                        font-semibold
                        tracking-[0.16em]
                        text-[#1769C2]
                      "
                    >
                      VIEW

                      <ExternalLink
                        size={10}
                        className="
                          transition-transform
                          duration-300
                          group-hover/link:-translate-y-0.5
                          group-hover/link:translate-x-0.5
                        "
                      />

                    </a>

                  </div>

                </div>

              </motion.article>
            );
          })}

          {/* =================================================
              DECORATIVE LABEL
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-[10%]
              right-[8%]
              hidden
              lg:block
            "
          >

            <div className="flex items-center gap-2">

              <span className="h-1.5 w-1.5 rounded-full bg-[#1769C2]" />

              <span
                className="
                  text-[7px]
                  font-semibold
                  tracking-[0.24em]
                  text-[#8A9AAC]
                "
              >
                SELECTED DIGITAL WORK
              </span>

            </div>

          </div>

        </div>

        {/* ===================================================
            MOBILE PROJECT CARDS
        ==================================================== */}

        <div className="mt-12 space-y-5 lg:hidden">

          {projects.map((project, index) => {

            const Icon = project.icon;

            return (
              <motion.article
                key={`mobile-${project.number}`}
                initial={{
                  opacity: 0,
                  y: 45,
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
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-[#DCE5ED]
                  bg-white
                  shadow-[0_20px_60px_rgba(7,36,61,0.08)]
                "
              >

                {/* image */}

                <div
                  className="
                    relative
                    aspect-[16/10]
                    overflow-hidden
                    bg-[#EDF3F8]
                  "
                >

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#061A2B]/40
                      to-transparent
                    "
                  />

                  {/* number */}

                  <div className="absolute left-4 top-4">

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/60
                        bg-white/85
                      "
                    >
                      <span className="text-[8px] font-bold text-[#1769C2]">
                        {project.number}
                      </span>
                    </div>

                  </div>

                  {/* icon */}

                  <div className="absolute right-4 top-4">

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/60
                        bg-white/85
                        text-[#1769C2]
                      "
                    >
                      <Icon
                        size={14}
                        strokeWidth={1.5}
                      />
                    </div>

                  </div>

                </div>

                {/* content */}

                <div className="p-5">

                  <span
                    className="
                      text-[6px]
                      font-bold
                      tracking-[0.22em]
                      text-[#1769C2]
                    "
                  >
                    {project.category}
                  </span>

                  <h3
                    className="
                      mt-3
                      text-2xl
                      font-semibold
                      tracking-[-0.04em]
                      text-[#0B243D]
                    "
                  >
                    {project.title}
                  </h3>

                  <div className="mt-3 h-[2px] w-8 bg-[#1769C2]" />

                  <p
                    className="
                      mt-4
                      text-[9px]
                      leading-6
                      text-[#718398]
                    "
                  >
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      border-b
                      border-[#DCE5ED]
                      pb-2
                      text-[7px]
                      font-semibold
                      tracking-[0.18em]
                      text-[#1769C2]
                    "
                  >
                    VIEW LIVE PROJECT

                    <ExternalLink size={10} />

                  </a>

                </div>

              </motion.article>
            );
          })}

        </div>

      </div>

      {/* =====================================================
          PROJECT COUNT
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1700px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >

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
          className="
            flex
            flex-col
            justify-between
            gap-8
            border-t
            border-[#DCE5ED]
            py-10
            sm:flex-row
            sm:items-center
          "
        >

          <div className="flex items-center gap-8">

            <div>

              <p
                className="
                  text-2xl
                  font-semibold
                  tracking-[-0.03em]
                  text-[#0B243D]
                "
              >
                03
              </p>

              <p
                className="
                  mt-1
                  text-[7px]
                  font-semibold
                  tracking-[0.2em]
                  text-[#9AAABB]
                "
              >
                FEATURED PROJECTS
              </p>

            </div>

            <div className="h-8 w-px bg-[#DCE5ED]" />

            <div>

              <p
                className="
                  text-2xl
                  font-semibold
                  tracking-[-0.03em]
                  text-[#0B243D]
                "
              >
                2026
              </p>

              <p
                className="
                  mt-1
                  text-[7px]
                  font-semibold
                  tracking-[0.2em]
                  text-[#9AAABB]
                "
              >
                SELECTED WORK
              </p>

            </div>

          </div>

          <Link
            to="/projects"
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-4
              rounded-full
              bg-[#1769C2]
              px-6
              py-3.5
              text-[8px]
              font-semibold
              tracking-[0.2em]
              text-white
              shadow-[0_12px_30px_rgba(23,105,194,0.16)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#0F559F]
              hover:shadow-[0_16px_38px_rgba(23,105,194,0.22)]
            "
          >

            EXPLORE ALL PROJECTS

            <span
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-white/15
              "
            >

              <ArrowRight
                size={12}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

            </span>

          </Link>

        </motion.div>

      </div>

      {/* =====================================================
          FINAL STATEMENT
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1700px]
          px-5
          py-20
          sm:px-8
          lg:px-12
          lg:py-28
          xl:px-16
        "
      >

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >

          <div className="flex items-center gap-3">

            <Sparkles
              size={14}
              className="text-[#1769C2]"
            />

            <span
              className="
                text-[8px]
                font-semibold
                tracking-[0.24em]
                text-[#1769C2]
              "
            >
              NEXT PROJECT
            </span>

          </div>

          <h3
            className="
              mt-5
              text-[clamp(2.3rem,5vw,4.5rem)]
              font-semibold
              leading-[0.95]
              tracking-[-0.06em]
              text-[#0B243D]
            "
          >
            Your idea could be

            <span className="text-[#1769C2]">
              {" "}
              the next one.
            </span>
          </h3>

          <p
            className="
              mt-6
              max-w-xl
              text-[12px]
              leading-7
              text-[#718398]
            "
          >
            Explore our complete portfolio or start a conversation
            about your next website, application or digital
            experience.
          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default HomeProject;