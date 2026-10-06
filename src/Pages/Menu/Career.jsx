import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  MapPin,
  Clock3,
  Users,
  Code2,
  Palette,
  Database,
  Megaphone,
  X,
  Check,
} from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    department: "Development",
    type: "Full Time",
    location: "Chennai / Coimbatore / Remote",
    icon: Code2,
    description:
      "Build modern, responsive, and high-quality web interfaces using modern frontend technologies.",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Git"],
  },
  {
    id: 2,
    title: "Full Stack Python Developer",
    department: "Development",
    type: "Full Time",
    location: "Chennai / Coimbatore / Remote",
    icon: Database,
    description:
      "Develop scalable web applications, APIs, backend systems, and database-driven solutions.",
    skills: ["Python", "Django", "REST API", "React", "MySQL"],
  },
  {
    id: 3,
    title: "UI / UX Designer",
    department: "Design",
    type: "Full Time",
    location: "Remote / Hybrid",
    icon: Palette,
    description:
      "Design thoughtful digital experiences with strong visual systems and user-focused interactions.",
    skills: ["Figma", "UI Design", "UX", "Wireframes", "Prototyping"],
  },
  {
    id: 4,
    title: "Digital Marketing Executive",
    department: "Marketing",
    type: "Full Time",
    location: "Chennai / Remote",
    icon: Megaphone,
    description:
      "Help businesses grow their digital presence through content, SEO, social media, and campaigns.",
    skills: ["SEO", "Social Media", "Content", "Analytics"],
  },
];

