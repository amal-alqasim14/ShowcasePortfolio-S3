import "./App.css";

function App() {
  return (
    <main>
      <section id="home" className="section hero">
        <h1>Mijn Showcase Portfolio</h1>
        <p>Ik bouw websites en leer werken met React.</p>
        <a href="#about">Scroll naar beneden</a>
      </section>

      <section id="about" className="section">
        <h2>Over mij</h2>
        <p>
          Ik ben een student/developer die graag digitale producten bouwt.
          Ik wil mijn skills in React, JavaScript en UI/UX verbeteren.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Projecten</h2>
        <p>Hier komen mijn beste projecten te staan.</p>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Neem contact met mij op via email.</p>
      </section>
    </main>
  );
}

export default App;