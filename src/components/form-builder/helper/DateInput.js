import React from "react";

function DateInput(props) {
  let wrapperClass = "form-control";

  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <div className="form-field">
        <input
          id={props.id}
          type="date"
          name={props.name}
          className={wrapperClass}
          onChange={props.onChange}
          value={props.value}
        />
      </div>
    </div>
  );
}
export default DateInput;
