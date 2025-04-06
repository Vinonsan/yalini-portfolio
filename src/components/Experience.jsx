import { Container } from 'react-bootstrap'
import { FaBriefcase, FaBuilding, FaChild, FaHeartbeat } from 'react-icons/fa'
import { BiTimeFive } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'
import { useState } from 'react'
import './Experience.css'
import SectionDivider from './SectionDivider'


function Experience() {
  const [expandedRole, setExpandedRole] = useState(null);

  const experiences = [
    {
        id: 'healthPromotion',
        title: 'Health Promotion Experience',
        company: 'Rajarata University of Sri Lanka',
        period: '2022 - 2024',
        icon: <FaHeartbeat />,
        description: '02 years field experience in Health Promotion intervention.',
        details: [
          'Implemented health promotion initiatives in rural communities.',
          'Conducted health education programs on lifestyle diseases and prevention.',
          'Organized awareness campaigns focusing on nutrition and physical activity.',
          'Collaborated with local health organizations to improve public health outcomes.'
        ],
        color: '#4A90E2'
      },
      {
        id: 'hinduBuddhistAssociation',
        title: 'Coordinator - Hindu Buddhist Association',
        company: 'Hindu Buddhist Association',
        period: '6 months',
        icon: <FaChild />,
        description: '6 months experience as a coordinator, focusing on community outreach and religious activities.',
        details: [
          'Coordinated community outreach programs promoting cultural values and education.',
          'Organized religious and cultural events, including workshops and seminars.',
          'Managed volunteer teams and facilitated communication between members.',
          'Supported fundraising and charity events for community development.'
        ],
        color: '#50C878'
      },
      {
        id: 'teacherExperience',
        title: 'Teacher - Access Academy',
        company: 'Access Academy, Tharmapuram',
        period: '1 year',
        icon: <FaBuilding />,
        description: 'One year experience as a teacher, focusing on academic development and student support.',
        details: [
          'Taught subjects related to health education and public health.',
          'Developed and delivered lesson plans, assessments, and educational materials.',
          'Provided mentorship and guidance to students, promoting academic excellence.',
          'Collaborated with colleagues to enhance the curriculum and teaching methods.'
        ],
        color: '#E74C3C'
      }
  ];
  

  return (
    <section>
    <section id="experience" className="experience-section">
      <Container>
      <div className="title-container">
            <span className="icon-wrapper">
                <FaBriefcase className="title-icon" />
            </span>
            <h2 className="title">Education</h2>
            <div className="underline"></div>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
  <div 
    key={exp.id}
    className={`timeline-item ${expandedRole === exp.id ? 'expanded' : ''}`}
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    <div 
      className="timeline-marker"
      style={{'--marker-color': exp.color}}
      onClick={() => setExpandedRole(expandedRole === exp.id ? null : exp.id)}
    >
      <div className="marker-icon">
        {exp.icon}
      </div>
      <div className="marker-pulse"></div>
    </div>

    <div className="timeline-content">
      <div className="role-header">
        <h3>{exp.title}</h3>
        <div className="company-info">
          <span className="company-name">
            <MdLocationOn /> {exp.company}
          </span>
          <span className="period">
            <BiTimeFive /> {exp.period}
          </span>
        </div>
      </div>

      {/* Insert description here */}
      <div className="role-description">
        <p>{exp.description}</p>
      </div>

      <div className="role-details">
        <ul className="responsibilities">
          {exp.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
))}

        </div>
      </Container>
     
    </section>
    <SectionDivider />
    </section>
  )
}

export default Experience