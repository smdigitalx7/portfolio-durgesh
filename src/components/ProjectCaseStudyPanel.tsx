import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { getCategoryLabel } from "../data/projects";
import type { Project } from "../data/projects";

const panelVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { type: "tween", duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function ProjectCaseStudyPanel({
  project,
  onClose,
}: Readonly<{ project: Project | null; onClose: () => void }>) {
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
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 bottom-0 sm:top-4 sm:right-4 sm:bottom-4 z-[101] w-full max-w-full sm:max-w-md overflow-hidden rounded-none sm:rounded-l-2xl shadow-2xl flex flex-col"
          >
            {/* Top half: image at low opacity; gradient overlay so top = image visible, bottom = fades to solid */}
            <div className="flex-shrink-0 relative w-full h-[42vh] min-h-[200px] max-h-[280px] bg-gray-100 dark:bg-gray-900 overflow-hidden">
              <img
                src={project.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-center opacity-30 dark:opacity-25"
              />
              {/* Gradient: transparent at top (image shows) → solid at bottom (fades away) */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.6) 35%, rgba(255,255,255,1) 70%)",
                }}
                aria-hidden
              />
              <div
                className="absolute inset-0 pointer-events-none hidden dark:block"
                style={{
                  background: "linear-gradient(to bottom, transparent 0%, rgba(10,10,13,0.5) 40%, rgba(10,10,13,1) 75%)",
                }}
                aria-hidden
              />
              <div className="absolute top-3 left-3 right-12 flex items-start justify-between gap-2">
                <span className="text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded bg-gray-100 dark:bg-gray-700/90 text-gray-600 dark:text-gray-300">
                  {getCategoryLabel(project.category)}
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-full bg-gray-100/90 dark:bg-gray-700/90 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400/50"
                  aria-label="Close case study"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute bottom-3 left-0 right-0 px-4">
                <h2
                  id="case-study-title"
                  className="text-lg font-normal text-gray-900 dark:text-white tracking-tight"
                >
                  {project.title}
                </h2>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{project.year}</p>
              </div>
            </div>

            {/* Bottom: solid background, scrollable content */}
            <div className="flex-1 overflow-y-auto bg-white dark:bg-[#0A0A0D] rounded-b-none sm:rounded-bl-2xl">
              <div className="p-4 sm:p-5">
                {project.caseStudy && (
                  <div className="space-y-4 mb-5">
                    <section>
                      <h3 className="text-xs font-normal text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                        Challenge
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {project.caseStudy.problem}
                      </p>
                    </section>
                    <section>
                      <h3 className="text-xs font-normal text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                        What I did
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {project.caseStudy.solution}
                      </p>
                    </section>
                  </div>
                )}

                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
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
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-normal text-sm hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-[#0A0A0D]"
                >
                  View project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
