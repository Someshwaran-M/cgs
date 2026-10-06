import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Sparkles,
  Code2,
  Globe2,
  Layers3,
  X,
} from "lucide-react";

const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    label: "For individuals & small businesses",
    price: "₹15,000",
    period: "starting from",
    description:
      "A professional digital presence for businesses that are getting started online.",
    icon: Globe2,
    features: [
      "Professional business website",
      "Up to 5 pages",
      "Responsive design",
      "Contact form",
      "Basic SEO setup",
      "Social media integration",
      "Basic performance optimization",
      "Deployment assistance",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    label: "For growing businesses",
    price: "₹30,000",
    period: "starting from",
    description:
      "A stronger digital platform for businesses ready to grow their online presence.",
    icon: Layers3,
    popular: true,
    features: [
      "Everything in Starter",
      "Up to 10 pages",
      "Premium UI/UX design",
      "Advanced animations",
      "SEO optimization",
      "Google Analytics integration",
      "CMS / dynamic content",
      "Performance optimization",
      "Deployment & configuration",
    ],
  },
  {
    id: "custom",
    name: "Custom",
    label: "For advanced digital products",
    price: "Let's Talk",
    period: "tailored solution",
    description:
      "Custom-built websites and applications designed around your business requirements.",
    icon: Code2,
    features: [
      "Everything in Growth",
      "Custom web application",
      "Admin dashboard",
      "API development",
      "Database integration",
      "Authentication systems",
      "Third-party integrations",
      "Advanced security",
      "Dedicated project planning",
    ],
  },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-white text-[#061525]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-[550px] w-[550px] rounded-full border border-slate-100" />
        <div className="absolute -right-10 top-48 h-[360px] w-[360px] rounded-full border border-slate-100" />

        <div className="absolute -bottom-52 -left-44 h-[550px] w-[550px] rounded-full bg-slate-50" />
      </div>

      {/* Header */}
      <div className="relative mx-auto max-w-[1680px] px-6 pb-16 pt-32 lg:px-12 lg:pt-40">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.65fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              <span className="h-px w-10 bg-[#061525]" />
              Pricing
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.03] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Simple plans.
              <br />
              <span className="text-slate-400">Built around you.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              Every project is different. Choose a starting point and we&apos;ll
              shape the solution around your goals, features, and budget.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="relative mx-auto max-w-[1680px] px-6 pb-28 lg:px-12">
        <div className="grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.article
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className={`relative overflow-hidden rounded-[30px] border ${
                  plan.popular
                    ? "border-[#061525] bg-[#061525] text-white"
                    : "border-slate-200 bg-white"
                }`}
              >
                {/* Popular */}
                {plan.popular && (
                  <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#061525]">
                    <Sparkles size={12} />
                    Popular
                  </div>
                )}

                <div className="p-8 sm:p-10">
                  {/* Icon */}
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${
                      plan.popular
                        ? "bg-white/10 text-white"
                        : "bg-slate-100 text-[#061525]"
                    }`}
                  >
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  {/* Name */}
                  <div className="mt-8">
                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                        plan.popular ? "text-slate-400" : "text-slate-400"
                      }`}
                    >
                      {plan.label}
                    </p>

                    <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                      {plan.name}
                    </h2>
                  </div>

                  {/* Price */}
                  <div className="mt-8">
                    <p
                      className={`text-xs ${
                        plan.popular ? "text-slate-500" : "text-slate-400"
                      }`}
                    >
                      {plan.period}
                    </p>

                    <div className="mt-1 text-4xl font-semibold tracking-tight">
                      {plan.price}
                    </div>
                  </div>

                  <p
                    className={`mt-5 min-h-[72px] text-sm leading-6 ${
                      plan.popular ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* CTA */}
                  <button
                    type="button"
                    onClick={() => setSelectedPlan(plan)}
                    className={`group mt-8 flex w-full items-center justify-between rounded-full px-5 py-3.5 text-sm font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-white text-[#061525] hover:bg-slate-200"
                        : "bg-[#061525] text-white hover:bg-slate-800"
                    }`}
                  >
                    Discuss This Plan

                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45 ${
                        plan.popular
                          ? "bg-[#061525] text-white"
                          : "bg-white text-[#061525]"
                      }`}
                    >
                      <ArrowUpRight size={15} />
                    </span>
                  </button>

                  {/* Features */}
                  <div
                    className={`mt-9 border-t pt-8 ${
                      plan.popular
                        ? "border-white/10"
                        : "border-slate-100"
                    }`}
                  >
                    <p
                      className={`mb-5 text-xs font-semibold uppercase tracking-[0.18em] ${
                        plan.popular ? "text-slate-500" : "text-slate-400"
                      }`}
                    >
                      Includes
                    </p>

                    <ul className="space-y-4">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm"
                        >
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                              plan.popular
                                ? "bg-white/10 text-white"
                                : "bg-slate-100 text-[#061525]"
                            }`}
                          >
                            <Check size={12} strokeWidth={2.5} />
                          </span>

                          <span
                            className={
                              plan.popular
                                ? "text-slate-300"
                                : "text-slate-600"
                            }
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Custom Solutions Strip */}
      <div className="relative border-y border-slate-100 bg-slate-50">
        <div className="mx-auto flex max-w-[1680px] flex-col gap-8 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Need something different?
            </p>

            <h3 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight">
              We can build a solution specifically for your business.
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              From custom dashboards and APIs to complete web platforms, we
              create solutions based on your exact requirements.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-3 text-sm font-semibold"
          >
            Talk to our team

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#061525] text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={17} />
            </span>
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="relative mx-auto max-w-[1680px] px-6 py-14 lg:px-12">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-sm font-medium text-slate-600">
            All pricing shown is a starting point.
          </p>

          <p className="text-xs text-slate-400">
            Final pricing depends on project scope, features, integrations,
            timeline, and technical requirements.
          </p>
        </div>
      </div>

      {/* Plan Modal */}
      {selectedPlan && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#061525]/80 p-6 backdrop-blur-md"
          onClick={() => setSelectedPlan(null)}
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
              onClick={() => setSelectedPlan(null)}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-[#061525] hover:text-white"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Selected Plan
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              {selectedPlan.name}
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              {selectedPlan.description}
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                Starting from
              </p>

              <p className="mt-1 text-3xl font-semibold">
                {selectedPlan.price}
              </p>
            </div>

            <a
              href={`mailto:info@codegenzsolutions.com?subject=${encodeURIComponent(
                `${selectedPlan.name} Plan Enquiry`
              )}`}
              className="mt-7 flex w-full items-center justify-between rounded-full bg-[#061525] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Contact CodeGenZ

              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Pricing;