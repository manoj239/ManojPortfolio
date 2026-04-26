import {
  SiLinux,
  SiAmazonaws,
  SiGnubash,
  SiPython,
  SiGit,
  SiGithub,
  SiTerraform,
  SiAnsible,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiPrometheus,
  SiGrafana,
  SiElasticsearch,
  SiMicrosoftazure,
} from "react-icons/si";
import { FaBrain } from "react-icons/fa"; // for MLOps

const iconMap = {
  linux: SiLinux,
  aws: SiAmazonaws,
  bash: SiGnubash,
  python: SiPython,
  git: SiGit,
  github: SiGithub,
  terraform: SiTerraform,
  ansible: SiAnsible,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  githubactions: SiGithubactions,
  prometheus: SiPrometheus,
  grafana: SiGrafana,
  elastic: SiElasticsearch,
  azure: SiMicrosoftazure,
  mlops: FaBrain, // No official MLOps icon
};

const TechIcon = ({ type }) => {
  const Icon = iconMap[type];
  return Icon ? <Icon className="w-7 h-7" /> : null;
};

export default TechIcon;