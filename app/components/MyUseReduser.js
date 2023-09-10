'use client'

import { useState } from "react";

const MyUseReduser = () => {

  const [count,setCount]=useState(0);
  const [showText, setShowText]=useState(false);

  return (
    <div>
      <h1 className="bg-yellow-100 p-2 w-10 m-4">{count}</h1>
      <button className="btn-s m-2"
      onClick={()=>{
        setCount(count+1);
        setShowText(!showText);
      }}
      >Click here</button>
      <p className="h-4">{showText && <p>so you just clicked on button {count} times</p>}</p>
      
    </div>
  )
}

export default MyUseReduser;
