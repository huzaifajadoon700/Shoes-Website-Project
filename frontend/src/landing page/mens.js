import Footersec from "./footer/Footersec";
import Navbar from "./navbar";
import { useContext, useState,useRef, useEffect } from "react";
import { Items } from "../App";
import "./bgvideo.css";
function Mens() {
  const { names, setvalue, cartx, setCartx } = useContext(Items);
  const cardGroups = [
    [
      {
        id: 1,
        image: "/images/mens/1shoe.avif",
        title: "Ultraboost 1.0 shoes",
        price: 120,
      },
      {
        id: 2,
        image: "/images/mens/2.avif",
        title: "Nmd_R1-V2 Shoes",
        price: 150,
      },
      {
        id: 3,
        image: "/images/mens/3.avif",
        title: "Purehustle Shoes",
        price: 100,
      },
    ],
    [
      {
        id: 4,
        image: "/images/mens/4.avif",
        title: "Plr boost Shoes",
        price: 90,
      },
      {
        id: 5,
        image: "/images/mens/5.avif",
        title: "Retrophy E5 Shoes",
        price: 130,
      },
      {
        id: 6,
        image: "/images/mens/6.avif",
        title: "Alphaboost V1 Shoes",
        price: 200,
      },
    ],
    [
      {
        id: 7,
        image: "/images/mens/7.avif",
        title: "Crazy Fight Shoes",
        price: 250,
      },
      {
        id: 8,
        image: "/images/mens/8.avif",
        title: "Pureboost 23 Running Shoes",
        price: 170,
      },
      {
        id: 9,
        image: "/images/mens/9.avif",
        title: "Ultraboost Running Shoes",
        price: 125,
      },
    ],
  ];

  const carthandle = (id, title, pic, price) => {
    const selectedItem = cardGroups.flat().find((item) => item.id === id);
    setvalue(names + 1);

    const itemnew = {
      id: id,
      title: title,
      pic: pic,
      price: price,
      qun: 1,
    };
    setCartx([...cartx, itemnew]);
    if (selectedItem) {
    }
  };

  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play(); // Automatically plays the video
    }
  }, []);

  return (
    <div style={{  backgroundColor:"black" }}>
      <Navbar />
      <div style={{  marginTop:"60px", }}>
      <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            color:"white",
            padding:"10px"
          }}
        >
          Mens
        </h1>
        {/* <div style={{display:"flex",justifyContent:"center"}}><img src="/images/mens/bg2.jpeg" /></div> */}
        <div style={{display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',}}>
        <video ref={videoRef} autoPlay loop muted width="600" height="450"  >
          <source src="/images/mens/vid1.mp4" type="video/mp4"  />
        </video>
        </div>
        
        

        {cardGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="row">
            {group.map((card) => (
              <div key={card.id} className="col-md-4">
                <div className="card">
                  <img
                    src={card.image}
                    className="card-img-top"
                    alt={card.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.price}$</p>
                    <button
                      className="btn btn-dark"
                      onClick={() => {
                        carthandle(card.id, card.title, card.image, card.price);
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
        <div style={{padding:"30px"}}> <Footersec /></div>
       
      </div>
    </div>
  );
}
export default Mens;
