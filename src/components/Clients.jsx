import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Building2, FlaskConical } from "lucide-react";
import { clients } from "../data/siteContent";

const clientBadges = [
  { icon: Building2, tag: "ENTERPRISE LOCALIZATION & TECH", timeline: "Full Infrastructure Setup" },
  { icon: FlaskConical, tag: "LIFE SCIENCES & BIOTECH", timeline: "Multi-Year Ongoing Partnership" }
];

function Clients() {
  const [expandedClient, setExpandedClient] = useState(null);

  return (
    <section className="section clients-section" id="clients">
      <div className="section-container">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">06 / CLIENT ENGAGEMENTS</span>
            <h2>Real Systems. Real Businesses.</h2>
          </div>
          <p>
            A look at how we design, implement, and manage CRM infrastructure for organizations that rely on dependable customer operations.
          </p>
        </div>

        <div className="clients-grid">
          {clients.map((client, index) => {
            const badge = clientBadges[index] || { icon: Building2, tag: client.category, timeline: "Verified Engagement" };
            const Icon = badge.icon;
            const isExpanded = expandedClient === index;

            return (
              <article className="client-case-card" key={client.name}>
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
                    <span>Single-Team Ownership</span>
                  </div>
                </div>

                <div className="client-details-reveal">
                  {isExpanded ? (
                    <div className="client-deep-dive">
                      <p>{client.text}</p>
                      <button
                        type="button"
                        className="client-toggle-btn"
                        onClick={() => setExpandedClient(null)}
                      >
                        Hide details −
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="client-toggle-btn"
                      onClick={() => setExpandedClient(index)}
                    >
                      <span>Read engagement story</span>
                      <ArrowUpRight size={15} />
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Clients;
