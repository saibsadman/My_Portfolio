import React, { useEffect, useState } from 'react';
import { ArrowRight, Shield, Terminal, Zap } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const fullText = 'Hello, I am Saib Sadman Bari.';
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index += 1;

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="section hero-section">
      <div className="container hero-shell">
        <div className="hero-grid">
          <div className="hero-text animate-fade-in-up">
            <div className="kicker hero-kicker delay-100">
              <Terminal size={15} className="text-primary" />
              <span>CSE Student • Full-Stack Builder • Security-Focused</span>
            </div>

            <p className="hero-typing-line">
              {typedText}
              <span className="typing-cursor">|</span>
            </p>


            <h1 className="heading-xl delay-200">
              Aspiring
              <br />
              <span className="text-primary">Frontend &</span>
              <br />
              Full-Stack Developer
            </h1>

            <p className="hero-description delay-300">
              I build modern web applications with a focus on frontend excellence, full-stack development, and clean user experiences.
            </p>

            <div className="hero-meta delay-300">
              <div className="hero-meta-item">
                <span className="hero-meta-label">Focus</span>
                <strong>Web Systems • Security • Product Engineering</strong>
              </div>
              <div className="hero-meta-item">
                <span className="hero-meta-label">Current Direction</span>
                <strong>Building impactful frontend and full-stack projects with clean design and real-world value</strong>
              </div>
            </div>

            <div className="hero-actions delay-400">
              <a href="#projects" className="btn-primary">
                Explore Projects <ArrowRight size={18} />
              </a>
              <a href="#about" className="btn-outline">
                System Profile
              </a>
            </div>
          </div>

          <div className="hero-visual animate-fade-in-up delay-500">
            <div className="hero-orbital-grid"></div>

            <div className="hero-core">
              <div className="core-ring core-ring-1"></div>
              <div className="core-ring core-ring-2"></div>
              <div className="core-ring core-ring-3"></div>
              <div className="core-center"></div>
              <div className="core-pulse"></div>
            </div>

            <div className="floating-panel top-left glass">
              <span className="floating-label">MODE</span>
              <strong>CYBER / ACTIVE</strong>
            </div>

            <div className="floating-panel top-right glass">
              <Shield size={16} className="text-primary" />
              <div>
                <span className="floating-label">SPECIALTY</span>
                <strong>Secure Systems</strong>
              </div>
            </div>

            <div className="floating-panel bottom-left glass">
              <Zap size={16} className="text-primary" />
              <div>
                <span className="floating-label">STACK</span>
                <strong>React • Next • Node</strong>
              </div>
            </div>

            <div className="floating-panel bottom-right glass">
              <span className="floating-label">STATUS</span>
              <strong>Available for opportunities</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;