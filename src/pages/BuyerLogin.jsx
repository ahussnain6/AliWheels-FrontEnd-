import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/UseContext.jsx";
import { NavLink } from "react-router-dom";
import "./styles/Login.css";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Sellsign } from "../store/MovieSlice.jsx";
export const BuyerLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { storetokenInLS } = useAuth();
  const [user, setUser] = useState({ email: "", password: "" });
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(Sellsign(user)).then((response) => {
        if (response.payload && response.payload.email) {
          storetokenInLS(response.payload.token, response.payload.email);
          toast.success("Login Successfully");
          setUser({ email: "", password: "" });
          navigate("/");
        }
        if (!response.payload.email) {
          toast.error("Invalid Credentials");
        }
      });
    } catch (error) {
      console.log("login", error);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("email")) {
      navigate("/");
    }
    setUser({ email: "", password: "" });
  }, []);
  return (
    <>
      <div className="se">
        <div className="lp">
          <h1 className="main font hea">Login Here</h1>
          <br />
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              name="email"
              autoComplete="off"
              value={user.email}
              onChange={handleInput}
              placeholder="Enter Your Email"
              className="in"
            />
            <input
              className="in"
              type="text"
              name="password"
              value={user.password}
              autoComplete="off"
              onChange={handleInput}
              placeholder="Enter Your Password"
            />
            <button type="submit" className="bt font">
              Sign In
            </button>
          </form>
          <NavLink to="/forget" className="forget">
            Forget Password
          </NavLink>
        </div>
      </div>
    </>
  );
};
