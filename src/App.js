import React from "react";
import './App.css';
import Home from './pages/Home.js';
import {BrowserRouter as  Router, Route, Routes} from "react-router-dom";
// import Search from './pages/Search.js';
import Searchpage from "./pages/Searchpage";


function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
           <Route path='/search' element={<Searchpage/>}/>
               
           <Route path='/' element={<Home/>}/>
             
         </Routes>
      </Router>
       
    </div>
  );
}

export default App;
