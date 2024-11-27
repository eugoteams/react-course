/** @format */

import React, { Fragment, useEffect, useState } from "react";
import style from "./Modal.module.css";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import CustomButton from "../CustomButton/CustomButton";

//Uncontrolled Component
const Modal = ({
  children,
  modalHeader,
  onClose,
  posFooterButton = "left",
}) => {
  // React 18
  const [clientLoaded, setClientLoaded] = useState(false);

  useEffect(() => {
    setClientLoaded((prevState) => true);
  }, []);

  return clientLoaded
    ? createPortal(
        <Fragment>
          <div className={`${style.container}`}>
            <div className={`${style.overlay}`}></div>
            <div className={`${style.content_box}`}>
              <div className={`${style.content_header}`}>
                <p>{modalHeader}</p>
                <X size={18} color="black" onClick={onClose} />
              </div>
              <div className={`${style.content_body}`}>{children}</div>
              <div
                className={
                  posFooterButton === "right"
                    ? `${style.content_footer_pos_right}`
                    : `${style.content_footer}`
                }
              >
                <div className={`${style.button_container}`}>
                  <CustomButton label={"submit"} />
                  <CustomButton
                    label={"cancel"}
                    onClick={onClose}
                    variant="alt"
                  />
                </div>
              </div>
            </div>
          </div>
        </Fragment>,
        document.getElementById("modal")
      )
    : null;
};

export default Modal;
