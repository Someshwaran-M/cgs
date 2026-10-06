import React from "react";
import {
  ArrowUpRight,
  Code2,
  Layers3,
  Globe2,
  Sparkles,
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
          flex
          min-h-screen
          items-center
          overflow-hidden
          px-8
          pt-[130px]
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
            BACKGROUND DECORATION
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-180px]
            top-[80px]
            z-[2]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#1769C2]/[0.055]
            blur-[100px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-180px]
            left-[-120px]
            z-[2]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#63A9FF]/[0.05]
            blur-[100px]
          "
        />

        {/* =====================================================
            MAIN CONTAINER
        ====================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            w-full
            max-w-[1680px]
            grid-cols-2
            items-center
            gap-20
          "
        >

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="max-w-[760px]">

            {/* Eyebrow */}

            <div
              className="
                mb-7
                flex
                items-center
                gap-3
              "
            >
              <span className="h-px w-10 bg-[#1769C2]" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  tracking-[0.32em]
                  text-[#1769C2]
                "
              >
                CODEGENZ SOLUTIONS
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                text-[clamp(52px,5.8vw,92px)]
                font-semibold
                leading-[0.98]
                tracking-[-0.055em]
                text-[#0B243D]
              "
            >
              We build
              <br />

              <span className="text-[#1769C2]">
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
                max-w-[590px]
                text-[15px]
                leading-8
                text-[#60758A]
              "
            >
              CodeGenZ Solutions creates modern websites, web
              applications and digital products designed to help
              businesses grow, connect and move forward.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex items-center gap-4">

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
                  font-semibold
                  tracking-[0.18em]
                  text-white
                  shadow-[0_12px_30px_rgba(23,105,194,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#0F559F]
                  hover:shadow-[0_18px_40px_rgba(23,105,194,0.25)]
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

              <a
                href="#contact"
                className="
                  flex
                  h-[54px]
                  items-center
                  rounded-full
                  border
                  border-[#DCE5ED]
                  bg-white/60
                  px-7
                  text-[10px]
                  font-semibold
                  tracking-[0.18em]
                  text-[#203B58]
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-[#1769C2]
                  hover:bg-white
                  hover:text-[#1769C2]
                "
              >
                START A PROJECT
              </a>

            </div>

            {/* Small trust line */}

            <div
              className="
                mt-12
                flex
                items-center
                gap-5
                text-[9px]
                tracking-[0.18em]
                text-[#8A9AAC]
              "
            >
              <span>WEB DEVELOPMENT</span>

              <span className="h-1 w-1 rounded-full bg-[#1769C2]" />

              <span>WEB APPLICATIONS</span>

              <span className="h-1 w-1 rounded-full bg-[#1769C2]" />

              <span>DIGITAL SOLUTIONS</span>
            </div>

          </div>

          {/* =====================================================
              RIGHT VISUAL
          ====================================================== */}

          <div className="relative flex h-[600px] items-center justify-center">

            {/* Main circle */}

            <div
              className="
                absolute
                h-[440px]
                w-[440px]
                rounded-full
                border
                border-[#DCE8F2]
                bg-white/10
              "
            />

            {/* Inner circle */}

            <div
              className="
                absolute
                h-[340px]
                w-[340px]
                rounded-full
                border
                border-[#1769C2]/10
              "
            />

            {/* Rotating ring */}

            <div
              className="
                absolute
                h-[500px]
                w-[500px]
                rounded-full
                border
                border-dashed
                border-[#1769C2]/15
              "
            />

            {/* Center */}

            <div
              className="
                relative
                flex
                h-[250px]
                w-[250px]
                flex-col
                items-center
                justify-center
                rounded-full
                border
                border-[#DCE5ED]
                bg-white/90
                shadow-[0_30px_80px_rgba(15,65,105,0.12)]
                backdrop-blur-md
              "
            >

              <div
                className="
                  mb-5
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#1769C2]
                  text-white
                  shadow-[0_12px_30px_rgba(23,105,194,0.25)]
                "
              >
                <Code2 size={27} strokeWidth={1.5} />
              </div>

              <p
                className="
                  text-[12px]
                  font-semibold
                  tracking-[0.25em]
                  text-[#0B243D]
                "
              >
                CODEGENZ
              </p>

              <p
                className="
                  mt-2
                  text-[8px]
                  tracking-[0.3em]
                  text-[#8A9AAC]
                "
              >
                DIGITAL SOLUTIONS
              </p>

            </div>

            {/* =================================================
                FLOATING DIGITAL CARD
            ================================================== */}

            <div
              className="
                absolute
                left-[5%]
                top-[20%]
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-[#E2EAF1]
                bg-white/90
                px-4
                py-3
                shadow-[0_15px_40px_rgba(15,65,105,0.08)]
                backdrop-blur-md
              "
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#EEF6FF]
                  text-[#1769C2]
                "
              >
                <Globe2 size={17} />
              </div>

              <div>
                <p
                  className="
                    text-[9px]
                    font-semibold
                    tracking-[0.1em]
                    text-[#203B58]
                  "
                >
                  DIGITAL
                </p>

                <p className="mt-1 text-[8px] text-[#8A9AAC]">
                  Global presence
                </p>
              </div>
            </div>

            {/* =================================================
                FLOATING SOLUTIONS CARD
            ================================================== */}

            <div
              className="
                absolute
                bottom-[17%]
                right-[3%]
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-[#E2EAF1]
                bg-white/90
                px-4
                py-3
                shadow-[0_15px_40px_rgba(15,65,105,0.08)]
                backdrop-blur-md
              "
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#EEF6FF]
                  text-[#1769C2]
                "
              >
                <Layers3 size={17} />
              </div>

              <div>
                <p
                  className="
                    text-[9px]
                    font-semibold
                    tracking-[0.1em]
                    text-[#203B58]
                  "
                >
                  SOLUTIONS
                </p>

                <p className="mt-1 text-[8px] text-[#8A9AAC]">
                  Built for growth
                </p>
              </div>
            </div>

            {/* Accent */}

            <div
              className="
                absolute
                right-[18%]
                top-[12%]
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[#1769C2]
                text-white
                shadow-[0_10px_25px_rgba(23,105,194,0.22)]
              "
            >
              <Sparkles size={16} />
            </div>

          </div>

        </div>

        {/* =====================================================
            BOTTOM SCROLL INDICATOR
        ====================================================== */}

        <div
          className="
            absolute
            bottom-8
            left-1/2
            flex
            -translate-x-1/2
            flex-col
            items-center
            gap-3
          "
        >
          <span
            className="
              text-[7px]
              font-semibold
              tracking-[0.3em]
              text-[#8A9AAC]
            "
          >
            SCROLL TO EXPLORE
          </span>

          <span className="h-8 w-px bg-[#1769C2]/30" />
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
          px-8
          py-10
          xl:px-16
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-[1680px]
            items-center
            justify-between
          "
        >

          <p
            className="
              max-w-[700px]
              text-[13px]
              leading-7
              text-[#60758A]
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
              font-semibold
              tracking-[0.2em]
              text-[#1769C2]
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

      <AboutPreview />

      <HomeAbout />

      <HomeServices />

      <HomeProcess />

      <HomeTechnology />

      <HomeProject />

      <HomeTestimonials />

      <HomeFaq />

      <HomeCTA />

    </main>
  );
};

export default Home;