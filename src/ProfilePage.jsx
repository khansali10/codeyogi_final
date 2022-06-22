import React, { useState, useEffect } from "react";
import axios from "axios";
import Profile from "./Profile";
export default function ProfilePage() {
  const [myData, updateMyData] = useState({});
  //geting data through API call
   useEffect(() => {
    const data = axios.get("https://api.codeyogi.io/me", {
      withCredentials: true,
    });
    data.then((response) => {
      updateMyData(response.data.data);
    });
  }, []);
  console.log("mydata : ", myData);

  return (
    <div >
      {(myData && <Profile myData={myData} />) || <div>Loading....</div>}
    </div>
  );
}
