import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Code2,
  Palette,
  Database,
  Megaphone,
  BriefcaseBusiness,
  GraduationCap,
  Clock3,
  Users,
  Award,
  X,
} from "lucide-react";

const internshipRoles = [
  {
    title: "Frontend Development",
    icon: Code2,
    description:
      "Work on modern responsive interfaces and real-world web development projects.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "UI / UX Design",
    icon: Palette,
    description:
      "Create clean, user-focused interfaces and contribute to digital product experiences.",
    technologies: ["Figma", "UI Design", "UX Research", "Prototyping"],
  },
  {
    title: "Python Development",
    icon: Database,
    description:
      "Build backend systems, APIs, and database-driven applications using Python.",
    technologies: ["Python", "Django", "REST API", "MySQL"],
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    description:
      "Learn how businesses build their online presence through digital marketing.",
    technologies: ["SEO", "Social Media", "Content", "Analytics"],
  },
];

const benefits = [
  "Work on practical projects",
  "Industry-oriented learning",
  "Mentorship and technical guidance",
  "Hands-on development experience",
  "Project completion certificate",
  "Portfolio-ready project experience",
];

const process = [
  {
    number: "01",
    title: "Apply",
    description:
      "Submit your details and select the internship area that matches your interests.",
  },
  {
    number: "02",
    title: "Screening",
    description:
      "Our team reviews your application and evaluates your basic skills and interests.",
  },
  {
    number: "03",
    title: "Learn & Build",
    description:
      "Work with our team on practical tasks and real-world project requirements.",
  },
  {
    number: "04",
    title: "Complete",
    description:
      "Complete the assigned work and receive project completion recognition.",
  },
];

