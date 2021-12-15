import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Homepage/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
