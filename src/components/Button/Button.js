import React from "react";

const Button = ({ btnStyle, className, children, style, ...rest }) => (
  <div style={style} className={className}>
    <button style={btnStyle} {...rest}>
      {children}
    </button>
  </div>
);

export default Button;
