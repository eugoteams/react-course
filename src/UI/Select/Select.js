/** @format */

import React, { Fragment, useEffect, useState } from "react";
import style from "./Select.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";
import { updateSelect } from "../../Slice/SelectSlice";
import { useDispatch } from "react-redux";

const Select = ({ data = [] }) => {
  const dispatch = useDispatch();
  const [selectState, setSelectState] = useState({
    selectedValue: "",
    inputClicked: false,
  });

  const onClickInputListener = (event) => {
    event.preventDefault();
    setSelectState((prevState) => ({
      ...prevState,
      inputClicked: !prevState.inputClicked,
    }));
  };

  const onDropDownItemSelect = (event) => {
    let selectedValue = event.target.getAttribute("name");
    setSelectState((prevState) => ({
      selectedValue: selectedValue,
      inputClicked: !prevState.inputClicked,
    }));
  };

  useEffect(() => {
    dispatch(updateSelect(selectState.selectedValue));
  }, [selectState]);
  return (
    <Fragment>
      <div className={`${style.container}`}>
        <div className={`${style.input_container}`}>
          <div
            className={`${style.overlay_click_handler}`}
            onClick={onClickInputListener}
          ></div>
          <input
            type="text"
            placeholder="Select an item"
            value={selectState.selectedValue}
            onChange={() => {}}
            onClick={onClickInputListener}
          />
          {selectState.inputClicked ? (
            <ChevronUp
              size={18}
              color="#343a40"
              strokeWidth={3}
              onClick={onClickInputListener}
            />
          ) : (
            <ChevronDown
              size={18}
              color="#343a40"
              strokeWidth={3}
              onClick={onClickInputListener}
            />
          )}
        </div>
        {selectState.inputClicked && (
          <div className={`${style.dropdown_container}`}>
            {data.length > 0 &&
              data.map((data, index) => {
                return (
                  <p
                    onClick={onDropDownItemSelect}
                    name={data}
                    key={`${index}`}
                  >
                    {data}
                  </p>
                );
              })}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Select;
