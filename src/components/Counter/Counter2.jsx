import React, {useState} from 'react'
const counter = () => {
    const [decrease , setDecrease] = useState(100);
    const handleDecrease = () =>{
    setDecrease(decrease-1)
}
return(
    <div>
        <h1>{decrease}</h1>
        <button onClick={handleDecrease}> Decrease </button>
    </div>
)
}
export default counter