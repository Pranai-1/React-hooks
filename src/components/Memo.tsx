import { useMemo, useState } from "react"

export default function Memo(){
    const[value,setValue]=useState<number>(0)
    const[count,setCount]=useState<number>(0)
   // const prime=getPrime(value)//it will calculate the result eventhough the value doesn't change because of change in count
    const prime=useMemo(()=>{
       return getPrime(value)//here i am memoizing the result and returning
    },[value])
    //The same functionality can be achieved by using useState and useEffect in combination
    return(
        <div className="h-screen w-screen bg-slate-200  p-2"> 
        <div className="h-max w-max mt-10 p-5 grid  gap-10 grid-cols-2 items-center justify-center">
        <p className="font-bold bg-blue-500 p-2 rounded-lg w-max mx-auto">{count}</p>
        <button className="text-center font-bold bg-blue-500 p-2 rounded-lg " onClick={
            ()=>{setCount((prev:number)=>prev+1)}}>Increase</button>
      
        <input type="number" onChange={(e)=>{setValue(Number(e.target.value))}} placeholder="enter a value " 
        defaultValue="0" className=" p-2 rounded-lg"/>
        <p className="text-center font-bold bg-blue-500 p-2 rounded-lg w-max mx-auto">nth prime:-{prime}</p>
        </div>
        </div>
    )
}

function getPrime(value: number) {
    console.log(value)
     let count=0;
     let num=2;
     if(value==0)
     return 0
     while(count<value){
        if(isPrime(num))
        count++;
    if(count==value)
    return num;
   num++;
     }
}

function isPrime(num:number){
    let i=2;
    while(i*i<=num){
        if(num%i==0)
        return false;
    i++;
    }
    return true
}
