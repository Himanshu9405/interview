import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router';

const AdminDashboard = () => {
    const navigate = useNavigate()
    const handleLogout = async () => {
        try{
            const data = await axios.post("http://139.59.86.126:9000/logout");
            localStorage.removeItem("accessToken")
            localStorage.removeItem("refreshToken")
            localStorage.removeItem("user")
            navigate('/')
            console.log("logout", data);
    
        }catch(error){
            console.log(error)
        }
      };
  return (
    <>
    <div>
      Admin Dashboard
    </div>
      <button type='submit' onClick={handleLogout}>Logout</button>
    </>
  )
}

export default AdminDashboard
