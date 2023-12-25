import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEye, FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const EmployeeView = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:8080/api/employee/list");
    setEmployees(result.data);
  };

  const handleDelete = async (user_id) => {
    await axios.get(`http://localhost:8080/api/admin/delete/${user_id}`);
    loadEmployees();
  };

  return (
    <section>
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>User Type</th>
            <th>Employee Type</th>
            {/* <th>Department</th> */}
            <th>Over Working Hour</th>
            <th>Entitlement to Annual Leave</th>
            <th>Medical Leave</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {employees.map((employee) => (
            <tr key={employee.user_id}>
              <th scope="row" key={employee.user_id}>
                {employee.user_id}
              </th>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.userType}</td>
              <td>{employee.employeeType}</td>
              {/* <td>{employee.belongToDepartment.name}</td> */}
              <td>{employee.over_working_hour}</td>
              <td>{employee.entitlementToAnnualLeave ? "Yes" : "No"}</td>
              <td>{employee.medical_leave_day}</td>
              <td className="mx-2">
                <Link
                  to={`/employee-profile/${employee.user_id}`}
                  className="btn btn-info"
                >
                  <FaEye />
                </Link>
              </td>
              <td className="mx-2">
                <Link
                  to={`/edit-employee/${employee.user_id}`}
                  className="btn btn-warning"
                >
                  <FaEdit />
                </Link>
              </td>
              <td className="mx-2">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(employee.user_id)}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default EmployeeView;
