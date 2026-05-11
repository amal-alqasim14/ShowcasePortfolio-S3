function About() {
  return (
    <section id="about" className="section about-section">
      <p className="label">Over mij</p>
      <h2>Een developer die graag leert door te bouwen.</h2>

      <div className="about-grid">
        <div className="info-card">
          <h3>Wie ben ik?</h3>
          <p>
            Ik ben een student/developer met interesse in frontend development,
            UX/UI en digitale producten die echt gebruikt kunnen worden.
          </p>
        </div>

        <div className="info-card">
          <h3>Mijn focus</h3>
          <p>
            Ik werk graag met React, JavaScript en design. Ik wil websites
            bouwen die duidelijk, professioneel en gebruiksvriendelijk zijn.
          </p>
        </div>

        <div className="info-card">
          <h3>Wat wil ik leren?</h3>
          <p>
            Ik wil sterker worden in React, component structuur, animaties,
            routing en het bouwen van professionele interfaces.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;