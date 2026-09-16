import { ArrowUpRight } from "lucide-react";
import { whyUs } from "../data/siteContent";

function WhyUs() {
  return (
    <section className="section why-section" id="why-us">
      <div className="section-container">
        <div className="dark-heading">
          <span className="eyebrow">02 / WHY MARTÉ</span>

          <h2>
            More than another
            <span> CRM partner.</span>
          </h2>

          <p>
            We combine implementation, management, marketing automation,
            growth, and deliverability under one accountable partner.
          </p>
        </div>

        <div className="why-grid">
          {whyUs.map((item) => (
            <article className="why-card" key={item.number}>
              <div className="why-card-top">
                <span>{item.number}</span>
                <ArrowUpRight size={21} />
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;