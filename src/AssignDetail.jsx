import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { BsCheckCircle } from "react-icons/bs";
import PopupCardSubmit from "./PopupCardSubmit";
import { DateTime } from "luxon";
import AssignmentDetailSingleRow from "./AssignmentDetailSingleRow";
import Button from "./Button";

function AssignDetail(props) {
  const [submitButton, changeSubmitButton] = useState("Submit");
  const [submitPopup, updateSubmitPopup] = useState(false);
  const data = useParams();

  const [assignmentDetails, updateAssignmentDetails] = useState([]);

  //API request
  useEffect(() => {
    const wholeData = axios.get(
      `https://api.codeyogi.io/assignments/${data.id}`,
      {
        withCredentials: true,
      }
    );
    wholeData.then((response) => {
      updateAssignmentDetails(response.data);
      if (response.data.submissions.length !== 0) {
        changeSubmitButton("Re-Submit");
      }
    });
  }, []);

  const due_date = DateTime.fromISO(assignmentDetails.due_date).toLocaleString(
    DateTime.DATE_MED_WITH_WEEKDAY
  );
  console.log("submitPopup ", submitPopup);
  return (
    <>
      <div className=" py-2 border-b border-b-slate-200">
        <div className="px-4 py-4 bg-white rounded-md w-full">
          <h4 className="text-lg font-semibold  pb-3">Assignment Details</h4>
          <AssignmentDetailSingleRow
            data={assignmentDetails.title}
            tag="Title"
          />
          <AssignmentDetailSingleRow data={due_date} tag="Due Date" />
          <AssignmentDetailSingleRow
            data={assignmentDetails.description}
            tag="Description"
          />
          <div className="pt-5 pb-8">
            <Button theme="primary" onclick={updateSubmitPopup}>
              {submitButton}
            </Button>
          </div>
        </div>
        <div>
          {submitPopup && (
            <PopupCardSubmit
              id={data.id}
              // submitPopup={submitPopup}
              // updateSubmitPopup={updateSubmitPopup}
            />
          )}
        </div>
      </div>
    </>
  );
}
export default AssignDetail;
