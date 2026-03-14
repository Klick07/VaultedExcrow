import Login from "./components/Login";
import Navbar from "./components/navbar";

import About from "./components/About";
import ClientDashboard from "./components/dashboardClient";
import FreelancerDashboard from "./components/dashboardFreelancer";
import Milestone from "./components/Milestone";
import Registration from "./components/Registration";
import LoginClient from "./components/LoginClient";
import SignupClient from "./components/SignupClient";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useStore from "./Store";
import AddContract from "./components/addcontract";
function App() {
  const showmodal = useStore((state) => state.showmodal);
  const setShowmodal = useStore((state)=>state.setShowmodal)

  return (
    <Router>
      {showmodal && <AddContract />}
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboardClient" element={<ClientDashboard />} />
        <Route path="/dashboardFreelancer" element={<FreelancerDashboard />} />
        <Route path="/milestone" element={<Milestone />} />
        <Route path="/twousers" element={<Registration />} />
        <Route path="/loginClient" element={<LoginClient />} />
        <Route path="/signupClient" element={<SignupClient />} />

      </Routes>
    </Router>
  );
}

export default App;
