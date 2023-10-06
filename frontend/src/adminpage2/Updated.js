import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './admin.css';
import Header from './header';
import Sidebar from './sidebar';

function Updated() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    };
  
    const [title, setTitle] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [productImage, setProductImage] = useState('');
    const params = useParams();
  
    useEffect(() => {
      setProduct();
    }, []);
  
    const setProduct = async () => {
      try {
        let result = await fetch(`http://localhost:8000/update/${params.productId}`);
        result = await result.json();
        setTitle(result.title);
        setBrand(result.description);
        setPrice(result.price);
        setProductImage(result.productImage);
      } catch (error) {
        console.error("Error fetching product:", error.message);
      }
    };
  
    const updateProduct = async () => {
      try {
        const updatedData = {
          title: title,
          description: brand,
          price: price,
        };
    
        const formData = new FormData();
        formData.append("title", updatedData.title);
        formData.append("description", updatedData.description);
        formData.append("price", updatedData.price);
        formData.append("productImage", productImage);
    
        let result = await fetch(`http://localhost:8000/update/${params.productId}`, {
          method: 'PUT',
          body: formData,
        });
    
        result = await result.json();
        if (result) {
          console.log("Product updated successfully!");
        }
      } catch (error) {
        console.error("Error updating product:", error.message);
      }
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
  
    <div
            className="second-column"
            
          >
            
            <form style={{ marginLeft:"25px",marginTop:"15px" }}>
   
            <h1 className="text-2xl font-semibold">Update</h1>

            <label >Your Title Here :</label>
            <input
              type="text"
              placeholder="Your Name Here"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ marginBottom: '20px' }}
            />

            <br />

            <label >Your Description Here :</label>
            <input
              type="text"
              placeholder="Your description Here"
              required
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              style={{ marginBottom: '20px' }}
            />

            <br />

            <label>Your price Here :</label>
            <input
              type="text"
              placeholder="Your price Here"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={{ marginBottom: '20px' }}
            />

            <br />

            <label >Product Image :</label>
            <input
              type="file"
              placeholder="Product Image"
              required
              onChange={(e) => setProductImage(e.target.files[0])}
              style={{ marginBottom: '20px' }}
            />

            <br />

            <button type="button" onClick={updateProduct} style={{ backgroundColor: "skyblue",borderRadius: "7px" }}>
              Update Product
            </button>
            </form>
          </div>
      
      </div>
      
    </div>
 
    );
  }
  
  export default Updated;
  