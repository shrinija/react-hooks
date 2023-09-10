'use client'
import { useState } from "react"

const MyEventHandling = () => {

  const [isMousedOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="m-10 flex flex-col items-center  justify-center">
      <h1>{}</h1>
      <input placeholder="What's your name? type here" type="text" className=" border rounded"></input>
      <button className=" p-4 {{isMouseOver ? btn-s : btn-p}}"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      >
        submit
      </button>
      
    </div>
  )
}

export default MyEventHandling;
