import { NavLink, useLocation } from "react-router-dom";
import "./styles/Navbar.css";
import { useAuth } from "../store/UseContext.jsx";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
export const Navbar = () => {
  const location = useLocation();
  const [glass,setGlass] = useState("");
  const [hide,setHide] = useState(null);
  const {isloggedin} = useAuth();
const getleft =()=>{
  if(window.innerWidth <= 920){
    setGlass("left");  }
}
useEffect(()=>{
 getleft();
},[])
useEffect(()=>{
  if(location.pathname == "/"){
  setHide(false);   
  }else{
    setHide(true);
  }
},[location])
  return (
    <>
    <div className= {`${hide ? "bg-90":"whole-bg"}`} 
       >

        <nav >
      <div className="logo">ALIWHEELS</div>
      <input type="checkbox" id="click" onChange={()=>setGlass("")}/>
      <label htmlFor="click" className="menu-btn">
      <FiMenu className="i" />
        {/* <img src={pic} alt="" className="i" style={{borderRadius:".6vh"}} /> */}
      </label>
      <ul className={`${glass}`} ><li>
      <NavLink to="/" onClick={()=>getleft()}>HOME</NavLink> </li>
               <li><NavLink to="/seller"onClick={()=>getleft()}
               >SELL CAR</NavLink></li>
               {isloggedin ? (
               <li><NavLink to="/logout"onClick={()=>getleft()}>LOGOUT </NavLink> </li> ):
                   (
          <> <li><NavLink to="/buyersignup" onClick={()=>getleft()}> SIGNUP</NavLink></li>
              <li> <NavLink to="/buyerlogin"onClick={()=>getleft()}>LOGIN </NavLink></li>
            </>  )}</ul></nav>
            <div
        className={`home bgfull ${hide ? "none":null }`}
      >
        <span className="op">Purchase Your Dream Car Here</span>
      </div>
      </div>

    </>);};