import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navigate() {
    const navigate = useNavigate();
    const [notUsed,setNotUsed]=useState(0);
    useEffect(()=>{setTimeout(()=>{
        console.log("notUsed ")
        setNotUsed(5) ;
    },2000)}
//useEffect hook won't cause a re-render of the component because the state update doesn't affect 
//any state variable used in the component's render function
    ,[])

    console.log(notUsed)
    
      // Navigate to '/other-route' and replace the current entry in the history stack
      //Current route cannot be reached if we press back button 
    const handleReplaceNavigate = () => {
        navigate('/', { replace: true });
      };
    
      // Navigate to '/another-route' and pass state along with the navigation
      const handleStateNavigate = () => {
        navigate('/', { state: { foo: 'bar' } });
      };
    return (
        <>
      <button onClick={() => navigate('/')} className=" m-2 p-2 bg-blue-600 rounded-lg">Go to Other Route</button>
      <button onClick={handleReplaceNavigate} className=" m-2 p-2 bg-red-600 rounded-lg">Replace Navigate</button>
      <button onClick={handleStateNavigate} className=" m-2 p-2 bg-green-600 rounded-lg">State Navigate</button>
      </>
    );
  }
  