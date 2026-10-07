import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Mail,
  Globe2,
  Sparkles,
  LockKeyhole,
} from "lucide-react";

const socialPlatforms = [
  {
    name: "LinkedIn",
    handle: "CodeGenZ Solutions",
    description:
      "Company updates, technology insights, projects, career opportunities, and professional news.",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/codegenzsolutions/",
    number: "01",
    label: "Professional",
    available: true,
  },
  {
    name: "Instagram",
    handle: "@codegenzsolutions",
    description:
      "Creative work, digital experiences, projects, designs, and behind-the-scenes moments.",
    icon: Instagram,
    href: "https://www.instagram.com/codegenzsolutions?stkn=MXI2dW9qY2h0N3hmdQ==",
    number: "02",
    label: "Creative",
    available: true,
  },
  {
    name: "Facebook",
    handle: "CodeGenZ Solutions",
    description:
      "Announcements, services, projects, community updates, and company news.",
    icon: Facebook,
    href: "https://www.facebook.com/share/19gZhW65uq/",
    number: "03",
    label: "Community",
    available: true,
  },
  {
    name: "Twitter / X",
    handle: "@codegenzsolutions",
    description:
      "Technology conversations, industry observations, product ideas, and company updates.",
    icon: Twitter,
    href: "#",
    number: "04",
    label: "Coming Soon",
    available: false,
  },
  {
    name: "YouTube",
    handle: "CodeGenZ Solutions",
    description:
      "Project showcases, tutorials, technology content, product demonstrations, and more.",
    icon: Youtube,
    href: "#",
    number: "05",
    label: "Coming Soon",
    available: false,
  },
];

