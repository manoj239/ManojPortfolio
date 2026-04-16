import React from "react";

const Projects = ({ darkMode, visibleElements }) => {
  const projects = [
    {
      id: 1,
      title: "DevOps Engineering Playground",
      description: `A hands-on DevOps repository showcasing real-world implementations of cloud infrastructure
automation, CI/CD pipelines, containerization, Kubernetes operations, and observability.
Includes Terraform IaC, Ansible playbooks, GitHub Actions workflows, Docker-based pipelines,
Kubernetes cluster setup, monitoring with Prometheus and Grafana, and Bash/Python automation scripts.`,
      icon: "⚙️",
      demo: null, // DevOps repos usually don’t have live demos
      github: "https://github.com/manoj239/AllDevSecops",
    },
    {
      id: 2,
      title: "MLOps Engineering (Need to update",
      description: `A focused MLOps repository demonstrating AI production engineering fundamentals by
applying DevOps practices to the MLOps lifecycle, including CI/CD for ML workflows, automation, model
deployment concepts, experiment tracking, and monitoring ML systems using cloud‑native and Kubernetes‑based platforms..`,
      icon: "🤖",
      demo: null, // Learning-focused MLOps repo
      github: "https://github.com/manoj239/ML-Yellow",
    },
  ];

  return (
    <section
      id="projects"
      className={`py-24 px-6 transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"
          : "bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2
            data-animate-id="projects-heading"
            className={`text-5xl font-serif mb-4 scroll-reveal transition-colors duration-500 ${
              darkMode ? "text-slate-100" : "text-slate-900"
            } ${visibleElements.has("projects-heading") ? "visible" : ""}`}
          >
            Featured Projects
          </h2>
          <p
            className={`text-lg transition-colors duration-500 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Hands‑on projects demonstrating real‑world experience in building scalable, automated, 
            and production‑ready cloud, DevOps, Kubernetes, and MLOps systems using AWS and modern
            tooling.

          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-animate-id={`project-${project.id}`}
              className={`rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border flex flex-col md:flex-row items-start md:items-center gap-6 group hover:-translate-y-1 ${
                darkMode
                  ? "bg-slate-800/50 border-orange-900/50"
                  : "bg-white border-amber-200"
              } ${
                index % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"
              } ${
                visibleElements.has(`project-${project.id}`) ? "visible" : ""
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* Icon */}
              <div
                className={`text-5xl w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                  darkMode
                    ? "bg-gradient-to-br from-orange-900/30 to-amber-900/30 text-orange-400"
                    : "bg-gradient-to-br from-amber-100 to-orange-100 text-orange-600"
                }`}
              >
                {project.icon}
              </div>

              {/* Text */}
              <div className="flex-grow">
                <h3
                  className={`text-2xl font-serif mb-2 transition-colors duration-500 ${
                    darkMode ? "text-slate-100" : "text-slate-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`leading-relaxed transition-colors duration-500 ${
                    darkMode ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {project.description}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-row md:flex-col lg:flex-row gap-3 mt-4 md:mt-0 flex-shrink-0 w-full md:w-auto">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg text-center font-medium flex items-center justify-center gap-2"
                  >
                    <span>🚀</span> Live Demo
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 md:flex-none px-6 py-2.5 rounded-full border transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-center font-medium flex items-center justify-center gap-2 ${
                      darkMode
                        ? "border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-slate-500"
                        : "border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400"
                    }`}
                  >
                    <span>💻</span> Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;