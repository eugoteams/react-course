/** @format */

import React, { Fragment } from "react";
import style from "./Card.module.css";
import { Star } from "lucide-react";
import DropDown from "../Dropdown/Dropdown";
import DotMenu from "../DotMenu/DotMenu";

const Card = (props) => {
  return (
    <Fragment>
      <div className={`${style.container}`}>
        <div className={`${style.card_header}`}>
          <span>make presentation make presentation make presentation</span>
          <Star />
        </div>
        <div className={`${style.card_sub_text}`}>
          <span>due date: 2024-03-27</span>
          <DotMenu />
        </div>
        <div className={`${style.card_body}`}>
          <p>
            Do laboris ipsum cillum minim velit enim ipsum laborum et anim
            dolore consectetur cillum do. Ut amet reprehenderit sit adipisicing
            minim culpa enim ex qui. Deserunt veniam aute fugiat veniam elit
            tempor.
          </p>
        </div>
        <div className={`${style.card_footer}`}>
          <div className={`${style.dropdown_wrapper}`}>
            <DropDown dataOptions={["todo", "inprogress", "done"]} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
