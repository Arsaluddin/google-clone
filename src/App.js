import React from "react";
import './App.css';
import Home from './pages/Home.js';
import {BrowserRouter as  Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
           <Route path='/search' element={<h1>arsal uddin</h1>}/>
               
           <Route path='/' element={<Home/>}/>
             
         </Routes>
      </Router>
       
    </div>
  );
}

export default App;
