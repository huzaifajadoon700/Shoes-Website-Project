import React from 'react';
import Navbar from '../navbar';
import Footersec from './Footersec';

function Faq() {
  return (
    <div>
        <Navbar/>
      <div style={{fontSize:"1.2rem"}} >
        
        <h1
          style={{
            marginTop:"70px",
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
         Frequently Asked Questions
        </h1>
     
      {/* <h2 style={{fontFamily: "YourChosenFont",margintop:"200px"}}>Frequently Asked Questions</h2> */}

      <div className="faq-item">
        <h3 style={{fontFamily: "YourChosenFont"}}>1. What sizes are available for your shoes?</h3>
        <p style={{fontFamily: "YourChosenFont"}}>Our shoes are available in a wide range of sizes, from US size 5 to 14. You can find detailed sizing information on our size guide page.</p>
      </div>

      <div className="faq-item">
        <h3 style={{fontFamily: "YourChosenFont"}}>2. How do I determine my correct shoe size?</h3>
        <p style={{fontFamily: "YourChosenFont"}}>To find the perfect fit, refer to our size guide, which includes instructions on measuring your feet and converting measurements to our sizing chart.</p>
      </div>

      <div className="faq-item">
        <h3 style={{fontFamily: "YourChosenFont"}}>3. Can I return or exchange my shoes if they don't fit?</h3>
        <p style={{fontFamily: "YourChosenFont"}}>Yes, we offer a hassle-free return and exchange policy. If your shoes don't fit, you can initiate a return within 30 days of purchase. Visit our returns page for more information.</p>
      </div>

      <div className="faq-item">
        <h3 style={{fontFamily: "YourChosenFont"}}>4. What is your return policy for shoes?</h3>
        <p style={{fontFamily: "YourChosenFont"}}>Our return policy allows returns within 30 days of purchase. Shoes must be unworn and in their original packaging. Please check our returns page for detailed instructions.</p>
      </div>

      <div className="faq-item">
        <h3 style={{fontFamily: "YourChosenFont"}}>5. Are your shoes available for international shipping?</h3>
        <p style={{fontFamily: "YourChosenFont"}}>Yes, we offer international shipping. Shipping rates and delivery times may vary. Please check our shipping page for more details.</p>
      </div>

      <div className="faq-item">
        <h3 style={{fontFamily: "YourChosenFont"}}>6. How can I track my shoe order?</h3>
        <p style={{fontFamily: "YourChosenFont"}}>Once your order is shipped, you will receive a confirmation email with a tracking number. Use this number to track your order on our website or the shipping carrier's site.</p>
      </div>

      <div className="faq-item">
        <h3 style={{fontFamily: "YourChosenFont"}}>7. Do you offer a warranty or guarantee on your shoes?</h3>
        <p style={{fontFamily: "YourChosenFont"}}>Yes, we provide a limited warranty on manufacturing defects. Please refer to our warranty page for specific details and how to claim warranty services.</p>
      </div>

      <div className="faq-item">
        <h3 style={{fontFamily: "YourChosenFont"}}>8. Are your shoes suitable for specific activities, like running or hiking?</h3>
        <p style={{fontFamily: "YourChosenFont"}}>Some of our shoes are designed for specific activities. Check the product descriptions for details on the intended use of each shoe in our collection.</p>
      </div>

      <div className="faq-item">
        <h3 style={{fontFamily: "YourChosenFont"}}>9. How do I care for and clean my shoes?</h3>
        <p style={{fontFamily: "YourChosenFont"}}>We recommend following the care instructions provided with your shoes. Generally, wiping with a damp cloth and using a mild detergent are suitable for most materials.</p>
      </div>

      <div className="faq-item">
        <h3 style={{fontFamily: "YourChosenFont"}}>10. What materials are used in the manufacturing of your shoes?</h3>
        <p style={{fontFamily: "YourChosenFont"}}>Our shoes are crafted using high-quality materials, including leather, synthetic fabrics, and durable soles. Refer to the product descriptions for specific details on each shoe's construction.</p>
      </div>
    </div>
    <Footersec/>
    </div>
  );
};

export default Faq;
