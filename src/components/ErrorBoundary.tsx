import { Component, type ErrorInfo, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Home, RefreshCw } from "lucide-react";
import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";
import DecorativeBar from "./DecorativeBar";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Layout>
          <Header />
          <section className="py-10 mt-20 sm:mt-32 px-4 sm:px-6 md:px-8 min-h-screen">
            <div className="container mx-auto px-2 sm:px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 opacity-30 uppercase tracking-[.25em] mb-2">
                  Oops
                </p>
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal mb-4 sm:mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                  Something went wrong
                </h1>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto mb-8">
                  A little glitch got in the way. Refresh or head back home.
                </p>
                <DecorativeBar />
              </div>
              <div className="flex flex-wrap justify-center gap-4 max-w-xl mx-auto">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white shadow-lg hover:opacity-95 transition-opacity focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 dark:focus:ring-offset-[#0A0A0D]"
                >
                  <Home className="w-4 h-4" />
                  Back to Home
                </Link>
                <button
                  type="button"
                  onClick={() => globalThis.location.reload()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-[#0A0A0D]"
                >
                  <RefreshCw className="w-4 h-4" />
                  Refresh
                </button>
              </div>
            </div>
          </section>
          <Footer />
        </Layout>
      );
    }
    return this.props.children;
  }
}
