import { ArrowUpRight, Cpu, Compass, Activity, BarChart2, ShieldCheck, Link2 } from "lucide-react";
import { expertise } from "../data/siteContent";

const expertiseIcons = [Compass, Cpu, Activity, BarChart2, ShieldCheck, Link2];

function Expertise() {
  return (
    <section className="section expertise-section" id="expertise">
      <div className="section-container">
        <div className="section-heading full-width-heading">
          <span className="eyebrow">EXPERTISE</span>
          <h2>Built Around the Systems Behind Growth</h2>
          <p className="section-subheading">
            From enterprise CRM architecture to final deliverability protocols, our domain expertise covers the full technical stack of modern revenue operations.
          </p>
        </div>

        <div className="expertise-grid">
          {expertise.map((item, index) => {
            const Icon = expertiseIcons[index] || Compass;
            return (
              <article className="expertise-card" key={item.number}>
                <div className="expertise-card-top-bar">
                  <span className="expertise-number">{item.number}</span>
                  <Icon size={19} className="expertise-top-icon" />
                </div>

                <div className="expertise-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                <div className="expertise-corner-action">
                  <ArrowUpRight size={17} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
