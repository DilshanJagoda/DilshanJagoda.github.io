import { useState } from "react";
import CertificateViewer from "./CertificateViewer";

const achievements = [
  {
    badge: "Academic",
    badgeClass: "academic",
    title: "G.C.E. Advanced Level",
    value: "3A Passes",
    detail:
      "Accounting, Economics, Information Technology • Z-score 2.2118 • Ranked 14th in Matara District",
  },
  {
    badge: "Language",
    badgeClass: "language",
    title: "IELTS",
    value: "Band 7.0",
    detail:
      "English proficiency for academic and professional environments.",
  },
  {
    badge: "Language",
    badgeClass: "language",
    title: "German",
    value: "A2 Level",
    detail: "Currently learning German for higher education in Germany.",
  },
  {
    badge: "Competition",
    badgeClass: "competition",
    title: "Interschool Software Development",
    value: "1st Place",
    detail:
      "Won first place in an interschool software development competition.",
  },
  {
    badge: "Competition",
    badgeClass: "competition",
    title: "IIT University Software Dev",
    value: "2nd Place",
    detail:
      "Achieved second place in the IIT university software development competition.",
  },
  {
    badge: "Competition",
    badgeClass: "competition",
    title: "SLIIT ICT Quiz",
    value: "All Island 3rd Place",
    detail:
      "Achieved third place island-wide in the SLIIT university ICT quiz competition.",
  },
  {
    badge: "Competition",
    badgeClass: "competition",
    title: "SLIIT Coding Competition",
    value: "Participant",
    detail:
      "Participated in the SLIIT university coding competition.",
  },
  {
    badge: "Competition",
    badgeClass: "competition",
    title: "Reply Challenge",
    value: "38th Place",
    detail:
      "Team participation in an international problem-solving and coding challenge.",
  },
  {
    badge: "Music",
    badgeClass: "music",
    title: "Provincial Orchestra",
    value: "2nd Place",
    detail:
      "Achieved second place at the provincial level for orchestra performance.",
  },
  {
    badge: "Leadership",
    badgeClass: "leadership",
    title: "Robotics Club",
    value: "Treasurer",
    detail:
      "Financial management, record keeping, and society activity coordination.",
  },
];

const Achievements = () => {
  const [certOpen, setCertOpen] = useState(false);

  return (
    <div className="section-wrapper reveal" id="achievements">
      <div className="section-inner">
        <span className="section-label">Achievements</span>
        <h2 className="section-title">Certifications &amp; Awards</h2>
        <p className="section-subtitle achievements-sub">
          Academic excellence, language proficiency, competition wins, and leadership.
        </p>

        <div className="achievements-grid">
          {achievements.map((a) => (
            <div key={a.title} className="achievement-card">
              <span className={`ach-badge ${a.badgeClass}`}>{a.badge}</span>
              <h3>{a.title}</h3>
              <div className="ach-value">{a.value}</div>
              <p>{a.detail}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <button className="btn btn-secondary" onClick={() => setCertOpen(true)}>
            View Certificates &amp; Documents
          </button>
        </div>
      </div>

      <CertificateViewer isOpen={certOpen} onClose={() => setCertOpen(false)} />
    </div>
  );
};

export default Achievements;
