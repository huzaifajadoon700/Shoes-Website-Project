

import { useState } from 'react';
import './admin.css';
import Header from './header';
import Sidebar from './sidebar';

function Deleteproduct() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    };
  
    const [selectedProduct, setSelectedProduct] = useState("");

    const handleDelete = () => {
      // Handle the deletion of the selected product here
      console.log("Product selected for deletion:", selectedProduct);

    };
    return (
  <div >
  <div class="first-row" >
    <Header OpenSidebar={OpenSidebar}/>
  </div>
  
  <div class="second-row">
    <div class="first-column">
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />  
    </div>
  
    <div class="second-column">
      <h1 style={{ margin: "30px" }}>Delete Product</h1>
          <form style={{ margin: "30px" }} onSubmit={handleDelete}>
            <label htmlFor="productSelect">Select a Product to Delete:</label>
            <select
              id="productSelect"
              required
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
            >
              <option value="" disabled>
                Select a product to delete
              </option>
              <option value="product1">Product 1 - Men's Shoe</option>
              <option value="product2">Product 2 - Women's Shoe</option>
              <option value="product3">Product 3 - Kids' Shoe</option>
            </select>
            <br />
            <br />

            <input type="submit" value="Delete Product" />
          </form>
      
      </div>
      
    </div>
  </div>
    );
  }
  
  export default Deleteproduct;
  
  
  // import React, { useState } from 'react';
// import './admin.css';
// import Header from './header';
// import Sidebar from './sidebar';

// function Deleteproduct() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState("");

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   const handleDelete = async () => {
//     try {
//       const token = localStorage.getItem('authToken');
//       // Now, you can use the token in your delete request
//       console.log("Product selected for deletion:", selectedProduct);
//       // Call your delete function passing the token
//     } catch (error) {
//       console.error("Error deleting product:", error.message);
//     }
//   };

//   return (
//     <div>
//       <div className="first-row">
//         <Header OpenSidebar={OpenSidebar} />
//       </div>
//       <div className="second-row">
//         <div className="first-column">
//           <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//         </div>
//         <div className="second-column">
//           <h1 style={{ margin: "30px" }}>Delete Product</h1>
//           <form style={{ margin: "30px" }} onSubmit={handleDelete}>
//             <label htmlFor="productSelect">Select a Product to Delete:</label>
//             <select
//               id="productSelect"
//               required
//               value={selectedProduct}
//               onChange={(e) => setSelectedProduct(e.target.value)}
//             >
//               <option value="" disabled>
//                 Select a product to delete
//               </option>
//               <option value="product1">Product 1 - Men's Shoe</option>
//               <option value="product2">Product 2 - Women's Shoe</option>
//               <option value="product3">Product 3 - Kids' Shoe</option>
//             </select>
//             <br />
//             <br />
//             <input type="submit" value="Delete Product" />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Deleteproduct;
