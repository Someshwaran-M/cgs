import React from "react";
import { motion } from "framer-motion";
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
  Layers3,
  Check,
} from "lucide-react";

const Services = () => {
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

  return (
    <main
      id="services"
      className="w-full overflow-hidden bg-white text-[#102A43]"
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
        {/* Decorative circles */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-180px]
            top-[-180px]
            h-[600px]
            w-[600px]
            rounded-full
            border
            border-[#1769C2]/15
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[-70px]
            top-[-70px]
            h-[380px]
            w-[380px]
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
            left-[30%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#1769C2]/10
            blur-[120px]
          "
        />

        {/* Decorative lines */}

        <div className="absolute right-[10%] top-[28%] h-[180px] w-px bg-white/[0.07]" />

        <div className="absolute right-[10%] top-[28%] h-px w-[180px] bg-white/[0.07]" />

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
                WHAT WE DO
              </span>
            </div>

            <h1
              className="
                max-w-[950px]
                text-[clamp(50px,6vw,90px)]
                font-semibold
                leading-[0.95]
                tracking-[-0.055em]
                text-white
              "
            >
              Digital
              <span className="text-[#63A9FF]"> solutions</span>
              <br />
              built for growth.
            </h1>

            <p
              className="
                mt-8
                max-w-[650px]
                text-[14px]
                leading-8
                text-white/45
              "
            >
              From websites and applications to branding and digital
              marketing, we create technology solutions that help businesses
              build, grow and connect.
            </p>

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
                SERVICES
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================== */}

      <section className="px-8 py-24 xl:px-16 xl:py-28">
        <div
          className="
            mx-auto
            grid
            max-w-[1680px]
            grid-cols-2
            items-center
            gap-20
          "
        >
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              OUR EXPERTISE
            </span>

            <h2
              className="
                mt-5
                max-w-[720px]
                text-[clamp(36px,4vw,60px)]
                font-semibold
                leading-[1.04]
                tracking-[-0.045em]
                text-[#0B243D]
              "
            >
              Everything you need to build your
              <span className="text-[#1769C2]"> digital presence.</span>
            </h2>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p
              className="
                text-[14px]
                leading-8
                text-[#60758A]
              "
            >
              We bring design, development and digital strategy together under
              one roof. Every solution is planned around usability,
              performance, scalability and your business objectives.
            </p>

            <div className="mt-8 flex items-center gap-8">
              <div>
                <p className="text-[30px] font-semibold tracking-[-0.04em] text-[#1769C2]">
                  01
                </p>

                <p className="mt-1 text-[8px] font-semibold tracking-[0.2em] text-[#8A9AAC]">
                  APPROACH
                </p>
              </div>

              <div className="h-10 w-px bg-[#E2E9F0]" />

              <div>
                <p className="text-[30px] font-semibold tracking-[-0.04em] text-[#1769C2]">
                  02
                </p>

                <p className="mt-1 text-[8px] font-semibold tracking-[0.2em] text-[#8A9AAC]">
                  EXECUTION
                </p>
              </div>

              <div className="h-10 w-px bg-[#E2E9F0]" />

              <div>
                <p className="text-[30px] font-semibold tracking-[-0.04em] text-[#1769C2]">
                  03
                </p>

                <p className="mt-1 text-[8px] font-semibold tracking-[0.2em] text-[#8A9AAC]">
                  DELIVERY
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================== */}

      <section className="bg-[#F7FAFC] px-8 py-24 xl:px-16 xl:py-32">
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
                OUR SERVICES
              </span>

              <h2
                className="
                  mt-4
                  text-[clamp(36px,4vw,58px)]
                  font-semibold
                  tracking-[-0.045em]
                  text-[#0B243D]
                "
              >
                What We Build
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
              Purposeful digital solutions designed to solve real problems and
              create lasting value.
            </p>
          </motion.div>

          {/* Service list */}

          <div className="mt-16 border-t border-[#DCE5ED]">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="
                    group
                    border-b
                    border-[#DCE5ED]
                    transition-all
                    duration-300
                    hover:bg-white
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-10
                      px-2
                      py-8
                      transition-all
                      duration-300
                      group-hover:px-6
                    "
                  >
                    {/* Number + Icon */}

                    <div className="flex w-[280px] shrink-0 items-center gap-6">
                      <span
                        className="
                          text-[9px]
                          font-semibold
                          tracking-[0.15em]
                          text-[#A0AFBD]
                        "
                      >
                        {service.number}
                      </span>

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-[#DCE5ED]
                          bg-white
                          text-[#1769C2]
                          transition-all
                          duration-300
                          group-hover:border-[#1769C2]
                          group-hover:bg-[#1769C2]
                          group-hover:text-white
                        "
                      >
                        <Icon size={20} strokeWidth={1.5} />
                      </div>

                      <span
                        className="
                          hidden
                          text-[9px]
                          font-semibold
                          tracking-[0.16em]
                          text-[#8A9AAC]
                          lg:block
                        "
                      >
                        {service.shortTitle}
                      </span>
                    </div>

                    {/* Main title */}

                    <div className="flex-1">
                      <h3
                        className="
                          text-[20px]
                          font-semibold
                          tracking-[-0.02em]
                          text-[#203B58]
                          transition-colors
                          duration-300
                          group-hover:text-[#1769C2]
                        "
                      >
                        {service.title}
                      </h3>

                      <p
                        className="
                          mt-3
                          max-w-[650px]
                          text-[12px]
                          leading-6
                          text-[#718398]
                        "
                      >
                        {service.description}
                      </p>
                    </div>

                    {/* Arrow */}

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#DCE5ED]
                        text-[#8A9AAC]
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:border-[#1769C2]
                        group-hover:bg-[#1769C2]
                        group-hover:text-white
                      "
                    >
                      <ArrowUpRight size={16} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Features */}

                  <div
                    className="
                      flex
                      flex-wrap
                      gap-x-8
                      gap-y-2
                      px-[340px]
                      pb-7
                    "
                  >
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="
                          flex
                          items-center
                          gap-2
                          text-[9px]
                          tracking-[0.08em]
                          text-[#8A9AAC]
                        "
                      >
                        <Check
                          size={11}
                          className="text-[#1769C2]"
                        />

                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================== */}

      <section className="px-8 py-24 xl:px-16 xl:py-32">
        <div className="mx-auto max-w-[1680px]">

          <motion.div
            className="max-w-[700px]"
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
              OUR PROCESS
            </span>

            <h2
              className="
                mt-4
                text-[clamp(36px,4vw,58px)]
                font-semibold
                tracking-[-0.045em]
                text-[#0B243D]
              "
            >
              From idea to reality.
            </h2>
          </motion.div>

          <div className="mt-16 grid grid-cols-4 border-t border-[#DCE5ED]">

            {[
              {
                number: "01",
                title: "Discover",
                text: "We understand your business, audience and objectives.",
              },
              {
                number: "02",
                title: "Design",
                text: "We transform ideas into clear and engaging experiences.",
              },
              {
                number: "03",
                title: "Develop",
                text: "We build reliable and scalable digital solutions.",
              },
              {
                number: "04",
                title: "Deliver",
                text: "We launch, refine and support your digital product.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                className="
                  border-r
                  border-[#DCE5ED]
                  px-7
                  py-9
                  first:border-l
                "
              >
                <span
                  className="
                    text-[9px]
                    font-semibold
                    tracking-[0.2em]
                    text-[#1769C2]
                  "
                >
                  {step.number}
                </span>

                <h3 className="mt-8 text-[21px] font-semibold text-[#0B243D]">
                  {step.title}
                </h3>

                <p className="mt-4 text-[12px] leading-7 text-[#718398]">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ADDITIONAL SOLUTIONS
      ========================================================== */}

      <section className="bg-[#061525] px-8 py-24 xl:px-16 xl:py-28">
        <div className="mx-auto max-w-[1680px]">

          <motion.div
            className="max-w-[700px]"
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
                text-[#63A9FF]
              "
            >
              MORE SOLUTIONS
            </span>

            <h2
              className="
                mt-4
                text-[clamp(36px,4vw,58px)]
                font-semibold
                tracking-[-0.045em]
                text-white
              "
            >
              Beyond the basics.
            </h2>

            <p className="mt-5 text-[14px] leading-7 text-white/40">
              Additional technical services that help keep your digital
              ecosystem reliable, secure and ready to grow.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-3 gap-5">

            {additionalServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  viewport={{ once: true }}
                  className="
                    group
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    p-8
                    transition-all
                    duration-300
                    hover:border-[#63A9FF]/30
                    hover:bg-white/[0.04]
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#63A9FF]/20
                      text-[#63A9FF]
                      transition-all
                      duration-300
                      group-hover:bg-[#1769C2]
                      group-hover:text-white
                    "
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-7 text-[18px] font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[12px] leading-7 text-white/40">
                    {service.text}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-[8px] font-semibold tracking-[0.18em] text-[#63A9FF]">
                    LEARN MORE

                    <ArrowUpRight
                      size={13}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
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
          <Layers3
            size={30}
            strokeWidth={1.2}
            className="mx-auto text-[#1769C2]"
          />

          <span
            className="
              mt-6
              block
              text-[9px]
              font-semibold
              tracking-[0.3em]
              text-[#1769C2]
            "
          >
            HAVE A PROJECT IN MIND?
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
            Let's build something
            <span className="text-[#1769C2]"> remarkable.</span>
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
            Tell us what you are building and let's explore how CodeGenZ
            Solutions can help bring it to life.
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
              shadow-[0_12px_30px_rgba(23,105,194,0.18)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#0F559F]
            "
          >
            START A PROJECT

            <ArrowUpRight
              size={14}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default Services;