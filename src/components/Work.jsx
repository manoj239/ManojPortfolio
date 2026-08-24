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
          Building Intelligent AI Solutions
        </h2>
        <p
          data-animate-id="work-text"
          className={`text-xl leading-relaxed max-w-2xl mx-auto scroll-reveal transition-colors duration-500 ${
            darkMode ? "text-slate-300" : "text-slate-700"
          } ${visibleElements.has("work-text") ? "visible" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          I specialize in Generative AI, Agentic AI, AWS Cloud, and DevOps, building RAG 
          applications, AI agents, multi-agent systems, and intelligent automation workflows with
          technologies including LangChain, LangGraph, CrewAI, and AWS Bedrock. My cloud and DevOps
          background across AWS, Terraform, Docker, Kubernetes, CI/CD, and observability enables
          me to bridge intelligent applications with scalable and reliable infrastructure. I enjoy
          turning complex business challenges into practical, production-ready solutions that 
          improve efficiency, automate repetitive processes, and create measurable value.If you’re 
          looking for a Generative AI, Agentic AI, or AI Engineering professional with a strong AWS and DevOps background, let’s connect.r.
        </p>
      </div>
    </section>
  );
};

export default Work;
