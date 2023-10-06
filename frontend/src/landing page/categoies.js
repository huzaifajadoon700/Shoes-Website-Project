import { Link } from "react-router-dom";
function Categories() {
  return (
    <div style={{backgroundColor:"black",color:"white",height:"600px" }}>
      <h2 style={{ display: "flex", justifyContent: "center" ,padding:"10px",alignItems:"center",fontFamily: "YourChosenFont"}}>Categories</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <section id="men" style={{ margin: "20px" }}>
          <div class="product-card">
           
            <Link to="Mens"><img
              src="/images/categorymen.avif"
              alt="Men's Product 1"
              height={400}
              width={400}
              style={{ transition: "transform 0.2s", cursor: "pointer" }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          /> 
              </Link> 
            
            {/* In web development, onmouseover and onmouseout are JavaScript event handlers that are used to respond to mouse events. */}

            <h3 style={{ display: "flex", justifyContent: "center" ,padding:"10px",fontFamily: "YourChosenFont"}}>Mens</h3>
          </div>
        </section>

        <section id="women" style={{ margin: "20px" }}>
          <div class="product-card">
           <Link to="women"><img
              src="/images/categorywomen.avif"
              alt="Women's Product 1"
              height={400}
              width={400}
              style={{ transition: "transform 0.2s", cursor: "pointer" }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            />
            </Link> 
            <h3 style={{ display: "flex", justifyContent: "center" ,padding:"10px",fontFamily: "YourChosenFont"}}>
              Womens
            </h3>
          </div>
        </section>

        <section id="kids" style={{ margin: "20px" }}>
          <div class="product-card">
          <Link to="kids"> <img
              src="/images/kids.jpeg"
              alt="Kids' Product 1"
              height={400}
              width={400}
              style={{ transition: "transform 0.2s", cursor: "pointer" }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            />
            </Link> 
            <h3 style={{ display: "flex", justifyContent: "center",padding:"10px",fontFamily: "YourChosenFont" }}>Kids</h3>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Categories;
