import "./Hero.css";
function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="hero-content">
        <p className="label">Showcase Portfolio</p>
        <h1>Ik bouw digitale ervaringen met focus op design, code en groei.</h1>
        <p>
          Mijn portfolio laat niet alleen mijn projecten zien, maar ook mijn ontwikkeling, 
          uitdagingen en de vaardigheden die ik onderweg heb opgebouwd.</p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            Bekijk projecten
          </a>
          <a href="#contact" className="secondary-btn">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;