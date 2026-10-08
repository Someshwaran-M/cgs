import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onComplete }) => {
  const [loading, setLoading] = useState(() => {
    // Show loader only when this page is opened/refreshed
    return !sessionStorage.getItem("cgs_loader_shown");
  });

  useEffect(() => {
    if (!loading) {
      if (onComplete) onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);

      // Remember that loader has already been shown
      sessionStorage.setItem("cgs_loader_shown", "true");

      if (onComplete) {
        onComplete();
      }
    }, 1250);

    return () => clearTimeout(timer);
  }, [loading, onComplete]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.01,
          }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          className="
            fixed
            inset-0
            z-[99999]
            flex
            min-h-[100dvh]
            w-full
            items-center
            justify-center
            overflow-hidden
            bg-white
          "
        >
          {/* Background */}

          <div className="pointer-events-none absolute inset-0">
            <div
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                select-none
                font-['Roboto']
                text-[180px]
                font-black
                tracking-[-0.14em]
                text-[#061525]/[0.018]
                sm:text-[250px]
                md:text-[330px]
              "
            >
              CGS
            </div>

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.12, 0.22, 0.12],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-1/2
                top-1/2
                h-[200px]
                w-[200px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#1769C2]/[0.06]
                blur-[55px]
                sm:h-[250px]
                sm:w-[250px]
              "
            />
          </div>

          {/* Main Loader */}

          <div className="relative z-10 flex flex-col items-center">

            {/* Logo Container */}

            <div
              className="
                relative
                flex
                h-[170px]
                w-[170px]
                items-center
                justify-center
                sm:h-[195px]
                sm:w-[195px]
                md:h-[220px]
                md:w-[220px]
              "
            >

              {/* Outer Circle */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.85,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-[#061525]/[0.07]
                "
              />

              {/* Rotating Blue Accent */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-transparent
                  border-t-[#1769C2]
                  border-r-[#1769C2]/20
                "
              />

              {/* Inner Circle */}

              <div
                className="
                  absolute
                  inset-[14px]
                  rounded-full
                  border
                  border-[#1769C2]/[0.07]
                "
              />

              {/* Logo Plate */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  relative
                  flex
                  h-[108px]
                  w-[108px]
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  shadow-[0_12px_40px_rgba(6,21,37,0.08)]
                  ring-1
                  ring-[#061525]/[0.05]
                  sm:h-[124px]
                  sm:w-[124px]
                  md:h-[140px]
                  md:w-[140px]
                "
              >

                {/* Logo Glow */}

                <div
                  className="
                    absolute
                    inset-[28%]
                    rounded-full
                    bg-[#1769C2]/[0.08]
                    blur-[18px]
                  "
                />

                {/* Logo */}

                <motion.img
                  src="/logo.png"
                  alt="CodeGenZ Solutions"
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                    ease: "easeOut",
                  }}
                  className="
                    relative
                    z-10
                    h-[62px]
                    w-[62px]
                    object-contain
                    sm:h-[72px]
                    sm:w-[72px]
                    md:h-[82px]
                    md:w-[82px]
                  "
                />
              </motion.div>

              {/* Orbit Dot */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-0
                  rounded-full
                "
              >
                <span
                  className="
                    absolute
                    left-1/2
                    top-[-2px]
                    h-[5px]
                    w-[5px]
                    -translate-x-1/2
                    rounded-full
                    bg-[#1769C2]
                    shadow-[0_0_10px_rgba(23,105,194,0.4)]
                  "
                />
              </motion.div>
            </div>

            {/* Brand */}

            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.25,
                duration: 0.4,
              }}
              className="
                mt-6
                flex
                flex-col
                items-center
              "
            >
              <h1
                className="
                  font-['Roboto']
                  text-[14px]
                  font-semibold
                  tracking-[0.2em]
                  text-[#061525]
                  sm:text-[16px]
                "
              >
                CODEGENZ
              </h1>

              <p
                className="
                  mt-1
                  font-['Roboto']
                  text-[7px]
                  font-medium
                  tracking-[0.4em]
                  text-[#1769C2]
                "
              >
                SOLUTIONS
              </p>
            </motion.div>

            {/* Loading Dots */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-6 flex items-center gap-[5px]"
            >
              {[0, 1, 2].map((dot) => (
                <motion.span
                  key={dot}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: dot * 0.12,
                    ease: "easeInOut",
                  }}
                  className="
                    h-[4px]
                    w-[4px]
                    rounded-full
                    bg-[#1769C2]
                  "
                />
              ))}
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;