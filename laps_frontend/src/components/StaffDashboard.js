
import React from 'react';
import { Link } from 'react-router-dom';

function StaffDashboard() {
    function getNavigationHTML(){
        return (
          <nav className="py-2 bg-light border-bottom">
          <div className="container d-flex flex-wrap">
            <ul className="nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/list-application"}>View Applications for Approval</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/view-history"}>Subordinate Leave History</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/submit-leave"}>Submit Leave Application</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/view-personal-history"}>View Personal History</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/manage"}>Manage Applications</Link>
              </li>
     
            </ul>
          </div>
        </nav>
        )
      }
      return (
    
        <div>
        {getNavigationHTML()}
    
        <h2>Leave Applications Management System</h2>
        <br></br>
        
        </div>
        
         
      );
}

export default StaffDashboard;
