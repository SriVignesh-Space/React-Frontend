import React from 'react'

const Students = ({datafunc = () => "default"}) => {

    const data = datafunc();

  return (
    <>
    <div>{JSON.stringify(datafunc())}</div>
    <h1>Iterative</h1>
    <div>{   
        Object.keys(data).map((k, i) => 
            <div key={i}>
            <h3>{k}</h3>
            <p>{JSON.stringify(data[k])}</p>
            </div>
        )
    }
    </div>
    </>
  );
}

export default Students