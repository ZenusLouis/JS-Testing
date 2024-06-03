import React, { useEffect, useState } from "react";
import axios from "../api";
import { Link } from "react-router-dom";
import "./styles/index.css";

const Index = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("/employees");
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
              <td>
                <button>
                  <Link
                    to={`/edit/${employee._id}`}
                    style={{ color: "#000", textDecoration: "none" }}
                  >
                    Edit
                  </Link>
                </button>
                {" | "}
                <button>
                  <Link
                    to={`/delete/${employee._id}`}
                    style={{ color: "#000", textDecoration: "none" }}
                  >
                    Delete
                  </Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
