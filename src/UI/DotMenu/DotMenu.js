/** @format */

import React, { Fragment, useState } from "react";
import style from "./DotMenu.module.css";
import { EllipsisIcon } from "lucide-react";
// Icon from Material UI Design ..
import { DragIndicator } from "@mui/icons-material";

//controlled Components
const DotMenu = ({ data = ["edit", "delete"] }) => {
  const [dropDown, setDropDown] = useState(false);

  const onClickIconHandler = (event) => {
    event.preventDefault();
    setDropDown((prevState) => !prevState);
  };

  const onItemClickHandler = (event) => {
    event.preventDefault();
    onClickIconHandler(event);
    let actionType = event.target.getAttribute("name");
    console.log(actionType);
  };
  return (
    <Fragment>
      <div className={`${style.container}`}>
        <div className={`${style.icon}`}>
          <EllipsisIcon strokeWidth={3} onClick={onClickIconHandler} />
          {dropDown && (
            <div className={`${style.dropDown}`}>
              {data.map((action, index) => {
                return (
                  <p
                    key={index}
                    className={`${style.action_item}`}
                    onClick={onItemClickHandler}
                    name={action}
                  >
                    {action}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default DotMenu;
