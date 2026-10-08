import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock3,
  MessageCircle,
  Globe2,
  Code2,
  Palette,
  Megaphone,
  Search,
  Smartphone,
  ExternalLink,
  Navigation,
  CheckCircle2,
} from "lucide-react";

const Contact = () => {
  const contactDetails = [
    {
      number: "01",
      icon: Mail,
      label: "Email",
      title: "info@codegenzsolutions.com",
      description: "For project enquiries and general communication.",
      href: "mailto:info@codegenzsolutions.com",
      action: "Send Email",
    },
    {
      number: "02",
      icon: Phone,
      label: "Phone",
      title: "+91 93847 12673",
      description: "Talk directly with us about your requirement.",
      href: "tel:+919384712673",
      action: "Call Now",
    },
    {
      number: "03",
      icon: MapPin,
      label: "Location",
      title: "Paramathi Velur, Tamil Nadu",
      description: "Our location in Namakkal district.",
      href: "https://www.google.com/maps/place/Paramathi+Velur,+Tamil+Nadu",
      action: "View Map",
    },
    {
      number: "04",
      icon: Clock3,
      label: "Working Hours",
      title: "Monday – Saturday",
      description: "9:00 AM – 6:00 PM",
      href: null,
      action: null,
    },
  ];

  const services = [
    {
      number: "01",
      icon: Globe2,
      title: "Website Development",
      description:
        "Professional business websites with responsive layouts, modern UI and smooth interactions.",
    },
    {
      number: "02",
      icon: Code2,
      title: "Web Applications",
      description:
        "Custom web applications for business workflows, dashboards and digital products.",
    },
    {
      number: "03",
      icon: Palette,
      title: "UI / UX Design",
      description:
        "Clean and practical interfaces focused on usability, clarity and visual consistency.",
    },
    {
      number: "04",
      icon: Megaphone,
      title: "Digital Marketing",
      description:
        "Online marketing solutions designed to improve reach, visibility and growth.",
    },
    {
      number: "05",
      icon: Search,
      title: "SEO Services",
      description:
        "Search optimization focused on stronger organic visibility and discoverability.",
    },
    {
      number: "06",
      icon: Smartphone,
      title: "Mobile Applications",
      description:
        "Custom mobile application solutions based on your product and business requirements.",
    },
  ];

  const mapUrl =
    "https://www.google.com/maps/place/Paramathi+Velur,+Tamil+Nadu";

  const whatsappUrl =
    "https://wa.me/919384712673?text=Hello%20CodeGenZ%20Solutions%2C%20I%20would%20like%20to%20discuss%20a%20project.";

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#061525]">
      {/* ============================================================
          HERO
      ============================================================ */}

      <section className="relative border-b border-slate-200">
        <div className="mx-auto max-w-[1500px] px-6 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-24 lg:pt-40">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            {/* Heading */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-9 bg-cyan-400" />

                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">
                  Contact Desk
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                Let&apos;s talk about
                <br />

                <span className="text-slate-300">what you want to build.</span>
              </h1>
            </motion.div>

            {/* Intro */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="max-w-md lg:justify-self-end"
            >
              <p className="text-sm leading-7 text-slate-500 sm:text-base">
                Have a website, web application, design or digital growth idea?
                Reach out directly and tell us where you want to go.
              </p>

              <div className="mt-7 flex items-center gap-3 text-xs font-semibold text-slate-500">
                <span className="flex h-2 w-2 rounded-full bg-cyan-400" />

                Available Monday – Saturday
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CONTACT DESK
      ============================================================ */}

      <section className="relative">
        <div className="mx-auto max-w-[1500px] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr]">
            {/* LEFT LABEL */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-32 lg:self-start"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">
                Direct Contact
              </span>

              <h2 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">
                Choose how you
                <br />
                want to connect.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
                We keep communication simple. Use email, phone or WhatsApp to
                start your conversation.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#061525] px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:bg-cyan-400 hover:text-[#061525]"
              >
                <MessageCircle size={15} />

                Chat on WhatsApp

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>

            {/* RIGHT CONTACT LIST */}

            <div className="border-t border-slate-200">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;

                const content = (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.07,
                    }}
                    className="group relative grid gap-5 border-b border-slate-200 py-7 transition-all duration-300 sm:grid-cols-[55px_45px_1fr_auto] sm:items-center sm:gap-6"
                  >
                    {/* Number */}

                    <span className="text-[11px] font-bold tracking-[0.18em] text-slate-300">
                      {item.number}
                    </span>

                    {/* Icon */}

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-cyan-300 group-hover:bg-cyan-300 group-hover:text-[#061525]">
                      <Icon size={16} strokeWidth={1.7} />
                    </div>

                    {/* Content */}

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                        {item.label}
                      </p>

                      <p className="mt-1 text-base font-semibold text-[#061525] sm:text-lg">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
                        {item.description}
                      </p>
                    </div>

                    {/* Action */}

                    {item.action && (
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 transition-colors duration-300 group-hover:text-[#061525]">
                        <span className="hidden sm:block">
                          {item.action}
                        </span>

                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 group-hover:border-[#061525] group-hover:bg-[#061525] group-hover:text-white">
                          <ArrowUpRight size={14} />
                        </span>
                      </div>
                    )}
                  </motion.div>
                );

                return item.href ? (
                  <a
                    key={item.number}
                    href={item.href}
                    target={
                      item.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.number}>{content}</div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FEATURE STRIP
      ============================================================ */}

      <section className="border-y border-slate-200 bg-[#f8fafb]">
        <div className="mx-auto grid max-w-[1500px] sm:grid-cols-3">
          <div className="border-b border-slate-200 p-7 sm:border-b-0 sm:border-r lg:p-9">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Communication
            </span>

            <p className="mt-3 text-sm font-semibold text-[#061525]">
              Direct & simple
            </p>
          </div>

          <div className="border-b border-slate-200 p-7 sm:border-b-0 sm:border-r lg:p-9">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Approach
            </span>

            <p className="mt-3 text-sm font-semibold text-[#061525]">
              Requirement first
            </p>
          </div>

          <div className="p-7 lg:p-9">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Availability
            </span>

            <p className="mt-3 text-sm font-semibold text-[#061525]">
              Monday – Saturday
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES
      ============================================================ */}

      <section className="relative">
        <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr]">
            {/* Heading */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">
                Services
              </span>

              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                What can we
                <br />
                help you with?
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
                Choose a starting point or simply contact us with your idea.
                We can discuss the appropriate direction.
              </p>
            </motion.div>

            {/* Services */}

            <div className="grid border-t border-slate-200 md:grid-cols-2">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                    }}
                    className="group border-b border-slate-200 p-6 sm:p-8"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-slate-300">
                        {service.number}
                      </span>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-cyan-300 group-hover:bg-cyan-300 group-hover:text-[#061525]">
                        <Icon size={16} />
                      </div>
                    </div>

                    <h3 className="mt-9 text-lg font-semibold text-[#061525]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {service.description}
                    </p>

                    <div className="mt-6 h-px w-7 bg-slate-200 transition-all duration-300 group-hover:w-12 group-hover:bg-cyan-300" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MAP
      ============================================================ */}

      <section className="border-t border-slate-200 bg-[#f8fafb]">
        <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">
            {/* Location text */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">
                Location
              </span>

              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                Find us in
                <br />
                <span className="text-slate-300">Tamil Nadu.</span>
              </h2>

              <div className="mt-8 flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#061525] text-cyan-300">
                  <MapPin size={16} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#061525]">
                    Paramathi Velur
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Namakkal, Tamil Nadu, India
                  </p>
                </div>
              </div>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center gap-2 border-b border-[#061525] pb-2 text-xs font-semibold text-[#061525]"
              >
                Open in Google Maps

                <ExternalLink
                  size={13}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>

            {/* Map */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden border border-slate-200 bg-white"
            >
              <div className="h-[380px] sm:h-[450px] lg:h-[500px]">
                <iframe
                  title="CodeGenZ Solutions Location"
                  src="https://www.google.com/maps?q=Paramathi%20Velur%2C%20Tamil%20Nadu&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Floating map information */}

              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                <div className="flex items-center gap-3 border border-white/70 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#061525] text-cyan-300">
                    <Navigation size={14} />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      CodeGenZ Solutions
                    </p>

                    <p className="mt-0.5 text-xs font-semibold text-[#061525]">
                      Paramathi Velur
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA
      ============================================================ */}

      <section className="relative">
        <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border-t border-slate-200 pt-10"
          >
            <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">
                  Ready to start?
                </span>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  Tell us what you have in mind.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
                  Send an email or message us on WhatsApp and let&apos;s start
                  the conversation.
                </p>
              </div>

              <a
                href="mailto:info@codegenzsolutions.com"
                className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#061525] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-300 hover:text-[#061525]"
              >
                info@codegenzsolutions.com

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:rotate-45 group-hover:bg-[#061525] group-hover:text-white">
                  <ArrowUpRight size={15} />
                </span>
              </a>
            </div>

            <div className="mt-16 flex flex-col justify-between gap-5 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={15}
                  className="text-cyan-400"
                  strokeWidth={1.8}
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  CodeGenZ Solutions
                </span>
              </div>

              <span className="text-xs text-slate-400">
                Digital solutions for modern businesses
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;