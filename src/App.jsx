import React, { useRef } from "react";
import "./App.css";
import AboutMe from "./components/Aboutme";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
function App() {
  const heroRef = useRef(null);
  const aboutMeRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactMeRef = useRef(null);

  // Scroll function
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div>
      <Header
        handleScroll={scrollToSection}
        refs={{ heroRef, aboutMeRef, servicesRef, portfolioRef, contactMeRef }}
      />
      {/* hero section */}
      <section
        ref={heroRef}
        className="h-screen  flex justify-center items-center text-white text-3xl bg-cover bg-center"
        style={{
          background:
            "url(https://codeefly.net/wp/zyan/wp-content/uploads/2023/10/banner-scaled.jpg)",
        }}
      >
        <Hero />
      </section>
      <section
        ref={aboutMeRef}
        className="flex justify-center items-center text-white text-3xl"
      >
        <AboutMe />
      </section>
      <section
        ref={servicesRef}
        className="bg-[#000] flex justify-center items-center text-white text-3xl"
      >
        <Services />
      </section>
      {/* <section
        // ref={contactRef}
        className="flex justify-center items-center text-white text-3xl"
      >
        <WorkExperience />
      </section> */}
      <section ref={portfolioRef} className="flex text-white text-3xl">
        <Portfolio />
      </section>
      <section ref={contactMeRef} className="flex text-white text-3xl">
        <ContactMe />
      </section>
    </div>
  );
}

export default App;
