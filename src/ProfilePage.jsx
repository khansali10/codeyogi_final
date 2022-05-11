import React from "react";
import Profile from "./Profile";
export default function ProfilePage() {
  const [myData, updateMyData] = useState({});
  //geting data through API call
  useEffect(() => {
    const data = axios.get("https://api.codeyogi.io/me", {
      withCredentials: true,
    });
    data.then((response) => {
      updateMyData(response.data);
    });
  }, []);
  return (
    <>
      {(myData && <Profile myData={myData} />) || (
        <div>
          <span>Loading...</span>
        </div>
      )}
    </>
  );
}
