import React, {useState} from 'react'

const counter = () => {
    const [increase , setIncrease] = useState(0);
 const handleIncrease = () =>{
    setIncrease(increase+1)
 }

  return (
    <div>
      <h1>{increase}</h1>
      <button onClick={handleIncrease}> Increase </button>
    </div>
  )
}



export default counter
