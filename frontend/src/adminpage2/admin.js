import { useState } from 'react';
import './admin.css';
import Header from './header';
import Sidebar from './sidebar';
import Dashboard from './Dashboard';

function Admin() {
   
  
    return (
  <div >
  <div class="first-row" >
    <Header />
  </div>
  
  <div class="second-row">
    <div class="first-column">
      <Sidebar />  
    </div>
  
    <div class="second-column">
     
      
      </div>
      
    </div>
  </div>
    );
  }
  
  export default Admin;
  