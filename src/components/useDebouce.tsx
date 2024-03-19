import { useRef } from "react";

export default function useDebounce(){
    const data=["wires","wire-box","shoes","shoe-box","shoes-ladies","shoes-gents"]
    const timerIdRef = useRef<number>();//we need to store timerID between re-renders so we need to use useRef hook
    return function(...args:any){
        clearTimeout(timerIdRef.current)
        timerIdRef.current=setTimeout(()=>{
          let input=args[0]
          console.log(input)
          let setRecommendations=args[1]
          if(input.length==0){
            setRecommendations([])
          }else{
            setRecommendations(data.filter((data)=>data.includes(input)))
          }
         
        },2000)
    }
    
}