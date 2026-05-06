function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Beschrijving van project",
    },
  ];

  return (
    <section className="section">
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