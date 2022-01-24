import { Route, Routes } from 'react-router-dom';
import './App.css';
import Donate from './Pages/Donate/Donate';
import Home from './Pages/Homepage/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import RegistrationForm from './Pages/RegistrationForm/RegistrationForm';
import UserDashboard from './Pages/UserDashboard/UserDashboard';
import UserProfile from './Pages/UserProfile/UserProfile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
