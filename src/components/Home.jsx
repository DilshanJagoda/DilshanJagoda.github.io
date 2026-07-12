import CodeRain from "./CodeRain";

const Home = () => (
  <section className="hero" id="home">
    <div className="hero-bg">
      <CodeRain />
      <div className="orb" />
      <div className="orb" />
      <div className="orb" />
      <div className="hero-grid" />
    </div>

    <div className="hero-content">
      <div className="hero-badge">Open to opportunities</div>

      <h1>
        <span className="gradient-text">Dilshan Jagoda</span>
      </h1>

      <p className="hero-tagline">
        Software Developer &amp; Systems Enthusiast
      </p>

      <p className="hero-desc">
        18-year-old developer from Sri Lanka, exploring technology from
        application-level systems down to low-level architecture and operating systems.
      </p>

      <div className="hero-cta">
        <a href="#projects" className="btn btn-primary">
          View My Work ↓
        </a>
        <a href="#contact" className="btn btn-secondary">
          Get In Touch
        </a>
      </div>
    </div>

    <div className="hero-scroll">Scroll</div>
  </section>
);

export default Home;
