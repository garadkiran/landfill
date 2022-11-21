import React from "react";

const Input = ({
  className,
  containerStyle,
  errors,
  inputStyle,
  name,
  onChange,
  placeholder,
  type,
  value
}) => (
  <div className={className} style={containerStyle}>
    <input
      type={type || "text"}
      name={name || ""}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      style={inputStyle}
    />
    {errors && <p>{errors}</p>}
  </div>
);

export default Input;
