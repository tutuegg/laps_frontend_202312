import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddDepartment = () => {
  let navigate = useNavigate();

  const [department, setDepartment] = useState({
    name: "",
  });
  const { name } = department;

  const handleInputChange = (e) => {
    setDepartment({ ...department, [e.target.name]: e.target.value });
  };

  const saveDepartment = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8080/api/department/create", department)
      .then((Response) => {
        navigate("/view-departments");
      });
  };

  return (
    <div>
      <div className="col-sm-8 py-2 px-5">
        <form onSubmit={(e) => saveDepartment(e)}>
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
    </div>
  );
};

export default AddDepartment;
