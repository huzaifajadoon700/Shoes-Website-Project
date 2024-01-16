import React, { useEffect, useState } from "react";
import "./admin.css";
import Header from "./header";
import Sidebar from "./sidebar";
import { getshoes, deleteShoe, updateShoe } from "../services/api";
import { Link } from "react-router-dom";

function View() {
 
  const [productsdata, setProductsData] = useState([]);

  useEffect(() => {
    getProductsDetails();
  }, []);

  const getProductsDetails = async () => {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem('authToken');

      const result = await getshoes(token); // Pass the token to the service
      setProductsData(result.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem('authToken');

      await deleteShoe(productId, token); // Pass the token to the service

      console.log("Product deleted successfully!");
      // Remove the deleted product from the state
      setProductsData((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <div className="first-row">
        <Header  />
      </div>

      <div className="second-row">
        <div className="first-column">
          <Sidebar
          />
        </div>

        <div
          className="second-column"
          style={{ color: "black", overflowY: "auto", maxHeight: "100000px" }}
        >
          <h1 style={{ margin: "10px" }}>View Products</h1>
          <table style={{ margin: "20px", width: "100%" }}>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {productsdata.map((details) => (
                <tr key={details._id}>
                  <td style={{ padding: "-30px" }}>{details.title}</td>
                  <td>{details.price}</td>
                  <td>{details.description}</td>
                  <td>
                    <img
                      style={{ maxWidth: "50px", maxHeight: "50px" }}
                      src={`http://localhost:8000/${details.productImage}`}
                      alt={`Product ${details.title}`}
                    />
                  </td>
                  <td>
                    <Link to={`/updateproducts/${details._id}`}>
                      <button style={{ backgroundColor: "orange", borderRadius: "7px" }}>
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(details._id)}
                      style={{ backgroundColor: "orange", borderRadius: "7px", marginLeft: "10px" }}
                    >
                      Delete Product
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default View;



// import React, { useEffect, useState } from "react";
// import "./admin.css";
// import Header from "./header";
// import Sidebar from "./sidebar";
// import { getshoes, deleteShoe, updateShoe } from "../services/api";
// import { Link } from "react-router-dom";

// function View() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   const [productsdata, setproductsdata] = useState([]);

//   useEffect(() => {
//     getproductdetails();
//   }, []);

//   const getproductdetails = async () => {
//     try {
//       const result = await getshoes();
//       setproductsdata(result.data);
//     } catch (error) {
//       console.error("Error fetching product details:", error);
//     }
//   };

//   const handleDelete = async (productId) => {
//     try {
//       await deleteShoe(productId);
//       console.log("Product deleted successfully!");
//       // Remove the deleted product from the state
//       setproductsdata((prevProducts) =>
//         prevProducts.filter((product) => product._id !== productId)
//       );
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };
  
//   return (
//     <div>
//       <div class="first-row">
//         <Header OpenSidebar={OpenSidebar} />
//       </div>

//       <div class="second-row">
//         <div class="first-column">
//           <Sidebar
//             openSidebarToggle={openSidebarToggle}
//             OpenSidebar={OpenSidebar}
//           />
//         </div>

//         <div
//           className="second-column"
//           style={{ color: "black", overflowY: "auto", maxHeight: "100000px" }}
//         >
//           <h1 style={{ margin: "10px" }}>View Products</h1>
//           <table style={{ margin: "20px", width: "100%" }}>
//             <thead>
//               <tr>
//                 <th>Product Name</th>
//                 <th>Price</th>
//                 <th>Description</th>
//                 <th>Image</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {productsdata.map((details) => (
//                 <tr key={details._id}>
//                   <td style={{ padding: "-30px" }}>{details.title}</td>
//                   <td>{details.price}</td>
//                   <td>{details.description}</td>
//                   <td>
//                     <img
//                       style={{ maxWidth: "50px", maxHeight: "50px" }}
//                       src={`http://localhost:8000/${details.productImage}`}
//                       alt={`Product ${details.title}`}
//                     />
//                   </td>
//                   <td>
//                     <Link to={`/updateproducts/${details._id}`}>
//                       <button style={{ backgroundColor: "orange",borderRadius: "7px" }}>
//                         Update
//                       </button>
//                     </Link>
//                     <button
//                       onClick={() => handleDelete(details._id)}
//                       style={{ backgroundColor: "orange", borderRadius: "7px",marginLeft:"10px" }}
//                     >
//                       Delete Product
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default View;
