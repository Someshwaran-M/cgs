import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2200;
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;

        if (next >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            setLoading(false);

            if (onComplete) {
              onComplete();
            }
          }, 350);

          return 100;
        }

        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            overflow-hidden
            bg-[#061525]
          "
        >
          {/* Background lines */}

          <div className="absolute inset-0 opacity-[0.035]">
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[700px]
                w-[700px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-white
              "
            />

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[520px]
                w-[520px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-white
              "
            />
          </div>

          {/* Main loader */}

          <div className="relative z-10 flex w-[320px] flex-col items-center">
            {/* Logo */}

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              {/* Logo glow */}

              <div
                className="
                  absolute
                  inset-0
                  scale-75
                  rounded-full
                  bg-[#1769C2]/20
                  blur-[45px]
                "
              />

              <img
                src="/logo.png"
                alt="CodeGenZ Solutions"
                className="
                  relative
                  h-[105px]
                  w-auto
                  object-contain
                  brightness-110
                "
              />
            </motion.div>

            {/* Brand */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-4 text-center"
            >
              <h1
                className="
                  text-[17px]
                  font-semibold
                  tracking-[0.32em]
                  text-white
                "
              >
                CODEGENZ
              </h1>

              <p
                className="
                  mt-2
                  text-[7px]
                  font-medium
                  tracking-[0.38em]
                  text-[#63A9FF]
                "
              >
                SOLUTIONS
              </p>
            </motion.div>

            {/* Loading bar */}

            <div className="mt-12 w-full">
              <div
                className="
                  relative
                  h-[1px]
                  w-full
                  overflow-hidden
                  bg-white/[0.10]
                "
              >
                <motion.div
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    bg-[#3B8DFF]
                  "
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>

              {/* Progress */}

              <div className="mt-3 flex items-center justify-between">
                <span
                  className="
                    text-[7px]
                    font-medium
                    tracking-[0.28em]
                    text-white/30
                  "
                >
                  INITIALIZING
                </span>

                <span
                  className="
                    text-[8px]
                    font-semibold
                    tracking-[0.15em]
                    text-[#63A9FF]
                  "
                >
                  {Math.floor(progress)
                    .toString()
                    .padStart(2, "0")}
                  %
                </span>
              </div>
            </div>

            {/* Bottom branding */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="
                mt-8
                text-[6px]
                font-medium
                tracking-[0.3em]
                text-white/20
              "
            >
              A GENZACY COMPANY
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;