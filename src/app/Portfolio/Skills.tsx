"use client";
import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="skills-section py-16 sm:pt-24">
      <h1 className="section-header text-3xl md:text-4xl text-center mb-12">
        TECH STACK
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 sm:mt-12 place-items-center max-w-7xl mx-auto px-6">
        <div className="skill-card text-center">
          <SiTypescript className="text-blue-600 text-6xl mb-3 mx-auto" />
          <p className="text-gray-900 font-semibold text-lg">TypeScript</p>
        </div>

        <div className="skill-card text-center">
          <SiReact className="text-cyan-500 text-6xl mb-3 mx-auto" />
          <p className="text-gray-900 font-semibold text-lg">React</p>
        </div>

        <div className="skill-card text-center">
          <SiNextdotjs className="text-gray-900 text-6xl mb-3 mx-auto" />
          <p className="text-gray-900 font-semibold text-lg">Next.js</p>
        </div>

        <div className="skill-card text-center">
          <SiTailwindcss className="text-sky-500 text-6xl mb-3 mx-auto" />
          <p className="text-gray-900 font-semibold text-lg">Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
}
