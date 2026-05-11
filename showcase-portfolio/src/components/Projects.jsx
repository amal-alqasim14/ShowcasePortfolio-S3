import { Link } from "react-router-dom";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <p className="label">Mijn werk</p>
      <h2>Projecten</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.slug}>
            <p className="project-category">{project.category}</p>
            <h3>{project.title}</h3>
            <p>{project.subtitle}</p>

            <div className="tech-list">
              {project.tech.slice(0, 3).map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <Link to={`/project/${project.slug}`} className="card-btn">
              Kijk meer
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;