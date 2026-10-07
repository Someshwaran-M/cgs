import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  ArrowUp,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  // ============================================
  // SCROLL TO TOP
  // ============================================
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ============================================
  // WHATSAPP
  // ============================================
  const whatsappMessage = encodeURIComponent(
    "Hello CodeGenZ Solutions, I would like to discuss a project with you."
  );

  const whatsappUrl = `https://wa.me/919384712673?text=${whatsappMessage}`;

  // ============================================
  // COMPANY LINKS
  // ============================================
  const companyLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Our Process",
      href: "/our-process",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  // ============================================
  // EXPLORE LINKS
  // ============================================
  const exploreLinks = [
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "Internship",
      href: "/internship",
    },
    {
      name: "Careers",
      href: "/careers",
    },
    {
      name: "Testimonials",
      href: "/testimonials",
    },
    {
      name: "FAQ",
      href: "/faq",
    },
    {
      name: "Blog",
      href: "/blog",
    },
  ];

  // ============================================
  // SOCIAL LINKS
  // ============================================
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/codegenzsolutions/",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/codegenzsolutions?stkn=MXI2dW9qY2h0N3hmdQ==",
      icon: Instagram,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/19gZhW65uq/",
      icon: Facebook,
    },
  ];

  // ============================================
  // CONTACT DETAILS
  // ============================================
  const contactDetails = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "info@codegenzsolutions.com",
      href: "mailto:info@codegenzsolutions.com",
    },
    {
      icon: Phone,
      label: "PHONE",
      value: "+91 93847 12673",
      href: "tel:+919384712673",
    },
    {
      icon: MapPin,
      label: "LOCATION",
      value: "Tamil Nadu, India",
      href: "https://www.google.com/maps/search/?api=1&query=Tamil+Nadu%2C+India",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#061525] font-['Roboto'] text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/[0.025] blur-3xl" />

        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cyan-400/[0.02] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}
      <div className="relative mx-auto max-w-[1600px] px-6 pb-16 pt-16 sm:px-8 md:px-12 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.45fr_1fr_1fr_1.2fr] lg:gap-10 xl:gap-16">
          {/* =====================================================
              COMPANY INFORMATION
          ===================================================== */}
          <div className="flex flex-col">
            {/* LOGO */}
            <Link
              to="/"
              onClick={scrollToTop}
              className="group mb-7 inline-flex w-fit"
              aria-label="CodeGenZ Solutions Home"
            >
              <img
                src="/logo.png"
                alt="CodeGenZ Solutions"
                className="h-auto w-[105px] object-contain opacity-90 transition duration-300 group-hover:opacity-100"
              />
            </Link>

            {/* DESCRIPTION */}
            <p className="max-w-[360px] text-[14px] font-normal leading-7 tracking-[0.02em] text-slate-400 sm:text-[15px]">
              Building modern digital solutions that transform ideas into
              meaningful technology experiences.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-700/80 bg-white/[0.015] text-slate-500 transition-all duration-300 hover:border-[#1683ff]/70 hover:bg-[#1683ff]/10 hover:text-[#1683ff]"
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.6}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* =====================================================
              COMPANY LINKS
          ===================================================== */}
          <div>
            <h3 className="mb-7 text-[11px] font-bold uppercase tracking-[0.32em] text-[#1683ff]">
              Company
            </h3>

            <nav className="flex flex-col gap-4">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={scrollToTop}
                  className="group flex w-fit items-center gap-1 text-[14px] font-medium tracking-[0.04em] text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span>{link.name}</span>

                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.7}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* =====================================================
              EXPLORE
          ===================================================== */}
          <div>
            <h3 className="mb-7 text-[11px] font-bold uppercase tracking-[0.32em] text-[#1683ff]">
              Explore
            </h3>

            <nav className="flex flex-col gap-4">
              {exploreLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={scrollToTop}
                  className="group flex w-fit items-center gap-1 text-[14px] font-medium tracking-[0.04em] text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span>{link.name}</span>

                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.7}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* =====================================================
              GET IN TOUCH
          ===================================================== */}
          <div>
            <h3 className="mb-7 text-[11px] font-bold uppercase tracking-[0.32em] text-[#1683ff]">
              Get In Touch
            </h3>

            <div className="flex flex-col gap-7">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.label === "LOCATION" ? "_blank" : undefined
                    }
                    rel={
                      item.label === "LOCATION"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-start gap-4"
                  >
                    {/* ICON */}
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center text-[#1683ff]">
                      <Icon
                        size={19}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* TEXT */}
                    <div className="min-w-0">
                      <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.24em] text-slate-600">
                        {item.label}
                      </p>

                      <p className="break-all text-[13px] font-medium tracking-[0.02em] text-slate-400 transition-colors duration-300 group-hover:text-white sm:text-[14px]">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM BAR
      ========================================================= */}
      <div className="relative border-t border-slate-800/70">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-6 py-5 sm:px-8 md:flex-row md:items-center md:justify-between md:px-12 lg:px-14 xl:px-16">
          {/* COPYRIGHT */}
          <p className="text-[11px] font-medium tracking-[0.04em] text-slate-600">
            © 2026 CodeGenZ Solutions. All rights reserved.
          </p>

          {/* LEGAL LINKS */}
          <div className="flex items-center gap-4 sm:gap-5">
            <Link
              to="/privacy-policy"
              onClick={scrollToTop}
              className="text-[11px] font-medium tracking-[0.04em] text-slate-600 transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </Link>

            <span className="h-3 w-px bg-slate-800" />

            <Link
              to="/terms-and-conditions"
              onClick={scrollToTop}
              className="text-[11px] font-medium tracking-[0.04em] text-slate-600 transition-colors duration-300 hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>


      
    </footer>
  );
};

export default Footer;