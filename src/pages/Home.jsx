import { useEffect, useState } from "react";
import { data } from "../../public/Data.js";
import { NavLink } from "react-router-dom";
import "./styles/Home.css";
import { fetchCar, gCategory } from "../store/MovieSlice.jsx";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer.jsx";
import {  load } from "../../public/Url.js";
import Accessory from "../components/Accessory.jsx";
import Layout from "../components/Layout.jsx";
import Pic from "../components/Pic.jsx";
const Home = () => {
  const dispatch = useDispatch();
  const carlist = useSelector((state) => state.movie.carlist);
  const category = useSelector((state) => state.movie.category);
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const getdata = () => {
    setLoading(true);
    setLoading(false);
  };
  const getCategory =async(cate) => {
      await dispatch(gCategory(cate));
         getitems();
  };
  const getitems = () => {
    if (category.length >= 1 && category) {
      setItem(category);
    } else {
      setItem(carlist);
    }
  };
  useEffect(() => {
    dispatch(fetchCar());
  }, []);
  useEffect(() => {
    getitems();
  }, [carlist, category]);
  return (
    <>
      <h1 className="k">LATEST CARS</h1>
      <span className="kin">
        {data.map((curElem, index) => {
          return (
            <button
              onClick={() => getCategory(curElem)}
              key={index}
              className="button"
              role="button"
            >
              {curElem}
            </button>
          );
        })}
      </span>
      <div className="load">
        {loading ? <img src={`${load}`} width={145} height={145} /> : null}
      </div>
      <div className="item">
        {item &&
          item.length > 1 &&
          item.map((curElem) => {
            return (
              <>
                <div className="car border">
                  <img src={curElem.imgurl} alt="image" className="img" />
                  <span className="thin">
                    <h1 className="name it1 font">
                      {curElem.company} {curElem.name}
                    </h1>
                    <button className="cart">
                      <NavLink
                        className="link font"
                        to={`/detail/${curElem._id}`}
                      >
                        See Details
                      </NavLink>
                    </button>
                  </span>
                </div>
              </>
            );
          })}
      </div>
      <Pic />
      <Accessory />
      <Layout />
      <Footer />
    </>
  );
};

export default Home;
