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
  Zap,
  ShieldCheck,
} from "lucide-react";

/* =========================================================
   PRICING DATA
========================================================= */

const pricingPlans = [
  {
    id: "starter",
    number: "01",
    name: "Starter",
    label: "For individuals & small businesses",
    price: "₹15,000",
    period: "Starting from",
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
    number: "02",
    name: "Growth",
    label: "For growing businesses",
    price: "₹30,000",
    period: "Starting from",
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
    number: "03",
    name: "Custom",
    label: "For advanced digital products",
    price: "Let's Talk",
    period: "Tailored solution",
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

/* =========================================================
   CARD ANIMATION
========================================================= */

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.94,
  },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: index * 0.13,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* =========================================================
   PRICING
========================================================= */

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <section
      id="pricing"
      className="relative min-h-screen overflow-hidden bg-[#F8FAFC] font-['Roboto'] text-[#071A2B]"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#071A2B 1px, transparent 1px), linear-gradient(90deg, #071A2B 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Large orbit */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 90,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-[300px] top-[80px] h-[750px] w-[750px] rounded-full border border-slate-200"
        />

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 65,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-[180px] top-[210px] h-[500px] w-[500px] rounded-full border border-slate-200"
        />

        <div className="absolute -left-[300px] bottom-[-250px] h-[650px] w-[650px] rounded-full border border-slate-200" />

        {/* Glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.025, 0.06, 0.025],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[10%] top-[20%] h-[350px] w-[350px] rounded-full bg-[#1769C2] blur-[130px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[10%] top-[45%] h-[400px] w-[400px] rounded-full bg-[#1769C2] blur-[140px]"
        />

        {/* Floating dots */}
        <motion.div
          animate={{
            y: [-15, 15, -15],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[7%] top-[35%] h-1.5 w-1.5 rounded-full bg-[#1769C2]"
        />

        <motion.div
          animate={{
            y: [15, -15, 15],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[9%] top-[28%] h-2 w-2 rounded-full bg-[#1769C2]"
        />
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <div className="relative mx-auto max-w-[1680px] px-6 pb-14 pt-32 sm:pt-36 lg:px-12 lg:pb-20 lg:pt-44">
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-12 bg-[#071A2B]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-slate-500">
                Investment
              </span>
            </div>

            <h1 className="max-w-5xl text-[clamp(48px,7vw,105px)] font-semibold leading-[0.91] tracking-[-0.065em]">
              Pricing
              <br />

              <span className="text-slate-400">
                without limits.
              </span>
            </h1>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="lg:pb-3"
          >
            <p className="max-w-lg text-[13px] leading-7 text-slate-500 sm:text-[15px]">
              Start with a plan that fits your current needs. As your
              business grows, your digital platform can grow with it.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Flexible project pricing
              </span>
            </div>
          </motion.div>
        </div>

        {/* Header line */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="mt-16 h-px origin-left bg-slate-200"
        />
      </div>

      {/* =====================================================
          PLANS
      ===================================================== */}

      <div className="relative mx-auto max-w-[1680px] px-6 pb-28 lg:px-12">
        <div className="grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.article
                key={plan.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                whileHover={{
                  y: plan.popular ? -12 : -8,
                }}
                className={`group relative ${
                  plan.popular
                    ? "lg:-mt-7 lg:mb-7"
                    : ""
                }`}
              >
                {/* =================================================
                    OUTER GLOW
                ================================================= */}

                <div
                  className={`absolute -inset-[1px] rounded-[34px] opacity-0 blur-xl transition-all duration-700 group-hover:opacity-100 ${
                    plan.popular
                      ? "bg-[#1769C2]/25"
                      : "bg-slate-400/20"
                  }`}
                />

                {/* =================================================
                    CARD
                ================================================= */}

                <div
                  className={`relative flex h-full flex-col overflow-hidden rounded-[34px] border ${
                    plan.popular
                      ? "border-[#071A2B] bg-[#071A2B] text-white shadow-[0_35px_100px_rgba(7,26,43,0.2)]"
                      : "border-slate-200 bg-white text-[#071A2B] shadow-[0_20px_60px_rgba(7,26,43,0.04)]"
                  }`}
                >
                  {/* Animated border */}

                  <motion.div
                    initial={{
                      scaleX: 0,
                    }}
                    whileHover={{
                      scaleX: 1,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    className={`absolute left-0 right-0 top-0 h-[2px] origin-left ${
                      plan.popular
                        ? "bg-[#63A9FF]"
                        : "bg-[#071A2B]"
                    }`}
                  />

                  {/* =================================================
                      DECORATIVE NUMBER
                  ================================================= */}

                  <div
                    className={`absolute -right-2 top-[-32px] text-[150px] font-bold leading-none tracking-[-0.1em] transition-all duration-700 group-hover:-translate-x-3 ${
                      plan.popular
                        ? "text-white/[0.035]"
                        : "text-[#071A2B]/[0.025]"
                    }`}
                  >
                    {plan.number}
                  </div>

                  {/* =================================================
                      LIGHT
                  ================================================= */}

                  <div
                    className={`absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[90px] transition-opacity duration-700 ${
                      plan.popular
                        ? "bg-[#1769C2]/20 opacity-100"
                        : "bg-[#1769C2]/10 opacity-0 group-hover:opacity-100"
                    }`}
                  />

                  {/* =================================================
                      POPULAR LABEL
                  ================================================= */}

                  {plan.popular && (
                    <motion.div
                      animate={{
                        y: [-2, 2, -2],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute right-6 top-6 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-white px-4 py-2 text-[8px] font-bold uppercase tracking-[0.2em] text-[#071A2B] shadow-xl"
                    >
                      <Sparkles size={11} />

                      Recommended
                    </motion.div>
                  )}

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div className="relative z-10 flex h-full flex-col p-7 sm:p-9 lg:p-10">
                    {/* Icon */}

                    <motion.div
                      whileHover={{
                        rotate: 10,
                        scale: 1.1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 14,
                      }}
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                        plan.popular
                          ? "bg-white/10 text-white"
                          : "bg-slate-100 text-[#071A2B] group-hover:bg-[#071A2B] group-hover:text-white"
                      }`}
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.5}
                      />
                    </motion.div>

                    {/* Plan */}

                    <div className="mt-9">
                      <p
                        className={`text-[9px] font-semibold uppercase tracking-[0.2em] ${
                          plan.popular
                            ? "text-white/35"
                            : "text-slate-400"
                        }`}
                      >
                        {plan.label}
                      </p>

                      <h2 className="mt-3 text-[34px] font-semibold tracking-[-0.045em]">
                        {plan.name}
                      </h2>
                    </div>

                    {/* Price */}

                    <div className="mt-9">
                      <p
                        className={`text-[9px] uppercase tracking-[0.18em] ${
                          plan.popular
                            ? "text-white/35"
                            : "text-slate-400"
                        }`}
                      >
                        {plan.period}
                      </p>

                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 12,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.5,
                          delay:
                            0.2 + index * 0.1,
                        }}
                        className={`mt-2 text-[42px] font-semibold tracking-[-0.055em] sm:text-[48px] ${
                          plan.popular
                            ? "text-white"
                            : "text-[#071A2B]"
                        }`}
                      >
                        {plan.price}
                      </motion.div>
                    </div>

                    {/* Description */}

                    <p
                      className={`mt-5 min-h-[78px] text-[12px] leading-6 ${
                        plan.popular
                          ? "text-white/50"
                          : "text-slate-500"
                      }`}
                    >
                      {plan.description}
                    </p>

                    {/* CTA */}

                    <button
                      type="button"
                      onClick={() =>
                        setSelectedPlan(plan)
                      }
                      className={`group/cta mt-8 flex w-full items-center justify-between rounded-full px-5 py-3.5 text-[12px] font-semibold transition-all duration-300 ${
                        plan.popular
                          ? "bg-white text-[#071A2B] hover:bg-[#E8F2FF]"
                          : "bg-[#071A2B] text-white hover:bg-[#1769C2]"
                      }`}
                    >
                      <span>
                        Discuss This Plan
                      </span>

                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-500 group-hover/cta:rotate-45 ${
                          plan.popular
                            ? "bg-[#071A2B] text-white"
                            : "bg-white text-[#071A2B]"
                        }`}
                      >
                        <ArrowUpRight size={15} />
                      </span>
                    </button>

                    {/* Divider */}

                    <div
                      className={`mt-9 border-t pt-8 ${
                        plan.popular
                          ? "border-white/10"
                          : "border-slate-100"
                      }`}
                    >
                      <div className="mb-6 flex items-center justify-between">
                        <span
                          className={`text-[9px] font-bold uppercase tracking-[0.2em] ${
                            plan.popular
                              ? "text-white/35"
                              : "text-slate-400"
                          }`}
                        >
                          What's included
                        </span>

                        <span
                          className={`text-[9px] ${
                            plan.popular
                              ? "text-white/20"
                              : "text-slate-300"
                          }`}
                        >
                          {String(
                            plan.features.length
                          ).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Features */}

                      <div className="space-y-4">
                        {plan.features.map(
                          (feature, featureIndex) => (
                            <motion.div
                              key={feature}
                              initial={{
                                opacity: 0,
                                x: -12,
                              }}
                              whileInView={{
                                opacity: 1,
                                x: 0,
                              }}
                              viewport={{
                                once: true,
                              }}
                              transition={{
                                duration: 0.35,
                                delay:
                                  0.25 +
                                  featureIndex *
                                    0.035,
                              }}
                              className="flex items-start gap-3"
                            >
                              <span
                                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                                  plan.popular
                                    ? "bg-white/10 text-white"
                                    : "bg-slate-100 text-[#071A2B]"
                                }`}
                              >
                                <Check
                                  size={11}
                                  strokeWidth={2.7}
                                />
                              </span>

                              <span
                                className={`text-[12px] leading-5 ${
                                  plan.popular
                                    ? "text-white/60"
                                    : "text-slate-600"
                                }`}
                              >
                                {feature}
                              </span>
                            </motion.div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Bottom security */}

                    <div className="mt-auto pt-8">
                      <div
                        className={`flex items-center gap-2 text-[8px] uppercase tracking-[0.16em] ${
                          plan.popular
                            ? "text-white/25"
                            : "text-slate-300"
                        }`}
                      >
                        <ShieldCheck size={12} />

                        Transparent project pricing
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          PREMIUM CUSTOM SOLUTION SECTION
      ===================================================== */}

      <section className="relative overflow-hidden border-y border-slate-200 bg-[#071A2B] text-white">
        {/* Background */}

        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 80,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -right-40 -top-60 h-[700px] w-[700px] rounded-full border border-white/[0.04]"
          />

          <div className="absolute right-[10%] top-[30%] h-[300px] w-[300px] rounded-full bg-[#1769C2]/10 blur-[100px]" />

          <div className="absolute left-[20%] bottom-[-200px] h-[400px] w-[400px] rounded-full bg-[#1769C2]/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto flex max-w-[1680px] flex-col gap-10 px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-24">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#63A9FF]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/35">
                Something unique?
              </span>
            </div>

            <h3 className="mt-5 max-w-3xl text-[clamp(32px,4vw,58px)] font-semibold leading-[1.05] tracking-[-0.045em]">
              Your project doesn't have to fit
              <span className="text-[#63A9FF]">
                {" "}
                inside a package.
              </span>
            </h3>

            <p className="mt-5 max-w-2xl text-[12px] leading-7 text-white/45 sm:text-sm">
              Tell us what you want to build. We'll create a
              solution around your exact business requirements,
              technical needs, and growth goals.
            </p>
          </motion.div>

          <motion.a
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            href="/contact?quote=true"
            className="group flex shrink-0 items-center justify-between gap-6 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] sm:w-auto"
          >
            Start a conversation

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#071A2B] transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight size={16} />
            </span>
          </motion.a>
        </div>
      </section>

      {/* =====================================================
          BOTTOM NOTE
      ===================================================== */}

      <div className="relative mx-auto max-w-[1680px] px-6 py-14 lg:px-12">
        <div className="flex flex-col items-center text-center">
          <p className="text-[11px] font-medium text-slate-600">
            All pricing shown is a starting point.
          </p>

          <p className="mt-2 max-w-2xl text-[10px] leading-6 text-slate-400">
            Final pricing depends on project scope, features,
            integrations, timeline, and technical requirements.
          </p>
        </div>
      </div>

      {/* =====================================================
          PLAN MODAL
      ===================================================== */}

      {selectedPlan && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#03111E]/85 p-5 backdrop-blur-xl sm:p-6"
          onClick={() => setSelectedPlan(null)}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(event) =>
              event.stopPropagation()
            }
            className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[32px] bg-white p-7 shadow-[0_40px_120px_rgba(0,0,0,0.35)] sm:p-10"
          >
            {/* Close */}

            <button
              type="button"
              onClick={() => setSelectedPlan(null)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 hover:rotate-90 hover:bg-[#071A2B] hover:text-white"
              aria-label="Close"
            >
              <X size={17} />
            </button>

            {/* Icon */}

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071A2B] text-white">
              {React.createElement(
                selectedPlan.icon,
                {
                  size: 22,
                  strokeWidth: 1.5,
                }
              )}
            </div>

            <p className="mt-7 text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400">
              Selected plan
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em]">
              {selectedPlan.name}
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              {selectedPlan.description}
            </p>

            {/* Price */}

            <div className="mt-7 rounded-[22px] bg-[#F5F7FA] p-6">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                {selectedPlan.period}
              </p>

              <p className="mt-2 text-4xl font-semibold tracking-[-0.04em]">
                {selectedPlan.price}
              </p>
            </div>

            {/* Features */}

            <div className="mt-6 rounded-[22px] border border-slate-100 p-6">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Included
                </p>

                <span className="text-[9px] text-slate-300">
                  {selectedPlan.features.length} features
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {selectedPlan.features.map(
                  (feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 text-[12px] text-slate-600"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[#071A2B]">
                        <Check
                          size={11}
                          strokeWidth={2.7}
                        />
                      </span>

                      <span>{feature}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Contact */}

            <a
              href={`mailto:info@codegenzsolutions.com?subject=${encodeURIComponent(
                `${selectedPlan.name} Plan Enquiry`
              )}`}
              className="group mt-7 flex w-full items-center justify-between rounded-full bg-[#071A2B] px-6 py-4 text-[12px] font-semibold text-white transition-all duration-300 hover:bg-[#1769C2]"
            >
              Contact CodeGenZ

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#071A2B] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={15} />
              </span>
            </a>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Pricing;