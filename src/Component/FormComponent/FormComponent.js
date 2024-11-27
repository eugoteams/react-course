/** @format */
import React, { Fragment, useState, useRef, useEffect } from "react";
import styles from "./FormComponent.module.css";
import InputField from "../../UI/InputField/InputField";
import FORM_CONSTANTS from "../../Util/FormConstants";
import { type } from "@testing-library/user-event/dist/type";
import CustomButton from "../../UI/CustomButton/CustomButton";

// useState()
// State handling and Form validations ...
// Set up on local ...
const FormComponent = (props) => {
  const [formState, setFormState] = useState([]);
  const [formDisable, setFromDisable] = useState(false);

  //LifeCycle Of Compoenent ...
  useEffect(() => {
    console.log("Componet mounted ...");
    // GET API CALL WITH LANG
    setFormState((prevState) => [...FORM_CONSTANTS]);
    return () => {
      //Code cleaning ...
    };
  }, []); // Component is Mounted

  useEffect(() => {
    //console.log("Component upated ..", formState["value"], formState["label"]);
    formState.map((field, _) => {
      //  console.log(field["label"], field["value"]);
      if (field["label"] === "age" && field["value"] >= 32) {
        console.log("Component upated ..", formState); // Updating the state
        console.log(formState);
        setFromDisable((prevState) => true);
      }
    });
  }, [formState]);

  const onSubmitFormListener = (event) => {
    //Handle the Form on Submit ..
    event.preventDefault(); // Stop propogation of event to the Parent..
  };

  const onInputChangeHandler = (event) => {
    event.preventDefault(); // Stop propogation of event to the Parent..

    //console.log("name attribute ::", event.target.name);
    //console.log("value attribute ::", event.target.value);

    formState.map((field, _) => {
      if (field["label"] === event.target.name) {
        if (field["label"] === "age" && field["value"] < 32) {
          setFromDisable((prevState) => false);
        }
        field["value"] = event.target.value;
      }
    });

    setFormState((prevState) => [...formState]);
  };

  return (
    <Fragment>
      <div className={`${styles.container}`}>
        {formDisable && (
          <p style={{ color: "red", fontSize: "1.2rem", textAlign: "center" }}>
            Cannot fill this form ..
          </p>
        )}

        <form onSubmit={onSubmitFormListener}>
          {formState.length > 0
            ? formState.map((field, index) => {
                return (
                  <div style={{ marginTop: "0.5rem" }} key={index}>
                    <InputField
                      value={field.value}
                      label={field.label}
                      type={field.type}
                      placeholder={field.placeholder}
                      isError={field.isError}
                      errorMsg={field.errorMsg}
                      isRequired={field.isRequired}
                      onChangeListener={onInputChangeHandler}
                    />
                  </div>
                );
              })
            : "<p>Loader ...</p>"}
          {!formDisable && <CustomButton label={"submit form"} />}
        </form>
      </div>
    </Fragment>
  );
};

export default FormComponent;
