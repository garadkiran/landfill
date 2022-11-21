import React from "react";

const Radio = ({ className, checked, handleChange, name, value }) => (
  <div className={className}>
    <input
      type="radio"
      id={value}
      name={name}
      value={value}
      onChange={handleChange}
      checked={checked}
    />
    <label className={className} htmlFor={value}>
      {value}
    </label>
  </div>
);

export default Radio;
