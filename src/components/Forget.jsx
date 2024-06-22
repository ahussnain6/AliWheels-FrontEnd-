import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { forgetpass } from '../store/MovieSlice';
import "./styles/Forget.css";
const Forget = () => {
  const dispatch = useDispatch();
    const [user, setUser] = useState({email: ""});
    const navigate = useNavigate();
    const handleInput = (e)=>{
      let name = e.target.name;
      let value = e.target.value;
      setUser({...user,[name]: value,});};
      const handleSubmit = async(e) => {
        e.preventDefault();
    try{  
      const response = dispatch(forgetpass(user)).then((res)=>{
        if(res.payload.Status == "Success"){
          toast.success("Verify Your Email through your inbox")
          setUser({ email:""});
        }else{
          toast.error("Invalid Email");
        }
      });    
        }catch(error){  console.log("login",error)} }
  return (
  <>  <div className='cen'
  
  >

<div className="space" >
<h1 className='email'>Write Your Email</h1>
<form onSubmit={handleSubmit} className="form">                
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      autoComplete='off'
                      onChange={handleInput}
                      placeholder="Enter Your Email"
                      className="in"
                    />
                    <button type="submit"
                     className="bt"                     >
                    Submit
                  </button>
</form>
</div>
    </div>
 </> )
}
export default Forget;