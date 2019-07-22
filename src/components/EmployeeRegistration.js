import React, { useState } from "react";
import FormBuilder from "./form-builder/FormBuilder";
import { saveEmployee } from "../api/employeeApi";
function EmployeeRegistration(props) {
  const [components, setComponents] = useState([
    { fieldName: "name", type: "string", label: "Name", value: undefined },
    {
      fieldName: "gender",
      type: "picklist",
      label: "Gender",
      value: undefined,
      list: [
        { value: "", text: "Please Select" },
        { value: "f", text: "Female" },
        { value: "m", text: "Male" }
      ]
    },
    {
      fieldName: "dob",
      type: "date",
      label: "Date of Birth",
      value: undefined
    }
  ]);

  const isFormValid = () => true;

  const getValue = fieldName => {
    return components.find(c => c.fieldName === fieldName).value;
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (!isFormValid()) return;

    let employee = {
      name: getValue("name"),
      gender: getValue("gender"),
      dob: getValue("dob")
    };
    saveEmployee(employee);
    props.history.push("/");
  }

  function handleChange(event) {
    let _components = components.map(component =>
      component.fieldName === event.target.name
        ? { ...component, value: event.target.value }
        : component
    );
    setComponents(_components);
  }

  return (
    <>
      <h1>Employee Registration</h1>
      <FormBuilder
        components={components}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
    </>
  );
}

export default EmployeeRegistration;
