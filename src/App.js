import './App.css';
import React from 'react';
import Header from "./Components/Header";
import Navbar from './Components/Navbar';
import Project from './Components/Project';
import Skills from './Components/Skills';
import Education from "./Components/Education"
import Contact from './Components/Contact';
import ProjectDisplay from './Components/ProjectDisplay';
import projectSlice from './reducers/projectSlice';
import { useSelector } from 'react-redux';
function App() {
  const isClicked=useSelector(state=>state.project.isClicked);
  return (
    
    <div className="App">
    {isClicked&&<ProjectDisplay/>}
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
