import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Nav from "./components/Nav";
import MenuOverlay from "./components/MenuOverlay";
import Home from "./components/Home";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import About from "./components/About";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [darkMode, setDarkMode] = useState(false);
  console.log("test");

  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(
              (prev) => new Set([...prev, entry.target.dataset.animateId])
            );
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      const elements = document.querySelectorAll("[data-animate-id]");
      elements.forEach((el) => {
        if (observerRef.current) {
          observerRef.current.observe(el);
        }
      });
    }, 100);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [menuOpen]); // Re-run when menu state changes

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800"
          : "bg-gradient-to-br from-slate-50 via-amber-50 to-orange-50"
      }`}
    >
      {/* Navigation */}
      <Nav
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setMenuOpen={setMenuOpen}
      />

      {/* Full-Screen Menu Overlay */}
      <MenuOverlay
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <Home darkMode={darkMode} scrollToSection={scrollToSection} />

      {/* Let's Work Together Section */}
      <Work darkMode={darkMode} visibleElements={visibleElements} />

      <Experience darkMode={darkMode} visibleElements={visibleElements} />

      {/* Projects Section */}
      <Projects darkMode={darkMode} visibleElements={visibleElements} />

      {/* Technologies Section */}
      <Technologies darkMode={darkMode} visibleElements={visibleElements} />

      {/* About Section */}
      <About darkMode={darkMode} visibleElements={visibleElements} />

      {/* Footer */}
      <Footer visibleElements={visibleElements} />
    </div>
  );
};

export default Portfolio;
