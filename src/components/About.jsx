const About = () => {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "Python",
    "GraphQL",
    "AWS",
    "Docker",
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h2 className="text-3xl font-bold text-accent section-title mb-6">
              About Me
            </h2>
            <p className="text-light opacity-90 mb-4">
              Hello! I'm Alex, a passionate web developer with over 5 years of
              experience creating digital products that matter. My journey in
              tech started when I built my first website at 15, and I've been
              hooked ever since.
            </p>
            <p className="text-light opacity-90 mb-4">
              I specialize in JavaScript frameworks like React and Vue.js, with
              expertise in building scalable backend services with Node.js and
              Python. I take pride in writing clean, efficient code and solving
              complex problems with elegant solutions.
            </p>
            <p className="text-light opacity-90 mb-6">
              When I'm not coding, you'll find me hiking, reading sci-fi novels,
              or experimenting with new cooking recipes.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-badge px-3 py-1 bg-secondary rounded cursor-default text-accent mono text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="w-3/4 mx-auto relative group">
              <div className="absolute inset-0 border-2 border-accent rounded-lg translate-x-6 translate-y-6 group-hover:translate-x-5 group-hover:translate-y-5 transition-all duration-300"></div>
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="2x2.jpg"
                  alt="Alex Carter"
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
