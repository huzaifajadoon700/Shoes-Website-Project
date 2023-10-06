import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BiLogoPinterest } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import Navbar from "../navbar";

function Contactus() {
  return (
    <div>
      <Navbar />

      <div class="section-p1" style={{ padding: "60px", display: "flex", flexWrap: "wrap", fontSize: "1.3rem" }}>
        <div class="col" style={{ marginTop: "20px", justifyContent: "space-between", padding: "50px" }}>
          <h1 style={{ padding: "10px", fontWeight: "bold" }}>Contact Us</h1>
          <p style={{ padding: "10px" }}><strong>Address: </strong>Jadoon Plaza Phase 2, Abbottabad, KPK</p>
          <p style={{ padding: "10px" }}><strong>Phone: </strong>03129902343</p>
          <p style={{ padding: "10px" }}><strong>Hours: </strong>10Am - 10Pm, Monday - Friday</p>
          <div class="follow">
            <h4 style={{ padding: "10px" }}>Follow us</h4>
            <div class="icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <BsFacebook className="display-4" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <AiFillTwitterSquare className="display-4" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <AiOutlineInstagram className="display-4" />
              </a>
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <BiLogoPinterest className="display-4" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <BiLogoYoutube className="display-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;


//nichy waly ma fb insta aur utube link ni hain
// import { BsFacebook } from "react-icons/bs";
// import { AiOutlineInstagram} from "react-icons/ai";
// import { AiFillTwitterSquare} from "react-icons/ai";
// import { BiLogoPinterest} from "react-icons/bi";
// import { BiLogoYoutube} from "react-icons/bi";
// import Navbar from "../navbar";


// function Contactus(){

//     return(
//         <div>
//             <Navbar/>

// <div class="section-p1"style={{padding:"60px",display:"flex",flexWrap:"wrap",fontSize:"1.3rem"}}>
//       <div class="col"style={{marginTop:"20px",justifyContent:"space-between",padding:"50px"}}>
//         <h1 style={{padding:"10px",fontWeight:"bold"}}>Contact Us</h1>
//         <p style={{padding:"10px"}}><strong>Address: </strong>Jadoon Plaza Phase 2, Abbottabad, KPK</p>
//         <p style={{padding:"10px"}}><strong>Phone: </strong>03129902343</p>
//         <p style={{padding:"10px"}}><strong>Hours: </strong>10Am - 10Pm, Monday - Friday</p>
//         <div class="follow">
//           <h4 style={{padding:"10px"}}>Follow us</h4>
//           <div class="icons" >
//           <BsFacebook className="display-4"/>
//           <AiFillTwitterSquare className="display-4"/>
           
//            < AiOutlineInstagram className="display-4" />
//            < BiLogoPinterest className="display-4" />
//            < BiLogoYoutube className="display-4" />
           
//           </div>
//         </div>
//       </div>

//         </div>
//         </div>
//     )
// }
// export default Contactus;