import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const questions = [
  "CRM data is clean, standardized, and free of duplicate records",
  "Marketing and sales share complete lead context and history",
  "Automations and email workflows are actively monitored for silent failures",
  "Campaign performance and revenue contribution are clearly measurable",
  "Customer communications consistently land in the inbox, not the spam folder"
];

function HealthCheck({ onOpenConsultation }) {
  const [checked, setChecked] = useState([]);

  const toggleCheck = (index) => {
    setChecked((old) =>
      old.includes(index) ? old.filter((n) => n !== index) : [...old, index]
    );
  };

  return (
    <section className="section health-section" id="health-check">
      <div className="section-container health-layout">
        <div className="health-intro">
          <span className="eyebrow">QUICK DIAGNOSTIC</span>
          <h2>Is your CRM working as hard as it should?</h2>
          <p>
            Use this 30-second checklist to spot foundational gaps in your current setup. It is a starting benchmark for your operational health.
          </p>
          <button
            type="button"
            className="health-cta-link"
            onClick={() => {
              if (onOpenConsultation) onOpenConsultation();
            }}
          >
            <span>Discuss your setup with MARTÉ</span>
            <ArrowUpRight size={17} />
          </button>
        </div>

        <div className="health-card">
          <div className="health-card-top">
            <span>CRM HEALTH BENCHMARK</span>
            <span className="score-badge">
              {checked.length}/{questions.length} Confirmed
            </span>
          </div>

          <div className="health-checklist">
            {questions.map((question, index) => {
              const isChecked = checked.includes(index);
              return (
                <label
                  className={`health-check-row ${isChecked ? "is-checked" : ""}`}
                  key={question}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleCheck(index);
                  }}
                >
                  <span className="custom-check">
                    {isChecked ? <CheckCircle2 size={16} /> : null}
                  </span>
                  <span className="question-text">{question}</span>
                </label>
              );
            })}
          </div>

          <p className="health-note">
            {checked.length === questions.length
              ? "Great foundations! A periodic technical audit ensures your setup scales without unexpected drops."
              : "Check the areas you feel confident about. Any unselected area highlights where revenue or deliverability could be slipping."}
          </p>
        </div>
      </div>
    </section>
  );
}

export default HealthCheck;
