import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
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

const HomeServices = () => {
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
            PREMIUM SERVICE GRID
        ======================================================== */}

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

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
                  ${isLarge ? "md:col-span-2 lg:col-span-2" : ""}
                `}
              >

                {/* =================================================
                    HOVER GLOW
                ================================================== */}

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

                {/* =================================================
                    TOP
                ================================================== */}

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

                {/* =================================================
                    CATEGORY
                ================================================== */}

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

                {/* =================================================
                    DESCRIPTION
                ================================================== */}

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

                {/* =================================================
                    FEATURES
                ================================================== */}

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

                {/* =================================================
                    LARGE CARD EXTRA ELEMENT
                ================================================== */}

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

                {/* =================================================
                    BOTTOM LINE
                ================================================== */}

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