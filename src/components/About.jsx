import React from 'react';
import { Award, BookOpen, Cpu, Monitor, Shield } from 'lucide-react';
import './About.css';

const About = () => {
  const modules = [
    {
      icon: <BookOpen className="text-primary" size={26} />,
      title: 'Education',
      educationList: [
        {
          institute: 'BRAC University',
          degree: 'B.Sc. in Computer Science & Engineering',
          details: 'Expected graduation: 2026',
        },
        {
          institute: 'Government Sundarban Adarsha College',
          degree: 'Higher Secondary Certificate (HSC) in Science',
          details: '2018–2020 • Khulna, Bangladesh',
        },
        {
          institute: 'Khulna Zilla School',
          degree: 'Secondary School Certificate (SSC) in Science',
          details: 'Khulna, Bangladesh',
        },
      ],
    },
    {
      icon: <Monitor className="text-primary" size={26} />,
      title: 'Execution',
      value: 'Full-Stack Web Development',
      sub: 'Academic systems, product projects',
    },
    {
      icon: <Shield className="text-primary" size={26} />,
      title: 'Strength',
      value: 'Security-minded engineering',
      sub: 'Authentication, trust flows, encryption-centric projects',
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="heading-lg reveal">About Me</h2>

        <div className="about-layout">
          <div className="about-main glass reveal">
            <div className="about-main-top">
              <div>
                <p className="panel-title">System Profile</p>
                <h3>Engineer mindset.  Product thinking.  Strong execution.</h3>
              </div>

              <div className="about-scan-badge">
                <Cpu size={16} />
                <span>ACTIVE PROFILE</span>
              </div>
            </div>

            <div className="about-text-block">
              <p>
                I am a Computer Science and Engineering student at BRAC University focused on frontend development, full-stack applications, secure systems, 
                and AI-driven solutions. I enjoy building software that feels modern, practical, and technically strong, 
                with an emphasis on clean design, usability, and real-world impact.
              </p>

              <p>
                I am especially drawn to projects involving structured backend logic, secure workflows,
                database design, and interfaces that feel modern and memorable. Rather than building only
                basic CRUD apps, I aim to create systems that demonstrate architecture, product thinking,
                and technical depth.
              </p>
            </div>

            <div className="about-focus-row">
              <div className="focus-chip">
                <Cpu size={16} />
                <span>Full-Stack Systems</span>
              </div>
              <div className="focus-chip">
                <Shield size={16} />
                <span>Security-Focused Projects</span>
              </div>
            </div>
          </div>

          <div className="about-grid">
            {modules.map((item, idx) => (
              <div key={`${item.title}-${idx}`} className={`about-card glass reveal delay-${(idx + 1) * 100}`}>
                <div className="about-card-icon">{item.icon}</div>
                <p className="about-card-label">{item.title}</p>

                {item.educationList ? (
                  <div className="education-list">
                    {item.educationList.map((edu, eduIdx) => (
                      <div key={eduIdx} className="education-item">
                        <h3>{edu.institute}</h3>
                        <p className="education-degree">{edu.degree}</p>
                        <span>{edu.details}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <h3>{item.value}</h3>
                    <span>{item.sub}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;