/** @format */

import React, { Fragment } from "react";
import styles from "../InputField/Input.module.css"; //Input.css

//Form Creation with CustomInput  Fields..
// Forms and useState() hooks
const InputField = ({
  value,
  label,
  type = "number",
  placeholder,
  isError,
  errorMsg,
  isRequired = false,
  onChangeListener = () => {},
  onBlurChangeListner = () => {},
  onFocusChangeListner = () => {},
}) => {
  return (
    <Fragment>
      <div
        className={`${
          type === "checkbox" ? styles.checkbox_container : styles.container
        }`}
      >
        <label>
          {label}
          {isRequired && <span className={`${styles.required_icon}`}>*</span>}
        </label>
        <input
          type={type}
          name={label}
          placeholder={placeholder}
          onChange={onChangeListener}
          onBlur={onBlurChangeListner}
          onFocus={onFocusChangeListner}
          checked={type === "checkbox" ? value : ""}
          value={type !== "checkbox" ? value : ""}
        />
        {isError && (
          <span className={`${styles.error_message}`}>{errorMsg}</span>
        )}
      </div>
    </Fragment>
  );
};

export default InputField;
