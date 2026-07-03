import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaRocket, FaFlagCheckered } from "react-icons/fa";
import "../../assets/css/AboutPage.css";

import heroBg from "../../assets/images/logo/About1.jpg";
import impactImg from "../../assets/images/logo/Aboutpage1.png";

function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [lineFilled, setLineFilled] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = heroBg;

    const finishLoading = () => setIsLoading(false);

    if (img.complete) {
      finishLoading();
    } else {
      img.onload = finishLoading;
      img.onerror = finishLoading;
    }

    const fallback = setTimeout(finishLoading, 3000);
    return () => clearTimeout(fallback);
  }, []);

  const vmg = [
    {
      icon: <FaBullseye />,
      title: "Our Vision",
      text: "To become a globally trusted technology partner, known for crafting digital experiences that are simple, reliable, and built to last.",
    },
    {
      icon: <FaRocket />,
      title: "Our Mission",
      text: "To empower businesses and individuals with well-structured, scalable solutions — delivered with clarity, precision, and genuine care for every client's needs.",
    },
    {
      icon: <FaFlagCheckered />,
      title: "Our Goal",
      text: "To consistently deliver high-quality, future-ready products while building long-term relationships founded on trust, transparency, and results.",
    },
  ];

  if (isLoading) {
    return (
      <div className="page-loader">
        <svg
          className="infinity-loader"
          viewBox="0 0 100 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2c5686" />
              <stop offset="100%" stopColor="#1f3c88" />
            </linearGradient>
          </defs>
          <path
            className="infinity-path"
            d="M 10,25
               C 10,15 20,5 35,5
               C 50,5 50,25 50,25
               C 50,25 50,45 65,45
               C 80,45 90,35 90,25
               C 90,15 80,5 65,5
               C 50,5 50,25 50,25
               C 50,25 50,45 35,45
               C 20,45 10,35 10,25 Z"
          />
        </svg>
        <p className="loader-text">Loading Content...</p>
      </div>
    );
  }

  return (
    <motion.div
      className="about-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* ================= HERO ================= */}
      <section className="about-hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="hero-overlay" />

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>About Company</h1>
          <p>Home / About Company</p>
        </motion.div>
      </section>


      {/* ================= IMPACT SECTION ================= */}
      <section className="impact-section">
        <div className="impact-card">
          <motion.div
            className="impact-content"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2>The Impact of Technology on Modern Society</h2>
            <p>
              Technology has revolutionized the way humans live, work, and
              interact. From communication to healthcare, transportation, and
              entertainment, technological advancements have significantly
              improved efficiency and convenience in the healthcare sector,
              technology has played a crucial role in diagnosis, treatment, and
              patient care.
            </p>
            <p>
              Advanced imaging techniques, robotic surgeries, and telemedicine
              have improved medical outcomes accessibility.
            </p>
            <button className="impact-btn">Read More</button>
          </motion.div>

          <motion.div
            className="impact-image"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img src={impactImg} alt="Technology impact" />
          </motion.div>
        </div>
      </section>

      {/* ================= VISION / MISSION / GOAL — TIMELINE ================= */}
      <section className="vmg-section">
        <motion.div
          className="vmg-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="vmg-tag">• OUR PURPOSE •</span>
          <h2>Vision, Mission &amp; Goal</h2>
          <p>The principles that guide every product we build.</p>
        </motion.div>

        <div className="vmg-timeline">
          <motion.div
            className="timeline-track"
            onViewportEnter={() => setLineFilled(true)}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className={`timeline-fill ${lineFilled ? "filled" : ""}`} />
          </motion.div>

          <div className="timeline-items">
            {vmg.map((item, i) => (
              <div className="timeline-item" key={item.title}>
                <motion.div
                  className="timeline-icon-wrap"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.45 }}
                  viewport={{ once: true }}
                >
                  <span className="timeline-step">0{i + 1}</span>
                  <div className="timeline-icon">{item.icon}</div>
                </motion.div>

                <motion.div
                  className="timeline-content"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.45 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="about-services">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What We Do Best
        </motion.h2>

        <div className="services-grid">
          {[
            "Website Designing & Development",
            "UI / UX Design",
            "Social Media Marketing",
            "Content Marketing",
            "SEO Optimization",
            "Graphic Designing",
          ].map((service, i) => (
            <motion.div
              className="service-card"
              key={service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              {service}
            </motion.div>
          ))}
        </div>

        <p className="extra-text">
          From design to deployment, our team handles every stage of your
          digital journey — ensuring quality, consistency, and measurable
          results at every step.
        </p>
      </section>

      {/* ================= WHY SECTION ================= */}
      <section className="why-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Why Choose Us</h2>
          <p>
            We combine technical expertise with a genuine understanding of
            business goals, ensuring every solution we deliver adds real value —
            not just visual appeal.
          </p>
          <p>
            Our team stays closely involved through every phase of the project,
            from planning to launch and beyond, so you always have a reliable
            partner by your side.
          </p>
        </motion.div>
      </section>
    </motion.div>
  );
}

export default AboutPage;