import { ArrowRight, Settings2, Workflow, BarChart3, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Implement",
    text: "Set up the right foundations, clean data architecture, and tool integrations.",
    icon: Settings2
  },
  {
    number: "02",
    title: "Manage",
    text: "Keep day-to-day systems, campaign flows, and communication channels moving seamlessly.",
    icon: Workflow
  },
  {
    number: "03",
    title: "Optimize",
    text: "Refine deliverability, lead routing, segmentation, and conversion metrics.",
    icon: BarChart3
  },
  {
    number: "04",
    title: "Scale",
    text: "Expand into new segments, automated sequences, and multi-region volume.",
    icon: TrendingUp
  }
];

function Lifecycle() {
  return (
    <section className="section lifecycle-section" id="approach">
      <div className="section-container">
        <div className="section-heading split-heading lifecycle-heading">
          <div>
            <span className="eyebrow">02 / THE MARTÉ APPROACH</span>
            <h2>One Partner. Every Stage.</h2>
          </div>
          <p>
            From initial platform architecture to ongoing campaign optimization, your CRM works as one connected growth engine, not a patchwork of disconnected vendors.
          </p>
        </div>
        <div className="lifecycle-track">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div className="lifecycle-step" key={step.number}>
                <div className="lifecycle-step-top">
                  <span className="step-num">{step.number}</span>
                  <div className="step-icon-badge">
                    <Icon size={20} />
                  </div>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="lifecycle-arrow" size={18} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Lifecycle;
