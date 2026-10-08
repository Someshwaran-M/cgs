import React, { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Code2,
  Palette,
  Smartphone,
  Search,
  Megaphone,
  PenTool,
  ShoppingBag,
  ServerCog,
  Layers3,
  Check,
} from "lucide-react";

import { Link } from "react-router-dom";

/* =========================================================
   HOME SERVICES
========================================================= */

const HomeServices = () => {
  /* =========================================================
     SERVICES DATA
  ========================================================= */

  const services = [
    {
      number: "01",
      icon: Code2,
      category: "DEVELOPMENT",
      title: "Website Development",
      shortTitle: "Websites",
      description:
        "Modern, responsive and high-performance websites designed around your brand, business goals and customers.",
      features: [
        "Business Websites",
        "Corporate Websites",
        "Landing Pages",
      ],
      size: "large",
    },

    {
      number: "02",
      icon: Palette,
      category: "DESIGN",
      title: "UI / UX Design",
      shortTitle: "UI / UX",
      description:
        "Thoughtful interfaces and user experiences designed to make digital products simple, engaging and memorable.",
      features: [
        "Website UI",
        "Web App Interfaces",
        "Design Systems",
      ],
      size: "normal",
    },

    {
      number: "03",
      icon: Smartphone,
      category: "APPLICATIONS",
      title: "Web Applications",
      shortTitle: "Web Apps",
      description:
        "Scalable web applications created for business workflows, custom platforms and digital products.",
      features: [
        "Custom Applications",
        "Admin Dashboards",
        "API Integration",
      ],
      size: "normal",
    },

    {
      number: "04",
      icon: ShoppingBag,
      category: "COMMERCE",
      title: "E-Commerce Development",
      shortTitle: "E-Commerce",
      description:
        "Conversion-focused online stores with modern interfaces, product management and secure customer experiences.",
      features: [
        "Online Stores",
        "Product Management",
        "Payment Integration",
      ],
      size: "normal",
    },

    {
      number: "05",
      icon: Smartphone,
      category: "MOBILE",
      title: "Mobile App Development",
      shortTitle: "Mobile Apps",
      description:
        "Mobile-first digital experiences designed to help businesses connect with customers wherever they are.",
      features: [
        "Business Apps",
        "Customer Apps",
        "API Integration",
      ],
      size: "normal",
    },

    {
      number: "06",
      icon: ServerCog,
      category: "BACKEND",
      title: "API & Backend Development",
      shortTitle: "Backend",
      description:
        "Reliable backend systems and APIs that power applications, automate workflows and connect digital services.",
      features: [
        "REST APIs",
        "Database Integration",
        "Authentication",
      ],
      size: "normal",
    },

    {
      number: "07",
      icon: Search,
      category: "VISIBILITY",
      title: "SEO Optimization",
      shortTitle: "SEO",
      description:
        "Search-focused optimization that improves discoverability, technical performance and organic visibility.",
      features: [
        "On-Page SEO",
        "Technical SEO",
        "Performance",
      ],
      size: "normal",
    },

    {
      number: "08",
      icon: Megaphone,
      category: "MARKETING",
      title: "Social Media Marketing",
      shortTitle: "Social Media",
      description:
        "Strategic digital marketing that strengthens your online presence and creates meaningful audience connections.",
      features: [
        "Social Strategy",
        "Content Planning",
        "Brand Promotion",
      ],
      size: "normal",
    },

    {
      number: "09",
      icon: PenTool,
      category: "BRANDING",
      title: "Graphic & Brand Design",
      shortTitle: "Branding",
      description:
        "Distinctive visual identities and marketing creatives that help businesses communicate with confidence.",
      features: [
        "Logo Design",
        "Brand Identity",
        "Marketing Creatives",
      ],
      size: "normal",
    },
  ];

  /* =========================================================
     MOBILE / TABLET CAROUSEL STATE
  ========================================================= */

  const [activeService, setActiveService] = useState(0);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  /* =========================================================
     AUTO RESET / KEYBOARD SUPPORT
  ========================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        setActiveService((prev) =>
          prev === 0 ? services.length - 1 : prev - 1
        );
      }

      if (event.key === "ArrowRight") {
        setActiveService((prev) =>
          prev === services.length - 1 ? 0 : prev + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [services.length]);

  /* =========================================================
     NAVIGATION
  ========================================================= */

  const goPrevious = () => {
    setActiveService((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setActiveService((prev) =>
      prev === services.length - 1 ? 0 : prev + 1
    );
  };

  const goToService = (index) => {
    setActiveService(index);
  };

  /* =========================================================
     TOUCH / SWIPE
  ========================================================= */

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchEndX.current === null
    ) {
      return;
    }

    const distance =
      touchStartX.current - touchEndX.current;

    const minimumSwipeDistance = 45;

    if (Math.abs(distance) >= minimumSwipeDistance) {
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
     RETURN
  ========================================================= */

  return (
    <section
      id="home-services"
      className="
        relative
        overflow-hidden
        bg-[#f7f9fc]
        px-5
        py-20
        font-['Roboto',sans-serif]
        text-[#071A2D]
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue glow */}

        <div
          className="
            absolute
            -left-40
            top-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#1769C2]/[0.035]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-0
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#1769C2]/[0.03]
            blur-[140px]
          "
        />

        {/* Very subtle vertical lines */}

        <div className="absolute left-[4%] top-0 h-full w-px bg-[#0b2239]/[0.025]" />

        <div className="absolute right-[4%] top-0 h-full w-px bg-[#0b2239]/[0.025]" />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-[1420px]">
        {/* =======================================================
            HEADER
        ======================================================== */}

        <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          {/* LEFT */}

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
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#1769C2]" />

              <span className="text-[10px] font-semibold tracking-[0.3em] text-[#1769C2]">
                WHAT WE DO
              </span>
            </div>

            <h2
              className="
                max-w-[850px]
                text-[clamp(3rem,6vw,6.5rem)]
                font-medium
                leading-[0.86]
                tracking-[-0.075em]
              "
            >
              Digital
              <br />

              <span className="text-[#1769C2]">
                solutions
              </span>

              <span className="text-[#b9c5cf]">
                .
              </span>
            </h2>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
            className="lg:pb-2"
          >
            <p className="max-w-[440px] text-[14px] leading-7 text-[#718398] sm:text-[13px] sm:leading-8">
              We combine strategy, design, development and digital growth
              to create experiences that are useful, scalable and built
              around real business goals.
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
                border-[#ccd6df]
                pb-2
                text-[10px]
                font-semibold
                tracking-[0.2em]
                text-[#1769C2]
                transition-all
                duration-300
                hover:border-[#1769C2]
              "
            >
              VIEW ALL SERVICES

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
            TOP DIVIDER
        ======================================================== */}

        <div className="mt-14 border-t border-[#dce4eb]" />

        {/* =======================================================
            SERVICES INTRO
        ======================================================== */}

        <div className="flex flex-col justify-between gap-3 py-5 sm:flex-row sm:items-center">
          <span className="text-[9px] tracking-[0.28em] text-[#9daab6]">
            OUR CAPABILITIES
          </span>

          <span className="text-[8px] tracking-[0.25em] text-[#b1bbc4]">
            DESIGN / DEVELOP / OPTIMIZE / GROW
          </span>
        </div>

        {/* =======================================================
            DESKTOP SERVICE GRID
            -----------------------------------------------
            IMPORTANT:
            This remains the original desktop design.
            It starts at lg breakpoint.
        ======================================================== */}

        <div className="hidden gap-4 md:grid-cols-2 lg:grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLarge = index === 0;

            return (
              <motion.div
                key={service.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-[#dfe7ee]
                  bg-white
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#b9d0e6]
                  hover:shadow-[0_25px_70px_rgba(7,26,45,0.08)]
                  sm:p-7
                  ${isLarge ? "lg:col-span-2" : ""}
                `}
              >
                {/* HOVER GLOW */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-[#1769C2]/[0.06]
                    opacity-0
                    blur-[60px]
                    transition-all
                    duration-700
                    group-hover:opacity-100
                  "
                />

                {/* TOP */}

                <div className="relative flex items-start justify-between">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-[14px]
                      border
                      border-[#dce6ee]
                      bg-[#f8fafc]
                      text-[#1769C2]
                      transition-all
                      duration-500
                      group-hover:border-[#1769C2]
                      group-hover:bg-[#1769C2]
                      group-hover:text-white
                    "
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className="
                        text-[9px]
                        font-semibold
                        tracking-[0.18em]
                        text-[#1769C2]
                      "
                    >
                      {service.number}
                    </span>

                    <div
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#e0e7ed]
                        text-[#91a0ad]
                        transition-all
                        duration-500
                        group-hover:border-[#1769C2]
                        group-hover:bg-[#1769C2]
                        group-hover:text-white
                      "
                    >
                      <ArrowUpRight
                        size={12}
                        className="
                          transition-transform
                          duration-500
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />
                    </div>
                  </div>
                </div>

                {/* CATEGORY */}

                <div className="relative mt-10">
                  <span
                    className="
                      text-[9px]
                      font-semibold
                      tracking-[0.25em]
                      text-[#a3b0bc]
                    "
                  >
                    {service.category}
                  </span>

                  <h3
                    className={`
                      mt-3
                      max-w-[620px]
                      font-medium
                      leading-[1]
                      tracking-[-0.045em]
                      text-[#102a43]
                      transition-colors
                      duration-300
                      group-hover:text-[#1769C2]
                      ${
                        isLarge
                          ? "text-[clamp(2rem,4vw,3.5rem)]"
                          : "text-[clamp(1.7rem,3vw,2.35rem)]"
                      }
                    `}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}

                <p
                  className={`
                    relative
                    mt-5
                    max-w-[560px]
                    text-[12px]
                    leading-6
                    text-[#7b8b9b]
                    sm:text-[11px]
                    sm:leading-7
                    ${isLarge ? "lg:max-w-[600px]" : ""}
                  `}
                >
                  {service.description}
                </p>

                {/* FEATURES */}

                <div className="relative mt-7 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        border-[#e4eaf0]
                        bg-[#fafcfd]
                        px-3
                        py-2
                        text-[9px]
                        text-[#7e8e9d]
                        transition-all
                        duration-300
                        group-hover:border-[#d3e1ed]
                      "
                    >
                      <Check
                        size={9}
                        className="text-[#1769C2]"
                        strokeWidth={2.5}
                      />

                      {feature}
                    </span>
                  ))}
                </div>

                {/* LARGE CARD EXTRA ELEMENT */}

                {isLarge && (
                  <div className="pointer-events-none absolute bottom-[-25px] right-[-10px] hidden select-none lg:block">
                    <span
                      className="
                        text-[150px]
                        font-bold
                        leading-none
                        tracking-[-0.1em]
                        text-[#071A2D]/[0.025]
                      "
                    >
                      01
                    </span>
                  </div>
                )}

                {/* BOTTOM LINE */}

                <div className="relative mt-8 flex items-center justify-between border-t border-[#edf1f4] pt-4">
                  <span className="text-[7px] tracking-[0.18em] text-[#a7b3be]">
                    CODEGENZ SOLUTIONS
                  </span>

                  <span className="text-[7px] tracking-[0.18em] text-[#b1bbc4]">
                    {service.shortTitle}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =======================================================
            MOBILE + TABLET PREMIUM CAROUSEL

            Only visible below lg.
        ======================================================== */}

        <div
          className="
            relative
            mt-2
            block
            overflow-hidden
            lg:hidden
          "
          style={{
            "--service-card-width":
              "min(78vw, 360px)",
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* =====================================================
              CAROUSEL VIEWPORT
          ====================================================== */}

          <div
            className="
              relative
              h-[590px]
              w-full
              md:h-[620px]
            "
          >
            {/* ===================================================
                SOFT CENTER GLOW
            ==================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[42%]
                h-[330px]
                w-[330px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#1769C2]/[0.055]
                blur-[100px]
              "
            />

         


            {/* ===================================================
                SERVICE CARDS
            ==================================================== */}

            {services.map((service, index) => {
              const Icon = service.icon;

              const distance =
                index - activeService;

              const absoluteDistance =
                Math.abs(distance);

              const isActive =
                index === activeService;

              const isNear =
                absoluteDistance === 1;

              const isVisible =
                absoluteDistance <= 2;

              return (
                <motion.article
                  key={service.number}
                  initial={false}
                  animate={{
                    left: "50%",

                    x: `calc(
                      -50% +
                      (
                        var(--service-card-width) + 18px
                      ) * ${distance}
                    )`,

                    y: isActive
                      ? 5
                      : isNear
                      ? 28
                      : 48,

                    scale: isActive
                      ? 1
                      : isNear
                      ? 0.9
                      : 0.82,

                    opacity: isVisible
                      ? isActive
                        ? 1
                        : isNear
                        ? 0.58
                        : 0.2
                      : 0,

                    rotate: isActive
                      ? 0
                      : distance < 0
                      ? -2.5
                      : 2.5,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() =>
                    setActiveService(index)
                  }
                  className="
                    absolute
                    top-[30px]
                    z-10
                    h-[510px]
                    w-[var(--service-card-width)]
                    cursor-pointer
                    md:top-[35px]
                    md:h-[540px]
                  "
                  style={{
                    pointerEvents:
                      isVisible
                        ? "auto"
                        : "none",
                    zIndex: isActive
                      ? 30
                      : isNear
                      ? 20
                      : 10,
                  }}
                >
                  {/* =================================================
                      PREMIUM MOBILE CARD
                  ================================================== */}

                  <div
                    className={`
                      relative
                      h-full
                      w-full
                      overflow-hidden
                      rounded-[30px]
                      border
                      bg-white
                      transition-all
                      duration-500

                      ${
                        isActive
                          ? "border-[#1769C2]/35 shadow-[0_30px_80px_rgba(7,26,45,0.16)]"
                          : "border-[#dce5ed] shadow-[0_15px_40px_rgba(7,26,45,0.08)]"
                      }
                    `}
                  >
                    {/* =================================================
                        TOP DARK VISUAL AREA
                    ================================================== */}

                    <div
                      className="
                        relative
                        h-[170px]
                        overflow-hidden
                        bg-[#071A2D]
                        md:h-[215px]
                      "
                    >
                      {/* Glow */}

                      <div
                        className="
                          absolute
                          -right-10
                          -top-10
                          h-40
                          w-40
                          rounded-full
                          bg-[#1769C2]/20
                          blur-[45px]
                        "
                      />

                      <div
                        className="
                          absolute
                          -bottom-16
                          -left-10
                          h-36
                          w-36
                          rounded-full
                          bg-[#1769C2]/10
                          blur-[45px]
                        "
                      />

                      {/* Decorative circle */}

                      <div
                        className="
                          absolute
                          right-[-45px]
                          top-[-45px]
                          h-[170px]
                          w-[170px]
                          rounded-full
                          border
                          border-white/10
                        "
                      />

                      <div
                        className="
                          absolute
                          right-[-15px]
                          top-[-15px]
                          h-[110px]
                          w-[110px]
                          rounded-full
                          border
                          border-[#1769C2]/20
                        "
                      />

                      {/* NUMBER */}

                      <div
                        className="
                          absolute
                          left-5
                          top-5
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-[14px]
                          border
                          border-white/10
                          bg-[#1769C2]
                          text-white
                          shadow-lg
                        "
                      >
                        <span className="text-[13px] font-semibold">
                          {service.number}
                        </span>
                      </div>

                      {/* ICON */}

                      <div
                        className="
                          absolute
                          right-5
                          top-5
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#1769C2]/30
                          bg-[#1769C2]/15
                          text-[#63A9FF]
                          backdrop-blur-md
                        "
                      >
                        <Icon
                          size={21}
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* CATEGORY */}

                      <div className="absolute bottom-5 left-5 right-5">
                        <span className="text-[8px] font-semibold tracking-[0.25em] text-[#63A9FF]">
                          {service.category}
                        </span>

                        <h3
                          className="
                            mt-2
                            max-w-[290px]
                            text-[25px]
                            font-semibold
                            leading-[1.05]
                            tracking-[-0.045em]
                            text-white
                            md:text-[29px]
                          "
                        >
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* =================================================
                        CARD CONTENT
                    ================================================== */}

                    <div
                      className="
                        flex
                        h-[315px]
                        flex-col
                        justify-between
                        p-5
                        md:h-[325px]
                        md:p-6
                      "
                    >
                      {/* DESCRIPTION */}

                      <div>
                        <p
                          className="
                            text-[11px]
                            leading-6
                            text-[#718398]
                            md:text-[12px]
                            md:leading-7
                          "
                        >
                          {service.description}
                        </p>

                        {/* FEATURES */}

                        <div className="mt-2.5 space-y-2.5">
                          {service.features.map(
                            (feature) => (
                              <div
                                key={feature}
                                className="
                                  flex
                                  items-center
                                  gap-2
                                  rounded-full
                                  border
                                  border-[#dfe7ee]
                                  bg-[#fafcfd]
                                  px-3
                                  py-2.5
                                "
                              >
                                <span
                                  className="
                                    flex
                                    h-6
                                    w-6
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#1769C2]
                                    text-white
                                  "
                                >
                                  <Check
                                    size={11}
                                    strokeWidth={2.5}
                                  />
                                </span>

                                <span className="text-[10px] font-medium text-[#203B58]">
                                  {feature}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      {/* LEARN MORE */}

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
                          bg-[#1769C2]
                          px-5
                          py-3.5
                          text-[10px]
                          font-semibold
                          tracking-[0.12em]
                          text-white
                          shadow-[0_12px_30px_rgba(23,105,194,0.18)]
                          transition-all
                          duration-300
                          hover:bg-[#0F559F]
                          mt-2.5
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
                          <ArrowRight size={13} />
                        </span>
                      </Link>
                    </div>

                    {/* ACTIVE LINE */}

                    <div
                      className={`
                        absolute
                        bottom-0
                        left-0
                        h-[3px]
                        bg-[#1769C2]
                        transition-all
                        duration-500

                        ${
                          isActive
                            ? "w-full"
                            : "w-0"
                        }
                      `}
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* =====================================================
              CAROUSEL CONTROLS
          ====================================================== */}

          <div
            className="
              relative
              z-40
              mt-2
              flex
              items-center
              justify-center
              gap-7
              md:mt-4
            "
          >
            {/* PREVIOUS */}

            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous service"
              className="
                group
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-[#071A2D]
                text-white
                shadow-[0_12px_30px_rgba(7,26,45,0.14)]
                transition-all
                duration-300
                hover:-translate-x-1
                hover:bg-[#1769C2]
                active:scale-95
                md:h-14
                md:w-14
              "
            >
              <ArrowLeft
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-x-0.5
                "
              />
            </button>

            {/* DOTS */}

            <div className="flex items-center gap-2.5">
              {services.map((service, index) => {
                const isActive =
                  index === activeService;

                return (
                  <button
                    key={service.number}
                    type="button"
                    onClick={() =>
                      goToService(index)
                    }
                    aria-label={`Go to ${service.title}`}
                    className={`
                      rounded-full
                      transition-all
                      duration-400

                      ${
                        isActive
                          ? "h-2.5 w-7 bg-[#1769C2]"
                          : "h-2.5 w-2.5 bg-[#d9e0e6] hover:bg-[#9fb7cc]"
                      }
                    `}
                  />
                );
              })}
            </div>

            {/* NEXT */}

            <button
              type="button"
              onClick={goNext}
              aria-label="Next service"
              className="
                group
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-[#071A2D]
                text-white
                shadow-[0_12px_30px_rgba(7,26,45,0.14)]
                transition-all
                duration-300
                hover:translate-x-1
                hover:bg-[#1769C2]
                active:scale-95
                md:h-14
                md:w-14
              "
            >
              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                "
              />
            </button>
          </div>

          {/* =====================================================
              MOBILE CAROUSEL INFO
          ====================================================== */}

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#dce4eb]" />

            <span className="text-[8px] font-semibold tracking-[0.22em] text-[#9daab6]">
              SWIPE TO EXPLORE
            </span>

            <span className="h-px w-8 bg-[#dce4eb]" />
          </div>
        </div>

        {/* =======================================================
            SERVICE PHILOSOPHY
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
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-5
            overflow-hidden
            rounded-[24px]
            bg-[#071A2D]
            px-6
            py-8
            text-white
            sm:px-8
            sm:py-9
            lg:px-10
          "
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* LEFT */}

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-7 bg-[#5b9fe0]" />

                <span className="text-[10px] tracking-[0.25em] text-[#83b5df]">
                  OUR APPROACH
                </span>
              </div>

              <h3
                className="
                  max-w-[600px]
                  text-[clamp(2rem,4vw,3.7rem)]
                  font-medium
                  leading-[0.95]
                  tracking-[-0.06em]
                "
              >
                Built for today.
                <br />

                <span className="text-[#5f9fd7]">
                  Ready for tomorrow.
                </span>
              </h3>
            </div>

            {/* RIGHT */}

            <div className="grid gap-5 sm:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "STRATEGY",
                  text: "Understand the problem before building the solution.",
                },
                {
                  number: "02",
                  title: "CREATION",
                  text: "Combine design and technology into a useful experience.",
                },
                {
                  number: "03",
                  title: "GROWTH",
                  text: "Build with performance, usability and future growth in mind.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="border-l border-white/10 pl-4"
                >
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#5f9fd7]">
                    {item.number}
                  </span>

                  <h4 className="mt-3 text-[10px] font-semibold tracking-[0.18em] text-white">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-[11px] leading-5 text-white/45">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            FINAL CTA
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
          transition={{
            duration: 0.65,
          }}
          viewport={{
            once: true,
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
            <p className="text-[12px] font-semibold text-[#203b58]">
              Have a project in mind?
            </p>

            <p className="mt-2 max-w-[500px] text-[12px] leading-6 text-[#8a9aaa]">
              Tell us what you want to build. We'll help you choose the right
              technology, design direction and development approach.
            </p>
          </div>

          <Link
            to="/contact?quote=true"
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
              text-[9px]
              font-semibold
              tracking-[0.2em]
              text-white
              shadow-[0_15px_40px_rgba(23,105,194,0.18)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#0f559f]
              hover:shadow-[0_20px_50px_rgba(23,105,194,0.25)]
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
      </div>
    </section>
  );
};

export default HomeServices;