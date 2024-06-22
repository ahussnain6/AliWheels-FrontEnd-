import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./styles/Cpassword.css"
import { REACT_APP_URL } from '../../public/Url';
const Cpassword=()=>{
    const [user, setUser] = useState({password: ""});
    const { id } = useParams();
    const navigate = useNavigate();
    const handleInput = (e)=>{
      let name = e.target.name;
      let value = e.target.value;
      setUser({...user,[name]: value,});};
      const handleSubmit = async(e) => {
        e.preventDefault();
    try{   const response = await fetch(`${REACT_APP_URL}/Buyer/cpass/${id}`,{
            method:"POST",headers:{"Content-Type":"application/json" },
            body:JSON.stringify(user)})
          const res_data = await response.json();
          console.log(res_data);
          if(response.ok){
            setUser({password:""});
            toast.success("Password Changed");
          navigate("/buyerlogin");
        }
          if(!response.ok){
            toast.error("Invalid Credentials")}
        }catch(error){  console.log("login",error)} }
  return (
  <>  <div className='cen'>
<div className="space" >
<h1 className='h1-1' >
  Write Your New Password</h1>
<form onSubmit={handleSubmit} className="form">                
                    <input
                      type="text"
                      name="password"
                      value={user.password}
                      autoComplete='off'
                      onChange={handleInput}
                      placeholder="Enter Your Password"
                      className="in"
                    />
                    <button type="submit" className="bt">
                    Submit
                  </button>
</form>
</div>
    </div>
 </> )
}

export default Cpassword;