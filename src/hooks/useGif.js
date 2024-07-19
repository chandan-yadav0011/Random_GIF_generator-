import axios from 'axios';
import React, { useEffect, useState } from 'react';



const API_KEY= process.env.REACT_APP_GIPHY_KEY


function useGif(tag) {
    const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
 
    
    const[gif,setGif]= useState("");
    const[loading,setLoading]= useState (false);
    

    async function fetchData()
    {
       setLoading(true);
       const{ data} = await axios.get(tag?tagUrl:randomUrl);
       const imageSource= data.data.images.downsized_large.url;
       console.log(imageSource);

       setGif(imageSource);
       setLoading(false); 
    }


    useEffect(()=>{
      
        fetchData();
        
    },[])

    return{gif,loading,fetchData};
}

export default useGif;