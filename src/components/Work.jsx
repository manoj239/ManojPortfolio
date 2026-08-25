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
          From Cloud Engineering to Agentic AI
        </h2>
        <p
          data-animate-id="work-text"
          className={`text-xl leading-relaxed max-w-2xl mx-auto scroll-reveal transition-colors duration-500 ${
            darkMode ? "text-slate-300" : "text-slate-700"
          } ${visibleElements.has("work-text") ? "visible" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          I specialize in Generative AI, Agentic AI, AWS Cloud, and DevOps, with experience in 
          knowledge retrieval, multi-agent workflows, platform automation, and enterprise 
          integrations using LangChain, LangGraph, CrewAI, AWS Bedrock, MCP, and n8n. With a strong
          foundation in cloud operations and automation, I focus on applying AI and engineering 
          practices to simplify complex processes, improve access to information, and deliver 
          practical business outcomes. I'm passionate about the intersection of AI, cloud 
          technologies, and automation. If you'd like to discuss ideas, technology, or potential 
          collaboration opportunities, let's connect 😊.
        </p>
      </div>
    </section>
  );
};

export default Work;
