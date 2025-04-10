const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      github: "https://github.com/SantillanPs",
      live: "#",
    },
    {
      title: "Health Analytics Dashboard",
      description:
        "Real-time health data visualization tool for medical professionals with predictive analytics capabilities.",
      tech: ["Vue.js", "Python", "D3.js", "TensorFlow"],
      github: "https://github.com/SantillanPs",
      live: "#",
    },
    {
      title: "Task Management API",
      description:
        "Scalable backend service for task management applications with role-based access control.",
      tech: ["TypeScript", "NestJS", "PostgreSQL", "Redis"],
      github: "https://github.com/SantillanPs",
      live: "#",
    },
    {
      title: "Portfolio Template",
      description:
        "Open-source portfolio template for developers with customizable themes and CMS integration.",
      tech: ["Next.js", "Tailwind CSS", "Sanity.io", "Framer Motion"],
      github: "https://github.com/SantillanPs",
      live: "#",
    },
  ];

  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-accent section-title mb-4">
          Some Things I've Built
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card rounded-lg p-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-gold opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <i className="fas fa-folder text-accent text-3xl"></i>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="text-light hover:text-accent"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href={project.live}
                      className="text-light hover:text-accent"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-light mb-2">
                  {project.title}
                </h3>
                <p className="text-light opacity-90 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mono text-xs">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-accent">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#"
            className="px-6 py-3 border border-accent text-accent rounded hover:bg-accent hover:bg-opacity-10 transition-all duration-300 mono"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
