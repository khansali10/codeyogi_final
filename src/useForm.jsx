import { useState } from "react";
export const useForm = (initialValues, submitAssignment) => {
  const [formData, updateFormData] = useState(initialValues);
  console.log("useForm called");
  const handleChangeInput = (event) => {
    console.log("handle change function called");
    updateFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const onFormSubmit = (event) => {
    console.log("onSubmit called");
    console.log("formData : ", formData);
    submitAssignment(event);
  };
  return { formData, handleChangeInput, onFormSubmit };
};
export default useForm;
