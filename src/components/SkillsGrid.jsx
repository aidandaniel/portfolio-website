import { skills } from '../data/portfolio';
import MediaPanel from './MediaPanel';

function SkillsGrid() {
  return (
    <section id="skills" className="content-section skills-section" aria-labelledby="skills-title">
      <div className="section-heading">
        <p className="section-kicker">Chapter 02 / Toolkit</p>
        <h2 id="skills-title">Skills</h2>
        <p>
          My core proficiencies include software development, machine learning, and data analysis. I work with Java,
          Python, SQL, and JavaScript across React, Spring Boot, Docker, and cloud and data stacks.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card manga-panel" key={skill.name}>
            <MediaPanel src={skill.image} alt={`${skill.name} Logo`} label={skill.name} fallback={skill.fallback} />
            <h3>{skill.name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SkillsGrid;
