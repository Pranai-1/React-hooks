import { memo, useCallback, useState } from "react"
import Search from "./Search"
import Memo from "./Memo";


export default function Callback(){
    const users1=["pranai","john","alex","roy","helli","resa"]
    const[users,setUsers]=useState<string[]>(users1)

    //react creates a new function after every re-render for a fucntion definition so,search component will get 
    //re-rendered eventhough it is not needed to re-render,to overcome this we need to memoize the entire function
    //using usecallback hook

//     function handleSearch(input:string){
//         setUsers(users.filter((user:string)=>user.includes(input)))
//    }


//here we are memoizing the entire function with the help of function expression
   const handleSearch = useCallback((input: string) => {
    console.log(users1)
    setUsers(users1.filter((user: string) => user.includes(input)));
}, []);
   

    function handleShuffle(){
        const x=users.sort()
        console.log(x)
      setUsers([...x])
    }

    console.log(Memo())

console.log(<Memo/>)


    return(
        <div className="h-screen w-screen bg-slate-200  p-2"> 
           <div className="h-max w-max mt-10 p-5 ">
            <div className="p-5 bg-indigo-500 rounded-lg flex gap-10">
                <button className="text-center font-bold bg-blue-500 p-2 rounded-lg mb-2" onClick={()=>{handleShuffle()}}>shuffle</button>
                <Search onChange={handleSearch}/>
                
            </div>
           
            {users.map((user:string)=>(
                     <p className="font-medium p-2 mt-1 bg-slate-200 rounded-xl text-center">{user}</p>
                ))}
                
            </div>
        </div>
    )
}

