import React, { useState } from 'react'

const Login = () => {
    const [login, setLogin] = useState(false);
  return (
    <>
    {
        (login) ? <h1>you are logged in</h1> : <button style={{backgroundColor : "blue"}} onClick={() => setLogin(true)}>Login</button>
    }
    </>
  )
}

export default Login