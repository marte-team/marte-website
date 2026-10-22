import { about } from "../data/siteContent";

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-container">
        <div className="about-header-wrap">
          <span className="eyebrow">07 / ABOUT US</span>
          <h2>{about.title}</h2>
        </div>

        <div className="about-story-container">
          {about.story.map((paragraph, index) => (
            <p key={index} className="about-narrative-paragraph">
              {paragraph}
            </p>
          ))}

          {/* Key Editorial Highlight Quote */}
          <div className="about-core-belief-card">
            <p>{about.coreBelief}</p>
          </div>

          {about.storyContinuation.map((paragraph, index) => (
            <p key={index} className="about-narrative-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
