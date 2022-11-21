import React from "react";

const ToggleButton = ({ className, label, toggleState, toggleSwitch }) => (
  <div className={className}>
    <button type="button" onClick={toggleSwitch}></button>
    <label>{label}</label>
  </div>
);

export default ToggleButton;
