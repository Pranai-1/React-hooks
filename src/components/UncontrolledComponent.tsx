// import React from 'react';

// class MyForm extends React.Component {
//   handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const inputValue = formData.get('inputName');
//     console.log('Input value:', inputValue);
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input type="text" name="inputName" defaultValue="Default Value" />
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }


import { useRef, useState } from 'react';

function MyForm() {
    const[name,setName]=useState<string>("")
  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log(event.target)
    const formData = new FormData(event.target);
    console.log(formData)
    const name = formData.get('inputName');
    const age = formData.get('age');
    console.log('Input value:', name+" "+age);
  };

  return (
    <>
    <form onSubmit={handleSubmit} className='m-[100px] bg-black p-10 '>
      <input type="text" name="inputName" defaultValue="Default Value" />
      <input type="number" name="age" defaultValue="age" className='m-2'/>
      <button type="submit" className=' bg-red-600 p-2 rounded-lg m-3'>Submit</button>
    </form>
    <input type="text" placeholder='controlled input' onChange={(e)=>setName(e.target.value)} className='p-2 mx-[200px] bg-gray-500 text-white '/>
    <MyForm2/>
    </>
  );
}

//using useRef
function MyForm2() {
  const input1Ref = useRef<HTMLInputElement>(null);
  const input2Ref = useRef<HTMLInputElement>(null);
console.log(input1Ref)//This is an object which contains a current field which itself is an object with value field
//so useRef creates a mutable reference object which holds the data even during re-renders
console.log(typeof input2Ref.current)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputValue1 = input1Ref?.current?.value;
    const inputValue2 = input2Ref?.current?.value;
    console.log('Input value 1:', inputValue1);
    console.log('Input value 2:', inputValue2);
  };

  return (
    <form onSubmit={handleSubmit}  className='m-10 bg-black p-2'>
      <div  className='m-2 bg-gray-400 p-2'>
        <label htmlFor="input1" className='p-2'>Input 1:</label>
        <input type="text" id="input1" name="input1" defaultValue="Default Value 1" ref={input1Ref} className='p-2'/>
      </div>
      <div className='m-2 bg-gray-400 p-2'>
        <label htmlFor="input2" className='p-2'>Input 2:</label>
        <input type="text" id="input2" name="input2" defaultValue="Default Value 2" ref={input2Ref} className='p-2'/>
      </div>
      <button type="submit" className='p-2 bg-blue-500'>Submit</button>
    </form>
  );
}

export default MyForm;

// Certainly! Let's discuss `event.preventDefault()` and `new FormData()` in the context of the provided example:

// 1. **`event.preventDefault()`:**

// - `event.preventDefault()` is a method used to prevent the default behavior of an event in JavaScript. 
// - In the context of form submission, calling `event.preventDefault()` prevents the form from being submitted in the 
//traditional manner, which typically involves reloading the page or navigating to a new URL.
// - By preventing the default behavior, we can handle the form submission entirely within the React component, allowing us
// to perform custom logic, such as data processing or validation, before submitting the form.

// 2. **`new FormData(event.target)`:**

// - `new FormData()` is a constructor function provided by the `FormData` API in JavaScript.
// - It creates a new `FormData` object that represents the data contained within an HTML form.
// - When provided with a reference to an HTML form element (in this case, `event.target`, which refers to the form that 
//triggered the submit event), `new FormData()` extracts the form data, including input values, and constructs a `FormData` 
//object that can be easily manipulated and sent with an XMLHttpRequest (Ajax) request.
// - In the example, `new FormData(event.target)` creates a `FormData` object containing the values of all form fields within 
//the submitted form.

// In summary, `event.preventDefault()` is used to prevent the default form submission behavior, allowing us to handle the 
//form submission manually in React, while `new FormData(event.target)` is used to extract and construct form data from an 
//HTML form element, enabling further processing or submission of the form data.

