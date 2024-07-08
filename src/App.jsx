import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Signup";
import SellerDashboard from "./Pages/SellerDashboard";
import BuyerDashboard from "./Pages/BuyerDashboard.jsx";
import Navbar from "./Component/Navbar.jsx";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/seller/profile" element={<SellerDashboard/>}/>
      <Route path="/buyer/profile" element={<BuyerDashboard/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
