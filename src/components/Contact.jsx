import React, { useState } from 'react';
import { CheckCircle2, Mail, Send, Sparkles, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mzdybkdg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New portfolio contact message',
        }),
      });

      if (response.ok) {
        setShowSuccessPopup(true);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Failed to send message. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="heading-lg reveal">Contact Interface</h2>

        <div className="contact-terminal glass reveal">
          <div className="terminal-head">
            <div className="terminal-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="contact-content">
            <div className="contact-info reveal delay-100">
              <p className="panel-title">Open Channel</p>
              <h3>Let’s build something powerful.</h3>
              <p className="contact-copy">
                I’m open to internships, freelance opportunities, collaborations, and meaningful software
                projects. If you have an idea or role that matches my direction, send a message.
              </p>

              <div className="availability-chip">
                <Sparkles size={16} />
                <span>Currently open to opportunities</span>
              </div>

              <div className="social-links">
                <a href="mailto:saibsadman74@gmail.com" className="social-link" aria-label="Email">
                  <Mail size={20} />
                  <div>
                    <strong>Email</strong>
                    <span>saibsadman74@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/saib-sadman-a80a7a347/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                  <div>
                    <strong>LinkedIn</strong>
                    <span>Saib Sadman</span>
                  </div>
                </a>

                <a
                  href="https://github.com/saibsadman"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                  <div>
                    <strong>GitHub</strong>
                    <span>saibsadman</span>
                  </div>
                </a>
              </div>
            </div>

            <form className="contact-form reveal delay-200" onSubmit={handleSubmit}>
              <p className="panel-title">Transmission Form</p>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="6"
                  placeholder="Tell me about the project, role, or collaboration..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-100" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Transmission'} <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Saib Sadman Bari. All rights reserved</p>
      </footer>

      {showSuccessPopup && (
        <div className="success-popup-overlay" onClick={() => setShowSuccessPopup(false)}>
          <div className="success-popup glass" onClick={(e) => e.stopPropagation()}>
            <button
              className="success-popup-close"
              onClick={() => setShowSuccessPopup(false)}
              aria-label="Close popup"
            >
              <X size={18} />
            </button>

            <div className="success-popup-icon">
              <CheckCircle2 size={42} />
            </div>

            <h3>Message Sent Successfully</h3>
            <p>
              Thanks for reaching out. Your message has been transmitted successfully.
            </p>

            <button className="btn-primary" onClick={() => setShowSuccessPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;