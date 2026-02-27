import { UserContext } from '@/context/LoginContext';
import React, { useCallback, useContext, useState } from 'react'

const Login = () => {

    const [type,setType] = useState("password");
    const [username, setUsername ] = useState("");
    const [password, setPassword] = useState("");
    
    const user = useContext(UserContext);

    const handleType = () =>{
        setType((prev) => (prev === "password") ? "text" : "password");
    }

    const handleLogin = useCallback((e : React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        user?.dispatch({type : "LOGIN", user : {username , password, isAuth : true}});
    },[username, password, user])

  return (
    <div>
        <label htmlFor="username" >Username : </label>
        <input type="text" id='username' onChange={(e) => setUsername(e.target.value)}/>
        <br />
        <label htmlFor="password">Password : </label>
        <input type={type} id='password' onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleType}>show</button>
        <br />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login