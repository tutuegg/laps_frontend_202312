import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddEmployee = () => {
  let navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    password: "",
    email: "",
    userType: "EMPLOYEE",
    employeeType: "ADMINISTRATIVE",
  });
  const { name, password, email, userType, employeeType } = employee;

  const handleInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const saveEmployee = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8080/api/employee/create", employee)
      .then((response) => {
        navigate("/view-employees");
      });
  };

  return (
    <div className="col-sm-8 py-2 px-5">
      <form onSubmit={(e) => saveEmployee(e)}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="name">
            Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="password">
            Password
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="password"
            id="password"
            required
            value={password}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="email">
            Email
          </label>
          <input
            className="form-control col-sm-6"
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="userType">
            User Type
          </label>
          <select
            className="form-select col-sm-6"
            id="userType"
            name="userType"
            required
            value={userType} // 设置默认值
            onChange={(e) => handleInputChange(e)}
          >
            <option value="EMPLOYEE">EMPLOYEE</option>
            <option value="MANAGER">MANAGER</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="employeeType">
            Employee Type
          </label>
          <select
            className="form-select col-sm-6"
            id="employeeType"
            name="employeeType"
            required
            value={employeeType} // 设置默认值
            onChange={(e) => handleInputChange(e)}
          >
            <option value="ADMINISTRATIVE">ADMINISTRATIVE</option>
            <option value="PROFESSIONAL">PROFESSIONAL</option>
          </select>
        </div>

        <div className="row mb-5">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-outline-success btn-lg">
              Submit
            </button>
          </div>

          <div className="col-sm-2">
            <Link
              to={"/view-employees"}
              type="submit"
              className="btn btn-outline-warning btn-lg"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
