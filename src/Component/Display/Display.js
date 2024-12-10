/** @format */

import React, { Fragment } from "react";
import style from "./Display.module.css";
import { useSelector } from "react-redux";

const Display = (props) => {
  const stateValue = useSelector((state) => state.select.itemSelected);
  console.log(stateValue);
  return (
    <Fragment>
      <div className={`${style.container}`}>
        <h1>Selected Item :</h1>
        <p>{stateValue}</p>
      </div>
    </Fragment>
  );
};

export default Display;
