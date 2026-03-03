import {
  BsWhatsapp,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
  BsGithub,
} from "react-icons/bs";
import { MailIcon, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";

const socials = [
  {
    icon: <BsInstagram className="w-5 h-5" />,
    link: "https://instagram.com/yourprofile",
    label: "Instagram",
    color: "from-pink-500 to-yellow-400",
  },
  {
    icon: <BsLinkedin className="w-5 h-5" />,
    link: "https://linkedin.com/in/yourprofile",
    label: "LinkedIn",
    color: "from-blue-600 to-blue-400",
  },
  {
    icon: <BsTwitterX className="w-5 h-5" />,
    link: "https://twitter.com/yourprofile",
    label: "Twitter",
    color: "from-gray-800 to-gray-500",
  },
  {
    icon: <BsGithub className="w-5 h-5" />,
    link: "https://github.com/yourprofile",
    label: "GitHub",
    color: "from-gray-700 to-gray-900",
  },
];

const Contact = () => {
  return (
    <Layout>
      <Header />
      <section className="py-10 mt-32 ">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-normal   mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              About Me
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
              Who am I? Somewhere between a designer's eye and a developer’s
              logic.
            </p>
            {/* Decorative bar */}
            <div className="relative w-[454px] max-w-md md:max-w-xl lg:max-w-2xl h-4 opacity-80 mx-auto mt-16 mb-12">
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
              </div>
              {/* Light theme images */}
              <div className="absolute w-[187px] h-3.5 top-[-6px] left-0 opacity-20 bg-[url(/lightbar.png)] bg-[100%_100%] bg-no-repeat dark:hidden" />
              <div className="absolute w-[127px] h-3.5 top-[-6px] left-[270px] opacity-20 rotate-180 bg-no-repeat dark:hidden">
                <img
                  className="absolute w-[127px] h-3.5 top-0 left-0 -rotate-180"
                  alt="Group"
                  src="/lightbar2.png"
                />
              </div>
              {/* Dark theme images */}
              <div className="absolute w-[187px] h-3.5 top-[-6px] left-0 opacity-30 bg-[url(/group-1938.png)] bg-[100%_100%] bg-no-repeat hidden dark:block" />
              <div className="absolute w-[127px] h-3.5 top-[-6px] left-[270px] rotate-180 opacity-30 bg-no-repeat hidden dark:block">
                <img
                  className="absolute w-[127px] h-3.5 top-0 left-0 -rotate-180"
                  alt="Group"
                  src="/group-1938-1.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>

    // <section
    //   className="flex w-full max-w-4xl mx-auto my-16 relative"
    //   id="contact"
    // >
    //   {/* Background gradient blur */}
    //   <div className="absolute inset-0 z-0 pointer-events-none">
    //     <div className="absolute -top-16 -left-16 w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-30" />
    //     <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-400 rounded-full blur-3xl opacity-30" />
    //   </div>
    //   <div
    //     className="w-full rounded-[20px] px-8 py-8 relative z-10
    //     bg-gradient-to-r from-[rgba(226,224,253,0.5)] to-[rgba(241,222,228,0.55)]
    //     dark:from-[rgba(30,28,50,0.5)] dark:to-[rgba(43,22,29,0.55)] shadow-2xl"
    //   >
    //     <div className="flex flex-col md:flex-row items-center justify-between gap-10">
    //       {/* Left section */}
    //       <div className="w-full md:w-[340px]">
    //         <h2 className="bg-gradient-to-br from-[rgba(240,104,68,1)] via-[rgba(238,76,84,1)] via-[rgba(212,94,149,1)] via-[rgba(156,108,166,1)] to-[rgba(101,131,193,1)] bg-clip-text text-transparent font-normal text-[44px] tracking-[-0.88px] leading-[52.8px] font-['Inter',Helvetica]">
    //           Let's Connect!
    //         </h2>
    //         <p className="mt-4 opacity-80 font-medium text-[20px] tracking-[-0.36px] leading-8">
    //           Have a project, idea, or just want to chat? Reach out anytime—I'm
    //           always open for creative collaborations, freelance work, or a
    //           friendly hello!
    //         </p>
    //         <div className="mt-6 flex flex-col gap-3 text-gray-700 dark:text-gray-200 text-[17px]">
    //           <div className="flex items-center gap-2">
    //             <MailIcon className="w-5 h-5 text-purple-500" />
    //             <a
    //               href="mailto:hi@designdurgesh.com"
    //               className="hover:underline"
    //             >
    //               hi@designdurgesh.com
    //             </a>
    //           </div>
    //           <div className="flex items-center gap-2">
    //             <BsWhatsapp className="w-5 h-5 text-green-500" />
    //             <a
    //               href="https://wa.me/919999999999"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="hover:underline"
    //             >
    //               +91 99999 99999
    //             </a>
    //           </div>
    //           <div className="flex items-center gap-2">
    //             <MapPin className="w-5 h-5 text-blue-500" />
    //             <span>Hyderabad, India</span>
    //           </div>
    //         </div>
    //         <div className="flex gap-4 mt-7">
    //           {socials.map((s, i) => (
    //             <a
    //               key={i}
    //               href={s.link}
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               aria-label={s.label}
    //               className={`p-2 rounded-full bg-gradient-to-br ${s.color} text-white hover:scale-110 transition`}
    //             >
    //               {s.icon}
    //             </a>
    //           ))}
    //         </div>
    //       </div>
    //       {/* Right section - chat image */}
    //       <div className="relative w-[275px] h-[275px] mt-8 md:mt-0 flex-shrink-0 flex flex-col items-center">
    //         {/* Glow background */}
    //         <motion.div
    //           initial={{ opacity: 0, scale: 0.8 }}
    //           whileInView={{ opacity: 1, scale: 1 }}
    //           transition={{ duration: 0.7 }}
    //           className="absolute inset-0 z-0"
    //         >
    //           <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 blur-2xl opacity-40" />
    //         </motion.div>
    //         {/* Chat/Contact image */}
    //         <div className="relative w-[220px] h-[220px] z-10 flex items-center justify-center">
    //           <img
    //             className="w-[220px] h-[220px] rounded-full object-cover border-4 border-white shadow-xl"
    //             alt="Chat Illustration"
    //             src="/chat-illustration.png" // Replace with your chat/contact image
    //           />
    //         </div>
    //         {/* Handwritten "Love" or signature below image */}
    //         <div className="mt-4">
    //           <img
    //             src="/love-light.png"
    //             alt="Love Signature"
    //             className="w-36 dark:hidden"
    //           />
    //           <img
    //             src="/love-dark.png"
    //             alt="Love Signature"
    //             className="w-36 hidden dark:block"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Contact;
