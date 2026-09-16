import { ArrowUpRight } from "lucide-react";
import { problems } from "../data/siteContent";

function Problems() {
  return (
    <section className="section problems-section" id="problems">
      <div className="section-container">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">01 / THE PROBLEM</span>
            <h2>Where CRM Systems Typically Fall Short</h2>
          </div>

          <p>
            Your CRM can do far more than store contacts. The problem is often
            not the platform itself, but how it is configured, managed, and
            connected to the rest of your marketing operation.
          </p>
        </div>

        <div className="problems-layout">
          <div className="problem-visual">
            <div className="visual-window">
              <div className="visual-window-top">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="visual-dashboard">
                <div className="dashboard-sidebar">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="dashboard-main">
                  <div className="dashboard-title"></div>

                  <div className="dashboard-cards">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="dashboard-chart">
                    <div className="chart-line"></div>
                    <div className="chart-line second"></div>
                  </div>
                </div>
              </div>

              <div className="visual-alert">
                <span className="alert-dot"></span>
                System performance requires attention
              </div>
            </div>

            <div className="visual-caption">
              <span>CRM SYSTEM</span>
              <span>01—05</span>
            </div>
          </div>

          <div className="problems-list">
            {problems.map((problem) => (
              <article className="problem-item" key={problem.number}>
                <div className="problem-number">{problem.number}</div>

                <div className="problem-copy">
                  <h3>{problem.title}</h3>
                  <p>{problem.text}</p>
                </div>

                <ArrowUpRight className="problem-arrow" size={20} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Problems;