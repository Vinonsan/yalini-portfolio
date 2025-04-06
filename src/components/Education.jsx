import React, { useState } from 'react';
import './Education.css';
import { FaUniversity ,FaRegClock, FaCalendarAlt ,FaCalculator, FaBook, FaLanguage, FaFlask, FaChartLine, FaDumbbell, FaBookReader, FaLandmark, FaPrayingHands } from "react-icons/fa";
import './style.css';
import SectionDivider from './SectionDivider';
function Education() {
  const [flipped, setFlipped] = useState(false);
  

  // O/L Results
  const frontResults = [
    { subject: "Mathematics", grade: "A", icon: <FaCalculator className="icon" /> },
    { subject: "English", grade: "A", icon: <FaBook className="icon" /> },
    { subject: "Tamil", grade: "A", icon: <FaLanguage className="icon" /> },
    { subject: "Science", grade: "B", icon: <FaFlask className="icon" /> },
    { subject: "Commerce", grade: "A", icon: <FaChartLine className="icon" /> },
    { subject: "Health & Phy Edu", grade: "A", icon: <FaDumbbell className="icon" /> },
    { subject: "Tamil Literature", grade: "A", icon: <FaBookReader className="icon" /> },
    { subject: "History", grade: "A", icon: <FaLandmark className="icon" /> },
    { subject: "Religion", grade: "A", icon: <FaPrayingHands className="icon" /> }
  ];

  // A/L Results
  const backResults = [
    { subject: "Physics", grade: "B", icon: <FaFlask className="icon" /> },
    { subject: "Chemistry", grade: "A", icon: <FaFlask className="icon" /> },
    { subject: "Mathematics", grade: "A", icon: <FaCalculator className="icon" /> },
    { subject: "General English", grade: "A", icon: <FaBook className="icon" /> }
  ];

  return (
    <section className='Education-container'>
       <div className="title-container">
            <span className="icon-wrapper">
                <FaUniversity  className="title-icon" />
            </span>
            <h2 className="title">Education</h2>
            <div className="underline"></div>
        </div>

        

      <div className='Results-heading-container'>
        <h1 style={{color:'#fff'}} className='Results-heading-text'>{flipped ? "Advanced Level Results" : "Ordinary Level Results"}</h1>
      </div>

      <div className={`Results-container ${flipped ? "flipped" : ""}`}>
        {(flipped ? backResults : frontResults).map((result, index) => (
          <div key={index} className=" result-card">
            <div className="subject">
              {result.icon} {result.subject}
            </div>
            <div className="grade">{result.grade}</div>
          </div>
        ))}
      </div>

      <div className='results-button'>
        <button onClick={() => setFlipped(!flipped)}>
          {flipped ? "View O/L Results" : "View A/L Results"}
        </button>
      </div>

      
      <div className="roadmap">
        <div className="roadmap-step">
          <div className="roadmap-content">
          <div className="education-roadmap-header">
            <h3 id='education-roadmap-header-title'>Bachelor of Science in Health Promotion</h3>
              <div className="date-container">
                <FaCalendarAlt className="date-icon" />
                <span className="date">2019 - 2024</span>
              </div>
          </div>
            <div className='education-university-container'>
              <FaCalendarAlt className="education-university-date-icon" />
              <p id='education-university-container-name'>Rajarata University of Sri Lanka , Mihinthale</p>
            </div>
            <div>
              <p className='education-detail-para'>Currently pursuing BSc in Applied Sciences with focus on Computer Science and Mathematics</p>
            </div>
            <div className='education-key-points-container'>
              <ul className='education-key-points'>
                <li>Studied public health concepts and community engagement techniques.</li>
                <li>Conducted health promotion programs in rural areas.</li>
                <li>Engaged in research on lifestyle diseases and health behavior.</li>
                <li>Gained hands-on experience in fieldwork and data collection.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <div className="title-container">
            <span className="icon-wrapper">
                <FaUniversity  className="title-icon" />
            </span>
            <h2 className="title">Diploma Certificates</h2>
            <div className="underline"></div>
      </div>

      <div className='diploma-container'>
        <div className="diploma-english-container">
          <h3>Diploma in English (R)</h3>
            <p>This diploma provides in-depth knowledge of the English language, including grammar, composition, and communication skills. Ideal for enhancing professional communication.</p>
            <ul>
              <li><FaRegClock /> 1 Year</li> {/* Duration */}
              <li><FaUniversity /> XYZ University</li> {/* Institution */}
              <li><FaCalendarAlt /> 2020</li> {/* Year Completed */}
            </ul>
            <button className="details-btn">View Details</button>
        </div>

          <div className='diploma-sinhala-container'>
            <h3>Diploma in Sinhala (R)</h3>
            <p>This diploma focuses on mastering the Sinhala language and its literature, culture, and history. Perfect for individuals who want to deepen their understanding of Sinhala.</p>
            <ul>
              <li><FaRegClock /> 1 Year</li> {/* Duration */}
              <li><FaUniversity /> XYZ University</li> {/* Institution */}
              <li><FaCalendarAlt /> 2020</li> {/* Year Completed */}
            </ul>
            <button className="details-btn">View Details</button>
          </div>

      </div>



<SectionDivider />
      
    </section>
  );
}

export default Education;
