import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import StaffDashboard from './components/StaffDashboard';
import AdminDashboard from './components/AdminDashboard';

import ApplicationDetails from './components/staff/ApplicationDetails';
import ManagerView from './components/staff/ManagerView';
import SubmitLeave from './components/staff/SubmitLeave';
import ListApplication from './components/staff/ListApplication';
import ViewHistory from './components/staff/ViewHistory';
import Manage from './components/staff/Manage';

import AddDepartment from './components/admin/department/AddDepartment';
import EditDepartment from './components/admin/department/EditDepartment';
import DepartmentView from './components/admin/department/DepartmentView';
import AddEmployee from './components/admin/employee/AddEmployee';
import EditEmployee from './components/admin/employee/EditEmployee';
import EmployeeView from './components/admin/employee/EmployeeView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/staff" element={<StaffDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
     
        <Route path="/list-application" element={<ListApplication/>}
    />;
        <Route path="/application-details" element={<ApplicationDetails/>}/>
        <Route path="/view-history" element={<ManagerView/>}/>
        <Route path="/submit-leave" element={<SubmitLeave/>}/>
        <Route path="/view-personal-history" element={<ViewHistory/>}/>
        <Route path="/manage" element={<Manage/>}/>


        <Route path="/add-department" element={<AddDepartment/>}/>;
        <Route path="/department-view" element={<DepartmentView/>}/>
        <Route path="/edit-department" element={<EditDepartment/>}/>
        <Route path="/add-employee" element={<AddEmployee/>}/>
        <Route path="/employee-view" element={<EmployeeView/>}/>
        <Route path="/edit-employee" element={<EditEmployee/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
