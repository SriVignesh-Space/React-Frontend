import React, { useContext } from 'react'
import { UserContext } from '@/context/LoginContext'
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {

  const user = useContext(UserContext);

  return (
    user?.state.isAuth ?  <Dashboard/> : <Login /> 
  )
}

export default App