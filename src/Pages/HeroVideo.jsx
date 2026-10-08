import React from "react";

const HeroVideo = () => {
  return (
    <div className="relative w-full">
      {/* =====================================================
          VIDEO OUTER GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -inset-6
          rounded-[40px]
          bg-[#1769C2]/[0.12]
          blur-3xl
        "
      />

      {/* =====================================================
          VIDEO FRAME
      ====================================================== */}

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
        {/* =====================================================
            VIDEO CONTAINER
        ====================================================== */}

        <div
          className="
            relative
            aspect-[16/11]
            overflow-hidden
            rounded-[24px]
            bg-[#071C2E]
          "
        >
          {/* ===================================================
              MAIN VIDEO
          ==================================================== */}

          <video
            src="/background.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />

          {/* ===================================================
              VIDEO COLOR OVERLAY
          ==================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-tr
              from-[#071C2E]/35
              via-transparent
              to-[#1769C2]/10
            "
          />

          {/* ===================================================
              BOTTOM GRADIENT
          ==================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-40
              bg-gradient-to-t
              from-black/40
              via-black/10
              to-transparent
            "
          />

          {/* ===================================================
              TOP RIGHT LIVE BADGE
          ==================================================== */}

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
                relative
                flex
                h-2
                w-2
                items-center
                justify-center
              "
            >
              <span
                className="
                  absolute
                  h-2
                  w-2
                  animate-ping
                  rounded-full
                  bg-[#7CFF4F]/60
                "
              />

              <span
                className="
                  relative
                  h-2
                  w-2
                  rounded-full
                  bg-[#7CFF4F]
                "
              />
            </span>

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

          {/* ===================================================
              BOTTOM LEFT LABEL
          ==================================================== */}

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

          {/* ===================================================
              SMALL CORNER DETAILS
          ==================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-5
              top-5
              h-5
              w-5
              border-l
              border-t
              border-white/30
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-5
              right-5
              h-5
              w-5
              border-b
              border-r
              border-white/30
            "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;