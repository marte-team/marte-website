import { ArrowUpRight, Check } from "lucide-react";
import { services } from "../data/siteContent";

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="section-container">
        <div className="section-heading">
          <span className="eyebrow">03 / WHAT WE DO</span>

          <h2>Services We Offer</h2>

          <p className="section-intro">
            At MARTÉ, we help marketing and growth teams across Europe, EMEA,
            LATAM, and the UAE turn their CRM and marketing automation stack
            into a genuine growth engine. From day-to-day management to full
            implementation, we act as an extension of your team, so your
            campaigns launch faster, your data works harder, and your emails
            actually reach the inbox.
          </p>
        </div>

        <div className="services-list">
          {services.map((service) => (
            <article
              className="service-card"
              id={service.id}
              key={service.id}
            >
              <div className="service-number">{service.number}</div>

              <div className="service-content">
                <div className="service-title-row">
                  <h3>{service.title}</h3>
                  <ArrowUpRight size={24} />
                </div>

                <p className="service-intro">{service.intro}</p>

                {service.bullets && (
                  <ul className="service-bullets">
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>
                        <Check size={17} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {service.pillars && (
                  <div className="service-pillars">
                    {service.pillars.map((pillar) => (
                      <div className="service-pillar" key={pillar.title}>
                        <span>{pillar.title}</span>
                        <p>{pillar.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                <p className="service-closing">{service.closing}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;