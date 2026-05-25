import { profile } from '../data/portfolio';
import MediaPanel from './MediaPanel';

function HeroPanel() {
  return (
    <section className="hero-section manga-panel" aria-labelledby="hero-title">
      <div className="bird-field" aria-hidden="true">
        {Array.from({ length: 24 }, (_, index) => (
          <span key={index} />
        ))}
      </div>

      <div className="hero-copy">
        <p className="section-kicker">{profile.eyebrow}</p>
        <h1 id="hero-title">{profile.title}</h1>
        <p>{profile.summary}</p>

        <div className="hero-links" aria-label="Page sections">
          {profile.links.map((link) => (
            <a key={link.label} href={link.href}>
              <span aria-hidden="true">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="portrait-frame" aria-label="Portrait panel">
        <MediaPanel src={profile.portrait} alt="Aidan Decker headshot" fallback="AD" />
      </div>
    </section>
  );
}

export default HeroPanel;
