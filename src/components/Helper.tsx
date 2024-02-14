import { useEffect, useState } from "react";

export default function helper(value:number){
    const[state,setState]=useState(value);
    useEffect(()=>{
   console.log("helper")
    },[])
    return state;
}