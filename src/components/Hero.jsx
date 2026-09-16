import { ArrowDown, ArrowUpRight } from "lucide-react";

const LEAD_FORM_URL = "#lead-form";

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid"></div>

      <div className="hero-content">
        <div className="hero-logo-wrap">
          <img
            src="/logo/marte-logo.svg"
            alt="MARTÉ"
            className="hero-logo"
          />
        </div>

        <div className="hero-eyebrow">
          CRM • MARKETING AUTOMATION • GROWTH
        </div>

        <h1>
          Turning complex CRM systems
          <span> into growth engines.</span>
        </h1>

        <div className="hero-actions">
          <a href={LEAD_FORM_URL} className="hero-email-button">
            Enter your email
            <ArrowUpRight size={18} />
          </a>

          <a href="#contact" className="hero-connect-button">
            Connect with us
            <ArrowDown size={17} />
          </a>
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