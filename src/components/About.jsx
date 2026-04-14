import React from "react";

const About = ({ darkMode, visibleElements }) => {
  return (
    <section
      id="about"
      className={`py-24 px-6 transition-colors duration-500 ${
        darkMode ? "bg-slate-900/50" : "bg-white"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          data-animate-id="about-heading"
          className={`text-5xl font-serif mb-8 scroll-reveal transition-colors duration-500 ${
            darkMode ? "text-slate-100" : "text-slate-900"
          } ${visibleElements.has("about-heading") ? "visible" : ""}`}
        >
          About Me
        </h2>

        <div className="space-y-6 text-lg leading-relaxed">

          {/* Paragraph 1: DevOps Foundation */}
          <p
            data-animate-id="about-p1"
            className={`scroll-reveal-left transition-colors duration-500 ${
              darkMode ? "text-slate-300" : "text-slate-700"
            } ${visibleElements.has("about-p1") ? "visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            I'm an{" "}
            <span
              className={`font-bold transition-colors duration-500 ${
                darkMode ? "text-slate-100" : "text-slate-900"
              }`}
            >
              AWS DevOps Engineer
            </span>{" "}
            with{" "}
            <span className="font-bold text-orange-500">
              hands-on experience
            </span>{" "}
            in cloud infrastructure, automation, CI/CD pipelines,Kubernetes, monitoring,
            and containerized workloads. Over the years, I have worked on
            building{" "}
            <span
              className={`font-bold transition-colors duration-500 ${
                darkMode ? "text-slate-100" : "text-slate-900"
              }`}
            >
              reliable, scalable, and secure systems
            </span>{" "}
            using DevOps best practices across AWS environments.
          </p>

          {/* Paragraph 2: MLOps Transition */}
          <p
            data-animate-id="about-p2"
            className={`scroll-reveal-right transition-colors duration-500 ${
              darkMode ? "text-slate-300" : "text-slate-700"
            } ${visibleElements.has("about-p2") ? "visible" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            I am currently transitioning into an{" "}
            <span className="font-bold text-orange-500">
              MLOps Engineer
            </span>{" "}
            role—an{" "}
            <span
              className={`font-bold transition-colors duration-500 ${
                darkMode ? "text-slate-100" : "text-slate-900"
              }`}
            >
              AI-focused engineering stream
            </span>{" "}
            that combines machine learning and DevOps practices. I leverage my
            DevOps background to support the{" "}
            <span
              className={`font-bold transition-colors duration-500 ${
                darkMode ? "text-slate-100" : "text-slate-900"
              }`}
            >
              MLOps lifecycle
            </span>
            , including model deployment, experiment tracking, pipeline
            automation, and monitoring machine learning systems in production.
          </p>

          {/* Paragraph 3: Kubernetes & Future Vision */}
          <p
            data-animate-id="about-p3"
            className={`scroll-reveal-left transition-colors duration-500 ${
              darkMode ? "text-slate-300" : "text-slate-700"
            } ${visibleElements.has("about-p3") ? "visible" : ""}`}
            style={{ transitionDelay: "0.3s" }}
          >
            My focus is on{" "}
            <span
              className={`font-bold transition-colors duration-500 ${
                darkMode ? "text-slate-100" : "text-slate-900"
              }`}
            >
              bridging the gap between machine learning and production systems
            </span>
            , ensuring that AI models are reproducible, scalable, observable,
            and reliable when deployed at scale. I'm passionate about{" "}
            <span className="font-bold text-orange-500">
              cloud-native technologies
            </span>
            , Kubernetes-based platforms, automation-first approaches, and
            building end-to-end ML platforms on AWS.
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;