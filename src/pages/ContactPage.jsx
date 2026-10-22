import { useState } from "react";
import { Mail, Linkedin, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, Clock } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/company/marte-business/";
const CONTACT_EMAIL = "sales.marte.com@gmail.com";

const diagnosticQuestions = [
  "CRM data is clean, standardized, and free of duplicate records",
  "Marketing and sales share complete lead context and history",
  "Automations and email workflows are actively monitored for silent failures",
  "Campaign performance and revenue contribution are clearly measurable",
  "Customer communications consistently land in the inbox, not the spam folder"
];

function ContactPage() {
  const [checked, setChecked] = useState([]);

  const toggleCheck = (index) => {
    setChecked((old) =>
      old.includes(index) ? old.filter((n) => n !== index) : [...old, index]
    );
  };

  return (
    <div className="subpage-wrapper">
      {/* Subpage Header Banner */}
      <section className="subpage-hero">
        <div className="subpage-hero-grid" aria-hidden="true"></div>
        <div className="section-container">
          <div className="subpage-hero-content">
            <span className="eyebrow">CONTACT &amp; DIAGNOSTIC</span>
            <h1>Let's Find the Gap</h1>
            <p className="subpage-lead-copy">
              Audit your CRM with our interactive self-check below, or send us your details directly to schedule a confidential strategy session.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section: Balanced 2-Column (Diagnostic + Form) */}
      <section className="section contact-page-section">
        <div className="section-container">
          <div className="contact-page-layout">
            {/* Column 1: Quick Diagnostic Self-Check */}
            <div className="contact-diagnostic-column">
              <div className="contact-diagnostic-card">
                <div className="diagnostic-header">
                  <span className="form-badge">QUICK SELF-CHECK</span>
                  <h3>Is your CRM working as hard as it should?</h3>
                  <p>Check the areas you feel confident about. Any gap reveals where revenue or deliverability could be slipping.</p>
                </div>

                <div className="diagnostic-score-strip">
                  <span>SYSTEM READINESS</span>
                  <span className="score-count">{checked.length}/{diagnosticQuestions.length} Confirmed</span>
                </div>

                <div className="diagnostic-list">
                  {diagnosticQuestions.map((q, index) => {
                    const isChecked = checked.includes(index);
                    return (
                      <label
                        className={`diagnostic-item ${isChecked ? "checked" : ""}`}
                        key={q}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleCheck(index);
                        }}
                      >
                        <span className="diagnostic-checkbox">
                          {isChecked ? <CheckCircle2 size={16} /> : null}
                        </span>
                        <span className="diagnostic-text">{q}</span>
                      </label>
                    );
                  })}
                </div>

                <div className="diagnostic-note">
                  <ShieldCheck size={16} />
                  <span>Use these points in your consultation call for a targeted technical review.</span>
                </div>
              </div>
            </div>

            {/* Column 2: Embedded Brevo Form */}
            <div className="contact-form-column" id="contact-form">
              <div className="contact-form-card">
                <div className="form-card-top">
                  <span className="form-badge">FREE STRATEGY INQUIRY</span>
                  <h3>Tell us where you need support</h3>
                  <p>Share your current CRM platforms and growth goals. A MARTÉ specialist will review your setup.</p>
                </div>

                <div className="embedded-iframe-container">
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
                      minHeight: "330px",
                      border: 0,
                      background: "#ffffff"
                    }}
                  ></iframe>
                </div>

                <div className="form-card-guarantee">
                  <Sparkles size={15} />
                  <span>Confidential review. Direct conversation with CRM specialists.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Full-Width Direct Reach Banner Across Both Columns (Zero Empty Right Space!) */}
          <div className="contact-direct-full-banner">
            <div className="direct-banner-header">
              <span className="box-eyebrow">DIRECT CONTACT</span>
              <h3>Prefer email or LinkedIn?</h3>
              <p>Reach out directly to discuss your CRM architecture or ongoing marketing operations.</p>
            </div>

            <div className="direct-banner-channels">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="direct-channel-card"
                aria-label="Email MARTÉ"
              >
                <div className="direct-channel-bubble">
                  <Mail size={18} />
                </div>
                <div className="direct-channel-text">
                  <small>Email Us</small>
                  <span>{CONTACT_EMAIL}</span>
                </div>
                <ArrowUpRight size={16} className="channel-arrow" />
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="direct-channel-card"
                aria-label="MARTÉ on LinkedIn"
              >
                <div className="direct-channel-bubble linkedin-bubble">
                  <Linkedin size={18} />
                </div>
                <div className="direct-channel-text">
                  <small>Company Page</small>
                  <span>Follow MARTÉ on LinkedIn</span>
                </div>
                <ArrowUpRight size={16} className="channel-arrow" />
              </a>

              <div className="direct-channel-card direct-guarantee-card">
                <div className="direct-channel-bubble guarantee-bubble">
                  <Clock size={18} />
                </div>
                <div className="direct-channel-text">
                  <small>Fast Response</small>
                  <span>Reply within 24 business hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
