import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Error404 from './Components/Error404';
import Assignment from './Components/Assignment/Assignment';
function App() {
  const isClicked=useSelector(state=>state.project.isClicked);
  
  return (
    
    <div className="App">

    <Routes>
      <Route path='*' element={<Navbar/>}>
      <Route path='' element={
        <>
        <Assignment/>
        </>
      }/>
        <Route path='*' element={<Error404/>}/>
        
      </Route>
    </Routes>    
    </div>
  );
}

export default App;
