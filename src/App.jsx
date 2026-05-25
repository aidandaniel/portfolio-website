import { useEffect, useRef, useState } from 'react';
import { catalogVolumes, contact, experiences, heroSlides, interests, profile, sideNav } from './data/portfolio';

function playBookOpenSound(audioContextRef) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;

  if (!AudioContext) {
    return;
  }

  if (!audioContextRef.current) {
    audioContextRef.current = new AudioContext();
  }

  const audioContext = audioContextRef.current;
  const now = audioContext.currentTime;
  const masterGain = audioContext.createGain();
  const paperGain = audioContext.createGain();
  const paperFilter = audioContext.createBiquadFilter();
  const thump = audioContext.createOscillator();
  const thumpGain = audioContext.createGain();
  const noiseBuffer = audioContext.createBuffer(1, audioContext.sampleRate * 0.22, audioContext.sampleRate);
  const noise = audioContext.createBufferSource();
  const noiseData = noiseBuffer.getChannelData(0);

  for (let index = 0; index < noiseData.length; index += 1) {
    noiseData[index] = (Math.random() * 2 - 1) * (1 - index / noiseData.length);
  }

  masterGain.gain.setValueAtTime(0.001, now);
  masterGain.gain.exponentialRampToValueAtTime(0.34, now + 0.025);
  masterGain.gain.exponentialRampToValueAtTime(0.001, now + 0.34);

  paperFilter.type = 'bandpass';
  paperFilter.frequency.setValueAtTime(1150, now);
  paperFilter.Q.setValueAtTime(0.8, now);

  paperGain.gain.setValueAtTime(0.001, now);
  paperGain.gain.exponentialRampToValueAtTime(0.42, now + 0.018);
  paperGain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);

  thump.type = 'sine';
  thump.frequency.setValueAtTime(92, now);
  thump.frequency.exponentialRampToValueAtTime(46, now + 0.18);

  thumpGain.gain.setValueAtTime(0.001, now);
  thumpGain.gain.exponentialRampToValueAtTime(0.36, now + 0.014);
  thumpGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

  noise.buffer = noiseBuffer;
  noise.connect(paperFilter);
  paperFilter.connect(paperGain);
  paperGain.connect(masterGain);
  thump.connect(thumpGain);
  thumpGain.connect(masterGain);
  masterGain.connect(audioContext.destination);

  audioContext.resume().catch(() => {});
  noise.start(now);
  noise.stop(now + 0.24);
  thump.start(now);
  thump.stop(now + 0.22);
}

