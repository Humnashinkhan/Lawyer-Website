import React from 'react'
import './LawyerDashboard.css'
import Sidebar from './Sidebar'
import Ltopbar from './Ltopbar'
import { Outlet } from 'react-router-dom'
const LawyerDashboard = () => {
  return (
    <div>
      <Ltopbar />

       <div className="dashboard-container">
       <Sidebar />

        <div className="dashboard-content">
        <Outlet />


        </div>
      </div>
    </div>
  )
}

export default LawyerDashboard