import React from "react";

// ✅ react-icons imports for missing tools
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
    // ================= EXISTING CUSTOM SVG ICONS =================
    go: (/* KEEP YOUR EXISTING GO SVG HERE */),
    js: (/* KEEP YOUR EXISTING JS SVG HERE */),
    vue: (/* KEEP YOUR EXISTING VUE SVG HERE */),
    react: (/* KEEP YOUR EXISTING REACT SVG HERE */),
    html: (/* KEEP YOUR EXISTING HTML SVG HERE */),
    css: (/* KEEP YOUR EXISTING CSS SVG HERE */),
    sql: (/* KEEP YOUR EXISTING SQL SVG HERE */),
    docker: (/* KEEP YOUR EXISTING DOCKER SVG HERE */),
    kubernetes: (/* KEEP YOUR EXISTING K8S SVG HERE */),
    gcp: (/* KEEP YOUR EXISTING GCP SVG HERE */),
    git: (/* KEEP YOUR EXISTING GIT SVG HERE */),
    linux: (/* KEEP YOUR EXISTING LINUX SVG HERE */),
    redis: (/* KEEP YOUR EXISTING REDIS SVG HERE */),

    // ================= NEW ICONS (react-icons) =================
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

  // ✅ SAFE RETURN (Vercel / CI friendly)
  return icons[type] || (
    <span className="text-xs font-semibold">N/A</span>
  );
};

export default TechIcon;