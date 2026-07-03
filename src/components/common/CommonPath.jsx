import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../layout/Header";
import Footer from "../layout/Footer";

import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import CareerPage from "../pages/CareerPage";
import InternshipsPage from "../pages/InternshipsPage";
import ContactPage from "../pages/ContactPage";

import { PageLoaderProvider } from "./PageLoaderProvider";
import CursorFollower from "./CursorFollower";

function CommonPath() {
  return (
    <Router>
      <PageLoaderProvider>
        {/* Global Cursor */}
        <CursorFollower />

        {/* Navbar */}
        <Header />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/internships" element={<InternshipsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </PageLoaderProvider>
    </Router>
  );
}

export default CommonPath;
