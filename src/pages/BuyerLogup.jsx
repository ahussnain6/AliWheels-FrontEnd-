import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/UseContext.jsx";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import "./styles/Register.css";
import { BuySignup } from "../store/MovieSlice.jsx";
export const BuyerSignup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { storetokenInLS } = useAuth();
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     dispatch(BuySignup(user)).then((response)=>{
     if (response.payload && response.payload.email) {
      storetokenInLS(response.payload.token,response.payload.email);
      setUser({ username: "", email: "", phone: "", password: "" });
      toast.success("Signup Successfully");
      navigate("/");
    }
    if (!response.payload.email || !response.payload) {
      toast.error(
        response.payload.extraDetails ? response.payload.extraDetails[0] : response.payload.message
      );
      if (response.payload.msg) {
        toast.error(response.payload.msg + " Go To Login Page");
      }

     };
     
      })
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    if (localStorage.getItem("email")) {
      navigate("/");
    }
    setUser({ username: "", email: "", phone: "", password: "" });
  }, []);
  return (
    <>
      <main>
        <div className="section">
          <h1 className="main li font">Signup Here</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="username"
                autoComplete="off"
                value={user.username}
                className="input"
                onChange={handleInput}
                placeholder="Enter Your Username"
              />
            </div>
            <div>
              <input
                type="text"
                name="email"
                autoComplete="off"
                className="input"
                value={user.email}
                onChange={handleInput}
                placeholder="Enter Your Email"
              />
            </div>
            <div>
              <input
                name="password"
                className="input"
                value={user.password}
                autoComplete="off"
                onChange={handleInput}
                placeholder="Enter Your Password "
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                placeholder="Enter Your Phone"
                autoComplete="off"
                className="input"
                value={user.phone}
                onChange={handleInput}
              />
            </div>
            <br />
            <button type="submit" className="btn font">
              SIGNUP
            </button>
          </form>
        </div>
      </main>
    </>
  );
};
