import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaDownload } from "react-icons/fa";
import "./About.css"; 
import SectionDivider from './SectionDivider'; 
function About() {
  const roles = [
    "Public Health Specialist",
    "Health Promotion Expert",
    "Researcher",
    "Community Health Advocate",
    "Epidemiologist"
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    
    <section>
          <div className="about-container">
        
        {/* Left Section: Content */}
        <div className="about-content">
        <h2 className="intro">
            Hi, I’m <span className="name">Yalini Thevarajan</span> I work as
          </h2>
          <h4 className="role">{roles[currentRoleIndex]}</h4>
          <p className="description">
          Passionate Public Health & Health Promotion Specialist with expertise in research, data analysis, 
          and community engagement. Dedicated to improving health outcomes in underprivileged areas with over 
          2 years of experience in impactful health interventions.
          </p>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="#" className="socialmedia-icon"><FaLinkedin /></a>
            <a href="#" className="socialmedia-icon"><FaGithub /></a>
            <a href="#" className="socialmedia-icon"><FaTwitter /></a>
          </div>

          {/* Download Resume Button */}
          <button className="download-btn">
            <FaDownload /> Download Resume
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="image-container">
            <div className="image-wrapper">
                <img src="./sample.jpeg" alt="Profile" className="profile-img" />
  </div>
        </div>

       

      </div>

      <SectionDivider />
    </section>
      
    
  );
}

export default About;
