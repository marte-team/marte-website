import { about } from "../data/siteContent";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "../router";

function AboutPage({ onOpenConsultation }) {
  return (
    <div className="subpage-wrapper">
      {/* Subpage Header Banner */}
      <section className="subpage-hero">
        <div className="subpage-hero-grid" aria-hidden="true"></div>
        <div className="section-container">
          <div className="subpage-hero-content">
            <span className="eyebrow">ABOUT US</span>
            <h1>Why We Started MARTÉ</h1>
            <p className="subpage-lead-copy">
              A story of turning underused marketing technology into scalable, predictable revenue engines.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="section about-narrative-section">
        <div className="section-container">
          <div className="about-narrative-layout">
            <div className="about-narrative-main">
              {about.story.map((paragraph, index) => (
                <p key={index} className="narrative-p">
                  {paragraph}
                </p>
              ))}

              {/* Core Belief Callout Card */}
              <div className="narrative-belief-callout">
                <p>{about.coreBelief}</p>
              </div>

              {about.storyContinuation.map((paragraph, index) => (
                <p key={index} className="narrative-p">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Sticky Sidebar: How We Operate */}
            <aside className="about-sidebar">
              <div className="about-pillar-box">
                <span className="box-eyebrow">OUR COMMITMENT</span>
                <h3>One team across the full CRM lifecycle.</h3>
                <p>
                  We believe businesses shouldn't need a patchwork of disconnected agencies and freelancers to run their customer operations.
                </p>
                <div className="about-sidebar-list">
                  <div className="sidebar-list-item">
                    <CheckCircle2 size={16} />
                    <span>EMEA &amp; LATAM cross-market expertise</span>
                  </div>
                  <div className="sidebar-list-item">
                    <CheckCircle2 size={16} />
                    <span>Salesforce, HubSpot, Braze, Klaviyo specialists</span>
                  </div>
                  <div className="sidebar-list-item">
                    <CheckCircle2 size={16} />
                    <span>End-to-end accountability from setup to scale</span>
                  </div>
                </div>

                <div className="about-sidebar-cta">
                  <button
                    type="button"
                    className="sidebar-btn"
                    onClick={onOpenConsultation}
                  >
                    <span>Schedule a Call</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom Bridge CTA */}
      <section className="section subpage-bridge-cta">
        <div className="section-container">
          <div className="bridge-card">
            <div>
              <span className="eyebrow">VERIFIED OUTCOMES</span>
              <h2>See how we've helped real businesses scale.</h2>
            </div>
            <div className="bridge-actions">
              <Link to="/clients" className="bridge-btn">
                <span>View Client Case Studies</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
