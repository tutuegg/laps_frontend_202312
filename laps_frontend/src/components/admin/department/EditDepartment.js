import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditDepartment = () => {
  let navigate = useNavigate();

  const { department_id } = useParams();

  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/department/get-interior-employee-by-department-id/${department_id}`
    );
    setEmployees(result.data);
  };

  useEffect(() => {
    loadDepartments();
  }, []);

  const loadDepartments = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/department/get-interior-department-by-department-id/${department_id}`
    );
    setDepartments(result.data);
  };

  return (
    <section>
      <h2 className="text-center">Interior Employee List</h2>
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>User Type</th>
            <th>Employee Type</th>
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
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-center">Interior Department List</h2>
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {departments.map((department) => (
            <tr key={department.department_id}>
              <th scope="row" key={department.department_id}>
                {department.department_id}
              </th>
              <td>{department.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default EditDepartment;
