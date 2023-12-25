import React from 'react';
import { Link } from 'react-router-dom';



function AdminDashboard() {
    function getNavigationHTML(){
        return (
          <nav className="py-2 bg-light border-bottom">
          <div className="container d-flex flex-wrap">
            <ul className="nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/add-department"}>Add Department</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/edit-department"}>Edit Department</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/department-view"}>View departments</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/add-employee"}>Add Employee</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/edit-employee"}>Edit Employee</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/employee-view"}>View Employees</Link>
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

export default AdminDashboard;
