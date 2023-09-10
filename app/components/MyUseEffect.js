'use client'

import React, { useEffect, useState } from "react";
import axios from "axios";

function MyUseEffect() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API WAS CALLED");
      });
  }, []);

  return (
    <div>
        <div className='bg-gray-50 p-2'>
        <p>useEffect </p>
         <li>used to synchronize a component with an external system.</li>  
      </div>
      <h1 className="bg-yellow-50 p-2 m-4 max-w-fit">{data}</h1>
      <h1 className="bg-yellow-50 p-2 m-4 max-w-fit">{count}</h1>
      <button className="btn-s m-1"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default MyUseEffect;
