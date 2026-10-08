import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  UserCheck,
  Database,
  Cookie,
  Mail,
} from "lucide-react";

const sections = [
  {
    id: "information",
    number: "01",
    title: "Information We Collect",
    icon: Database,
    content: (
      <>
        <p>
          Depending on how you interact with CodeGenZ Solutions, we may
          collect information that you voluntarily provide to us.
        </p>

        <ul>
          <li>Name and contact details.</li>
          <li>Email address and phone number.</li>
          <li>Company or organization information.</li>
          <li>Project and service requirements.</li>
          <li>Information submitted through contact forms.</li>
          <li>Internship or career application information.</li>
          <li>Any other information you voluntarily provide.</li>
        </ul>
      </>
    ),
  },
  {
    id: "usage",
    number: "02",
    title: "How We Use Your Information",
    icon: Eye,
    content: (
      <>
        <p>
          Information collected by CodeGenZ Solutions may be used for
          legitimate business and operational purposes, including:
        </p>

        <ul>
          <li>Responding to enquiries and requests.</li>
          <li>Providing website development and technology services.</li>
          <li>Understanding project requirements.</li>
          <li>Communicating with clients and users.</li>
          <li>Processing internship and career applications.</li>
          <li>Improving our website, products, and services.</li>
          <li>Maintaining website security and functionality.</li>
          <li>Providing customer and technical support.</li>
        </ul>
      </>
    ),
  },
  {
    id: "provided",
    number: "03",
    title: "Information You Provide",
    icon: UserCheck,
    content: (
      <>
        <p>
          When you contact CodeGenZ Solutions or submit information through
          our website, you are responsible for ensuring that the information
          you provide is accurate and appropriate for the purpose for which it
          is submitted.
        </p>

        <p>
          Please avoid submitting sensitive personal information unless it is
          specifically required for the service or interaction.
        </p>
      </>
    ),
  },
  {
    id: "security",
    number: "04",
    title: "Data Security",
    icon: Lock,
    content: (
      <>
        <p>
          CodeGenZ Solutions takes reasonable technical and organizational
          measures to protect information against unauthorized access,
          alteration, disclosure, misuse, or destruction.
        </p>

        <p>
          However, no method of transmission over the internet or method of
          electronic storage is completely secure. Therefore, we cannot
          guarantee absolute security of information.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    number: "05",
    title: "Sharing of Information",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          CodeGenZ Solutions does not sell or rent your personal information
          to third parties.
        </p>

        <p>
          Information may be shared when reasonably necessary with trusted
          service providers, technology partners, hosting providers, or other
          parties that help us operate our business and deliver our services.
        </p>

        <p>
          Information may also be disclosed when required by law, legal
          proceedings, regulatory requirements, or to protect our rights,
          users, or business.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    number: "06",
    title: "Cookies & Similar Technologies",
    icon: Cookie,
    content: (
      <>
        <p>
          Our website may use cookies and similar technologies to improve
          website functionality, understand usage patterns, and provide a
          better user experience.
        </p>

        <p>
          You can control or disable cookies through your browser settings.
          Disabling certain cookies may affect some website functionality.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    number: "07",
    title: "Third-Party Links & Services",
    icon: FileText,
    content: (
      <>
        <p>
          Our website may contain links to third-party websites, platforms,
          or services.
        </p>

        <p>
          These third parties may have their own privacy policies and
          practices. CodeGenZ Solutions is not responsible for the privacy
          practices or content of third-party websites.
        </p>

        <p>
          We recommend reviewing the privacy policy of any third-party
          service before providing personal information.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    number: "08",
    title: "Data Retention",
    icon: Database,
    content: (
      <>
        <p>
          We retain information for as long as reasonably necessary to
          provide our services, maintain business records, communicate with
          users, resolve disputes, comply with legal obligations, and protect
          our legitimate business interests.
        </p>
      </>
    ),
  },
  {
    id: "choices",
    number: "09",
    title: "Your Privacy Choices",
    icon: UserCheck,
    content: (
      <>
        <p>
          Depending on applicable law, you may have certain rights regarding
          your personal information, including requesting access to,
          correction of, or deletion of information that we hold about you.
        </p>

        <p>
          If you would like to make a privacy-related request, please contact
          CodeGenZ Solutions using our official contact information.
        </p>
      </>
    ),
  },
  {
    id: "children",
    number: "10",
    title: "Children's Privacy",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          Our website and services are not intentionally designed to collect
          personal information from children without appropriate authorization.
        </p>

        <p>
          If you believe that a child has provided personal information to us
          without appropriate consent, please contact us so that we can review
          the situation and take appropriate action.
        </p>
      </>
    ),
  },
  {
    id: "updates",
    number: "11",
    title: "Changes to This Privacy Policy",
    icon: FileText,
    content: (
      <>
        <p>
          CodeGenZ Solutions may update this Privacy Policy from time to time
          to reflect changes in our services, business practices, technology,
          or applicable requirements.
        </p>

        <p>
          Any updated version will be published on this page. We encourage
          visitors to review this page periodically for the latest
          information.
        </p>
      </>
    ),
  },
];

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#061525]">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#061525]">
        {/* Decorative Rings */}
        <div className="pointer-events-none absolute -right-48 -top-48 h-[650px] w-[650px] rounded-full border border-white/[0.06]" />

        <div className="pointer-events-none absolute -right-16 top-32 h-[430px] w-[430px] rounded-full border border-white/[0.05]" />

        <div className="pointer-events-none absolute bottom-[-250px] left-[-150px] h-[500px] w-[500px] rounded-full bg-[#38BDF8]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1500px] px-6 pb-24 pt-32 sm:px-8 lg:px-12 lg:pb-32 lg:pt-40">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.55fr]">

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-12 bg-[#38BDF8]" />

                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#38BDF8]">
                  CodeGenZ Solutions
                </span>
              </div>

              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl">
                Privacy
                <br />
                <span className="text-slate-500">Policy.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                How CodeGenZ Solutions collects, uses, protects, and manages
                information when you interact with our website and services.
              </p>
            </motion.div>

            {/* Hero Meta */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:pb-2"
            >
              <div className="border-l border-white/10 pl-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Privacy Document
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Your privacy matters to us. This document explains our
                  approach to handling information responsibly.
                </p>

                <div className="mt-7 flex items-center gap-3 text-xs text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-[#38BDF8]" />
                  Last updated October 2026
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1500px] px-6 py-14 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.25fr_1fr]">

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                Document
              </p>

              <p className="mt-2 text-sm font-medium text-[#061525]">
                Privacy Policy
              </p>
            </div>

            <div className="max-w-4xl">
              <p className="text-xl leading-9 tracking-tight text-[#061525] sm:text-2xl">
                CodeGenZ Solutions respects your privacy and is committed to
                protecting the personal information you provide to us.
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-500">
                This policy explains how information may be collected, used,
                stored, protected, and disclosed when you visit our website,
                contact us, use our services, or interact with our digital
                platforms.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN DOCUMENT
      ====================================================== */}
      <section className="mx-auto max-w-[1500px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[250px_1fr] lg:gap-20">

          {/* Desktop Index */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                On this page
              </p>

              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-center gap-3 py-2 text-xs text-slate-400 transition-colors hover:text-[#061525]"
                  >
                    <span className="w-6 font-mono text-[10px] text-slate-300 group-hover:text-[#38BDF8]">
                      {section.number}
                    </span>

                    <span>{section.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Document Content */}
          <div className="max-w-4xl">
            {sections.map((section, index) => {
              const Icon = section.icon;

              return (
                <motion.article
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.025,
                  }}
                  className="group scroll-mt-28 border-t border-slate-200 py-12 sm:py-14"
                >
                  <div className="grid gap-8 sm:grid-cols-[90px_1fr]">

                    {/* Number */}
                    <div>
                      <span className="font-mono text-xs font-semibold tracking-wider text-slate-300 transition-colors duration-300 group-hover:text-[#38BDF8]">
                        {section.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div>
                      <div className="mb-7 flex items-start justify-between gap-6">

                        <div>
                          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                            Section {section.number}
                          </p>

                          <h2 className="text-2xl font-semibold tracking-tight text-[#061525] sm:text-3xl">
                            {section.title}
                          </h2>
                        </div>

                        <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-[#061525] group-hover:bg-[#061525] group-hover:text-[#38BDF8] sm:flex">
                          <Icon size={18} strokeWidth={1.6} />
                        </div>

                      </div>

                      <div className="space-y-5 text-[15px] leading-8 text-slate-500">
                        {section.content}
                      </div>
                    </div>

                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRIVACY CTA
      ====================================================== */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-[1500px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] bg-[#061525] p-8 sm:p-12 lg:p-16"
          >
            {/* Decorative Rings */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute -right-12 top-12 h-48 w-48 rounded-full border border-white/10" />

            <div className="relative z-10 max-w-3xl">

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#38BDF8]">
                <Mail size={20} />
              </div>

              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#38BDF8]">
                Privacy Questions?
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Want to know more about your privacy?
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                If you have questions, concerns, or requests regarding this
                Privacy Policy or your personal information, our team is here
                to help.
              </p>

              <a
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#061525] transition-all duration-300 hover:bg-[#38BDF8]"
              >
                Contact CodeGenZ

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#061525] text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={14} />
                </span>
              </a>

            </div>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          FOOTER NOTE
      ====================================================== */}
      <section className="border-t border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-3 px-6 py-8 text-xs text-slate-400 sm:px-8 md:flex-row lg:px-12">
          <span>
            © 2026 CodeGenZ Solutions
          </span>

          <span>
            Privacy Policy · Last updated October 2026
          </span>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;