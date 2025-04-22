import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import RootsLayouts from "./layouts/RootsLayouts";
import Landing from "./pages/user/Landing";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Forgotpassword from "./pages/auth/Forgotpassword";
import Lessons from "./pages/user/Lessons";
import DashboardLayout from "./layouts/DashboardLayouts";
import Learn from "./pages/dashboard/Learn";
import Quiz from "./pages/dashboard/Quiz";
import Activities from "./pages/dashboard/Activities";

import Profile from "./pages/dashboard/Profile";
import Reward from "./pages/dashboard/Reward";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<Forgotpassword />} />

          <Route element={<RootsLayouts />}>
            <Route path="/" element={<Landing />} />
            <Route path="/lessons" element={<Lessons />} />
          </Route>

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index={true} element={<Learn />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="offline-activity" element={<Activities />} />
            <Route path="reward" element={<Reward />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
