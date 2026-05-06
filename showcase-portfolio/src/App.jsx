import "./App.css";

function App() {
  const projects = [
    {
      title: "API Dashboard",
      description: "Een dashboard met projectinformatie, updates en documenten.",
      tech: "Node.js, Express, PostgreSQL",
    },
    {
      title: "Showcase Portfolio",
      description: "Mijn persoonlijke portfolio website gemaakt met React.",
      tech: "React, JavaScript, CSS",
    },
    {
      title: "UX/UI Prototype",
      description: "Een interactief design prototype gemaakt in Figma.",
      tech: "Figma, UX Research",
    },
  ];

  return (
    <main>
      <nav className="navbar">
        <h2 className="logo">Mijn Portfolio</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">Over mij</a>
          <a href="#projects">Projecten</a>
          <a href="#contact">Contact</a>
          <a href="#admin" className="admin-link">Aanmelden als Admin</a>
        </div>
      </nav>

      <section id="home" className="section hero">
        <h1>Mijn Showcase Portfolio</h1>
        <p>Ik bouw websites en leer werken met React.</p>
      </section>

      <section id="about" className="section">
        <h2>Over mij</h2>
        <p>
          Ik ben een student/developer die graag digitale producten bouwt.
          Ik wil mijn skills in React, JavaScript en UI/UX verbeteren.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Mijn projecten</h2>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>{project.tech}</span>
              <button>Kijk meer</button>
            </div>
          ))}
        </div>
      </section>

      <section id="admin" className="section admin-section">
        <h2>Admin overzicht</h2>
        <p>Hier kun je later projecten toevoegen, aanpassen en verwijderen.</p>

        <div className="admin-box">
          <h3>Projectbeheer</h3>
          <button>Project toevoegen</button>
          <button>Project aanpassen</button>
          <button>Project verwijderen</button>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Neem contact met mij op via email.</p>
      </section>
    </main>
  );
}

export default App;