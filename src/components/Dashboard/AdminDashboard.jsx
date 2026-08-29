import React from 'react'
import Header from '../../others/Header'
import CreateTask from '../../others/CreateTask'
import AllTask from '../../others/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-7'>
      <Header data={props.data} changeUser={props.changeUser} />
      <CreateTask data={props.data} />
      <AllTask data={props.data} />
    </div>
  )
}

export default AdminDashboard
