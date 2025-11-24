"use client";

export default function Hero() {
  return (
    <section className="text-center home-section pt-28 sm:pt-32">
      <h1 className="section-header home-header text-4xl sm:text-5xl font-bold">
        Front-End Developer
      </h1>
      <p className="home-paragraph mt-4">
        Hello, I am <b className="highlight-text">Ibrahim Wajeeu</b>.
      </p>
      <p className="home-paragraph mt-2">
        A passionate frontend developer creating scalable web apps and pixel-perfect interfaces.
      </p>
      <button className="btn text-center mt-6">
        <a href="#projects">VIEW MY WORK</a>
      </button>
    </section>
  );
}
