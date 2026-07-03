import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../assets/css/About.css";

import img1 from "../../assets/images/logo/About1.jpg";
import img4 from "../../assets/images/logo/About4.jpg";

function About() {
  return (
    <section className="about-section">
      {/* ===== SECTION 1 ===== */}
      <div className="about-row">
        {/* IMAGE LEFT */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={img1} alt="Team collaboration" />
        </motion.div>

        {/* CONTENT RIGHT */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="about-tag">↑ About us</span>

          <h2>
            Creating <span className="theme">Experiences</span>
            <br />
            That Inspire <span className="theme">Growth</span>
          </h2>

          <p>
            At CodeGenz Solutions, we don't just build websites — we create
            digital experiences that empower businesses to grow and scale in a
            fast-moving digital world.
          </p>

          <p>
            At CodeGenz Solutions, we work with individuals and teams to build
            reliable and well-structured solutions tailored to their
            requirements. Our focus is on understanding each project clearly and
            delivering outcomes that are practical, efficient, and easy to
            maintain.
          </p>
        </motion.div>
      </div>

      {/* ===== SECTION 2 ===== */}
      <div className="about-row">
        {/* CONTENT LEFT */}
        <motion.div
          className="about-content left-align"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            In an era where technology evolves rapidly, we help startups,
            businesses, and professionals envision, build, and transform their
            ideas into reliable, scalable digital solutions.
          </p>

          <p>
            We follow a simple and structured approach, ensuring every solution
            is developed with attention to detail, performance, and usability.
            Our goal is to create solutions that are not only functional today
            but also adaptable for future needs.
          </p>

          <div className="about-buttons">
            {/* 🔥 Read More -> navigates to AboutPage */}
            <Link to="/about" className="btn-secondary">
              Read More →
            </Link>
          </div>
        </motion.div>

        {/* IMAGE RIGHT */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={img4} alt="Workspace" />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
