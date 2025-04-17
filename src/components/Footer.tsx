
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold bg-gradient-to-r from-crypto-purple to-crypto-blue bg-clip-text text-transparent">
              Maxwell Bruno
            </span>
            <p className="text-sm text-slate-400 mt-1">
              Blockchain Culture & Community
            </p>
          </div>

          <div className="flex space-x-4 text-sm text-slate-400">
            <span>© {new Date().getFullYear()} • All rights reserved</span>
          </div>

          <button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 p-2 rounded-full bg-slate-800 hover:bg-crypto-purple transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
