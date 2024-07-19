
import useGif from '../hooks/useGif';
import Spinner from './Spinner';
import { useEffect, useState } from 'react';

function Tag(props) {

    const[tag,setTag]=useState("");
    const{gif,loading,fetchData}= useGif(tag);
    

    useEffect(()=>{
      
        fetchData();
        
    },[] )

    function changeHandler(event)
    {
        setTag(event.target.value);

    }
    function gifHandler()
    {
        
        fetchData();
    }

    return (
        <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
                <h1 className='mt-[15px] text-2xl underline uppercase font-bold '>Random {tag} Gif</h1>
                {

                    loading? (<Spinner/>):(<img src={gif} width="450px" alt='gif' className='items-center'/>)
                }
                
                <input type="text" className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center' onChange={changeHandler} value={tag}></input>
                <button
                    onClick={gifHandler}
                    className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]'
                    >
                    Generate</button>
        </div>
    );
}

export default Tag;