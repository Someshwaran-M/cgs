import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
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

const HomeTechnology = () => {
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
            TECHNOLOGY GRID
        ======================================================== */}

        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">

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

                  {item.technologies.map((technology) => (

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

                  ))}

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

            {[...marqueeTechnologies, ...marqueeTechnologies].map(
              (technology, index) => (
                <React.Fragment key={`${technology}-${index}`}>

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
              ),
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default HomeTechnology;