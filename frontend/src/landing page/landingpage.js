import Navbar from "./navbar";
import Carousel from "./carousel";
import Blogsection from "./blogsection";
import Footersec from "./footer/Footersec";
import "./landingpage.css";
import Categories from "./categoies";
import Careing from "./careing";
import Bgvideo from "./bgvideo";



function Landingpage() {
  return (
    <div style={{ height: "400vh" }}>
      <Navbar />

      <Carousel />
      <Categories />
      <div style={{ display: "flex" }}>
        <Bgvideo />
        <img
          src="/images/banner2.jpeg"
          alt="Bootstrap"
          width="943"
          height="450"
          style={{ marginLeft: "-87px" }}
        />
      </div>

      <Blogsection />

      <Careing />
      <Footersec />
    
    </div>
  );
}
export default Landingpage;
