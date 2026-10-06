import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Code2,
  Palette,
  Search,
  Megaphone,
  Layers3,
  X,
} from "lucide-react";

const categories = [
  "All",
  "Web Development",
  "UI / UX",
  "Technology",
  "Digital Marketing",
];

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

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-white text-[#061525]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-48 top-0 h-[650px] w-[650px] rounded-full border border-slate-100" />
        <div className="absolute -right-16 top-40 h-[430px] w-[430px] rounded-full border border-slate-100" />

        <div className="absolute -bottom-60 -left-48 h-[600px] w-[600px] rounded-full bg-slate-50" />
      </div>

      {/* Hero */}
      <div className="relative mx-auto max-w-[1680px] px-6 pb-20 pt-32 lg:px-12 lg:pt-40">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.65fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              <span className="h-px w-10 bg-[#061525]" />
              CodeGenZ Journal
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.03] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Ideas worth
              <br />
              <span className="text-slate-400">sharing.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              Insights, ideas, and practical knowledge about technology,
              design, web development, and digital growth.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="relative mx-auto max-w-[1680px] px-6 pb-16 lg:px-12">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative overflow-hidden rounded-[32px] bg-[#061525] text-white"
        >
          <div className="pointer-events-none absolute -right-32 -top-40 h-[600px] w-[600px] rounded-full border border-white/10" />
          <div className="pointer-events-none absolute right-20 top-10 h-[350px] w-[350px] rounded-full border border-white/10" />

          <div className="relative grid min-h-[460px] items-end gap-12 p-8 sm:p-12 lg:grid-cols-[1fr_0.55fr] lg:p-16">
            <div>
              <div className="mb-8 flex items-center gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-300">
                  Featured
                </span>

                <span className="text-xs text-slate-500">
                  {blogPosts[0].category}
                </span>
              </div>

              <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {blogPosts[0].title}
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">
                {blogPosts[0].excerpt}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-xs text-slate-500">
                <span className="flex items-center gap-2">
                  <CalendarDays size={14} />
                  {blogPosts[0].date}
                </span>

                <span className="flex items-center gap-2">
                  <Clock3 size={14} />
                  {blogPosts[0].readTime}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedPost(blogPosts[0])}
                className="group/button mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#061525]"
              >
                Read Article

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#061525] text-white transition-transform duration-300 group-hover/button:rotate-45">
                  <ArrowUpRight size={14} />
                </span>
              </button>
            </div>

            <div className="hidden h-full min-h-[300px] items-center justify-center lg:flex">
              <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-white/10">
                <div className="absolute inset-8 rounded-full border border-white/10" />
                <div className="absolute inset-16 rounded-full border border-white/10" />

                <Code2
                  size={70}
                  strokeWidth={1}
                  className="text-white/80"
                />
              </div>
            </div>
          </div>
        </motion.article>
      </div>

      {/* Categories */}
      <div className="relative mx-auto max-w-[1680px] px-6 pb-12 lg:px-12">
        <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-6">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#061525] text-white"
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-[#061525]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="relative mx-auto max-w-[1680px] px-6 pb-28 lg:px-12">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Latest Articles
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Explore the journal.
          </h2>
        </div>

        <motion.div layout className="grid gap-5 lg:grid-cols-3">
          {filteredPosts.map((post, index) => {
            const Icon = post.icon;

            return (
              <motion.article
                layout
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white transition-all duration-300 hover:border-[#061525] hover:shadow-xl hover:shadow-slate-200/40"
              >
                {/* Visual */}
                <div className="relative flex h-52 items-center justify-center overflow-hidden bg-slate-50">
                  <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full border border-slate-200 transition-transform duration-700 group-hover:scale-125" />
                  <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full border border-slate-200" />

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#061525] text-white transition-transform duration-500 group-hover:scale-110">
                    <Icon size={25} strokeWidth={1.5} />
                  </div>

                  <span className="absolute left-6 top-6 text-xs font-bold tracking-[0.2em] text-slate-300">
                    {post.number}
                  </span>
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                      {post.category}
                    </span>

                    <span className="text-[10px] text-slate-400">
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-tight">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {post.excerpt}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="flex items-center gap-2 text-xs text-slate-400">
                      <CalendarDays size={13} />
                      {post.date}
                    </span>

                    <button
                      type="button"
                      onClick={() => setSelectedPost(post)}
                      className="group/button flex items-center gap-2 text-xs font-semibold"
                    >
                      Read More

                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover/button:bg-[#061525] group-hover/button:text-white group-hover/button:rotate-45">
                        <ArrowUpRight size={14} />
                      </span>
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {filteredPosts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-slate-500">
              No articles available in this category.
            </p>
          </div>
        )}
      </div>

      {/* Newsletter CTA */}
      <div className="relative overflow-hidden border-y border-slate-100 bg-slate-50">
        <div className="pointer-events-none absolute -right-40 -top-48 h-[500px] w-[500px] rounded-full border border-slate-200" />

        <div className="relative mx-auto flex max-w-[1680px] flex-col justify-between gap-8 px-6 py-20 lg:flex-row lg:items-center lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Stay Connected
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              More ideas. More insights. More possibilities.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              Follow CodeGenZ Solutions for updates about technology, design,
              development, and digital solutions.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#061525] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Get In Touch

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#061525] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={14} />
            </span>
          </a>
        </div>
      </div>

      {/* Article Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#061525]/80 p-6 backdrop-blur-md"
          onClick={() => setSelectedPost(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[30px] bg-white p-8 sm:p-10"
          >
            <button
              type="button"
              onClick={() => setSelectedPost(null)}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-[#061525] hover:text-white"
              aria-label="Close article"
            >
              <X size={18} />
            </button>

            <p className="pr-12 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {selectedPost.category}
            </p>

            <h2 className="mt-4 pr-12 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {selectedPost.title}
            </h2>

            <div className="mt-5 flex flex-wrap gap-5 text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <CalendarDays size={14} />
                {selectedPost.date}
              </span>

              <span className="flex items-center gap-2">
                <Clock3 size={14} />
                {selectedPost.readTime}
              </span>
            </div>

            <div className="my-8 h-px bg-slate-100" />

            <p className="text-base leading-8 text-slate-600">
              {selectedPost.excerpt}
            </p>

            <div className="mt-7 space-y-5 text-sm leading-7 text-slate-500">
              <p>
                Digital technology continues to change the way businesses
                connect with customers, build products, and communicate their
                value.
              </p>

              <p>
                A thoughtful approach to design and development helps create
                digital experiences that are useful, accessible, scalable, and
                aligned with business goals.
              </p>

              <p>
                At CodeGenZ Solutions, we focus on combining technology,
                design, and practical business requirements to create digital
                solutions that can grow with the organization.
              </p>
            </div>

            <a
              href="#contact"
              onClick={() => setSelectedPost(null)}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#061525] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Discuss Your Project
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Blog;