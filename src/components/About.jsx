const About = () => (
  <div className="section-wrapper reveal" id="about">
    <div className="section-inner">
      <span className="section-label">About Me</span>
      <h2 className="section-title">Who I Am</h2>
      <p className="section-subtitle" style={{ margin: "0 auto" }}>
        A young developer building practical solutions and understanding
        technology from the application level down to the hardware.
      </p>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I&apos;m an 18-year-old A/L graduate from Sri Lanka with 3A passes
            in Accounting, Economics, and Information Technology (Z-score 2.2118,
            ranked 14th in Matara District). I&apos;m now preparing to study
            Computer Science and AI in Germany.
          </p>
          <p>
            My curiosity drives me to learn how computers work at every level —
            from building Flutter apps and REST APIs all the way down to writing
            assembly bootloaders and my own operating system.
          </p>
          <p>
            I believe the best engineers understand both the high-level user
            experience and the low-level mechanics that make it possible.
          </p>

          <div className="interest-tags">
            <span>Software Engineering</span>
            <span>Artificial Intelligence</span>
            <span>Cybersecurity</span>
            <span>Operating Systems</span>
            <span>Computer Architecture</span>
            <span>Full-stack Development</span>
            <span>Database Systems</span>
          </div>
        </div>

        <div className="about-philosophy">
          <h3>Development Philosophy</h3>
          <div className="philosophy-quote">
            &ldquo;Understand technology from the application level down to the
            hardware level.&rdquo;
          </div>

          <div className="philosophy-stack">
            <div className="stack-item">
              <span className="dot" style={{ background: "#3b82f6" }} />
              <span>
                <strong>Application Level</strong> — Flutter apps, Management
                systems
              </span>
            </div>
            <div className="stack-item">
              <span className="dot" style={{ background: "#8b5cf6" }} />
              <span>
                <strong>Backend Level</strong> — APIs, Databases
              </span>
            </div>
            <div className="stack-item">
              <span className="dot" style={{ background: "#ec4899" }} />
              <span>
                <strong>System Level</strong> — OS development, Assembly
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
