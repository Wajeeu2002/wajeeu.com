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
    <section id="projects" className="py-16 mt-20 project">
      <h2 className="section-header mb-12">PROJECTS</h2>
      <div className="grid max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 items-stretch">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="text-xl font-semibold text-center mb-4">{project.title}</h3>
            <p className="text-center text-sm mb-6">{project.description}</p>
            <Link href={project.link} target="_blank" className="project-link">
              <span>View Project →</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
