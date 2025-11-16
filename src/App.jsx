import React from 'react'
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/skills.jsx";
import Projects from "./components/project.jsx";
import Contact from "./components/contact.jsx";

const App = () => {
  return (
    <div>
      <Navbar />

      <main className="main-content">
        <header className="hero">
          <h1 id='hero1'>Hi there! I'm  <br/>Shubham Atri 👋</h1>
          <p>Frontend Developer | React Learner | Engineering Student</p>
        </header>

        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

