import React, { useState, useEffect } from "react";
import "./styles/Upload.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sellerdata, upload } from "../store/MovieSlice";
import { toast } from "react-toastify";
import { REACT_APP_CLOUD, REACT_APP_KEY, REACT_APP_SEC } from "../../public/Url";
const Upload = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [option, setoption] = useState("");
  const [image, setImage] = useState();
  const [fdata, setfData] = useState({
    company: "",
    name: "",
    model: "",
    color: "",
    price: "",
  });
  const [datas, setDatas] = useState([]);
  const getdata = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setfData({ ...fdata, [name]: value });
  };
  const getImage = (e) => {
    // console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };
  const submitForm = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("folder", "carshop1");
    data.append("upload_preset", "carshop");
    data.append("cloud_name", "dlcyf2qtl");
    data.append("api_key", `${REACT_APP_SEC}`);
    data.append("api_secret", `${REACT_APP_KEY}`);
    const res = await fetch(
      `${REACT_APP_CLOUD}`,
      {
        method: "POST",
        body: data,
      }
    );
    const response = await res.json();
    const newData = {
      ...fdata,
      Category: option,
      sellerId: new Date().getTime().toString(),
      imgurl: response.secure_url,
    };
    setDatas({ ...datas, newData });
    callapi(newData);
  };
  const callapi = async (data) => {
    const response =
      data.company.length > 2 &&
      data.name.length > 1 &&
      data.imgurl &&
      dispatch(upload(data)).then((res) => {
        if (res.payload.status == "ok") {
          navigate("/");
          toast.success("Information Uploaded");
          setfData({ company: "", name: "", model: "", color: "", price: "" });
        }
      });
  };
  const getcategory = (val) => {
    setoption(val);
  };
  useEffect(() => {
    if (!localStorage.getItem("seller")) {
      navigate("/seller");
    }
  }, []);
  return (
    <>
      <div className="bg">
        <form onSubmit={submitForm} className="form">
          <h1 className="h font" >
            Enter Details About Your Car
          </h1>
          <div className="p2">
            <input
              type="text"
              className="in"
              autoComplete="off"
              placeholder="ENTER CAR COMPANY"
              name="company"
              value={fdata.company}
              onChange={getdata}
            />
            <input
              type="text"
              className="in"
              autoComplete="off"
              placeholder="ENTER YOUR CARNAME"
              name="name"
              value={fdata.name}
              onChange={getdata}
            />
            <input
              type="text"
              className="in"
              autoComplete="off"
              placeholder="ENTER YOUR MODEL NUMBER"
              name="model"
              value={fdata.model}
              onChange={getdata}
            />
            <input
              type="text"
              className="in"
              autoComplete="off"
              placeholder="ENTER YOUR COLOR"
              name="color"
              value={fdata.color}
              onChange={getdata}
            />
            <input
              type="text"
              className="in"
              autoComplete="off"
              placeholder="ENTER YOUR PRICE"
              name="price"
              value={fdata.price}
              onChange={getdata}
            />
            <label htmlFor="sort"></label>
            <select
              name="sort"
              id="sort"
              className="select font"
              onClick={(e) => getcategory(e.target.value)}>
              <option value="SUV">SUV</option>
              <option value="#" disabled></option>
              <option value="Sedan">Sedan</option>
              <option value="#" disabled></option>
              <option value="EV">EV</option>
              <option value="#" disabled></option>
              <option value="Sports Car">Sports Car</option>
            </select>
            <h3 className="font center">
              Upload Your Car Picture
            </h3>
            <input
              type="file"
              className="filename"
              accept="image/*"
              onChange={getImage}
            />
          </div>
          <button
            type="submit"
            className="ki font"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Upload;
