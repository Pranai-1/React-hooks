import { useState } from "react"
import useDebounce from "./useDebouce";

export default function SearchBar(){
    let debounced=useDebounce()
    const[text,setText]=useState<string>("")
    const[recommendations,setRecommendations]=useState<string[]>([]);
    function HandleChange(e: any){
      setText(e.target.value)
      debounced(e.target.value,setRecommendations)
    }
   
    return(
        <div className="h-screen w-screen bg-black p-5 flex justify-center items-center">
            <div className="mt-10  relative">
            <input
            className="p-3 bg-gray-200 rounded-full h-max w-[600px]"
            placeholder="search here..."
            type="text"
            onChange={HandleChange}
            value={text}
            /> 
            {recommendations.map((data)=>(
                <p className="text-red-600 p-2 ">{data}</p>
            ))}  
            </div> 
        </div>
    )
}