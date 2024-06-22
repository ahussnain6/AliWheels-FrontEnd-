import { NavLink } from "react-router-dom";
import "./styles/Error.css";
import { error } from "../../public/Features";
export const Error = () => {
  return (
    <>
        <div className=" content">
          <h2 className="header"style={{color:"red",fontFamily: "Lexend Deca",}}
>404</h2>
          <h4 style={{color:"red",fontFamily: "Lexend Deca"}}>Sorry! Page not found</h4>
          <p>
          {error.part1}
          </p>
          <div className="btns">
            <NavLink to="/" style={{fontFamily: "Lexend Deca",textDecoration:"none",fontSize:"2.4vw",color:"black"}}>return home</NavLink>
          </div>
        </div>
    </>
  );
};