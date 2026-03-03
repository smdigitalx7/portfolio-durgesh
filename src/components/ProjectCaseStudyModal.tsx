import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { getCategoryLabel } from "../data/projects";
import type { Project } from "../data/projects";

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "tween", duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 10,
    transition: { type: "tween", duration: 0.2 } },
};

export default function ProjectCaseStudyModal({
  project,
  onClose,
}: Readonly<ProjectCaseStudyModalProps>) {
  useEffect(() => {
    if (!project) return;
    const handleEscape = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence mode="wait">
      {project && (
        <>
          <motion.div
            role="presentation"
            aria-hidden="true"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="case-study-title"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="pointer-events-auto w-full max-w-lg sm:max-w-xl rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] bg-white dark:bg-gray-900"
            >
              {/* Header: image at top only, bottom filled with gradient (light/dark) */}
              <div className="relative flex-shrink-0">
                <div className="relative h-44 sm:h-52">
                  <img
                    src={project.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                  {/* Bottom of header filled with gradient — light in light mode, dark in dark mode */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-28 sm:h-32 bg-gradient-to-t from-white via-white/95 to-transparent dark:from-gray-900 dark:via-gray-900/95 dark:to-transparent"
                    aria-hidden="true"
                  />
                </div>
                <div className="absolute bottom-4 left-0 right-0 px-5 sm:px-6">
                  <span className="inline-block text-[10px] font-normal uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20 dark:bg-white/10 text-white">
                    {getCategoryLabel(project.category)}
                  </span>
                  <h2
                    id="case-study-title"
                    className="text-xl sm:text-2xl font-normal text-gray-900 dark:text-white tracking-tight mt-0.5"
                  >
                    {project.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">
                    {project.year}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-3 right-3 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body: scrollable content */}
              <div className="flex-1 overflow-y-auto px-5 sm:px-6 pb-6 pt-2">
                {project.caseStudy && (
                  <div className="space-y-5 mb-6">
                    <section>
                      <h3 className="text-xs font-normal text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                        Challenge
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {project.caseStudy.problem}
                      </p>
                    </section>
                    <section>
                      <h3 className="text-xs font-normal text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                        What I did
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {project.caseStudy.solution}
                      </p>
                    </section>
                  </div>
                )}

                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-normal text-sm hover:opacity-95 transition-opacity"
                >
                  View project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
