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
} from "lucide-react";

const socialPlatforms = [
  {
    name: "LinkedIn",
    handle: "CodeGenZ Solutions",
    description:
      "Follow us for company updates, technology insights, projects, career opportunities, and professional news.",
    icon: Linkedin,
    href: "#",
    number: "01",
  },
  {
    name: "Instagram",
    handle: "@codegenzsolutions",
    description:
      "Explore our creative work, designs, projects, behind-the-scenes content, and digital experiences.",
    icon: Instagram,
    href: "#",
    number: "02",
  },
  {
    name: "Facebook",
    handle: "CodeGenZ Solutions",
    description:
      "Stay connected with our latest announcements, services, projects, and community updates.",
    icon: Facebook,
    href: "#",
    number: "03",
  },
  {
    name: "Twitter / X",
    handle: "@codegenzsolutions",
    description:
      "Follow our technology conversations, industry observations, product ideas, and company updates.",
    icon: Twitter,
    href: "#",
    number: "04",
  },
  {
    name: "YouTube",
    handle: "CodeGenZ Solutions",
    description:
      "Watch technology content, project showcases, tutorials, product demonstrations, and more.",
    icon: Youtube,
    href: "#",
    number: "05",
  },
];

const FollowUs = () => {
  return (
    <section
      id="follow-us"
      className="relative overflow-hidden bg-white text-[#061525]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-48 top-0 h-[650px] w-[650px] rounded-full border border-slate-100" />
        <div className="absolute -right-16 top-40 h-[430px] w-[430px] rounded-full border border-slate-100" />

        <div className="absolute -bottom-60 -left-48 h-[600px] w-[600px] rounded-full bg-slate-50" />
      </div>

      {/* Hero */}
      <div className="relative mx-auto max-w-[1680px] px-6 pb-20 pt-32 lg:px-12 lg:pt-40">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.65fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              <span className="h-px w-10 bg-[#061525]" />
              Follow Us
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.03] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Stay connected.
              <br />
              <span className="text-slate-400">Stay inspired.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-xl text-lg leading-8 text-slate-600"
          >
            Follow CodeGenZ Solutions across our social channels for project
            updates, technology insights, creative work, opportunities, and
            company news.
          </motion.p>
        </div>
      </div>

      {/* Social Platforms */}
      <div className="relative mx-auto max-w-[1680px] px-6 pb-28 lg:px-12">
        <div className="border-t border-slate-200">
          {socialPlatforms.map((platform, index) => {
            const Icon = platform.icon;

            return (
              <motion.a
                key={platform.name}
                href={platform.href}
                target={platform.href !== "#" ? "_blank" : undefined}
                rel={
                  platform.href !== "#"
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                }}
                className="group block border-b border-slate-200 py-8 lg:py-10"
              >
                <div className="grid items-center gap-7 lg:grid-cols-[70px_80px_1fr_auto]">
                  {/* Number */}
                  <span className="text-xs font-bold tracking-[0.2em] text-slate-300">
                    {platform.number}
                  </span>

                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-[#061525] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex flex-wrap items-center gap-4">
                      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        {platform.name}
                      </h2>

                      <span className="text-xs font-medium text-slate-400">
                        {platform.handle}
                      </span>
                    </div>

                    <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
                      {platform.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#061525] group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Community CTA */}
      <div className="relative overflow-hidden bg-[#061525] text-white">
        <div className="pointer-events-none absolute -right-40 -top-48 h-[500px] w-[500px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute right-20 top-10 h-[300px] w-[300px] rounded-full border border-white/10" />

        <div className="relative mx-auto grid max-w-[1680px] gap-12 px-6 py-24 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Let&apos;s Connect
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              One conversation can start something meaningful.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">
              Have a project idea, collaboration opportunity, or business
              requirement? Connect with our team directly.
            </p>
          </div>

          <a
            href="mailto:info@codegenzsolutions.com"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#061525] transition-colors hover:bg-slate-200"
          >
            <Mail size={17} />

            Contact Us

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#061525] text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={15} />
            </span>
          </a>
        </div>
      </div>

      {/* Website CTA */}
      <div className="relative border-b border-slate-100 bg-slate-50">
        <div className="mx-auto flex max-w-[1680px] flex-col justify-between gap-8 px-6 py-16 lg:flex-row lg:items-center lg:px-12">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white">
              <Globe2 size={19} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Explore CodeGenZ
              </p>

              <h3 className="mt-1 text-xl font-semibold">
                Discover our digital solutions.
              </h3>
            </div>
          </div>

          <a
            href="/"
            className="group inline-flex items-center gap-3 text-sm font-semibold"
          >
            Visit Website

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#061525] text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FollowUs;