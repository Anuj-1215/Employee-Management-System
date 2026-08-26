import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  
  
  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
  
  console.log(authData)
  useEffect(() => {
    if(authData){
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
  }, [authData])

const loginHandler = (email, password) =>{
  if(authData && authData.admin.find((e) => email == e.email && password == e.password)){
    setUser('admin')
    localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
  }
  else if(authData && authData.employees.find((e) => email == e.email && password == e.password)){
    setUser('employee')
    localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee'}))
  }
  else{
    alert("Invalid credentials")
  }
}
  
  return (
    <>
      {!user ? <Login loginHandler = {loginHandler} /> : user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
      
    </>
  )
}

export default App
