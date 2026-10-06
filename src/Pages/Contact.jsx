import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  CheckCircle2,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const contactDetails = [
    {
      icon: Mail,
      title: "Email Us",
      value: "info@codegenzsolutions.com",
      href: "mailto:info@codegenzsolutions.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 93847 12673",
      href: "tel:+919384712673",
    },
    {
      icon: MapPin,
      title: "Our Location",
      value: "Tamil Nadu, India",
      href: "#",
    },
    {
      icon: Clock3,
      title: "Working Hours",
      value: "Mon – Sat · 9:00 AM – 6:00 PM",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white text-[#061525]"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-slate-200" />
        <div className="absolute -right-24 top-36 h-[350px] w-[350px] rounded-full border border-slate-100" />

        <div className="absolute left-[-120px] bottom-[-150px] h-[400px] w-[400px] rounded-full bg-slate-50" />
      </div>

      {/* Hero */}
      <div className="relative mx-auto max-w-[1680px] px-6 pb-20 pt-36 lg:px-12">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.7fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              <span className="h-px w-10 bg-[#061525]" />
              Get In Touch
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Let&apos;s build
              <br />
              <span className="text-slate-400">something great.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-xl lg:pb-2"
          >
            <p className="text-lg leading-8 text-slate-600">
              Have a project in mind? Tell us what you&apos;re looking to
              build, improve, or grow. Our team will get back to you with the
              right direction.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Contact Area */}
      <div className="relative mx-auto max-w-[1680px] px-6 pb-28 lg:px-12">
        <div className="grid overflow-hidden rounded-[32px] bg-[#061525] lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden p-8 text-white sm:p-12 lg:p-14 xl:p-16"
          >
            {/* Background rings */}
            <div className="pointer-events-none absolute -right-36 -top-36 h-[500px] w-[500px] rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-[330px] w-[330px] rounded-full border border-white/10" />

            <div className="relative">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Contact Information
              </p>

              <h2 className="max-w-md text-3xl font-semibold leading-tight sm:text-4xl">
                Let&apos;s start a conversation.
              </h2>

              <p className="mt-5 max-w-md leading-7 text-slate-400">
                Whether you need a website, web application, UI/UX design,
                digital marketing, or a complete digital solution, we&apos;re
                ready to help.
              </p>

              <div className="mt-12 space-y-7">
                {contactDetails.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      key={item.title}
                      href={item.href}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.15 + index * 0.08,
                      }}
                      className="group flex items-start gap-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors duration-300 group-hover:bg-white group-hover:text-[#061525]">
                        <Icon size={18} strokeWidth={1.8} />
                      </div>

                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
                          {item.title}
                        </p>

                        <p className="mt-1 text-sm text-slate-200 transition-colors group-hover:text-white">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social */}
              <div className="mt-14 border-t border-white/10 pt-7">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Follow Us
                </p>

                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, label: "LinkedIn" },
                    { icon: Instagram, label: "Instagram" },
                    { icon: Facebook, label: "Facebook" },
                    { icon: Twitter, label: "Twitter" },
                  ].map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.label}
                        href="#"
                        aria-label={social.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 hover:bg-white hover:text-[#061525]"
                      >
                        <Icon size={17} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-slate-50 p-8 sm:p-12 lg:p-14 xl:p-16"
          >
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Project Enquiry
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Tell us about your project.
              </h2>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[420px] flex-col items-center justify-center text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#061525] text-white">
                  <CheckCircle2 size={30} strokeWidth={1.6} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  Message received.
                </h3>

                <p className="mt-3 max-w-md leading-7 text-slate-500">
                  Thank you for contacting CodeGenZ Solutions. Our team will
                  get back to you shortly.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 text-sm font-semibold underline underline-offset-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid gap-7 sm:grid-cols-2">
                  {/* Name */}
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-slate-500"
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
                      className="w-full border-b border-slate-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-[#061525]"
                    />
                  </div>

                  {/* Email */}
                  <div className="group">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-slate-500"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full border-b border-slate-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-[#061525]"
                    />
                  </div>
                </div>

                <div className="grid gap-7 sm:grid-cols-2">
                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-slate-500"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border-b border-slate-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-[#061525]"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-slate-500"
                    >
                      Service
                    </label>

                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full border-b border-slate-300 bg-transparent px-0 py-3 text-sm text-slate-600 outline-none transition-colors focus:border-[#061525]"
                    >
                      <option value="">Select a service</option>
                      <option value="Website Development">
                        Website Development
                      </option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Web Application">
                        Web Application
                      </option>
                      <option value="SEO">SEO Optimization</option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-slate-500"
                  >
                    Project Details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full resize-none border-b border-slate-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-[#061525]"
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col justify-between gap-6 pt-3 sm:flex-row sm:items-center">
                  <p className="max-w-sm text-xs leading-5 text-slate-400">
                    By submitting this form, you agree to let CodeGenZ
                    Solutions contact you regarding your enquiry.
                  </p>

                  <button
                    type="submit"
                    className="group flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#061525] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800"
                  >
                    Send Enquiry
                    <Send
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative border-t border-slate-100">
        <div className="mx-auto flex max-w-[1680px] flex-col justify-between gap-8 px-6 py-16 lg:flex-row lg:items-center lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              CodeGenZ Solutions
            </p>

            <h3 className="mt-2 text-2xl font-semibold">
              Your idea could be the next thing we build.
            </h3>
          </div>

          <a
            href="mailto:info@codegenzsolutions.com"
            className="group inline-flex items-center gap-3 text-sm font-semibold"
          >
            info@codegenzsolutions.com
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#061525] text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={17} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;