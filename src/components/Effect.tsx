import { useState,useEffect } from "react"
import helper from "./Helper";
import useOnline from "./useOnline";
import Slider from "./Slider";
import { useLocation } from "react-router-dom";
import Reducer from "./Reducer";


function Effect(){
    const[color,setColor]=useState('white')
//    console.log(useOnline())
//    console.log(helper(0));

//    console.log(Reducer())
//    console.log(<Reducer/>)
   const location = useLocation();//we can receive the state from useNavigate hook
  const state = location.state;

  console.log(state)
    useEffect(()=>{
        setTimeout(()=>{
            setColor('Black')
        },1000)
      
    },[])

    //Three different useEffects

    console.log(y())
    function y(){
        let[local,setLocal]=useState(0);
            useEffect(()=>{
                setLocal(2)    
               console.log("y "+ local) 

               setTimeout(()=>{
                console.log("y "+ local) 
               },3000)
               //The value of local that is logged is 0 in both cases because,useEffect forms a closure with the local
               //variable when useEffect gets created.so,value of local is still 0 even after 3 seconds.
            },[])
       
        return local//this will return 2
    }

    // function y(){
    //     let[local,setLocal]=useState(0);
    //         useEffect(()=>{
    //             setLocal(2)    
              
    //         },[])
    //         console.log("y "+ local) //value of local gets updated
    //     return local
    // }

    // function y(){//value becomes 2 after 3 seconds 
    //     let[local,setLocal]=useState(0);
    //     useEffect(()=>{
    //     setTimeout(()=>{
    //             setLocal(2)   
    //     },3000)
    //         },[])
    //     console.log("y "+ local)
    //     return local
    // }
 
return(
    <>
    <div className=" h-screen w-screen" style={{backgroundColor: color}}>
    <div className="fixed flex flex-wrap justify-center bottom-20 left-0 right-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-3 py-2 rounded-3xl">
        <button className='text-white bg-red-600 rounded p-2 m-1' onClick={() => setColor("red")} >Red</button>
        <button className='text-white bg-green-600 rounded p-2 m-1' onClick={() => setColor("Green")}>Green</button>
        <button className='text-white bg-pink-600 rounded p-2 m-1' onClick={() => setColor("Pink")}>Pink</button>
        <button className='text-white bg-yellow-600 rounded p-2 m-1' onClick={() => setColor("Yellow")}>Yellow</button>
        <button className='text-white bg-orange-600 rounded p-2 m-1' onClick={() => setColor("Orange")}>Orange</button>
    
    </div>
  
    </div>
    <Slider/>
    </div>
   
    </>
)
}


export default Effect