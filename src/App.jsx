import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Home  from "./pages/Home";
import {SellerData} from "./components/SellerData.jsx"
import {Navbar} from "./components/Navbar.jsx";
import { BuyerLogin } from "./pages/BuyerLogin.jsx";
import { BuyerSignup } from "./pages/BuyerLogup.jsx";
import {Error} from "./pages/Error";
import Logout from "./pages/Logout";
import Upload from "./components/Upload.jsx";
import Detail from "./pages/Detail.jsx";
import Cart from "./pages/Cart.jsx";
import Forget from "./components/Forget.jsx";
import Cpassword from "./components/Cpassword.jsx";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload/>} />
        <Route path="/buyerlogin" element={<BuyerLogin />} />
        <Route path="/buyersignup" element={<BuyerSignup />} />
        <Route path="/seller" element={<SellerData />} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/cart/:id" element={<Cart/>} />
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/forget" element={<Forget/>}/>
        <Route path="/changepassword/:id" element={<Cpassword />}  />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;