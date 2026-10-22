import { useState } from "react";
import { ArrowUpRight, Check, X, Layers, Sliders, TrendingUp, MailCheck } from "lucide-react";
import { services } from "../data/siteContent";

const serviceIcons = [Layers, Sliders, TrendingUp, MailCheck];

function Services({ onOpenConsultation }) {
  const [activeModalService, setActiveModalService] = useState(null);

  const openServiceModal = (service) => {
    setActiveModalService(service);
  };

  const closeServiceModal = () => {
    setActiveModalService(null);
  };

  return (
    <section className="section services-section" id="services">
      <div className="section-container">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">04 / CORE SOLUTIONS</span>
            <h2>Services Built Around Growth</h2>
          </div>
          <p className="section-intro">
            From technical implementation to lifecycle campaigns and inbox deliverability, we bring your systems and customer communications together.
          </p>
        </div>

        {/* 4 Balanced Service Cards */}
        <div className="services-deck-grid">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] || Layers;
            return (
              <article className="service-deck-card" id={service.id} key={service.id}>
                <div className="service-deck-top">
                  <span className="service-number-badge">{service.number}</span>
                  <div className="service-icon-box">
                    <Icon size={20} />
                  </div>
                </div>

                <div className="service-deck-body">
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </div>

                <div className="service-deck-footer">
                  <button
                    type="button"
                    className="service-scope-btn"
                    onClick={() => openServiceModal(service)}
                  >
                    <span>View Deliverables</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Interactive Scope Detail Modal */}
        {activeModalService && (
          <div className="service-modal-backdrop" onClick={closeServiceModal} role="dialog" aria-modal="true">
            <div className="service-modal-box" onClick={(e) => e.stopPropagation()}>
              <button
                className="service-modal-close"
                onClick={closeServiceModal}
                type="button"
                aria-label="Close service details"
              >
                <X size={20} />
              </button>

              <div className="service-modal-header">
                <span className="eyebrow">{activeModalService.number} / SERVICE SCOPE</span>
                <h3>{activeModalService.title}</h3>
                <p className="service-modal-summary">{activeModalService.summary}</p>
              </div>

              <div className="service-modal-body">
                <p className="service-modal-intro">{activeModalService.intro}</p>

                {activeModalService.bullets && (
                  <div className="service-modal-bullets">
                    <h4>Core Deliverables</h4>
                    <ul>
                      {activeModalService.bullets.map((bullet) => (
                        <li key={bullet}>
                          <Check size={16} className="bullet-check" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeModalService.pillars && (
                  <div className="service-modal-pillars">
                    <h4>Strategic Pillars</h4>
                    <div className="pillars-grid">
                      {activeModalService.pillars.map((pillar) => (
                        <div className="pillar-card" key={pillar.title}>
                          <h5>{pillar.title}</h5>
                          <p>{pillar.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <p className="service-modal-closing">{activeModalService.closing}</p>
              </div>

              <div className="service-modal-actions">
                <button
                  type="button"
                  className="service-cta-btn"
                  onClick={() => {
                    closeServiceModal();
                    if (onOpenConsultation) onOpenConsultation();
                  }}
                >
                  <span>Discuss This Service With Us</span>
                  <ArrowUpRight size={17} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Services;
