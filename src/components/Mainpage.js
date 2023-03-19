import React from 'react'
import AdminPage from '../pages/AdminPage'
import UserPage from '../pages/UserPage'

const Mainpage = ({user}) => {
  
  return (
    <div>
      {
        user ? <AdminPage /> : <UserPage />
      }
    </div>
  )
}

export default Mainpage