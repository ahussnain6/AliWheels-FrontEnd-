import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../components/styles/SellerData.css";
import { useDispatch } from "react-redux";
import { sellerdata } from "../store/MovieSlice";
export const SellerData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [seller, setSeller] = useState({ username: "", email: "", city: "" });
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setSeller({ ...seller, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // if( ){
      const response =
        seller.username.length > 2 &&
        seller.email.length > 4 &&
        dispatch(sellerdata(seller)).then((resp) => {
          if (resp.meta.requestStatus == "fulfilled") {
            localStorage.setItem("seller", JSON.stringify(seller));
            setSeller({ username: "", email: "", city: "" });
            navigate("/upload");
          } else {
            toast.error("INVALID INPUT");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setSeller({ username: "", email: "", city: "" });
    if (localStorage.getItem("seller")) {
      navigate("/upload");
    }
  }, []);
  return (
    <>
      <div className="sect">
        <h1
          className="ma font top"
        
        >
          Fill This Form Before,Selling Your Car
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="username"
              autoComplete="off"
              value={seller.username}
              className="inpu font"
              onChange={handleInput}
              placeholder="Enter Your Username"
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              className="inpu font"
              value={seller.email}
              autoComplete="off"
              onChange={handleInput}
              placeholder="Enter Your Email"
            />
          </div>
          <div>
            <input
              type="text"
              name="city"
              placeholder="Enter Your City Name"
              autoComplete="off"
              className="inpu font"
              value={seller.city}
              onChange={handleInput}
            />
          </div>
          <button
            type="submit"
            className="b font butto"
            
          >
            Sell Car
          </button>
        </form>
      </div>
    </>
  );
};
