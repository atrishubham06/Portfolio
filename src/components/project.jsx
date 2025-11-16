const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React and Vite.",
      link: "#",
    },
    {
      title: "Project 2",
     
      link: "#",
    },
    {
      title: "Project 3",
     
      link: "#",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link !== "#" && (
              <a href={project.link} target="_blank" rel="noreferrer">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
