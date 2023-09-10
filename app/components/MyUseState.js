'use client'


import React, { useState } from 'react'

const MyUseState = () => {


  const [count,setCounter]=useState(0);

  function increase (){
    setCounter(count+1);
  }

  function decrease(){
    setCounter(count-1);
  }


  const [name, setName]=useState("");

  let newname;

  function writeName(event){
   newname=event.target.value;
  }

  function saydone(){
    setName(newname);
  }

  return (
    <div>
      <div className='bg-gray-50 p-2'>
        <p>useState</p>
        <p>accepts an initial state and returns two values:</p>
         <li>The current state.</li>
         <li>A function that updates the state.</li>
      </div>

      <p1 className='text-black bg-yellow-100 p-4 m-4'>{count}</p1>
      <button onClick={increase} className="p-4 m-4 bg-pink-300">+</button>
      <button onClick={decrease} className="p-4 m-4 bg-pink-300">-</button>
      <div className='h-1  bg-red-500' />
      
      <div className='m-4'>
      <input placeholder='type your name here' onChange={writeName}/>
      <button type='submit' className='btn-s m-2' onClick={saydone}>done</button>
      <p>{name}</p>
      </div>
     
    </div>
  )
}

export default MyUseState;
