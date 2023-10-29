import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import NewPassword from './pages/NewPassword';
import CapacityPlanning from './pages/CapacityPlanning';

function App() {
  return (
    <Routes>
      <Route path="/homepage" element={<Homepage/>} />
      <Route path="/" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/forgotPassword" element={<ForgotPassword/>}/>
      <Route path="/newPassword" element={<NewPassword/>}/>
      <Route path='/capacityPlanning' element={<CapacityPlanning/>}/>
    </Routes>
  );
}

export default App;
