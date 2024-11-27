/** @format */

import React, { Fragment } from "react";
import style from "./Card.module.css";
import { Star, Ellipsis } from "lucide-react";
import DropDown from "../Dropdown/Dropdown";

const Card = (props) => {
  return (
    <Fragment>
      <div className={`${style.container}`}>
        <div className={`${style.card_header}`}>
          <p>make presentation</p>
          <Star />
        </div>
        <div className={`${style.card_sub_text}`}>
          <span>due date: 2024-03-27</span>
          <Ellipsis />
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
          <DropDown dataOptions={["todo", "inprogress", "done"]} />
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
