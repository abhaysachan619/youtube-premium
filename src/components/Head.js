import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {

    const[searchQuery, setSearchQuery] = useState("");
    const[suggestions, setSuggestions] = useState([]); 
    const[showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store)=> store.search);
    const dispatch = useDispatch();


    useEffect(()=>{
     //API Call
    //  console.log(searchQuery);
     
     // make an api call after every key press
     // but if the difference between 2 api calls is <200ms
     // decline the api call
     const timer = setTimeout(()=>{
        if(searchCache[searchQuery]) {
            setSuggestions(searchCache[searchQuery]); 
        }
        else{
            getSearchSuggestions()
        }   
    },200);

     return ()=>{
        clearTimeout(timer);
     };
    },[searchQuery]);

    const getSearchSuggestions = async()=>{
        // console.log("API CALL - " + searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        // console.log(json[1]);
        setSuggestions(json[1]);

        // update cache
        dispatch(cacheResults({
            [searchQuery] : json[1],
        })
       );
    };

    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu());
    };
  return (
  <div className="grid grid-flow-col p-5 m-2 shadow-lg">
    <div className="flex col-span-1">
        <img 
            onClick={()=>toggleMenuHandler()}
            className="h-8 cursor-pointer"
            alt="menu" 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
        <a href="/">
        <img
            className="h-9 mx-2"
            alt="youtube-logo"
            src="https://www.91-cdn.com/hub/wp-content/uploads/2022/06/YouTube-Premium.jpg"
        /> 
        </a>       
    </div>

    <div className="col-span-10 px-10">
        <div>
        <input 
        className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full" 
        type="text"
        value={searchQuery}
        onChange={(e)=> setSearchQuery(e.target.value)}
        onFocus={()=> setShowSuggestions(true)}
        onBlur={()=> setShowSuggestions(false)}
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100 "> 
        🔍
        </button>
        </div>
        {showSuggestions && (
            <div className="fixed bg-white py-2 px-5 w-[32rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
                {suggestions.map((s)=>(
                 <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                 🔍 {s}
                 </li>
                ))}
            </ul>
        </div>
        )}
    </div>
    <div className="col-span-1">
        <img
            className="h-8"
            alt="user"
            src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
        />    
    </div>
   </div> 
  );
};

export default Head;