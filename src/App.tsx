import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./context/ThemeContext";
import SEO from "./components/SEO";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import RedirectToExternal from "./pages/RedirectToExternal";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <ErrorBoundary>
          <Router>
            <ScrollToTop />
            <SEO />
            <div className="">
              <main className="relative z-10">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/services" element={<RedirectToExternal />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </Router>
        </ErrorBoundary>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
