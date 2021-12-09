import "../styles/Button.css";
import React from "react";

const Button = ({ type, text, onClick }) => {
  return (
    <button onClick={onClick} className={`btn btn-${type}`}>
      {text || "No text prop"}
    </button>
  );
};

export default Button;
