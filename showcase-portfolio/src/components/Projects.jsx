function Projects() {
  const projects = [
    {
      title: "API Dashboard",
      description: "Backend + database project",
    },
    {
      title: "Portfolio",
      description: "Mijn eigen website",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Projecten</h2>

      <div className="project-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <button>Kijk meer</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;