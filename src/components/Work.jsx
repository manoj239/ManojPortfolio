import React from "react";

const Work = ({ darkMode, visibleElements }) => {
  return (
    <section
      id="work"
      className={`py-24 px-6 transition-colors duration-500 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2
          data-animate-id="work-heading"
          className={`text-5xl font-serif scroll-reveal transition-colors duration-500 ${
            darkMode ? "text-slate-100" : "text-slate-900"
          } ${visibleElements.has("work-heading") ? "visible" : ""}`}
        >
          Let’s Build Reliable Cloud Systems Together
        </h2>
        <p
          data-animate-id="work-text"
          className={`text-xl leading-relaxed max-w-2xl mx-auto scroll-reveal transition-colors duration-500 ${
            darkMode ? "text-slate-300" : "text-slate-700"
          } ${visibleElements.has("work-text") ? "visible" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          I specialize in building scalable AWS cloud infrastructure, automating deployments using 
          CI/CD pipelines, and implementing DevOps best practices. Currently, I am also 
          transitioning into MLOps, focusing on integrating machine learning workflows with cloud 
          and automation.  If you're looking for someone who can optimize infrastructure, improve 
          deployment processes, or build reliable cloud systems — let’s connect!.
        </p>
      </div>
    </section>
  );
};

export default Work;
