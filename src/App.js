import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddAdmin from './Pages/AddAdmin/AddAdmin';
import AddDonation from './Pages/AddDonation/AddDonation';
import AllDonations from './Pages/AllDonations/AllDonations';
import Dashboard from './Pages/Dashboard/Dashboard';
import Donate from './Pages/Donate/Donate';
import Home from './Pages/Homepage/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import RegistrationForm from './Pages/RegistrationForm/RegistrationForm';
import DonationList from './Pages/UserDashboard/DonationList/DonationList';
import UserDashboard from './Pages/UserDashboard/UserDashboard';
import UserProfile from './Pages/UserProfile/UserProfile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/all-donations" element={<AllDonations />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donation-list" element={<DonationList />} />
        <Route path="/add-admin" element={<AddAdmin />} />
        <Route path="/add-donation" element={<AddDonation />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
