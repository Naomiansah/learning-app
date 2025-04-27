import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import RootsLayouts from "./layouts/RootsLayouts";
import Landing from "./pages/user/Landing";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Forgotpassword from "./pages/auth/Forgotpassword";
import Lessons from "./pages/user/Lessons";
import Howorks from "./pages/user/Howorks";
import LearnerDashboard from "./pages/user/dashboard";
import OfflineActivityPage from "./pages/user/Offlineactivity";

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
            <Route path="/howorks" element={<Howorks />} />
            <Route path="/offlineactivity" element={<OfflineActivityPage />} />
          </Route>

          <Route path="/dashboard" element={<LearnerDashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
