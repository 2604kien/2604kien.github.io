import './App.css';
import React from 'react';
import Header from "./Components/Header";
import Navbar from './Components/Navbar';
import Project from './Components/Project';
import Skills from './Components/Skills';
import Education from "./Components/Education"
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
    <Navbar />
    <Header />
    <Project />
    <Skills />
    <Education/>
    <Contact/>
    </div>
  );
}

export default App;
