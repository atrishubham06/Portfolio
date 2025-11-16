const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git & GitHub",
    "C/C++",
   
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
