import React, { useState, useEffect } from "react";
import "./styles/Detail.css";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDetail, postData } from "../store/MovieSlice";
import { feature } from "../../public/Features";
const Detail = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const detail = useSelector((state)=>state.movie.detail);
  const { id } = useParams();
  const [item, setItem] = useState({});
  const addtocart =(data)=>{
    if(!(localStorage.getItem("token"))){
        Navigate("/buyersignup");
    }else{
    const Id = new Date().getTime().toString();
    const newData = { ...data, UserId: Id };
    dispatch(postData(newData)).then((res)=>{
    if (res.payload.status == "ok"){
      Navigate(`/cart/${Id}`);
    }}
    )}
  };
  useEffect(()=>{
    dispatch(getDetail(id));},[]);
  useEffect(()=>{
   setItem(detail);
  },[detail])
  return (
    <>
      <div className="page">
        <div className="side">
          <div className="side1">
            <img src={item.imgurl} alt="IMAGE" className="img1" />
          </div>
          <div className="side2">
            <h1>{item.company} {item.name}
            </h1>
            <h1>Color : {item.color}</h1>
            <h1>USD.{item.price}</h1>
            <h1>Model Year : {item.model}</h1>
            <h4 className="font-fam">
              <h2 className="font-fam">Features:</h2>
              {feature.part1}
            </h4>
            <h4 className="font-fam">
              <h2 className="font-fam">Entertainment :</h2>
              {feature.part2}
            </h4>
            <h4 className="font-fam">
              <h2 className="font-fam">Safety:</h2>
              {feature.part3}
            </h4>
            <h4 className="font-fam">
              <h2 className="font-fam">Additional Features:</h2>
              {feature.part4}
            </h4 >
            <button className="bn font-fam" onClick={() => addtocart(item)}>
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
