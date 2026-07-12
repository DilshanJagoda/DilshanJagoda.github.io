import { useState } from "react";

const certificates = [
  { file: "Treasurer- Dilshan Jagoda.pdf", title: "Treasurer - Robotics Club", type: "pdf" },
  { file: "AL Results.pdf", title: "G.C.E. A/L Results", type: "pdf" },
  { file: "IELTS.pdf", title: "IELTS Certificate", type: "pdf" },
  { file: "ReplyCodeChallenge2024_Certificate 38th place.pdf", title: "Reply Challenge 2024 - 38th Place", type: "pdf" },
  { file: "1st place interschool software development comp.png", title: "1st Place - Interschool Software Dev", type: "image" },
  { file: "softwaredevelopment comp.png", title: "2nd Place - IIT University Software Dev", type: "image" },
  { file: "SLIIT university all island3rd place ict quiz.png", title: "All Island 3rd Place - SLIIT ICT Quiz", type: "image" },
  { file: "SLIIT coding.png", title: "SLIIT Coding Competition", type: "image" },
  { file: "provincial 2nd place on orchestra.png", title: "Provincial 2nd Place - Orchestra", type: "image" },
];

const CertificateViewer = ({ isOpen, onClose }) => {
  const [selected, setSelected] = useState(null);

  if (!isOpen) return null;

  return (
    <div className="cert-overlay" onClick={onClose}>
      <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
        <button className="cert-close" onClick={onClose}>✕</button>

        {selected === null ? (
          <>
            <h3 className="cert-modal-title">Certificates & Documents</h3>
            <p className="cert-modal-subtitle">Click any certificate to view it.</p>
            <div className="cert-grid">
              {certificates.map((cert) => (
                <button
                  key={cert.file}
                  className="cert-item"
                  onClick={() => setSelected(cert)}
                >
                  <span className="cert-icon">{cert.type === "pdf" ? "📄" : "🖼️"}</span>
                  <span className="cert-name">{cert.title}</span>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <button className="cert-back" onClick={() => setSelected(null)}>← Back to list</button>
            <h3 className="cert-modal-title">{selected.title}</h3>
            {selected.type === "image" ? (
              <img
                src={`/src/certificates/${selected.file}`}
                alt={selected.title}
                className="cert-preview-img"
              />
            ) : (
              <iframe
                src={`/src/certificates/${selected.file}`}
                title={selected.title}
                className="cert-preview-pdf"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CertificateViewer;
