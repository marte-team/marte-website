import { ArrowUpRight } from "lucide-react";
import { expertise } from "../data/siteContent";

function Expertise() {
  return (
    <section className="section expertise-section" id="expertise">
      <div className="section-container">
        <div className="expertise-header">
          <div>
            <span className="eyebrow">04 / OUR EXPERTISE</span>
            <h2>Built around the systems behind growth.</h2>
          </div>

          <p>
            From CRM architecture to the final email reaching the inbox, our
            expertise covers the systems and processes that make modern
            marketing operations work.
          </p>
        </div>

        <div className="expertise-grid">
          {expertise.map((item) => (
            <article className="expertise-card" key={item.number}>
              <div className="expertise-number">{item.number}</div>

              <div className="expertise-card-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>

              <ArrowUpRight size={19} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;