/** @format */

const FORM_CONSTANTS = [
  {
    label: "first name",
    type: "text",
    placeholder: "please enter first name.",
    errorMsg: "please enter valid first name.",
    isError: false,
    value: "",
    isRequired: true,
  },
  {
    label: "last name",
    type: "text",
    placeholder: "please enter last name.",
    errorMsg: "please enter valid last name.",
    isError: false,
    value: "",
    isRequired: true,
  },
  {
    label: "age",
    type: "number",
    placeholder: "please enter your age",
    errorMsg: "please enter valid age",
    isError: false,
    value: "",
  },
  {
    label: "Phone",
    type: "phone",
    placeholder: "76721213356",
    errorMsg: "please enter valid phone",
    isError: false,
    value: "",
  },
  {
    label: "position",
    type: "text",
    placeholder: "please enter your current postion",
    errorMsg: "position cannot be empty",
    isError: false,
    value: "",
  },
  {
    label: "Are you looking for job :",
    type: "checkbox",
    placeholder: "",
    errorMsg: "",
    isChecked: true,
    isError: false,
  },
  {
    label: "previous organisation :",
    type: "text",
    placeholder: "please enter your previous organisation ..",
    errorMsg: "Please enter your organisatin",
    isRequired: true,
    value: "",
    isError: false,
  },
];

export default FORM_CONSTANTS;
