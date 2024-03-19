// import { useState } from "react";

// export default function OTP(){
//     // const[input1,setInput1]=useState<number>(0);
//     // const[input2,setInput2]=useState<number>(0);
//     // const[input3,setInput3]=useState<number>(0);
//     // const[input4,setInput4]=useState<number>(0);
//     const[input,setInput]=useState<string>("")
//     function HandleChange(e: any){
//         switch(e.target.id){
//             case "input1":{
//                 if(e.target.value<=9){
//                     setInput((prev)=>prev+e.target.value)
//                     document.getElementById("input2")?.focus()
//                 }
//                 break;
//             }
//             case "input2":{
//                 if(e.target.value<=9){
//                     setInput((prev)=>prev+e.target.value)
//                     document.getElementById("input3")?.focus()
//                 }
//                 break;
//             }
//             case "input3":{
//                 if(e.target.value<=9){
//                     setInput((prev)=>prev+e.target.value)
//                     document.getElementById("input4")?.focus()
//                 }
//                 break;
//             }
//            default:{
//                 if(e.target.value<=9){
//                     setInput((prev)=>prev+e.target.value)
//                    // document.getElementById("input5")?.focus()
//                 }
//                 break;
//             }
//         }
//         if(e.target.id=="input1"){
            
//         }
       
//       console.log(e.target.value)
//     }
//     console.log(Number(input))
// return(
//     <div className="bg-black h-screen w-screen flex flex-col justify-center items-center">
//          <p className="text-white p-5">Enter OTP</p>
//         <div className="p-5 bg-gray-200 flex justify-center items-center rounded-lg gap-3">     
//            <input id="input1" type="number" className="rounded-xl h-10 w-10 text-center" placeholder="9" onChange={HandleChange}/>
//            <input id="input2" type="number" className="rounded-xl h-10 w-10 text-center" placeholder="9" onChange={HandleChange}/>
//            <input id="input3" type="number" className="rounded-xl h-10 w-10 text-center" placeholder="9" onChange={HandleChange}/>
//            <input id="input4" type="number" className="rounded-xl h-10 w-10 text-center" placeholder="9" onChange={HandleChange}/>
//         </div>
//     </div>
// )
// }


import  { useState } from 'react';

function useOTP() {
  const [otp, setOTP] = useState(Array(4).fill(''));

  const handleChange = (index: number, value: string | number) => {
    if (!isNaN(Number(value)) && value !== '') {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      if (index < 3 && value !== '') {
        document.getElementById(`otp-input-${index + 1}`)?.focus();
      }
    }
  };

  const clearOTP = () => {
    setOTP(Array(4).fill(''));
    document.getElementById(`otp-input-0`)?.focus();
  };

  return { otp, handleChange, clearOTP };
}

function OTPBox() {
  const { otp, handleChange,clearOTP } = useOTP();

  return (
    <div className="flex justify-center items-center space-x-2 bg-black h-screen w-screen">
      {otp.map((digit, index) => (
        <input 
          key={index}
          id={`otp-input-${index}`}
          type="number"
          className="rounded-xl h-10 w-10 text-center bg-gray-200"
          placeholder="0"
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
        />
      ))}
      <button className='p-2 bg-blue-600 rounded-lg' onClick={()=>{clearOTP()}}>Clear OTP</button>
    </div>
  );
}

export default OTPBox;
