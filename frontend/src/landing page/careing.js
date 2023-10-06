import { BsFacebook } from "react-icons/bs";
import { TbShoppingCartHeart } from "react-icons/tb";

import { IoHome } from "react-icons/io5";

import { RiCustomerService2Line } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";

function Careing() {
  const iconStyle = {
    fontSize: "8rem", // Adjust the font size as needed
  };
  return (
    <div>
      <section>
        <div
          className="col install"
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",alignItems:"center",
            height:"300px",
            marginTop:"-4px"
          }}
        >
          <div style={{ textAlign: "center", marginRight: "20px" }}>
            <FaShippingFast className="display-1" style={iconStyle} />
            <h4>Shipping Nationwide</h4>
          </div>
          <div style={{ textAlign: "center", marginRight: "20px" }}>
            <IoHome className="display-1" style={iconStyle} />
            <h4>Active Store Near You</h4>
          </div>
          <div style={{ textAlign: "center", marginRight: "20px" }}>
            <RiCustomerService2Line className="display-1" style={iconStyle} />
            <h4>Customer Care</h4>
          </div>
          <div style={{ textAlign: "center" }}>
            <TbShoppingCartHeart className="display-1" style={iconStyle} />
            <h4>Cara Club Benefits</h4>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Careing;

// function Careing(){
//     return(
// <div>
// <section>
// <div class="col install"style={{marginTop:"20px",display:"flex",justifyContent:"center"}} >
//         <AiFillApple className="display-1" />
//         <p>Shipping Nationwide</p>
//         <BiLogoPlayStore className="display-1" />
//         <p>Active Store Near You</p>
//         <FaCcMastercard className="display-1"/>
//         <p>Customer Care</p>
//         <RiVisaFill className="display-1"/>
//        <p>Cara Club Benefis</p>
//       </div>
// </section>

// </div>

//     )
// }
// export default Careing;
