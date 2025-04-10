import React from "react";
import ProjectCard from "./Projects";

const Work = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    },
    {
      title: "Health Analytics Dashboard",
      description:
        "Real-time health data visualization tool for medical professionals with predictive analytics capabilities.",
      technologies: ["Vue.js", "Python", "D3.js", "TensorFlow"],
    },
    {
      title: "Task Management API",
      description:
        "Scalable backend service for task management applications with role-based access control.",
      technologies: ["TypeScript", "NestJS", "PostgreSQL", "Redis"],
    },
    {
      title: "Portfolio Template",
      description:
        "Open-source portfolio template for developers with customizable themes and CMS integration.",
      technologies: ["Next.js", "Tailwind CSS", "Sanity.io", "Framer Motion"],
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
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#"
            className="px-6 py-3 border border-accent text-accent rounded hover:bg-accent hover:bg-opacity-10 transition-all duration-300 font-mono"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
