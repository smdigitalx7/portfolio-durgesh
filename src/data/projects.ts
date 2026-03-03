export type ProjectCategory = "Software" | "Website" | "Branding";

export interface ProjectCaseStudy {
  problem: string;
  solution: string;
}

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  year: string | number;
  link: string;
  featured?: boolean;
  status?: string;
  tags?: string[];
  caseStudy?: ProjectCaseStudy;
}

/** Hierarchy: Softwares, Websites, Graphic Design */
export const PROJECT_CATEGORIES: { value: ProjectCategory | "All"; label: string }[] = [
  { value: "All", label: "All" },
  { value: "Software", label: "Softwares" },
  { value: "Website", label: "Websites" },
  { value: "Branding", label: "Graphic Design" },
];

export function getCategoryLabel(cat: ProjectCategory): string {
  return PROJECT_CATEGORIES.find((c) => c.value === cat)?.label ?? cat;
}

/** Map project status to simple badge: New, In Progress, Completed, or Closed */
export function getStatusBadge(status: string | undefined): "New" | "In Progress" | "Completed" | "Closed" | null {
  if (!status) return null;
  const s = status.toLowerCase();
  if (s === "new") return "New";
  if (s.includes("progress")) return "In Progress";
  if (s === "live" || s.includes("since") || s === "completed") return "Completed";
  if (s === "closed") return "Closed";
  return "Completed"; // default for Live, etc.
}

