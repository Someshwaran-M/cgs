import React from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";

const Footer = () => {
  const companyLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const exploreLinks = [
    { name: "Pricing", href: "#pricing" },
    { name: "Internship", href: "#internship" },
    { name: "Careers", href: "#careers" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Blog", href: "#blog" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
  ];

  return (
    <footer className="bg-[#061525] text-white">

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="mx-auto max-w-[1680px] px-8 py-20 xl:px-12">

        <div className="grid grid-cols-4 gap-16">

          {/* =================================================
              BRAND
          ================================================== */}

          <div className="col-span-1">

            <a
              href="#home"
              className="inline-flex items-center"
            >
              <img
                src="/logo.png"
                alt="CodeGenZ Solutions"
                className="h-[78px] w-auto object-contain"
              />
            </a>

            <p
              className="
                mt-6
                max-w-[300px]
                text-[13px]
                leading-7
                text-white/45
              "
            >
              Building modern digital solutions that transform
              ideas into meaningful technology experiences.
            </p>

            {/* SOCIAL */}

            <div className="mt-7 flex items-center gap-3">

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.10]
                      text-white/45
                      transition-all
                      duration-300
                      hover:border-[#5EA6FF]
                      hover:bg-[#1769C2]
                      hover:text-white
                    "
                  >
                    <Icon size={15} strokeWidth={1.5} />
                  </a>
                );
              })}

            </div>
          </div>

          {/* =================================================
              COMPANY
          ================================================== */}

          <div>

            <p
              className="
                mb-7
                text-[9px]
                font-semibold
                tracking-[0.3em]
                text-[#63A9FF]
              "
            >
              COMPANY
            </p>

            <div className="flex flex-col gap-4">

              {companyLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-2
                    text-[12px]
                    tracking-[0.08em]
                    text-white/50
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  {link.name}

                  <ArrowUpRight
                    size={13}
                    className="
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:opacity-100
                    "
                  />
                </a>
              ))}

            </div>
          </div>

          {/* =================================================
              EXPLORE
          ================================================== */}

          <div>

            <p
              className="
                mb-7
                text-[9px]
                font-semibold
                tracking-[0.3em]
                text-[#63A9FF]
              "
            >
              EXPLORE
            </p>

            <div className="flex flex-col gap-4">

              {exploreLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-2
                    text-[12px]
                    tracking-[0.08em]
                    text-white/50
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  {link.name}

                  <ArrowUpRight
                    size={13}
                    className="
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:opacity-100
                    "
                  />
                </a>
              ))}

            </div>
          </div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <div>

            <p
              className="
                mb-7
                text-[9px]
                font-semibold
                tracking-[0.3em]
                text-[#63A9FF]
              "
            >
              GET IN TOUCH
            </p>

            {/* EMAIL */}

            <a
              href="mailto:info@codegenzsolutions.com"
              className="
                group
                mb-5
                flex
                items-start
                gap-3
                text-white/55
                transition-colors
                duration-300
                hover:text-white
              "
            >
              <Mail
                size={16}
                strokeWidth={1.4}
                className="mt-1 shrink-0 text-[#5EA6FF]"
              />

              <div>
                <span className="block text-[9px] tracking-[0.2em] text-white/25">
                  EMAIL
                </span>

                <span className="mt-1 block text-[12px]">
                  info@codegenzsolutions.com
                </span>
              </div>
            </a>

            {/* PHONE */}

            <a
              href="tel:+919384712673"
              className="
                group
                mb-5
                flex
                items-start
                gap-3
                text-white/55
                transition-colors
                duration-300
                hover:text-white
              "
            >
              <Phone
                size={16}
                strokeWidth={1.4}
                className="mt-1 shrink-0 text-[#5EA6FF]"
              />

              <div>
                <span className="block text-[9px] tracking-[0.2em] text-white/25">
                  PHONE
                </span>

                <span className="mt-1 block text-[12px]">
                  +91 93847 12673
                </span>
              </div>
            </a>

            {/* LOCATION */}

            <div className="flex items-start gap-3 text-white/55">
              <MapPin
                size={16}
                strokeWidth={1.4}
                className="mt-1 shrink-0 text-[#5EA6FF]"
              />

              <div>
                <span className="block text-[9px] tracking-[0.2em] text-white/25">
                  LOCATION
                </span>

                <span className="mt-1 block text-[12px]">
                  Tamil Nadu, India
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
      {/* =====================================================
          COPYRIGHT
      ====================================================== */}

      <div className="border-t border-white/[0.06] bg-[#04111F]">

        <div
          className="
            mx-auto
            flex
            max-w-[1680px]
            items-center
            justify-between
            px-8
            py-5
            xl:px-12
          "
        >

          <p
            className="
              text-[9px]
              tracking-[0.08em]
              text-white/25
            "
          >
            © {new Date().getFullYear()} CodeGenZ Solutions.
            All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <a
              href="#privacy"
              className="
                text-[9px]
                tracking-[0.08em]
                text-white/25
                transition-colors
                hover:text-white
              "
            >
              Privacy Policy
            </a>

            <a
              href="#terms"
              className="
                text-[9px]
                tracking-[0.08em]
                text-white/25
                transition-colors
                hover:text-white
              "
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;