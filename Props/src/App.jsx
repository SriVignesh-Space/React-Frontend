import React from 'react'
import Students from './Students';

const data = [
  {
    name : "Vicky",
    english : 90,
    maths: 100,
    science : 100
  },
  {
    name : "Hari",
    english : 90,
    maths: 90,
    science : 90
  },
  {
    name : "Dina",
    english : 100,
    maths: 100,
    science : 100
  },
]

const App = () => {

  const calculateGrade = (data) => {
    const avg = (data.english + data.maths + data.science)/3;
    if(avg == 100) return 'A';
    else if(avg > 80) return 'B';
    else return 'C';
  }

  return (
    <>
    <Students data={data} func={calculateGrade} />
    <Students  func={calculateGrade} />
    </>
  )
}

export default App