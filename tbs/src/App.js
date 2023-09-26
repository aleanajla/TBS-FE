import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Test from './pages/test';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} />
    </Routes>
  );
}

export default App;
