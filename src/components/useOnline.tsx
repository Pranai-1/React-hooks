import { useEffect, useState } from "react"

 const useOnline=()=>{
    const [isOnline,setisOnline]=useState(true)
    useEffect(()=>{
        window.addEventListener("online",()=>{
            console.log("online")
            setisOnline(true)
    })
        window.addEventListener("offline",()=>{
            console.log("offline")
            setisOnline(false)
        })
        return (()=>{
            window.addEventListener("online",()=>{console.log("online")})
            window.addEventListener("offline",()=>{console.log("offline")})
        })
    },[])
    return isOnline
}
export default useOnline