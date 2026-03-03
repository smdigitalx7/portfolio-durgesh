import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const LOGOS = [
  "/Logos/VSP_Logo.png",
  "/Logos/testverse_logo1.png",
  "/Logos/Adhyawalls-logo.png",
  "/Logos/nexzen-logo.png",
  "/Logos/Velocity-logo.png",
  "/Logos/NeoSouth%20Logo_.png",
  "/Logos/ascuel.png",
  "/Logos/sslogo.png",
  "/Logos/InstaPro.png",
  "/Logos/TeluguTimes_Logo.png",
];

const HOVER_MESSAGE = "Partners we've worked with";

export default function HeroLogosStrip() {
  const [hovered, setHovered] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const fadeColor = isDark ? "#0A0A0D" : "#ffffff";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="mt-10 sm:mt-12 md:mt-14 w-full px-4"
    >
      <div
        role="region"
        aria-label="Featured partners"
        tabIndex={0}
        className="relative py-5 sm:py-6 overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        {/* Scrolling logos - duplicate set for seamless loop */}
        <div className="relative w-full overflow-hidden">
          <div
            className={`flex shrink-0 gap-12 sm:gap-16 md:gap-12 items-center w-max animate-logo-scroll ${hovered ? "pause-scroll" : ""}`}
          >
            {[...LOGOS, ...LOGOS].map((src, i) => (
              <img
                key={`${src}-${i}`}
                src={src}
                alt=""
                className="h-12 sm:h-8 md:h-16 w-auto max-w-[120px] object-contain object-center opacity-50 pointer-events-none select-none flex-shrink-0"
                draggable={false}
              />
            ))}
          </div>
          {/* Left fade - use theme from context to avoid flash on theme switch */}
          <div
            className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 pointer-events-none z-[1]"
            style={{
              background: `linear-gradient(to right, ${fadeColor}, transparent)`,
            }}
            aria-hidden
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 pointer-events-none z-[1]"
            style={{
              background: `linear-gradient(to left, ${fadeColor}, transparent)`,
            }}
            aria-hidden
          />
        </div>

        {/* Hover: light overlay, reduced dark opacity, blur + message */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out pointer-events-none z-[2] ${
            hovered ? "opacity-100 backdrop-blur-sm" : "opacity-0 backdrop-blur-none bg-transparent"
          }`}
          style={hovered ? { backgroundColor: isDark ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.5)" } : undefined}
          aria-hidden
        >
          <p
            className="text-center text-sm sm:text-base font-normal tracking-wide"
            style={{ color: isDark ? "#f3f4f6" : "#1f2937" }}
          >
            {HOVER_MESSAGE}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
