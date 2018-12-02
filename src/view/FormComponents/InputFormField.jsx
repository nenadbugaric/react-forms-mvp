import React from "react";

export function InputFormField({
  name,
  value,
  updateValue,
  label = "",
  type = "text"
}) {
  console.log("InputFormField renders: ", name, value);

  return (
    <label>
      {label}
      <input
        type={type}
        name={name}
        value={value || ""}
        onChange={e => updateValue(name, e.target.value)}
      />
    </label>
  );
}
