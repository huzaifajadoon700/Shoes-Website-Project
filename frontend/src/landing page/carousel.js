import React, { useContext, useEffect, useState } from "react";
import { Items } from "../App";

function Carousel() {
  const { names, setvalue, cartx, setCartx } = useContext(Items);
  const [quantity, setQuantity] = useState(1);
  const [datadb, setdatadb] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("http://localhost:8000/viewproducts");
        const data = await result.json();
        setdatadb(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const itemsPerPage = 3;

  const renderCarouselItems = () => {
    const totalItems = datadb.length;
    const totalSlides = Math.ceil(totalItems / itemsPerPage);

    const carouselItems = [];
    for (let i = 0; i < totalSlides; i++) {
      const start = i * itemsPerPage;
      const end = start + itemsPerPage;
      const itemsInSlide = datadb.slice(start, end);

      carouselItems.push(
        <div
          className={`carousel-item ${i === 0 ? "active" : ""}`}
          key={i}
        >
          <div className="cards-wrapper">
            {itemsInSlide.map((card) => (
              <div className="card" style={{ width: "20rem" }} key={card.id}>
                <img
                  src={`http://localhost:8000/${card.productImage}`}
                  alt={card.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">Price: {card.price}$</p>
                  <div className="d-flex align-items-center mb-2">
                    <span className="me-2">Quantity:</span>
                    <button
                      className="btn btn-outline-secondary me-2"
                      onClick={() =>
                        setQuantity(Math.max(quantity - 1, 1))
                      }
                    >
                      -
                    </button>
                    <span className="me-2">{quantity}</span>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn btn-dark mt-2"
                    onClick={() => {
                      carthandle(
                        card.id,
                        card.title,
                        card.productImage,
                        card.price
                      );
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return carouselItems;
  };

  const carthandle = (id, title, pic, price) => {
    const selectedItem = datadb.find((item) => item.id === id);
    setvalue(names + 1);

    const itemnew = {
      id: id,
      title: title,
      pic: pic,
      price: price,
      qun: quantity,
    };
    setCartx([...cartx, itemnew]);
    if (selectedItem) {
      // Do something with selectedItem if needed
    }
  };

  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <h1
            id="heading"
            style={{ fontFamily: "ubuntu", fontWeight: "bold" }}
          >
            Welcome To My Shop
          </h1>
          {renderCarouselItems()}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;


// the updated code without the use of array

// import React, { useContext, useState, useEffect } from "react";
// import { Items } from "../App";

// function Carousel() {
//   const { names, setvalue, cartx, setCartx } = useContext(Items);
//   const [selectedSize, setSelectedSize] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [productsData, setProductsData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:8000/viewproducts");
//         const data = await response.json();
//         console.log("Fetched Products Data:", data);
//         setProductsData(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const carthandle = (id, title, pic, price) => {
//     setvalue(names + 1);

//     if (!selectedSize) {
//       alert("Please select a size");
//       return;
//     }

//     const itemnew = {
//       id: id,
//       title: title,
//       pic: pic,
//       price: price,
//       size: selectedSize,
//       qun: quantity,
//     };

//     setCartx([...cartx, itemnew]);
//   };

//   return (
//     <div>
//       <div
//         id="carouselExampleInterval"
//         className="carousel slide"
//         data-bs-ride="carousel"
//       >
//         <div className="carousel-inner">
//           <h1
//             id="heading"
//             style={{ fontFamily: "ubuntu", fontWeight: "bold" }}
//           >
//             Welcome To My Shop
//           </h1>

//           {Array.isArray(productsData) && productsData.length > 0 ? (
//             productsData.map((product, index) => (
//               <div
//                 className={`carousel-item ${index === 0 ? "active" : ""}`}
//                 data-bs-interval="10000"
//                 key={index}
//               >
//                 <div className="cards-wrapper">
//                   <div className="card" style={{ width: "20rem" }} key={product._id}>
//                     <img src={product.productImageUrl} alt={product.title} />
//                     <div className="card-body">
//                       <h5 className="card-title">{product.title}</h5>
//                       <p className="card-text">Price: {product.price}$</p>
//                       <div className="d-flex align-items-center mb-2">
//                         <span className="me-2">Size:</span>
//                         {product.sizes &&
//                           product.sizes.map((size) => (
//                             <button
//                               key={size}
//                               className={`btn btn-outline-secondary me-2 ${
//                                 selectedSize === size ? "active" : ""
//                               }`}
//                               onClick={() => setSelectedSize(size)}
//                             >
//                               {size}
//                             </button>
//                           ))}
//                       </div>
//                       <div className="d-flex align-items-center mb-2">
//                         <span className="me-2">Quantity:</span>
//                         <button
//                           className="btn btn-outline-secondary me-2"
//                           onClick={() =>
//                             setQuantity(Math.max(quantity - 1, 1))
//                           }
//                         >
//                           -
//                         </button>
//                         <span className="me-2">{quantity}</span>
//                         <button
//                           className="btn btn-outline-secondary"
//                           onClick={() => setQuantity(quantity + 1)}
//                         >
//                           +
//                         </button>
//                       </div>
//                       <button
//                         className="btn btn-dark mt-2"
//                         onClick={() => {
//                           carthandle(
//                             product._id,
//                             product.title,
//                             product.productImageUrl,
//                             product.price
//                           );
//                         }}
//                       >
//                         Add to cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div>No products available</div>
//           )}
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleInterval"
//           data-bs-slide="prev"
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleInterval"
//           data-bs-slide="next"
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Carousel;