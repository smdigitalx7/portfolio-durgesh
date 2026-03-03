import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import DecorativeBar from "../components/DecorativeBar";
import ProjectCard from "../components/ProjectCard";
import ProjectCaseStudyPanel from "../components/ProjectCaseStudyPanel";
import {
  PROJECT_CATEGORIES,
  getProjectsByCategory,
  getProjectById,
} from "../data/projects";
import type { Project, ProjectCategory } from "../data/projects";

const filterButtonBase =
  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-[#0A0A0D]";
const filterButtonInactive =
  "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 focus:ring-gray-400/50";
const filterButtonActive =
  "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white shadow-lg focus:ring-purple-400/50";

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.2 } },
};

export default function Work() {
  const [category, setCategory] = useState<ProjectCategory | "All">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(
    () => getProjectsByCategory(category),
    [category]
  );

  const handleOpenPanel = (id: number) => {
    const project = getProjectById(id);
    if (project) setSelectedProject(project);
  };

  return (
    <>
      <Layout>
        <Header />
        <section
          id="work"
          className="py-10 mt-20 sm:mt-32 px-4 sm:px-6 md:px-8 min-h-screen"
        >
          <div className="container mx-auto px-2 sm:px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal mb-4 sm:mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                Works
              </h1>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
                It has been an absolute pleasure to put my heart and soul into
                these projects. Browse by category or click a project for the
                full case study.
              </p>
              <DecorativeBar />
            </div>

            <motion.div
              className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {PROJECT_CATEGORIES.map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setCategory(value)}
                  className={`${filterButtonBase} ${
                    category === value ? filterButtonActive : filterButtonInactive
                  }`}
                >
                  {label}
                </button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              {filteredProjects.length === 0 ? (
                <motion.p
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-gray-500 dark:text-gray-400 py-12"
                >
                  No projects in this category.
                </motion.p>
              ) : (
                <motion.div
                  key={category}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                >
                  <AnimatePresence mode="wait">
                    {filteredProjects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        custom={index}
                      >
                        <ProjectCard
                          project={project}
                          openModalOnClick
                          onClick={() => handleOpenPanel(project.id)}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
        <Footer />
      </Layout>

      <ProjectCaseStudyPanel
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
