import React, { useRef, useState } from 'react'

const Play = () => {
    const [count, setCount] = useState(0);
    const tagRef = useRef(null);

    const handleClick = ()=>{
        setCount((p)=> p+1);
        if(count%2 == 0){
            tagRef.current.style.backgroundColor = 'blue';
        }
        else{
            tagRef.current.style.backgroundColor = 'red';
        }
    }

  return (
    <>
    <div ref={tagRef} style={{height : "5rem", width : "5rem", backgroundColor : "red"}}>
    </div>
    <h2>count : {count}</h2>
    <button onClick={handleClick} style={{backgroundColor : "blue", margin:"0 0 0 10px"}}>increase</button>
    </>
  )
}

export default Play