import React from "react";

const Button = ({ className = "", children, onClick }) => (
  <button
    onClick={onClick}
    className={["btn btn-primary float-right", className].join(" ")}
  >
    {children}
  </button>
);

export default Button;
