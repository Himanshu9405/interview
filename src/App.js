import './App.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import CustumerDashboard from './pages/CustumerDashboard';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const fetchRefreshApi = async() => {
    try{
      const data = await axios.post('http://139.59.86.126:9000/refresh');
      localStorage.setItem("accessToken", data?.access_token)
      localStorage.setItem("refreshToken", data?.refresh_token)
      console.log("data", data)
    }catch(err){
      console.log('err', err);

    }
  }
  useEffect(() => {
    fetchRefreshApi()
  }, [])
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/adDashboard" element={<AdminDashboard />} />
          <Route path="/custDashboard" element={<CustumerDashboard />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
