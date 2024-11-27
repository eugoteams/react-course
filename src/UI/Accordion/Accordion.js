/** @format */

import React, { Fragment, useState } from "react";
import style from "./Accordion.module.css";
import { ChevronDown, ChevronUp, Plus } from "lucide-react";

//controlled Component
const Accordion = ({ title, children, addIcon = false }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const onClickAccordionHeaderListener = (event) => {
    event.preventDefault();
    setAccordionOpen((prevState) => !prevState);
  };
  return (
    <Fragment>
      <div
        className={
          accordionOpen
            ? `${style.container_height} ${style.container}`
            : `${style.container} `
        }
      >
        <div
          className={`${style.accordion_header}`}
          onClick={onClickAccordionHeaderListener}
        >
          <p>{title}</p>
          {addIcon ? (
            <Plus size={18} strokeWidth={3} />
          ) : accordionOpen ? (
            <ChevronUp size={18} strokeWidth={3} />
          ) : (
            <ChevronDown size={18} strokeWidth={3} />
          )}
        </div>
        {accordionOpen && (
          <div className={`${style.accordion_body}`}>{children}</div>
        )}
      </div>
    </Fragment>
  );
};

export default Accordion;
