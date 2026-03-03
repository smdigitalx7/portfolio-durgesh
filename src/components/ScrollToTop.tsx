import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scroll window to top on every route change (fixes "All Works" / nav keeping previous scroll). */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
