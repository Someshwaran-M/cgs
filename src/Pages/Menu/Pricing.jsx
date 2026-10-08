import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Globe2,
  Layout,
  Monitor,
  Building2,
  Utensils,
  UserRound,
  LockKeyhole,
  ShoppingCart,
  Store,
  Code2,
  ShieldCheck,
  X,
  Sparkles,
  Megaphone,
  Search,
  Smartphone,
  Layers3,
} from "lucide-react";

/* =========================================================
   PRICING DATA
========================================================= */

const pricingPlans = [
  {
    id: "landing-basic",
    number: "01",
    category: "Website",
    name: "Landing Page – Basic",
    label: "For individuals & small businesses",
    price: "₹5,000",
    period: "Starting from",
    description:
      "A clean and responsive landing page for businesses that need a simple professional online presence.",
    icon: Layout,
    features: [
      "1 responsive page",
      "Contact & WhatsApp integration",
      "Mobile-friendly design",
    ],
  },

  {
    id: "landing-premium",
    number: "02",
    category: "Website",
    name: "Landing Page – Premium",
    label: "For brands that need more impact",
    price: "₹7,500–₹10,000",
    period: "Project range",
    description:
      "A premium landing page with modern UI, animations and stronger visual presentation.",
    icon: Sparkles,
    popular: true,
    features: [
      "Modern UI & animations",
      "Contact & WhatsApp integration",
      "Responsive premium design",
    ],
  },

  {
    id: "landing-domain",
    number: "03",
    category: "Website",
    name: "Landing + Domain",
    label: "Website with domain setup",
    price: "₹7,000–₹12,000",
    period: "Project range",
    description:
      "A professional landing page with domain setup for businesses establishing their online identity.",
    icon: Globe2,
    features: [
      "Responsive landing page",
      "Domain setup assistance",
      "Contact & WhatsApp integration",
    ],
  },

  {
    id: "business-3",
    number: "04",
    category: "Website",
    name: "3-Page Business Website",
    label: "For small businesses",
    price: "₹10,000–₹15,000",
    period: "Project range",
    description:
      "A professional three-page website covering the essential information customers need.",
    icon: Building2,
    features: [
      "Home, About & Services/Contact",
      "Responsive professional design",
      "WhatsApp & contact integration",
    ],
  },

  {
    id: "business-5-7",
    number: "05",
    category: "Website",
    name: "5–7 Page Business Website",
    label: "For growing companies",
    price: "₹15,000–₹25,000",
    period: "Project range",
    description:
      "A complete professional company website designed to showcase your business and services.",
    icon: Monitor,
    features: [
      "5–7 custom pages",
      "Professional responsive UI",
      "Contact, WhatsApp & social integration",
    ],
  },

  {
    id: "premium-business",
    number: "06",
    category: "Website",
    name: "Premium Business Website",
    label: "For established businesses",
    price: "₹20,000–₹30,000",
    period: "Project range",
    description:
      "A premium custom business website with advanced sections and modern interactions.",
    icon: Layers3,
    features: [
      "Custom UI & advanced sections",
      "Premium animations",
      "SEO & performance optimization",
    ],
  },

  {
    id: "restaurant",
    number: "07",
    category: "Website",
    name: "Restaurant Website",
    label: "For restaurants & food businesses",
    price: "₹12,000–₹20,000",
    period: "Project range",
    description:
      "A visually engaging website to showcase your restaurant, menu, location and contact details.",
    icon: Utensils,
    features: [
      "Menu & food gallery",
      "WhatsApp & contact integration",
      "Google Maps location integration",
    ],
  },

  {
    id: "portfolio",
    number: "08",
    category: "Website",
    name: "Portfolio Website",
    label: "For professionals & creators",
    price: "₹8,000–₹15,000",
    period: "Project range",
    description:
      "A professional portfolio website to showcase your skills, projects and personal brand.",
    icon: UserRound,
    features: [
      "Projects & skills showcase",
      "Modern responsive design",
      "Contact & social media integration",
    ],
  },

  {
    id: "login-user",
    number: "09",
    category: "Web Application",
    name: "Login / User Website",
    label: "For platforms with user accounts",
    price: "₹20,000–₹35,000+",
    period: "Starting range",
    description:
      "A web platform with authentication, registration and user dashboard functionality.",
    icon: LockKeyhole,
    features: [
      "Login & registration",
      "User dashboard",
      "Database & authentication",
    ],
  },

  {
    id: "ecommerce",
    number: "10",
    category: "E-Commerce",
    name: "E-Commerce Website",
    label: "For online stores",
    price: "₹30,000–₹50,000+",
    period: "Starting range",
    description:
      "A complete online store with products, shopping cart and checkout functionality.",
    icon: ShoppingCart,
    features: [
      "Products & shopping cart",
      "Checkout & payment integration",
      "User accounts & orders",
    ],
  },

  {
    id: "ecommerce-admin",
    number: "11",
    category: "E-Commerce",
    name: "E-Commerce + Admin Panel",
    label: "For complete online businesses",
    price: "₹40,000–₹70,000+",
    period: "Starting range",
    description:
      "A complete e-commerce platform with an admin system for managing the online business.",
    icon: Store,
    features: [
      "Complete e-commerce website",
      "Admin product & order management",
      "User & inventory management",
    ],
  },

  {
    id: "custom-app",
    number: "12",
    category: "Web Application",
    name: "Custom Web Application",
    label: "For advanced business requirements",
    price: "₹40,000–₹1,00,000+",
    period: "Starting range",
    description:
      "A custom-built application designed around your exact business workflow and requirements.",
    icon: Code2,
    features: [
      "React / Django development",
      "Database & API integration",
      "Custom dashboard & authentication",
    ],
  },

  {
    id: "digital-marketing",
    number: "13",
    category: "Digital Marketing",
    name: "Digital Marketing",
    label: "For businesses looking to grow online",
    price: "₹8,000–₹25,000+",
    period: "Monthly / project based",
    description:
      "Digital marketing solutions focused on improving your online visibility, audience reach and business growth.",
    icon: Megaphone,
    features: [
      "Social media management",
      "Content & campaign strategy",
      "Performance & growth reporting",
    ],
  },

  {
    id: "seo",
    number: "14",
    category: "Digital Marketing",
    name: "SEO Services",
    label: "For better search visibility",
    price: "₹5,000–₹20,000+",
    period: "Monthly / project based",
    description:
      "Search engine optimization services designed to improve website visibility and organic search performance.",
    icon: Search,
    features: [
      "On-page SEO optimization",
      "Keyword & content strategy",
      "SEO performance monitoring",
    ],
  },

  {
    id: "mobile-app",
    number: "15",
    category: "Mobile Application",
    name: "Mobile App Development",
    label: "For Android & iOS applications",
    price: "₹50,000–₹2,00,000+",
    period: "Starting range",
    description:
      "Custom mobile applications designed according to your business requirements, features and platform needs.",
    icon: Smartphone,
    features: [
      "Android / iOS application",
      "API & backend integration",
      "Authentication & core app features",
    ],
  },
];

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  "All",
  "Website",
  "Web Application",
  "E-Commerce",
  "Digital Marketing",
  "Mobile Application",
];

