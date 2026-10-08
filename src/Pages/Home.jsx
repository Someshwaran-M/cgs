import React from "react";
import { ArrowUpRight } from "lucide-react";

import HomeFaq from "./homepages/HomeFaq";
import HomeTestimonials from "./homepages/HomeTestimonials";
import HomeAbout from "./homepages/HomeAbout";
import AboutPreview from "./homepages/AboutPreview";
import HomeServices from "./homepages/HomeServices";
import HomeTechnology from "./homepages/HomeTechnology";
import HomeProcess from "./homepages/HomeProcess";
import HomeProject from "./homepages/HomeProject";
import HomeCTA from "./homepages/HomeCTA";

import HeroVideo from "./HeroVideo";

const Home = () => {
  return (
    <main className="w-full overflow-hidden bg-white text-[#102A43]">

      {/* =========================================================
          HERO SECTION
      ========================================================== */}

      <section
        id="home"
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-[#071C2E]
          px-6
          pt-[120px]
          pb-20
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* =====================================================
            HOME BACKGROUND IMAGE
        ====================================================== */}

        <div
          className="
            absolute
            inset-0
            z-0
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: "url('/home.png')",
          }}
        />

        {/* =====================================================
            BACKGROUND OVERLAY
        ====================================================== */}

        <div
          className="
            absolute
            inset-0
            z-[1]
            bg-gradient-to-r
            from-[#071C2E]/90
            via-[#071C2E]/65
            to-[#071C2E]/20
          "
        />

        {/* =====================================================
            BACKGROUND GLOW
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-20
            z-[2]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#1769C2]/[0.06]
            blur-[120px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            bottom-0
            z-[2]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#63A9FF]/[0.08]
            blur-[120px]
          "
        />

        {/* =====================================================
            MAIN HERO CONTAINER
        ====================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            w-full
            max-w-[1680px]
            items-center
            gap-14
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-16
            xl:gap-24
          "
        >
          {/* ===================================================
              LEFT CONTENT
          ==================================================== */}

          <div className="max-w-[760px]">
            {/* Eyebrow */}

            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#63A9FF]" />

              <span
                className="
                  text-[10px]
                  font-bold
                  tracking-[0.32em]
                  text-[#63A9FF]
                "
              >
                CODEGENZ SOLUTIONS
              </span>
            </div>

            {/* Main Heading */}

            <h1
              className="
                text-[clamp(48px,5.5vw,88px)]
                font-semibold
                leading-[0.98]
                tracking-[-0.055em]
                text-white
              "
            >
              We build
              <br />

              <span className="text-[#63A9FF]">
                digital
              </span>{" "}
              experiences
              <br />

              that matter.
            </h1>

            {/* Description */}

            <p
              className="
                mt-8
                max-w-[600px]
                text-[15px]
                font-medium
                leading-8
                text-white/75
              "
            >
              CodeGenZ Solutions creates modern websites, web
              applications and digital products designed to help
              businesses grow, connect and move forward.
            </p>

            {/* Buttons */}

            <div
              className="
                mt-10
                flex
                flex-col
                items-start
                gap-4
                sm:flex-row
                sm:items-center
              "
            >
              {/* View Services */}

              <a
                href="/services"
                className="
                  group
                  flex
                  h-[54px]
                  items-center
                  gap-4
                  rounded-full
                  bg-[#1769C2]
                  px-7
                  text-[10px]
                  font-bold
                  tracking-[0.18em]
                  text-white
                  shadow-[0_15px_35px_rgba(23,105,194,0.22)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#0E579F]
                  hover:shadow-[0_20px_45px_rgba(23,105,194,0.28)]
                "
              >
                VIEW OUR SERVICES

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-white/15
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <ArrowUpRight size={14} />
                </span>
              </a>

              {/* Start Project */}

              <a
                href="/get-a-quote"
                className="
                  flex
                  h-[54px]
                  items-center
                  rounded-full
                  border
                  border-white/30
                  bg-white/10
                  px-7
                  text-[10px]
                  font-bold
                  tracking-[0.18em]
                  text-white
                  shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#63A9FF]
                  hover:bg-white/15
                  hover:text-[#63A9FF]
                  hover:shadow-[0_12px_30px_rgba(23,105,194,0.10)]
                "
              >
                START A PROJECT
              </a>
            </div>

            {/* Service Line */}

            <div
              className="
                mt-12
                flex
                flex-wrap
                items-center
                gap-x-5
                gap-y-3
                text-[9px]
                font-semibold
                tracking-[0.18em]
                text-white/60
              "
            >
              <span>WEB DEVELOPMENT</span>

              <span
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-[#63A9FF]
                "
              />

              <span>WEB APPLICATIONS</span>

              <span
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-[#63A9FF]
                "
              />

              <span>DIGITAL SOLUTIONS</span>
            </div>
          </div>

          {/* ===================================================
              RIGHT VIDEO
          ==================================================== */}

          <HeroVideo />
        </div>

        {/* =====================================================
            SCROLL INDICATOR
        ====================================================== */}

        <div
          className="
            absolute
            bottom-7
            left-1/2
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-3
            md:flex
          "
        >
          <span
            className="
              text-[7px]
              font-bold
              tracking-[0.3em]
              text-white/60
            "
          >
            SCROLL TO EXPLORE
          </span>

          <span
            className="
              h-8
              w-px
              bg-[#63A9FF]/50
            "
          />
        </div>
      </section>
     

      {/* =========================================================
          ABOUT PREVIEW
      ========================================================== */}

      <AboutPreview />

      {/* =========================================================
          WHY CODEGENZ
      ========================================================== */}

      <HomeAbout />

      {/* =========================================================
          SERVICES
      ========================================================== */}

      <HomeServices />

      {/* =========================================================
          PROCESS
      ========================================================== */}

      <HomeProcess />

      {/* =========================================================
          TECHNOLOGY
      ========================================================== */}

      <HomeTechnology />

      {/* =========================================================
          PROJECTS
      ========================================================== */}

      <HomeProject />

      {/* =========================================================
          TESTIMONIALS
      ========================================================== */}

      <HomeTestimonials />

      {/* =========================================================
          FAQ
      ========================================================== */}

      <HomeFaq />

      {/* =========================================================
          FINAL CTA
      ========================================================== */}

      <HomeCTA />
    </main>
  );
};

export default Home;