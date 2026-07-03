import React, { useState, useEffect } from "react";
import "../../assets/css/career.css";
import opportunityImg from "../../assets/images/logo/Career6.png";
import { Briefcase, Users, BookOpen, TrendingUp } from "lucide-react";

import bg1 from "../../assets/images/logo/Career1.png";
import bg2 from "../../assets/images/logo/Career2.png";
import bg3 from "../../assets/images/logo/Career3.png";
import joinBg from "../../assets/images/logo/Career4.jpg";
import lookingBg from "../../assets/images/logo/Career7.png";

function CareerPage() {
  const images = [bg1, bg2, bg3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="career-page">
      {/* HERO — full viewport */}
      <section className="career-hero">
        <img className="hero-image" src={images[index]} alt="career background" />
        <div className="hero-overlay"></div>
        {/* <div className="career-hero-text">
          <h1>Careers at CodeGenz Solutions</h1>
          <p>
            Join CodeGenz Solutions and be part of a team that is passionate
            about building innovative digital solutions.
          </p>
        </div> */}
      </section>

      {/* INTRO */}
      <section className="career-intro">
        <div className="intro-container">
          {/* LEFT IMAGE */}
          <div className="intro-image">
            <img src={opportunityImg} alt="career" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="intro-text">
            <h2>Careers Coming Soon</h2>
            <div className="line"></div>
            <p>
              We are currently preparing exciting career opportunities at CodeGenz Solutions. Our openings will be available soon for individuals who are eager to learn, grow, and contribute to meaningful work.
            </p>
            <p>
              Stay connected with us for updates on upcoming roles and opportunities.
            </p>
            <button className="intro-btn">Stay Tuned</button>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="career-benefits">
        <h2 className="benefit-main-title">Why Work With Us</h2>
        <p className="benefit-subtext">
          At CodeGenz Solutions, we focus on creating a positive and
          collaborative work environment where every team member has the
          opportunity to grow professionally.
        </p>
        <div className="benefit-row">
          <div className="benefit-item">
            <Briefcase size={36} />
            <h4>Exciting Projects</h4>
            <p>Opportunity to work on exciting digital projects</p>
          </div>
          <div className="benefit-item">
            <Users size={36} />
            <h4>Team Culture</h4>
            <p>Supportive and collaborative work culture</p>
          </div>
          <div className="benefit-item">
            <BookOpen size={36} />
            <h4>Learning</h4>
            <p>Continuous learning and skill development</p>
          </div>
          <div className="benefit-item">
            <TrendingUp size={36} />
            <h4>Career Growth</h4>
            <p>Opportunity to grow with the company</p>
          </div>
        </div>
      </section>

      {/* LOOKING */}
      <section className="career-looking">
        <div className="looking-bg" style={{ backgroundImage: `url(${lookingBg})` }}></div>
        <div className="looking-overlay"></div>
        <div className="looking-container">
          <h2>Who We Are Looking For</h2>
          <div className="looking-line"></div>
          <div className="looking-grid">
            <ul className="looking-list">
              <li>Passionate about technology and development</li>
              <li>Willing to learn and adapt to new challenges</li>
            </ul>
            <ul className="looking-list">
              <li>Interested in building high-quality digital products</li>
              <li>Ready to collaborate and contribute to team success</li>
            </ul>
          </div>
        </div>
      </section>



      {/* JOIN */}
      {/* <section className="career-join">
        <img className="join-image" src={joinBg} alt="join background" />
        <div className="join-overlay"></div>
        <div className="join-content">
          <h2>Join Our Team</h2>
          <div className="join-hover">
            <p>
              If you're interested in becoming part of CodeGenz Solutions, we
              would love to hear from you. Send your resume and details to us,
              and our team will get in touch with you if there is a suitable
              opportunity.
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default CareerPage;
