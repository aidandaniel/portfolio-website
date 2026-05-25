import { useEffect, useMemo, useState } from 'react';
import { projects } from '../data/portfolio';
import MediaPanel from './MediaPanel';

function getCardsPerPage() {
  if (typeof window === 'undefined') {
    return 2;
  }

  return window.matchMedia('(max-width: 760px)').matches ? 1 : 2;
}

function ProjectCard({ project, index }) {
  return (
    <article className="project-card manga-panel">
      <MediaPanel src={project.image} alt={project.imageAlt} label={project.title} fallback={`Panel ${index + 1}`} />
      <div className="project-card__body">
        <h3>{project.title}</h3>
        <ul className="project-description">
          {project.description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="project-tech">
        {project.tech.map((tech) => (
          <span className="tech-tag" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      <div className="project-links">
        {project.links.map((link) => (
          <a key={link.label} className="btn-primary" href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}

function ProjectsGallery() {
  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage);
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(projects.length / cardsPerPage);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 760px)');
    const syncCardsPerPage = () => setCardsPerPage(getCardsPerPage());

    syncCardsPerPage();
    mediaQuery.addEventListener('change', syncCardsPerPage);

    return () => mediaQuery.removeEventListener('change', syncCardsPerPage);
  }, []);

  useEffect(() => {
    setPage((currentPage) => Math.min(currentPage, pageCount - 1));
  }, [pageCount]);

  const visibleProjects = useMemo(() => {
    const start = page * cardsPerPage;
    return projects.slice(start, start + cardsPerPage);
  }, [cardsPerPage, page]);

  const previousPage = () => setPage((currentPage) => Math.max(currentPage - 1, 0));
  const nextPage = () => setPage((currentPage) => Math.min(currentPage + 1, pageCount - 1));

  return (
    <section id="projects" className="content-section projects-section" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="section-kicker">Chapter 03 / Field Notes</p>
        <h2 id="projects-title">Projects</h2>
      </div>

      <div className="projects-carousel-container">
        <button className="carousel-nav carousel-prev" onClick={previousPage} disabled={page === 0} aria-label="Previous projects">
          {'<'}
        </button>

        <div className="projects-carousel" aria-live="polite">
          <div className="projects-track">
            {visibleProjects.map((project, index) => (
              <ProjectCard project={project} index={page * cardsPerPage + index} key={project.title} />
            ))}
          </div>
        </div>

        <button className="carousel-nav carousel-next" onClick={nextPage} disabled={page >= pageCount - 1} aria-label="Next projects">
          {'>'}
        </button>
      </div>

      <div className="carousel-dots" role="tablist" aria-label="Project pages">
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index}
            className={`dot ${page === index ? 'active' : ''}`}
            onClick={() => setPage(index)}
            aria-label={`Show project page ${index + 1}`}
            aria-current={page === index}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsGallery;
