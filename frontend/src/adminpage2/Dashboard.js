import { useState } from 'react';
import './admin.css';
import Header from './header';
import Sidebar from './sidebar';

function Dashboard() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    };
  
    return (
  <div >
  <div class="first-row" >
    <Header OpenSidebar={OpenSidebar}/>
  </div>
  
  <div class="second-row">
    <div class="first-column">
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />  
    </div>
  
    <div class="second-column" style={{padding:"40px"}}>
        <h1>Dashboard</h1>
     <div style={{marginTop:"20px"}}>
        <img src='/images/dashboard/1dashboard.png' />
        <img src='/images/dashboard/2dashboard.png' style={{marginLeft:"40px"}}/>
        <img src='/images/dashboard/3dashboard.png' style={{marginLeft:"60px"}}/>
        <img src='/images/dashboard/7.png' height={180} width={180} style={{marginLeft:"70px" }}/>
     </div>
      <div style={{marginTop:"70px"}}>
      <img src='/images/dashboard/4dashboard.png'  />
      <img src='/images/dashboard/5dashboard.png' style={{marginLeft:"40px"}}   />
      <img src='/images/dashboard/8.png' style={{marginLeft:"110px"}} height={180} width={180}   />
      </div>
      </div>
      
    </div>
  </div>
    );
  }
  
  export default Dashboard;
  