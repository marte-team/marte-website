import Hero from "../components/Hero";
import Problems from "../components/Problems";
import Lifecycle from "../components/Lifecycle";
import WhyUs from "../components/WhyUs";
import Services from "../components/Services";
import Expertise from "../components/Expertise";
import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "../router";

function HomePage({ onOpenConsultation }) {
  return (
    <>
      <Hero onOpenConsultation={onOpenConsultation} />
      <Problems />
      <Lifecycle />
      <WhyUs />
      <Services onOpenConsultation={onOpenConsultation} />
      <Expertise />

      {/* Clean Bottom Home CTA linking to Contact */}
      <section className="section home-bottom-cta">
        <div className="section-container">
          <div className="home-cta-card">
            <div className="home-cta-copy">
              <span className="eyebrow">NEXT STEPS</span>
              <h2>Ready to turn your CRM into a growth engine?</h2>
              <p>
                Whether you need platform setup, multi-channel campaign management, or deliverability protection, we carry full accountability.
              </p>
              <div className="home-cta-trust">
                <div className="trust-item">
                  <ShieldCheck size={16} />
                  <span>Confidential setup review</span>
                </div>
                <div className="trust-item">
                  <Sparkles size={16} />
                  <span>Practitioner-led execution</span>
                </div>
              </div>
            </div>
            <div className="home-cta-actions">
              <button
                type="button"
                className="cta-primary-btn"
                onClick={onOpenConsultation}
              >
                <span>Book a Free Consultation</span>
                <ArrowUpRight size={17} />
              </button>
              <Link to="/contact" className="cta-secondary-link">
                <span>Run Diagnostic &amp; Contact Us</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
