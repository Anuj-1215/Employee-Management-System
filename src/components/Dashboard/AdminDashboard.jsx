import React from 'react'
import Header from '../../others/Header'
import CreateTask from '../../others/CreateTask'
import AllTask from '../../others/AllTask'

const AdminDashboard = ({data}) => {
  return (
    <div className='h-screen w-full p-7'>
      <Header data={data} />
      <CreateTask data={data} />
      <AllTask data={data} />
    </div>
  )
}

export default AdminDashboard
