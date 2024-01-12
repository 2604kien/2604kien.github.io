import './App.css';
import React from 'react';
import Header from "./Components/Header";
import Navbar from './Components/Navbar';
import Project from './Components/Project';
import Skills from './Components/Skills';
import Education from "./Components/Education"
import Contact from './Components/Contact';
import ProjectDisplay from './Components/ProjectDisplay';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Error404 from './Components/Error404';
import AllProjectDisplay from './Components/AllProjectDisplay';
function App() {
  const isClicked=useSelector(state=>state.project.isClicked);
  
  return (
    
    <div className="App">
    {isClicked&&<ProjectDisplay/>}
    <Navbar />
    <Routes>
      <Route path='' element={
        <>
        <Header />
        <Project />
        <Skills />
        <Education/>
        <Contact/>
        </>
      }/>
      <Route path='all-projects' element={<AllProjectDisplay/>}/>
      <Route path='*' element={
        <Error404/>
      }/>
    </Routes>    
    </div>
  );
}

export default App;
