import { experiences } from '../data/portfolio';

function ExperienceTimeline() {
  return (
    <section id="experience" className="content-section experience-section" aria-labelledby="experience-title">
      <div className="section-heading">
        <p className="section-kicker">Chapter 04 / Road</p>
        <h2 id="experience-title">Experience</h2>
      </div>

      <div className="timeline">
        {experiences.map((experience) => (
          <article className="timeline-item" key={`${experience.role}-${experience.date}`}>
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-content manga-panel">
              <h3>{experience.role}</h3>
              <p className="institution">{experience.institution}</p>
              <p className="date">{experience.date}</p>
              <ul>
                {experience.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExperienceTimeline;
