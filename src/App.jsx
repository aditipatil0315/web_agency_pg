import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Section1 from "./components/Section_1/Section1";
import Section2 from "./components/Section_2/Section2";
import Section3 from "./components/Section_3/Section3";
import Section4 from "./components/Section_4/Section4";
import Section5 from "./components/Section_5/Section5";



gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.3,
      smooth: true,
      easing: (t) => 1 - Math.pow(1 - t, 2),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {

    gsap.fromTo(
      ".navbar",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".section1",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".section1 .left",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".section1",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  
    gsap.fromTo(
      ".section1 .right",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".section1",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );



    gsap.fromTo(
      ".sec2_left h3, .sec2_left h2, .sec2_left button",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".section2",
          start: "top 80%",
          toggleActions: "play none play reset",
        },
      }
    );
    
    gsap.fromTo(
      ".section3 .grid",
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".section3",
          start: "top 80%",
          toggleActions: "play none play reset",
        },
      }
    );

    gsap.fromTo(
      ".section5__cards",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".section5",
          start: "top 80%",
          toggleActions: "play none play reset",
        },
      }
    );

    gsap.fromTo(
      ".testimonials__cards",
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonials",
          start: "top 80%",
          toggleActions: "play none play reset",
        },
      }
    );
  }, []);

  return (
    <>
      <div className="main">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />
      </div>
    </>
  );
}

export default App;

