import { useState } from "react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["TechSolutions", "DigitalAgency", "Freelance"];

  const contents = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechSolutions Inc.",
      period: "May 2021 - Present",
      points: [
        "Led development of a SaaS platform serving 50,000+ monthly active users, improving performance by 40%",
        "Architected and implemented a microservices infrastructure reducing deployment times by 65%",
        "Mentored 5 junior developers, conducting code reviews and pair programming sessions",
        "Implemented CI/CD pipelines reducing production bugs by 30%",
      ],
    },
    {
      title: "Frontend Developer",
      company: "DigitalAgency",
      period: "June 2018 - April 2021",
      points: [
        "Developed 15+ responsive websites for clients across various industries",
        "Collaborated with designers to implement pixel-perfect UIs with 98% client satisfaction",
        "Optimized frontend performance achieving 90+ Lighthouse scores for all projects",
        "Introduced automated testing reducing QA time by 50%",
      ],
    },
    {
      title: "Freelance Web Developer",
      company: "",
      period: "2015 - 2018",
      points: [
        "Built custom websites and web applications for small businesses and startups",
        "Worked directly with clients to understand requirements and deliver solutions",
        "Managed all aspects of projects from design to deployment",
        "Developed strong problem-solving and communication skills",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-accent section-title mb-12">
          Where I've Worked
        </h2>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-6 md:mb-0">
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible space-x-4 md:space-x-0">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 mono text-left border-l-2 ${
                    activeTab === index
                      ? "border-accent text-accent bg-accent bg-opacity-10"
                      : "border-secondary text-light hover:bg-accent hover:bg-opacity-10"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="md:w-3/4 md:pl-12">
            <div className="experience-content">
              <h3 className="text-xl font-bold text-light">
                {contents[activeTab].title}
                {contents[activeTab].company && (
                  <span className="text-accent">
                    {" "}
                    @ {contents[activeTab].company}
                  </span>
                )}
              </h3>
              <p className="text-light opacity-90 mono mb-2">
                {contents[activeTab].period}
              </p>
              <ul className="list-disc pl-5 text-light opacity-90 space-y-2 mt-4">
                {contents[activeTab].points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
