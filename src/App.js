import './App.css';
import React from 'react';
import Header from "./Components/Header";
import Navbar from './Components/Navbar';
import Project from './Components/Project';
import Skills from './Components/Skills';
function App() {
  return (
    <div className="App">
    <Navbar />
    <Header />
    <Project />
    <Skills />
    </div>
  );
}

export default App;
