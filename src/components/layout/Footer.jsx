import "../../assets/css/Footer.css";
import logo from "../../assets/images/logo/Logo.png";
import footerVideo from "../../assets/videos/Footer.mp4";
import { ArrowUp, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

/* ── Nav icons (inline SVG for full control) ── */
const IcoHome = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
);
const IcoAbout = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);
const IcoServices = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
  </svg>
);
const IcoCareer = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
  </svg>
);
const IcoInternships = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
);
const IcoContact = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

/* ────────────────────────────────────────────────────────── */

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      {/* VIDEO BACKGROUND */}
      <video autoPlay loop muted playsInline className="footer-video">
        <source src={footerVideo} type="video/mp4" />
      </video>
      <div className="footer-overlay" />

      {/* ════════════════════════════════════════════
          MOBILE HEADER — logo + name only (no icons)
      ════════════════════════════════════════════ */}
      <div className="footer-mobile-header">
        <div className="footer-mobile-logo">
          <img src={logo} alt="CodeGenz logo" />
          <span>CODEGENZ</span>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          MOBILE NAV — 6 items, 2 cols × 3 rows
          HOME      | ABOUT
          SERVICES  | CAREER
          INTERNSHIPS | CONTACT
      ════════════════════════════════════════════ */}
      <nav className="footer-mobile-nav">
        <a href="#">
          <IcoHome />
          HOME
        </a>
        <a href="#">
          <IcoAbout />
          ABOUT
        </a>
        <a href="#">
          <IcoServices />
          SERVICES
        </a>
        <a href="#">
          <IcoCareer />
          CAREER
        </a>
        <a href="#">
          <IcoInternships />
          INTERNSHIPS
        </a>
        <a href="#">
          <IcoContact />
          CONTACT
        </a>
      </nav>

      {/* ════════════════════════════════════════════
          DESKTOP TOP SECTION
      ════════════════════════════════════════════ */}
      <div className="footer-top">
        {/* LEFT */}
        <div className="footer-left">
          <h1 className="footer-title">CodeGenz Solutions</h1>

          <p className="footer-tagline">
            Simple, effective solutions built to perform — from idea to
            execution.
          </p>

          {/* Desktop social icons */}
          <div className="footer-socials">
            <a href="mailto:hello@codegenz.com" aria-label="Email">
              <Mail size={16} />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        {/* RIGHT — two columns */}
        <div className="footer-right">
          <div className="footer-links">
            <h4>COMPANY</h4>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">Careers</a>
            <a href="#">Internships</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          BOTTOM BAR  (shared — desktop + mobile)
      ════════════════════════════════════════════ */}
      <div className="footer-bottom">
        {/* Logo + brand — matches navbar style */}
        <div className="footer-copy">
          <img src={logo} alt="CodeGenze logo" />
          <div className="footer-brand">
            <span className="footer-brand-name">
              CodeGenze <span>Solutions</span>
            </span>
            <span className="footer-copy-year">© 2026 CODEGENZE SOLUTIONS</span>
          </div>
        </div>

        {/* Scroll top — blue glow */}
        <div
          className="scroll-top"
          onClick={scrollToTop}
          role="button"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
