import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronDown,
  Send,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const GetAQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    services: [],
    projectDetails: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Website Development",
    "Web Application",
    "UI/UX Design",
    "E-Commerce",
    "Mobile Application",
    "Custom Software",
  ];

  const budgets = [
    "Below ₹10,000",
    "₹10,000 – ₹20,000",
    "₹20,000 – ₹50,000",
    "₹50,000 – ₹1,00,000",
    "₹1,00,000 – ₹2,50,000",
    "Above ₹2,50,000",
  ];

  const timelines = [
    "Less than 2 weeks",
    "2 – 4 weeks",
    "1 – 2 months",
    "2 – 3 months",
    "Flexible",
  ];

  const projectTypes = [
    "New Project",
    "Existing Project",
    "Website Redesign",
    "Application Development",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((item) => item !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Quote Request:", formData);

    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#f7f9fc] font-['Roboto'] text-[#07182d]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#061525]">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />

          <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-blue-500/[0.08] blur-[100px]" />

          <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-400/[0.06] blur-[100px]" />

          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025]" />

          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.018]" />
        </div>

        <div className="relative mx-auto max-w-[1500px] px-6 pb-20 pt-8 sm:px-8 sm:pb-24 md:px-12 lg:px-16">
          {/* Back */}
          <Link
            to="/"
            className="group mb-16 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400 transition-colors duration-300 hover:text-white"
          >
            <ArrowLeft
              size={15}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back Home
          </Link>

          {/* Heading */}
          <div className="max-w-[850px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1683ff]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#1683ff]">
                Start A Project
              </span>
            </div>

            <h1 className="text-4xl font-light leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Let's build something
              <span className="block font-medium text-[#1683ff]">
                meaningful.
              </span>
            </h1>

            <p className="mt-7 max-w-[650px] text-sm leading-7 text-slate-400 sm:text-base">
              Tell us about your project, your goals, and what you have in
              mind. We'll use the details to understand your requirements and
              prepare the right solution for your project.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          FORM SECTION
      ========================================================= */}
      <section className="relative px-6 py-14 sm:px-8 sm:py-20 md:px-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1250px]">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.75fr_1.25fr]">
                {/* =====================================================
                    LEFT INFORMATION
                ===================================================== */}
                <aside className="lg:sticky lg:top-10 lg:self-start">
                  <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(7,24,45,0.05)] sm:p-9">
                    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#061525] text-[#1683ff]">
                      <Sparkles size={21} strokeWidth={1.5} />
                    </div>

                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#1683ff]">
                      Project Brief
                    </p>

                    <h2 className="text-2xl font-medium tracking-[-0.02em] text-[#07182d]">
                      Help us understand your idea.
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-500">
                      The more information you provide, the better we can
                      understand your project scope and recommend an
                      appropriate approach.
                    </p>

                    {/* Steps */}
                    <div className="mt-10 space-y-6">
                      {[
                        "Tell us about your project",
                        "Select your requirements",
                        "Share your budget and timeline",
                        "Submit your project brief",
                      ].map((item, index) => (
                        <div
                          key={item}
                          className="flex items-start gap-4"
                        >
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#1683ff]/30 bg-[#1683ff]/5 text-[11px] font-bold text-[#1683ff]">
                            {index + 1}
                          </div>

                          <p className="pt-1 text-[13px] font-medium leading-5 text-slate-600">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </aside>

                {/* =====================================================
                    RIGHT FORM
                ===================================================== */}
                <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(7,24,45,0.05)] sm:p-9 md:p-10">
                  {/* PROJECT BASICS */}
                  <div>
                    <div className="mb-7">
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1683ff]">
                        01 — Project Basics
                      </p>

                      <h2 className="mt-2 text-xl font-medium text-[#07182d]">
                        Tell us about the project
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      {/* NAME */}
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500"
                        >
                          Your Name
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-[#07182d] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#1683ff] focus:bg-white focus:ring-4 focus:ring-[#1683ff]/5"
                        />
                      </div>

                      {/* COMPANY */}
                      <div>
                        <label
                          htmlFor="company"
                          className="mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500"
                        >
                          Company / Brand
                        </label>

                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company or brand name"
                          className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-[#07182d] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#1683ff] focus:bg-white focus:ring-4 focus:ring-[#1683ff]/5"
                        />
                      </div>

                      {/* PROJECT TYPE */}
                      <div>
                        <label
                          htmlFor="projectType"
                          className="mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500"
                        >
                          Project Type
                        </label>

                        <div className="relative">
                          <select
                            id="projectType"
                            name="projectType"
                            required
                            value={formData.projectType}
                            onChange={handleChange}
                            className="h-13 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 pr-11 text-sm text-[#07182d] outline-none transition-all duration-300 focus:border-[#1683ff] focus:bg-white focus:ring-4 focus:ring-[#1683ff]/5"
                          >
                            <option value="">Select project type</option>

                            {projectTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>

                          <ChevronDown
                            size={17}
                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                        </div>
                      </div>

                      {/* TIMELINE */}
                      <div>
                        <label
                          htmlFor="timeline"
                          className="mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500"
                        >
                          Expected Timeline
                        </label>

                        <div className="relative">
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="h-13 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 pr-11 text-sm text-[#07182d] outline-none transition-all duration-300 focus:border-[#1683ff] focus:bg-white focus:ring-4 focus:ring-[#1683ff]/5"
                          >
                            <option value="">Select timeline</option>

                            {timelines.map((timeline) => (
                              <option key={timeline} value={timeline}>
                                {timeline}
                              </option>
                            ))}
                          </select>

                          <ChevronDown
                            size={17}
                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* =====================================================
                      SERVICES
                  ===================================================== */}
                  <div className="mt-12 border-t border-slate-100 pt-10">
                    <div className="mb-7">
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1683ff]">
                        02 — Services
                      </p>

                      <h2 className="mt-2 text-xl font-medium text-[#07182d]">
                        What do you need?
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {services.map((service) => {
                        const selected = formData.services.includes(service);

                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => handleServiceChange(service)}
                            className={`group flex min-h-[58px] items-center justify-between rounded-xl border px-4 text-left transition-all duration-300 ${
                              selected
                                ? "border-[#1683ff] bg-[#1683ff]/5 text-[#07182d]"
                                : "border-slate-200 bg-slate-50 text-slate-500 hover:border-[#1683ff]/40 hover:bg-white"
                            }`}
                          >
                            <span className="text-[13px] font-medium">
                              {service}
                            </span>

                            <span
                              className={`flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-300 ${
                                selected
                                  ? "border-[#1683ff] bg-[#1683ff] text-white"
                                  : "border-slate-300 text-transparent"
                              }`}
                            >
                              <Check size={12} strokeWidth={2.5} />
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* =====================================================
                      BUDGET
                  ===================================================== */}
                  <div className="mt-12 border-t border-slate-100 pt-10">
                    <div className="mb-7">
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1683ff]">
                        03 — Budget
                      </p>

                      <h2 className="mt-2 text-xl font-medium text-[#07182d]">
                        What investment range are you considering?
                      </h2>
                    </div>

                    <div className="relative">
                      <select
                        id="budget"
                        name="budget"
                        required
                        value={formData.budget}
                        onChange={handleChange}
                        className="h-14 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 pr-11 text-sm text-[#07182d] outline-none transition-all duration-300 focus:border-[#1683ff] focus:bg-white focus:ring-4 focus:ring-[#1683ff]/5"
                      >
                        <option value="">Select your budget range</option>

                        {budgets.map((budget) => (
                          <option key={budget} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>

                      <ChevronDown
                        size={17}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                    </div>
                  </div>

                  {/* =====================================================
                      PROJECT DETAILS
                  ===================================================== */}
                  <div className="mt-12 border-t border-slate-100 pt-10">
                    <div className="mb-7">
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1683ff]">
                        04 — Project Details
                      </p>

                      <h2 className="mt-2 text-xl font-medium text-[#07182d]">
                        Tell us more about your idea
                      </h2>
                    </div>

                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      required
                      rows={7}
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Describe your project, goals, features, references, existing website/application, or anything else that can help us understand your requirements..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-7 text-[#07182d] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#1683ff] focus:bg-white focus:ring-4 focus:ring-[#1683ff]/5"
                    />
                  </div>

                  {/* =====================================================
                      SUBMIT
                  ===================================================== */}
                  <div className="mt-10 border-t border-slate-100 pt-8">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      <p className="max-w-[400px] text-[11px] leading-5 text-slate-400">
                        By submitting this form, you are providing the project
                        information needed for us to understand your
                        requirements.
                      </p>

                      <button
                        type="submit"
                        className="group inline-flex h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-[#061525] px-7 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#1683ff] hover:shadow-xl"
                      >
                        Submit Project

                        <Send
                          size={16}
                          strokeWidth={1.7}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            /* =========================================================
               SUCCESS STATE
            ========================================================= */
            <div className="mx-auto max-w-[700px] py-16">
              <div className="rounded-[32px] border border-slate-200 bg-white p-8 text-center shadow-[0_20px_70px_rgba(7,24,45,0.07)] sm:p-14">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#1683ff]/10 text-[#1683ff]">
                  <Check size={34} strokeWidth={1.7} />
                </div>

                <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.3em] text-[#1683ff]">
                  Project Brief Received
                </p>

                <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-[#07182d] sm:text-4xl">
                  Thanks for sharing your idea.
                </h2>

                <p className="mx-auto mt-5 max-w-[500px] text-sm leading-7 text-slate-500">
                  Your project information has been captured successfully. We
                  can now review the requirements and determine the right
                  direction for the project.
                </p>

                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#061525] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1683ff]"
                >
                  Back To Home

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default GetAQuote;