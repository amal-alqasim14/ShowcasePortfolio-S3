function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="hero-content">
        <p className="label">Showcase Portfolio</p>
        <h1>Ik bouw digitale ervaringen met focus op design, code en groei.</h1>
        <p>
          Mijn portfolio laat zien welke projecten ik heb gemaakt, wat mijn rol
          was en wat ik tijdens elk project heb geleerd.
        </p>

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