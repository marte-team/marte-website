import { useEffect } from "react";
import { X, ShieldCheck } from "lucide-react";

function ConsultationModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose} type="button" aria-label="Close consultation modal">
          <X size={20} />
        </button>
        <div className="modal-header">
          <span className="eyebrow">MARTÉ • STRATEGY CONSULTATION</span>
          <h3 id="modal-title">Book a Free Consultation</h3>
          <p>
            Share your current CRM platforms, team requirements, or challenges. A MARTÉ specialist will review your setup.
          </p>
        </div>
        <div className="modal-form-wrap">
          <iframe
            title="MARTÉ Consultation Form"
            width="540"
            height="320"
            src="https://2b25a492.sibforms.com/v2/serve/MUIFANXmElybhI2hb1VXXUMyZ7mK6xKd3UA2HhnCC0smnJj11mR5h6F2mlaVR11cTEMT8tN6PZR7htrViBBGmtvk3y3tuA8xKmUWCqmwfI1iuPH5TMImDQKpVRPvi88xRNVL4b5pnRAK30V4N_PEftLnAYxmaGEs4b3C94JT7CmiZ7Z1AHmG9JUpaENpluRXwL9xSH5P36WO0oS5Dg=="
            frameBorder="0"
            scrolling="auto"
            allowFullScreen
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "100%",
              width: "100%",
              minHeight: "330px",
              border: 0,
              background: "#ffffff"
            }}
          ></iframe>
        </div>
        <div className="modal-footer-note">
          <ShieldCheck size={16} />
          <span>No pitch decks. No sales pressure. Direct conversation with CRM practitioners.</span>
        </div>
      </div>
    </div>
  );
}

export default ConsultationModal;
