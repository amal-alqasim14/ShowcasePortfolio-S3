import profileImage from "../assets/profile.jpeg";
import "./About.css";

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-intro">
        <div className="about-text">
          <p className="label">Over mij</p>
          <h2>Een developer die graag leert door te bouwen.</h2>
          <p>
            Ik ben een developer die het liefst leert door te bouwen. Tijdens
            projecten ontdek ik niet alleen nieuwe technieken, maar ontwikkel ik
            ook mijn manier van denken over design, gebruiksvriendelijkheid en
            digitale ervaringen.
          </p>
        </div>

        <div className="about-image">
          <img src={profileImage} alt="Profielfoto" />
        </div>
      </div>

      <div className="about-grid">
        <div className="info-card">
          <h3>Wie ben ik?</h3>
          <p>
            Als student en frontend developer heb ik een sterke interesse in
            UX/UI, interactieve interfaces en digitale producten die echt waarde
            toevoegen voor gebruikers.
          </p>
        </div>

        <div className="info-card">
          <h3>Mijn focus</h3>
          <p>
            Mijn focus ligt op frontend development met React en JavaScript,
            gecombineerd met een oog voor design en detail.
          </p>
        </div>

        <div className="info-card">
          <h3>Wat wil ik leren?</h3>
          <p>
            Ik wil mezelf verder verdiepen in React, componentstructuren,
            routing, animaties en schaalbare interfaces.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;