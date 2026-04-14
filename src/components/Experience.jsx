import React from "react";
import { getExperienceCompactText, getExperienceText } from '../utils/experience'

const Experience = ({ darkMode, visibleElements }) => {
  const experienceCompactText = getExperienceCompactText()
  
  const experiences = [
    {
      id: 1,
      icon: "⚙️",
      title: `AWS DevOps Engineer ${experienceCompactText}` ,
      company: "Infosys (Client: MetLife, EBSCO)",
      period: "November 2021 - Present",
      description: `As an AWS DevOps Engineer at Infosys, I have been responsible for designing,
implementing, and maintaining cloud infrastructure on AWS for clients like MetLife and EBSCO.

My role involves automating deployment pipelines using CI/CD tools such as GitHub Actions,
managing containerized applications with Docker and Kubernetes, and ensuring high availability
and scalability of cloud resources.

I have also worked extensively with Infrastructure as Code using Terraform and CloudFormation,
enabling efficient provisioning, versioning, and management of AWS services.`,
    },
    {
      id: 2,
      icon: "🎓",
      title: "B.Tech in EEE",
      College: "Lakireddy Bali Reddy College of Engineering",
      period: "2017 - 2021",
      description: `Graduated with a Bachelor's degree in Electrical &
    Electronics Engineering. Built strong analytical and engineering fundamentals,
    which later transitioned into cloud computing, DevOps practices, and automation.`,
    }
  ];

  return (
    <section
      id="experience"
      className={`py-24 px-6 transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"
          : "bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          data-animate-id="experience-heading"
          className={`text-5xl font-serif mb-4 text-center scroll-reveal transition-colors duration-500 ${
            darkMode ? "text-slate-100" : "text-slate-900"
          } ${visibleElements.has("experience-heading") ? "visible" : ""}`}
        >
          Experience
        </h2>

        <p
          data-animate-id="experience-subheading"
          className={`text-center mb-16 text-lg scroll-reveal transition-colors duration-500 ${
            darkMode ? "text-slate-400" : "text-slate-600"
          } ${visibleElements.has("experience-subheading") ? "visible" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          My professional journey
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              data-animate-id={`experience-${exp.id}`}
              className={`w-full md:w-[calc(50%-1.25rem)] rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border text-center hover:-translate-y-2 ${
                darkMode
                  ? "bg-gray-800/80 border-gray-700"
                  : "bg-white border-slate-200"
              } scroll-scale ${
                visibleElements.has(`experience-${exp.id}`) ? "visible" : ""
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div
                className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 text-4xl ${
                  darkMode
                    ? "bg-gradient-to-br from-orange-500/20 to-amber-500/20 border-2 border-orange-500/30"
                    : "bg-gradient-to-br from-orange-100 to-amber-100 border-2 border-orange-300"
                }`}
              >
                {exp.icon}
              </div>

              <h3
                className={`text-xl font-serif mb-2 transition-colors duration-500 ${
                  darkMode ? "text-slate-100" : "text-slate-900"
                }`}
              >
                {exp.title}
              </h3>

              <p
                className={`font-medium mb-2 transition-colors duration-500 ${
                  darkMode ? "text-orange-400" : "text-orange-600"
                }`}
              >
                {exp.company}
              </p>

              <p
                className={`text-sm mb-4 transition-colors duration-500 ${
                  darkMode ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {exp.period}
              </p>

              <p
                className={`text-sm leading-relaxed transition-colors duration-500 ${
                  darkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;