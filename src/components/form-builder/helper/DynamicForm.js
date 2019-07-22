import React from "react";
function DynamicForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      {props.generateForm(props.components, props.onChange)}
      <input type="submit" value="save" className="btn btn-primary" />
    </form>
  );
}

export default DynamicForm;
