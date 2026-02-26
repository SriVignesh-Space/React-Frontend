import React, { useState } from 'react'

const MousePosition = () => {

    const [pos,setPos] = useState({});

    const calcPos = (e) => {
        // console.log(e)
        setPos({X: e.pageX, Y:e.pageY})
    }

  return (
    <>
    <div onMouseMove={calcPos} style={{backgroundColor : "grey", height: "40rem", width : "40rem"}}>
        <h1>Mouse Position : (move in this grey box to show position)</h1>
        <h3>X : {pos.X}, Y : {pos.Y}</h3>
    </div>
    <br />
    <br />
    </>
  )
}

export default MousePosition