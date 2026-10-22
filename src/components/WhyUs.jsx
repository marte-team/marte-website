import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { whyUs } from "../data/siteContent";

function WhyUs() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section className="section why-section" id="why-us">
      <div className="section-container">
        <div className="dark-heading">
          <span className="eyebrow">WHY MARTÉ</span>
          <h2>
            More than another <span>CRM partner.</span>
          </h2>
          <p className="section-subheading">
            Strategy, technology, automation, and email deliverability, brought together under one accountable team.
          </p>
        </div>

        <div className="why-editorial-layout">
          {/* Subtle Human Partnership Photography */}
          <div className="why-media-card">
            <div className="why-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
                alt="Two business professionals in a collaborative partnership and handshake"
                className="why-editorial-image"
                loading="lazy"
              />
              <div className="why-image-gradient"></div>
              <div className="why-image-quote">
                <span className="quote-tag">FULL-LIFECYCLE ADVANTAGE</span>
                <p>
                  "The same team that sets up your CRM is the one managing your campaigns and protecting deliverability. Nothing gets lost in transition."
                </p>
              </div>
            </div>
            <div className="why-trust-points">
              <div className="trust-point">
                <CheckCircle2 size={16} />
                <span>Single Point of Contact &amp; Ownership</span>
              </div>
              <div className="trust-point">
                <CheckCircle2 size={16} />
                <span>Dedicated CRM Specialists</span>
              </div>
              <div className="trust-point">
                <CheckCircle2 size={16} />
                <span>Direct Alignment with Revenue Metrics</span>
              </div>
            </div>
          </div>

          {/* Structured Differentiator Cards */}
          <div className="why-cards-grid">
            {whyUs.map((item, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <article
                  className={`why-feature-card ${isExpanded ? "expanded" : ""}`}
                  key={item.number}
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                >
                  <div className="why-card-top">
                    <span className="feature-num">{item.number}</span>
                    <ArrowUpRight size={18} className="why-card-arrow" />
                  </div>
                  <h3>{item.title}</h3>
                  <p className="why-summary-text">{item.summary}</p>
                  
                  {isExpanded ? (
                    <div className="why-full-text">
                      <p>{item.text}</p>
                      <button type="button" className="why-toggle-btn">Show less</button>
                    </div>
                  ) : (
                    <button type="button" className="why-toggle-btn">
                      Read more +
                    </button>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
