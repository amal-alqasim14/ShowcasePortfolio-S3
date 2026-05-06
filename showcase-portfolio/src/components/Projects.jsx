import { useState } from "react";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Medicijnhulp",
      description: "Medicatieondersteuning voor patiënten en mantelzorgers",
      details:
        "Een zorgproject met website, mobiele app, game en Arduino-medicatiedoos.",
      learned:
        "Ik heb geleerd hoe belangrijk gebruiksvriendelijkheid is voor kwetsbare doelgroepen.",
      link: "https://jouw-project-link.nl",
    },
    {
      title: "Digital Paradise",
      description: "Branding voor DJ & producer",
      details:
        "Een volledige visuele identiteit inclusief EPK en social media design.",
      learned:
        "Ik heb geleerd hoe je een sterk merk visueel opbouwt.",
      link: "https://jouw-project-link.nl",
    },
    {
      title: "CZ Zorgvinder",
      description: "UX design voor mentale zorg",
      details:
        "Onderzoek en ontwerp om toegang tot mentale zorg te verbeteren.",
      learned:
        "Ik heb geleerd hoe belangrijk onderzoek is binnen UX design.",
      link: "https://jouw-project-link.nl",
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

            <button onClick={() => setSelectedProject(p)}>
              Kijk meer
            </button>
          </div>
        ))}
      </div>

      {/* DIT IS DE MODAL */}
      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedProject.title}</h2>

            <p>{selectedProject.details}</p>

            <h4>Wat heb ik geleerd?</h4>
            <p>{selectedProject.learned}</p>

            <a href={selectedProject.link} target="_blank" rel="noreferrer">
              <button className="visit-btn">Bekijk project</button>
            </a>

            <button onClick={() => setSelectedProject(null)}>
              Sluiten
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;