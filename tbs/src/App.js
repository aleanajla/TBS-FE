import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import NewPassword from './pages/NewPassword';
import CapacityPlanning from './pages/CapacityPlanning';
import MyBooking from './pages/MyBooking';
import TimeSlot from './pages/Timeslot';
import STID from './pages/STID';
import TransportOrder from './pages/TransportOder';
import Profile from './pages/Profile';
import ForgotPasswordForm from './components/ForgotPasswordForm/forgotPassword';
import Header from './components/Header';
import ChangePassword from './pages/ChangePassword';

function App() {
  return (
    <>
    <Header/>

    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/homepage" element={<Homepage/>} />
      <Route path="/signUp" element={<SignUp/>} />
      <Route path="/forgotPassword" element={<ForgotPassword/>}/>
      <Route path="/newPassword" element={<NewPassword/>}/>
      <Route path='/capacityPlanning' element={<CapacityPlanning/>}/>
      <Route path='/myBooking' element={<MyBooking/>}/>
      <Route path='/timeslot' element={<TimeSlot/>}/>
      <Route path='/stid' element={<STID/>}/>
      <Route path='/transportOder' element={<TransportOrder/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/changePassword' element={<ChangePassword/>}/>
    </Routes>
    </>
  );
}

export default App;
