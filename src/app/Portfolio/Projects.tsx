"use client";
import Link from "next/link";

export default function Projects() {
  const projectList = [
    {
      title: "Phone Store",
      description: "A fully functional e-commerce mobile website built with React and CSS.",
      link: "https://strong-brioche-64fe7b.netlify.app/"
    },
    {
      title: "Story Teller",
      description: "Platform that generates creative stories for kids based on their inputs.",
      link: "https://smartsprout-ui.netlify.app/"
    },
    {
      title: "Food Web App",
      description: "Web app that allows users to search for any food using an API.",
      link: "https://playful-otter-89f951.netlify.app/"
    },
    {
      title: "Note App",
      description: "Note-taking app for writing, viewing, and deleting notes.",
      link: "https://melodic-haupia-1b3c12.netlify.app/"
    },
  ];

  return (
    <section id="projects" className="py-16 sm:pt-24">
      <h2 className="section-header text-3xl md:text-4xl mb-12 text-center">PROJECTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6 items-stretch">
        {projectList.map((project, index) => (
          <div key={index} className="project-card flex flex-col justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">{project.title}</h3>
              <p className="text-gray-700 leading-relaxed text-center text-sm flex-1 mb-6">{project.description}</p>
            </div>
            <Link href={project.link} target="_blank" className="project-link text-center">
              <span>View Project →</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
