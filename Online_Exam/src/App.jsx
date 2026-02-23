import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const [app, setApp] = useState(0);
  const interRef = useRef(null);

  useEffect(()=>{
    interRef.current = setInterval(()=>{
      setApp((prev) => {
        if(prev == 10){
          alert("Time out buddy" + prev);
          clearInterval(interRef.current);
          return 10;
        }
        return prev+1
    });
    }, 1000);
    console.log(interRef.current);
    return ()=> clearInterval(interRef.current);
  },[])

  return (
    <div>{app}</div>
  )
}

export default App
