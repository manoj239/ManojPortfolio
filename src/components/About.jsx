import React from "react";
import { getExperienceCompactText, getExperienceText } from '../utils/experience'

const About = ({ darkMode, visibleElements }) => {
  const experienceText = getExperienceText()
  const experienceCompactText = getExperienceCompactText()
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
              AWS DevOps Engineer {experienceCompactText}
            </span>{" "}
            with{" "}
            <span className="font-bold text-orange-500">
              hands-on experience
            </span>{" "}
            designing and operating cloud infrastructure, automation frameworks,
            CI/CD pipelines, Kubernetes platforms, monitoring systems, and
            containerized workloads. Over the years, I’ve worked on building{" "}
            <span
              className={`font-bold transition-colors duration-500 ${
                darkMode ? "text-slate-100" : "text-slate-900"
              }`}
            >
              reliable, scalable, and secure systems
            </span>{" "}
            by applying DevOps best practices across AWS environments.
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
              MLOps Engineering
            </span>{" "}
            role—an{" "}
            <span
              className={`font-bold transition-colors duration-500 ${
                darkMode ? "text-slate-100" : "text-slate-900"
              }`}
            >
              AI-focused engineering stream
            </span>{" "}
            that brings together machine learning, cloud platforms, and DevOps
            principles. I leverage my DevOps background to support the{" "}
            <span
              className={`font-bold transition-colors duration-500 ${
                darkMode ? "text-slate-100" : "text-slate-900"
              }`}
            >
              MLOps lifecycle
            </span>
            , including model deployment strategies, experiment tracking,
            pipeline automation, and monitoring machine learning systems in
            production environments.
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
            , ensuring that ML models are reproducible, scalable, observable, and
            reliable when deployed at scale. I'm passionate about{" "}
            <span className="font-bold text-orange-500">
              cloud-native technologies
            </span>
            , Kubernetes-based platforms, automation-first approaches, and
            building end-to-end ML platforms on AWS that enable teams to move
            faster with confidence.
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;