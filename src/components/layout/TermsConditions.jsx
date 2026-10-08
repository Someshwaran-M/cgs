import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  FileText,
  ShieldCheck,
  CreditCard,
  Copyright,
  Ban,
  AlertTriangle,
  RefreshCw,
  Mail,
  ChevronRight,
} from "lucide-react";

const sections = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of Terms",
    icon: FileText,
    content: (
      <>
        <p>
          Welcome to CodeGenZ Solutions. By accessing or using our website,
          services, or digital platforms, you agree to be bound by these Terms
          & Conditions.
        </p>

        <p>
          If you do not agree with any part of these terms, please discontinue
          your use of our website and services.
        </p>
      </>
    ),
  },
  {
    id: "services",
    number: "02",
    title: "Our Services",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          CodeGenZ Solutions provides digital and technology services including
          website development, web applications, software development, UI/UX
          design, maintenance, deployment, and related technology solutions.
        </p>

        <p>
          Individual projects may have separate agreements defining specific
          requirements, deliverables, timelines, pricing, revisions, and
          responsibilities.
        </p>
      </>
    ),
  },
  {
    id: "projects",
    number: "03",
    title: "Project Scope",
    icon: FileText,
    content: (
      <>
        <p>
          Project requirements and deliverables are based on the scope agreed
          between CodeGenZ Solutions and the client.
        </p>

        <p>
          Requests that substantially change the original scope, functionality,
          design, integrations, or technical requirements may require
          additional time and charges.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    number: "04",
    title: "Pricing & Payments",
    icon: CreditCard,
    content: (
      <>
        <p>
          Project pricing and payment schedules will be communicated and agreed
          upon before or during project commencement.
        </p>

        <p>
          Depending on the project, payments may be structured as an advance,
          milestone payments, or final payment upon completion.
        </p>

        <p>
          Additional work outside the agreed scope may be charged separately.
        </p>
      </>
    ),
  },
  {
    id: "revisions",
    number: "05",
    title: "Changes & Revisions",
    icon: RefreshCw,
    content: (
      <>
        <p>
          Clients may request revisions according to the revision terms agreed
          for their project.
        </p>

        <p>
          Major changes after approval of a design, feature, or project stage
          may be considered additional work.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    number: "06",
    title: "Intellectual Property",
    icon: Copyright,
    content: (
      <>
        <p>
          Unless otherwise agreed in writing, CodeGenZ Solutions retains
          ownership of its pre-existing code, reusable components, frameworks,
          libraries, development processes, tools, and internal resources.
        </p>

        <p>
          Ownership and usage rights for project-specific deliverables will be
          determined by the agreement between CodeGenZ Solutions and the
          client.
        </p>

        <p>
          Clients are responsible for ensuring that content, images, logos,
          trademarks, documents, and other materials supplied by them may
          legally be used.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    number: "07",
    title: "Third-Party Services",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          Projects may depend on third-party services such as hosting
          providers, domain registrars, APIs, payment providers, libraries,
          cloud platforms, analytics tools, or other external technologies.
        </p>

        <p>
          Third-party services are governed by their own terms, policies,
          pricing, availability, and technical limitations.
        </p>

        <p>
          CodeGenZ Solutions cannot guarantee the continued availability or
          future functionality of third-party services.
        </p>
      </>
    ),
  },
  {
    id: "prohibited",
    number: "08",
    title: "Prohibited Activities",
    icon: Ban,
    content: (
      <>
        <p>
          Users must not use our website or services for unlawful, fraudulent,
          abusive, malicious, or unauthorized purposes.
        </p>

        <ul>
          <li>Attempting unauthorized access to systems or accounts.</li>
          <li>Uploading malicious software or harmful code.</li>
          <li>Violating intellectual property rights.</li>
          <li>Attempting to compromise website security.</li>
          <li>Using our services for fraudulent activities.</li>
          <li>Interfering with the availability of our services.</li>
        </ul>
      </>
    ),
  },
  {
    id: "content",
    number: "09",
    title: "Client Content & Responsibility",
    icon: FileText,
    content: (
      <>
        <p>
          Clients are responsible for the accuracy, legality, ownership, and
          authorization of content supplied for their projects.
        </p>

        <p>
          CodeGenZ Solutions is not responsible for legal claims arising from
          content, materials, trademarks, images, documents, or information
          supplied by the client.
        </p>
      </>
    ),
  },
  {
    id: "availability",
    number: "10",
    title: "Website & Service Availability",
    icon: AlertTriangle,
    content: (
      <>
        <p>
          We make reasonable efforts to maintain reliable website and service
          availability.
        </p>

        <p>
          However, services may occasionally be unavailable due to maintenance,
          technical issues, hosting problems, third-party dependencies, network
          failures, or circumstances beyond our reasonable control.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    number: "11",
    title: "Limitation of Liability",
    icon: AlertTriangle,
    content: (
      <>
        <p>
          CodeGenZ Solutions makes reasonable efforts to deliver reliable
          services and maintain the functionality of its website.
        </p>

        <p>
          However, we do not guarantee that our website or services will always
          be uninterrupted, error-free, completely secure, or free from
          technical issues.
        </p>

        <p>
          To the extent permitted by applicable law, CodeGenZ Solutions shall
          not be responsible for indirect, incidental, or consequential losses
          arising from the use of our website or services.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    number: "12",
    title: "Termination",
    icon: Ban,
    content: (
      <>
        <p>
          CodeGenZ Solutions may restrict or terminate access to its website or
          services where there is a violation of these terms, misuse of
          services, security concerns, or other legitimate reasons.
        </p>
      </>
    ),
  },
  {
    id: "updates",
    number: "13",
    title: "Changes to These Terms",
    icon: RefreshCw,
    content: (
      <>
        <p>
          CodeGenZ Solutions may update these Terms & Conditions from time to
          time to reflect changes in our services, business practices,
          technology, or applicable requirements.
        </p>

        <p>
          Updated terms will be published on this page. Continued use of the
          website after changes are published may constitute acceptance of the
          updated terms.
        </p>
      </>
    ),
  },
];

const TermsConditions = () => {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#061525]">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#061525]">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-48 -top-48 h-[650px] w-[650px] rounded-full border border-white/[0.06]" />

        <div className="pointer-events-none absolute -right-16 top-32 h-[430px] w-[430px] rounded-full border border-white/[0.05]" />

        <div className="pointer-events-none absolute bottom-[-250px] left-[-150px] h-[500px] w-[500px] rounded-full bg-[#38BDF8]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1500px] px-6 pb-24 pt-32 sm:px-8 lg:px-12 lg:pb-32 lg:pt-40">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.55fr]">
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
                Terms
                <br />
                <span className="text-slate-500">& Conditions.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                The terms that govern your use of CodeGenZ Solutions,
                our website, digital services, and technology solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:pb-2"
            >
              <div className="border-l border-white/10 pl-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Legal Document
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Please read these terms carefully before using our website or
                  engaging with our services.
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
          DOCUMENT INTRO
      ====================================================== */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1500px] px-6 py-14 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.25fr_1fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
                Document
              </p>

              <p className="mt-2 text-sm font-medium text-[#061525]">
                Terms & Conditions
              </p>
            </div>

            <div className="max-w-4xl">
              <p className="text-xl leading-9 tracking-tight text-[#061525] sm:text-2xl">
                These terms establish a clear understanding between CodeGenZ
                Solutions and the people or organizations using our website and
                services.
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-500">
                By using our services, you agree to comply with these terms and
                any project-specific agreements that may apply to your
                engagement with CodeGenZ Solutions.
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

          {/* Document */}
          <div className="max-w-4xl">
            {sections.map((section, index) => {
              const Icon = section.icon;

              return (
                <motion.article
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
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
          AGREEMENT CTA
      ====================================================== */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-[1500px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] bg-[#061525] p-8 sm:p-12 lg:p-16"
          >
            {/* Decorative rings */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute -right-12 top-12 h-48 w-48 rounded-full border border-white/10" />

            <div className="relative z-10 max-w-3xl">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#38BDF8]">
                <Mail size={20} />
              </div>

              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#38BDF8]">
                Questions?
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Need clarification before you begin?
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                If you have questions about these terms, project agreements,
                pricing, or our services, our team is happy to help.
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
          <span>© 2026 CodeGenZ Solutions</span>

          <span>
            Terms & Conditions · Last updated October 2026
          </span>
        </div>
      </section>
    </main>
  );
};

export default TermsConditions;