import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Home, ArrowRight, Compass } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import DecorativeBar from "../components/DecorativeBar";

export default function NotFound() {
  return (
    <Layout>
      <Helmet>
        <title>404 - Page Not Found | Durgesh</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />
      <section className="py-10 mt-20 sm:mt-32 px-4 sm:px-6 md:px-8 min-h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto px-2 sm:px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 opacity-30 uppercase tracking-[.25em] mb-2">
              Error 404
            </p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="font-display text-6xl sm:text-7xl md:text-8xl font-normal tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 select-none">
                404
              </span>
            </motion.div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-normal mb-4 sm:mb-6 tracking-tight text-gray-800 dark:text-white">
              You’ve wandered off the map
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto mb-8">
              This page doesn’t exist or has moved. No worries—here’s a compass to get you back.
            </p>
            <DecorativeBar />
          </div>

          <motion.div
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white shadow-lg hover:opacity-95 hover:scale-[1.02] transition-all focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 dark:focus:ring-offset-[#0A0A0D]"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 dark:focus:ring-offset-[#0A0A0D]"
            >
              <Compass className="w-4 h-4" />
              See Work
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-[#0A0A0D]"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}
