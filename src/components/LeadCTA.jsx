import { ArrowUpRight } from "lucide-react";

const LEAD_FORM_URL = "#lead-form";

function LeadCTA() {
  return (
    <section className="lead-cta-section" id="lead-form">
      <div className="lead-cta-grid"></div>

      <div className="section-container">
        <div className="lead-cta-content">
          <span className="eyebrow">07 / LET'S FIND THE GAP</span>

          <h2>
            Know why your leads
            <span> are not converting?</span>
          </h2>

          <p>
            Let's identify what is happening between your campaigns, your CRM,
            and the customer.
          </p>

          <a href={LEAD_FORM_URL} className="lead-cta-button">
            Know why your leads are not converting
            <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default LeadCTA;