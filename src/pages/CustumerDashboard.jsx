import axios from "axios";
import React from "react";

const CustumerDashboard = () => {
  const handleLogout = async () => {
    try{
        const data = await axios.post("http://139.59.86.126:9000/logout");

        console.log("logout", data);

    }catch(error){
        console.log(error)
    }
  };
  return (
    <>
      <div>Custumer Dashboard</div>
      <button type="submit" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default CustumerDashboard;
