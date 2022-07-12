import React from "react";
import Search from './Search.js'
import './Searchpage.css';
import { useStateValue} from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch.js";


function Searchpage() {

     const [{term}, dispatch] = useStateValue();
     const { data } = useGoogleSearch(term);
     console.log(data);

    return(
        <>
           <div className="search_page">

              <div className="search_bar">
                 <Search/>
               
              </div>
              <div className="search_result">
                    <h1>{data}</h1>
              </div>

           </div>
        </>
    );
}


export default Searchpage;

// AIzaSyCJkeV5jItUtpdTORAoPThuV-II_DMSIqU