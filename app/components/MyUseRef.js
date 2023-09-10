'use client'

import { useRef,useState } from "react";

function MyUseRef() {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.focus();
    setFood(inputRef.current.value);
    inputRef.current.value="";   // see the order matters
  };


  const [food,setFood]=useState("ice-cream");

  return (
    <div>
      <div className='bg-gray-50 p-2'>
        <p>useRef</p>
         <li> The useRef Hook allows you to persist values between renders.</li>  
         <li>It can be used to store a mutable value that does not cause a re-render when updated.</li>
         <li>It can be used to access a DOM element directly.</li>
      </div>
      <h1>Hi</h1>
      <h1>your favorite dish name is {food}</h1>
      <input type="text" placeholder="type here" ref={inputRef} />
      <button className="btn-s m-1" onClick={onClick}>Change Name</button>
    </div>
  );
}

export default MyUseRef;