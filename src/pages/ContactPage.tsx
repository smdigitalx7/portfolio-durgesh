import {
  BsWhatsapp,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
  BsGithub,
} from "react-icons/bs";
import { MailIcon, MapPin } from "lucide-react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DecorativeBar from "../components/DecorativeBar";

const Contact = () => {
  return (
    <Layout>
      <Header />
      <section className="py-10 mt-20 sm:mt-32 px-2 sm:px-6 md:px-8 ">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center ">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              Contact
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
              Got a project, idea, or just want to say hi? Don’t be shy—my inbox
              is always open.
            </p>

            {/* Decorative bar */}
            {/* <div className="relative w-[454px] max-w-md md:max-w-xl lg:max-w-2xl h-4 opacity-80 mx-auto mt-16 mb-12">
              <div className="text-center absolute top-[-6px] bottom-0 left-1/2 transform -translate-x-1/2 text-base text-gray-400">
                <img
                  className="w-full dark:hidden"
                  alt="Decorative"
                  src="/Vector.png"
                />
                <img
                  className="w-full hidden dark:block"
                  alt="Decorative"
                  src="/Vectorlight.png"
                />
              </div> */}
            {/* Light theme images */}
            {/* <div className="absolute w-[187px] h-3.5 top-[-6px] left-0 opacity-20 bg-[url(/lightbar.png)] bg-[100%_100%] bg-no-repeat dark:hidden" />
              <div className="absolute w-[127px] h-3.5 top-[-6px] left-[270px] opacity-20 rotate-180 bg-no-repeat dark:hidden">
                <img
                  className="absolute w-[127px] h-3.5 top-0 left-0 -rotate-180"
                  alt="Group"
                  src="/lightbar2.png"
                />
              </div> */}
            {/* Dark theme images */}
            {/* <div className="absolute w-[187px] h-3.5 top-[-6px] left-0 opacity-30 bg-[url(/group-1938.png)] bg-[100%_100%] bg-no-repeat hidden dark:block" />
              <div className="absolute w-[127px] h-3.5 top-[-6px] left-[270px] rotate-180 opacity-30 bg-no-repeat hidden dark:block">
                <img
                  className="absolute w-[127px] h-3.5 top-0 left-0 -rotate-180"
                  alt="Group"
                  src="/group-1938-1.png"
                />
              </div>
            </div>*/}
          </div>
          <DecorativeBar />
        </div>

        {/* Gradient Box */}
        <div
          className="w-full rounded-[20px] px-6 md:px-8 py-6 md:py-8
            bg-gradient-to-r from-[rgba(226,224,253,0.5)] to-[rgba(241,222,228,0.55)]
            dark:from-[rgba(30,28,50,0.5)] dark:to-[rgba(43,22,29,0.55)]"
        >
          <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-10 ">
            {/* Left section */}
            <div className="w-full md:w-[340px]">
              <h2 className="bg-gradient-to-br from-[rgba(240,104,68,1)] via-[rgba(238,76,84,1)] via-[rgba(212,94,149,1)] via-[rgba(156,108,166,1)] to-[rgba(101,131,193,1)] bg-clip-text text-transparent font-bold text-[36px] md:text-[44px] leading-tight font-['Inter',Helvetica]">
                Start a Conversation
              </h2>

              <div className="mt-6 space-y-3 text-[16px] text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <MailIcon className="w-5 h-5 text-purple-500" />
                  <a href="mailto:hi@thedurgesh.in" className="hover:underline">
                    hi@thedurgesh.in
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <BsWhatsapp className="w-5 h-5 text-green-500" />
                  <a
                    href="https://wa.link/v4tpbs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
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
                    className="hover:underline"
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
                    className="hover:underline"
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
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default Contact;
