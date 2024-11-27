/** @format */

import React, { Fragment, useState } from "react";
import style from "./Dropdown.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const DropDown = ({ dataOptions = [] }) => {
  const [showDropdown, setShowDropDown] = useState(false);
  const [itemSelected, setItemSelected] = useState("todo");

  const onClickHandler = (event) => {
    event.preventDefault();
    setShowDropDown((prevState) => !prevState);
  };

  const onClickItemSelectHandler = (event) => {
    event.preventDefault();
    let itemSelected = event.target.getAttribute("name");
    setShowDropDown((prevState) => !prevState);
    setItemSelected((prevState) => itemSelected);
  };
  return (
    <Fragment>
      <div className={`${style.container}`}>
        <div className={`${style.input_container}`}>
          <div
            className={`${style.overlay_click}`}
            onClick={onClickHandler}
          ></div>
          <span>{itemSelected}</span>
          {showDropdown ? (
            <ChevronUp size={18} strokeWidth={4} />
          ) : (
            <ChevronDown size={18} strokeWidth={4} />
          )}
        </div>
        <div className={`${style.dropdown_container}`}>
          {dataOptions.length > 0 &&
            showDropdown &&
            dataOptions.map((option, index) => {
              return (
                <p key={index} name={option} onClick={onClickItemSelectHandler}>
                  {option}
                </p>
              );
            })}
        </div>
      </div>
    </Fragment>
  );
};

export default DropDown;
