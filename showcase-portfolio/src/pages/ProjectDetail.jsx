import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="project-detail-page">
        <Link to="/" className="back-link">← Terug</Link>
        <h1>Project niet gevonden</h1>
      </main>
    );
  }

  return (
    <main className="project-detail-page">
      <Link to="/" className="back-link">← Terug naar portfolio</Link>

      <section className="project-detail-hero">
        <div className="project-hero-text">
          <p className="label">{project.category}</p>
          <h1>{project.title}</h1>
          <p>{project.subtitle}</p>

          <div className="project-detail-buttons">
            <a href={project.liveLink} target="_blank" rel="noreferrer" className="primary-btn">
              Bekijk gehost project
            </a>
            <a href="#reflectie" className="secondary-btn">
              Lees reflectie
            </a>
          </div>
        </div>

        <div className="project-hero-card">
          <h3>Mijn rol</h3>
          <p>{project.role}</p>
        </div>
      </section>

      <section className="project-detail-content">
        <div className="detail-card large">
          <span className="card-number">01</span>
          <h2>Projectintroductie</h2>
          <p>{project.description}</p>
        </div>

        <div className="detail-card">
          <span className="card-number">02</span>
          <h2>Technieken</h2>
          <div className="tech-list">
            {project.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

        <div className="detail-card">
          <span className="card-number">03</span>
          <h2>Mijn bijdrage</h2>
          <p>{project.role}</p>
        </div>

        <div className="detail-card large">
          <span className="card-number">04</span>
          <h2>Werkzaamheden</h2>
          <ul className="task-list">
            {project.tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </div>

        <div id="reflectie" className="detail-card large reflection-card">
          <span className="card-number">05</span>
          <h2>Reflectie</h2>
          <p>{project.learned}</p>
        </div>
      </section>
    </main>
  );
}

export default ProjectDetail;