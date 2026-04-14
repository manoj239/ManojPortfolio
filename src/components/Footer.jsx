import React from "react";

const Footer = ({ visibleElements }) => {
  return (
    <footer className="py-12 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        <div
          data-animate-id="footer-content"
          className={`flex gap-6 scroll-fade ${
            visibleElements.has("footer-content") ? "visible" : ""
          }`}
        >
          <a
            href="https://github.com/manoj239"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition-all duration-300 text-lg hover:scale-110 inline-block"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/manoj-kumar-borra-b2035818a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition-all duration-300 text-lg hover:scale-110 inline-block"
          >
            LinkedIn
          </a>
          <a
            href="mailto:manojkumar.borra@infosys.com"
            className="hover:text-amber-300 transition-all duration-300 text-lg hover:scale-110 inline-block"
          >
            Email
          </a>
        </div>
        <div
          data-animate-id="footer-copyright"
          className={`text-center text-sm text-amber-200/80 scroll-fade ${
            visibleElements.has("footer-copyright") ? "visible" : ""
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          © {new Date().getFullYear()} Manoj Kumar B.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
