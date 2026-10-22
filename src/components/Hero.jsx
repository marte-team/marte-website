import { useState } from "react";
import { ArrowUpRight, ArrowDownRight, ShieldCheck, Sparkles } from "lucide-react";

function Hero({ onOpenConsultation }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onOpenConsultation) {
      onOpenConsultation(email);
    }
  };

  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true"></div>
      <div className="hero-content">
        <div className="hero-logo-wrap">
          <img src="/logo/marte-logo-transparent.png" alt="MARTÉ" className="hero-logo" />
        </div>
        <div className="hero-eyebrow">CRM STRATEGY &amp; GROWTH SERVICES</div>
        <h1>
          Build. Manage. <span>Optimize. Scale.</span>
        </h1>
        <p className="hero-supporting-copy">
          We help ambitious businesses build, manage, and scale the CRM systems behind better customer journeys and sustainable revenue.
        </p>

        {/* Top-of-Funnel Email Capture CTA */}
        <div className="hero-cta-wrapper">
          <form className="hero-email-capture" onSubmit={handleSubmit}>
            <input
              type="email"
              className="hero-email-input"
              placeholder="Enter your business email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="hero-submit-btn">
              <span>Review Your CRM Setup</span>
              <ArrowUpRight size={17} />
            </button>
          </form>
          <div className="hero-secondary-actions">
            <a href="#problems" className="hero-explore-link">
              <span>Discover Where Systems Break</span>
              <ArrowDownRight size={16} />
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="hero-trust-bar">
          <div className="trust-pill">
            <ShieldCheck size={14} />
            <span>EMEA &amp; LATAM Operations</span>
          </div>
          <div className="trust-separator">•</div>
          <div className="trust-pill">
            <span>Salesforce • HubSpot • Braze • Klaviyo</span>
          </div>
          <div className="trust-separator">•</div>
          <div className="trust-pill">
            <Sparkles size={14} />
            <span>Full Lifecycle Accountability</span>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;
