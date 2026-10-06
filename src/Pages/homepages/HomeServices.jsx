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
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";

const HomeServices = () => {
  const services = [
    {
      number: "01",
      icon: Code2,
      title: "Website Development",
      description:
        "Modern, responsive and high-performance websites built around your brand, business goals and customer experience.",
      features: [
        "Business Websites",
        "Corporate Websites",
        "Landing Pages",
      ],
    },
    {
      number: "02",
      icon: Palette,
      title: "UI / UX Design",
      description:
        "Clean and intuitive digital interfaces designed to create simple, engaging and memorable user experiences.",
      features: [
        "Website UI",
        "Web App Interfaces",
        "Design Systems",
      ],
    },
    {
      number: "03",
      icon: Smartphone,
      title: "Web Applications",
      description:
        "Scalable web applications designed to support business workflows, digital products and custom requirements.",
      features: [
        "Custom Applications",
        "Admin Dashboards",
        "API Integration",
      ],
    },
    {
      number: "04",
      icon: Search,
      title: "SEO Optimization",
      description:
        "Search-focused optimization that helps improve your website visibility, discoverability and organic reach.",
      features: [
        "On-Page SEO",
        "Technical SEO",
        "Performance",
      ],
    },
    {
      number: "05",
      icon: Megaphone,
      title: "Social Media Marketing",
      description:
        "Digital marketing strategies that help businesses strengthen their online presence and connect with their audience.",
      features: [
        "Social Strategy",
        "Content Planning",
        "Brand Promotion",
      ],
    },
    {
      number: "06",
      icon: PenTool,
      title: "Graphic Design",
      description:
        "Creative visual communication that builds a consistent, recognizable and professional brand identity.",
      features: [
        "Logo Design",
        "Branding",
        "Marketing Creatives",
      ],
    },
  ];

  return (
    <section
      id="home-services"
      className="w-full overflow-hidden bg-[#F7FAFC] px-6 py-24 text-[#102A43] sm:px-8 lg:px-12 xl:px-16 xl:py-32"
    >
      <div className="mx-auto max-w-[1680px]">

        {/* =========================================================
            HEADER
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
        >
          {/* Left */}

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1769C2]" />

              <span className="text-[9px] font-semibold tracking-[0.3em] text-[#1769C2]">
                OUR SERVICES
              </span>
            </div>

            <h2 className="max-w-[750px] text-[clamp(38px,5vw,64px)] font-semibold leading-[1.02] tracking-[-0.05em] text-[#0B243D]">
              Digital solutions
              <br />
              <span className="text-[#1769C2]">
                built around you.
              </span>
            </h2>
          </div>

          {/* Right */}

          <div className="lg:pb-2">
            <p className="max-w-[520px] text-[13px] leading-7 text-[#718398] lg:ml-auto">
              From strategy and design to development and digital growth,
              CodeGenZ Solutions brings the skills and technology needed to
              turn ideas into meaningful digital experiences.
            </p>

            <Link
              to="/services"
              className="group mt-6 inline-flex items-center gap-3 text-[9px] font-semibold tracking-[0.2em] text-[#1769C2]"
            >
              VIEW ALL SERVICES

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowUpRight size={13} />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* =========================================================
            SERVICE LIST
        ========================================================== */}

        <div className="mt-16 border-t border-[#DCE5ED]">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.15 }}
                className="group border-b border-[#DCE5ED]"
              >
                <div className="flex flex-col gap-6 px-2 py-8 transition-all duration-300 hover:bg-white sm:px-4 lg:flex-row lg:items-center lg:gap-10 lg:py-9 lg:hover:px-7">

                  {/* Number + Icon */}

                  <div className="flex shrink-0 items-center gap-5 lg:w-[250px]">
                    <span className="text-[9px] font-semibold tracking-[0.15em] text-[#A0AFBD]">
                      {service.number}
                    </span>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#DCE5ED] bg-white text-[#1769C2] transition-all duration-300 group-hover:border-[#1769C2] group-hover:bg-[#1769C2] group-hover:text-white">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>

                    <span className="hidden text-[9px] font-semibold tracking-[0.15em] text-[#8A9AAC] xl:block">
                      {service.title}
                    </span>
                  </div>

                  {/* Content */}

                  <div className="flex-1">
                    <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-[#203B58] transition-colors duration-300 group-hover:text-[#1769C2]">
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-[650px] text-[12px] leading-6 text-[#718398]">
                      {service.description}
                    </p>

                    {/* Features */}

                    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="flex items-center gap-2 text-[8px] tracking-[0.06em] text-[#8A9AAC]"
                        >
                          <Check
                            size={11}
                            strokeWidth={2}
                            className="text-[#1769C2]"
                          />

                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}

                  <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#DCE5ED] text-[#8A9AAC] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#1769C2] group-hover:bg-[#1769C2] group-hover:text-white sm:flex">
                    <ArrowUpRight size={16} strokeWidth={1.5} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================
            BOTTOM VALUE STATEMENT
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 gap-8 border-t border-[#DCE5ED] pt-10 md:grid-cols-3"
        >
          {/* Item 01 */}

          <div className="flex gap-4">
            <span className="text-[11px] font-semibold tracking-[0.15em] text-[#1769C2]">
              01
            </span>

            <div>
              <h4 className="text-[12px] font-semibold tracking-[0.05em] text-[#203B58]">
                BUSINESS FOCUSED
              </h4>

              <p className="mt-2 text-[11px] leading-6 text-[#8A9AAC]">
                Solutions designed around your actual business objectives.
              </p>
            </div>
          </div>

          {/* Item 02 */}

          <div className="flex gap-4">
            <span className="text-[11px] font-semibold tracking-[0.15em] text-[#1769C2]">
              02
            </span>

            <div>
              <h4 className="text-[12px] font-semibold tracking-[0.05em] text-[#203B58]">
                MODERN TECHNOLOGY
              </h4>

              <p className="mt-2 text-[11px] leading-6 text-[#8A9AAC]">
                Modern tools and technologies chosen for your project needs.
              </p>
            </div>
          </div>

          {/* Item 03 */}

          <div className="flex gap-4">
            <span className="text-[11px] font-semibold tracking-[0.15em] text-[#1769C2]">
              03
            </span>

            <div>
              <h4 className="text-[12px] font-semibold tracking-[0.05em] text-[#203B58]">
                LONG-TERM VALUE
              </h4>

              <p className="mt-2 text-[11px] leading-6 text-[#8A9AAC]">
                Built with usability, performance and future growth in mind.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            CTA
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col justify-between gap-6 border-t border-[#DCE5ED] pt-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-[12px] font-semibold text-[#203B58]">
              Have something specific in mind?
            </p>

            <p className="mt-2 text-[11px] leading-6 text-[#8A9AAC]">
              Let's discuss your requirements and find the right digital
              solution for your business.
            </p>
          </div>

          <Link
            to="/services"
            className="group inline-flex shrink-0 items-center gap-4 rounded-full bg-[#1769C2] px-7 py-4 text-[9px] font-semibold tracking-[0.2em] text-white shadow-[0_12px_30px_rgba(23,105,194,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F559F] hover:shadow-[0_16px_38px_rgba(23,105,194,0.23)]"
          >
            EXPLORE SERVICES

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowUpRight size={13} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServices;