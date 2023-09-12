import './App.css';
import React from 'react';
import Header from "./Components/Header";
import Navbar from './Components/Navbar';
import Project from './Components/Project';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Header />
      <Project />
    </div>
  );
}

export default App;
