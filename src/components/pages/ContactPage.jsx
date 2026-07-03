import React, { useState } from "react";
import "../../assets/css/Contact.css";
import { Phone, Mail, MapPin, Linkedin, Facebook } from "lucide-react";
import { validateField } from "../../utils/Validation";
import backgroundVideo from "../../assets/videos/Background.mp4";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    const error = validateField(name, value);

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    Object.keys(formData).forEach((field) => {
      if (field !== "message") {
        const err = validateField(field, formData[field]);
        if (err) {
          newErrors[field] = err;
        }
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Message Sent Successfully");

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });

      setErrors({});
    }
  };

  return (
    <div className="contact-page">
      {/* HERO VIDEO — full screen */}
      <div className="contact-hero">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>Contact Us</h1>
          <p className="hero-tagline">
            We’d love to hear from you. Reach out and let’s create something
            meaningful together.
          </p>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="contact-title">
          <h1>Get In Touch</h1>
          <p>
            We'd love to hear from you — get in touch and let's build something
            great together.
          </p>
        </div>

        <div className="contact-container">
          {/* LEFT INFO PANEL */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              Feel free to contact us using the details below, and our team will
              respond as soon as possible
            </p>

            <div className="info-item">
              <Phone size={18} />
              <span>xxxxx-xxxxx</span>
            </div>

            <div className="info-item">
              <Mail size={18} />
              <a href="mailto:Info@codegenzsolutions.com">
                Info@codegenzsolutions.com
              </a>
            </div>

            <div className="info-item">
              <MapPin size={18} />
              <span>Namakkal, Tamil Nadu</span>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/company/codegenzsolutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://www.facebook.com/CodeGenzSolutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
            </div>

            <div className="circle"></div>
            <div className="circle2"></div>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-form">
            <form onSubmit={handleSubmit} noValidate>
              <div className="input-row">
                <div className="input-group">
                  <label>
                    First Name <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? "error" : ""}
                  />
                  {errors.firstName && <small>{errors.firstName}</small>}
                </div>

                <div className="input-group">
                  <label>
                    Last Name <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? "error" : ""}
                  />
                  {errors.lastName && <small>{errors.lastName}</small>}
                </div>
              </div>

              <div className="input-group">
                <label>
                  Phone Number <span className="star">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  maxLength="10"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? "error" : ""}
                />
                {errors.phone && <small>{errors.phone}</small>}
              </div>

              <div className="input-group">
                <label>
                  Email <span className="star">*</span>
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error" : ""}
                />
                {errors.email && <small>{errors.email}</small>}
              </div>

              <div className="input-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button className="send-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
