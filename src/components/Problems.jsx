import { useState } from "react";
import { ArrowUpRight, ChevronDown, Database, GitBranch, Workflow, BarChart3, AlertCircle } from "lucide-react";
import { problems } from "../data/siteContent";

const problemIcons = [Database, GitBranch, Workflow, BarChart3, AlertCircle];

function Problems() {
  const [activeProblem, setActiveProblem] = useState(0);

  return (
    <section className="section problems-section" id="problems">
      <div className="section-container">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">01 / THE CORE CHALLENGE</span>
            <h2>Where CRM Systems Fall Short</h2>
          </div>
          <p>
            Your CRM can do far more than store contacts. We identify the operational gaps between what your platform is capable of and how it performs in practice.
          </p>
        </div>

        <div className="problems-editorial-layout">
          {/* Subtle Real Human Photography (Adjacent) */}
          <div className="problem-media-card">
            <div className="problem-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                alt="Professional analyzing business performance data and CRM analytics on a laptop"
                className="problem-editorial-image"
                loading="lazy"
              />
              <div className="problem-image-overlay">
                <span className="image-tag">OPERATIONAL AUDIT</span>
                <h4>Auditing Lead Handovers &amp; Data Flows</h4>
                <p>Pinpointing friction points between marketing campaigns and sales team workflows.</p>
              </div>
            </div>
            <div className="problem-metric-strip">
              <div className="metric-item">
                <span className="metric-number">67%</span>
                <span className="metric-label">CRMs underutilize automation</span>
              </div>
              <div className="metric-item">
                <span className="metric-number">40%</span>
                <span className="metric-label">Leads lost at marketing handover</span>
              </div>
            </div>
          </div>

          {/* Interactive Problem Cards */}
          <div className="problems-interactive-list">
            {problems.map((problem, index) => {
              const Icon = problemIcons[index] || Workflow;
              const isActive = activeProblem === index;
              return (
                <article
                  className={`problem-card-item ${isActive ? "active" : ""}`}
                  key={problem.number}
                  onClick={() => setActiveProblem(isActive ? null : index)}
                >
                  <div className="problem-card-header">
                    <div className="problem-index-tag">
                      <span className="problem-num">{problem.number}</span>
                      <Icon size={18} className="problem-icon" />
                    </div>
                    <div className="problem-header-text">
                      <h3>{problem.title}</h3>
                      <p className="problem-summary-line">{problem.summary}</p>
                    </div>
                    <button
                      type="button"
                      className="problem-expand-btn"
                      aria-label={isActive ? "Collapse details" : "Expand details"}
                      aria-expanded={isActive}
                    >
                      <ChevronDown size={18} className={`expand-chevron ${isActive ? "rotated" : ""}`} />
                    </button>
                  </div>

                  {isActive && (
                    <div className="problem-expanded-content">
                      <div className="problem-detail-divider"></div>
                      <span className="detail-eyebrow">WHY THIS IMPACTS GROWTH</span>
                      <p>{problem.text}</p>
                    </div>
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

export default Problems;
