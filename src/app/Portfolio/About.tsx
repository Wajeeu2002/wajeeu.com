"use client";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about py-16">
      <h1 className="section-header text-3xl md:text-4xl font-bold mb-8 text-center lg:text-left">
        ABOUT ME
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6">
        <div className="about-paragraph text-center lg:text-left text-gray-800">
          <p>
            I am a passionate Frontend Developer focused on building scalable,
            responsive, and user-friendly web applications. I enjoy turning complex
            ideas into clean, intuitive interfaces.
          </p>
        </div>

        <div className="flex justify-center lg:justify-start">
          <div className="relative w-64 aspect-square rounded-full overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image
              src="/my-pic.jpg"
              alt="Profile picture"
              width={400}
              height={400}
              className="object-cover"
               priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