function BirdField() {
  return (
    <div className="bird-field" aria-hidden="true">
      {Array.from({ length: 28 }, (_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}

function VolumeSidebar() {
  return (
    <aside className="volume-sidebar" aria-label="Site navigation">
      <a className="volume-sidebar__brand" href={import.meta.env.BASE_URL}>
        <span className="volume-sidebar__sigil">AD</span>
        <span className="volume-sidebar__name">{profile.name}</span>
      </a>
      <p className="volume-sidebar__title">{profile.title}</p>

      <nav className="volume-sidebar__nav">
        {sideNav.map((item) => (
          <a key={item.href} href={item.href}>
            <span className="volume-sidebar__index">{item.shortLabel}</span>
            <span className="volume-sidebar__label">{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}

function HeaderSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = heroSlides[activeIndex];
  const total = heroSlides.length;

  function goTo(direction) {
    setActiveIndex((current) => (current + direction + total) % total);
  }

  return (
    <div className="header-slideshow">
      <div className="header-slideshow__frame">
        <button
          type="button"
          className="header-slideshow__arrow header-slideshow__arrow--prev"
          onClick={() => goTo(-1)}
          aria-label="Previous photo"
        >
          ‹
        </button>
        <img src={slide.src} alt={slide.alt} />
        <button
          type="button"
          className="header-slideshow__arrow header-slideshow__arrow--next"
          onClick={() => goTo(1)}
          aria-label="Next photo"
        >
          ›
        </button>
        <p className="header-slideshow__counter" aria-live="polite">
          {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </p>
      </div>
      <div>
        <span>Header Slideshow</span>
        <strong>{slide.caption}</strong>
      </div>
    </div>
  );
}

function HeroCatalog() {
  return (
    <section
      className="catalog-hero"
      aria-labelledby="hero-title"
      style={{ '--hero-header-image': `url("${profile.headerImage}")` }}
    >
      <BirdField />
      <div className="panel-ghost panel-ghost--one" aria-hidden="true" />
      <div className="panel-ghost panel-ghost--two" aria-hidden="true" />

      <div className="hero-copy">
        <p className="section-kicker">{profile.eyebrow}</p>
        <h1 id="hero-title">{profile.title}</h1>
        <p>{profile.summary}</p>
        <div className="hero-links" aria-label="Catalog sections">
          {profile.links.map((link) => (
            <a key={link.label} href={link.href}>
              <span aria-hidden="true">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <aside className="featured-panel" aria-label="Header portrait slideshow">
        <HeaderSlideshow />
      </aside>
    </section>
  );
}

function AboutMe() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="section-kicker">Volume 01 / Character Notes</p>
        <h2 id="about-title">About Me</h2>
      </div>

      <div className="about-panel">
        <div>
          <p className="section-kicker">Profile</p>
          <p>
            I am Aidan Decker, a software developer focused on building practical systems across web apps, AI tooling,
            robotics workflows, and infrastructure. This portfolio is arranged like a manga catalog: personal notes first,
            work chapters second, then project volumes on the shelf.
          </p>
        </div>

        <div>
          <p className="section-kicker">Interests</p>
          <ul className="interest-list">
            {interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function EmploymentGlossary() {
  return (
    <section id="employment" className="employment-section" aria-labelledby="employment-title">
      <div className="section-heading">
        <p className="section-kicker">Volume 02 / Employment Glossary</p>
        <h2 id="employment-title">Employment Chapters</h2>
        <p>Each role is listed like a manga glossary entry: chapter number, title, arc, date, and key pages.</p>
      </div>

      <ol className="glossary-list">
        {experiences.map((experience, index) => (
          <li className="glossary-entry" key={`${experience.role}-${experience.institution}`}>
            <span className="glossary-entry__number">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <p className="section-kicker">{experience.date}</p>
              <h3>{experience.role}</h3>
              <strong>{experience.institution}</strong>
              <ul>
                {experience.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function ProjectCover({ volume }) {
  const [hasImageError, setHasImageError] = useState(false);

  if (!volume.image || hasImageError) {
    return <div className="cover-ink" aria-label={`${volume.title} ink cover`} role="img" />;
  }

  return <img src={volume.image} alt={volume.imageAlt || `${volume.title} project preview`} onError={() => setHasImageError(true)} />;
}

function VolumeCard({ volume, index, onOpen }) {
  return (
    <button className={`volume-card volume-card--${index % 3}`} type="button" onClick={() => onOpen(index)}>
      <div className="volume-card__spine">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <span>{volume.accent}</span>
      </div>
      <div className="volume-card__cover">
        <ProjectCover volume={volume} />
      </div>
      <div className="volume-card__body">
        <p>{volume.shelf}</p>
        <h2>{volume.title}</h2>
        <span>{volume.creator}</span>
        <small>{volume.description}</small>
      </div>
    </button>
  );
}

function MangaShelf({ onOpen }) {
  return (
    <section id="shelf" className="shelf-section" aria-labelledby="shelf-title">
      <div className="section-heading">
        <p className="section-kicker">Catalog Row 01</p>
        <h2 id="shelf-title">Project Volumes</h2>
        <p>Click a volume to open the project book. Each chapter jumps to a different project in the collection.</p>
      </div>

      <div className="shelf-rail">
        {catalogVolumes.map((volume, index) => (
          <VolumeCard key={volume.title} volume={volume} index={index} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}

function ProjectBook({ activeIndex, bookRef, onSelect, onClose }) {
  const activeVolume = catalogVolumes[activeIndex];

  return (
    <section ref={bookRef} className="book-reader" aria-labelledby="book-title">
      <div className="book-reader__header">
        <p className="section-kicker">Opened Volume / Chapter {String(activeIndex + 1).padStart(2, '0')}</p>
        <button type="button" onClick={onClose}>
          Close Book
        </button>
      </div>

      <div className="open-book">
        <div className="book-page book-page--left">
          <div className="book-project-image">
            <ProjectCover volume={activeVolume} />
          </div>
          <p className="section-kicker">{activeVolume.shelf}</p>
          <h2 id="book-title">{activeVolume.title}</h2>
          <strong>{activeVolume.creator}</strong>
          <p>{activeVolume.description}</p>
          <div className="book-tech">
            {activeVolume.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          {activeVolume.link && activeVolume.link !== '#' ? (
            <a href={activeVolume.link} target="_blank" rel="noopener noreferrer">
              Read Source
            </a>
          ) : null}
        </div>

        <div className="book-page book-page--right">
          <p className="section-kicker">Chapter Index</p>
          <div className="chapter-tabs" role="tablist" aria-label="Project chapters">
            {catalogVolumes.map((volume, index) => (
              <button
                key={volume.title}
                className={activeIndex === index ? 'active' : ''}
                type="button"
                onClick={() => onSelect(index)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                {volume.title}
              </button>
            ))}
          </div>

          <ol className="chapter-pages">
            {activeVolume.chapters.map((chapter) => (
              <li key={chapter}>{chapter}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="section-heading">
        <p className="section-kicker">Contact</p>
        <h2 id="contact-title">Get In Touch</h2>
      </div>

      <div className="contact-panel">
        <p>{contact.intro}</p>
        <p>{contact.details}</p>
        <ul className="contact-links">
          {contact.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                <span className="contact-links__icon" aria-hidden="true">
                  {link.icon}
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function App() {
  const [openProjectIndex, setOpenProjectIndex] = useState(null);
  const [scrollRequest, setScrollRequest] = useState(0);
  const bookRef = useRef(null);
  const audioContextRef = useRef(null);

  function handleOpenProject(index) {
    playBookOpenSound(audioContextRef);
    setOpenProjectIndex(index);
    setScrollRequest((request) => request + 1);
  }

  useEffect(() => {
    if (scrollRequest === 0) {
      return undefined;
    }

    const frame = window.requestAnimationFrame(() => {
      bookRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [scrollRequest]);

  return (
    <>
      <div className="reference-bg" aria-hidden="true" />
      <div className="ink-wash" aria-hidden="true" />
      <div className="catalog-layout">
        <VolumeSidebar />
        <main className="catalog-page">
          <HeroCatalog />
          <AboutMe />
          <EmploymentGlossary />
          <MangaShelf onOpen={handleOpenProject} />
          {openProjectIndex !== null ? (
            <ProjectBook
              activeIndex={openProjectIndex}
              bookRef={bookRef}
              onSelect={setOpenProjectIndex}
              onClose={() => setOpenProjectIndex(null)}
            />
          ) : null}
          <ContactSection />
        </main>
      </div>
    </>
  );
}

export default App;
