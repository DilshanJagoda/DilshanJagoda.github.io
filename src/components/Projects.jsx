import { Link } from "react-router-dom";
import projects from "../data/projects";

const projectIcons = {
  institution: "🏫",
  teacher: "👨‍🏫",
  os: "🖥️",
  recovery: "🛠️",
};

const ProjectCard = ({ p }) => (
  <div className="project-card">
    <div className="project-card-icon">{projectIcons[p.id] || "📁"}</div>
    <div className="project-card-body">
      <h3>{p.title}</h3>
      <p className="project-short">{p.short}</p>
      <div className="project-tech">
        {p.tech.split(", ").map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <div className="project-card-links">
        <Link to={`/projects/${p.id}`} className="project-link">
          View Details →
        </Link>
        {p.github && (
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link project-github">
            GitHub ↗
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => (
  <div className="section-wrapper" id="projects">
    <div className="section-inner">
      <span className="section-label">Projects</span>
      <h2 className="section-title">Major Work</h2>
      <p className="section-subtitle projects-sub">
        Real-world applications and systems built from scratch — from student
        management platforms to a custom operating system.
      </p>
      <div className="project-grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
