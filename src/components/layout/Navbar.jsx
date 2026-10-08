import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  Phone,
  X,
  Linkedin,
  Instagram,
  Facebook,
  MessageCircle,
  Send,
  House,
  UserRound,
  BriefcaseBusiness,
  Workflow,
  PhoneCall,
} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  /* =========================================================
     MAIN NAVIGATION
  ========================================================== */

  const mainLinks = [
    {
      name: "HOME",
      href: "/",
      icon: House,
    },
    {
      name: "ABOUT",
      href: "/about",
      icon: UserRound,
    },
    {
      name: "SERVICES",
      href: "/services",
      icon: BriefcaseBusiness,
    },
    {
      name: "OUR PROCESS",
      href: "/our-process",
      icon: Workflow,
    },
    {
      name: "CONTACT",
      href: "/contact",
      icon: PhoneCall,
    },
  ];

  /* =========================================================
     SIDE MENU LINKS
  ========================================================== */

  const menuLinks = [
    { name: "PROJECTS", href: "/projects" },
    { name: "CAREER", href: "/career" },
    { name: "INTERNSHIP", href: "/internship" },
    { name: "PRICING", href: "/pricing" },
    { name: "TESTIMONIALS", href: "/testimonials" },
    { name: "FAQ", href: "/faq" },
    { name: "BLOG", href: "/blog" },
    { name: "FOLLOW US", href: "/follow-us" },
  ];

  /* =========================================================
     SOCIAL LINKS
  ========================================================== */

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

  /* =========================================================
     WHATSAPP
  ========================================================== */

  const whatsappMessage =
    "Hello CodeGenZ Solutions, I would like to discuss a project with you.";

  const whatsappUrl = `https://wa.me/919384712673?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  /* =========================================================
     CLOSE MENU
  ========================================================== */

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* =========================================================
     SCROLL TO TOP
  ========================================================== */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
     SHOW SCROLL TOP BUTTON
  ========================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     ESCAPE KEY + BODY SCROLL LOCK
  ========================================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      {/* =========================================================
          TOP NAVBAR
      ========================================================== */}

      <header
        className="
          fixed
          left-0
          top-0
          z-[100]
          w-full
          px-2
          pt-2
          font-['Roboto',sans-serif]
          sm:px-4
          sm:pt-4
          lg:px-5
          xl:px-8
        "
      >
        <div
          className="
            mx-auto
            flex
            h-[68px]
            max-w-[1680px]
            items-center
            rounded-[18px]
            border
            border-[#E3EAF1]
            bg-white/[0.97]
            px-3
            shadow-[0_18px_55px_rgba(12,49,82,0.08)]
            backdrop-blur-2xl
            transition-all
            duration-500
            hover:shadow-[0_22px_65px_rgba(12,49,82,0.12)]
            sm:h-[72px]
            sm:px-5
            md:h-[76px]
            md:rounded-[20px]
            md:px-6
            xl:px-8
          "
        >
          {/* =====================================================
              LOGO
          ====================================================== */}

          <div
            className="
              flex
              w-auto
              shrink-0
              items-center
              sm:w-[200px]
              lg:w-[225px]
              xl:w-[245px]
            "
          >
            <a
              href="/"
              onClick={closeMenu}
              aria-label="CodeGenZ Solutions Home"
              className="group/logo relative flex items-center"
            >
              <span
                className="
                  absolute
                  -left-2
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
                  sm:-left-3
                  lg:-left-4
                "
              />

              <img
                src="/logo.png"
                alt="CodeGenZ Solutions"
                className="
                  h-[58px]
                  w-auto
                  object-contain
                  transition-transform
                  duration-500
                  group-hover/logo:scale-[1.02]
                  sm:h-[52px]
                  md:h-[62px]
                  lg:h-[68px]
                "
              />
            </a>
          </div>

          {/* =====================================================
              DESKTOP MAIN NAVIGATION
          ====================================================== */}

          <nav className="hidden flex-1 justify-center lg:flex">
            <div className="flex items-center gap-6 xl:gap-9">
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
                    font-['Roboto',sans-serif]
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

          <div
            className="
              ml-auto
              flex
              shrink-0
              items-center
              justify-end
              sm:w-auto
              lg:w-[390px]
            "
          >
            {/* CONTACT DETAILS */}

            <div
              className="
                hidden
                flex-col
                items-end
                pr-4
                sm:flex
                md:pr-5
                lg:pr-6
              "
            >
              <a
                href="mailto:info@codegenzsolutions.com"
                className="
                  font-['Roboto',sans-serif]
                  text-[9px]
                  font-medium
                  tracking-[0.03em]
                  text-[#203B58]
                  transition-colors
                  duration-300
                  hover:text-[#1769C2]
                  md:text-[10px]
                "
              >
                info@codegenzsolutions.com
              </a>

              <a
                href="tel:+919384712673"
                className="
                  mt-1
                  font-['Roboto',sans-serif]
                  text-[8px]
                  font-medium
                  tracking-[0.16em]
                  text-[#8A9AAC]
                  transition-colors
                  duration-300
                  hover:text-[#1769C2]
                  md:text-[9px]
                "
              >
                +91 93847 12673
              </a>
            </div>

            {/* DIVIDER */}

            <span className="hidden h-[38px] w-px bg-[#E2E9F0] sm:block" />

            {/* MENU BUTTON */}

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="
                group/menu
                ml-2
                flex
                h-[46px]
                w-[60px]
                items-center
                justify-center
                rounded-[13px]
                border
                border-[#DCE5ED]
                bg-[#F8FAFC]
                transition-all
                duration-500
                hover:border-[#1769C2]
                hover:bg-[#1769C2]
                hover:shadow-[0_12px_35px_rgba(23,105,194,0.22)]
                sm:ml-4
                sm:h-[48px]
                sm:w-[63px]
                md:ml-5
                md:h-[50px]
                md:w-[66px]
              "
            >
              <div className="flex items-center gap-2">
                <span
                  className="
                    font-['Roboto',sans-serif]
                    text-[7px]
                    font-bold
                    tracking-[0.15em]
                    text-[#1769C2]
                    transition-colors
                    duration-300
                    group-hover/menu:text-white
                    sm:text-[8px]
                  "
                >
                  CGS
                </span>

                <div className="flex flex-col items-end gap-[5px]">
                  <span
                    className="
                      h-[1.5px]
                      w-[17px]
                      rounded-full
                      bg-[#1D3853]
                      transition-all
                      duration-300
                      group-hover/menu:w-[22px]
                      group-hover/menu:bg-white
                      sm:w-[18px]
                    "
                  />

                  <span
                    className="
                      h-[1.5px]
                      w-[10px]
                      rounded-full
                      bg-[#1769C2]
                      transition-all
                      duration-300
                      group-hover/menu:w-[22px]
                      group-hover/menu:bg-white
                      sm:w-[11px]
                    "
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================
          MOBILE + TABLET BOTTOM NAVIGATION
          ICON + TEXT
          HIDDEN ON DESKTOP
      ========================================================== */}

      <nav
        className="
          fixed
          bottom-0
          left-0
          z-[95]
          flex
          w-full
          items-center
          justify-around
          border-t
          border-[#DCE5ED]
          bg-white/[0.97]
          px-1
          py-1.5
          font-['Roboto',sans-serif]
          shadow-[0_-10px_35px_rgba(12,49,82,0.10)]
          backdrop-blur-2xl
          lg:hidden
          sm:py-2
        "
      >
        {mainLinks.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              aria-label={link.name}
              className="
                group/bottom
                relative
                flex
                min-w-0
                flex-1
                flex-col
                items-center
                justify-center
                gap-1
                px-1
                py-1
                text-center
                transition-all
                duration-300
                sm:gap-1.5
                sm:py-1.5
              "
            >
              {/* TOP INDICATOR */}

              <span
                className="
                  absolute
                  top-0
                  h-[2px]
                  w-0
                  rounded-full
                  bg-[#1769C2]
                  transition-all
                  duration-300
                  group-hover/bottom:w-8
                  sm:group-hover/bottom:w-10
                "
              />

              {/* ICON */}

              <Icon
                size={17}
                strokeWidth={1.7}
                className="
                  text-[#64788D]
                  transition-all
                  duration-300
                  group-hover/bottom:-translate-y-0.5
                  group-hover/bottom:text-[#1769C2]
                  sm:h-[18px]
                  sm:w-[18px]
                  md:h-[19px]
                  md:w-[19px]
                "
              />

              {/* LABEL */}

              <span
                className="
                  whitespace-nowrap
                  font-['Roboto',sans-serif]
                  text-[6.5px]
                  font-semibold
                  tracking-[0.06em]
                  text-[#1D3853]
                  transition-colors
                  duration-300
                  group-hover/bottom:text-[#1769C2]
                  sm:text-[7px]
                  sm:tracking-[0.08em]
                  md:text-[8px]
                  md:tracking-[0.1em]
                "
              >
                {link.name}
              </span>
            </a>
          );
        })}
      </nav>

      {/* =========================================================
          BACKDROP
      ========================================================== */}

      <div
        onClick={closeMenu}
        aria-hidden="true"
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
          NO SCROLLING
      ========================================================== */}

      <aside
        aria-label="Main menu"
        className={`
          fixed
          right-0
          top-0
          z-[120]
          flex
          h-[100dvh]
          w-[88vw]
          max-w-[430px]
          flex-col
          overflow-hidden
          bg-[#061525]
          font-['Roboto',sans-serif]
          shadow-[-25px_0_70px_rgba(0,0,0,0.25)]
          transition-transform
          duration-500
          ease-out
          sm:w-[430px]
          ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* =====================================================
            SIDE MENU HEADER
            CLICK LOGO TO CLOSE
        ====================================================== */}

        <div
          className="
            flex
            h-[72px]
            shrink-0
            items-center
            justify-between
            border-b
            border-white/[0.08]
            px-5
            sm:h-[78px]
            sm:px-7
            md:h-[82px]
            md:px-9
          "
        >
          {/* CLICKABLE TOP LOGO */}

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu and return to CodeGenZ home"
            className="
              group/sidebar-logo
              flex
              items-center
              text-left
              outline-none
            "
          >
            <div>
              <p
                className="
                  font-['Roboto',sans-serif]
                  text-[7px]
                  font-semibold
                  tracking-[0.35em]
                  text-[#63A9FF]
                  transition-colors
                  duration-300
                  group-hover/sidebar-logo:text-white
                  sm:text-[8px]
                "
              >
                CODEGENZ
              </p>

              <p
                className="
                  mt-1
                  font-['Roboto',sans-serif]
                  text-[14px]
                  font-medium
                  tracking-[0.12em]
                  text-white
                  transition-colors
                  duration-300
                  group-hover/sidebar-logo:text-[#63A9FF]
                  sm:text-[15px]
                "
              >
                SOLUTIONS
              </p>
            </div>
          </button>

          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="
              group/close
              flex
              h-[36px]
              w-[36px]
              items-center
              justify-center
              rounded-full
              border
              border-white/[0.14]
              transition-all
              duration-300
              hover:border-[#5EA6FF]
              hover:bg-[#1769C2]
              sm:h-[40px]
              sm:w-[40px]
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
            FIXED - NO SCROLL
        ====================================================== */}

        <div
          className="
            flex
            flex-1
            flex-col
            overflow-hidden
            px-5
            pt-3
            sm:px-7
            sm:pt-4
            md:px-9
            md:pt-4
          "
        >
          {/* =================================================
              EXPLORE TITLE
          ================================================== */}

          <div
            className="
              mb-1
              flex
              h-[22px]
              shrink-0
              items-center
              justify-between
            "
          >
            <span
              className="
                font-['Roboto',sans-serif]
                text-[7px]
                font-semibold
                tracking-[0.3em]
                text-white/30
                sm:text-[8px]
              "
            >
              EXPLORE
            </span>

            <span
              className="
                font-['Roboto',sans-serif]
                text-[7px]
                tracking-[0.18em]
                text-white/20
                sm:text-[8px]
              "
            >
              08
            </span>
          </div>

          {/* =================================================
              MENU LINKS
          ================================================== */}

          <div className="shrink-0">
            {menuLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="
                  group/item
                  relative
                  flex
                  h-[40px]
                  shrink-0
                  items-center
                  justify-between
                  border-b
                  border-white/[0.07]
                  transition-all
                  duration-300
                  hover:pl-2
                  sm:h-[42px]
                  md:h-[43px]
                "
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <span
                    className="
                      w-[20px]
                      font-['Roboto',sans-serif]
                      text-[7px]
                      tracking-[0.1em]
                      text-white/20
                      transition-colors
                      duration-300
                      group-hover/item:text-[#5EA6FF]
                      sm:text-[8px]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="
                      font-['Roboto',sans-serif]
                      text-[10px]
                      font-medium
                      tracking-[0.15em]
                      text-white/65
                      transition-colors
                      duration-300
                      group-hover/item:text-white
                      sm:text-[11px]
                      sm:tracking-[0.17em]
                    "
                  >
                    {link.name}
                  </span>
                </div>

                <ArrowUpRight
                  size={13}
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
              GET A QUOTE
          ================================================== */}

          <a
            href="/get-a-quote"
            onClick={closeMenu}
            className="
              group/quote
              mt-3
              flex
              h-[52px]
              shrink-0
              items-center
              justify-between
              rounded-[11px]
              border
              border-[#1769C2]/60
              bg-[#1769C2]/10
              px-3
              transition-all
              duration-300
              hover:border-[#5EA6FF]
              hover:bg-[#1769C2]
              hover:shadow-[0_15px_40px_rgba(23,105,194,0.22)]
              sm:h-[54px]
              sm:px-4
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#5EA6FF]/30
                  bg-[#1769C2]/20
                  transition-all
                  duration-300
                  group-hover/quote:bg-white/10
                  sm:h-8
                  sm:w-8
                "
              >
                <Send
                  size={12}
                  strokeWidth={1.5}
                  className="
                    text-[#63A9FF]
                    group-hover/quote:text-white
                  "
                />
              </div>

              <div>
                <p
                  className="
                    font-['Roboto',sans-serif]
                    text-[7px]
                    font-semibold
                    tracking-[0.25em]
                    text-[#63A9FF]
                    group-hover/quote:text-white/70
                  "
                >
                  START A PROJECT
                </p>

                <p
                  className="
                    mt-0.5
                    font-['Roboto',sans-serif]
                    text-[11px]
                    font-semibold
                    tracking-[0.12em]
                    text-white
                    sm:text-[12px]
                  "
                >
                  GET A QUOTE
                </p>
              </div>
            </div>

            <ArrowUpRight
              size={16}
              strokeWidth={1.4}
              className="
                text-[#63A9FF]
                transition-all
                duration-300
                group-hover/quote:translate-x-1
                group-hover/quote:-translate-y-1
                group-hover/quote:text-white
              "
            />
          </a>

          {/* =================================================
              FOLLOW US
          ================================================== */}

          <div
            className="
              mt-3
              shrink-0
              border-t
              border-white/[0.07]
              pt-2.5
              sm:mt-3
              sm:pt-3
            "
          >
            <div className="flex items-center justify-between">
              <p
                className="
                  font-['Roboto',sans-serif]
                  text-[7px]
                  font-semibold
                  tracking-[0.28em]
                  text-white/25
                  sm:text-[8px]
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
                      rel="noopener noreferrer"
                      aria-label={`Follow CodeGenZ on ${social.name}`}
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
                        sm:h-[31px]
                        sm:w-[31px]
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
            px-5
            py-3
            sm:px-7
            md:px-9
          "
        >
          <div>
            <p
              className="
                mb-1.5
                font-['Roboto',sans-serif]
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
                font-['Roboto',sans-serif]
                text-[8px]
                text-white/65
                transition-colors
                duration-300
                hover:text-[#63A9FF]
                sm:text-[9px]
              "
            >
              <Mail
                size={10}
                strokeWidth={1.3}
                className="shrink-0 text-[#5EA6FF]"
              />

              <span className="break-all">
                info@codegenzsolutions.com
              </span>
            </a>

            <a
              href="tel:+919384712673"
              className="
                mt-1
                flex
                items-center
                gap-2
                font-['Roboto',sans-serif]
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
                className="shrink-0 text-[#5EA6FF]/70"
              />

              +91 93847 12673
            </a>
          </div>
        </div>
      </aside>

      {/* =========================================================
          WHATSAPP — TALK TO US
      ========================================================== */}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Talk to us on WhatsApp"
        className="
          group/whatsapp
          fixed
          bottom-[68px]
          right-3
          z-[90]
          flex
          h-[46px]
          items-center
          gap-2
          rounded-full
          border
          border-white/20
          bg-[#25D366]
          px-3
          font-['Roboto',sans-serif]
          text-white
          shadow-[0_12px_35px_rgba(37,211,102,0.30)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_16px_45px_rgba(37,211,102,0.40)]
          sm:bottom-[72px]
          sm:right-5
          sm:h-[50px]
          sm:px-4
          md:bottom-[76px]
          md:right-7
        "
      >
        <MessageCircle
          size={19}
          strokeWidth={2}
          className="
            transition-transform
            duration-300
            group-hover/whatsapp:rotate-[-8deg]
          "
        />

        <span
          className="
            text-[9px]
            font-semibold
            tracking-[0.08em]
            sm:text-[10px]
            md:text-[11px]
          "
        >
          TALK TO US
        </span>
      </a>

      {/* =========================================================
          SCROLL TO TOP
      ========================================================== */}

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        tabIndex={showScrollTop ? 0 : -1}
        className={`
          group/top
          fixed
          bottom-[122px]
          right-3
          z-[89]
          flex
          h-[38px]
          w-[38px]
          items-center
          justify-center
          rounded-full
          border
          border-[#DCE5ED]
          bg-white/[0.96]
          font-['Roboto',sans-serif]
          text-[#1769C2]
          shadow-[0_10px_30px_rgba(12,49,82,0.14)]
          backdrop-blur-xl
          transition-all
          duration-500
          hover:-translate-y-1
          hover:border-[#1769C2]
          hover:bg-[#1769C2]
          hover:text-white
          sm:bottom-[128px]
          sm:right-5
          sm:h-[42px]
          sm:w-[42px]
          md:bottom-[136px]
          md:right-7
          ${
            showScrollTop
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-3 opacity-0"
          }
        `}
      >
        <ArrowUp
          size={16}
          strokeWidth={1.7}
          className="
            transition-transform
            duration-300
            group-hover/top:-translate-y-0.5
          "
        />
      </button>
    </>
  );
};

export default Navbar;