import React from "react";
import TextInput from "../helper/TextInput";
import SelectList from "../helper/SelectList";
import DateInput from "../helper/DateInput";
const componentFactory = {
  string: (props, onChange) => {
    return (
      <TextInput
        key={props.fieldName}
        id={props.fieldName}
        name={props.fieldName}
        label={props.label}
        onChange={onChange}
        value={props.value}
      />
    );
  },
  picklist: (props, onChange) => {
    return (
      <SelectList
        key={props.fieldName}
        id={props.fieldName}
        name={props.fieldName}
        label={props.label}
        list={props.list}
        onChange={onChange}
        value={props.value}
      />
    );
  },
  date: (props, onChange) => {
    return (
      <DateInput
        key={props.fieldName}
        id={props.fieldName}
        name={props.fieldName}
        label={props.label}
        onChange={onChange}
        value={props.value}
      />
    );
  }
};
export function getComponent(props, onChange) {
  return componentFactory[props.type](props, onChange);
}
