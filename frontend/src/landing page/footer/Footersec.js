import { BsFacebook } from "react-icons/bs";
import { RiVisaFill } from "react-icons/ri";
import { AiOutlineInstagram} from "react-icons/ai";
import { AiFillTwitterSquare} from "react-icons/ai";
import { BiLogoPinterest} from "react-icons/bi";
import { BiLogoYoutube} from "react-icons/bi";
import { BiLogoPlayStore} from "react-icons/bi";
import { AiFillApple} from "react-icons/ai";
import { FaCcMastercard} from "react-icons/fa";
import { FaCcPaypal} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footersec (){
    return(
        
        <div style={{backgroundColor:"black",color:"white",width:"1343px", height:"450px"}}>

<footer class="section-p1"style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
      <div class="col"style={{marginTop:"20px",justifyContent:"space-between"}}>
        <h4>Contact</h4>
        <p><strong>Address: </strong>Jadoon Plaza Phase 2, Abbottabad, KPK</p>
        <p><strong>Phone: </strong>03129902343</p>
        <p><strong>Hours: </strong>10Am - 10Pm, Monday - Friday</p>
        <div class="follow">
          <h4>Follow us</h4>
          <div class="icons">
          <BsFacebook className="display-4"/>
          <AiFillTwitterSquare className="display-4"/>
           
           < AiOutlineInstagram className="display-4" />
           < BiLogoPinterest className="display-4" />
           < BiLogoYoutube className="display-4" />
           
          </div>
        </div>
      </div>

      <div className="col" style={{ marginTop: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <h4>About</h4>
          <Link to="aboutus" as="a" style={{ textDecoration: "none", color: "white", margin: "4px" }}>About us</Link>
          <Link to="faqs" as="a" style={{ textDecoration: "none", color: "white", margin: "4px" }}>FAQS</Link>
      
          <Link to="privacy" as="a" style={{ textDecoration: "none", color: "white", margin: "4px" }}>Privacy Policy</Link>
          <Link to="terms" as="a" style={{ textDecoration: "none", color: "white", margin: "4px" }}>Terms & Conditions</Link>
          <Link to="Contactus" as="a" style={{ textDecoration: "none", color: "white", margin: "4px" }}>Contact us</Link>
        </div>

      <div class="col"style={{marginTop:"20px",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
        <h4>My Account</h4>
  
        <Link to="/checkout" as="a" style={{textDecoration:"none",color:"white",margin:"4px"}}>View Cart</Link>
        <Link to="/signup" as="a" style={{textDecoration:"none",color:"white",margin:"4px"}}>Sign Up</Link>
        <Link to="/signin" as="a" style={{textDecoration:"none",color:"white",margin:"4px"}}>Sign In</Link>
        <Link to="/reviews" as="a" style={{textDecoration:"none",color:"white",margin:"4px"}}>Add reviews</Link>
        <a href="#"style={{textDecoration:"none",color:"white",margin:"4px"}}>My Wishlist</a>
       
        <a href="#"style={{textDecoration:"none",color:"white",margin:"4px"}}>Track My Order</a>
        <a href="#"style={{textDecoration:"none",color:"white",margin:"4px"}}>Help</a>
      </div>

      <div class="col install"style={{marginTop:"20px",justifyContent:"space-between"}} >
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <AiFillApple className="display-4" />
        <BiLogoPlayStore className="display-4" />

        <p>Secured Payments Gateways</p>
        <FaCcMastercard className="display-4"/>
        <RiVisaFill className="display-4"/>
        <FaCcPaypal className="display-4"/>
      </div>
      </footer>
      <div class="copyright"style={{marginTop:"100px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <p id="copyright-end" >
          CARA Huzaifa's Online WebStore copyright &copy; 2023
        </p>
      </div>
  
        </div>
    )
}
export default Footersec