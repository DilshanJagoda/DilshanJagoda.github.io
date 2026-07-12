import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <h3>{project.title}</h3>
    <p>{project.short}</p>
    <p><strong>Tech:</strong> {project.tech}</p>
    <Link to={`/projects/${project.id}`}>View Details →</Link>
  </div>
);

export default ProjectCard;
