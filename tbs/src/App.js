import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Homepage/>} /> */}
      <Route path="/" element={<SignUp/>} />
    </Routes>
  );
}

export default App;
