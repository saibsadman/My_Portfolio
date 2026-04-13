import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, FolderGit2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';
import projectsData from '../data/projectsData';

const Projects = () => {
  const location = useLocation();

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="projects-heading-row reveal">
          <div>
            <h2 className="heading-lg">Featured Projects</h2>
          </div>

          <div className="projects-heading-chip glass">
            <span className="projects-chip-dot"></span>
            <span>CASE STUDIES / SYSTEM BUILDS / PRODUCT WORK</span>
          </div>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, idx) => {
            const isActive = location.pathname === `/projects/${project.slug}`;

            return (
              <Link
                to={`/projects/${project.slug}`}
                key={project.id}
                className={`project-card glass reveal delay-${(idx + 1) * 100} ${isActive ? 'active-project-card' : ''}`}
              >
                <div className="project-card-grid">
                  <div className="project-card-main">
                    <div className="project-top">
                      <div className="project-folder-wrap">
                        <FolderGit2 className="project-folder" size={34} />
                        <div className="project-code">
                          <span className="project-code-label">PROJECT ID</span>
                          <strong>{String(project.id).padStart(2, '0')}</strong>
                        </div>
                      </div>

                      <div className="project-links">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="GitHub Repository"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub size={18} />
                        </a>

                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Live Demo"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>

                    <p className="project-category-line">{project.category}</p>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-subtitle">{project.shortTitle}</p>
                    <p className="project-desc">{project.desc}</p>

                    <div className="project-tags">
                      {project.tags.slice(0, 5).map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-card-side">
                    <div className="project-side-panel">
                      <p className="project-side-label">WHY IT STANDS OUT</p>
                      <ul className="project-mini-points">
                        {project.featured.slice(0, 3).map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>

                      <div className="project-open-row">
                        <span>Open Case Study</span>
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;