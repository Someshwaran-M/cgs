import React, { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Code2,
  ServerCog,
  Database,
  Smartphone,
  ShoppingBag,
  Globe2,
  Search,
  Palette,
  Megaphone,
  Layers3,
} from "lucide-react";

import { Link } from "react-router-dom";

/* =========================================================
   TECHNOLOGY DATA
========================================================= */

const technologyGroups = [
  {
    number: "01",
    label: "WEB DEVELOPMENT",
    title: "Frontend",
    description:
      "Modern interfaces and responsive web experiences built for performance, usability and scalability.",
    icon: Code2,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Vite",
    ],
  },

  {
    number: "02",
    label: "APPLICATION DEVELOPMENT",
    title: "Backend",
    description:
      "Reliable server-side systems and APIs that power business applications and digital products.",
    icon: ServerCog,
    technologies: [
      "Python",
      "Django",
      "Django REST",
      "Java",
      "Node.js",
    ],
  },

  {
    number: "03",
    label: "DATA & STORAGE",
    title: "Databases",
    description:
      "Structured data systems designed to support secure, reliable and scalable application workflows.",
    icon: Database,
    technologies: [
      "MySQL",
      "SQLite",
      "PostgreSQL",
      "Database Design",
    ],
  },

  {
    number: "04",
    label: "MOBILE EXPERIENCES",
    title: "Mobile",
    description:
      "Mobile-focused digital experiences designed around usability, accessibility and modern device behaviour.",
    icon: Smartphone,
    technologies: [
      "Responsive UI",
      "Mobile Web",
      "API Integration",
      "App Architecture",
    ],
  },

  {
    number: "05",
    label: "DIGITAL COMMERCE",
    title: "E-Commerce",
    description:
      "Complete digital commerce experiences connecting products, customers, payments and business workflows.",
    icon: ShoppingBag,
    technologies: [
      "Storefronts",
      "Product Systems",
      "Payment Integration",
      "Order Management",
    ],
  },

  {
    number: "06",
    label: "DEPLOYMENT",
    title: "Cloud & Hosting",
    description:
      "Deployment solutions that take applications from development environments to reliable production systems.",
    icon: Globe2,
    technologies: [
      "Vercel",
      "Render",
      "Cloud Deployment",
      "Production Setup",
    ],
  },

  {
    number: "07",
    label: "VISIBILITY",
    title: "SEO & Performance",
    description:
      "Technical and content-focused improvements designed to make digital products easier to discover and use.",
    icon: Search,
    technologies: [
      "On-Page SEO",
      "Technical SEO",
      "Performance",
      "Search Optimization",
    ],
  },

  {
    number: "08",
    label: "DIGITAL EXPERIENCE",
    title: "UI / UX",
    description:
      "Purposeful interface systems that connect visual design, usability and business objectives.",
    icon: Palette,
    technologies: [
      "UI Design",
      "UX Design",
      "Design Systems",
      "Responsive Design",
    ],
  },

  {
    number: "09",
    label: "DIGITAL GROWTH",
    title: "Marketing",
    description:
      "Digital growth solutions that help businesses establish a stronger and more consistent online presence.",
    icon: Megaphone,
    technologies: [
      "Social Media",
      "Content Strategy",
      "Brand Promotion",
      "Digital Campaigns",
    ],
  },
];

/* =========================================================
   MARQUEE TECHNOLOGIES
========================================================= */

const marqueeTechnologies = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "REACT.JS",
  "VITE",
  "PYTHON",
  "DJANGO",
  "DJANGO REST",
  "JAVA",
  "NODE.JS",
  "MYSQL",
  "SQLITE",
  "POSTGRESQL",
  "VERCEL",
  "RENDER",
  "SEO",
  "UI / UX",
  "DIGITAL MARKETING",
];

/* =========================================================
   HOME TECHNOLOGY
========================================================= */

const HomeTechnology = () => {
  /* =========================================================
     MOBILE / TABLET CAROUSEL
  ========================================================== */

  const [activeTechnology, setActiveTechnology] =
    useState(0);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  /* =========================================================
     NAVIGATION
  ========================================================== */

  const goPrevious = () => {
    setActiveTechnology((prev) =>
      prev === 0
        ? technologyGroups.length - 1
        : prev - 1
    );
  };

  const goNext = () => {
    setActiveTechnology((prev) =>
      prev === technologyGroups.length - 1
        ? 0
        : prev + 1
    );
  };

  const goToTechnology = (index) => {
    setActiveTechnology(index);
  };

  /* =========================================================
     TOUCH / SWIPE
  ========================================================== */

  const handleTouchStart = (event) => {
    touchStartX.current =
      event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEndX.current =
      event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchEndX.current === null
    ) {
      return;
    }

    const distance =
      touchStartX.current -
      touchEndX.current;

    const minimumSwipeDistance = 45;

    if (
      Math.abs(distance) >=
      minimumSwipeDistance
    ) {
      if (distance > 0) {
        goNext();
      } else {
        goPrevious();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  /* =========================================================
     KEYBOARD NAVIGATION
  ========================================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        goPrevious();
      }

      if (event.key === "ArrowRight") {
        goNext();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  /* =========================================================
     AUTO ANIMATION
     Mobile + tablet only carousel movement.
  ========================================================== */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTechnology((prev) =>
        prev === technologyGroups.length - 1
          ? 0
          : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* =========================================================
     RETURN
  ========================================================== */

  return (
    <section
      id="home-technology"
      className="
        relative
        overflow-hidden
        bg-[#071A2D]
        px-5
        py-20
        font-['Roboto',sans-serif]
        text-white
        sm:px-8
        lg:px-10
        xl:px-16
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-40
            top-20
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#1769C2]/10
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
            bg-[#1769C2]/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[350px]
            w-[350px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#1769C2]/[0.025]
            blur-[100px]
          "
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-[1450px]">
        {/* =======================================================
            HEADER
        ======================================================== */}

        <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          {/* LEFT */}

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
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[#5EA5DF]" />

              <span className="text-[10px] font-semibold tracking-[0.3em] text-[#65A8DE]">
                TECHNOLOGY STACK
              </span>

              <span className="text-[9px] tracking-[0.2em] text-white/25">
                / BUILT TO SCALE
              </span>
            </div>

            <h2
              className="
                max-w-[850px]
                text-[clamp(3rem,6vw,6.3rem)]
                font-medium
                leading-[0.87]
                tracking-[-0.075em]
              "
            >
              Technology
              <br />

              <span className="text-[#5EA5DF]">
                behind the work.
              </span>
            </h2>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="lg:pb-2"
          >
            <p className="max-w-[480px] text-[14px] leading-7 text-white/45 sm:text-[14px] sm:leading-8">
              We select technologies based on the problem we're solving,
              combining modern frontend, backend, database, mobile,
              deployment and digital technologies to create practical
              solutions for businesses.
            </p>

            <Link
              to="/services"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-3
                border-b
                border-white/10
                pb-2
                text-[10px]
                font-semibold
                tracking-[0.2em]
                text-white
                transition-all
                duration-300
                hover:border-[#5EA5DF]
                hover:text-[#5EA5DF]
              "
            >
              EXPLORE OUR SERVICES

              <ArrowUpRight
                size={13}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </Link>
          </motion.div>
        </div>

        {/* =======================================================
            TECHNOLOGY INTRO BAR
        ======================================================== */}

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
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            mt-14
            flex
            flex-col
            justify-between
            gap-3
            border-y
            border-white/[0.08]
            py-5
            sm:flex-row
            sm:items-center
          "
        >
          <span className="text-[9px] font-semibold tracking-[0.25em] text-white/30">
            OUR TECHNOLOGY ECOSYSTEM
          </span>

          <span className="text-[7px] tracking-[0.22em] text-white/20">
            FRONTEND / BACKEND / DATA / MOBILE / CLOUD / GROWTH
          </span>
        </motion.div>

        {/* =======================================================
            DESKTOP TECHNOLOGY GRID
            -------------------------------------------------------
            ORIGINAL DESKTOP DESIGN.
            Only visible from lg and above.
        ======================================================== */}

        <div className="mt-5 hidden gap-3 md:grid-cols-2 lg:grid">
          {technologyGroups.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
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
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#5EA5DF]/30
                  hover:bg-white/[0.045]
                  hover:shadow-[0_25px_70px_rgba(0,0,0,0.18)]
                  sm:p-7
                "
              >
                {/* hover glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-44
                    w-44
                    rounded-full
                    bg-[#1769C2]/20
                    opacity-0
                    blur-[70px]
                    transition-all
                    duration-700
                    group-hover:opacity-100
                  "
                />

                {/* top */}

                <div className="relative flex items-start justify-between">
                  <div>
                    <span className="text-[9px] font-semibold tracking-[0.2em] text-[#5EA5DF]">
                      {item.number}
                    </span>

                    <span className="ml-3 text-[9px] tracking-[0.2em] text-white/25">
                      {item.label}
                    </span>
                  </div>

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-[14px]
                      border
                      border-white/[0.08]
                      bg-white/[0.035]
                      text-white/40
                      transition-all
                      duration-500
                      group-hover:border-[#5EA5DF]/30
                      group-hover:bg-[#1769C2]/10
                      group-hover:text-[#65A8DE]
                    "
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* title */}

                <div className="relative mt-10">
                  <h3
                    className="
                      text-[clamp(1.7rem,3vw,2.25rem)]
                      font-medium
                      leading-none
                      tracking-[-0.05em]
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-[#65A8DE]
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-[420px] text-[11px] leading-6 text-white/35 sm:text-[12px] sm:leading-7">
                    {item.description}
                  </p>
                </div>

                {/* technologies */}

                <div className="relative mt-7 flex flex-wrap gap-2">
                  {item.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-full
                          border
                          border-white/[0.08]
                          bg-white/[0.025]
                          px-3
                          py-2
                          text-[9px]
                          font-medium
                          tracking-[0.08em]
                          text-white/40
                          transition-all
                          duration-300
                          group-hover:border-white/[0.12]
                          group-hover:text-white/60
                        "
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>

                {/* bottom */}

                <div
                  className="
                    relative
                    mt-7
                    flex
                    items-center
                    justify-between
                    border-t
                    border-white/[0.06]
                    pt-4
                  "
                >
                  <span className="text-[7px] tracking-[0.16em] text-white/20">
                    CODEGENZ SOLUTIONS
                  </span>

                  <ArrowUpRight
                    size={12}
                    className="
                      text-white/20
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-[#65A8DE]
                    "
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =======================================================
            MOBILE + TABLET TECHNOLOGY CAROUSEL
            -------------------------------------------------------
            ONLY visible below lg.
        ======================================================== */}

        <div
          className="
            relative
            mt-5
            block
            lg:hidden
          "
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* =====================================================
              CAROUSEL AREA
          ====================================================== */}

          <div
            className="
              relative
              h-[620px]
              w-full
              overflow-hidden
              sm:h-[650px]
              md:h-[690px]
            "
          >
            {/* ===================================================
                DECORATIVE BACKGROUND LINES
            ==================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                -left-[180px]
                top-[120px]
                h-[420px]
                w-[420px]
                rounded-full
                border
                border-[#1769C2]/20
                rotate-[25deg]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -right-[180px]
                top-[170px]
                h-[420px]
                w-[420px]
                rounded-full
                border
                border-[#1769C2]/20
                -rotate-[25deg]
              "
            />

            {/* orange-blue glow */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[42%]
                h-[380px]
                w-[380px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#1769C2]/10
                blur-[100px]
              "
            />

            {/* ===================================================
                CARDS
            ==================================================== */}

            {technologyGroups.map(
              (item, index) => {
                const Icon = item.icon;

                const distance =
                  index - activeTechnology;

                const absoluteDistance =
                  Math.abs(distance);

                const isActive =
                  index === activeTechnology;

                const isSide =
                  absoluteDistance === 1;

                const isVisible =
                  absoluteDistance <= 2;

                return (
                  <motion.article
                    key={item.number}
                    initial={false}
                    animate={{
                      left: "50%",

                      x: `calc(
                        -50% +
                        (
                          min(74vw, 360px) + 18px
                        ) * ${distance}
                      )`,

                      y: isActive
                        ? 20
                        : isSide
                        ? 55
                        : 75,

                      scale: isActive
                        ? 1
                        : isSide
                        ? 0.88
                        : 0.78,

                      opacity: isVisible
                        ? isActive
                          ? 1
                          : isSide
                          ? 0.6
                          : 0.16
                        : 0,

                      rotateY: isActive
                        ? 0
                        : distance < 0
                        ? 7
                        : -7,

                      rotate:
                        isActive
                          ? 0
                          : distance < 0
                          ? -2
                          : 2,
                    }}
                    transition={{
                      duration: 0.65,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                    onClick={() =>
                      setActiveTechnology(
                        index
                      )
                    }
                    className="
                      absolute
                      top-0
                      z-10
                      h-[500px]
                      w-[min(74vw,360px)]
                      cursor-pointer
                      sm:h-[530px]
                      md:h-[550px]
                      md:w-[min(65vw,390px)]
                    "
                    style={{
                      pointerEvents:
                        isVisible
                          ? "auto"
                          : "none",

                      zIndex: isActive
                        ? 30
                        : isSide
                        ? 20
                        : 10,

                      perspective: "1200px",
                    }}
                  >
                    {/* =================================================
                        MAIN TECHNOLOGY CARD
                    ================================================== */}

                    <div
                      className={`
                        relative
                        h-full
                        w-full
                        overflow-hidden
                        rounded-[30px]
                        border
                        bg-[#0A1A2B]
                        transition-all
                        duration-500

                        ${
                          isActive
                            ? "border-[#5EA5DF]/60 shadow-[0_30px_90px_rgba(23,105,194,0.22)]"
                            : "border-white/[0.10] shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                        }
                      `}
                    >
                      {/* =================================================
                          CARD GLOW
                      ================================================== */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          -right-24
                          -top-24
                          h-64
                          w-64
                          rounded-full
                          bg-[#1769C2]/20
                          blur-[70px]
                        "
                      />

                      <div
                        className="
                          pointer-events-none
                          absolute
                          -bottom-24
                          -left-24
                          h-64
                          w-64
                          rounded-full
                          bg-[#1769C2]/10
                          blur-[70px]
                        "
                      />

                      {/* =================================================
                          DECORATIVE CIRCLE
                      ================================================== */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          -right-[55px]
                          -top-[55px]
                          h-[190px]
                          w-[190px]
                          rounded-full
                          border
                          border-white/[0.08]
                        "
                      />

                      <div
                        className="
                          pointer-events-none
                          absolute
                          -right-[20px]
                          -top-[20px]
                          h-[120px]
                          w-[120px]
                          rounded-full
                          border
                          border-[#5EA5DF]/20
                        "
                      />

                      {/* =================================================
                          NUMBER
                      ================================================== */}

                      <div
                        className="
                          absolute
                          left-5
                          top-5
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-[15px]
                          border
                          border-[#5EA5DF]/40
                          bg-[#1769C2]/15
                          text-[#65A8DE]
                        "
                      >
                        <span className="text-[13px] font-semibold">
                          {item.number}
                        </span>
                      </div>

                      {/* =================================================
                          ICON
                      ================================================== */}

                      <div
                        className="
                          absolute
                          right-5
                          top-5
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-[18px]
                          border
                          border-[#5EA5DF]/30
                          bg-[#1769C2]/10
                          text-[#65A8DE]
                          shadow-[0_10px_40px_rgba(23,105,194,0.18)]
                        "
                      >
                        <Icon
                          size={24}
                          strokeWidth={1.4}
                        />
                      </div>

                      {/* =================================================
                          MAIN CARD CONTENT
                      ================================================== */}

                      <div
                        className="
                          relative
                          flex
                          h-full
                          flex-col
                          px-5
                          pb-5
                          pt-[105px]
                          sm:px-6
                          sm:pb-6
                          md:px-7
                        "
                      >
                        {/* CATEGORY */}

                        <span
                          className="
                            text-[8px]
                            font-semibold
                            tracking-[0.25em]
                            text-[#65A8DE]
                          "
                        >
                          {item.label}
                        </span>

                        {/* TITLE */}

                        <h3
                          className="
                            mt-3
                            text-[30px]
                            font-medium
                            leading-none
                            tracking-[-0.055em]
                            text-white
                            sm:text-[34px]
                            md:text-[38px]
                          "
                        >
                          {item.title}
                        </h3>

                        {/* DESCRIPTION */}

                        <p
                          className="
                            mt-5
                            text-[11px]
                            leading-6
                            text-white/45
                            sm:text-[12px]
                            sm:leading-7
                          "
                        >
                          {item.description}
                        </p>

                        {/* TECHNOLOGIES */}

                        <div
                          className="
                            mt-6
                            flex
                            flex-wrap
                            gap-2
                          "
                        >
                          {item.technologies.map(
                            (technology) => (
                              <span
                                key={technology}
                                className="
                                  rounded-full
                                  border
                                  border-white/[0.12]
                                  bg-white/[0.035]
                                  px-3
                                  py-2
                                  text-[8px]
                                  font-medium
                                  tracking-[0.06em]
                                  text-white/65
                                  backdrop-blur-sm
                                  sm:text-[9px]
                                "
                              >
                                {technology}
                              </span>
                            )
                          )}
                        </div>

                        {/* =================================================
                            LEARN MORE
                        ================================================== */}

                        <div className="mt-auto pt-6">
                          <Link
                            to="/services"
                            onClick={(event) =>
                              event.stopPropagation()
                            }
                            className="
                              group
                              flex
                              w-full
                              items-center
                              justify-between
                              rounded-full
                              border
                              border-[#5EA5DF]/60
                              bg-[#1769C2]
                              px-5
                              py-3.5
                              text-[10px]
                              font-semibold
                              tracking-[0.16em]
                              text-white
                              shadow-[0_12px_35px_rgba(23,105,194,0.25)]
                              transition-all
                              duration-300
                              hover:bg-[#2378d2]
                            "
                          >
                            <span>
                              LEARN MORE
                            </span>

                            <span
                              className="
                                flex
                                h-7
                                w-7
                                items-center
                                justify-center
                                rounded-full
                                bg-white/10
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                              "
                            >
                              <ArrowRight
                                size={13}
                              />
                            </span>
                          </Link>
                        </div>
                      </div>

                      {/* ACTIVE BOTTOM LINE */}

                      <motion.div
                        initial={false}
                        animate={{
                          width: isActive
                            ? "100%"
                            : "0%",
                        }}
                        transition={{
                          duration: 0.45,
                        }}
                        className="
                          absolute
                          bottom-0
                          left-0
                          h-[3px]
                          bg-[#5EA5DF]
                        "
                      />
                    </div>
                  </motion.article>
                );
              }
            )}

            {/* ===================================================
                LEFT ARROW
                Vertically centered like reference image.
            ==================================================== */}

            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous technology"
              className="
                group
                absolute
                left-1
                top-[270px]
                z-50
                flex
                h-12
                w-12
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-[#5EA5DF]/60
                bg-[#071A2D]/90
                text-white
                shadow-[0_10px_35px_rgba(0,0,0,0.3)]
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-[#1769C2]
                active:scale-95
                sm:left-2
                sm:h-14
                sm:w-14
                md:left-4
                md:top-[290px]
              "
            >
              <ArrowLeft
                size={19}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                "
              />
            </button>

            {/* ===================================================
                RIGHT ARROW
            ==================================================== */}

            <button
              type="button"
              onClick={goNext}
              aria-label="Next technology"
              className="
                group
                absolute
                right-1
                top-[270px]
                z-50
                flex
                h-12
                w-12
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-[#5EA5DF]/60
                bg-[#071A2D]/90
                text-white
                shadow-[0_10px_35px_rgba(0,0,0,0.3)]
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-[#1769C2]
                active:scale-95
                sm:right-2
                sm:h-14
                sm:w-14
                md:right-4
                md:top-[290px]
              "
            >
              <ArrowRight
                size={19}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </div>

          {/* =====================================================
              PAGINATION
          ====================================================== */}

          <div className="relative z-40 mt-1 flex items-center justify-center gap-2.5">
            {technologyGroups.map(
              (item, index) => {
                const isActive =
                  index === activeTechnology;

                return (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() =>
                      goToTechnology(index)
                    }
                    aria-label={`Go to ${item.title}`}
                    className={`
                      rounded-full
                      transition-all
                      duration-500

                      ${
                        isActive
                          ? "h-2.5 w-8 bg-[#5EA5DF] shadow-[0_0_15px_rgba(94,165,223,0.45)]"
                          : "h-2.5 w-2.5 bg-white/20 hover:bg-white/40"
                      }
                    `}
                  />
                );
              }
            )}
          </div>

          {/* =====================================================
              SWIPE LABEL
          ====================================================== */}

          <div className="relative z-40 mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-white/10" />

            <span className="text-[8px] font-semibold tracking-[0.22em] text-white/25">
              SWIPE TO EXPLORE
            </span>

            <span className="h-px w-8 bg-white/10" />
          </div>
        </div>

        {/* =======================================================
            STACK HIGHLIGHT
        ======================================================== */}

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
            mt-5
            overflow-hidden
            rounded-[24px]
            border
            border-white/[0.08]
            bg-[#0B243D]
            p-6
            sm:p-8
            lg:p-10
          "
        >
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            {/* left */}

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-7 bg-[#5EA5DF]" />

                <span className="text-[9px] font-semibold tracking-[0.25em] text-[#65A8DE]">
                  OUR APPROACH
                </span>
              </div>

              <h3
                className="
                  max-w-[550px]
                  text-[clamp(2rem,4vw,3.6rem)]
                  font-medium
                  leading-[0.92]
                  tracking-[-0.06em]
                "
              >
                The right stack
                <br />

                <span className="text-[#5EA5DF]">
                  for the right job.
                </span>
              </h3>
            </div>

            {/* right */}

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                {
                  icon: Layers3,
                  title: "FLEXIBLE",
                  text: "Choose technologies around the actual project requirements.",
                },
                {
                  icon: Code2,
                  title: "MODERN",
                  text: "Use current development practices to create maintainable products.",
                },
                {
                  icon: Globe2,
                  title: "SCALABLE",
                  text: "Build foundations that can evolve as the business grows.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      rounded-[18px]
                      border
                      border-white/[0.07]
                      bg-white/[0.025]
                      p-5
                    "
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.5}
                      className="text-[#65A8DE]"
                    />

                    <h4 className="mt-5 text-[9px] font-semibold tracking-[0.2em] text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-[10px] leading-5 text-white/35">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            CTA
        ======================================================== */}

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
            duration: 0.65,
          }}
          className="
            mt-10
            flex
            flex-col
            gap-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <p className="text-[12px] font-semibold text-white">
              Have a technology challenge?
            </p>

            <p className="mt-2 max-w-[550px] text-[12px] leading-6 text-white/35">
              Tell us what you want to build and we'll help you choose
              the right technology direction for your project.
            </p>
          </div>

          <Link
            to="/contact"
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-4
              rounded-full
              bg-[#1769C2]
              px-7
              py-4
              text-[10px]
              font-semibold
              tracking-[0.2em]
              text-white
              shadow-[0_15px_40px_rgba(23,105,194,0.2)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#2378d2]
              hover:shadow-[0_20px_50px_rgba(23,105,194,0.3)]
            "
          >
            START A PROJECT

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
        </motion.div>

        {/* =======================================================
            TECHNOLOGY MARQUEE
        ======================================================== */}

        <div className="mt-14 overflow-hidden border-y border-white/[0.07] py-5">
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max items-center gap-8 whitespace-nowrap"
          >
            {[
              ...marqueeTechnologies,
              ...marqueeTechnologies,
            ].map((technology, index) => (
              <React.Fragment
                key={`${technology}-${index}`}
              >
                <span
                  className="
                    text-[10px]
                    font-semibold
                    tracking-[0.2em]
                    text-white/25
                  "
                >
                  {technology}
                </span>

                <span className="h-1 w-1 rounded-full bg-[#1769C2]" />
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeTechnology;