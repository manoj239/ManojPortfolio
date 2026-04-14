import React from "react";


const Home = ({ darkMode }) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-5xl w-full text-center">
        <div className="space-y-8">
          <h1
            className={`text-6xl md:text-8xl font-serif leading-tight animate-slideInLeft transition-colors duration-500 ${
              darkMode ? "text-slate-100" : "text-slate-900"
            }`}
          >
            Hi, I'm <span className="text-orange-500">Manoj Kumar 👋</span>
          </h1>
          <p
            className={`text-2xl md:text-3xl font-light animate-slideInLeft delay-200 transition-colors duration-500 max-w-3xl mx-auto ${
              darkMode ? "text-slate-300" : "text-slate-700"
            }`}
          >
            AWS DevOps Engineer | Transitioning to MLOps Engineer
            I design, automate, and optimize cloud infrastructure using AWS, DevOps tools, 
            and modern AI-driven workflows..
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
