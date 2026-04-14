import React from "react";

const Nav = ({ darkMode, setDarkMode, setMenuOpen }) => {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b animate-fadeIn transition-colors duration-500 ${
        darkMode
          ? "bg-gray-900/95 border-gray-700"
          : "bg-white/90 border-amber-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => setMenuOpen(true)}
          className={`px-6 py-2 font-medium transition-all duration-300 hover:scale-105 ${
            darkMode
              ? "text-slate-100 hover:text-orange-400"
              : "text-slate-800 hover:text-orange-600"
          }`}
        >
          Menu
        </button>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
              darkMode
                ? "bg-gray-800 text-amber-400 hover:bg-gray-700"
                : "bg-slate-200 text-slate-700 hover:bg-slate-300"
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <a
            href="mailto:manojkumar.borra@infosys.com"
            className="px-8 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-xl hover:scale-105"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
