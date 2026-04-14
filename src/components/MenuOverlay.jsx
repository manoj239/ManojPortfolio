import React from "react";

const MenuOverlay = ({ menuOpen, setMenuOpen, scrollToSection }) => {
  if (!menuOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 flex items-center justify-center animate-fadeIn">
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-8 right-8 text-white text-4xl hover:rotate-90 transition-transform duration-500"
      >
        ×
      </button>
      <nav className="text-center">
        <ul className="space-y-8">
          {["home", "experience", "projects", "technologies", "about"].map(
            (section, index) => (
              <li
                key={section}
                className={`animate-fadeInUp delay-${(index + 1) * 100}`}
              >
                <button
                  onClick={() => scrollToSection(section)}
                  className="text-white text-5xl font-serif hover:text-amber-300 transition-all duration-300 hover:scale-110 inline-block capitalize"
                >
                  {section}
                </button>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};

export default MenuOverlay;
