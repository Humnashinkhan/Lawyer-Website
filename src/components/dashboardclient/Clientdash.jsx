import React from 'react'
import './Clientdash.css'
import Clientsidebar from './Clientsidebar'
import { Outlet } from 'react-router-dom'
import TopbarClient from './TopbarClient'
const Clientdash = () => {
  return (
    <div>
      <TopbarClient/>
      <div className="dashboard-container">
        <Clientsidebar />
        <div className="dashboard-content">
          <Outlet/>


        </div>
      </div>
    </div>
  )
}

export default Clientdash