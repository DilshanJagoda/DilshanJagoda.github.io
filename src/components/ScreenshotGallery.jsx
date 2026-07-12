import { useState, useCallback } from "react";

const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  if (currentIndex === null) return null;

  const img = images[currentIndex];

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lb-close" onClick={onClose}>✕</button>
      {images.length > 1 && currentIndex > 0 && (
        <button className="lb-nav lb-prev" onClick={(e) => { e.stopPropagation(); onPrev(); }}>‹</button>
      )}
      {images.length > 1 && currentIndex < images.length - 1 && (
        <button className="lb-nav lb-next" onClick={(e) => { e.stopPropagation(); onNext(); }}>›</button>
      )}
      <div className="lb-img-wrap" onClick={(e) => e.stopPropagation()}>
        {img?.url && <img src={img.url} alt={img.caption} />}
        {img?.caption && <div className="lb-caption">{img.caption}</div>}
      </div>
    </div>
  );
};

const ScreenshotGallery = ({ screenshots }) => {
  const [lbIndex, setLbIndex] = useState(null);

  const allImages = Object.values(screenshots).flat();

  const open = useCallback((idx) => setLbIndex(idx), []);
  const close = useCallback(() => setLbIndex(null), []);
  const prev = useCallback(() => setLbIndex((i) => (i > 0 ? i - 1 : allImages.length - 1)), [allImages.length]);
  const next = useCallback(() => setLbIndex((i) => (i < allImages.length - 1 ? i + 1 : 0)), [allImages.length]);

  if (!allImages.length) {
    return <p style={{ color: "var(--text-muted)", fontStyle: "italic" }}>No screenshots available.</p>;
  }

  let globalIdx = 0;

  return (
    <>
      {Object.entries(screenshots).map(([category, items]) => {
        if (!items.length) return null;
        return (
          <div key={category}>
            <div className="gal-section-title">{category}</div>
            <div className="screenshot-gallery">
              {items.map((img) => {
                const idx = globalIdx++;
                return (
                  <div key={img.file} className="gal-item" onClick={() => open(idx)}>
                    {img.url ? (
                      <img src={img.url} alt={img.caption} loading="lazy" />
                    ) : (
                      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontSize: 14 }}>
                        No preview
                      </div>
                    )}
                    <div className="gal-caption">{img.caption}</div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      <Lightbox images={allImages} currentIndex={lbIndex} onClose={close} onPrev={prev} onNext={next} />
    </>
  );
};

export default ScreenshotGallery;
