import React from "react";
import './Home.css';
import { Link } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from './Search.js'

function Home() {
    return(
        <>
            <div className="home">
                <div className="home_header">
                     <div className="header_left">
                         <Link to='/about'>About</Link>
                         <Link to='/store'>Store</Link>
                     </div>

                    <div className="header_right">
                        <Link to='/gmail'>Gmail</Link>
                        <Link to='/images'>Images</Link> 
                        <AppsIcon/>
                        <AccountCircleIcon/>
                    </div>

                </div>
                 
                <div className="home_body">
                  <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=".."/>
                  <div className="home_inputcontainer">
                     <Search/>
                  </div>
                </div> 

            </div>
        </>
    );
}

export default Home;