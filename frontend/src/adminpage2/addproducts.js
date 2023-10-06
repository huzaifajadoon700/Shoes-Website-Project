import { useState } from 'react';
import './admin.css';
import Header from './header';
import Sidebar from './sidebar';
import { addproduct } from "../services/api";

function AddProducts() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    };
  
    const [productdata, setProductData] = useState({
        productName: "",
        productPrice: "",
        productDescription: "",
        productImage: null,
      });
    
      const [selectedFile, setSelectedFile] = useState(null);
    
      const handleChange = (e) => {
        setProductData({ ...productdata, [e.target.name]: e.target.value });
      };
    
      const handleImageChange = (e) => {
        setSelectedFile(e.target.files[0]);
      };
    
      const adddetails = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("productName", productdata.productName);
        formData.append("productPrice", productdata.productPrice);
        formData.append("productDescription", productdata.productDescription);
        formData.append("productImage", selectedFile);
    
        try {
          console.log("FormData:", formData);
          await addproduct(formData);
        } catch (error) {
          console.error("Error adding product:", error.message);
        }
      };
    
      
    return (
  <div >
  <div class="first-row" >
    <Header OpenSidebar={OpenSidebar}/>
  </div>
  
  <div class="second-row" >
    <div class="first-column">
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />  
    </div>
  
    <div
            className="second-column"
            style={{
              color: "black",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            
            <form className="form" style={{ marginLeft:"25px",marginTop:"15px" }}>
            <h1 >Add Products</h1>
              <label htmlFor="productName">Product Name:</label>
              <input
                type="text"
                id="productName"
                name="productName"
                onChange={(e) => handleChange(e)}
              />
              <br />
              <br />
              <label htmlFor="productDescription">Product Description:</label>
              <input
                type="text"
                id="productDescription"
                name="productDescription"
                onChange={(e) => handleChange(e)}
              />
              <br />
              <br />

              <label htmlFor="productPrice">Product Price:</label>
              <input
                type="number"
                id="productPrice"
                name="productPrice"
                onChange={(e) => handleChange(e)}
              />
              <br />
              <br />

              {/* <label htmlFor="productImage">Product Image:</label>
              <input
                type="file"
                id="productImage"
                name="productImage"
                accept="image/*"
                onChange={(e) => handlechange(e)}
              />
              <br />
              <br />
             */}
              <label htmlFor="productImage">Product Image </label>
              <input
                type="file"
                id="productImage"
                name="productImage"
                onChange={(e) => handleImageChange(e)}
              />
              <br />
              <br />
              <button onClick={adddetails} style={{ backgroundColor: "skyblue",borderRadius: "7px" }}> Add product</button>
            </form>
          </div>
        </div>
      
    </div>
 
    );
  }
  
  export default AddProducts;
  