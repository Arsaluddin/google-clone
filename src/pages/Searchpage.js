import React from "react";
import Search from './Search.js'
import './Searchpage.css';
import { useStateValue} from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch.js";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreIcon from '@mui/icons-material/More';


function Searchpage() {

     const [{term}, dispatch] = useStateValue();
     const { data } = useGoogleSearch(term);
     console.log(data);

    return(
        <>
           <div className="search_page">

              <div className="search_bar">
               
                  <img className="searchpage_logo"
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"></img>
                  <Search/>
                  
              </div>
              <div className="searchpage_options">
                  <div className="searchpage_optionsleft">
                     <div className="searchpage_option">
                         <SearchIcon/>
                         <Link to="/all">All</Link>
                     </div>
                     <div className="searchpage_option">
                         <DescriptionIcon/>
                         <Link to="/news">News</Link>
                     </div>
                     <div className="searchpage_option">
                         <ImageIcon/>
                         <Link to="/images">Images</Link>
                     </div>
                     <div className="searchpage_option">
                         <LocalOfferIcon/>
                         <Link to="/shopping">Shopping</Link>
                     </div>
                     <div className="searchpage_option">
                         <RoomIcon/>
                         <Link to="/maps">Maps</Link>
                     </div>
                     <div className="searchpage_option">
                         <MoreIcon/>
                         <Link to="/more">More</Link>
                     </div>

                  </div> 
                  <div className="searchpage_optionsright">
                     <div className="searchpage_option">
                        <Link to="/setting">Setting</Link>
                     </div>
                     <div className="searchpage_option">
                        <Link to="/tools">Tools</Link>
                     </div>
                  </div>
              </div>
              {true && (
                <div className="searchpage_results">
                    <p className="searchpage_resultcount">
                        About {data?.searchInformation.formattedTotalResults} results 
                        ({data?.searchInformation.formattedSearchTime}  in Seconds) for {term}
                    </p>
                    {data?.items.map(item=> (
                        <div className="searchpage_result">
                           <a href={item.link}>
                            {item.displayLink}
                           </a>
                           <a className="searchpage_resultTitle" href={item.link}>
                            <h2>{item.title}</h2>
                           </a>
                           <p className="searchpage_resultSnippet">
                            {item.snippet}
                           </p>
                        </div>
                    ))}
                </div>
              )}

           </div>
        </>
    );
}


export default Searchpage;

// AIzaSyCJkeV5jItUtpdTORAoPThuV-II_DMSIqU