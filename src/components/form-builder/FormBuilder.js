import React from "react";
import { getComponent } from "./utitlity/componentFactory";
import DynamicForm from "./helper/DynamicForm";
function FormBuilder(props) {
  function createForm(_components, _onChange) {
    return _components.map(component => getComponent(component, _onChange));
  }

  return (
    <>
      <DynamicForm
        onSubmit={props.onSubmit}
        generateForm={createForm}
        components={props.components}
        onChange={props.onChange}
      />
    </>
  );
}

export default FormBuilder;
