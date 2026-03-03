import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { getStatusBadge } from "../data/projects";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
  openModalOnClick?: boolean;
  /** Show description below title in card */
  showDescription?: boolean;
  /** Wide layout: image left, content right (for Work page) */
  layout?: "default" | "wide";
}

/** Reference-style: blur + scale + opacity */
const blurLayerTransition = { duration: 0.28, ease: "easeInOut" };
/** Overlay text: slide up + fade on hover */
const textTransition = { duration: 0.26, ease: "easeOut" };

/** More minimal: lighter gradient, smaller pill, full rounded */
function statusBadgeClass(
  badge: "New" | "In Progress" | "Completed" | "Closed"
): string {
  const base = "rounded-full backdrop-blur-sm text-white/90 text-[9px] px-1.5 py-0.5 font-medium uppercase tracking-wide";
  if (badge === "New") return `${base} bg-gradient-to-r from-emerald-500/40 to-teal-500/40`;
  if (badge === "In Progress") return `${base} bg-gradient-to-r from-amber-500/40 to-emerald-500/40`;
  if (badge === "Closed") return `${base} bg-gradient-to-r from-gray-500/35 to-gray-600/35`;
  return `${base} bg-gradient-to-r from-purple-500/40 to-blue-500/40`;
}

export default function ProjectCard({
  project,
  onClick,
  openModalOnClick = false,
  showDescription = false,
  layout = "default",
}: Readonly<ProjectCardProps>) {
  const [hovered, setHovered] = useState(false);
  const { theme } = useTheme();
  const isWide = layout === "wide";
  const dark = theme === "dark";
  const overlay = dark
    ? { bg: "bg-black/50", tint: "bg-black/45", text: "text-white", muted: "text-white/90", icon: "bg-white/25 text-white" }
    : { bg: "bg-white/50", tint: "bg-white/50", text: "text-gray-900", muted: "text-gray-700", icon: "bg-black/15 text-gray-900" };

  const hoverOverlay = (
    <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-1.5 p-6 pointer-events-none text-center overflow-hidden">
      {/* Blur layer: solid theme color, no gradient — animates blur + scale + opacity */}
      <motion.div
        className={`absolute inset-0 rounded-2xl origin-center ${overlay.bg}`}
        aria-hidden
        initial={false}
        animate={{
          opacity: hovered ? 1 : 0,
          filter: hovered ? "blur(0px)" : "blur(18px)",
          scale: hovered ? 1 : 0.6,
          y: hovered ? 0 : 7,
        }}
        transition={blurLayerTransition}
      />
      {/* Backdrop blur + solid overlay (dark or light by theme) */}
      <motion.div
        className={`absolute inset-0 rounded-2xl ${overlay.tint}`}
        aria-hidden
        initial={false}
        animate={{
          opacity: hovered ? 1 : 0,
          backdropFilter: hovered ? "blur(12px)" : "blur(0px)",
        }}
        transition={blurLayerTransition}
      />
      {/* Overlay content: slide up + fade in on hover */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center gap-1.5"
        initial={false}
        animate={{
          opacity: hovered ? 1 : 0,
          y: hovered ? 0 : 12,
        }}
        transition={textTransition}
      >
        <span className={`font-normal text-sm ${overlay.text}`}>{project.title}</span>
        <span className={`text-xs line-clamp-2 ${overlay.muted}`}>{project.description}</span>
        <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl mt-0.5 ${overlay.icon}`}>
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </motion.div>
    </div>
  );

  const wrapperClass =
    "group relative flex flex-col rounded-2xl overflow-hidden p-4 " +
    "bg-white dark:bg-gray-800/80 border-0 " +
    "shadow-[0_4px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] " +
    "hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18)] dark:hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)] " +
    "transition-[transform,box-shadow] duration-300 ease-out hover:scale-[1.02] " +
    "min-h-[200px]";

  const statusBadge = getStatusBadge(project.status);

  const defaultCard = (
    <>
      <div className="relative h-full flex flex-col">
        <div className="relative w-full aspect-square max-h-[160px] lg:max-h-[220px] flex-shrink-0 rounded-2xl overflow-hidden shadow-[0_12px_40px_-8px_rgba(0,0,0,0.2)] dark:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.5)]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center "
          />
          {statusBadge && (
            <span
              className={` absolute top-0 right-0 left-0 mx-auto w-fit  ${statusBadgeClass(statusBadge)}`}
            >
              {statusBadge}
            </span>
          )}
        </div>
        <div className="p-2 flex flex-col flex-1 min-w-0 text-center">
          <p className="text-gray-800 dark:text-white text-sm font-normal">
            {project.title}
          </p>
          {showDescription && (
            <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 line-clamp-2">
              {project.description}
            </p>
          )}
          <p className="text-gray-500 dark:text-gray-400 text-xs mt-1.5">
            {project.year}
          </p>
        </div>
      </div>
      {hoverOverlay}
    </>
  );

  const wideCard = (
    <>
      <div className="flex flex-row flex-1 min-h-[140px]">
        <div className="relative w-2/5 min-w-[140px] flex-shrink-0 rounded-l-2xl overflow-hidden shadow-[0_12px_32px_-8px_rgba(0,0,0,0.2)] dark:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5)]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {statusBadge && (
            <span
              className={`absolute top-1.5 left-2 ${statusBadgeClass(statusBadge)}`}
            >
              {statusBadge}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col justify-center p-2 text-center min-w-0">
          <p className="text-gray-800 dark:text-white text-sm font-normal">
            {project.title}
          </p>
          {showDescription && (
            <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 line-clamp-2">
              {project.description}
            </p>
          )}
          <p className="text-gray-500 dark:text-gray-400 text-xs mt-1.5">
            {project.year}
          </p>
        </div>
      </div>
      {hoverOverlay}
    </>
  );

  const cardContent = isWide ? wideCard : defaultCard;

  if (openModalOnClick && onClick) {
    return (
      <motion.article
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
        className={wrapperClass + " cursor-pointer"}
      >
        {cardContent}
      </motion.article>
    );
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={wrapperClass}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {cardContent}
    </a>
  );
}
