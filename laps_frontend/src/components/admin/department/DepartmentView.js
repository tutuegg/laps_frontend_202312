import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEye, FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const DepartmentView = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    loadDepartments();
  }, []);

  const loadDepartments = async () => {
    const result = await axios.get("http://localhost:8080/api/department/list");
    setDepartments(result.data);
  };

  return (
    <section>
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Name</th>
            <th>Included By Department ID</th>
            <th colSpan="1">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {departments.map((department) => (
            <tr key={department.department_id}>
              <th scope="row" key={department.department_id}>
                {department.department_id}
              </th>
              <td>{department.name}</td>
              <td>
                {department.includedBy ? department.includedBy.name : "NULL"}
              </td>
              <td className="mx-2">
                <Link
                  to={`/edit-department/${department.department_id}`}
                  className="btn btn-warning"
                >
                  <FaEdit />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default DepartmentView;
