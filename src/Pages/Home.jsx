import React from "react";

import {
  ArrowUpRight,
  Code2,
} from "lucide-react";

import HomeFaq from "./homepages/HomeFaq";
import HomeTestimonials from "./homepages/HomeTestimonials";
import Pricing from "./Menu/Pricing";
import HomeAbout from "./homepages/HomeAbout";
import AboutPreview from "./homepages/AboutPreview";
import HomeServices from "./homepages/HomeServices";
import HomeTechnology from "./homepages/HomeTechnology";
import HomeProcess from "./homepages/HomeProcess";
import HomeProject from "./homepages/HomeProject";
import HomeCTA from "./homepages/HomeCTA";

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


            {/* =================================================
                BUTTONS
            ================================================== */}

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

              {/* View Work */}

              <a
                href="#projects"
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

                VIEW OUR WORK

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
                href="#contact"
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


            {/* =================================================
                SERVICE LINE
            ================================================== */}

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

              <span>
                WEB DEVELOPMENT
              </span>

              <span
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-[#63A9FF]
                "
              />

              <span>
                WEB APPLICATIONS
              </span>

              <span
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-[#63A9FF]
                "
              />

              <span>
                DIGITAL SOLUTIONS
              </span>

            </div>

          </div>


          {/* ===================================================
              RIGHT VIDEO
          ==================================================== */}

          <div
            className="
              relative
              w-full
            "
          >

            {/* Video Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -inset-6
                rounded-[38px]
                bg-[#1769C2]/[0.12]
                blur-3xl
              "
            />


            {/* Video Frame */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-white/20
                bg-[#071C2E]/80
                p-2
                shadow-[0_30px_90px_rgba(0,0,0,0.30)]
                backdrop-blur-sm
              "
            >

              {/* Video */}

              <div
                className="
                  relative
                  aspect-[16/11]
                  overflow-hidden
                  rounded-[24px]
                  bg-[#071C2E]
                "
              >

                <video
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                  "
                  src="/background.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />


                {/* Video Overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-tr
                    from-[#071C2E]/30
                    via-transparent
                    to-[#1769C2]/10
                  "
                />


                {/* Bottom Gradient */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-32
                    bg-gradient-to-t
                    from-black/30
                    to-transparent
                  "
                />


                {/* Digital Innovation Label */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    rounded-full
                    border
                    border-white/20
                    bg-black/30
                    px-4
                    py-2
                    backdrop-blur-md
                  "
                >

                  <span
                    className="
                      text-[8px]
                      font-semibold
                      tracking-[0.25em]
                      text-white
                    "
                  >
                    DIGITAL INNOVATION
                  </span>

                </div>


                {/* Live Indicator */}

                <div
                  className="
                    absolute
                    right-5
                    top-5
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-black/30
                    px-3
                    py-2
                    backdrop-blur-md
                  "
                >

                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#7CFF4F]
                    "
                  />

                  <span
                    className="
                      text-[8px]
                      font-semibold
                      tracking-[0.18em]
                      text-white
                    "
                  >
                    LIVE
                  </span>

                </div>

              </div>

            </div>


           

          </div>

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
          INTRO STRIP
      ========================================================== */}

      <section
        className="
          border-y
          border-[#E9EFF4]
          bg-[#F8FAFC]
          px-6
          py-10
          sm:px-8
          xl:px-16
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-[1680px]
            flex-col
            items-start
            justify-between
            gap-6
            lg:flex-row
            lg:items-center
          "
        >

          <p
            className="
              max-w-[700px]
              text-[13px]
              font-medium
              leading-7
              text-[#52697D]
            "
          >
            From concept to launch, we combine creativity,
            technology and strategy to create digital solutions
            that are practical, scalable and built around your goals.
          </p>


          <a
            href="#services"
            className="
              group
              flex
              items-center
              gap-3
              text-[9px]
              font-bold
              tracking-[0.2em]
              text-[#1769C2]
              transition-colors
              duration-300
              hover:text-[#0E579F]
            "
          >

            EXPLORE SERVICES

            <ArrowUpRight
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />

          </a>

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