import './App.css';
import React from 'react';
import Header from "./Components/Header";
import Navbar from './Components/Navbar';
import Project from './Components/Project';
import Skills from './Components/Skills';
import Education from "./Components/Education"
function App() {
  return (
    <div className="App">
    <Navbar />
    <Header />
    <Project />
    <Skills />
    <Education/>
    </div>
  );
}

export default App;
