import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Code2,
  Palette,
  Search,
  Megaphone,
  Layers3,
  X,
  Sparkles,
} from "lucide-react";

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  "All",
  "Web Development",
  "UI / UX",
  "Technology",
  "Digital Marketing",
];

/* =========================================================
   BLOG DATA
========================================================= */

const blogPosts = [
  {
    id: 1,
    category: "Web Development",
    title: "Why Every Business Needs a Professional Website",
    excerpt:
      "A modern website is more than an online presence. It can become a powerful platform for credibility, customer engagement, and business growth.",
    date: "Sep 18, 2026",
    readTime: "5 min read",
    icon: Code2,
    number: "01",
  },
  {
    id: 2,
    category: "UI / UX",
    title: "What Makes a Website Feel Premium?",
    excerpt:
      "Great digital experiences come from thoughtful spacing, typography, visual hierarchy, interaction, and consistency.",
    date: "Sep 12, 2026",
    readTime: "6 min read",
    icon: Palette,
    number: "02",
  },
  {
    id: 3,
    category: "Technology",
    title: "React and Modern Web Application Development",
    excerpt:
      "Modern frontend development allows businesses to build fast, interactive, scalable, and maintainable digital products.",
    date: "Sep 05, 2026",
    readTime: "7 min read",
    icon: Layers3,
    number: "03",
  },
  {
    id: 4,
    category: "Digital Marketing",
    title: "Why SEO Matters for Growing Businesses",
    excerpt:
      "Search visibility can help businesses reach people who are already looking for their products and services.",
    date: "Aug 28, 2026",
    readTime: "5 min read",
    icon: Search,
    number: "04",
  },
  {
    id: 5,
    category: "Technology",
    title: "From Idea to Digital Product",
    excerpt:
      "Turning an idea into a working product requires planning, design, development, testing, deployment, and continuous improvement.",
    date: "Aug 20, 2026",
    readTime: "6 min read",
    icon: Code2,
    number: "05",
  },
  {
    id: 6,
    category: "Digital Marketing",
    title: "Building a Strong Digital Brand",
    excerpt:
      "A consistent digital identity helps businesses communicate clearly across websites, social media, marketing, and customer touchpoints.",
    date: "Aug 14, 2026",
    readTime: "4 min read",
    icon: Megaphone,
    number: "06",
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   BLOG COMPONENT
========================================================= */

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);

  /* =========================================================
     FILTER
  ========================================================= */

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") {
      return blogPosts;
    }

    return blogPosts.filter(
      (post) => post.category === activeCategory
    );
  }, [activeCategory]);

  const featuredPost = blogPosts[0];

  /* =========================================================
     MODAL SCROLL LOCK + ESCAPE
  ========================================================= */

  useEffect(() => {
    if (!selectedPost) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedPost(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedPost]);

  return (
    <>
      <main
        id="blog"
        className="relative overflow-hidden bg-[#f7f8fa] text-[#061525]"
      >
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#061525] text-white">
          {/* Decorative circles */}

          <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/[0.06]" />

          <div className="pointer-events-none absolute -right-12 top-24 h-[280px] w-[280px] rounded-full border border-white/[0.05]" />

          <div className="pointer-events-none absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-400/[0.04] blur-3xl" />

          <div className="relative mx-auto max-w-[1500px] px-6 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-24 lg:pt-40">
            {/* Top label */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-12 flex items-center justify-between border-b border-white/10 pb-5"
            >
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60 sm:text-xs">
                  CodeGenZ Journal
                </span>
              </div>

              <span className="hidden text-[10px] uppercase tracking-[0.2em] text-white/30 sm:block">
                Technology · Design · Ideas
              </span>
            </motion.div>

            {/* Hero content */}

            <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.45fr]">
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
                  duration: 0.75,
                  delay: 0.1,
                }}
              >
                <div className="mb-5 flex items-center gap-2">
                  <Sparkles
                    size={15}
                    className="text-cyan-300"
                  />

                  <span className="text-xs font-medium text-cyan-200/70">
                    Insights for the digital world
                  </span>
                </div>

                <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                  Ideas that help
                  <br />

                  <span className="text-white/30">
                    businesses move forward.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                  Explore practical insights about web development,
                  technology, UI/UX, branding and digital growth.
                </p>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: 25,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.25,
                }}
                className="lg:justify-self-end"
              >
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-7 lg:max-w-xs">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                    The Journal
                  </p>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    Thoughtful perspectives on building better
                    digital experiences.
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-xs text-white/40">
                      {blogPosts.length} Articles
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#061525]">
                      <ArrowDownIcon />
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FEATURED ARTICLE
        ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-[1500px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="mb-8 flex items-center justify-between"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Featured Article
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Editor's choice
                </h2>
              </div>

              <span className="hidden text-xs text-slate-400 sm:block">
                01 / 06
              </span>
            </motion.div>

            <motion.article
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
              }}
              className="group relative overflow-hidden rounded-3xl bg-[#061525]"
            >
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                {/* Content */}

                <div className="relative flex flex-col justify-between p-7 sm:p-10 lg:p-14">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-cyan-200">
                        Featured
                      </span>

                      <span className="text-xs text-white/35">
                        {featuredPost.category}
                      </span>
                    </div>

                    <h3 className="mt-7 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
                      {featuredPost.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="mt-10 flex flex-wrap items-center gap-5">
                    <div className="flex items-center gap-2 text-xs text-white/35">
                      <CalendarDays size={14} />
                      {featuredPost.date}
                    </div>

                    <div className="flex items-center gap-2 text-xs text-white/35">
                      <Clock3 size={14} />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>

                {/* Visual */}

                <button
                  type="button"
                  onClick={() =>
                    setSelectedPost(featuredPost)
                  }
                  className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[#0b263e] lg:min-h-[430px]"
                >
                  <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-110" />

                  <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border border-white/[0.07]" />

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 5,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="relative flex h-28 w-28 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.05] text-cyan-200 backdrop-blur-sm sm:h-32 sm:w-32"
                  >
                    <Code2
                      size={48}
                      strokeWidth={1.3}
                    />
                  </motion.div>

                  <span className="absolute right-7 top-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25">
                    Story 01
                  </span>

                  <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-xs font-medium text-white/60">
                      Read article
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#061525] transition-transform duration-500 group-hover:rotate-45">
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </button>
              </div>
            </motion.article>
          </div>
        </section>

        {/* =====================================================
            CATEGORY FILTER
        ====================================================== */}

        <section className="bg-[#f7f8fa]">
          <div className="mx-auto max-w-[1500px] px-6 pt-20 sm:px-8 lg:px-12 lg:pt-28">
            <div className="flex flex-col gap-7 border-b border-slate-200 pb-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Explore
                </p>

                <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Latest articles
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const active =
                    activeCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() =>
                        setActiveCategory(category)
                      }
                      className={`rounded-full border px-4 py-2.5 text-xs font-medium transition-all duration-300 ${
                        active
                          ? "border-[#061525] bg-[#061525] text-white"
                          : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-[#061525]"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            BLOG CARDS
        ====================================================== */}

        <section className="bg-[#f7f8fa]">
          <div className="mx-auto max-w-[1500px] px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
              >
                {filteredPosts.map((post, index) => {
                  const Icon = post.icon;

                  return (
                    <motion.article
                      key={post.id}
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.06,
                      }}
                      className="group"
                    >
                      <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_60px_rgba(6,21,37,0.08)]">
                        {/* Card visual */}

                        <button
                          type="button"
                          onClick={() =>
                            setSelectedPost(post)
                          }
                          className="relative h-56 overflow-hidden bg-[#edf2f5] text-left"
                        >
                          {/* Decorative shapes */}

                          <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full border border-[#061525]/10 transition-transform duration-700 group-hover:scale-125" />

                          <div className="absolute -bottom-16 -left-12 h-44 w-44 rounded-full border border-[#061525]/10" />

                          <div className="absolute left-6 top-6">
                            <span className="text-xs font-semibold tracking-[0.18em] text-slate-300">
                              {post.number}
                            </span>
                          </div>

                          {/* Icon */}

                          <motion.div
                            whileHover={{
                              scale: 1.08,
                              rotate: 4,
                            }}
                            transition={{
                              duration: 0.4,
                            }}
                            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#061525] text-white shadow-xl"
                          >
                            <Icon
                              size={28}
                              strokeWidth={1.4}
                            />
                          </motion.div>

                          {/* top category */}

                          <span className="absolute right-6 top-6 rounded-full bg-white/80 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-500 backdrop-blur-sm">
                            {post.category}
                          </span>
                        </button>

                        {/* Content */}

                        <div className="flex flex-1 flex-col p-6 sm:p-7">
                          <div className="flex items-center justify-between gap-3">
                            <span className="flex items-center gap-2 text-[10px] text-slate-400">
                              <CalendarDays size={13} />
                              {post.date}
                            </span>

                            <span className="text-[10px] text-slate-400">
                              {post.readTime}
                            </span>
                          </div>

                          <h3 className="mt-5 text-xl font-semibold leading-[1.25] tracking-[-0.02em] text-[#061525] sm:text-2xl">
                            {post.title}
                          </h3>

                          <p className="mt-4 text-sm leading-7 text-slate-500">
                            {post.excerpt}
                          </p>

                          <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                              Article
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                setSelectedPost(post)
                              }
                              className="group/read flex items-center gap-2 text-xs font-semibold text-[#061525]"
                            >
                              Read More

                              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover/read:bg-[#061525] group-hover/read:text-white group-hover/read:rotate-45">
                                <ArrowUpRight size={14} />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {filteredPosts.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-sm text-slate-500">
                  No articles available in this category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            JOURNAL INTRO
        ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-[1500px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="rounded-3xl bg-[#eaf9fd] p-8 sm:p-10 lg:p-14"
            >
              <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:items-center">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Our Perspective
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                    Technology should solve
                    <br className="hidden sm:block" />
                    real problems.
                  </h2>
                </div>

                <div>
                  <p className="max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
                    We believe great digital products come
                    from combining thoughtful design,
                    purposeful technology and a clear
                    understanding of the people using them.
                  </p>

                  <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-500">
                    Through the CodeGenZ Journal, we share
                    practical ideas and observations from the
                    world of digital products, development and
                    design.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="bg-[#061525] text-white">
          <div className="mx-auto max-w-[1500px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between"
            >
              <div>
                <p className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-200/60">
                  <span className="h-px w-7 bg-cyan-300" />
                  Have an idea?
                </p>

                <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl">
                  Let's build something
                  <span className="text-white/30">
                    {" "}
                    meaningful.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/40">
                  Have a website, application or digital product
                  in mind? Let's talk about how we can bring it
                  to life.
                </p>
              </div>

              <a
                href="/contact"
                className="group inline-flex w-fit items-center gap-4 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#061525] transition-all duration-300 hover:scale-105"
              >
                Start a Project

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#061525] text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={14} />
                </span>
              </a>
            </motion.div>

            <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.2em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
              <span>CodeGenZ Solutions</span>

              <span>
                Design · Develop · Deliver
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* =======================================================
          ARTICLE MODAL
      ======================================================== */}

      <AnimatePresence>
        {selectedPost && (
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
            onClick={() => setSelectedPost(null)}
            className="fixed inset-0 z-[9999] overflow-y-auto bg-[#061525]/80 p-4 backdrop-blur-lg sm:p-6"
          >
            <div className="flex min-h-full items-center justify-center py-5">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.35,
                }}
                onClick={(event) =>
                  event.stopPropagation()
                }
                className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
              >
                {/* Modal top */}

                <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5 sm:px-8">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                      CodeGenZ Journal
                    </span>

                    <span className="h-1 w-1 rounded-full bg-slate-300" />

                    <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                      {selectedPost.number}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedPost(null)
                    }
                    className="group flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 hover:bg-[#061525] hover:text-white"
                    aria-label="Close article"
                  >
                    <X
                      size={16}
                      className="transition-transform duration-300 group-hover:rotate-90"
                    />
                  </button>
                </div>

                {/* Modal hero */}

                <div className="bg-[#061525] px-6 py-10 text-white sm:px-10 sm:py-12">
                  <span className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-cyan-200">
                    {selectedPost.category}
                  </span>

                  <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.025em] sm:text-4xl">
                    {selectedPost.title}
                  </h2>

                  <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-white/40">
                    <span className="flex items-center gap-2">
                      <CalendarDays size={13} />
                      {selectedPost.date}
                    </span>

                    <span className="flex items-center gap-2">
                      <Clock3 size={13} />
                      {selectedPost.readTime}
                    </span>
                  </div>
                </div>

                {/* Modal content */}

                <div className="px-6 py-9 sm:px-10 sm:py-12">
                  <p className="text-base leading-8 text-slate-600">
                    {selectedPost.excerpt}
                  </p>

                  <div className="my-8 h-px bg-slate-100" />

                  <div className="space-y-6 text-sm leading-8 text-slate-500">
                    <p>
                      Digital technology continues to change
                      the way businesses connect with customers,
                      build products and communicate their
                      value.
                    </p>

                    <p>
                      A thoughtful approach to design and
                      development helps create digital
                      experiences that are useful, accessible,
                      scalable and aligned with business goals.
                    </p>

                    <div className="rounded-2xl bg-[#f5f8fa] p-6 sm:p-7">
                      <p className="text-base font-medium leading-7 text-[#061525]">
                        Better digital experiences come from
                        combining thoughtful design with
                        purposeful technology.
                      </p>
                    </div>

                    <p>
                      At CodeGenZ Solutions, we focus on
                      combining technology, design and practical
                      business requirements to create digital
                      solutions that can grow with the
                      organization.
                    </p>

                    <p>
                      Every project is an opportunity to create
                      something useful, memorable and built
                      around a clear purpose.
                    </p>
                  </div>

                  {/* Bottom */}

                  <div className="mt-10 flex flex-col gap-5 border-t border-slate-100 pt-7 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Published by
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#061525]">
                        CodeGenZ Solutions
                      </p>
                    </div>

                    <a
                      href="/contact"
                      onClick={() =>
                        setSelectedPost(null)
                      }
                      className="group inline-flex items-center gap-3 rounded-full bg-[#061525] px-5 py-3 text-xs font-semibold text-white"
                    >
                      Discuss Your Project

                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:rotate-45"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* =========================================================
   SMALL ICON
========================================================= */

const ArrowDownIcon = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
};

export default Blog;