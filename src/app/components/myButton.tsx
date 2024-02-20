"use client"

import { useState } from "react"

function MyButton() {

  const [count, setCount] = useState<number>(0);

  function handleClick() {

    setCount(count+1);
    count === 10 && setCount(0);
    
  }

  return (

    <div>
    <button className="bg-blue-500 p-1" onClick={handleClick}>Click me</button>
    <p>{count}</p>
    </div>
    
  )
}

export default MyButton