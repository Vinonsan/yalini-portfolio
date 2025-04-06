import React from 'react'
import { Container } from 'react-bootstrap'
import { 
  FaCode, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt,
  FaBootstrap,
  FaPaintBrush,
  FaChalkboardTeacher, 
  FaUsers, 
  FaBook, 
  FaLanguage, 
  FaBrain,
  FaCogs ,
  FaHandsHelping,
  FaChartLine
} from 'react-icons/fa'
import { 
  SiMongodb,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiFigma,
  SiCanva 
} from 'react-icons/si'
import './Skills.css'

function Skills() {
  const technicalSkills = [
    {
      name: "English",
      level: 70,  // Adjust the level as needed
      description: "Good proficiency in English",
      icon: <FaLanguage className="icon-english" />
    },
    {
      name: "Tamil",
      level: 90,  // Adjust the level as needed
      description: "Excellent proficiency in Tamil",
      icon: <FaLanguage className="icon-tamil" />
    },
    {
      name: "Sinhala",
      level: 50,  // Adjust the level as needed
      description: "Fair proficiency in Sinhala",
      icon: <FaLanguage className="icon-sinhala" />
    }
  ]

  const teachingSkills = [
    {
      name: "Decision Making and Problem Solving",
      level: 90,
      icon: <FaBrain />,
      description: "Making informed decisions and solving complex challenges efficiently"
    },
    {
      name: "Data Collection and Interpretation",
      level: 88,
      icon: <FaChartLine />,
      description: "Collecting and analyzing data to inform decisions and strategies"
    },
    {
      name: "Report Writing",
      level: 85,
      icon: <FaBook />,
      description: "Creating clear and concise reports to present findings and results"
    },
    {
      name: "Microsoft Office Package",
      level: 90,
      icon: <FaBook />,
      description: "Proficient in Microsoft Word, Excel, PowerPoint, and Outlook"
    },
    {
      name: "Communication Skill",
      level: 95,
      icon: <FaLanguage />,
      description: "Exceptional ability to communicate ideas clearly, both orally and in writing"
    },
    {
      name: "Community Facilitation",
      level: 88,
      icon: <FaUsers />,
      description: "Leading and facilitating community-based programs and initiatives"
    }
  ]

  return (
    <section id="skills" className="skills-section">
      <Container>
 

        <div className="section-title-wrapper" style={{ marginTop: '1rem' }}>
           <div className="title-container">
                      <span className="icon-wrapper">
                          <FaCogs    className="title-icon" />
                      </span>
                      <h2 className="title">Core Skills </h2>
                      <div className="underline"></div>
                  </div>
        </div>
        <div className="teaching-skills-grid">
          {teachingSkills.map((skill, index) => (
            <div key={index} className="teaching-skill-card">
              <div className="skill-icon">
                {skill.icon}
              </div>
              <div className="skill-content">
                <h3 className="skill-title">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
                <div className="skill-progress-container">
                  <div 
                    className="skill-progress-bar" 
                    style={{ width: `${skill.level}%` }}
                  >
                    <span className="progress-label">{skill.level}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-title-wrapper">
        <div className="title-container">
                      <span className="icon-wrapper">
                          <FaLanguage className="title-icon" />
                      </span>
                      <h2 className="title">Language Skills </h2>
                      <div className="underline"></div>
                  </div>
        </div>
        <div className="skills-grid">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="skill-circle">
              <div className="circle-progress" style={{ '--percentage': `${skill.level}%` }}>
                <div className="inner-circle">
                  <div className="skill-icon-wrapper">
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>


      </Container>
    </section>
  )
}

export default Skills