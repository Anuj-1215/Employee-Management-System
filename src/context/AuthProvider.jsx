import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    

const [userData, setUserData] = useState(null)

useEffect(() => {
    if(!localStorage.getItem('employees') || !localStorage.getItem('admin')) {
      setLocalStorage()
    }
    const {employees, admin} = getLocalStorage()
    setUserData({employees, admin})
}, [])


  return (
    <div>
      <AuthContext.Provider value={userData ? {
        ...userData,
        updateEmployees: (employees) => setUserData((currentData) => ({
          ...currentData,
          employees
        }))
      } : null}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
