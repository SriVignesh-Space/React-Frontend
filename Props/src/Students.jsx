import React from 'react'

const Students = ({data = [], func}) => {
  return (
    <>
    <h1>Hello from Students</h1>    
    {
       data.map((d,i) => {
        return (<div key={i}>
            <hr />
            <h2>{d.name}</h2>
            <h4>Marks : </h4>
            <ul>
                <li>{d.english}</li>
                <li>{d.maths}</li>
                <li>{d.science}</li>
            </ul>
            <h3>Grade : {func(d)}</h3>
            <hr />
        </div>);
       }) 
    }
    </>
  )
}

export default Students