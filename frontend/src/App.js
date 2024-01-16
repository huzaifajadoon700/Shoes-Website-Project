
// import Admin1 from "./admin page/admin1";

import Blogsection from "./landing page/blogsection";
import Footersec from "./landing page/footer/Footersec";

import Landingpage from "./landing page/landingpage";
import { Routes, Route } from "react-router-dom";

import AddProduct from "./adminpage2/addproducts";
import Deleteproduct from "./adminpage2/deleteproducts";
import View from "./adminpage2/viewproducts";
import Updated from "./adminpage2/Updated";


// import Updateproduct from "./admin page/updateproduct";

import Carousel from "./landing page/carousel";
import React, { createContext, useState } from "react";
import Checkout from "./landing page/checkout";
import Mens from "./landing page/mens";
import Women from "./landing page/women";
import Kids from "./landing page/kids";
import Term from "./landing page/footer/terms";
import Aboutus from "./landing page/footer/aboutus";
import Privacy from "./landing page/footer/privacy";
import Contactus from "./landing page/footer/contactus";
import Faq from "./landing page/footer/faqs";
import SignIn from "./landing page/footer/signup";
import Signup from "./landing page/footer/signup";
import Signin from "./landing page/footer/signin";
// import UpdateProduct from "./admin page/updateproduct";

import Addtocart from "./landing page/addtocart";
import ShoeReview from "./landing page/footer/reviews";
import AddReview from "./landing page/footer/reviews";
import Admin from "./adminpage2/admin";
import Dashboard from "./adminpage2/Dashboard";

export const Items = createContext();

function App() {
  const [names, setvalue] = useState(0);
  const [cartx, setCartx] = useState([]);
  return (
    <div>
    
      <Items.Provider value={{ names, setvalue, cartx, setCartx }}>
      
        <Routes>
          <Route path="/" element={<Landingpage />} />
         
          <Route path="/admin" element={<Admin/>} />
          
          <Route path="/footersec" element={<Footersec />} />
          <Route path="/blogsection" element={<Blogsection />} />
          <Route path="/home" element={<Landingpage />} />
          <Route path="/addproducts" element={<AddProduct />} />
          <Route path="/deleteproducts" element={<Deleteproduct />} />
          <Route path="/updateproducts/:productId" element={<Updated />} />

          <Route path="/viewproducts" element={<View />} />
          <Route path="/addtocart" element={<Addtocart />} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/Mens" element={<Mens />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/terms" element={<Term />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/reviews" element={<AddReview/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Items.Provider>
    
    </div>
  );
}

export default App;


