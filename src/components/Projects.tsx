import { useState } from "react";
import { motion } from "framer-motion";
import { MoveUpRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

// Project Data
const projects = [
  {
    id: 1,
    title: "APIGen",
    category: "Development",
    description: "AI-powered tool to generate and run API test cases",
    image: "/APIGen2.png",
    year: "2024 - Present",
    link: "https://apigen.soilsoft.ai/",
    featured: true,
  },
  {
    id: 2,
    title: "Label Design",
    category: "Design",
    description: "Creative and print-ready labels for product branding",
    image: "/label design.png",
    year: 2025,
    link: "https://www.behance.net/gallery/226277819/Label-Design",
  },
  {
    id: 3,
    title: "Travel Website",
    category: "Development",
    description: "Responsive site to explore and book travel packages",
    image: "/travel website2.png",
    year: 2025,
    link: "https://zennationals.com/",
  },
  {
    id: 4,
    title: "Logo Design",
    category: "Branding",
    description: "Unique logo concepts crafted for strong brand recall",
    image: "/logos.png",
    year: 2023,
    link: "https://www.behance.net/gallery/226278863/Logo-Design",
  },
  {
    id: 5,
    title: "Static Websites",
    category: "Development",
    description:
      "Clean and fast-loading websites built with Elementor/Wordpress",
    image: "/websites.png",
    year: 2024,
    link: "https://www.behance.net/gallery/226282517/Website-Design",
  },
  {
    id: 6,
    title: "Brochure Designs",
    category: "Design",
    description: "Elegant layouts for promotional business brochures",
    image: "brouchure.png",
    year: 2024,
    link: "https://www.behance.net/gallery/226279133/Brouchure-Design",
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="work" className="py-6 sm:py-10 px-6 ">
      <div className="container mx-auto  relative z-10">
        <div className="mb-6 text-start flex flex-col sm:flex-row justify-between">
          <h2 className="text-base font-semibold text-gray-600 dark:text-gray-400 opacity-30 uppercase tracking-[.25em] mb-2 ">
            FEATURED PROJECTS
          </h2>
          <Link
            to="/work"
            className="text-sm font-semibold text-gray-600 dark:text-gray-400 opacity-30 mb-2 flex cursor-pointer hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            All Works
            <span>
              <ArrowUpRight className="w-4 h-4 mt-1 ml-1" />
            </span>
          </Link>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className={`relative group rounded-2xl [background:linear-gradient(90deg,rgba(30,28,50,0.05)_0%,rgba(43,22,29,0.05)_100%)] dark:[background:linear-gradient(90deg,rgba(30,28,50,0.5)_0%,rgba(43,22,29,0.5)_100%)]
overflow-hidden transition-transform duration-300 hover:scale-[1.03]
`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div
                className={`relative *: ${
                  hoveredProject === project.id
                    ? "blur-lg bg-white dark:bg-black/50"
                    : ""
                }`}
              >
                <div className="sm:px-8 sm:py-6 px-2 py-4  drop-shadow-2xl ">
                  <div className="aspect-w-1 aspect-h-1 w-full flex justify-center items-end ">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`sm:w-[150px] sm:h-[150px] w-[100px] h-[100px] object-cover transition-all duration-300 
                      `}
                    />
                    {project.featured && (
                      <span className="absolute top-4 sm:top-6 left-26 bg-purple-600/50 text-white text-[8px]  sm:text-xs px-2 py-0.5 sm:px-2 sm:py-1 flex rounded-full z-10">
                        In Progress
                      </span>
                    )}
                  </div>
                  <div className=" text-center sm:mt-6 mt-2">
                    <h4 className="text-gray-700 dark:text-white  text-base sm:text-xl font-bold mb-1">
                      {project.title}
                    </h4>
                    {/* <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {project.description}
                </p> */}
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {project.year}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center   absolute inset-0 p-1 sm:p-4 sm:px-8 transition-opacity duration-300">
                <button
                  className={`  text-gray-800 dark:text-white transition-transform transform duration-300 ${
                    hoveredProject === project.id
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0 bg-white dark:bg-gray-800"
                  }`}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title}`}
                  >
                    <h4 className="text-white dark:text-white sm:text-xl text-base font-bold mb-1">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 text-sm  sm:text-base">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-center mt-2">
                      <MoveUpRight className="w-6 h-6 px-1 py-1 text-gray-100 bg-gray-900 dark:bg-gray-200 dark:text-gray-900 rounded-md " />
                    </div>
                  </a>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
