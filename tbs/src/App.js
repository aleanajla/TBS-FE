import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
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
import ProtectedRoutesUser from './components/ProtectedRoute';
import { useSelector } from 'react-redux';
import { Role } from './lib/utils';
import Layout from './components/Layouts/Layout';

function App() {
  const { Role_ID } = useSelector((state) => state.Auth.user)
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signUp" element={<SignUp/>} />
      <Route path="/forgotPassword" element={<ForgotPassword/>}/>
      <Route path="/newPassword" element={<NewPassword/>}/>

      <Route element={<ProtectedRoutesUser/>}>
        <Route path="/homepage" element={<Homepage/>} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/changePassword' element={<ChangePassword/>}/>
        {Role_ID === 1 && (
          <>
            <Route path='/myBooking' element={<MyBooking/>}/>
            {/* <Route path="*" element={<Navigate to="/homepage" replace />}/> */}
          </>
        )}
        {Role_ID === 2 && (
          <>
            <Route path='/stid' element={<STID/>}/>
            <Route path='/transportOder' element={<TransportOrder/>}/>
            {/* <Route path="*" element={<Navigate to="/homepage" replace />}/> */}
          </>
        )}
        {Role_ID === 1 || Role_ID ==2 ? 
          <Route path='/timeslot' element={<TimeSlot/>}/>
        : ""
        }
        {Role_ID === 3 && (
          <>
            <Route path='/capacityPlanning' element={<CapacityPlanning/>}/>
            {/* <Route path="*" element={<Navigate to="/homepage" replace />}/> */}
          </>
        )}
      </Route>
    </Routes>
    </>
  );
}

export default App;
