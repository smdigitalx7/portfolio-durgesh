import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import DecorativeBar from "../components/DecorativeBar";

const About = () => {
  return (
    <Layout>
      <Header />
      <section className="py-10 mt-20 sm:mt-32 px-4 sm:px-6 md:px-8 min-h-screen">
        <div className="container mx-auto px-2 sm:px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
            {/* <p className="text-sm font-medium text-gray-600 dark:text-gray-400 opacity-30 uppercase tracking-[.25em] mb-2">
              About Me
            </p> */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal mb-4 sm:mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              Who I Am
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
              Somewhere between a designer’s eye and a developer’s logic.
            </p>
            <DecorativeBar />
          </div>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-left"
            >
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 opacity-30 uppercase tracking-[.25em] mb-3">
                My Story
              </p>
              <p className="mb-6 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                My journey began with a spark of curiosity and a sketchbook full
                of ideas. Over the years, I’ve turned that into a career—building
                everything from sleek web apps to bold brand identities. Whether
                I’m designing a pixel-perfect interface or architecting a
                frontend, I’m driven by one goal: make things that matter.
              </p>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 opacity-30 uppercase tracking-[.25em] mb-3">
                What Drives Me
              </p>
              <ul className="mb-6 text-gray-700 dark:text-gray-300 space-y-2 text-base leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 dark:text-purple-400 mt-0.5">✦</span>
                  Crafting seamless, human-centered digital experiences
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 dark:text-purple-400 mt-0.5">✦</span>
                  Bringing brands to life with distinct visual identities
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 dark:text-purple-400 mt-0.5">✦</span>
                  Solving complex problems with creative code
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 dark:text-purple-400 mt-0.5">✦</span>
                  Collaborating with passionate people
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 dark:text-purple-400 mt-0.5">✦</span>
                  Learning, experimenting, and sharing knowledge
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-400 text-base leading-relaxed">
                When I’m not building for the web, you’ll find me sketching,
                exploring new tech, or sipping coffee while brainstorming the
                next big thing for{" "}
                <a
                  href="https://www.smdigitalx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:opacity-90"
                >
                  SMDigitalX
                </a>
                .
              </p>
            </motion.div>
          </div>

          {/* Signature */}
          <motion.div
            className="flex flex-col items-center justify-center mt-16 sm:mt-20 mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img src="/me-light.png" alt="Durgesh" className="dark:hidden" />
              <img src="/me-dark.png" alt="Durgesh" className="hidden dark:block" />
            </div>
            <div>
              <img src="/love-dark.png" alt="" className="w-36 mt-[-16px] dark:hidden" />
              <img src="/love-light.png" alt="" className="w-36 mt-[-16px] hidden dark:block" />
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default About;