/* =========================================================
   CARD ANIMATION
========================================================= */

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.96,
  },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      delay: index * 0.05,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* =========================================================
   PRICING COMPONENT
========================================================= */

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPlans =
    activeCategory === "All"
      ? pricingPlans
      : pricingPlans.filter(
          (plan) => plan.category === activeCategory
        );

  return (
    <section
      id="pricing"
      className="relative min-h-screen overflow-hidden bg-[#F8FAFC] font-['Roboto'] text-[#071A2B]"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(#071A2B 1px, transparent 1px), linear-gradient(90deg, #071A2B 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 90,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-[320px] top-[80px] h-[760px] w-[760px] rounded-full border border-slate-200"
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
          className="absolute -right-[200px] top-[220px] h-[520px] w-[520px] rounded-full border border-slate-200"
        />

        <div className="absolute -left-[300px] bottom-[-250px] h-[650px] w-[650px] rounded-full border border-slate-200" />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.025, 0.055, 0.025],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[8%] top-[18%] h-[350px] w-[350px] rounded-full bg-[#1769C2] blur-[130px]"
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

      <div className="relative mx-auto max-w-[1680px] px-6 pb-12 pt-32 sm:pt-36 lg:px-12 lg:pb-16 lg:pt-44">
        <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
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
                built around you.
              </span>
            </h1>
          </motion.div>

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
              Choose a service based on your current business
              requirements. From websites and applications to
              digital marketing, SEO and mobile development,
              every project is tailored to your needs.
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
          className="mt-14 h-px origin-left bg-slate-200"
        />
      </div>

      {/* =====================================================
          CATEGORY FILTER
      ===================================================== */}

      <div className="relative mx-auto max-w-[1680px] px-6 pb-10 lg:px-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2.5 text-[10px] font-semibold transition-all duration-300 ${
                  active
                    ? "border-[#071A2B] bg-[#071A2B] text-white shadow-lg"
                    : "border-slate-200 bg-white text-slate-500 hover:border-[#071A2B] hover:text-[#071A2B]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          PRICING CARDS
      ===================================================== */}

      <div className="relative mx-auto max-w-[1680px] px-6 pb-28 lg:px-12">
        <motion.div
          layout
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredPlans.map((plan, index) => {
              const Icon = plan.icon;

              return (
                <motion.article
                  layout
                  key={plan.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                    y: 20,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative"
                >
                  {/* Outer glow */}

                  <div
                    className={`absolute -inset-[1px] rounded-[30px] opacity-0 blur-xl transition-all duration-700 group-hover:opacity-100 ${
                      plan.popular
                        ? "bg-[#1769C2]/25"
                        : "bg-slate-400/20"
                    }`}
                  />

                  {/* Card */}

                  <div
                    className={`relative flex h-full min-h-[475px] flex-col overflow-hidden rounded-[30px] border ${
                      plan.popular
                        ? "border-[#071A2B] bg-[#071A2B] text-white shadow-[0_30px_90px_rgba(7,26,43,0.18)]"
                        : "border-slate-200 bg-white text-[#071A2B] shadow-[0_20px_60px_rgba(7,26,43,0.045)]"
                    }`}
                  >
                    {/* Top line */}

                    <motion.div
                      initial={{
                        scaleX: 0,
                      }}
                      whileHover={{
                        scaleX: 1,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      className={`absolute left-0 right-0 top-0 h-[2px] origin-left ${
                        plan.popular
                          ? "bg-[#63A9FF]"
                          : "bg-[#071A2B]"
                      }`}
                    />

                    {/* Number */}

                    <div
                      className={`pointer-events-none absolute -right-3 -top-6 text-[130px] font-bold leading-none tracking-[-0.1em] transition-transform duration-700 group-hover:-translate-x-3 ${
                        plan.popular
                          ? "text-white/[0.035]"
                          : "text-[#071A2B]/[0.025]"
                      }`}
                    >
                      {plan.number}
                    </div>

                    {/* Glow */}

                    <div
                      className={`absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[90px] transition-opacity duration-700 ${
                        plan.popular
                          ? "bg-[#1769C2]/20 opacity-100"
                          : "bg-[#1769C2]/10 opacity-0 group-hover:opacity-100"
                      }`}
                    />

                    {/* Recommended */}

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
                        className="absolute right-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-white px-3.5 py-2 text-[8px] font-bold uppercase tracking-[0.2em] text-[#071A2B] shadow-xl"
                      >
                        <Sparkles size={11} />
                        Recommended
                      </motion.div>
                    )}

                    {/* Content */}

                    <div className="relative z-10 flex h-full flex-col p-7 sm:p-8">
                      {/* Icon */}

                      <motion.div
                        whileHover={{
                          rotate: 8,
                          scale: 1.08,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 14,
                        }}
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                          plan.popular
                            ? "bg-white/10 text-white"
                            : "bg-slate-100 text-[#071A2B] group-hover:bg-[#071A2B] group-hover:text-white"
                        }`}
                      >
                        <Icon
                          size={21}
                          strokeWidth={1.5}
                        />
                      </motion.div>

                      {/* Category */}

                      <div className="mt-6">
                        <p
                          className={`text-[8px] font-semibold uppercase tracking-[0.2em] ${
                            plan.popular
                              ? "text-white/35"
                              : "text-slate-400"
                          }`}
                        >
                          {plan.category}
                        </p>

                        <h2 className="mt-2 max-w-[280px] text-[25px] font-semibold leading-tight tracking-[-0.035em]">
                          {plan.name}
                        </h2>
                      </div>

                      {/* Price */}

                      <div className="mt-6">
                        <p
                          className={`text-[8px] uppercase tracking-[0.18em] ${
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
                            y: 10,
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
                          }}
                          className={`mt-2 text-[30px] font-semibold leading-tight tracking-[-0.045em] ${
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
                        className={`mt-4 min-h-[72px] text-[12px] leading-6 ${
                          plan.popular
                            ? "text-white/50"
                            : "text-slate-500"
                        }`}
                      >
                        {plan.description}
                      </p>

                      {/* Three important features */}

                      <div
                        className={`mt-5 border-t pt-5 ${
                          plan.popular
                            ? "border-white/10"
                            : "border-slate-100"
                        }`}
                      >
                        <p
                          className={`mb-4 text-[8px] font-bold uppercase tracking-[0.2em] ${
                            plan.popular
                              ? "text-white/35"
                              : "text-slate-400"
                          }`}
                        >
                          Key inclusions
                        </p>

                        <div className="space-y-3">
                          {plan.features.map(
                            (feature, featureIndex) => (
                              <motion.div
                                key={feature}
                                initial={{
                                  opacity: 0,
                                  x: -8,
                                }}
                                whileInView={{
                                  opacity: 1,
                                  x: 0,
                                }}
                                viewport={{
                                  once: true,
                                }}
                                transition={{
                                  duration: 0.3,
                                  delay:
                                    featureIndex * 0.08,
                                }}
                                className="flex items-center gap-3"
                              >
                                <span
                                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                                    plan.popular
                                      ? "bg-white/10 text-white"
                                      : "bg-slate-100 text-[#071A2B]"
                                  }`}
                                >
                                  <Check
                                    size={10}
                                    strokeWidth={2.7}
                                  />
                                </span>

                                <span
                                  className={`text-[11px] leading-5 ${
                                    plan.popular
                                      ? "text-white/65"
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

                      {/* CTA */}

                      <div className="mt-auto pt-6">
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedPlan(plan)
                          }
                          className={`group/cta flex w-full items-center justify-between rounded-full px-5 py-3.5 text-[11px] font-semibold transition-all duration-300 ${
                            plan.popular
                              ? "bg-white text-[#071A2B] hover:bg-[#E8F2FF]"
                              : "bg-[#071A2B] text-white hover:bg-[#1769C2]"
                          }`}
                        >
                          <span>
                            Discuss This Plan
                          </span>

                          <span
                            className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-500 group-hover/cta:rotate-45 ${
                              plan.popular
                                ? "bg-[#071A2B] text-white"
                                : "bg-white text-[#071A2B]"
                            }`}
                          >
                            <ArrowUpRight size={14} />
                          </span>
                        </button>
                      </div>

                      {/* Bottom */}

                      <div className="mt-5">
                        <div
                          className={`flex items-center gap-2 text-[8px] uppercase tracking-[0.16em] ${
                            plan.popular
                              ? "text-white/25"
                              : "text-slate-300"
                          }`}
                        >
                          <ShieldCheck size={12} />
                          Transparent pricing
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* =====================================================
          CUSTOM PROJECT CTA
      ===================================================== */}

      <section className="relative overflow-hidden border-y border-slate-200 bg-[#071A2B] text-white">
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

          <div className="absolute bottom-[-200px] left-[20%] h-[400px] w-[400px] rounded-full bg-[#1769C2]/10 blur-[120px]" />
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
                Custom Requirement
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
            className="group flex shrink-0 items-center justify-between gap-6 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
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
            integrations, timeline, domain, hosting, third-party
            services and technical requirements.
          </p>
        </div>
      </div>

      {/* =====================================================
          PLAN MODAL
      ===================================================== */}

      <AnimatePresence>
        {selectedPlan && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
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
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 20,
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
                Selected service
              </p>

              <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#1769C2]">
                {selectedPlan.category}
              </p>

              <h2 className="mt-3 max-w-md text-3xl font-semibold tracking-[-0.04em]">
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

                <p className="mt-2 text-3xl font-semibold tracking-[-0.04em]">
                  {selectedPlan.price}
                </p>
              </div>

              {/* Three important inclusions */}

              <div className="mt-6 rounded-[22px] border border-slate-100 p-6">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Key inclusions
                  </p>

                  <span className="text-[9px] text-slate-300">
                    {selectedPlan.features.length} key points
                  </span>
                </div>

                <div className="space-y-4">
                  {selectedPlan.features.map(
                    (feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-[12px] text-slate-600"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[#071A2B]">
                          <Check
                            size={12}
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
                  `${selectedPlan.name} Enquiry`
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
      </AnimatePresence>
    </section>
  );
};

export default Pricing;