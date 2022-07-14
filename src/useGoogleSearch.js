import { useState, useEffect } from "react";
import API_KEY from "./keys";

const context_key = "7e7773ff1c0129017";

const useGoogleSearch = (term) => {
    const [data, setData] = useState();

    useEffect(() =>{
      const fetchdata = async() => {
        fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${context_key}&q=${term}
        `)
        .then(responce => responce.json())
        .then(result => {
            setData(result)
        })        
      } 

      fetchdata();
      
    },[term])

    return { data }
    
};

export default useGoogleSearch;

//Public URL
//https://cse.google.com/cse?cx=7e7773ff1c0129017//

//https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${context_key}&q=${term}