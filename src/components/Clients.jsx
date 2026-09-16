import { ArrowUpRight } from "lucide-react";
import { clients } from "../data/siteContent";

function Clients() {
  return (
    <section className="section clients-section" id="clients">
      <div className="section-container">
        <div className="section-heading">
          <span className="eyebrow">06 / OUR CLIENTS</span>
          <h2>Real systems. Real businesses.</h2>
        </div>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <article className="client-card" key={client.name}>
              <div className="client-card-top">
                <span>0{index + 1}</span>
                <ArrowUpRight size={22} />
              </div>

              <div className="client-mark">
                {client.name.charAt(0)}
              </div>

              <span className="client-category">{client.category}</span>

              <h3>{client.name}</h3>

              <p>{client.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;