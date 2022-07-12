import React from "react";
import './Search.css';
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import {  useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";


function Search() {
    const [{term},dispatch] = useStateValue();

    const [input,setInput] = useState("");
    const navigate = useNavigate();
     const search = (e) => {
      e.preventDefault();
      // console.log(input);

      dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input
      })

      navigate('/search');
    }; 
    

    return(
        
        <>
          
           <div className="search">
             <form onSubmit={search} className="search_input">
             <SearchIcon/>
                <input  value={input} onChange={e => setInput(e.target.value)} placeholder="Google Search or type URL"></input> 
             <MicIcon/>
             </form>
           </div>
        </>
    );
}

export default Search;