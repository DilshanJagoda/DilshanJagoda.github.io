import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";

const TABS = ["Overview", "Features", "Architecture", "Database"];

const OverviewTab = ({ p }) => (
  <div>
    {p.github && (
      <p style={{ marginBottom: 20 }}>
        <a href={p.github} target="_blank" rel="noopener noreferrer" className="external-link">
          View on GitHub ↗
        </a>
      </p>
    )}
    {p.deployed && (
      <div className="deployed-badge">
        <div className="deployed-icon">🚀</div>
        <div>
          <div className="deployed-label">Live Deployment</div>
          <div className="deployed-text">{p.deployed}</div>
        </div>
      </div>
    )}
    <h3>Purpose</h3>
    <p>{p.purpose}</p>
    {p.problem && (
      <>
        <h3>The Problem</h3>
        <p>{p.problem}</p>
      </>
    )}
    {p.designDecision && (
      <>
        <h3>Key Design Decision</h3>
        <div className="highlight-box">{p.designDecision}</div>
      </>
    )}
    {p.dataFlow && (
      <>
        <h3>Data Flow</h3>
        <p className="mono-text">{p.dataFlow}</p>
      </>
    )}
    {p.deployment && (
      <>
        <h3>Deployment</h3>
        <p>{p.deployment}</p>
      </>
    )}
    {p.auth && (
      <>
        <h3>Authentication</h3>
        <p>{p.auth}</p>
      </>
    )}
    {p.futureImprovements?.length > 0 && (
      <>
        <h3>Future Improvements</h3>
        <ul>
          {p.futureImprovements.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </>
    )}
  </div>
);

const FeaturesTab = ({ p }) => (
  <div>
    <h3>Core Features</h3>
    <ul>
      {p.features.map((f) => (
        <li key={f}>{f}</li>
      ))}
    </ul>
    {p.security?.length > 0 && (
      <>
        <h3>Security</h3>
        <ul>
          {p.security.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </>
    )}
  </div>
);

const ArchitectureTab = ({ p }) => (
  <div>
    <h3>System Architecture</h3>
    <p>The application follows a client-server architecture with clearly separated layers.</p>
    <div className="architecture-diagram">
      {(() => {
        const parts = p.architecture.map(
          (a, i) => `┌──────────────────────┐
│ ${a.layer.padEnd(20)} │
│                       │
│ ${a.desc.slice(0, 36).padEnd(20)}
${i < p.architecture.length - 1 ? `└──────────┬───────────┘
           │
           ▼` : "└──────────────────────┘"}`
        );
        return parts.join("\n");
      })()}
    </div>
    {p.architecture.map((a, i) => (
      <div key={i}>
        <h4>{a.layer}</h4>
        <p>{a.desc}</p>
      </div>
    ))}
  </div>
);

const DatabaseTab = ({ p }) => {
  if (!p.databaseTables?.length) {
    return <p className="empty-state">No database documentation available for this project.</p>;
  }
  return (
    <div>
      <h3>Database Design</h3>
      <p>The system uses a relational MySQL database designed for data integrity, scalability, and maintaining accurate records.</p>
      <h4>Tables</h4>
      <ul>
        {p.databaseTables.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

const ProjectDetail = () => {
  const { id } = useParams();
  const p = projects.find((p) => p.id === id);
  const [tab, setTab] = useState(0);

  if (!p) {
    return (
      <div className="project-detail-wrapper">
        <h2>Project not found</h2>
        <Link to="/" className="project-detail-back">← Back to Home</Link>
      </div>
    );
  }

  const tabs = [OverviewTab, FeaturesTab, ArchitectureTab, DatabaseTab];
  const TabComponent = tabs[tab];

  return (
    <div className="project-detail-wrapper">
      <Link to="/" className="project-detail-back">← Back to Projects</Link>

      <div className="project-detail-header">
        <h2>{p.title}</h2>
        <div className="detail-tech-strip">
          {p.tech.split(", ").map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        {p.github && (
          <p style={{ marginTop: 14 }}>
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="external-link">
              View on GitHub ↗
            </a>
          </p>
        )}
      </div>

      <div className="detail-tabs">
        {TABS.map((label, i) => (
          <button
            key={label}
            className={`detail-tab${tab === i ? " active" : ""}`}
            onClick={() => setTab(i)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="detail-panel">
        <TabComponent p={p} />
      </div>
    </div>
  );
};

export default ProjectDetail;
