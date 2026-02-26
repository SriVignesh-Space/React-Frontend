import React, { useState } from 'react'

const Password = () => {
    const [_,setPassword] = useState("");
    const [typee,setType] = useState("password");

    const handleChange = (e) =>{
        setPassword(e.target.value);
    }

    const handleClick = () => {
        if(typee == "password") setType("text");
        else setType("password");
    }

  return (
    <div>
        <input type={typee} onChange={handleChange} />
        <button onClick={handleClick} style={{backgroundColor : "blue", margin:"0 0 0 10px"}}>show</button>
    </div>
  )
}

export default Password