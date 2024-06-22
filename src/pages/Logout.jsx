import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'; 
import { useAuth } from '../store/UseContext.jsx';
import { toast } from 'react-toastify';
const Logout = () => {
const {LogoutUser}= useAuth();
   useEffect(()=>{
    LogoutUser();
   //  localStorage.removeItem("token");
    localStorage.removeItem("email");
    toast.success("Logout Successfully");
   },[LogoutUser])

return < Navigate to="/" />

}
export default Logout;