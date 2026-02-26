import React, { useEffect, useState } from 'react'

const LoadingData = () => {
    const [data, setData] = useState("");
    const [Loading, setLoading] = useState(true);

    useEffect(()=>{
        const id = setTimeout(()=>{
            setData("Hello data received");
            setLoading(false);
        }, 1000*5);

        return () => clearTimeout(id);
    })

  return (
    Loading ? 
        <h2>Loading data.....</h2>
        : <h2>{data}</h2>
  )
}

export default LoadingData