import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation'
import About from './components/About'
import Education from './components/Education';
import Experience from './components/Experience';
import Volunteer from './components/Volunteer';
import Skills from './components/Skills';
import Footer from './components/Footer';
function App() {
  
  return (
    <div>
  <BrowserRouter> {/* ✅ Wrap your App inside BrowserRouter */}
      <div>
        <Navigation />
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="experience"><Experience /></section>
        <section id="volunteer"><Volunteer /></section>
        <section id="skills"><Skills /></section>
        <Footer />
      </div>
    </BrowserRouter>
    </div>
  )
}

export default App