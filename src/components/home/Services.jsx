import { motion } from "framer-motion";
import { useState } from "react";
import {
  Code,
  ShoppingCart,
  User,
  Palette,
  Settings,
  GraduationCap,
  Smartphone,
  BookOpen,
  ChevronDown,
} from "lucide-react";

import "../../assets/css/Services.css";
import serviceImg from "../../assets/images/logo/Service.png";

const services = [
  {
    icon: <Code size={28} />,
    title: "Custom Website & Web Application Development",
    desc: "Scalable, secure and high-performance solutions tailored to your business.",
  },
  {
    icon: <ShoppingCart size={28} />,
    title: "E-Commerce Solutions",
    desc: "Powerful online stores with seamless checkout and secure payments.",
  },
  {
    icon: <User size={28} />,
    title: "Portfolio & Personal Branding Websites",
    desc: "Professional websites showcasing skills and achievements.",
  },
  {
    icon: <Palette size={28} />,
    title: "UI/UX Design & Responsive Interfaces",
    desc: "Intuitive, interactive and mobile-first digital experiences.",
  },
  {
    icon: <Settings size={28} />,
    title: "Website Optimization & Maintenance",
    desc: "Performance optimization, security updates and support.",
  },
  {
    icon: <GraduationCap size={28} />,
    title: "Internship Training & Project Development",
    desc: "Hands-on training with real-time project exposure.",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile Application Development",
    desc: "Modern Android and iOS mobile applications built for performance and scalability.",
  },
  {
    icon: <BookOpen size={28} />,
    title: "Professional Training & Skill Development",
    desc: "Industry-focused learning programs designed to enhance technical and practical skills.",
  },
];

const faqData = [
  {
    question: "What services does CodeGenz Solutions provide?",
    answer:
      "CodeGenz Solutions provides services including website development, web applications, mobile application development, UI/UX design, and e-commerce solutions.",
  },
  {
    question: "Can you build custom websites for businesses?",
    answer:
      "Yes, we develop custom websites tailored to your business needs, ensuring modern design, performance, and scalability.",
  },
  {
    question: "Do you develop mobile applications?",
    answer:
      "Yes, we build mobile applications designed to provide smooth performance and user-friendly experiences.",
  },
  {
    question: "Do you offer support and maintenance after project completion?",
    answer:
      "Yes, we provide website maintenance and support to ensure your digital platforms run smoothly.",
  },
];

function Services() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    /*
      Pass the imported image as a CSS variable so the
      ::before pseudo-element (defined in Services.css)
      can use it as background-image — no inline style
      needed on the section itself for the bg colour.
    */
    <section
      id="services-section"
      style={{ "--service-bg": `url(${serviceImg})` }}
    >
      {/* ── HEADING ── */}
      <div className="services-top">
        <h2>Our Services</h2>
      </div>

      {/* ── GROWTH BANNER (glass card, bg comes from section) ── */}
      <div className="growth-section">
        <motion.div
          className="growth-content"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3>Elevating Businesses Through Digital Excellence</h3>
          <p>
            We deliver scalable, secure, and innovation-driven digital solutions
            that empower businesses to grow faster, smarter, and stronger.
          </p>
        </motion.div>
      </div>

      {/* ── SERVICE CARDS ── */}
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.07 }}
          >
            <div className="icon">{service.icon}</div>
            <h4>{service.title}</h4>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* ── FAQ ── */}
      <div className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="faq-grid">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-box ${activeFAQ === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h4>{faq.question}</h4>
                <ChevronDown size={20} className="faq-icon" />
              </div>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
