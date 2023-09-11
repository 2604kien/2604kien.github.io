import './App.css';
import React from 'react';
import Header from "./Components/Header";
import Navbar from './Components/Navbar';
import About from "./Components/About"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import background from "./Images/HeaderBackground.png"

function App() {
  return (
    <div className="App">
      <img
      src={background} style={{position: "fixed", width: "100%", zIndex:"-9"}}/>
     <Navbar />
     <Header />
     <About />
    </div>
  );
}

export default App;
