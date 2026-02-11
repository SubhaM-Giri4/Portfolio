
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Dock from "./components/Dock";
import ScrollProgress from "./components/ScrollProgress";
import { useState, useEffect } from "react";
import CompetitiveProgramming from "./components/CompetitiveProgramming";

export default function App(){
  const [dark,setDark]=useState(true);

  useEffect(()=>{
    document.documentElement.classList.add("dark");
  },[]);

  return(
    <div className={dark?'dark':''}>
      <ScrollProgress/>
      <div className="min-h-screen flex flex-col items-center">
        <Navbar/>
        <Hero/>
        <About/>
        <Education/>
        <Skills />
        <CompetitiveProgramming />
        <Projects />
        <Contact/>
        <Dock dark={dark} setDark={setDark}/>
      </div>
    </div>
  );
}
