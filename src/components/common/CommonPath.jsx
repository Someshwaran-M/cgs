import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

// Pages
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Services from "../../Pages/Services";
import Contact from "../../Pages/Contact";
import Project from "../../Pages/Project";

import Pricing from "../../Pages/Menu/Pricing";
import Internship from "../../Pages/Menu/Internship";
import Career from "../../Pages/Menu/Career";
import Testimonials from "../../Pages/Menu/Testimonials";
import Faq from "../../Pages/Menu/Faq";
import Blog from "../../Pages/Menu/Blog";
import FollowUs from "../../Pages/Menu/FollowUs";

const CommonPath = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/pricing" element={<Pricing />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/career" element={<Career />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/follow-us" element={<FollowUs />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default CommonPath;