const Internship = () => {
  const [selectedRole, setSelectedRole] = React.useState(null);

  return (
    <section
      id="internship"
      className="relative overflow-hidden bg-white text-[#061525]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-10 h-[600px] w-[600px] rounded-full border border-slate-100" />
        <div className="absolute -right-10 top-36 h-[400px] w-[400px] rounded-full border border-slate-100" />

        <div className="absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-slate-50" />
      </div>

      {/* Hero */}
      <div className="relative mx-auto max-w-[1680px] px-6 pb-20 pt-32 lg:px-12 lg:pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.7fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              <span className="h-px w-10 bg-[#061525]" />
              Internship Program
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.03] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Learn.
              <br />
              <span className="text-slate-400">Build. Grow.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Build practical skills through real project experience and
              industry-oriented learning with CodeGenZ Solutions.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://forms.gle/SEuWsvX6fhLXDJbJA"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-[#061525] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Apply Now
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#061525] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>
              </a>

              <a
                href="#internship-roles"
                className="inline-flex items-center rounded-full border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-[#061525] hover:text-[#061525]"
              >
                Explore Roles
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
            <div className="absolute inset-10 rounded-full border border-slate-200" />
            <div className="absolute inset-20 rounded-full border border-slate-200" />
            <div className="absolute inset-32 rounded-full border border-slate-200" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-[#061525] text-white shadow-2xl">
                <GraduationCap
                  size={72}
                  strokeWidth={1.2}
                />

                <div className="absolute -right-5 top-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white text-[#061525] shadow-lg">
                  <Code2 size={19} />
                </div>

                <div className="absolute -bottom-3 -left-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white text-[#061525] shadow-lg">
                  <Award size={19} />
                </div>
              </div>
            </div>

            <div className="absolute left-0 top-20 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
              <span className="h-2 w-2 rounded-full bg-[#061525]" />
              Learn
            </div>

            <div className="absolute right-0 bottom-24 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
              Build
              <span className="h-2 w-2 rounded-full bg-[#061525]" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Program Stats */}
      <div className="relative border-y border-slate-100 bg-slate-50">
        <div className="mx-auto grid max-w-[1680px] divide-y divide-slate-200 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-12">
          <div className="flex items-center gap-4 px-0 py-7 sm:px-8">
            <Clock3 size={22} strokeWidth={1.5} />

            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                Program
              </p>
              <p className="mt-1 font-semibold">Project Based</p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-0 py-7 sm:px-8">
            <Users size={22} strokeWidth={1.5} />

            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                Experience
              </p>
              <p className="mt-1 font-semibold">Hands-on Learning</p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-0 py-7 sm:px-8">
            <Award size={22} strokeWidth={1.5} />

            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                Completion
              </p>
              <p className="mt-1 font-semibold">Certificate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Internship Roles */}
      <div
        id="internship-roles"
        className="relative mx-auto max-w-[1680px] px-6 py-28 lg:px-12"
      >
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Available Tracks
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Choose your path.
            </h2>
          </motion.div>

          <p className="max-w-xl text-base leading-7 text-slate-500 lg:pt-5">
            Select an area that matches your career goals and develop practical
            experience through project-based learning.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {internshipRoles.map((role, index) => {
            const Icon = role.icon;

            return (
              <motion.article
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-[#061525] hover:shadow-xl hover:shadow-slate-200/40 sm:p-9"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 transition-colors duration-300 group-hover:bg-[#061525] group-hover:text-white">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <span className="text-xs font-semibold tracking-[0.2em] text-slate-300">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {role.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
                  {role.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {role.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-slate-50 px-3 py-1.5 text-[11px] font-medium text-slate-500"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedRole(role)}
                  className="group/btn mt-7 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  View Track
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#061525] text-white transition-transform duration-300 group-hover/btn:rotate-45">
                    <ArrowUpRight size={15} />
                  </span>
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Benefits */}
      <div className="relative bg-[#061525] text-white">
        <div className="mx-auto grid max-w-[1680px] gap-16 px-6 py-24 lg:grid-cols-[0.8fr_1fr] lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Why Join
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
              Experience that helps you move forward.
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-slate-400">
              The program is designed to give aspiring developers and
              designers practical exposure while helping them create
              meaningful work for their portfolios.
            </p>
          </motion.div>

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="flex gap-4 border-b border-white/10 pb-6"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Check size={14} />
                </span>

                <p className="text-sm leading-6 text-slate-300">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="relative mx-auto max-w-[1680px] px-6 py-28 lg:px-12">
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            How It Works
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            From application to experience.
          </h2>
        </div>

        <div className="grid border-t border-slate-200 lg:grid-cols-4">
          {process.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="border-b border-slate-200 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0"
            >
              <span className="text-xs font-bold tracking-[0.2em] text-slate-300">
                {item.number}
              </span>

              <h3 className="mt-7 text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Eligibility */}
      <div className="relative border-y border-slate-100 bg-slate-50">
        <div className="mx-auto grid max-w-[1680px] gap-12 px-6 py-20 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Who Can Apply
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              Built for aspiring professionals.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "Students and recent graduates",
              "Aspiring developers and designers",
              "Candidates looking for practical project experience",
              "Learners with basic knowledge of their chosen track",
              "Candidates willing to learn and complete assigned work",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border-b border-slate-200 pb-4 text-sm text-slate-600"
              >
                <Check size={16} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-[1680px] px-6 py-28 text-center lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Start Your Journey
            </p>

            <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Ready to turn your skills into real experience?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500">
              Choose your preferred internship track and submit your
              application to begin the process.
            </p>

            <a
              href="https://forms.gle/SEuWsvX6fhLXDJbJA"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#061525] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Apply for Internship

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#061525] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Role Modal */}
      {selectedRole && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#061525]/80 p-6 backdrop-blur-md"
          onClick={() => setSelectedRole(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-[28px] bg-white p-8 sm:p-10"
          >
            <button
              type="button"
              onClick={() => setSelectedRole(null)}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-[#061525] hover:text-white"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Internship Track
            </p>

            <h2 className="mt-3 pr-10 text-3xl font-semibold">
              {selectedRole.title}
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              {selectedRole.description}
            </p>

            <div className="mt-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                Technologies / Skills
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedRole.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-600"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://forms.gle/SEuWsvX6fhLXDJbJA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-between rounded-full bg-[#061525] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Apply for this track
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Internship;