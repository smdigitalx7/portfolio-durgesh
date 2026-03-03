import { motion } from "framer-motion";
import HeroLogosStrip from "./HeroLogosStrip";

const Hero = () => {
  return (
    <section className="pt-28 pb-10 md:pt-36 md:pb-2 relative overflow-hidden mt-6 sm:mt-8">
      <div className="container mx-auto px-3 sm:px-4 md:px-4 relative z-10">
        {/* Designer, Image, and Coder Layout */}
        <div className="flex  md:flex-row items-center justify-between gap-8 sm:gap-12 md:gap-24 ">
          {/* Designer Section */}
          <div className="w-[30%] md:w-[30%] sm:w-[20%] flex items-center mb-6 md:mb-0 p-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-normal mb-1 sm:mb-4 text-gray-800 dark:text-white text-center">
                designer!
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-2 sm:mb-4 text-[10px] leading-3 sm:text-base md:text-sm text-center">
                Crafting complex ideas into elegant, intuitive designs users
                love.
              </p>
            </motion.div>
          </div>

          {/* Coder Section */}
          <div className="w-[30%] md:w-[30%] sm:w-[20%] flex flex-col items-center mb-6 pr-4 mt-2 sm:mb-10 md:mb-0 p-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-normal mb-1 sm:mb-4 text-gray-800 dark:text-white text-center">
                {"<coder>"}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-2 sm:mb-4 text-[10px] leading-3 sm:text-base md:text-sm text-center">
                Bringing designs to life with clean, efficient, and functional
                code.
              </p>
            </motion.div>
          </div>
        </div>
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <img
            src="/hero.webp"
            alt="Hero"
            className="w-full sm:max-w-md md:max-w-none absolute top-[-110px] sm:top-[-120px] md:top-[-150px] left-0 right-0 bottom-0 object-cover inset-0 -z-30"
          />
        </motion.div>
      </div>

      {/* Introduction Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-32 sm:mt-56 md:mt-10 max-w-3xl mx-auto text-left sm:text-center px-4 sm:p-0"
      >
        <p className=" sm:text-base text-sm text-gray-700 md:text-base dark:text-gray-300 mb-4 leading-relaxed mt-12 sm:mt-72 md:mt-[270px] px-2 sm:px-8">
          Hi! I’m{" "}
          <span className="bg-gradient-to-r from-[#4AB1F1] via-[#566CEC] via-[#D749AF] to-[#FF7C51] bg-clip-text text-transparent font-normal">
            Durgesh Anupoju!
          </span>{" "}
          A wizard who loves design and code. I create clean, user-friendly
          websites and eye-catching designs that tell stories. Most of my time
          goes into building stuff for brands and making digital ideas come to
          life.
        </p>
        <p className="text-sm sm:text-base text-gray-400 px-2 sm:px-8">
          Building what I love at{" "}
          <a
            href="https://www.smdigitalx.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#4AB1F1] to-[#566CEC] bg-clip-text text-transparent font-normal hover:underline"
          >
            @SMDigitalX
          </a>
        </p>
      </motion.div>

      <HeroLogosStrip />
    </section>
  );
};

export default Hero;
