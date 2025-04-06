import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { 
  FaHeart, 
  FaGithub, 
  FaLinkedin, 
  FaFacebook, 
  FaEnvelope,
  FaArrowUp,
  FaCode,
  FaUserAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaFileContract
} from 'react-icons/fa'
import './Footer.css'
import {  useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleNavigation = (path) => {
    scrollToTop()
    navigate(path)
  }

  const socialLinks = [
    {
      id: 1,
      icon: <FaGithub />,
      url: 'https://github.com/yourusername',
      label: 'GitHub'
    },
    {
      id: 2,
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/yourprofile',
      label: 'LinkedIn'
    },
    {
      id: 3,
      icon: <FaFacebook />,
      url: 'https://facebook.com/yourusername',
      label: 'Facebook'
    },
    {
      id: 4,
      icon: <FaEnvelope />,
      url: 'mailto:jesumathu11@gmail.com',
      label: 'Email'
    }
  ]

  return (
    <footer className="footer">
      <div className="footer-top">
        <Container>
          <Row className="align-items-start">
            <Col lg={3} md={6} className="footer-info">
              <h3 className="footer-name">
                <FaCode className="section-icon" />
                Yalini 
              </h3>
              <p className="footer-bio">
              Passionate Public Health & Health Promotion Specialist with expertise in research, data analysis, 
              and community engagement.
              </p>
            </Col>
            <Col lg={3} md={6} className="footer-contact">
              <h4>
                <FaUserAlt className="section-icon" />
                Quick Contact
              </h4>
              <ul className="contact-list">
                <li>
                  <FaPhone className="footer-contact-icon" />
                  <span>+94 0769282201</span>
                </li>
                <li>
                  <FaEnvelope className="footer-contact-icon" />
                  <span>yalinithevarajan@gmail.com</span>
                </li>
                <li>
                  <FaMapMarkerAlt className="footer-contact-icon" />
                  <span> No-21, Kanaan, Nagenthirapuram, Puliyampokkanai.</span>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="footer-links">
              <h4>
                <FaFileContract className="section-icon" />
                Important Links
              </h4>
              <ul className="links-list">
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">My Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="footer-social">
              <h4>
                <FaUserAlt className="section-icon" />
                Connect With Me
              </h4>
              <p className="social-text">
                Follow me on social media to stay updated with my latest projects and tech articles.
              </p>
              <div className="social-links">
                {socialLinks.map(link => (
                  <a 
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="copyright">
              <p>
                © {new Date().getFullYear()} Made with <FaHeart className="heart-icon" /> by{' '}
                <span className="highlight">Yalini Thevarajan</span>
              </p>
            </Col>
            <Col md={6} className="text-md-end d-flex align-items-center justify-content-end">
              <div className="footer-legal">
                <button 
                  onClick={() => handleNavigation('/privacy-policy')} 
                  className="footer-link"
                >
                  Privacy Policy
                </button>
                <span className="separator">•</span>
                <button 
                  onClick={() => handleNavigation('/terms')} 
                  className="footer-link"
                >
                  Terms & Conditions
                </button>
              </div>
              <button 
                className="scroll-to-top ms-3"
                onClick={scrollToTop}
                aria-label="Scroll to top"
              >
                <FaArrowUp />
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
