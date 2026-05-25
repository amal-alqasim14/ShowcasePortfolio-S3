function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <p className="label">Contact</p>

     <h2>Ik bouw graag mee aan digitale ervaringen.</h2>

      <p className="contact-text">
        Ik ben een gemotiveerde student/developer met interesse in frontend
        development, UX/UI en digitale producten.</p> 

        <p className="contact-text">
        Momenteel ben ik op zoek naar
        een stageplek waarin ik mijn vaardigheden verder kan ontwikkelen en kan
        bijdragen aan echte projecten.</p>
      

      <div className="contact-buttons">
        <a
          href="mailto:amal.alqasim2000@gmail.com"
          className="primary-btn"
        >
          Stuur een email
        </a>

        <a
          href="https://www.linkedin.com/in/amal-alqasim-a83941240/"
          target="_blank"
          rel="noreferrer"
          className="secondary-btn"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/amal-alqasim14"
          target="_blank"
          rel="noreferrer"
          className="secondary-btn"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;