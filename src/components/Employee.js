import React, { useState, useEffect } from "react";
import EmployeeList from "./EmployeeList";
import { loadEmployees } from "../api/employeeApi";
function Employee() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    loadEmployees(formatter);
  }, []);
  function formatter(tx, { rows }) {
    setEmployees(Array.prototype.slice.call(rows));
  }
  return (
    <>
      <h1>Employees</h1>
      <EmployeeList employees={employees} />
    </>
  );
}

export default Employee;