const FollowUs = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f8fa] font-['Roboto'] text-[#061525]">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-[250px] top-[100px] h-[600px] w-[600px] rounded-full bg-[#1683ff]/[0.025] blur-[100px]" />

        <div className="absolute -left-[250px] top-[700px] h-[550px] w-[550px] rounded-full bg-slate-300/[0.12] blur-[110px]" />

        <div className="absolute -right-[220px] top-[170px] h-[560px] w-[560px] rounded-full border border-slate-300/30" />

        <div className="absolute -right-[100px] top-[290px] h-[350px] w-[350px] rounded-full border border-blue-200/30" />

        <span className="absolute left-[10%] top-[27%] h-1.5 w-1.5 rounded-full bg-[#1683ff]/30" />

        <span className="absolute right-[13%] top-[42%] h-1.5 w-1.5 rounded-full bg-slate-400/40" />
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative mx-auto max-w-[1400px] px-5 pb-14 pt-28 sm:px-7 sm:pt-32 md:px-10 lg:px-14 lg:pb-20 lg:pt-40">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#1683ff]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.32em] text-[#1769c2]">
                Follow Us
              </span>
            </div>

            <h1 className="max-w-[850px] text-[clamp(2.8rem,6.5vw,6.5rem)] font-light leading-[0.92] tracking-[-0.065em]">
              Stay
              <span className="text-[#1683ff]"> connected.</span>
              <br />
              <span className="text-slate-400">
                Stay inspired.
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="lg:pb-1"
          >
            <div className="mb-4 flex items-center gap-2.5">
              <Sparkles
                size={13}
                strokeWidth={1.5}
                className="text-[#1683ff]"
              />

              <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-slate-400">
                CodeGenZ Community
              </span>
            </div>

            <p className="max-w-[430px] text-[13px] leading-7 text-slate-500 sm:text-sm">
              Follow our journey across the platforms where technology,
              creativity, and ideas come together.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-10 bg-slate-300" />

              <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-slate-400">
                Connect / Discover / Grow
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SOCIAL CARDS
      ========================================================= */}
      <section className="relative mx-auto max-w-[1400px] px-5 pb-24 sm:px-7 md:px-10 lg:px-14 lg:pb-32">
        {/* Header */}
        <div className="mb-7 flex items-end justify-between">
          <div>
            <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#1683ff]">
              Social Presence
            </p>

            <h2 className="mt-1.5 text-lg font-medium tracking-[-0.025em] text-[#061525] sm:text-xl">
              Find us online.
            </h2>
          </div>

          <span className="hidden text-[8px] font-bold uppercase tracking-[0.22em] text-slate-300 sm:block">
            05 Platforms
          </span>
        </div>

        {/* =====================================================
            SMALL PREMIUM CARDS
        ===================================================== */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {socialPlatforms.map((platform, index) => {
            const Icon = platform.icon;

            const CardContent = (
              <>
                {/* Soft glow */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full blur-3xl transition-opacity duration-500 ${
                    platform.available
                      ? "bg-[#1683ff]/10 opacity-0 group-hover:opacity-100"
                      : "bg-slate-400/10 opacity-0 group-hover:opacity-100"
                  }`}
                />

                {/* Top */}
                <div className="relative flex items-center justify-between">
                  <span
                    className={`text-[8px] font-bold tracking-[0.2em] ${
                      platform.available
                        ? "text-slate-300 group-hover:text-[#1683ff]"
                        : "text-slate-300"
                    } transition-colors duration-300`}
                  >
                    {platform.number}
                  </span>

                  <span
                    className={`rounded-full border px-2 py-1 text-[7px] font-bold uppercase tracking-[0.12em] ${
                      platform.available
                        ? "border-slate-200 bg-slate-50 text-slate-400 group-hover:border-[#1683ff]/20 group-hover:bg-[#1683ff]/5 group-hover:text-[#1683ff]"
                        : "border-amber-200 bg-amber-50 text-amber-500"
                    } transition-all duration-300`}
                  >
                    {platform.label}
                  </span>
                </div>

                {/* Icon */}
                <div className="relative mt-7">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-[17px] ${
                      platform.available
                        ? "bg-[#061525] text-white shadow-[0_12px_25px_rgba(6,21,37,0.14)] group-hover:bg-[#1683ff] group-hover:shadow-[0_12px_28px_rgba(22,131,255,0.22)]"
                        : "bg-slate-100 text-slate-400"
                    } transition-all duration-500`}
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className={
                        platform.available
                          ? "transition-transform duration-500 group-hover:scale-110"
                          : ""
                      }
                    />
                  </div>

                  {!platform.available && (
                    <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-slate-500 text-white">
                      <LockKeyhole size={9} />
                    </div>
                  )}

                  {platform.available && (
                    <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#1683ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  )}
                </div>

                {/* Content */}
                <div className="relative mt-5">
                  <h3
                    className={`text-[19px] font-medium tracking-[-0.03em] ${
                      platform.available
                        ? "text-[#061525]"
                        : "text-slate-500"
                    }`}
                  >
                    {platform.name}
                  </h3>

                  <p className="mt-0.5 truncate text-[9px] font-medium tracking-[0.02em] text-slate-400">
                    {platform.handle}
                  </p>

                  <p className="mt-3 line-clamp-3 text-[10px] leading-5 text-slate-500">
                    {platform.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="relative mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                  <span
                    className={`text-[7px] font-bold uppercase tracking-[0.16em] ${
                      platform.available
                        ? "text-slate-300 group-hover:text-slate-500"
                        : "text-amber-400"
                    } transition-colors duration-300`}
                  >
                    {platform.available
                      ? "Visit Profile"
                      : "Coming Soon"}
                  </span>

                  {platform.available ? (
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-500 group-hover:rotate-45 group-hover:border-[#061525] group-hover:bg-[#061525] group-hover:text-white">
                      <ArrowUpRight size={13} />
                    </span>
                  ) : (
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                      <LockKeyhole size={12} />
                    </span>
                  )}
                </div>

                {/* Bottom blue accent */}
                {platform.available && (
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#1683ff] transition-all duration-500 group-hover:w-full" />
                )}
              </>
            );

            if (!platform.available) {
              return (
                <motion.div
                  key={platform.name}
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
                    delay: index * 0.07,
                  }}
                  className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-[22px] border border-slate-200 bg-white/80 p-5 opacity-90 backdrop-blur-sm"
                >
                  {CardContent}
                </motion.div>
              );
            }

            return (
              <motion.a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
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
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_12px_35px_rgba(6,21,37,0.035)] transition-all duration-500 hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(6,21,37,0.09)]"
              >
                {CardContent}
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          PREMIUM DARK CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#061525]">
        <div className="pointer-events-none absolute -right-[220px] -top-[250px] h-[600px] w-[600px] rounded-full border border-white/[0.055]" />

        <div className="pointer-events-none absolute -right-[80px] -top-[100px] h-[350px] w-[350px] rounded-full border border-white/[0.045]" />

        <div className="pointer-events-none absolute -bottom-[250px] -left-[180px] h-[500px] w-[500px] rounded-full bg-[#1683ff]/[0.035] blur-[100px]" />

        <div className="relative mx-auto max-w-[1400px] px-5 py-16 sm:px-7 sm:py-20 md:px-10 lg:px-14 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#1683ff]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#63a9ff]">
                  Let&apos;s Connect
                </span>
              </div>

              <h2 className="max-w-[780px] text-3xl font-light leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                One conversation can start something{" "}
                <span className="text-[#5ea6ff]">
                  meaningful.
                </span>
              </h2>

              <p className="mt-5 max-w-[560px] text-[12px] leading-6 text-slate-400 sm:text-sm">
                Have a project idea, collaboration opportunity, or business
                requirement? Start a conversation with CodeGenZ Solutions.
              </p>
            </motion.div>

            {/* Button */}
            <motion.a
              href="mailto:info@codegenzsolutions.com"
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="group flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 text-[11px] font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-[#1683ff]/50 hover:bg-[#1683ff]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <Mail size={14} />
              </span>

              <span>Start A Conversation</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#061525] transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight size={13} />
              </span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* =========================================================
          WEBSITE STRIP
      ========================================================= */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 py-8 sm:px-7 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50">
              <Globe2
                size={16}
                strokeWidth={1.5}
              />

              <span className="absolute right-0 top-0 h-1.5 w-1.5 rounded-full bg-[#1683ff]" />
            </div>

            <div>
              <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-slate-400">
                Explore CodeGenZ
              </p>

              <h3 className="mt-0.5 text-sm font-medium text-[#061525]">
                Discover our digital solutions.
              </h3>
            </div>
          </div>

          <a
            href="/"
            className="group flex w-fit items-center gap-3 text-[9px] font-bold uppercase tracking-[0.16em] text-[#061525]"
          >
            <span className="transition-colors duration-300 group-hover:text-[#1683ff]">
              Visit Website
            </span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#061525] text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#1683ff]">
              <ArrowUpRight
                size={13}
                strokeWidth={1.5}
              />
            </span>
          </a>
        </div>
      </section>

      {/* =========================================================
          BOTTOM
      ========================================================= */}
      <div className="bg-[#f7f8fa]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 sm:px-7 md:px-10 lg:px-14">
          <p className="text-[8px] font-medium uppercase tracking-[0.18em] text-slate-400">
            CodeGenZ Solutions
          </p>

          <p className="text-[8px] font-medium uppercase tracking-[0.18em] text-slate-300">
            Connect • Create • Grow
          </p>
        </div>
      </div>
    </main>
  );
};

export default FollowUs;