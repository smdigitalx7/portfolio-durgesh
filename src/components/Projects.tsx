import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { getFeaturedProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const SMDIGITALX_TAGLINE = "A web design & software agency.";

export default function Projects() {
  const featured = getFeaturedProjects();
  const { theme } = useTheme();
  const featuredSlice = featured.slice(0, 3);

  return (
    <section id="work" className="py-8 sm:py-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400 opacity-30 uppercase tracking-[.25em] mb-2">
        Featured Projects
          </h2>
          <Link
            to="/work"
            className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors flex items-center gap-1.5"
          >
            All Works
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        <motion.div
          variants={container}
          initial="show"
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5"
        >
          {/* SMDigitalX — mobile/tablet: same card style as others (bg + structure); laptop: full-width banner */}
          <motion.div variants={item} className="lg:col-span-3 min-h-[200px] lg:min-h-0">
            <a
              href="https://www.smdigitalx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 dark:focus:ring-offset-[#0A0A0D]
                p-4 lg:p-0
                lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-6 lg:py-5 lg:scale-100 lg:hover:scale-[1.01]
                bg-gradient-to-br from-[rgba(226,224,253,0.5)] to-[rgba(241,222,228,0.55)] dark:from-[rgba(30,28,50,0.5)] dark:to-[rgba(43,22,29,0.55)]
                shadow-[0_4px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] border-0
                lg:bg-gradient-to-r lg:from-amber-500/15 lg:via-violet-500/12 lg:to-cyan-500/15 lg:dark:from-amber-500/20 lg:dark:via-violet-500/18 lg:dark:to-cyan-500/20 lg:border lg:border-gray-200/80 lg:dark:border-gray-700/50 lg:shadow-none"
            >
              {/* Mobile/tablet: rounded image card same as ProjectCard — rounded-2xl, same shadow */}
              <div className="relative w-full aspect-square max-h-[200px] lg:max-h-none lg:aspect-auto flex-shrink-0 rounded-2xl overflow-hidden lg:hidden shadow-[0_12px_40px_-8px_rgba(0,0,0,0.2)] dark:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.5)] bg-gray-100 dark:bg-gray-800/90">
                <img
                  src={theme === "dark" ? "/smdigitalx-dark.png" : "/smdigitalx-light.png"}
                  alt="SMDigitalX"
                  className="w-full h-full object-contain object-center"
                />
              </div>
              <div className="flex flex-col flex-1 min-w-0 w-full p-2 lg:p-0 text-center lg:text-left lg:flex-row lg:items-center lg:justify-between lg:gap-6">
                <div className="flex items-center justify-center gap-3 flex-1 min-w-0 lg:flex-initial lg:justify-start">
                  <img
                    src={theme === "dark" ? "/smdigitalx-dark.png" : "/smdigitalx-light.png"}
                    alt=""
                    aria-hidden
                    className="h-12 w-12 object-contain flex-shrink-0 rounded-xl shadow-md hidden lg:block"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-normal text-gray-800 dark:text-white">
                      SMDigitalX
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 lg:mt-0.5">
                      {SMDIGITALX_TAGLINE}
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex h-8 w-8 lg:h-9 lg:w-9 items-center justify-center rounded-full bg-gray-800/10 dark:bg-white/10 text-gray-600 dark:text-gray-300 group-hover:bg-gray-800/15 dark:group-hover:bg-white/15 transition-colors flex-shrink-0 mx-auto mt-1 lg:mx-0 lg:mt-0 lg:ml-auto">
                  <ArrowUpRight className="h-4 w-4 lg:h-5 lg:w-5" />
                </span>
              </div>
            </a>
          </motion.div>

          {/* Featured cards — smaller on mobile/tablet (2-col), same on laptop */}
          {featuredSlice.map((project) => (
            <motion.div key={project.id} variants={item} className="min-h-[160px] lg:min-h-[200px]">
              <ProjectCard project={project} openModalOnClick={false} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
