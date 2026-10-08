import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Target,
  Rocket,
  Flag,
  Code2,
  Check,
  Sparkles,
  Layers3,
} from "lucide-react";

const About = () => {
  const vmg = [
    {
      number: "01",
      label: "DIRECTION",
      title: "Our Vision",
      icon: Target,
      text:
        "To become a globally trusted technology partner, known for crafting digital experiences that are simple, reliable, and built to last.",
    },
    {
      number: "02",
      label: "PURPOSE",
      title: "Our Mission",
      icon: Rocket,
      featured: true,
      text:
        "To empower businesses and individuals with well-structured, scalable solutions — delivered with clarity, precision, and genuine care for every client's needs.",
    },
    {
      number: "03",
      label: "PROGRESS",
      title: "Our Goal",
      icon: Flag,
      text:
        "To consistently deliver high-quality, future-ready products while building long-term relationships founded on trust, transparency, and results.",
    },
  ];

  const services = [
    "Website Designing & Development",
    "UI / UX Design",
    "Social Media Marketing",
    "Content Marketing",
    "SEO Optimization",
    "Graphic Designing",
  ];

  const strengths = [
    "Clear and transparent communication",
    "Scalable and future-ready solutions",
    "Modern and user-focused experiences",
    "Quality-driven development process",
    "Long-term technology partnership",
  ];

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: -24,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: 24,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <main className="overflow-hidden bg-white font-['Roboto',sans-serif] text-[#071A2D]">

      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#071827]">

        <div className="absolute inset-0 bg-gradient-to-br from-[#071827] via-[#081D31] to-[#04101C]" />

        <div className="pointer-events-none absolute right-[-120px] top-[-180px] h-[480px] w-[480px] rounded-full bg-[#1769C2]/10 blur-[130px]" />

        <div className="relative z-10 mx-auto flex min-h-[650px] w-full max-w-[1450px] items-center px-6 py-28 sm:min-h-[690px] sm:px-8 lg:min-h-[720px] lg:px-10">

          <div className="grid w-full gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

            {/* Hero copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >

              <motion.div
                variants={fadeUp}
                className="mb-6 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-[#579FFF]" />

                <span className="text-[9px] font-semibold tracking-[0.3em] text-[#579FFF]">
                  ABOUT CODEGENZ
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="max-w-[800px] text-[clamp(3.2rem,6vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.065em] text-white"
              >
                Building digital
                <br />

                <span className="text-white/35">
                  experiences
                </span>

                <br />

                <span className="text-[#579FFF]">
                  with purpose.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-[610px] text-sm leading-7 text-white/50 sm:text-base sm:leading-8"
              >
                CodeGenZ Solutions creates practical digital experiences
                that help businesses communicate, operate and grow in a
                rapidly changing digital world.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap items-center gap-3"
              >

                <a
                  href="#story"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-[9px] font-semibold tracking-[0.18em] text-[#071827] transition-all duration-300 hover:-translate-y-1"
                >
                  OUR STORY

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#071827] text-white transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={12} />
                  </span>
                </a>

                <a
                  href="/contact?quote=true"
                  className="rounded-full border border-white/15 px-5 py-3 text-[9px] font-semibold tracking-[0.18em] text-white/60 transition-all duration-300 hover:border-white/30 hover:text-white"
                >
                  START A PROJECT
                </a>

              </motion.div>

            </motion.div>

            {/* Hero visual */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="hidden lg:block"
            >

              <div className="relative mx-auto h-[390px] w-[310px]">

                <div className="absolute inset-0 border border-white/10" />

                <div className="absolute left-5 top-5 right-5 bottom-5 overflow-hidden border border-white/[0.07] bg-gradient-to-br from-[#12385B] via-[#0A2036] to-[#030D17]">

                  <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-[#1769C2]/20 blur-[80px]" />

                  <div className="absolute bottom-[-80px] left-[-50px] h-56 w-56 rounded-full bg-[#579FFF]/10 blur-[80px]" />

                  <div className="absolute left-6 top-6">
                    <span className="text-[8px] tracking-[0.28em] text-white/30">
                      CGS / 2026
                    </span>
                  </div>

                  <div className="absolute bottom-7 left-7 right-7">

                    <Code2
                      size={32}
                      strokeWidth={1}
                      className="text-[#579FFF]/60"
                    />

                    <div className="mt-5 h-px bg-white/10" />

                    <p className="mt-4 text-[8px] tracking-[0.28em] text-white/30">
                      DIGITAL TECHNOLOGY STUDIO
                    </p>

                    <p className="mt-2 text-xl font-medium tracking-[-0.04em] text-white">
                      CodeGenZ
                    </p>

                  </div>

                </div>

                <div className="absolute -bottom-5 -right-5 flex h-10 w-10 items-center justify-center border border-[#579FFF]/40 bg-[#071827] text-[#579FFF]">
                  <ArrowUpRight size={15} />
                </div>

              </div>

            </motion.div>

          </div>
        </div>

        <div className="border-t border-white/10">

          <div className="mx-auto flex max-w-[1450px] items-center justify-between px-6 py-3.5 sm:px-8 lg:px-10">

            <span className="text-[8px] tracking-[0.25em] text-white/25">
              CODEGENZ SOLUTIONS
            </span>

            <span className="text-[8px] tracking-[0.22em] text-[#579FFF]">
              DIGITAL • DESIGN • TECHNOLOGY
            </span>

          </div>

        </div>

      </section>

      {/* =========================================================
          STORY
      ========================================================== */}

      <section
        id="story"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >

        <div className="mx-auto w-full max-w-[1450px] px-6 sm:px-8 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-[0.45fr_1.55fr] lg:gap-20">

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >

              <span className="text-[9px] font-semibold tracking-[0.28em] text-[#1769C2]">
                01 / WHO WE ARE
              </span>

              <div className="mt-5 h-px w-12 bg-[#1769C2]" />

              <p className="mt-5 max-w-[210px] text-xs leading-6 text-[#8B9AAA]">
                The company behind the ideas, products and digital experiences.
              </p>

            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >

              <h2 className="max-w-[900px] text-[clamp(2.7rem,5vw,5.3rem)] font-medium leading-[0.9] tracking-[-0.065em] text-[#071A2D]">
                Technology has power.
                <br />

                <span className="text-[#1769C2]">
                  We give it direction.
                </span>
              </h2>

              <div className="mt-10 grid gap-8 border-t border-[#DCE5ED] pt-8 md:grid-cols-2">

                <div>
                  <span className="text-[8px] font-semibold tracking-[0.25em] text-[#1769C2]">
                    THE CHANGE
                  </span>

                  <p className="mt-4 text-sm leading-7 text-[#667A8E]">
                    Technology has revolutionized the way humans live, work,
                    and interact. From communication to healthcare,
                    transportation, and entertainment, technological
                    advancements have significantly improved efficiency and
                    convenience.
                  </p>
                </div>

                <div>
                  <span className="text-[8px] font-semibold tracking-[0.25em] text-[#1769C2]">
                    OUR APPROACH
                  </span>

                  <p className="mt-4 text-sm leading-7 text-[#667A8E]">
                    Advanced digital solutions continue to transform businesses
                    and create new opportunities. At CodeGenZ Solutions, we
                    focus on creating practical and scalable technology
                    experiences that help businesses move forward.
                  </p>
                </div>

              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================
          VISION / MISSION / GOAL
      ========================================================== */}

      <section className="bg-[#F5F7FA] py-20 sm:py-24 lg:py-28">

        <div className="mx-auto w-full max-w-[1450px] px-6 sm:px-8 lg:px-10">

          {/* Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >

            <div>

              <span className="text-[9px] font-semibold tracking-[0.28em] text-[#1769C2]">
                02 / OUR FOUNDATION
              </span>

              <h2 className="mt-4 text-[clamp(2.6rem,4.5vw,4.8rem)] font-medium leading-[0.92] tracking-[-0.06em] text-[#071A2D]">
                Direction.
                <span className="text-[#9AA9B7]">
                  {" "}Purpose.
                </span>
                <br />
                Progress.
              </h2>

            </div>

            <p className="max-w-[320px] text-xs leading-6 text-[#8292A1] md:text-right">
              Three principles that guide how we think, create and build for
              the future.
            </p>

          </motion.div>

          {/* Cards */}
          <div className="mt-12 grid gap-4 md:grid-cols-3 lg:mt-14">

            {vmg.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className={`group relative overflow-hidden rounded-[18px] border p-6 transition-all duration-500 sm:p-7 ${
                    item.featured
                      ? "border-[#1769C2] bg-[#071A2D] shadow-[0_18px_45px_rgba(7,26,45,0.13)]"
                      : "border-[#DCE4EB] bg-white hover:border-[#B8CDE0] hover:shadow-[0_18px_45px_rgba(7,26,45,0.07)]"
                  }`}
                >

                  {/* Small top accent */}
                  <div
                    className={`absolute left-0 right-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${
                      item.featured
                        ? "bg-[#579FFF]"
                        : "bg-[#1769C2]"
                    }`}
                  />

                  {/* Top row */}
                  <div className="flex items-center justify-between">

                    <span
                      className={`text-[10px] font-semibold tracking-[0.2em] ${
                        item.featured
                          ? "text-[#579FFF]"
                          : "text-[#A4B2BF]"
                      }`}
                    >
                      {item.number}
                    </span>

                    <span
                      className={`text-[8px] font-semibold tracking-[0.22em] ${
                        item.featured
                          ? "text-white/30"
                          : "text-[#9AA9B7]"
                      }`}
                    >
                      {item.label}
                    </span>

                  </div>

                  {/* Icon */}
                  <div className="mt-8 flex items-center justify-between">

                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 ${
                        item.featured
                          ? "bg-[#1769C2] text-white"
                          : "bg-[#EEF4F9] text-[#1769C2] group-hover:bg-[#1769C2] group-hover:text-white"
                      }`}
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.4}
                      />
                    </div>

                    <span
                      className={`text-[7px] tracking-[0.2em] ${
                        item.featured
                          ? "text-white/20"
                          : "text-[#C1CBD4]"
                      }`}
                    >
                      CODEGENZ
                    </span>

                  </div>

                  {/* Content */}
                  <div className="mt-7">

                    <h3
                      className={`text-xl font-medium tracking-[-0.035em] ${
                        item.featured
                          ? "text-white"
                          : "text-[#071A2D]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`mt-3 min-h-[105px] text-xs leading-6 ${
                        item.featured
                          ? "text-white/45"
                          : "text-[#718398]"
                      }`}
                    >
                      {item.text}
                    </p>

                  </div>

                  {/* Bottom */}
                  <div
                    className={`mt-6 flex items-center justify-between border-t pt-4 ${
                      item.featured
                        ? "border-white/10"
                        : "border-[#E4EAF0]"
                    }`}
                  >

                    <span
                      className={`text-[8px] tracking-[0.2em] ${
                        item.featured
                          ? "text-white/25"
                          : "text-[#A2AFBA]"
                      }`}
                    >
                      {item.number} / 03
                    </span>

                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300 ${
                        item.featured
                          ? "border-white/10 text-[#579FFF]"
                          : "border-[#DCE4EB] text-[#9AA9B7]"
                      } group-hover:border-[#1769C2] group-hover:bg-[#1769C2] group-hover:text-white`}
                    >
                      <ArrowUpRight size={12} />
                    </span>

                  </div>

                </motion.article>
              );
            })}

          </div>

        </div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================== */}

      <section className="bg-white py-20 sm:py-24 lg:py-28">

        <div className="mx-auto w-full max-w-[1450px] px-6 sm:px-8 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >

              <span className="text-[9px] font-semibold tracking-[0.28em] text-[#1769C2]">
                03 / CAPABILITIES
              </span>

              <h2 className="mt-4 text-[clamp(2.7rem,4.5vw,4.8rem)] font-medium leading-[0.9] tracking-[-0.065em] text-[#071A2D]">
                What we
                <br />

                <span className="text-[#9AA9B7]">
                  create.
                </span>
              </h2>

              <p className="mt-6 max-w-[340px] text-sm leading-7 text-[#718398]">
                Our capabilities combine technology, creativity and strategy
                to create complete digital experiences.
              </p>

            </motion.div>

            <div className="border-t border-[#DCE5ED]">

              {services.map((service, index) => (
                <motion.a
                  href="/services"
                  key={service}
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
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className="group flex items-center justify-between gap-5 border-b border-[#DCE5ED] py-5 sm:py-6"
                >

                  <div className="flex items-center gap-5 sm:gap-7">

                    <span className="text-[8px] font-semibold tracking-[0.18em] text-[#A5B2BE] transition-colors duration-300 group-hover:text-[#1769C2]">
                      0{index + 1}
                    </span>

                    <span className="text-sm font-medium text-[#203B58] transition-colors duration-300 group-hover:text-[#1769C2] sm:text-base">
                      {service}
                    </span>

                  </div>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DCE5ED] text-[#9AA9B7] transition-all duration-300 group-hover:border-[#1769C2] group-hover:bg-[#1769C2] group-hover:text-white">
                    <ArrowUpRight size={12} />
                  </span>

                </motion.a>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          WHY CODEGENZ
      ========================================================== */}

      <section className="bg-[#071827] py-20 sm:py-24 lg:py-28">

        <div className="mx-auto w-full max-w-[1450px] px-6 sm:px-8 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >

              <span className="text-[9px] font-semibold tracking-[0.28em] text-[#579FFF]">
                04 / WHY CODEGENZ
              </span>

              <h2 className="mt-4 text-[clamp(2.7rem,4.5vw,5rem)] font-medium leading-[0.9] tracking-[-0.065em] text-white">
                Built on
                <br />

                <span className="text-[#579FFF]">
                  trust.
                </span>
              </h2>

              <p className="mt-6 max-w-[370px] text-sm leading-7 text-white/40">
                We combine technical expertise with a genuine understanding of
                business goals, ensuring every solution adds real value.
              </p>

            </motion.div>

            <div className="border-t border-white/10">

              {strengths.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  className="group flex items-center gap-4 border-b border-white/10 py-5 sm:py-6"
                >

                  <span className="text-[8px] tracking-[0.18em] text-white/20">
                    0{index + 1}
                  </span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-[#579FFF] transition-all duration-300 group-hover:border-[#579FFF]/50 group-hover:bg-[#1769C2] group-hover:text-white">
                    <Check size={10} />
                  </span>

                  <span className="text-sm text-white/55 transition-colors duration-300 group-hover:text-white">
                    {item}
                  </span>

                  <ArrowRight
                    size={14}
                    className="ml-auto text-white/15 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#579FFF]"
                  />

                </motion.div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}

      <section className="bg-white py-24 sm:py-28 lg:py-32">

        <div className="mx-auto w-full max-w-[1450px] px-6 sm:px-8 lg:px-10">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[24px] bg-[#F2F6FA] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
          >

            <div className="absolute right-[-80px] top-[-100px] h-[300px] w-[300px] rounded-full bg-[#1769C2]/7 blur-[90px]" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

              <div>

                <span className="text-[9px] font-semibold tracking-[0.28em] text-[#1769C2]">
                  LET'S BUILD SOMETHING
                </span>

                <h2 className="mt-4 max-w-[800px] text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.88] tracking-[-0.07em] text-[#071A2D]">
                  Have an idea?
                  <br />

                  <span className="text-[#1769C2]">
                    Let's make it real.
                  </span>
                </h2>

                <p className="mt-5 max-w-[580px] text-sm leading-7 text-[#718398]">
                  Tell us about your project and let's explore how CodeGenZ
                  Solutions can help bring it to life.
                </p>

              </div>

              <a
                href="/contact?quote=true"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#071827] px-6 py-3.5 text-[9px] font-semibold tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1769C2]"
              >
                START A PROJECT

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={13} />
                </span>
              </a>

            </div>

          </motion.div>

        </div>
      </section>

    </main>
  );
};

export default About;