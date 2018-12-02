import React from "react";

export function InputFormField({ name, value, updateValue }) {
  console.log("InputFormField renders: ", name, value);

  return (
    <input
      type="text"
      name={name}
      value={value || ""}
      onChange={e => updateValue(name, e.target.value)}
    />
  );
}
