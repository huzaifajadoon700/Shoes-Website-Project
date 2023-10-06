import { useState } from 'react';
import './admin.css';
import Header from './header';
import Sidebar from './sidebar';
import Dashboard from './Dashboard';

function Admin() {
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
  
    <div class="second-column">
     
      
      </div>
      
    </div>
  </div>
    );
  }
  
  export default Admin;
  