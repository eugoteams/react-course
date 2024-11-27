/** @format */

import React from "react";
import style from "./CustomButton.module.css";

const CustomButton = ({
  label,
  buttonType = "submit",
  onClick,
  variant = "primary",
}) => {
  return (
    <button
      type={buttonType}
      onClick={onClick}
      className={
        variant === "primary"
          ? `${style.button_container}`
          : `${style.button_container_alt}`
      }
    >
      {label}
    </button>
  );
};

export default CustomButton;
