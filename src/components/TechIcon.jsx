import React from "react";

// react-icons for missing tools
import {
  SiAmazonaws,
  SiGnubash,
  SiPython,
  SiTerraform,
  SiAnsible,
  SiGithubactions,
  SiPrometheus,
  SiGrafana,
  SiElasticsearch,
  SiMicrosoftazure,
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";

const TechIcon = ({ type }) => {
  const icons = {
    // ✅ KEEP YOUR EXISTING SVG ICONS (UNCHANGED)
    js: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M0 0h24v24H0V0z" />
      </svg>
    ),
    vue: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M24 1.61h-4.42L12 14.89 4.42 1.61H0l12 20.78 12-20.78z" />
      </svg>
    ),
    react: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    html: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M1.5 0h21l-1.9 21.5L12 24l-8.5-2.4z" />
      </svg>
    ),
    css: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M1.5 0h21l-1.9 21.5L12 24l-8.5-2.4z" />
      </svg>
    ),
    docker: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M23 10c0 4-4 7-9 7s-9-3-9-7z" />
      </svg>
    ),
    kubernetes: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    git: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M23 12L12 23 1 12 12 1z" />
      </svg>
    ),
    linux: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 0c-4 0-4 6-4 8s-6 6-6 10 4 6 10 6 10-2 10-6-6-8-6-10-1-8-4-8z" />
      </svg>
    ),

    // ✅ react-icons (NEW, FIXED)
    aws: <SiAmazonaws className="w-7 h-7" />,
    bash: <SiGnubash className="w-7 h-7" />,
    python: <SiPython className="w-7 h-7" />,
    terraform: <SiTerraform className="w-7 h-7" />,
    ansible: <SiAnsible className="w-7 h-7" />,
    githubactions: <SiGithubactions className="w-7 h-7" />,
    prometheus: <SiPrometheus className="w-7 h-7" />,
    grafana: <SiGrafana className="w-7 h-7" />,
    elastic: <SiElasticsearch className="w-7 h-7" />,
    azure: <SiMicrosoftazure className="w-7 h-7" />,
    mlops: <FaBrain className="w-7 h-7" />,
  };

  // ✅ SAFE fallback (NO crashes, Vercel-safe)
  return icons[type] || (
    <span className="text-xs font-semibold">N/A</span>
  );
};

export default TechIcon;