const skills = [
  {
    title: "Languages",
    desc: "Programming languages I work with",
    tags: [
      { name: "Python", highlight: true },
      { name: "C" },
      { name: "Assembly (x86)" },
      { name: "Dart" },
      { name: "PHP" },
      { name: "JavaScript" },
    ],
  },
  {
    title: "Frameworks & Tools",
    desc: "Technologies I build with",
    tags: [
      { name: "Flutter", highlight: true },
      { name: "React + Vite" },
      { name: "MySQL", highlight: true },
      { name: "REST APIs" },
      { name: "Git & GitHub" },
      { name: "XAMPP" },
    ],
  },
  {
    title: "Networking",
    desc: "Infrastructure & network design",
    tags: [
      { name: "Cisco Packet Tracer", highlight: true },
      { name: "VLAN / DHCP" },
      { name: "OSPF / Static Routing" },
      { name: "Subnetting" },
      { name: "Router & Switch Config" },
    ],
  },
  {
    title: "Cybersecurity",
    desc: "Security knowledge & concepts",
    tags: [
      { name: "Security Policies" },
      { name: "Firewalls" },
      { name: "Network Security" },
      { name: "Threat Fundamentals" },
    ],
  },
];

const Skills = () => (
  <div className="section-wrapper reveal" id="skills">
    <div className="section-inner">
      <span className="section-label">Skills</span>
      <h2 className="section-title">Technical Abilities</h2>
      <p className="section-subtitle skills-sub">
        From high-level application development to low-level systems programming.
      </p>

      <div className="skills-grid">
        {skills.map((cat) => (
          <div key={cat.title} className="skill-category">
            <h3>{cat.title}</h3>
            <p className="skill-cat-desc">{cat.desc}</p>
            <div className="skill-items">
              {cat.tags.map((t) => (
                <span
                  key={t.name}
                  className={`skill-tag${t.highlight ? " highlight" : ""}`}
                >
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
