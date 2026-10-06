import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Loader from "./components/common/Loader";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Project from "./Pages/Project";

import Pricing from "./Pages/Menu/Pricing";
import Internship from "./Pages/Menu/Internship";
import Career from "./Pages/Menu/Career";
import Testimonials from "./Pages/Menu/Testimonials";
import Faq from "./Pages/Menu/Faq";
import Blog from "./Pages/Menu/Blog";
import FollowUs from "./Pages/Menu/FollowUs";

import "./App.css";

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <Loader onComplete={() => setLoaded(true)} />
      )}

      <div
        className={`
          transition-opacity
          duration-700
          ${loaded ? "opacity-100" : "opacity-0"}
        `}
      >
        <BrowserRouter>
          <div className="min-h-screen bg-white">
            <Navbar />

            <main>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/contact" element={<Contact />} />

                {/* Menu Pages */}
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/internship" element={<Internship />} />
                <Route path="/career" element={<Career />} />
                <Route
                  path="/testimonials"
                  element={<Testimonials />}
                />
                <Route path="/faq" element={<Faq />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/follow-us" element={<FollowUs />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;