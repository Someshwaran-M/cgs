import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Palette,
  Smartphone,
  Search,
  Megaphone,
  PenTool,
  Database,
  Cloud,
  ShieldCheck,
  Check,
  Plus,
  Minus,
  Layers3,
  Sparkles,
} from "lucide-react";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      number: "01",
      icon: Code2,
      title: "Website Designing & Development",
      shortTitle: "Web Development",
      description:
        "Modern, responsive and high-performance websites designed around your brand, business goals and customer experience.",
      features: [
        "Business Websites",
        "Corporate Websites",
        "Landing Pages",
        "Custom Web Development",
      ],
    },
    {
      number: "02",
      icon: Palette,
      title: "UI / UX Design",
      shortTitle: "UI / UX Design",
      description:
        "Clean and intuitive digital interfaces that combine visual quality with simple, user-focused experiences.",
      features: [
        "Website UI Design",
        "Web App Interfaces",
        "Design Systems",
        "User Experience",
      ],
    },
    {
      number: "03",
      icon: Smartphone,
      title: "Web Application Development",
      shortTitle: "Web Applications",
      description:
        "Scalable web applications built with modern technologies to support real business workflows and digital products.",
      features: [
        "Custom Applications",
        "Admin Dashboards",
        "Business Platforms",
        "API Integration",
      ],
    },
    {
      number: "04",
      icon: Search,
      title: "SEO Optimization",
      shortTitle: "SEO",
      description:
        "Search-focused optimization strategies that improve website visibility, discoverability and organic reach.",
      features: [
        "On-Page SEO",
        "Technical SEO",
        "Keyword Optimization",
        "Performance Optimization",
      ],
    },
    {
      number: "05",
      icon: Megaphone,
      title: "Social Media Marketing",
      shortTitle: "Social Media",
      description:
        "Strategic social media solutions that help businesses build a stronger digital presence and connect with their audience.",
      features: [
        "Social Media Strategy",
        "Content Planning",
        "Campaign Management",
        "Brand Promotion",
      ],
    },
    {
      number: "06",
      icon: PenTool,
      title: "Graphic Designing",
      shortTitle: "Graphic Design",
      description:
        "Creative visual communication designed to establish a consistent and recognizable brand identity.",
      features: [
        "Logo Design",
        "Branding",
        "Social Media Creatives",
        "Marketing Materials",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Database,
      title: "Database Solutions",
      text: "Structured and reliable database solutions for modern applications.",
    },
    {
      icon: Cloud,
      title: "Cloud & Deployment",
      text: "Deployment and hosting solutions for reliable digital products.",
    },
    {
      icon: ShieldCheck,
      title: "Security & Maintenance",
      text: "Ongoing maintenance and security-focused technical support.",
    },
  ];

  const active = services[activeService];
  const ActiveIcon = active.icon;

  return (
    <main className="overflow-hidden bg-white font-['Roboto',sans-serif] text-[#071A2D]">

      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#061525]">

        {/* Large typography decoration */}
        <div className="pointer-events-none absolute -right-8 top-20 select-none text-[180px] font-bold leading-none tracking-[-0.09em] text-white/[0.025] sm:text-[260px] lg:text-[360px]">
          CGS
        </div>

        {/* Accent glow */}
        <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-20 pt-36 sm:px-8 sm:pb-24 sm:pt-40 lg:px-12 lg:pb-28">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="max-w-[1000px]"
          >

            {/* Eyebrow */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -25 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6 },
                },
              }}
              className="mb-7 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-[#4D9BFF]" />

              <span className="text-[9px] font-semibold tracking-[0.35em] text-[#6EAEFF] sm:text-[10px]">
                WHAT WE DO
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={{
                hidden: {
                  opacity: 0,
                  y: 35,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="max-w-[1050px] text-[clamp(3.2rem,7vw,7.4rem)] font-medium leading-[0.86] tracking-[-0.07em] text-white"
            >
              We build
              <br />

              <span className="text-white/35">
                digital
              </span>{" "}

              <span className="text-[#579FFF]">
                possibilities.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                  y: 25,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                  },
                },
              }}
              className="mt-8 max-w-[680px] text-sm leading-7 text-white/50 sm:text-base sm:leading-8"
            >
              From websites and applications to branding and digital
              marketing, we create technology solutions that help businesses
              build, grow and connect.
            </motion.p>

            {/* Bottom meta */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 0.7,
                  },
                },
              }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-5"
            >

              <div className="flex items-center gap-3">
                <span className="text-[9px] tracking-[0.25em] text-white/30">
                  SERVICES
                </span>

                <span className="h-px w-7 bg-white/15" />

                <span className="text-[9px] tracking-[0.2em] text-[#6EAEFF]">
                  06 CORE DISCIPLINES
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[9px] tracking-[0.25em] text-white/30">
                  APPROACH
                </span>

                <span className="h-px w-7 bg-white/15" />

                <span className="text-[9px] tracking-[0.2em] text-white/55">
                  STRATEGY → DESIGN → BUILD
                </span>
              </div>

            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================== */}

      <section className="bg-white py-20 sm:py-24 lg:py-32">

        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12">

          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-28">

            {/* Left */}
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
              }}
            >

              <span className="text-[9px] font-semibold tracking-[0.32em] text-[#1769C2]">
                OUR EXPERTISE
              </span>

              <h2 className="mt-5 max-w-[760px] text-[clamp(2.5rem,4.8vw,5.2rem)] font-medium leading-[0.94] tracking-[-0.06em] text-[#0B243D]">
                Different disciplines.
                <br />

                <span className="text-[#1769C2]">
                  One digital vision.
                </span>
              </h2>

            </motion.div>

            {/* Right */}
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
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
              }}
              className="lg:pt-8"
            >

              <p className="max-w-[600px] text-sm leading-8 text-[#667A8E] sm:text-base">
                We bring design, development and digital strategy together
                under one roof. Every solution is planned around usability,
                performance, scalability and your business objectives.
              </p>

              <div className="mt-9 flex items-center gap-6">

                {[
                  ["01", "DISCOVER"],
                  ["02", "CREATE"],
                  ["03", "DELIVER"],
                ].map(([number, label], index) => (
                  <React.Fragment key={number}>

                    {index > 0 && (
                      <span className="h-9 w-px bg-[#DCE5ED]" />
                    )}

                    <div>
                      <span className="text-2xl font-medium tracking-[-0.05em] text-[#1769C2]">
                        {number}
                      </span>

                      <p className="mt-1 text-[8px] font-semibold tracking-[0.2em] text-[#9AA9B7]">
                        {label}
                      </p>
                    </div>

                  </React.Fragment>
                ))}

              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================
          INTERACTIVE SERVICES
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#F4F7FA]">

        <div className="mx-auto w-full max-w-[1600px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">

          {/* Section heading */}
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
            className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end lg:mb-16"
          >

            <div>

              <span className="text-[9px] font-semibold tracking-[0.32em] text-[#1769C2]">
                CORE SERVICES
              </span>

              <h2 className="mt-4 text-[clamp(2.5rem,4vw,4.8rem)] font-medium leading-[0.95] tracking-[-0.06em] text-[#0B243D]">
                What we
                <br className="sm:hidden" />{" "}
                <span className="text-[#9AA9B7]">
                  create.
                </span>
              </h2>

            </div>

            <p className="max-w-[390px] text-xs leading-6 text-[#7B8C9D] md:text-right">
              Explore our core capabilities. Each service is designed to work
              independently or as part of a complete digital ecosystem.
            </p>

          </motion.div>

          {/* Main interactive area */}
          <div className="grid overflow-hidden rounded-[28px] bg-[#061525] lg:grid-cols-[0.9fr_1.1fr]">

            {/* Service navigation */}
            <div className="border-b border-white/10 lg:border-b-0 lg:border-r">

              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = activeService === index;

                return (
                  <button
                    key={service.number}
                    type="button"
                    onMouseEnter={() => setActiveService(index)}
                    onFocus={() => setActiveService(index)}
                    onClick={() => setActiveService(index)}
                    className={`group relative flex w-full items-center gap-4 border-b border-white/[0.07] px-5 py-5 text-left transition-all duration-500 last:border-b-0 sm:px-7 sm:py-6 lg:px-8 ${
                      isActive
                        ? "bg-white/[0.06]"
                        : "hover:bg-white/[0.035]"
                    }`}
                  >

                    {/* Active indicator */}
                    <motion.span
                      animate={{
                        scaleY: isActive ? 1 : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      className="absolute left-0 top-0 h-full w-1 origin-center bg-[#579FFF]"
                    />

                    {/* Number */}
                    <span
                      className={`w-7 shrink-0 text-[9px] font-semibold tracking-[0.15em] transition-colors duration-300 ${
                        isActive
                          ? "text-[#579FFF]"
                          : "text-white/20"
                      }`}
                    >
                      {service.number}
                    </span>

                    {/* Icon */}
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                        isActive
                          ? "border-[#579FFF]/30 bg-[#1769C2] text-white"
                          : "border-white/10 bg-white/[0.03] text-white/40 group-hover:text-white"
                      }`}
                    >
                      <Icon size={17} strokeWidth={1.5} />
                    </span>

                    {/* Title */}
                    <span
                      className={`flex-1 text-sm font-medium transition-colors duration-300 sm:text-base ${
                        isActive
                          ? "text-white"
                          : "text-white/45 group-hover:text-white/75"
                      }`}
                    >
                      {service.shortTitle}
                    </span>

                    {/* Arrow */}
                    <motion.span
                      animate={{
                        x: isActive ? 0 : -4,
                        opacity: isActive ? 1 : 0.25,
                      }}
                      className="text-[#579FFF]"
                    >
                      <ArrowUpRight size={17} />
                    </motion.span>

                  </button>
                );
              })}

            </div>

            {/* Active service presentation */}
            <div className="relative min-h-[430px] overflow-hidden bg-[#0A1D31] sm:min-h-[480px] lg:min-h-[580px]">

              {/* Background typography */}
              <AnimatePresence mode="wait">

                <motion.div
                  key={active.number}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -20,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                  className="absolute -right-4 top-3 select-none text-[180px] font-bold leading-none tracking-[-0.1em] text-white/[0.025] sm:text-[240px] lg:text-[320px]"
                >
                  {active.number}
                </motion.div>

              </AnimatePresence>

              {/* Blue glow */}
              <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[320px] w-[320px] rounded-full bg-blue-600/10 blur-[100px]" />

              <div className="relative z-10 flex h-full flex-col justify-between p-7 sm:p-10 lg:p-14">

                <AnimatePresence mode="wait">

                  <motion.div
                    key={active.number}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -15,
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                  >

                    {/* Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1769C2] text-white shadow-[0_12px_40px_rgba(23,105,194,0.25)] sm:h-16 sm:w-16">
                      <ActiveIcon size={25} strokeWidth={1.35} />
                    </div>

                    {/* Label */}
                    <div className="mt-8 flex items-center gap-3">

                      <span className="text-[9px] font-semibold tracking-[0.28em] text-[#579FFF]">
                        SERVICE {active.number}
                      </span>

                      <span className="h-px w-8 bg-white/10" />

                      <span className="text-[9px] tracking-[0.2em] text-white/25">
                        CODEGENZ
                      </span>

                    </div>

                    {/* Title */}
                    <h3 className="mt-5 max-w-[700px] text-[clamp(2rem,4vw,4.4rem)] font-medium leading-[0.94] tracking-[-0.06em] text-white">
                      {active.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-6 max-w-[600px] text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                      {active.description}
                    </p>

                  </motion.div>

                </AnimatePresence>

                {/* Features */}
                <AnimatePresence mode="wait">

                  <motion.div
                    key={`features-${active.number}`}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.08,
                    }}
                    className="mt-10 border-t border-white/10 pt-6"
                  >

                    <span className="text-[8px] font-semibold tracking-[0.28em] text-white/25">
                      WHAT'S INCLUDED
                    </span>

                    <div className="mt-4 grid gap-2 sm:grid-cols-2">

                      {active.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2.5 text-xs text-white/65"
                        >

                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1769C2]/20 text-[#579FFF]">
                            <Check size={10} />
                          </span>

                          {feature}

                        </div>
                      ))}

                    </div>

                  </motion.div>

                </AnimatePresence>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICE PHILOSOPHY
      ========================================================== */}

      <section className="bg-white py-20 sm:py-24 lg:py-32">

        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12">

          <div className="grid items-center gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

            {/* Statement */}
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
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0F6FC] text-[#1769C2]">
                <Sparkles size={23} strokeWidth={1.4} />
              </div>

              <h2 className="mt-7 text-[clamp(2.3rem,4vw,4.6rem)] font-medium leading-[0.95] tracking-[-0.06em] text-[#0B243D]">
                Not just
                <br />

                <span className="text-[#1769C2]">
                  deliverables.
                </span>
              </h2>

            </motion.div>

            {/* Principles */}
            <div className="border-t border-[#DCE5ED]">

              {[
                {
                  number: "01",
                  title: "Purpose before pixels",
                  text: "Every design and development decision starts with a clear business objective.",
                },
                {
                  number: "02",
                  title: "Simple experiences",
                  text: "We remove unnecessary complexity and create digital experiences people understand quickly.",
                },
                {
                  number: "03",
                  title: "Built to evolve",
                  text: "Our solutions are created with future improvements, growth and scalability in mind.",
                },
              ].map((item, index) => (

                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="group flex gap-5 border-b border-[#DCE5ED] py-7 sm:gap-8 sm:py-8"
                >

                  <span className="pt-1 text-[9px] font-semibold tracking-[0.2em] text-[#1769C2]">
                    {item.number}
                  </span>

                  <div className="flex-1">

                    <h3 className="text-base font-medium text-[#0B243D] sm:text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-[620px] text-xs leading-6 text-[#788B9D] sm:text-sm">
                      {item.text}
                    </p>

                  </div>

                  <ArrowUpRight
                    size={17}
                    className="mt-1 text-[#B6C3CE] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#1769C2]"
                  />

                </motion.div>

              ))}

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          ADDITIONAL SOLUTIONS
      ========================================================== */}

      <section className="bg-[#061525]">

        <div className="mx-auto w-full max-w-[1600px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">

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
            className="max-w-[700px]"
          >

            <span className="text-[9px] font-semibold tracking-[0.3em] text-[#579FFF]">
              MORE SOLUTIONS
            </span>

            <h2 className="mt-4 text-[clamp(2.5rem,4vw,4.8rem)] font-medium leading-[0.95] tracking-[-0.06em] text-white">
              The details
              <br />

              <span className="text-white/30">
                behind the product.
              </span>
            </h2>

            <p className="mt-5 max-w-[580px] text-sm leading-7 text-white/40">
              Additional technical services that help keep your digital
              ecosystem reliable, secure and ready to grow.
            </p>

          </motion.div>

          {/* Horizontal solution list */}
          <div className="mt-14 border-t border-white/10">

            {additionalServices.map((service, index) => {

              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
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
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="group flex flex-col gap-5 border-b border-white/10 py-7 sm:flex-row sm:items-center sm:gap-8 lg:py-9"
                >

                  <span className="w-8 text-[9px] font-semibold tracking-[0.2em] text-[#579FFF]">
                    0{index + 1}
                  </span>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-[#579FFF] transition-all duration-300 group-hover:border-[#579FFF]/30 group-hover:bg-[#1769C2] group-hover:text-white">
                    <Icon size={20} strokeWidth={1.4} />
                  </div>

                  <div className="flex-1">

                    <h3 className="text-lg font-medium text-white">
                      {service.title}
                    </h3>

                    <p className="mt-1.5 max-w-[650px] text-xs leading-6 text-white/35 sm:text-sm">
                      {service.text}
                    </p>

                  </div>

                  <div className="flex items-center gap-3 text-[8px] font-semibold tracking-[0.2em] text-white/25 transition-colors duration-300 group-hover:text-[#579FFF]">
                    EXPLORE

                    <ArrowUpRight size={14} />

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}

      <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36">

        {/* Large word */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[150px] font-bold tracking-[-0.1em] text-[#061525]/[0.025] sm:text-[230px] lg:text-[340px]">
          BUILD
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12">

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
              duration: 0.8,
            }}
            className="mx-auto max-w-[900px] text-center"
          >

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#061525] text-white shadow-lg sm:h-16 sm:w-16">
              <Layers3 size={24} strokeWidth={1.3} />
            </div>

            <span className="mt-7 block text-[9px] font-semibold tracking-[0.32em] text-[#1769C2]">
              HAVE A PROJECT IN MIND?
            </span>

            <h2 className="mt-5 text-[clamp(2.8rem,5vw,5.8rem)] font-medium leading-[0.92] tracking-[-0.065em] text-[#0B243D]">
              Let's build something
              <br />

              <span className="text-[#1769C2]">
                remarkable.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[620px] text-sm leading-7 text-[#718398] sm:text-base">
              Tell us what you are building and let's explore how CodeGenZ
              Solutions can help bring it to life.
            </p>

            <a
              href="/contact?quote=true"
              className="group mt-8 inline-flex items-center gap-4 rounded-full bg-[#1769C2] px-7 py-4 text-[9px] font-semibold tracking-[0.2em] text-white shadow-[0_15px_35px_rgba(23,105,194,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F559F]"
            >
              START A PROJECT

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={13} />
              </span>
            </a>

          </motion.div>

        </div>
      </section>

    </main>
  );
};

export default Services;