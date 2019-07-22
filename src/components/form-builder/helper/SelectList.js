import React from "react";

function SelectList(props) {
  let wrapperClass = "form-control";
  return (
    <div className="form-group">
      <label htmlFor="author">{props.label}</label>
      <div className="form-field">
        <select
          id={props.id}
          type="text"
          name={props.name}
          className={wrapperClass}
          onChange={props.onChange}
          value={props.value || ""}
        >
          {props.list.map(o => (
            <option key={o.value} value={o.value}>
              {o.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectList;
