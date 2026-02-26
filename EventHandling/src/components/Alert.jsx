import React from 'react'

const Alert = () => {
    const handleClick= () =>{
        alert("Hello buddy");
    }
  return (
    <>
    <button onClick={handleClick} style={{backgroundColor :"blue"}}>Click me to Alert</button>
    <br />
    <br />
    </>
  )
}

export default Alert