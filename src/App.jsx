import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  
  
  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const authData = useContext(AuthContext)
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInUserData(userData.data)
    }
  }, [])

const loginHandler = (email, password) =>{
  if(authData && authData.admin.find((e) => email == e.email && password == e.password)){
    const admin = authData.admin.find((e) => email == e.email && password == e.password)
    setUser('admin')
    setloggedInUserData(admin)
    localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin', data: admin}))
  }
  else if(authData && authData.employees.find((e) => email == e.email && password == e.password)){
    const employee = authData.employees.find((e) => email == e.email && password == e.password)
    setUser('employee')
    setloggedInUserData(employee)
    localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data: employee}))
  }
  else{
    alert("Invalid credentials")
  }
}
  
  return (
    <>
      {!user ? <Login loginHandler = {loginHandler} /> : user == 'admin' ? <AdminDashboard changeUser={setUser} data={loggedInUserData} /> : (user =='employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
      
    </>
  )
}

export default App
