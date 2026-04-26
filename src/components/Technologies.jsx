import React from "react";
import TechIcon from "./TechIcon";

const Technologies = ({ darkMode, visibleElements }) => {
const technologies = [
  // === Core OS & Cloud ===
  { name: "Linux", icon: "linux", color: "from-yellow-500 to-orange-600" },
  { name: "AWS", icon: "aws", color: "from-orange-400 to-orange-600" },

  // === DevOps & Automation ===
  { name: "Bash", icon: "bash", color: "from-gray-600 to-gray-800" },
  { name: "Python", icon: "python", color: "from-blue-500 to-yellow-500" },
  { name: "Git", icon: "git", color: "from-orange-600 to-red-600" },
  { name: "GitHub", icon: "github", color: "from-gray-700 to-gray-900" },

  { name: "Terraform", icon: "terraform", color: "from-purple-500 to-indigo-600" },
  { name: "Ansible", icon: "ansible", color: "from-red-500 to-red-700" },

  { name: "Docker", icon: "docker", color: "from-blue-500 to-cyan-500" },
  { name: "Kubernetes", icon: "kubernetes", color: "from-blue-400 to-indigo-600" },

  // === CI/CD ===
  { name: "CI/CD (GitHub Actions)", icon: "githubactions", color: "from-green-500 to-emerald-600" },

  // === Monitoring & Observability ===
  { name: "Prometheus", icon: "prometheus", color: "from-orange-500 to-red-600" },
  { name: "Grafana", icon: "grafana", color: "from-orange-400 to-yellow-500" },
  { name: "Elastic Stack", icon: "elastic", color: "from-teal-500 to-cyan-600" },
  { name: "Azure Dashboards", icon: "azure", color: "from-blue-500 to-blue-700" },

  // === MLOps ===
  { name: "MLOps", icon: "mlops", color: "from-indigo-500 to-purple-600" },
];

  return (
    <section
      id="technologies"
      className={`py-16 px-6 transition-colors duration-500 overflow-hidden ${
        darkMode ? "bg-slate-900/50" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          data-animate-id="tech-heading"
          className={`text-4xl font-serif mb-3 text-center scroll-reveal transition-colors duration-500 ${
            darkMode ? "text-slate-100" : "text-slate-900"
          } ${visibleElements.has("tech-heading") ? "visible" : ""}`}
        >
          Technologies
        </h2>
        <p
          data-animate-id="tech-subheading"
          className={`text-center mb-10 text-base scroll-reveal transition-colors duration-500 ${
            darkMode ? "text-slate-400" : "text-slate-600"
          } ${visibleElements.has("tech-subheading") ? "visible" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          Tools and languages i work with
        </p>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex gap-6 scroll-animation">
              {[...technologies, ...technologies].map((tech, index) => (
                <div key={`${tech.name}-${index}`} className="flex-shrink-0">
                  <div
                    className={`group relative rounded-xl px-6 py-4 transition-all duration-300 hover:scale-110 cursor-pointer flex items-center gap-3 min-w-max ${
                      darkMode
                        ? "bg-slate-800/70 border border-slate-700 hover:border-orange-500/50"
                        : "bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 hover:border-orange-400"
                    } shadow-md hover:shadow-xl`}
                  >
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    ></div>

                    <div className="relative flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${tech.color} text-white shadow-md`}
                      >
                        <TechIcon type={tech.icon} />
                      </div>
                      <span
                        className={`text-base font-medium whitespace-nowrap transition-colors duration-500 ${
                          darkMode ? "text-slate-300" : "text-slate-700"
                        }`}
                      >
                        {tech.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient overlays for fade effect */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-20 pointer-events-none ${
              darkMode
                ? "bg-gradient-to-r from-slate-900/50 to-transparent"
                : "bg-gradient-to-r from-white to-transparent"
            }`}
          ></div>
          <div
            className={`absolute right-0 top-0 bottom-0 w-20 pointer-events-none ${
              darkMode
                ? "bg-gradient-to-l from-slate-900/50 to-transparent"
                : "bg-gradient-to-l from-white to-transparent"
            }`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
