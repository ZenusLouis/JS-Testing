import React, { useState } from "react";
import { toast } from "react-toastify";
import "./styles/add.css";
import axios from "../api";

const Add = () => {
  const [employee, setEmployee] = useState({
    name: "",
    position: "",
    department: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/employees/add", employee); // Send POST request to add employee
      toast.success("Employee added successfully!");
      setEmployee({
        name: "",
        position: "",
        department: "",
      });
      window.location.href = "/";
    } catch (error) {
      toast.error("Failed to add employee. Please try again.");
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={employee.name}
        onChange={handleChange}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Position"
        name="position"
        value={employee.position}
        onChange={handleChange}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Department"
        name="department"
        value={employee.department}
        onChange={handleChange}
        className="form-input"
      />
      <button type="submit" className="form-button">
        Add Employee
      </button>
    </form>
  );
};

export default Add;
