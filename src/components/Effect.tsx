import { useState,useEffect, useMemo } from "react"
import useOnline from "./useOnline";
import Slider from "./Slider";
import { useLocation } from "react-router-dom";



function Effect(){
    const[color,setColor]=useState('white')
    
    
   console.log(useOnline())
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


    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setColor('Black')
    //     },1000)
      
    // })
//This useEffect hook doesn't have a dependency array, which means it will run after every render of the component
// (componentDidMount and componentDidUpdate equivalent). 
//It also sets the color to black after a delay of 1000 milliseconds, but it will do so after each render, not just once.

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
    console.log("hi")
    const obj={name:"pranai"}

    useEffect(()=>{console.log("obj changed")},[obj])//after every re-render it will gets called because obj is an object
    //and it will have new referenece for a re-render

   const objInUseMemo=useMemo(()=>{obj},[])//memomoizing the value of obj so that it will not change for every re-render
    useEffect(()=>{console.log("objInUseMemo changed")},[objInUseMemo])


    const[objInState]=useState({name:"pranai"})
    useEffect(()=>{console.log("objInState changed")},[objInState])//This will not gets called after every re-render


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
    <Slider name="pranai"/>
    </div>
   
    </>
)
}


export default Effect