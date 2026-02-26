import React, { useState } from 'react'

const Form = () => {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Default behaviour prevented");
        console.log(text)
        setText("");
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={text} />
        <button type="submit" style={{backgroundColor :"blue"}}>Click to submit</button>
    </form>
    </>
  )
}

export default Form