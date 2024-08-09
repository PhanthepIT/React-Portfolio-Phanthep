import React, { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Paokub from "./components/Paokub";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import ImageCarousel from './components/Carousel';
import ImageCarouselKU from "./components/CarouselKU";
import ImageList from "./components/ImageList";

const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 300) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 300) {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full" >
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-indigo-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Paokub />
        <About />
        <Technologies />
        <Education />
        <Projects />
        <ImageCarousel />
        <ImageCarouselKU/>
        <ImageList/>
        <Contact/>
      </div>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 z-50 p-3 bg-cyan-600 text-white rounded-full transition-opacity duration-300 ${
          showScroll ? "opacity-100" : "opacity-0"
        }`}
        style={{ display: showScroll ? "block" : "none" }}
      >
        ↑
      </button>
    </div>
  );
};

export default App;
