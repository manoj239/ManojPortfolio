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
          Let's Build Intelligent Enterprise Solutions Together
        </h2>
        <p
          data-animate-id="work-text"
          className={`text-xl leading-relaxed max-w-2xl mx-auto scroll-reveal transition-colors duration-500 ${
            darkMode ? "text-slate-300" : "text-slate-700"
          } ${visibleElements.has("work-text") ? "visible" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          I specialize in Generative AI, Agentic AI, AWS Cloud, and DevOps, with hands-on experience
          in building RAG applications, AI Agents, multi-agent workflows, and intelligent automation
          solutions using LangChain, LangGraph, CrewAI, AWS Bedrock, and modern cloud technologies.
          With a strong foundation in AWS, Terraform, Docker, Kubernetes, CI/CD, and Observability, 
          I focus on building scalable, production-ready AI and cloud-native solutions that help 
          organizations automate workflows and accelerate innovation. If you're looking to build 
          AI-driven applications, automate enterprise workflows, or scale cloud infrastructure, 
          let's connect..
        </p>
      </div>
    </section>
  );
};

export default Work;
