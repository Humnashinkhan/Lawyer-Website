import React from 'react';
import { Route, Routes, useLocation} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';
import LawyerDashboard from './components/LawyerDashboard/LawyerDashboard';
import Clientdash from './components/dashboardclient/Clientdash';
import Profile from './components/LawyerDashboard/Profile';
import ClientM from './components/LawyerDashboard/ClientM';
import Appointment from './components/LawyerDashboard/Appointment';
import Casemanage from './components/LawyerDashboard/Casemanage';
import Payment from './components/LawyerDashboard/Payment';
import Document from './components/LawyerDashboard/Document';
import Notification from './components/LawyerDashboard/Notification';
import Settings from './components/LawyerDashboard/Settings';
import Clientprofile from './components/dashboardclient/Clientprofile';
import AppointmentScheduling from './components/dashboardclient/AppointmentScheduling';
import CaseTracking from './components/dashboardclient/CaseTracking';
import ClientNotification from './components/dashboardclient/ClientNotification';
import PaymentC from './components/dashboardclient/PaymentC';
import SettingsC from './components/dashboardclient/SettingsC';
import Doc from './components/dashboardclient/Doc';
import DashboardC from './components/dashboardclient/DashboardC';
import Dashboard from './components/LawyerDashboard/Dashboard';
function App() {
  return (
      <div className="App">
      <ConditionalNavbar />
      <Routes>
       <Route path='/'exact element={<Home/>} />
       <Route path='/About' element={<About/>} />
       <Route path='/Service' element={<Service/>} />
       <Route path='/Contact' element={<Contact/>} />
       <Route path="/LawyerDashboard/*" element={<LawyerDashboard/>}>
       <Route index element={<Dashboard/>} />
       <Route path="Profile" element={<Profile/>} />
       <Route path="ClientM" element={<ClientM/>} />
       <Route path="Appointment" element={<Appointment/>} />
       <Route path="Casemanage" element={<Casemanage/>} />
       <Route path="Payment" element={<Payment/>} />
       <Route path="Document" element={<Document/>} />
       <Route path="Notification" element={<Notification/>} />
       <Route path="Settings" element={<Settings/>} />
     </Route>
        <Route path="/Clientdash/*" element={<Clientdash/>}>
        <Route index element={<DashboardC/>}/>
        <Route path="Clientprofile" element={<Clientprofile/>} />
        <Route path="AppointmentScheduling" element={<AppointmentScheduling/>} />
        <Route path="ClientNotification" element={<ClientNotification/>} />
        <Route path="PaymentC" element={<PaymentC/>} />
        <Route path="SettingsC" element={<SettingsC/>} />
        <Route path="Doc" element={<Doc/>} />
        <Route path="CaseTracking" element={<CaseTracking/>} />
 </Route>

         </Routes>
      
       </div>
  );
}
const ConditionalNavbar = () => {
  const location = useLocation();
  const noNavbarRoutes = ['/LawyerDashboard', '/Clientdash','/Profile'];

  return !noNavbarRoutes.some(route => location.pathname.startsWith(route))? <Navbar /> : null;
};


export default App;
