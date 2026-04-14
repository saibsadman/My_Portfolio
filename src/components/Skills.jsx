// Skills.jsx

import React from 'react';
import {
  Braces,
  Cpu,
  Database,
  Layers3,
  Server,
  Shield,
  TerminalSquare,
  Wrench,
} from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      id: 'SYS-01',
      title: 'Core Languages',
      icon: <Braces size={24} />,
      command: 'load --runtime core-languages',
      summary:
        'Programming fundamentals, problem solving, algorithmic thinking, and implementation.',
      stack: ['C', 'C++', 'JavaScript', 'TypeScript', 'Python', 'Java'],
      theme: 'cyan',
    },
    {
      id: 'SYS-02',
      title: 'Frontend Systems',
      icon: <Layers3 size={24} />,
      command: 'init --module frontend-ui',
      summary:
        'Responsive interfaces, component architecture, motion, and modern web experience.',
      stack: ['React', 'Vite', 'Next.js', 'HTML', 'CSS', 'Tailwind', 'Framer Motion'],
      theme: 'pink',
    },
    {
      id: 'SYS-03',
      title: 'Backend & APIs',
      icon: <Server size={24} />,
      command: 'boot --service backend-api',
      summary:
        'Server-side logic, routing, auth workflows, REST design, and application structure.',
      stack: ['Node.js', 'Express', 'Django', 'REST APIs', 'JWT', 'Auth Flow', 'Middleware'],
      theme: 'orange',
    },
    {
      id: 'SYS-04',
      title: 'Data & Infrastructure',
      icon: <Database size={24} />,
      command: 'sync --env data-infra',
      summary:
        'Databases, version control, environments, containers, and engineering workflow.',
      stack: ['MySQL', 'PostgreSQL', 'SQLite', 'Git', 'GitHub', 'Docker'],
      theme: 'violet',
    },
  ];

  const sidePanels = [
    {
      icon: <Shield size={18} />,
      title: 'Security Direction',
      text: 'Interested in trust systems, authentication, secure workflows, and privacy-aware product design.',
    },
    {
      icon: <Cpu size={18} />,
      title: 'Engineering Mindset',
      text: 'I enjoy turning ideas into clean, structured, portfolio-grade software systems.',
    },
    {
      icon: <Wrench size={18} />,
      title: 'Build Style',
      text: 'I prefer practical systems with clear architecture, modern UI, and real-world product logic.',
    },
    {
      icon: <TerminalSquare size={18} />,
      title: 'Current Focus',
      text: 'Full-stack case-study projects that feel polished, differentiated, and technically meaningful.',
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="skills-hero reveal">
          <div>
            <h2 className="heading-lg">Tech Stack Interface</h2>
            <p className="skills-lead">
              A structured view of the technologies, systems, and engineering environments I work with.
            </p>
          </div>

          <div className="skills-signal glass">
            <span className="skills-signal-dot"></span>
            <span>STACK PROFILE ONLINE</span>
          </div>
        </div>

        <div className="skills-terminal-grid">
          {skillCategories.map((category, idx) => (
            <div
              key={category.id}
              className={`skill-terminal theme-${category.theme} glass reveal delay-${(idx + 1) * 100}`}
            >
              <div className="skill-terminal-head">
                <div className="terminal-lights">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="terminal-id">{category.id}</div>
              </div>

              <div className="skill-terminal-body">
                <div className="skill-terminal-top">
                  <div className="skill-terminal-icon">{category.icon}</div>
                  <div className="skill-terminal-title-wrap">
                    <h3>{category.title}</h3>
                    <p className="terminal-command">
                      <span className="prompt">$</span> {category.command}
                    </p>
                  </div>
                </div>

                <div className="stack-label-row">
                  <span className="stack-label">Primary Technologies</span>
                </div>

                <div className="stack-chip-grid">
                  {category.stack.map((item) => (
                    <span key={item} className="stack-chip">
                      {item}
                    </span>
                  ))}
                </div>

                <p className="skill-terminal-summary">{category.summary}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-side-grid">
          {sidePanels.map((panel, idx) => (
            <div
              key={panel.title}
              className={`skills-side-card glass reveal delay-${idx * 100 + 100}`}
            >
              <div className="skills-side-icon">{panel.icon}</div>
              <div>
                <h4>{panel.title}</h4>
                <p>{panel.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
