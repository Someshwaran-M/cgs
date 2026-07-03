import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import {
  Home,
  Info,
  Settings,
  Briefcase,
  GraduationCap,
  Phone,
} from "lucide-react";
import "../../assets/css/Header.css";
import logo from "../../assets/images/logo/page.png";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  /* ───────── SCROLL DETECT ───────── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      if (location.pathname !== "/") return;

      const about = document.getElementById("about-section");
      const services = document.getElementById("services-section");
      const scrollPos = window.scrollY + 120;

      if (services && scrollPos >= services.offsetTop) {
        setActiveSection("services");
      } else if (about && scrollPos >= about.offsetTop) {
        setActiveSection("about");
      } else {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  /* ───────── SCROLL TO SECTION ───────── */
  const goToSection = (section, name) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 600,
          offset: -80,
        });
        setActiveSection(name);
      }, 300);
    } else {
      scroller.scrollTo(section, { smooth: true, duration: 600, offset: -80 });
      setActiveSection(name);
    }
  };

  /* ───────── MOBILE NAV ITEMS ───────── */
  const mobileNavItems = [
    {
      name: "home",
      label: "Home",
      Icon: Home,
      action: () => goToSection("home", "home"),
      isActive: () => activeSection === "home" && location.pathname === "/",
    },
    {
      name: "about",
      label: "About",
      Icon: Info,
      action: () => goToSection("about-section", "about"),
      isActive: () => activeSection === "about",
    },
    {
      name: "services",
      label: "Services",
      Icon: Settings,
      action: () => goToSection("services-section", "services"),
      isActive: () => activeSection === "services",
    },
    {
      name: "career",
      label: "Career",
      Icon: Briefcase,
      action: () => navigate("/career"),
      isActive: () => location.pathname === "/career",
    },
    {
      name: "internships",
      label: "Internships",
      Icon: GraduationCap,
      action: () => navigate("/internships"),
      isActive: () => location.pathname === "/internships",
    },
    {
      name: "contact",
      label: "Contact",
      Icon: Phone,
      action: () => navigate("/contact"),
      isActive: () => location.pathname === "/contact",
    },
  ];

  /* ───────── SCROLLED on non-home pages always ───────── */
  const isScrolled = scrolled || location.pathname !== "/";

  return (
    <>
      {/* ── DESKTOP HEADER ── */}
      <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          {/* LOGO */}
          <div className="logo" onClick={() => goToSection("home", "home")}>
            <img src={logo} alt="CodeGenz" className="logo-img" />
            <div className="logo-text">
              <h2>
                CodeGenz Solutions
              </h2>
            </div>
          </div>

          {/* NAV LINKS */}
          <nav className="nav-links">
            <span
              className={`nav-btn ${activeSection === "home" && location.pathname === "/" ? "active" : ""}`}
              onClick={() => goToSection("home", "home")}
            >
              Home
            </span>

            <span
              className={`nav-btn ${activeSection === "about" ? "active" : ""}`}
              onClick={() => goToSection("about-section", "about")}
            >
              About
            </span>

            <span
              className={`nav-btn ${activeSection === "services" ? "active" : ""}`}
              onClick={() => goToSection("services-section", "services")}
            >
              Services
            </span>

            <NavLink
              to="/career"
              className={({ isActive }) =>
                isActive ? "nav-btn active" : "nav-btn"
              }
            >
              Career
            </NavLink>

            <NavLink
              to="/internships"
              className={({ isActive }) =>
                isActive ? "nav-btn active" : "nav-btn"
              }
            >
              Internships
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-btn active" : "nav-btn"
              }
            >
              Contact Us
            </NavLink>
          </nav>
        </div>
      </header>

      {/* ── MOBILE BOTTOM TAB BAR ── */}
      <nav className="mobile-tab-bar">
        {mobileNavItems.map((item) => {
          const active = item.isActive();
          return (
            <button
              key={item.name}
              className={`mobile-tab-item ${active ? "active" : ""}`}
              onClick={item.action}
            >
              <item.Icon
                size={22}
                strokeWidth={active ? 2.2 : 1.6}
                color={active ? "#2c5686" : "#999999"}
              />
              <span className="mobile-tab-label">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}

export default Header;
