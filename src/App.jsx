import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import QuizPage from "./QuizPage";
import LecturePage from "./LecturePage";
import AssignmentPage from "./AssignmentPage";
import AssignDetail from "./AssignDetail";
import UserPage from "./UserPage";
import Profile from "./Profile";
import Logout from "./Logout";
import NotFound from "./NotFound";
function App() {
  return (
    <>
      <div className="flex items-stretch ">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<LecturePage />} />
            <Route path="/assignment" element={<AssignmentPage />} />
            <Route
              path="/assignment/:id/assigndetail"
              element={<AssignDetail />}
            />
            <Route path="/lecture" element={<LecturePage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
          <Route path="/quiz" element={<QuizPage username="sachin" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
