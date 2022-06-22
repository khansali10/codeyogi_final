import React, { useEffect, useState } from "react";
import AssignContentDetailsCard from "./AssignContentDetailsCard";
import ListLayout from "./ListLayout";
import axios from "axios";
import { Link } from "react-router-dom";
function AssignContentList() {
  const [assignmentData, updateAssignmentData] = useState([]);
  console.log("data");
  useEffect(() => {
    axios
      .get("https://api.codeyogi.io/batches/1/assignments", {
        withCredentials: true,
      })
      .then((response) => {
        updateAssignmentData(response.data);
      });
  }, []);
  return (
    <>
      <ListLayout>
        {assignmentData.map((item) => (
          <AssignContentDetailsCard pass={item} key={item.id} />
        ))}
      </ListLayout>
    </>
  );
}
export default AssignContentList;
