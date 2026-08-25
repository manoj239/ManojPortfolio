import React from "react";
import { getExperienceText } from '../utils/experience';

const About = ({ darkMode, visibleElements }) => {
  const experienceText = getExperienceText();
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
          {/* Paragraph 1 */}
          <p
            data-animate-id="about-p1"
            className={`scroll-reveal-left transition-colors duration-500 ${
              darkMode ? "text-slate-300" : "text-slate-700"
            } ${visibleElements.has("about-p1") ? "visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            I'm a{" "}
            <span
              className={`font-bold transition-colors duration-500 ${
                darkMode ? "text-slate-100" : "text-slate-900"
              }`}
            >
              Senior Associate Consultant with {experienceText}
            </span>{" "}
            including experience across{" "}
            <span className="font-bold text-orange-500">
              Generative AI, Agentic AI, AWS Cloud, and DevOps
            </span>
            . My journey has involved working on cloud platforms, knowledge-driven applications, 
            workflow orchestration, and enterprise integrations that help organizations improve 
            efficiency and accelerate innovation..
          </p>

          {/* Paragraph 2 */}
          <p
            data-animate-id="about-p2"
            className={`scroll-reveal-right transition-colors duration-500 ${
              darkMode ? "text-slate-300" : "text-slate-700"
            } ${visibleElements.has("about-p2") ? "visible" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            I have contributed to{" "}
            <span className="font-bold text-orange-500">
              AI assistants, enterprise knowledge retrieval platforms, intelligent
              decision-support systems, and AI-powered automation solutions
            </span>{" "}
            using LLMs, RAG, LangChain, LangGraph, CrewAI, AWS Bedrock, embeddings,
            vector databases, tool calling, and multi-agent workflows.
          </p>

          {/* Paragraph 3 */}
          <p
            data-animate-id="about-p3"
            className={`scroll-reveal-left transition-colors duration-500 ${
              darkMode ? "text-slate-300" : "text-slate-700"
            } ${visibleElements.has("about-p3") ? "visible" : ""}`}
            style={{ transitionDelay: "0.3s" }}
          >
            My experience with{" "}
            <span
              className={`font-bold transition-colors duration-500 ${
                darkMode ? "text-slate-100" : "text-slate-900"
              }`}
            >
              Infrastructure as Code, containerization, CI/CD, observability, cloud
              operations, and automation
            </span>{" "}
            enables me to build scalable, reliable, and production-ready solutions.
            I continuously explore technologies such as{" "}
            <span className="font-bold text-orange-500">
              MCP, n8n, LangSmith, RAGAS, and advanced Agentic AI frameworks
            </span>{" "}
            to solve real-world business challenges through intelligent and practical solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;