const values = [
  {
    number: "01",
    title: "Build with purpose",
    description:
      "We focus on creating digital solutions that solve real problems and create measurable value.",
  },
  {
    number: "02",
    title: "Keep learning",
    description:
      "Technology changes quickly. We encourage continuous learning, experimentation, and improvement.",
  },
  {
    number: "03",
    title: "Work together",
    description:
      "Great products are built through communication, collaboration, and shared ownership.",
  },
  {
    number: "04",
    title: "Think differently",
    description:
      "We welcome fresh ideas and practical approaches that help us create better digital experiences.",
  },
];

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <section
      id="careers"
      className="relative overflow-hidden bg-white text-[#061525]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-48 top-10 h-[650px] w-[650px] rounded-full border border-slate-100" />
        <div className="absolute -right-10 top-44 h-[430px] w-[430px] rounded-full border border-slate-100" />
        <div className="absolute -bottom-60 -left-48 h-[600px] w-[600px] rounded-full bg-slate-50" />
      </div>

      {/* Hero */}
      <div className="relative mx-auto max-w-[1680px] px-6 pb-24 pt-32 lg:px-12 lg:pt-40">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.65fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              <span className="h-px w-10 bg-[#061525]" />
              Careers
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Build your
              <br />
              <span className="text-slate-400">next chapter.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Join CodeGenZ Solutions and work on meaningful digital products
              while growing your skills alongside a technology-focused team.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#openings"
                className="group inline-flex items-center gap-3 rounded-full bg-[#061525] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                View Open Positions

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#061525] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>
              </a>

              <a
                href="mailto:info@codegenzsolutions.com?subject=Career%20Enquiry"
                className="inline-flex items-center rounded-full border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-[#061525] hover:text-[#061525]"
              >
                Send Resume
              </a>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto h-[430px] w-full max-w-[500px]"
          >
            <div className="absolute inset-8 rounded-full border border-slate-200" />
            <div className="absolute inset-20 rounded-full border border-slate-200" />
            <div className="absolute inset-32 rounded-full border border-slate-200" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-48 w-48 items-center justify-center rounded-full bg-[#061525] text-white shadow-2xl">
                <BriefcaseBusiness size={68} strokeWidth={1.2} />
              </div>
            </div>

            <div className="absolute left-0 top-24 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Create
            </div>

            <div className="absolute right-0 bottom-24 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Grow
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="relative border-y border-slate-100 bg-slate-50">
        <div className="mx-auto grid max-w-[1680px] divide-y divide-slate-200 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-12">
          <div className="flex items-center gap-4 py-7 sm:px-8 sm:first:pl-0">
            <BriefcaseBusiness size={22} strokeWidth={1.5} />

            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                Opportunities
              </p>
              <p className="mt-1 font-semibold">Multiple Roles</p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-7 sm:px-8">
            <Users size={22} strokeWidth={1.5} />

            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                Environment
              </p>
              <p className="mt-1 font-semibold">Collaborative Team</p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-7 sm:px-8">
            <Clock3 size={22} strokeWidth={1.5} />

            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                Work Style
              </p>
              <p className="mt-1 font-semibold">Flexible Opportunities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div
        id="openings"
        className="relative mx-auto max-w-[1680px] px-6 py-28 lg:px-12"
      >
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Open Positions
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Find your role.
            </h2>
          </motion.div>

          <p className="max-w-xl text-base leading-7 text-slate-500 lg:pt-5">
            Explore opportunities across development, design, and digital
            marketing. If your skills match what we are looking for, we would
            like to hear from you.
          </p>
        </div>

        <div className="border-t border-slate-200">
          {jobs.map((job, index) => {
            const Icon = job.icon;

            return (
              <motion.article
                key={job.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="group border-b border-slate-200 py-8 lg:py-9"
              >
                <div className="grid items-center gap-7 lg:grid-cols-[70px_1fr_auto]">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-[#061525] group-hover:text-white">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-semibold">
                        {job.title}
                      </h3>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                        {job.department}
                      </span>
                    </div>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                      {job.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {job.location}
                      </span>

                      <span className="flex items-center gap-1.5">
                        <Clock3 size={14} />
                        {job.type}
                      </span>
                    </div>
                  </div>

                  {/* Action */}
                  <button
                    type="button"
                    onClick={() => setSelectedJob(job)}
                    className="group/button inline-flex items-center gap-3 text-sm font-semibold lg:justify-self-end"
                  >
                    View Position

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#061525] text-white transition-transform duration-300 group-hover/button:rotate-45">
                      <ArrowUpRight size={16} />
                    </span>
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Why CodeGenZ */}
      <div className="relative bg-[#061525] text-white">
        <div className="mx-auto max-w-[1680px] px-6 py-24 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Life at CodeGenZ
              </p>

              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
                Build. Learn. Contribute.
              </h2>

              <p className="mt-6 max-w-xl leading-7 text-slate-400">
                We believe strong teams are built by people who are curious,
                responsible, and willing to learn. Every project is an
                opportunity to improve.
              </p>
            </div>

            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {values.map((value, index) => (
                <motion.div
                  key={value.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="border-b border-white/10 pb-7"
                >
                  <span className="text-xs font-bold tracking-[0.2em] text-slate-600">
                    {value.number}
                  </span>

                  <h3 className="mt-5 text-xl font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* General Application */}
      <div className="relative">
        <div className="mx-auto max-w-[1680px] px-6 py-28 text-center lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Don&apos;t See Your Role?
            </p>

            <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Your skills may be exactly what we need next.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500">
              Send us your resume and a short introduction. We&apos;ll keep
              your profile in mind for relevant opportunities.
            </p>

            <a
              href="mailto:info@codegenzsolutions.com?subject=Career%20Application"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#061525] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Send Your Resume

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#061525] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Job Modal */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#061525]/80 p-6 backdrop-blur-md"
          onClick={() => setSelectedJob(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl rounded-[30px] bg-white p-8 sm:p-10"
          >
            <button
              type="button"
              onClick={() => setSelectedJob(null)}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-[#061525] hover:text-white"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {selectedJob.department}
            </p>

            <h2 className="mt-3 pr-12 text-3xl font-semibold sm:text-4xl">
              {selectedJob.title}
            </h2>

            <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                {selectedJob.location}
              </span>

              <span className="flex items-center gap-2">
                <Clock3 size={16} />
                {selectedJob.type}
              </span>
            </div>

            <p className="mt-7 leading-7 text-slate-600">
              {selectedJob.description}
            </p>

            <div className="mt-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Skills
              </p>

              <div className="space-y-3">
                {selectedJob.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 text-sm text-slate-600"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100">
                      <Check size={13} />
                    </span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`mailto:info@codegenzsolutions.com?subject=${encodeURIComponent(
                `Application - ${selectedJob.title}`
              )}`}
              className="mt-9 flex w-full items-center justify-between rounded-full bg-[#061525] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Apply for this position
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Career;