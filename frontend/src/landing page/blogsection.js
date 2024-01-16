import Navbar from "./navbar";

function Blogsection(){

return(
  
    <div style={{backgroundColor:"grey",marginTop:"-8px",height:"650px",alignItems:"center"}} >
      <Navbar/>
    <h2 style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px",color:"white",fontFamily: "YourChosenFont"}}>Blogs</h2>
    <div className="container" style={{display:"flex",justifyContent:"center"}}>
        
<div class="card" style={{width: "18rem",color:"white",backgroundColor:"black"}}>
  <img src="/images/bo5.webp" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h4 style={{fontFamily: "YourChosenFont"}}>Cara shoes - Pakistan Top brand</h4>
    <p class="card-text"style={{fontFamily: "YourChosenFont"}}>Metro Shoes, a native Pakistani business, was started in 1986 and continues to provide fantastic, high-quality footwear to this day. They've established themselves as one of the best footwear brands in the country, Readmore...</p>
  </div>
</div>

<div class="card" style={{width: "18rem",color:"white",backgroundColor:"black"}}>
  <img src="/images/banner2.jpeg" class="card-img-top" alt="..."/>
  <div class="card-body">
  <h4 style={{fontFamily: "YourChosenFont"}} >Cara shoes - Style With Substance</h4>
    <p class="card-text"style={{fontFamily: "YourChosenFont"}}>Metro Shoes is always introducing new arrivals in both men's and women's shoe collections, each with their own individual styles and designs that appeal to a wide range of markets and audiences.  Readmore... </p>
  </div>
</div>

<div class="card" style={{width: "18rem",color:"white",backgroundColor:"black"}}>
  <img src="/images/bo3.jpeg" class="card-img-top" alt="..."/>
  <div class="card-body">
  <h4 style={{fontFamily: "YourChosenFont"}}>Comfort and Style in One Package</h4>
    <p class="card-text"style={{fontFamily: "YourChosenFont"}}>Metro Shoes' new arrivals always deliver a fresh new assortment of footwear, purses, and clutches that are ideal for the season. The designs and fashions are always contemporary, keeping up with and of high quality.Readmore... </p>
  </div>
</div>
</div>
    </div>
)
}
export default Blogsection;