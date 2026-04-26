import React from "react";

// ✅ Import react-icons ONLY for missing tools
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
    // ✅ Existing SVG icons (UNCHANGED)
    go: (/* your SVG */),
    js: (/* your SVG */),
    vue: (/* your SVG */),
    react: (/* your SVG */),
    html: (/* your SVG */),
    css: (/* your SVG */),
    sql: (/* your SVG */),
    docker: (/* your SVG */),
    kubernetes: (/* your SVG */),
    gcp: (/* your SVG */),
    git: (/* your SVG */),
    linux: (/* your SVG */),
    redis: (/* your SVG */),

    // ✅ Added via react-icons (NEW — fixes errors)
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

  // ✅ Safe fallback (prevents crashes)
  return icons[type] || (
    <span className="text-xs font-semibold">N/A</span>
  );
};

export default TechIcon;