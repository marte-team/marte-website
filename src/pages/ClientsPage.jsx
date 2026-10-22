import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Building2, FlaskConical, ShieldCheck, Sparkles } from "lucide-react";
import { clients } from "../data/siteContent";
import { Link } from "../router";

const clientBadges = [
  { icon: Building2, tag: "ENTERPRISE LOCALIZATION & TECH", timeline: "Full Infrastructure Setup" },
  { icon: FlaskConical, tag: "LIFE SCIENCES & BIOTECH", timeline: "Multi-Year Ongoing Partnership" }
];

function ClientsPage({ onOpenConsultation }) {
  const [expandedClient, setExpandedClient] = useState(0);

  return (
    <div className="subpage-wrapper">
      {/* Subpage Header Banner */}
      <section className="subpage-hero">
        <div className="subpage-hero-grid" aria-hidden="true"></div>
        <div className="section-container">
          <div className="subpage-hero-content">
            <span className="eyebrow">OUR CLIENTS</span>
            <h1>Real Systems. Real Businesses.</h1>
            <p className="subpage-lead-copy">
              A detailed look at how we design, implement, and manage CRM infrastructure for organizations that rely on dependable customer operations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Clients Grid Section (Strictly Text & Metrics — Zero Images) */}
      <section className="section clients-page-section">
        <div className="section-container">
          <div className="clients-page-grid">
            {clients.map((client, index) => {
              const badge = clientBadges[index] || { icon: Building2, tag: client.category, timeline: "Verified Engagement" };
              const Icon = badge.icon;
              const isExpanded = expandedClient === index;

              return (
                <article className="client-case-card client-page-card" key={client.name}>
                  <div className="client-card-top-row">
                    <div className="client-badge-pill">
                      <Icon size={14} />
                      <span>{badge.tag}</span>
                    </div>
                    <span className="client-index-num">0{index + 1}</span>
                  </div>

                  <div className="client-main-info">
                    <span className="client-timeline-note">{badge.timeline}</span>
                    <h3>{client.name}</h3>
                    <p className="client-summary-lead">{client.summary}</p>
                  </div>

                  <div className="client-deliverable-strip">
                    <div className="deliverable-tag">
                      <CheckCircle2 size={13} />
                      <span>Verified Implementation</span>
                    </div>
                    <div className="deliverable-tag">
                      <CheckCircle2 size={13} />
                      <span>Single-Team Accountability</span>
                    </div>
                    <div className="deliverable-tag">
                      <CheckCircle2 size={13} />
                      <span>Scalable Campaign Logic</span>
                    </div>
                  </div>

                  <div className="client-deep-dive">
                    <p>{client.text}</p>
                  </div>

                  <div className="client-page-footer">
                    <button
                      type="button"
                      className="client-discuss-btn"
                      onClick={onOpenConsultation}
                    >
                      <span>Discuss a Similar Project</span>
                      <ArrowUpRight size={15} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Operational Guarantees Strip */}
          <div className="clients-trust-banner">
            <div className="trust-column">
              <ShieldCheck size={20} className="trust-icon" />
              <h4>Zero Vendor Lock-In</h4>
              <p>Everything we build is configured in your own tool instances, ensuring complete ownership of your data and workflows.</p>
            </div>
            <div className="trust-column">
              <Sparkles size={20} className="trust-icon" />
              <h4>Practitioner Execution</h4>
              <p>You work directly with dedicated CRM strategists and automation specialists focused on your systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Bridge CTA */}
      <section className="section subpage-bridge-cta">
        <div className="section-container">
          <div className="bridge-card">
            <div>
              <span className="eyebrow">GET IN TOUCH</span>
              <h2>Ready to discuss your CRM setup with MARTÉ?</h2>
            </div>
            <div className="bridge-actions">
              <Link to="/contact" className="bridge-btn">
                <span>Go to Contact &amp; Diagnostics</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClientsPage;
