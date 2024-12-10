/** @format */

import logo from "./logo.svg";
import "./App.css";
import { Fragment, useEffect, useState } from "react"; // React 16
import InputField from "./UI/InputField/InputField";
import FormComponent from "./Component/FormComponent/FormComponent";
import Modal from "./UI/Modal/Modal";
import Select from "./UI/Select/Select";
import Accordion from "./UI/Accordion/Accordion";
import Card from "../src/UI/Card/Card";
import useStorage from "./hooks/useStorage";
import Display from "./Component/Display/Display";
import SelectStore from "./Store/SelectStore";
import { Provider } from "react-redux";

function App() {
  const [modalSate, setModalState] = useState(true);
  const [selectData, setSelectData] = useState([]);
  const { saveLocalStorage, clearLocalStorage, saveSessionStorage } =
    useStorage();

  const onCLoseModalHandler = () => {
    setModalState((prevSate) => false);
  };

  const getDataFromServer = async () => {
    const URL = "https://jsonplaceholder.typicode.com/todos";
    let response = await fetch(URL);
    let data = await response.json();

    let dataForSelect = data.reduce((accu, value) => {
      accu.push(value.title);
      return accu;
    }, []);

    if (dataForSelect.length > 0) {
      setSelectData((prevSate) => [...dataForSelect]);
    }
  };

  useEffect(() => {
    getDataFromServer();
    saveLocalStorage("Data to be stored in Local storage");
    saveSessionStorage("Data in session");
  }, []);

  const onClickClearStorage = (event) => {
    clearLocalStorage();
  };

  return (
    <Fragment>
      <button onClick={onClickClearStorage}>clearLocalStorage</button>
      <Provider store={SelectStore}>
        <Display />
        <Select data={selectData} />
      </Provider>

      {/* {modalSate && (
        <Modal
          modalHeader={"User Registration Form"}
          onClose={onCLoseModalHandler}
          posFooterButton="right"
        >
          <FormComponent />
        </Modal>
      )} <Select data={selectData} />*/}

      {/* {selectData.map((item, index) => {
        return (
          <Fragment key={item}>
            <div className="accordion-wrapper">
              <Accordion title={item} addIcon={index % 2 === 0 ? true : false}>
                <p>{item}</p>
                <p>
                  Anim sint magna duis magna et. Non id proident ut enim in
                  eiusmod exercitation culpa occaecat cillum mollit. Sit est
                  laboris nisi aute eu fugiat consequat. Non aliquip
                  exercitation et commodo ipsum anim eiusmod. Culpa in Lorem qui
                  nisi sint consequat Lorem tempor officia eu.
                </p>
              </Accordion>
            </div>
          </Fragment>
        );
      })}
         <Card />
       */}
    </Fragment>
  );
}

export default App;
