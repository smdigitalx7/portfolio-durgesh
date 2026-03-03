import { BsWhatsapp, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MailIcon, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DecorativeBar from "../components/DecorativeBar";

const Contact = () => {
  return (
    <Layout>
      <Header />
      <section className="py-10 mt-20 sm:mt-32 px-4 sm:px-6 md:px-8 min-h-screen">
        <div className="container mx-auto px-2 sm:px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
            {/* <p className="text-sm font-medium text-gray-600 dark:text-gray-400 opacity-30 uppercase tracking-[.25em] mb-2">
              Get in Touch
            </p> */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal mb-4 sm:mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              Contact
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
              Got a project, idea, or just want to say hi? My inbox is always open.
            </p>
            <DecorativeBar />
          </div>
        </div>

        {/* Say Hi / Contact CTA — same gradient as design system */}
        <div className="container mx-auto px-2 sm:px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full rounded-2xl px-6 md:px-8 py-6 md:py-8
            bg-gradient-to-r from-[rgba(226,224,253,0.5)] to-[rgba(241,222,228,0.55)]
            dark:from-[rgba(30,28,50,0.5)] dark:to-[rgba(43,22,29,0.55)]
            shadow-[0_4px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
        >
          <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-10">
            <div className="w-full md:w-[340px]">
              <h2 className="font-display bg-gradient-to-br from-[rgba(240,104,68,1)] via-[rgba(238,76,84,1)] via-[rgba(212,94,149,1)] via-[rgba(156,108,166,1)] to-[rgba(101,131,193,1)] bg-clip-text text-transparent font-normal text-3xl sm:text-4xl md:text-[44px] leading-tight">
                Start a Conversation
              </h2>

              <div className="mt-6 space-y-3 text-base text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <MailIcon className="w-5 h-5 text-purple-500" />
                  <a href="mailto:hi@thedurgesh.in" className="hover:underline hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                    hi@thedurgesh.in
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <BsWhatsapp className="w-5 h-5 text-green-500" />
                  <a
                    href="https://wa.link/v4tpbs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    +91 75692 59998
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span>Amalapuram, AP</span>
                </div>
                <div className="flex items-center gap-2">
                  <BsLinkedin className="w-5 h-5 text-blue-600" />
                  <a
                    href="https://www.linkedin.com/in/durgesh-anupoju/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    durgesh-anupoju
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <BsInstagram className="w-5 h-5 text-pink-500" />
                  <a
                    href="https://www.instagram.com/durgesh.psd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    @durgesh.psd
                  </a>
                </div>
              </div>
            </div>

            {/* Right section - image */}
            <div className="relative w-full max-w-[313px] h-auto md:w-[275px] md:h-[275px]">
              <div className="relative w-full h-auto">
                <img
                  className="absolute w-full h-[300px] top-[17px] left-0 blur-[32px] object-cover opacity-50 rounded-xl"
                  alt="Profile background"
                  src="/rectangle-1.png"
                />
                <img
                  className="relative w-full h-[275px] object-cover rounded-xl z-10"
                  alt="Profile"
                  src="/rectangle-1.png"
                />
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default Contact;
