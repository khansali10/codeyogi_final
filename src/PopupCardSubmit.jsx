import axios from "axios";
import React, { useContext, useState } from "react";
import { string } from "yup";
import Button from "./Button";
import popup from "./app";
function PopupCardSubmit({ id }, props) {
  // const { submitPopup, updateSubmitPopup } = props.popup;
  const [inputUrl, updateInputUrl] = useState("");
  const changeFun = (event) => {
    updateInputUrl(event.target.value);
  };

  let isUrlValid;
  const [errorMsg, setErrorMsg] = useState("");

  const submitAssignment = () => {
    const websiteValidator = string().url("url is not valid");
    isUrlValid = websiteValidator.isValidSync(inputUrl);
    console.log(isUrlValid);

    try {
      websiteValidator.validateSync(inputUrl);
      const data = inputUrl;

      axios
        .put(
          `https://api.codeyogi.io/assignment/${id}/submit`,

          { submissionLink: data },
          { withCredentials: true }
        )
        .then((Response) => {
          console.log(data);
        });
      setErrorMsg("");
      
    } catch (e) {
      console.log("unsuccessful");

      setErrorMsg(e.message);

      return;
    }
  };
  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center fixed top-0 left-0 p-5 backdrop-opacity-30 backdrop-invert">
        <div className="absolute top-0 right-0 p-5">
          <button theme="secondary">Back</button>
        </div>
        <div className=" w-3/6 bg-white opacity-100 rounded-lg px-3 py-7  bg-blur text-sm text-slate-500">
          <div>
            <div className="py-5 border-y border-y-slate-200  flex justify-between items-center">
              <span className="font-semibold w-1/4 ">Submission Link</span>
              <input
                type="url"
                id="assignmentUrl"
                className="p-3 rounded-md w-3/4  border border-slate-400 bg-slate-50"
                placeholder="Submission Link"
                onChange={changeFun}
              />
            </div>
            <div className="text-red-600  h-12 text-center">
              {!isUrlValid && errorMsg}
            </div>
            <Button type="submit" onclick={submitAssignment}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default PopupCardSubmit;
