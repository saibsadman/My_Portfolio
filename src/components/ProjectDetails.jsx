import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FolderGit2,
  X,
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import projectsData from '../data/projectsData';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { slug } = useParams();
  const projectIndex = projectsData.findIndex((item) => item.slug === slug);
  const project = projectsData[projectIndex];

  const [showGallery, setShowGallery] = useState(false);
  const [currentShot, setCurrentShot] = useState(0);

  const totalShots = useMemo(() => project?.screenshots?.length || 0, [project]);

  useEffect(() => {
    setShowGallery(false);
    setCurrentShot(0);
  }, [slug]);

  useEffect(() => {
    if (!showGallery || totalShots <= 1) return;

    const interval = setInterval(() => {
      setCurrentShot((prev) => (prev + 1) % totalShots);
    }, 10000);

    return () => clearInterval(interval);
  }, [showGallery, totalShots]);

  useEffect(() => {
    if (!showGallery) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowGallery(false);
      } else if (e.key === 'ArrowLeft') {
        goPrev();
      } else if (e.key === 'ArrowRight') {
        goNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [showGallery, totalShots]);

  if (!project) {
    return (
      <section className="project-details-page">
        <div className="container project-details-container">
          <Link to="/" className="back-link">
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <div className="project-details-card glass">
            <h1 className="project-details-title">Project not found</h1>
            <p className="project-details-text">
              The project page you are looking for does not exist.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  const goPrev = () => {
    setCurrentShot((prev) => (prev - 1 + totalShots) % totalShots);
  };

  const goNext = () => {
    setCurrentShot((prev) => (prev + 1) % totalShots);
  };

  const openGallery = () => {
    setCurrentShot(0);
    setShowGallery(true);
  };

  return (
    <section className="project-details-page">
      <div className="container project-details-container">
        <Link to="/#projects" className="back-link">
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        <div className="project-details-card glass">
          <div className="project-hero">
            <div className="project-hero-left">
              <p className="project-category">{project.category}</p>
              <h1 className="project-details-title">{project.title}</h1>
              <h2 className="project-details-subtitle">{project.shortTitle}</h2>
              <p className="project-details-text hero-summary">{project.longDesc}</p>

              <div className="project-tags-details">
                {project.techStack.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-hero-right">
              <div className="project-icon-box">
                <FolderGit2 size={54} className="project-main-icon" />
              </div>

              <div className="project-action-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub size={18} />
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-showcase glass">
            <div className="project-showcase-text">
              <h3>Project Preview</h3>
              <p className="project-details-text">
                Below is a preview screenshot from the project. Click the button to open a full-screen
                screenshot gallery. Screenshots will change automatically every 10 seconds, and you can
                also move manually using the left and right controls.
              </p>
            </div>

            <div className="project-preview-image-wrap">
              <img
                src={project.coverImage}
                alt={`${project.title} preview`}
                className="project-preview-image"
              />
            </div>

            <button className="view-screenshots-btn" onClick={openGallery}>
              View Screenshots
            </button>
          </div>

          <div className="project-showcase glass">
            <div className="project-showcase-text">
              <h3>Project Overview</h3>
              <p className="project-details-text">{project.desc}</p>
              <p className="project-details-text">
                This page highlights the most important parts of the project,
                focusing on the technical ideas, workflow design, and practical value.
              </p>
            </div>
          </div>

          <div className="project-section-grid">
            <div className="project-section glass-lite">
              <h3>The Problem</h3>
              <p className="project-details-text">{project.problem}</p>
            </div>

            <div className="project-section glass-lite">
              <h3>The Solution</h3>
              <p className="project-details-text">{project.solution}</p>
            </div>
          </div>

          <div className="project-section">
            <h3>Key Highlights</h3>
            <ul className="project-list">
              {project.featured.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="project-section">
            <h3>Why this project Stands Out</h3>
            <ul className="project-list">
              {project.portfolioPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="project-section">
            <h3>Project Note</h3>
            <p className="project-details-text">{project.note}</p>
          </div>

          <div className="project-bottom-nav">
            {prevProject ? (
              <Link to={`/projects/${prevProject.slug}`} className="project-nav-card glass-lite">
                <span className="project-nav-label">Previous Project</span>
                <span className="project-nav-title">
                  <ArrowLeft size={16} />
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link to={`/projects/${nextProject.slug}`} className="project-nav-card glass-lite right">
                <span className="project-nav-label">Next Project</span>
                <span className="project-nav-title">
                  {nextProject.title}
                  <ArrowRight size={16} />
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>

      {showGallery && totalShots > 0 && (
        <div className="gallery-modal-overlay" onClick={() => setShowGallery(false)}>
          <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="gallery-close-btn"
              onClick={() => setShowGallery(false)}
              aria-label="Close gallery"
            >
              <X size={24} />
            </button>

            <div className="gallery-header">
              <h3>{project.title} Screenshots</h3>
              <p>
                Screenshot {currentShot + 1} of {totalShots}
              </p>
            </div>

            <div className="gallery-slider-frame">
              <button className="gallery-slider-btn left" onClick={goPrev} aria-label="Previous screenshot">
                <ChevronLeft size={28} />
              </button>

              <img
                src={project.screenshots[currentShot]}
                alt={`${project.title} screenshot ${currentShot + 1}`}
                className="gallery-slider-image"
              />

              <button className="gallery-slider-btn right" onClick={goNext} aria-label="Next screenshot">
                <ChevronRight size={28} />
              </button>
            </div>

            <div className="gallery-dots">
              {project.screenshots.map((_, index) => (
                <button
                  key={index}
                  className={`gallery-dot ${index === currentShot ? 'active' : ''}`}
                  onClick={() => setCurrentShot(index)}
                  aria-label={`Go to screenshot ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectDetails;