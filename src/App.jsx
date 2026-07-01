import React, { lazy, Suspense } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import { Scanlines } from "./components/Scanlines";

const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Experiences = lazy(() => import("./sections/Experiences"));
const Testimonial = lazy(() => import("./sections/Testimonial"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

const App = () => {
  return (
    <div className="w-full relative bg-void">
      <Scanlines />
      <Navbar />
      <Hero />
      <div className="container mx-auto max-w-7xl relative">
        <Suspense fallback={<div className="min-h-screen" />}>
          <About />
          <Projects />
          <Experiences />
          <Testimonial />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default App;