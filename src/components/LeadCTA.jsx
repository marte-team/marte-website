import { ShieldCheck, Sparkles } from "lucide-react";

function LeadCTA() {
  return (
    <section className="lead-cta-section" id="lead-form">
      <div className="lead-cta-grid" aria-hidden="true"></div>
      <div className="section-container">
        <div className="lead-cta-layout">
          <div className="lead-cta-copy">
            <span className="eyebrow">START A CONVERSATION</span>
            <h2>
              Know why your leads <span>are not converting?</span>
            </h2>
            <p>
              Let’s look at what happens between your campaigns, your CRM, and the customer. Share your details and we will schedule a strategic review.
            </p>
            <div className="lead-guarantee-list">
              <div className="guarantee-item">
                <ShieldCheck size={18} />
                <span>Confidential review of your tech stack</span>
              </div>
              <div className="guarantee-item">
                <Sparkles size={18} />
                <span>Actionable feedback from CRM practitioners</span>
              </div>
            </div>
          </div>

          <div className="lead-embedded-form-box" id="contact-form">
            <div className="form-box-header">
              <span className="form-badge">FREE STRATEGY INQUIRY</span>
              <h3>Tell us where you need support</h3>
            </div>
            <iframe
              title="MARTÉ contact form"
              width="540"
              height="305"
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
                minHeight: "315px",
                border: 0,
                background: "#ffffff"
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeadCTA;
