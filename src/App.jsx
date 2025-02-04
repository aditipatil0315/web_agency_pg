import { useEffect, useRef } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Section1 from './components/Section_1/Section1'
import Section2 from './components/Section_2/Section2'
import Section3 from './components/Section_3/Section3'
import Section4 from './components/Section_4/Section4'
import Section5 from './components/Section_5/Section5'
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {

  const handleScroll = (e, id) => {
    e.preventDefault(); 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      
      if (scroll) {
        scroll.update();
      }
    }
    setMenuOpen(false); 
  };


  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1, 
    });

    return () => {
      scroll.destroy(); 
    };
  }, []);

  return (
    <>
      <div className='main' ref={scrollRef} data-scroll-container>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Footer/>

        
      </div>
    </>
  )
}

export default App
