import Footersec from "./footer/Footersec";
import Navbar from "./navbar";
import { useContext, useState, useEffect } from "react";
import { Items } from "../App";
function Kids() {
  const { names, setvalue, cartx, setCartx } = useContext(Items);
  const cardGroups = [
    [
      {
        id: 1,
        image: "/images/kids/1.jpg",
        title: "Ultraboost 1.0 shoes",
        price: 120,
      },
      {
        id: 2,
        image: "/images/Kids/2.jpg",
        title: "Ultraboost 1.0 shoes",
        price: 120,
      },
      {
        id: 3,
        image: "/images/Kids/2.webp",
        title: "Ultraboost 1.0 shoes",
        price: 120,
      },
    ],
    [
      {
        id: 4,
        image: "/images/Kids/3.webp",
        title: "Ultraboost 1.0 shoes",
        price: 120,
      },
      {
        id: 4,
        image: "/images/Kids/4.webp",
        title: "Ultraboost 1.0 shoes",
        price: 120,
      },
      {
        id: 4,
        image: "/images/Kids/5.webp",
        title: "Ultraboost 1.0 shoes",
        price: 120,
      },
    ],
    [
      {
        id: 7,
        image: "/images/Kids/6.webp",
        title: "Ultraboost 1.0 shoes",
        price: 120,
      },
      {
        id: 7,
        image: "/images/Kids/7.webp",
        title: "Ultraboost 1.0 shoes",
        price: 120,
      },
      {
        id: 7,
        image: "/images/Kids/8.webp",
        title: "Ultraboost 1.0 shoes",
        price: 120,
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
  return (
    <div>
      <Navbar />
      
      <div >
        
        <h1
          style={{
            marginTop:"70px",
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          Kids
        </h1>

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
        <Footersec />
      </div>
    </div>
  );
}
export default Kids;
