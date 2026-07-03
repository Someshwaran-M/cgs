import React from "react";
import "../../assets/css/Intern.css";
import heroImg from "../../assets/images/logo/Internship.jpg";
import internHero from "../../assets/images/logo/Intern.png";

import {
  Globe,
  Monitor,
  Database,
  Layers,
  Smartphone,
  Palette,
  CheckCircle,
} from "lucide-react";

function Internships() {
  return (
    <div className="intern-page">
      {/* HERO */}
      <section
        className="intern-hero"
        style={{ backgroundImage: `url(${internHero})` }}
      >
        <div className="intern-hero-overlay"></div>

        <div className="intern-hero-content">
          <h1>Internship & Training Programs</h1>

          <p>
            At CodeGenz Solutions, we provide practical training and internships
            to build real-world technical skills.
          </p>
        </div>
      </section>

      {/* TRAINING DOMAINS */}
      <section className="intern-domains">
        <h2>Training Domains</h2>
        <p className="domain-desc">
          We offer training and internship opportunities in the following
          domains:
        </p>

        <div className="domain-grid">
          <div className="domain-card">
            <Globe size={40} className="icon" />
            <h3>Web Development</h3>
            <p>
              Learn how to design and build modern, responsive websites using
              the latest technologies.
            </p>
          </div>

          <div className="domain-card">
            <Monitor size={40} className="icon" />
            <h3>Frontend Development</h3>
            <p>
              Create interactive and user-friendly interfaces using modern
              frameworks and tools.
            </p>
          </div>

          <div className="domain-card">
            <Database size={40} className="icon" />
            <h3>Backend Development</h3>
            <p>
              Learn server-side development, API integration, and database
              management.
            </p>
          </div>

          <div className="domain-card">
            <Layers size={40} className="icon" />
            <h3>Full Stack Development</h3>
            <p>
              Understand both frontend and backend technologies to build
              complete web applications.
            </p>
          </div>

          <div className="domain-card">
            <Smartphone size={40} className="icon" />
            <h3>Mobile Application Development</h3>
            <p>
              Learn how to build mobile applications using modern development
              tools.
            </p>
          </div>

          <div className="domain-card">
            <Palette size={40} className="icon" />
            <h3>UI/UX Design</h3>
            <p>
              Learn the fundamentals of designing clean, user-friendly, and
              engaging interfaces.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT STUDENTS WILL GAIN */}
      <section className="intern-benefits">
        <h2>What Students Will Gain</h2>
        <div className="benefit-grid">
          <div className="benefit-card">
            <CheckCircle size={22} />
            <span>Project-based learning experience</span>
          </div>
          <div className="benefit-card">
            <CheckCircle size={22} />
            <span>Knowledge of modern technologies</span>
          </div>
          <div className="benefit-card">
            <CheckCircle size={22} />
            <span>Real-time project experience</span>
          </div>
          <div className="benefit-card">
            <CheckCircle size={22} />
            <span>Internship completion certificate</span>
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section
        className="intern-coming"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="coming-overlay"></div>
        <div className="coming-card">
          <h2>Coming Soon</h2>
          <p className="coming-line">
            Our programs focus on hands-on learning where students can work on
            projects and improve their knowledge in modern technologies. Our
            internship and training programs will be available soon. Stay
            connected with CodeGenz Solutions for updates.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Internships;
