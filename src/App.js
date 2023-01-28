import { Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import AddAdmin from "./Pages/Dashboard/AddAdmin/AddAdmin";
import AddDonation from "./Pages/Dashboard/AddDonation/AddDonation";
import AllDonations from "./Pages/Dashboard/AllDonations/AllDonations";
import DashboardMain from "./Pages/Dashboard/DashboardMain/DashboardMain";
import Donate from "./Pages/Dashboard/Donate/Donate";
import Home from "./Pages/Homepage/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import RegistrationForm from "./Pages/RegistrationForm/RegistrationForm";
import DonationList from "./Pages/Dashboard/UserDashboard/UserDonationList/UserDonationList";
import UserDashboard from "./Pages/Dashboard/UserDashboard/UserDashboard";
import UserProfile from "./Pages/UserProfile/UserProfile";
import PrivateOutlet from "./components/PrivateOutlet/PrivateOutlet";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";

export const UserContext = React.createContext();
export const UserInfoContext = React.createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      setIsLoggedIn(false);
    } else {
      const decoded = jwt_decode(token);
      const user = {
        email: decoded.email,
        time: decoded.iat,
      };

      if (!user?.email) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
        setUserInfo(user);
      }
    }
  }, [isLoggedIn]);

  return (
    <div className="App">
      <UserContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
        <UserInfoContext.Provider value={[userInfo, setUserInfo]}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<RegistrationForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="" element={<PrivateOutlet />}>
              <Route path="/dashboard" element={<DashboardMain />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/add-admin" element={<AddAdmin />} />
              <Route path="/add-donation" element={<AddDonation />} />
              <Route path="/all-donations" element={<AllDonations />} />
              <Route path="/user-dashboard" element={<UserDashboard />} />
              <Route path="/donation-list" element={<DonationList />} />
              <Route path="/add-review" element={<AddReview />} />
              <Route path="/profile" element={<UserProfile />} />
            </Route>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </UserInfoContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
