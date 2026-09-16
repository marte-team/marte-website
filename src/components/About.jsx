import { about } from "../data/siteContent";

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-container">
        <div className="about-intro">
          <span className="eyebrow">05 / ABOUT US</span>

          <h2>Why We Started MARTÉ</h2>
        </div>

        <div className="about-content">
          <div className="about-large-copy">
            <p>{about.why}</p>
          </div>

          <div className="about-side-copy">
            <p>{about.whySecond}</p>
          </div>
        </div>

        <div className="about-divider"></div>

        <div className="about-what">
          <div>
            <span className="eyebrow">WHAT WE DO</span>
            <h3>One team across the full CRM lifecycle.</h3>
          </div>

          <div className="about-what-copy">
            <p>{about.what}</p>
            <p>{about.whatSecond}</p>
            <p>{about.whatThird}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;