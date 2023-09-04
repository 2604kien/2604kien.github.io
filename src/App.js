import './App.css';
import React from 'react';
import Header from "./Components/Header";
import Navbar from './Components/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div className="App">
     <Navbar />
     <Header />
    </div>
  );
}

export default App;
