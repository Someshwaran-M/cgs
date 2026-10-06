import React from "react";
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaRocket,
  FaFlagCheckered,
  FaArrowRight,
  FaCheck,
  FaCode,
  FaGlobe,
  FaLightbulb,
} from "react-icons/fa";

const About = () => {
  const vmg = [
    {
      number: "01",
      icon: <FaBullseye />,
      title: "Our Vision",
      text: "To become a globally trusted technology partner, known for crafting digital experiences that are simple, reliable, and built to last.",
    },
    {
      number: "02",
      icon: <FaRocket />,
      title: "Our Mission",
      text: "To empower businesses and individuals with well-structured, scalable solutions — delivered with clarity, precision, and genuine care for every client's needs.",
    },
    {
      number: "03",
      icon: <FaFlagCheckered />,
      title: "Our Goal",
      text: "To consistently deliver high-quality, future-ready products while building long-term relationships founded on trust, transparency, and results.",
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

  return (
    <motion.main
      id="about"
      className="w-full overflow-hidden bg-white text-[#102A43]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* =========================================================
          HERO
      ========================================================== */}

      <section
        className="
          relative
          flex
          min-h-[560px]
          items-end
          overflow-hidden
          bg-[#061525]
          px-8
          pb-24
          pt-[140px]
          xl:px-16
        "
      >
        {/* Background decoration */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-150px]
            top-[-150px]
            h-[550px]
            w-[550px]
            rounded-full
            border
            border-[#1769C2]/15
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[-50px]
            top-[-50px]
            h-[350px]
            w-[350px]
            rounded-full
            border
            border-[#63A9FF]/10
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-220px]
            left-[35%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#1769C2]/10
            blur-[120px]
          "
        />

        {/* Decorative lines */}

        <div className="absolute right-[10%] top-[30%] h-[180px] w-px bg-white/[0.08]" />

        <div className="absolute right-[10%] top-[30%] h-px w-[180px] bg-white/[0.08]" />

        <div className="absolute bottom-[18%] left-[8%] h-px w-[100px] bg-[#63A9FF]/30" />

        {/* Content */}

        <div className="relative z-10 mx-auto w-full max-w-[1680px]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#63A9FF]" />

              <span
                className="
                  text-[9px]
                  font-semibold
                  tracking-[0.35em]
                  text-[#63A9FF]
                "
              >
                CODEGENZ SOLUTIONS
              </span>
            </div>

            <h1
              className="
                max-w-[900px]
                text-[clamp(50px,6vw,90px)]
                font-semibold
                leading-[0.95]
                tracking-[-0.055em]
                text-white
              "
            >
              About
              <span className="text-[#63A9FF]"> Company</span>
            </h1>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="#home"
                className="
                  text-[9px]
                  font-medium
                  tracking-[0.2em]
                  text-white/40
                  transition-colors
                  hover:text-white
                "
              >
                HOME
              </a>

              <span className="text-[#63A9FF]">/</span>

              <span
                className="
                  text-[9px]
                  font-medium
                  tracking-[0.2em]
                  text-white
                "
              >
                ABOUT COMPANY
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          WHO WE ARE
      ========================================================== */}

      <section className="px-8 py-24 xl:px-16 xl:py-32">
        <div className="mx-auto grid max-w-[1680px] grid-cols-2 items-center gap-20">

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1769C2]" />

              <span
                className="
                  text-[9px]
                  font-semibold
                  tracking-[0.3em]
                  text-[#1769C2]
                "
              >
                WHO WE ARE
              </span>
            </div>

            <h2
              className="
                max-w-[720px]
                text-[clamp(36px,4vw,60px)]
                font-semibold
                leading-[1.04]
                tracking-[-0.045em]
                text-[#0B243D]
              "
            >
              Technology that creates
              <span className="text-[#1769C2]">
                {" "}
                meaningful impact.
              </span>
            </h2>

            <p className="mt-8 max-w-[650px] text-[14px] leading-8 text-[#60758A]">
              Technology has revolutionized the way humans live, work, and
              interact. From communication to healthcare, transportation, and
              entertainment, technological advancements have significantly
              improved efficiency and convenience.
            </p>

            <p className="mt-5 max-w-[650px] text-[14px] leading-8 text-[#60758A]">
              Advanced digital solutions continue to transform businesses and
              create new opportunities. At CodeGenZ Solutions, we focus on
              creating practical and scalable technology experiences that help
              businesses move forward.
            </p>

            <a
              href="#services"
              className="
                group
                mt-9
                inline-flex
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
                shadow-[0_12px_30px_rgba(23,105,194,0.18)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#0F559F]
              "
            >
              DISCOVER MORE

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                <FaArrowRight size={12} />
              </span>
            </a>
          </motion.div>

          {/* Premium Technology Visual */}

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              relative
              flex
              min-h-[500px]
              items-center
              justify-center
            "
          >
            {/* Outer rings */}

            <div
              className="
                absolute
                h-[440px]
                w-[440px]
                rounded-full
                border
                border-[#1769C2]/10
              "
            />

            <div
              className="
                absolute
                h-[350px]
                w-[350px]
                rounded-full
                border
                border-[#1769C2]/15
              "
            />

            <div
              className="
                absolute
                h-[260px]
                w-[260px]
                rounded-full
                bg-[#1769C2]/10
                blur-[45px]
              "
            />

            {/* Dashed ring */}

            <div
              className="
                absolute
                h-[470px]
                w-[470px]
                animate-[spin_30s_linear_infinite]
                rounded-full
                border
                border-dashed
                border-[#1769C2]/10
              "
            />

            {/* Center */}

            <div
              className="
                relative
                z-10
                flex
                h-[245px]
                w-[245px]
                flex-col
                items-center
                justify-center
                rounded-full
                border
                border-[#DCE5ED]
                bg-white
                shadow-[0_30px_90px_rgba(15,65,105,0.13)]
              "
            >
              <div
                className="
                  flex
                  h-[72px]
                  w-[72px]
                  items-center
                  justify-center
                  rounded-[20px]
                  bg-[#1769C2]
                  text-white
                  shadow-[0_15px_35px_rgba(23,105,194,0.25)]
                "
              >
                <FaCode size={28} />
              </div>

              <p
                className="
                  mt-5
                  text-[12px]
                  font-semibold
                  tracking-[0.25em]
                  text-[#0B243D]
                "
              >
                CODEGENZ
              </p>

              <p
                className="
                  mt-2
                  text-[8px]
                  tracking-[0.25em]
                  text-[#8A9AAC]
                "
              >
                DIGITAL SOLUTIONS
              </p>
            </div>

            {/* Floating item 01 */}

            <div
              className="
                absolute
                left-[2%]
                top-[17%]
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-[#E2EAF1]
                bg-white
                px-4
                py-3
                shadow-[0_15px_40px_rgba(15,65,105,0.08)]
              "
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#EEF6FF]
                  text-[#1769C2]
                "
              >
                <FaGlobe size={15} />
              </div>

              <div>
                <p className="text-[9px] font-semibold tracking-[0.1em] text-[#203B58]">
                  DIGITAL
                </p>

                <p className="mt-1 text-[8px] text-[#8A9AAC]">
                  Connected experiences
                </p>
              </div>
            </div>

            {/* Floating item 02 */}

            <div
              className="
                absolute
                bottom-[15%]
                right-[2%]
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-[#E2EAF1]
                bg-white
                px-4
                py-3
                shadow-[0_15px_40px_rgba(15,65,105,0.08)]
              "
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#EEF6FF]
                  text-[#1769C2]
                "
              >
                <FaLightbulb size={15} />
              </div>

              <div>
                <p className="text-[9px] font-semibold tracking-[0.1em] text-[#203B58]">
                  INNOVATION
                </p>

                <p className="mt-1 text-[8px] text-[#8A9AAC]">
                  Ideas into solutions
                </p>
              </div>
            </div>

            {/* Small dots */}

            <span className="absolute left-[15%] bottom-[25%] h-2 w-2 rounded-full bg-[#1769C2]" />

            <span className="absolute right-[15%] top-[18%] h-2 w-2 rounded-full bg-[#63A9FF]" />

            <span className="absolute right-[25%] bottom-[8%] h-3 w-3 rounded-full border border-[#1769C2]" />
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          VISION / MISSION / GOAL
      ========================================================== */}

      <section className="bg-[#F7FAFC] px-8 py-24 xl:px-16 xl:py-28">
        <div className="mx-auto max-w-[1680px]">

          <motion.div
            className="mx-auto max-w-[700px] text-center"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span
              className="
                text-[9px]
                font-semibold
                tracking-[0.3em]
                text-[#1769C2]
              "
            >
              OUR PURPOSE
            </span>

            <h2
              className="
                mt-4
                text-[clamp(34px,4vw,55px)]
                font-semibold
                tracking-[-0.04em]
                text-[#0B243D]
              "
            >
              Vision, Mission &amp; Goal
            </h2>

            <p className="mt-5 text-[14px] leading-7 text-[#718398]">
              The principles that guide every product we build.
            </p>
          </motion.div>

          {/* Timeline */}

          <div className="relative mt-20">

            {/* Desktop line */}

            <div className="absolute left-[16.66%] right-[16.66%] top-[42px] hidden h-px bg-[#DCE5ED] lg:block">
              <motion.div
                className="h-full origin-left bg-[#1769C2]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{
                  duration: 1.4,
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
              />
            </div>

            <div className="grid grid-cols-1 gap-14 lg:grid-cols-3">
              {vmg.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.18,
                  }}
                  viewport={{ once: true }}
                >
                  {/* Icon */}

                  <div
                    className="
                      relative
                      z-10
                      mx-auto
                      flex
                      h-[84px]
                      w-[84px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#D8E4EE]
                      bg-white
                      shadow-[0_12px_35px_rgba(15,65,105,0.08)]
                    "
                  >
                    <div
                      className="
                        flex
                        h-[58px]
                        w-[58px]
                        items-center
                        justify-center
                        rounded-full
                        bg-[#1769C2]
                        text-white
                      "
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* Number */}

                  <span
                    className="
                      mt-5
                      block
                      text-[8px]
                      font-semibold
                      tracking-[0.25em]
                      text-[#1769C2]
                    "
                  >
                    {item.number}
                  </span>

                  {/* Title */}

                  <h3 className="mt-3 text-[20px] font-semibold text-[#0B243D]">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="mx-auto mt-4 max-w-[380px] text-[13px] leading-7 text-[#718398]">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================== */}

      <section
        id="about-services"
        className="px-8 py-24 xl:px-16 xl:py-32"
      >
        <div className="mx-auto max-w-[1680px]">

          <motion.div
            className="flex items-end justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <span
                className="
                  text-[9px]
                  font-semibold
                  tracking-[0.3em]
                  text-[#1769C2]
                "
              >
                WHAT WE DO
              </span>

              <h2
                className="
                  mt-4
                  text-[clamp(36px,4vw,58px)]
                  font-semibold
                  tracking-[-0.04em]
                  text-[#0B243D]
                "
              >
                What We Do Best
              </h2>
            </div>

            <p
              className="
                hidden
                max-w-[420px]
                text-right
                text-[13px]
                leading-7
                text-[#718398]
                lg:block
              "
            >
              From design to deployment, our team handles every stage of your
              digital journey.
            </p>
          </motion.div>

          {/* Service list */}

          <div className="mt-14 border-t border-[#E4EBF2]">
            {services.map((service, index) => (
              <motion.a
                href="#contact"
                key={service}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                viewport={{ once: true }}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[#E4EBF2]
                  py-6
                  transition-all
                  duration-300
                  hover:px-4
                "
              >
                <div className="flex items-center gap-7">
                  <span
                    className="
                      text-[9px]
                      font-medium
                      tracking-[0.15em]
                      text-[#A0AFBD]
                    "
                  >
                    0{index + 1}
                  </span>

                  <span
                    className="
                      text-[17px]
                      font-medium
                      tracking-[-0.01em]
                      text-[#203B58]
                      transition-colors
                      duration-300
                      group-hover:text-[#1769C2]
                    "
                  >
                    {service}
                  </span>
                </div>

                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#DCE5ED]
                    text-[#8A9AAC]
                    transition-all
                    duration-300
                    group-hover:border-[#1769C2]
                    group-hover:bg-[#1769C2]
                    group-hover:text-white
                  "
                >
                  <FaArrowRight size={12} />
                </span>
              </motion.a>
            ))}
          </div>

          <p
            className="
              mt-8
              max-w-[720px]
              text-[13px]
              leading-7
              text-[#718398]
            "
          >
            From design to deployment, our team handles every stage of your
            digital journey — ensuring quality, consistency, and measurable
            results at every step.
          </p>
        </div>
      </section>

      {/* =========================================================
          WHY CODEGENZ
      ========================================================== */}

      <section className="bg-[#061525] px-8 py-24 xl:px-16 xl:py-28">
        <div className="mx-auto grid max-w-[1680px] grid-cols-2 items-center gap-20">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span
              className="
                text-[9px]
                font-semibold
                tracking-[0.3em]
                text-[#63A9FF]
              "
            >
              WHY CODEGENZ
            </span>

            <h2
              className="
                mt-5
                max-w-[650px]
                text-[clamp(38px,4vw,62px)]
                font-semibold
                leading-[1]
                tracking-[-0.045em]
                text-white
              "
            >
              Technology with
              <span className="text-[#63A9FF]"> purpose.</span>
            </h2>

            <p
              className="
                mt-7
                max-w-[620px]
                text-[14px]
                leading-8
                text-white/45
              "
            >
              We combine technical expertise with a genuine understanding of
              business goals, ensuring every solution we deliver adds real
              value — not just visual appeal.
            </p>

            <p
              className="
                mt-5
                max-w-[620px]
                text-[14px]
                leading-8
                text-white/45
              "
            >
              Our team stays closely involved through every phase of the
              project, from planning to launch and beyond, so you always have
              a reliable technology partner by your side.
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {strengths.map((item, index) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-5
                  border-b
                  border-white/[0.08]
                  py-5
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#63A9FF]/30
                    text-[#63A9FF]
                  "
                >
                  <FaCheck size={11} />
                </span>

                <span
                  className="
                    text-[13px]
                    tracking-[0.02em]
                    text-white/65
                  "
                >
                  {item}
                </span>

                <span
                  className="
                    ml-auto
                    text-[8px]
                    tracking-[0.15em]
                    text-white/20
                  "
                >
                  0{index + 1}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}

      <section className="px-8 py-24 xl:px-16 xl:py-28">
        <motion.div
          className="
            mx-auto
            max-w-[1680px]
            rounded-[30px]
            bg-[#F4F8FC]
            px-10
            py-16
            text-center
            xl:px-20
          "
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span
            className="
              text-[9px]
              font-semibold
              tracking-[0.3em]
              text-[#1769C2]
            "
          >
            LET'S BUILD SOMETHING
          </span>

          <h2
            className="
              mx-auto
              mt-5
              max-w-[850px]
              text-[clamp(36px,5vw,68px)]
              font-semibold
              leading-[1]
              tracking-[-0.05em]
              text-[#0B243D]
            "
          >
            Have an idea?
            <span className="text-[#1769C2]">
              {" "}
              Let's make it real.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-[600px]
              text-[14px]
              leading-7
              text-[#718398]
            "
          >
            Tell us about your project and let's create a digital solution
            built around your goals.
          </p>

          <a
            href="#contact"
            className="
              group
              mt-8
              inline-flex
              items-center
              gap-4
              rounded-full
              bg-[#1769C2]
              px-8
              py-4
              text-[9px]
              font-semibold
              tracking-[0.2em]
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#0F559F]
            "
          >
            START A PROJECT

            <FaArrowRight
              size={12}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>
        </motion.div>
      </section>
    </motion.main>
  );
};

export default About;