import React from "react";
import PropTypes from "prop-types";
function EmployeeList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map(employee => {
          return (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.gender}</td>
              <td>{employee.dob}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      dob: PropTypes.string.isRequired
    })
  ).isRequired
};

export default EmployeeList;
