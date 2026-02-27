import { UserContext } from '@/context/LoginContext'
import React, { useContext } from 'react'

const Dashboard = () => {

    const user = useContext(UserContext);

    const handleLogout = () => {
        alert("You are logging out");
        user?.dispatch({type: "LOGOUT"});
    }

  return (
    <div>
        <h1>Dashboard</h1>
        <h2>Welcome, {user?.state.username}</h2>
        <button onClick={handleLogout} style={{backgroundColor : "red"}}>Logout</button>
    </div>
  )
}

export default Dashboard