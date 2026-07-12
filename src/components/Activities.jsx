const activities = [
  {
    icon: "🎵",
    title: "Multi-instrumentalist Musician",
    desc: "Music is a core part of my life — I play multiple instruments and enjoy exploring rhythm, melody, and diverse musical traditions.",
    items: [
      "Keyboard (main instrument)",
      "Guitar",
      "Drums",
      "Tabla & Sitar",
      "Other instruments",
    ],
  },
  {
    icon: "💻",
    title: "IT Workshop Leader",
    desc: "Conducted IT workshops to help students build practical computing skills and understand technology concepts.",
    items: [
      "Delivered hands-on coding sessions",
      "Explained technical concepts to beginners",
      "Collaborated with ICT teachers on curriculum",
    ],
  },
  {
    icon: "📋",
    title: "ICT Society Treasurer",
    desc: "Managed finances and records for the school ICT society, supporting technology-related activities and events.",
    items: [
      "Financial management and budgeting",
      "Record keeping and reporting",
      "Society activity coordination",
    ],
  },
];

const Activities = () => (
  <div className="section-wrapper reveal" id="activities">
    <div className="section-inner">
      <span className="section-label">Extracurricular</span>
      <h2 className="section-title">Beyond Code</h2>
      <p className="section-subtitle activities-sub">
        Music, teaching, and leadership — the experiences that shape who I am.
      </p>

      <div className="activities-grid">
        {activities.map((a) => (
          <div key={a.title} className="activity-card">
            <div className="activity-icon">{a.icon}</div>
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
            <ul>
              {a.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Activities;
