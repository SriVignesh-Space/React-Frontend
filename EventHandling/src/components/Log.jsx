import React from 'react'

const Log = () => {

    const handleClick = () => {
        console.log("Do you have any secret ? ");
    }

  return (
    <>
    <button onClick={handleClick} style={{backgroundColor :"blue"}}>Click me to print secret in console</button>
    <br />
    <br />
    </>
  )
}

export default Log