export const projects: Project[] = [
  {
    id: 1,
    title: "An Enterprise ERP",
    category: "Software",
    description: "Enterprise ERP for workforce, HR, attendance, payroll, and billing — 8,000+ workers across 80+ factories.",
    image: "/projects/ada-erp.png",
    year: "2025-2026",
    link: "https://adaerp.soilsoft.ai",
    featured: true,
    status: "NEW",
    tags: ["React", "TypeScript", "Redux Toolkit", "React Query", "JWT", "RBAC", "MFA"],
    caseStudy: {
      problem: "They had 8,000+ workers across 80+ factories and everything ran on spreadsheets and paper. HR, attendance, payroll and billing were in different corners — no single place to see what was going on.",
      solution: "I built one app that ties it all together: 12+ modules in React and TypeScript, with proper auth (JWT + MFA) and role-based access. We cut manual overhead by ~40%, made pages load faster with code splitting, and added Excel/PDF/MIS reports so they can see the pulse of the workforce in real time.",
    },
  },
  {
    id: 2,
    title: "Assessment Platform",
    category: "Software",
    description: "Multi-tenant assessment platform for 500+ concurrent students — live code execution, anti-cheat, and automated scoring.",
    image: "/projects/testverse.png",
    year: "2025-2026",
    link: "https://testverse.vsptech.in",
    featured: true,
    status: "NEW",
    tags: ["React", "TypeScript", "ShadCN UI", "Radix UI", "JWT", "Judge0"],
    caseStudy: {
      problem: "Colleges were drowning in manual evaluation — 2–3 hours per batch, and it didn’t scale when 500+ students sat for the same test. They needed live coding runs and auto-scored MCQs without leaks.",
      solution: "I built the frontend so exams run in the browser with autosave, anti-cheat (tab switch, heartbeat) and Judge0 for live code execution. MCQs score themselves. ShadCN + Radix gave us an accessible UI and dark mode out of the box.",
    },
  },
  {
    id: 3,
    title: "Education ERP",
    category: "Software",
    description: "Multi-branch ERP for School, College, and Office — 70+ API endpoints, 20+ reusable UI components.",
    image: "/projects/education-erp.png",
    year: "2025-2026",
    link: "https://erp.velonex.in",
    featured: true,
    status: "NEW",
    tags: ["React", "TypeScript", "TanStack Query", "Redux Toolkit", "RBAC"],
    caseStudy: {
      problem: "Schools, colleges and offices under one org needed a single app — but each place had different roles and data. Copy-pasting forms and tables for every module wasn’t an option.",
      solution: "One codebase, role-based routing and lazy-loaded modules. I added shared TanStack Query hooks for all 70+ APIs and a small library of 20+ components (forms, tables, modals, grids) so every new screen stays consistent and quick to ship.",
    },
  },
  {
    id: 4,
    title: "APIGen",
    category: "Software",
    description: "Automated API testing platform with real-time execution and analytics dashboards.",
    image: "/APIGen2.png",
    year: "2024-2025",
    link: "https://apigen.soilsoft.ai/",
    featured: true,
    status: "Beta",
    tags: ["React", "JavaScript", "SignalR", "Recharts", "Chart.js", "RBAC"],
    caseStudy: {
      problem: "Teams were running API tests in batches and waiting. No live view of what was passing or failing, or how performance looked over time.",
      solution: "I built the UI for creating tests, watching runs live (SignalR), and dashboards with Recharts/Chart.js for performance and failure trends. Added RBAC and OWASP-oriented checks so only the right people see the right data.",
    },
  },
  {
    id: 5,
    title: "Travel Website",
    category: "Website",
    description: "Responsive site to explore and book travel packages.",
    image: "/travel website2.png",
    year: "2025",
    link: "https://zennationals.com/",
    status: "Live",
    tags: ["React", "Tailwind", "Responsive"],
    caseStudy: {
      problem: "They wanted a site where people could browse and book travel packages without fighting the layout on mobile or desktop.",
      solution: "I designed and built a responsive frontend with straightforward navigation and booking flows, and kept it light so it loads fast and converts better.",
    },
  },
  // Static Websites — commented out
  // {
  //   id: 6,
  //   title: "Static Websites",
  //   category: "Website",
  //   description: "Clean and fast-loading websites built with Elementor/WordPress.",
  //   image: "/websites.png",
  //   year: "2024",
  //   link: "https://www.behance.net/gallery/226282517/Website-Design",
  //   status: "SINCE 2024",
  //   tags: ["WordPress", "Elementor", "HTML", "CSS"],
  //   caseStudy: {
  //     problem: "Clients needed professional, fast-loading sites without heavy custom development.",
  //     solution: "Delivered 10+ production websites using WordPress and Elementor — from first brief to live deployment — with consistent branding and responsive layouts.",
  //   },
  // },

  {
    id: 6,
    title: "VSP Technologies",
    category: "Website",
    description: "Campus recruitment training experts — 17+ years legacy, 200K+ placements, trusted by 500+ institutions.",
    image: "/websites/vsptech.in.jpg",
    year: "2026",
    link: "https://vsptech.in",
    status: "New",
    tags: ["Responsive", "Training", "CRT"],
    caseStudy: {
      problem: "VSP wanted a site that showed their 17+ years in campus recruitment — programs, results and who they work with — without feeling like a brochure dump.",
      solution: "I put together a responsive site that leads with their numbers and programs, shows off partner institutions, and makes it easy for colleges to request a proposal.",
    },
  },
  {
    id: 7,
    title: "NeoSouth",
    category: "Website",
    description: "Your daily dose of news, culture, cinema & lifestyle — South India–focused digital magazine.",
    image: "/websites/neosouth.in.jpg",
    year: "2025",
    link: "https://neosouth.in",
    status: "Live",
    tags: ["News", "Editorial", "Responsive"],
    caseStudy: {
      problem: "NeoSouth had a lot of content — politics, wellness, spotlight, trending — and needed a home where readers could find their beat without getting lost.",
      solution: "I built a responsive editorial site with clear categories, a trending section and simple nav, plus space for social follow so their South India audience can stay in the loop.",
    },
  },
  {
    id: 8,
    title: "Factorial Engineering",
    category: "Website",
    description: "Professional forensic engineering — accident investigation, reconstruction, and failure analysis.",
    image: "/websites/factorialengineering.org.jpg",
    year: "2025",
    link: "https://factorialengineering.org",
    status: "Live",
    tags: ["Consulting", "Forensic", "Responsive"],
    caseStudy: {
      problem: "They’re experts in accident investigation and failure analysis but didn’t have a site that reflected that — it had to feel credible and clear.",
      solution: "I designed and built a straightforward site that presents their services and team so potential clients immediately get who they are and what they do.",
    },
  },
  {
    id: 9,
    title: "Adhya Walls",
    category: "Website",
    description: "Premium wall finishes & textures in Kakinada — silk plaster, marble texture, glitter paints, wallpapers.",
    image: "/websites/adhyawalls.jpg",
    year: "2025",
    link: "https://adhyawalls.com",
    status: "Live",
    tags: ["Interiors", "Responsive", "Services"],
    caseStudy: {
      problem: "Adhya Walls does premium wall finishes in Kakinada — they wanted a site that felt inviting and made it easy to see services, reviews and get in touch.",
      solution: "I built a responsive site that puts their range (silk plaster, glitter paints, marble texture, wallpapers) up front, with testimonials, a short FAQ and a clear path to contact.",
    },
  },
  {
    id: 10,
    title: "Label Design",
    category: "Branding",
    description: "Creative and print-ready labels for product branding.",
    image: "/label design.png",
    year: "2025",
    link: "https://www.behance.net/gallery/226277819/Label-Design",
    tags: ["Figma", "Illustrator", "Print"],
    caseStudy: {
      problem: "They needed labels that looked good on the shelf and in ads — and had to be print-ready without last-minute fixes.",
      solution: "I designed a set of labels with clear hierarchy and brand fit, and prepped everything so print and rollout were smooth.",
    },
  },
  {
    id: 11,
    title: "Logo Design",
    category: "Branding",
    description: "Unique logo concepts crafted for strong brand recall.",
    image: "/logos.png",
    year: "2023",
    link: "https://www.behance.net/gallery/226278863/Logo-Design",
    status: "SINCE 2019",
    tags: ["Illustrator", "Figma", "Brand Identity"],
    caseStudy: {
      problem: "They wanted a logo that stuck in people’s minds and worked everywhere — site, social, print.",
      solution: "I explored a few distinct directions and locked in one with simple guidelines so it stays consistent wherever they use it.",
    },
  },
  {
    id: 12,
    title: "Brochure Designs",
    category: "Branding",
    description: "Elegant layouts for promotional business brochures.",
    image: "/brouchure.png",
    year: "2024",
    link: "https://www.behance.net/gallery/226279133/Brouchure-Design",
    status: "SINCE 2020",
    tags: ["InDesign", "Illustrator", "Print"],
    caseStudy: {
      problem: "They needed brochures that looked pro and made the offer easy to get — not a wall of text.",
      solution: "I laid out clean, on-brand brochures with a clear hierarchy and handed off print-ready files so they could run with it.",
    },
  },
  
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: ProjectCategory | "All"): Project[] {
  if (category === "All") return projects;
  return projects.filter((p) => p.category === category);
}

export function getProjectById(id: number): Project | undefined {
  return projects.find((p) => p.id === id);
}
