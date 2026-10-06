import React, { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  X,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const mainLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "PROJECTS", href: "/projects" },
    { name: "CONTACT", href: "/contact" },
  ];

  const menuLinks = [
    { name: "PRICING", href: "/pricing" },
    { name: "INTERNSHIP", href: "/internship" },
    { name: "CAREERS", href: "/careers" },
    { name: "TESTIMONIALS", href: "/testimonials" },
    { name: "FAQ", href: "/faq" },
    { name: "BLOG", href: "/blog" },
    { name: "FOLLOW US", href: "/follow-us" },
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

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* =========================================================
          PREMIUM NAVBAR
      ========================================================== */}

      <header className="fixed left-0 top-0 z-[100] w-full px-5 pt-5 xl:px-8">
        <div
          className="
            mx-auto
            flex
            h-[76px]
            max-w-[1680px]
            items-center
            rounded-[20px]
            border
            border-[#E3EAF1]
            bg-white/[0.97]
            px-6
            shadow-[0_18px_55px_rgba(12,49,82,0.08)]
            backdrop-blur-2xl
            transition-all
            duration-500
            hover:shadow-[0_22px_65px_rgba(12,49,82,0.12)]
            xl:px-8
          "
        >
          {/* =====================================================
              LOGO
          ====================================================== */}

          <div className="flex w-[245px] shrink-0 items-center">
            <a
              href="#home"
              onClick={closeMenu}
              className="group/logo relative flex items-center"
            >
              <span
                className="
                  absolute
                  -left-4
                  top-1/2
                  h-5
                  w-[2px]
                  -translate-y-1/2
                  rounded-full
                  bg-gradient-to-b
                  from-[#1769C2]
                  via-[#3B8DFF]
                  to-transparent
                  opacity-0
                  transition-all
                  duration-500
                  group-hover/logo:h-9
                  group-hover/logo:opacity-100
                "
              />

              <img
                src="/logo.png"
                alt="CodeGenZ Solutions"
                className="
                  h-[88px]
                  w-auto
                  object-contain
                  transition-transform
                  duration-500
                  group-hover/logo:scale-[1.02]
                "
              />
            </a>
          </div>

          {/* =====================================================
              MAIN NAVIGATION
          ====================================================== */}

          <nav className="flex flex-1 justify-center">
            <div className="flex items-center gap-7 xl:gap-9">
              {mainLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="
                    group/link
                    relative
                    flex
                    items-center
                    py-3
                    text-[10px]
                    font-semibold
                    tracking-[0.2em]
                    text-[#1D3853]
                    transition-all
                    duration-300
                    hover:text-[#1769C2]
                  "
                >
                  {link.name}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[1.5px]
                      w-0
                      rounded-full
                      bg-[#1769C2]
                      transition-all
                      duration-500
                      group-hover/link:w-full
                    "
                  />
                </a>
              ))}
            </div>
          </nav>

          {/* =====================================================
              CONTACT + MENU
          ====================================================== */}

          <div className="flex w-[390px] shrink-0 items-center justify-end">
            {/* CONTACT DETAILS */}

            <div className="flex flex-col items-end pr-6">
              <a
                href="mailto:info@codegenzsolutions.com"
                className="
                  text-[10px]
                  font-medium
                  tracking-[0.04em]
                  text-[#203B58]
                  transition-colors
                  duration-300
                  hover:text-[#1769C2]
                "
              >
                info@codegenzsolutions.com
              </a>

              <a
                href="tel:+919384712673"
                className="
                  mt-1
                  text-[9px]
                  font-medium
                  tracking-[0.16em]
                  text-[#8A9AAC]
                  transition-colors
                  duration-300
                  hover:text-[#1769C2]
                "
              >
                +91 93847 12673
              </a>
            </div>

            {/* DIVIDER */}

            <span className="h-[38px] w-px bg-[#E2E9F0]" />

            {/* MENU BUTTON */}

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="
                group/menu
                ml-5
                flex
                h-[50px]
                w-[66px]
                items-center
                justify-center
                rounded-[14px]
                border
                border-[#DCE5ED]
                bg-[#F8FAFC]
                transition-all
                duration-500
                hover:border-[#1769C2]
                hover:bg-[#1769C2]
                hover:shadow-[0_12px_35px_rgba(23,105,194,0.22)]
              "
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="
                    text-[8px]
                    font-bold
                    tracking-[0.15em]
                    text-[#1769C2]
                    transition-colors
                    duration-300
                    group-hover/menu:text-white
                  "
                >
                  CGS
                </span>

                <div className="flex flex-col items-end gap-[5px]">
                  <span
                    className="
                      h-[1.5px]
                      w-[18px]
                      rounded-full
                      bg-[#1D3853]
                      transition-all
                      duration-300
                      group-hover/menu:w-[22px]
                      group-hover/menu:bg-white
                    "
                  />

                  <span
                    className="
                      h-[1.5px]
                      w-[11px]
                      rounded-full
                      bg-[#1769C2]
                      transition-all
                      duration-300
                      group-hover/menu:w-[22px]
                      group-hover/menu:bg-white
                    "
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================
          BACKDROP
      ========================================================== */}

      <div
        onClick={closeMenu}
        className={`
          fixed
          inset-0
          z-[110]
          bg-[#04111F]/45
          backdrop-blur-[8px]
          transition-all
          duration-500
          ${
            menuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* =========================================================
          SIDE MENU
      ========================================================== */}

      <aside
        className={`
          fixed
          right-0
          top-0
          z-[120]
          flex
          h-screen
          w-[430px]
          flex-col
          bg-[#061525]
          shadow-[-25px_0_70px_rgba(0,0,0,0.25)]
          transition-transform
          duration-500
          ease-out
          ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* =====================================================
            SIDE MENU HEADER
        ====================================================== */}

        <div
          className="
            flex
            h-[88px]
            shrink-0
            items-center
            justify-between
            border-b
            border-white/[0.08]
            px-9
          "
        >
          <div>
            <p
              className="
                text-[8px]
                font-semibold
                tracking-[0.35em]
                text-[#63A9FF]
              "
            >
              CODEGENZ
            </p>

            <p
              className="
                mt-1
                text-[15px]
                font-medium
                tracking-[0.12em]
                text-white
              "
            >
              SOLUTIONS
            </p>
          </div>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="
              group/close
              flex
              h-[40px]
              w-[40px]
              items-center
              justify-center
              rounded-full
              border
              border-white/[0.14]
              transition-all
              duration-300
              hover:border-[#5EA6FF]
              hover:bg-[#1769C2]
            "
          >
            <X
              size={17}
              strokeWidth={1.4}
              className="
                text-white/70
                transition-all
                duration-300
                group-hover/close:rotate-90
                group-hover/close:text-white
              "
            />
          </button>
        </div>

        {/* =====================================================
            MENU CONTENT
        ====================================================== */}

        <div className="flex-1 px-9 pt-6">
          {/* EXPLORE TITLE */}

          <div className="mb-3 flex items-center justify-between">
            <span
              className="
                text-[8px]
                font-semibold
                tracking-[0.3em]
                text-white/30
              "
            >
              EXPLORE
            </span>

            <span
              className="
                text-[8px]
                tracking-[0.18em]
                text-white/20
              "
            >
              07
            </span>
          </div>

          {/* MENU LINKS */}

          <div>
            {menuLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="
                  group/item
                  relative
                  flex
                  h-[50px]
                  items-center
                  justify-between
                  border-b
                  border-white/[0.07]
                  transition-all
                  duration-300
                  hover:pl-2
                "
              >
                <div className="flex items-center gap-5">
                  <span
                    className="
                      w-[20px]
                      text-[8px]
                      tracking-[0.1em]
                      text-white/20
                      transition-colors
                      duration-300
                      group-hover/item:text-[#5EA6FF]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="
                      text-[12px]
                      font-medium
                      tracking-[0.17em]
                      text-white/65
                      transition-colors
                      duration-300
                      group-hover/item:text-white
                    "
                  >
                    {link.name}
                  </span>
                </div>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.4}
                  className="
                    text-[#5EA6FF]
                    opacity-0
                    transition-all
                    duration-300
                    group-hover/item:translate-x-1
                    group-hover/item:opacity-100
                  "
                />
              </a>
            ))}
          </div>

          {/* =================================================
              FOLLOW US
          ================================================== */}

          <div className="mt-5 border-t border-white/[0.07] pt-4">
            <div className="flex items-center justify-between">
              <p
                className="
                  text-[7px]
                  font-semibold
                  tracking-[0.28em]
                  text-white/25
                "
              >
                FOLLOW US
              </p>

              <div className="flex items-center gap-2">
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
                        h-[30px]
                        w-[30px]
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
                      <Icon
                        size={13}
                        strokeWidth={1.5}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM FOOTER
        ====================================================== */}

        <div
          className="
            shrink-0
            border-t
            border-white/[0.08]
            bg-[#04111F]
            px-9
            py-4
          "
        >
          <div className="flex items-center justify-between">
            {/* CONTACT */}

            <div>
              <p
                className="
                  mb-2
                  text-[7px]
                  font-semibold
                  tracking-[0.28em]
                  text-white/25
                "
              >
                CONTACT
              </p>

              <a
                href="mailto:info@codegenzsolutions.com"
                className="
                  flex
                  items-center
                  gap-2
                  text-[9px]
                  text-white/65
                  transition-colors
                  duration-300
                  hover:text-[#63A9FF]
                "
              >
                <Mail
                  size={11}
                  strokeWidth={1.3}
                  className="text-[#5EA6FF]"
                />

                info@codegenzsolutions.com
              </a>

              <a
                href="tel:+919384712673"
                className="
                  mt-1.5
                  flex
                  items-center
                  gap-2
                  text-[8px]
                  tracking-[0.08em]
                  text-white/35
                  transition-colors
                  duration-300
                  hover:text-[#63A9FF]
                "
              >
                <Phone
                  size={10}
                  strokeWidth={1.3}
                  className="text-[#5EA6FF]/70"
                />

                +91 93847 12673
              </a>
            </div>

            
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;