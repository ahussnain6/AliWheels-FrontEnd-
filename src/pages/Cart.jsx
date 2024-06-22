import React, { useEffect,useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import "./styles/Cart.css";
import { postCart } from '../store/MovieSlice';
import { ToastMsg } from '../../public/Features';
import { REACT_APP_URL } from '../../public/Url';
const Cart = ()=>{
  const dispatch = useDispatch();
  const cart = useSelector((state)=>state.movie.cart);
  const navigate = useNavigate();
    const {id} = useParams();
    const [item,setItem] = useState([]);
    const SendMail = async()=>{
         const email = localStorage.getItem("email");
         toast.success(`${ToastMsg}`);
          const response = await fetch(`${REACT_APP_URL}/Buyer/sendmail/${email}`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(item[0])   }   );
             navigate("/");
            }
      useEffect(()=>{
        dispatch(postCart(id));
      },[id])
      useEffect(()=>{
         setItem(cart);
      },[cart])
  return (
    <div className='ca'>
      {
      item.map((curElem,index)=>{
        return (
          <>
          <table key={index}>
            <tr>
            <th>Image </th>
            <th>Car Company</th>
            <th>Car Name</th>
            <th>Model Year</th>
            <th>Body Color</th>
            <th>Car Category</th>
            <th>Car Price</th>
          </tr>
          <tr>
          <td><img src={curElem.imgurl} alt="img" width={75} height={100} /></td>
            <td>{curElem.company}</td>
            <td>{curElem.name}</td>
            <td>{curElem.model}</td>
            <td>{curElem.color}</td>
            <td>{curElem.Category}</td>
            <td>{curElem.price}</td>
          </tr>
          </table>
          </>
        )
      })
      
      }
      <div>
      <button className='btn-y'
       onClick={()=>SendMail()}>Click Here to Book Your Car</button>
    <br />

      </div>
      
      
      
      </div>
  )
}

export default Cart;