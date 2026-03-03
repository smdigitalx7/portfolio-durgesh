import { Link, useLocation } from "react-router-dom";

export const Footer = (): JSX.Element => {
  // Footer navigation links data
  const navLinks = [
    { text: "home", path: "/" },
    { text: "work", path: "/work" },
    { text: "services", path: "/services" },
    { text: "about", path: "/about" },
    { text: "contact", path: "/contact" },
  ];

  return (
    <footer className="flex flex-col items-center justify-center  w-full px-4 py-8 md:px-16 md:py-12 bg-transparent">
      {/* <img
        className="w-full h-[659px] absolute bottom-0 left-0 right-0 -z-10"
        alt="Footer gradient"
        src="/footer-gradient.svg"
      /> */}
      <div className="flex flex-col items-center justify-center gap-3 w-full max-w-md md:max-w-xl lg:max-w-2xl mx-auto opacity-20">
        {/* Copyright section */}
        <div className="flex flex-wrap items-center gap-1 opacity-80 justify-center text-center">
          <div className="font-16-16-med ">@durgesh</div>
          <div className="opacity-50 font-medium text-darklight-gray text-[20px]">
            ✦
          </div>
          <div className="font-16-16-med ">durgesh anupoju</div>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-wrap items-center gap-1 sm:gap-6 justify-center">
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={index}
                to={link.path}
                className={`
                  px-2 py-1
                  rounded
                  transition
                  text-darklight-gray
                  opacity-50
                  hover:opacity-80
                  hover:text-black
                  dark:hover:text-white
                  ${
                    isActive
                      ? "opacity-100 text-black dark:text-white font-normal underline underline-offset-4"
                      : ""
                  }
                `}
              >
                {link.text}
              </Link>
            );
          })}
        </nav>
      </div>
      {/* Footer quote with decorative elements */}
      {/* <div className="relative w-full max-w-md md:max-w-xl lg:max-w-2xl h-4 opacity-20 mx-auto mt-16 mb-12">
        <div className="absolute top-[-6px] bottom-0 left-1/2 transform -translate-x-1/2 text-base  text-gray-500 text-center whitespace-nowrap">

          Keep it simple, stupid!.
        </div>
        <div className="absolute w-[90px] md:w-[227px] h-3.5 top-px left-0 opacity-40 bg-[url(/group-1938.png)] bg-[100%_100%] bg-no-repeat" />
        <div className="absolute w-[90px] md:w-[227px] h-3.5 top-px right-0 rotate-180 opacity-40">
          <img
            className="absolute w-full h-full top-0 left-0 -rotate-180"
            alt="Group"
            src="/group-1938-1.png"
          />
        </div>
      </div> */}
      {/* Footer quote with decorative elements */}

      <div className="relative w-full max-w-md md:max-w-xl lg:max-w-2xl h-4 opacity-20 mx-auto mt-8 md:mt-16 mb-8 md:mb-12 z-0 px-2 sm:px-0">
        <div className="text-center absolute top-[-6px] bottom-0 left-1/2 transform -translate-x-1/2 text-sm md:text-base text-gray-400 whitespace-nowrap w-full">
          Keep it simple, stupid!.
        </div>

        {/* Light theme images */}
        <div className="absolute w-[70px] sm:w-[100px] md:w-[127px] h-3.5 top-px left-0 bg-[url(/Rightbar.png)] bg-[100%_100%] bg-no-repeat dark:hidden" />
        <div className="absolute w-[70px] sm:w-[100px] md:w-[127px] h-3.5 top-px right-0 rotate-180 bg-no-repeat dark:hidden">
          <img
            className="absolute w-full h-full top-0 left-0 -rotate-180"
            alt="Group"
            src="/Leftbar.png"
          />
        </div>

        {/* Dark theme images */}
        <div className="absolute w-[70px] sm:w-[100px] md:w-[127px] h-3.5 top-px left-0 opacity-50 bg-[url(/group-1938.png)] bg-[100%_100%] bg-no-repeat hidden dark:block" />
        <div className="absolute w-[140px] sm:w-[100px] md:w-[127px] h-3.5 top-px right-[-65px] sm:right-0  rotate-180 opacity-50 bg-no-repeat hidden dark:block">
          <img
            className="absolute w-full h-full top-0 left-0 -rotate-180"
            alt="Group"
            src="/group-1938-1.png"
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
