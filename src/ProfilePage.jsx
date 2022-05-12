import axios from "axios";
import React, { useEffect, useState } from "react";
import Profile from "./Profile";
export default function ProfilePage() {
  const [myData, updateMyData] = useState(undefined);
  //geting data through API call
  useEffect(() => {
    const data = axios.get("https://api.codeyogi.io/me", {
      withCredentials: true,
    });
    data.then((response) => {
      updateMyData(response.data.data);
    });
  }, []);
  return <>{myData && <Profile profileData={myData} />}</>;
}
